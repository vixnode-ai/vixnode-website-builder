import { approach, cameraPresets, chapterProgress, qualityProfile, sampleCamera, validateCameraKeys } from './immersive-math.js';
import { buildScene, disposeObject } from './immersive-scene.js';

const instances = new WeakMap();

export function mountImmersive(root, options = {}) {
  if (!root || !root.querySelector) throw new Error('An immersive root element is required.');
  instances.get(root)?.destroy();
  const viewport = root.querySelector('[data-scene-viewport]');
  const chapters = [...root.querySelectorAll('[data-scene-chapter]')];
  const toggle = root.querySelector('[data-scene-toggle]');
  const status = root.querySelector('[data-scene-status]');
  if (!viewport || chapters.length < 2) throw new Error('A viewport and at least two semantic chapters are required.');
  const variant = options.variant ?? 'weave';
  root.dataset.sceneVariant = variant;
  if (!cameraPresets[variant]) throw new Error('Unknown scene variant.');
  if (options.loadAsset && variant !== 'product') throw new Error('The model adapter supports product mode; authored scene adapters are required for other modes.');
  const keys = validateCameraKeys(options.cameraKeys ?? cameraPresets[variant]);
  const labels = { enable: 'Enable 3D', text: 'View text version', ready: '3D view available',
    loading: 'Loading 3D view', fallback: 'Text view available', reduced: 'Reduced-motion text view', ...options.labels };
  const colors = { background: '#090E18', accent: '#D5AF72', ...options.colors };
  const events = new AbortController();
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  const compact = window.matchMedia('(max-width: 640px)');
  let enabled = !compact.matches && !media.matches && options.autoStart !== false;
  let destroyed = false, generation = 0, renderer = null, world = null, camera = null;
  let frame = 0, lastTime = 0, current = 0, target = 0, stops = [], visible = true;
  let loadController = null, state = 'static', frames = 0;
  let activeIndex = -1;
  const cleanups = [];

  function report(next, reason = '') {
    state = next;
    root.dataset.sceneState = next;
    root.dataset.sceneReason = reason;
    if (status) status.textContent = next === 'ready' ? labels.ready : next === 'loading' ? labels.loading : media.matches ? labels.reduced : labels.fallback;
    if (toggle) {
      toggle.hidden = false;
      toggle.textContent = media.matches ? labels.reduced : enabled && (next === 'ready' || next === 'loading') ? labels.text : labels.enable;
      toggle.setAttribute('aria-pressed', String(enabled && next === 'ready'));
      toggle.disabled = media.matches;
    }
    root.dispatchEvent(new CustomEvent('immersive-state', { detail: { state: next, reason } }));
  }

  function release() {
    cancelAnimationFrame(frame); frame = 0;
    loadController?.abort(); loadController = null;
    const old = renderer;
    renderer = null;
    world?.dispose(); world = null; camera = null;
    if (old) {
      old.dispose();
      old.forceContextLoss();
      old.domElement.remove();
    }
    while (cleanups.length) cleanups.pop()();
  }

  function fallback(reason) {
    generation++;
    enabled = false;
    release();
    if (!destroyed) report('fallback', reason);
  }

  function updateProgress() {
    target = chapterProgress(window.scrollY, stops);
    const index = Math.round(target * (chapters.length - 1));
    if (index !== activeIndex) {
      activeIndex = index;
      root.querySelectorAll('[data-scene-link]').forEach(link => {
        if (link.getAttribute('href') === '#' + chapters[index].id) link.setAttribute('aria-current', 'step');
        else link.removeAttribute('aria-current');
      });
      root.dataset.sceneActiveChapter = String(index + 1);
    }
    root.style.setProperty('--scene-progress', String(target));
    requestFrame();
  }

  function measure() {
    stops = chapters.map(chapter => chapter.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.2);
    if (renderer && camera) {
      const width = Math.max(1, viewport.clientWidth), height = Math.max(1, viewport.clientHeight);
      const quality = qualityProfile(compact.matches, window.devicePixelRatio);
      renderer.setPixelRatio(quality.dpr);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    updateProgress();
  }

  function requestFrame() {
    if (!destroyed && renderer && visible && !document.hidden && !frame) frame = requestAnimationFrame(draw);
  }

  function draw(time) {
    frame = 0;
    if (!renderer || destroyed || !visible || document.hidden) return;
    current = approach(current, target, lastTime ? (time - lastTime) / 1000 : 1 / 60);
    lastTime = time;
    if (Math.abs(current - target) < 0.0001) current = target;
    const pose = sampleCamera(keys, current);
    camera.position.set(...pose.position);
    camera.lookAt(...pose.target);
    world.update(current);
    try { renderer.render(world.scene, camera); }
    catch { fallback('render-failed'); return; }
    if (!renderer) return;
    frames++;
    root.dataset.sceneFrames = String(frames);
    root.dataset.sceneDrawCalls = String(renderer.info.render.calls);
    root.dataset.sceneTriangles = String(renderer.info.render.triangles);
    if (Math.abs(current - target) >= 0.0001) requestFrame();
  }

  async function start() {
    const ticket = ++generation;
    release();
    if (destroyed || !enabled || media.matches) { report('static', media.matches ? 'reduced-motion' : 'text-selected'); return; }
    loadController = new AbortController();
    const signal = loadController.signal;
    report('loading');
    const timeout = setTimeout(() => { if (ticket === generation) fallback('load-timeout'); }, options.timeoutMs ?? 8000);
    try {
      const THREE = await options.loadEngine?.();
      if (ticket !== generation || signal.aborted || destroyed) return;
      if (!THREE?.WebGLRenderer) throw new Error('A Three.js engine loader is required.');
      const quality = qualityProfile(compact.matches, window.devicePixelRatio);
      const canvas = document.createElement('canvas');
      canvas.setAttribute('aria-hidden', 'true');
      canvas.dataset.sceneCanvas = '';
      const lost = event => { event.preventDefault(); if (!destroyed && renderer?.domElement === canvas) fallback('context-lost'); };
      canvas.addEventListener('webglcontextlost', lost);
      cleanups.push(() => canvas.removeEventListener('webglcontextlost', lost));
      renderer = new THREE.WebGLRenderer({ canvas, antialias: quality.tier === 'standard', powerPreference: 'low-power' });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      camera = new THREE.PerspectiveCamera(45, 1, 0.1, 70);
      world = buildScene(THREE, variant, quality, colors);
      if (options.loadAsset) {
        const model = await options.loadAsset({ THREE, signal });
        if (ticket !== generation || signal.aborted || destroyed) { disposeObject(model); return; }
        try { world.replaceWithModel(model); }
        catch (error) { disposeObject(model); throw error; }
      }
      if (ticket !== generation || destroyed || signal.aborted) return;
      viewport.append(canvas);
      current = target;
      report('ready');
      measure();
    } catch {
      if (ticket === generation && !destroyed) fallback('load-or-webgl-failed');
    } finally { clearTimeout(timeout); }
  }

  const on = (node, type, handler, extra = {}) => node.addEventListener(type, handler, { signal: events.signal, ...extra });
  on(window, 'scroll', updateProgress, { passive: true });
  on(window, 'resize', measure, { passive: true });
  on(document, 'visibilitychange', () => {
    lastTime = 0;
    if (document.hidden) { cancelAnimationFrame(frame); frame = 0; } else { measure(); requestFrame(); }
  });
  if (toggle) on(toggle, 'click', () => { enabled = !enabled; start(); });
  const motionChange = () => { if (media.matches) { enabled = false; start(); } else report('static', 'motion-preference-changed'); };
  media.addEventListener('change', motionChange);
  const observer = new ResizeObserver(measure);
  observer.observe(root); observer.observe(viewport); chapters.forEach(chapter => observer.observe(chapter));
  const intersection = new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    lastTime = 0;
    if (!visible) { cancelAnimationFrame(frame); frame = 0; } else requestFrame();
  });
  intersection.observe(root);
  on(window, 'pagehide', () => { enabled = false; start(); });
  const api = {
    refresh: measure,
    destroy() {
      if (destroyed) return;
      destroyed = true; generation++;
      events.abort(); media.removeEventListener('change', motionChange);
      observer.disconnect(); intersection.disconnect();
      release(); root.dataset.sceneState = 'destroyed';
      instances.delete(root);
    }
  };
  instances.set(root, api);
  measure(); start();
  return api;
}

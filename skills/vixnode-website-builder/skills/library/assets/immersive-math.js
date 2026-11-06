// Dependency-free scene math. Normalized progress is independent of frame rate.
export const clamp01 = value => Math.min(1, Math.max(0, Number.isFinite(value) ? value : 0));

export function chapterProgress(scroll, stops) {
  if (stops.length < 2 || scroll <= stops[0]) return 0;
  if (scroll >= stops.at(-1)) return 1;
  const index = stops.findIndex((stop, i) => i > 0 && scroll < stop) - 1;
  const span = stops[index + 1] - stops[index];
  return clamp01((index + (span > 0 ? (scroll - stops[index]) / span : 0)) / (stops.length - 1));
}

export function validateCameraKeys(keys) {
  if (!Array.isArray(keys) || keys.length < 2 || keys[0].at !== 0 || keys.at(-1).at !== 1)
    throw new Error('Camera keys must cover normalized progress 0 through 1.');
  keys.forEach((key, i) => {
    if (!Number.isFinite(key.at) || (i && key.at <= keys[i - 1].at)) throw new Error('Camera keys must increase.');
    for (const field of ['position', 'target'])
      if (!Array.isArray(key[field]) || key[field].length !== 3 || !key[field].every(Number.isFinite))
        throw new Error('Camera vectors require three finite coordinates.');
    if (Math.hypot(...key.position.map((v, n) => v - key.target[n])) < 0.01)
      throw new Error('Camera position and target must differ.');
  });
  return keys;
}

export function sampleCamera(keys, progress) {
  const p = clamp01(progress);
  if (p === 0 || p === 1) {
    const key = p === 0 ? keys[0] : keys.at(-1);
    return { position: [...key.position], target: [...key.target] };
  }
  let index = keys.findIndex((key, i) => i > 0 && key.at >= p) - 1;
  index = Math.max(0, index);
  const a = keys[index], b = keys[index + 1];
  const t = clamp01((p - a.at) / (b.at - a.at));
  const eased = t * t * (3 - 2 * t);
  const mix = field => a[field].map((value, n) => value + (b[field][n] - value) * eased);
  return { position: mix('position'), target: mix('target') };
}

export function approach(current, target, elapsedSeconds, rate = 10) {
  return current + (target - current) * (1 - Math.exp(-rate * Math.min(0.1, Math.max(0, elapsedSeconds))));
}

export function qualityProfile(compact, devicePixelRatio = 1) {
  return { tier: compact ? 'low' : 'standard', dpr: Math.min(Math.max(1, devicePixelRatio), compact ? 1 : 1.5),
    particles: compact ? 120 : 480, radialSegments: compact ? 24 : 48 };
}

export const cameraPresets = {
  weave: [
    { at: 0, position: [0, 0, 9], target: [0, 0, 0] },
    { at: 0.5, position: [0.5, 0.2, 1], target: [1, 0, -8] },
    { at: 1, position: [-0.6, 0.4, -7], target: [0, 0, -16] }
  ],
  journey: [
    { at: 0, position: [0, 0, 8], target: [1.5, 0, 0] },
    { at: 0.5, position: [0.8, 0.3, 0], target: [1.5, 0, -8] },
    { at: 1, position: [-0.5, 0.2, -8], target: [1.5, 0, -16] }
  ],
  product: [
    { at: 0, position: [0, 0.4, 8], target: [1.5, 0, 0] },
    { at: 0.5, position: [6, 2.5, 6], target: [1.5, 0, 0] },
    { at: 1, position: [-3, 1.5, 6], target: [1.5, 0, 0] }
  ],
  exploded: [
    { at: 0, position: [0, 1.4, 9], target: [1.5, 0, 0] },
    { at: 0.5, position: [4, 2.5, 10], target: [1.5, 0, 0] },
    { at: 1, position: [0, 1, 10], target: [1.5, 0, 0] }
  ]
};

// Three.js is injected by the host. This asset does not download dependencies.
export function disposeObject(root) {
  const geometries = new Set(), materials = new Set(), textures = new Set(), bitmaps = new Set(), skeletons = new Set();
  root?.traverse(object => {
    if (object.geometry) geometries.add(object.geometry);
    if (object.skeleton) skeletons.add(object.skeleton);
    for (const material of (Array.isArray(object.material) ? object.material : [object.material])) {
      if (!material) continue;
      materials.add(material);
      for (const value of Object.values(material)) if (value?.isTexture) textures.add(value);
      for (const uniform of Object.values(material.uniforms ?? {})) if (uniform.value?.isTexture) textures.add(uniform.value);
    }
  });
  for (const texture of textures) {
    if (texture.image?.close) bitmaps.add(texture.image);
    texture.dispose();
  }
  for (const bitmap of bitmaps) bitmap.close();
  for (const geometry of geometries) geometry.dispose();
  for (const material of materials) material.dispose();
  for (const skeleton of skeletons) skeleton.dispose();
}

export function buildScene(THREE, variant, quality, colors) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(colors.background);
  scene.fog = new THREE.Fog(colors.background, 14, 42);
  scene.add(new THREE.HemisphereLight(0xe7f3ff, 0x14101f, 2.2));
  const key = new THREE.DirectionalLight(0xffdc9d, 3.2);
  key.position.set(4, 5, 6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x74c9cc, 2.8);
  rim.position.set(-4, 1, -6);
  scene.add(rim);
  const group = new THREE.Group();
  group.position.x = 1.5;
  scene.add(group);
  const material = new THREE.MeshStandardMaterial({ color: colors.accent, roughness: 0.3, metalness: 0.55 });
  const parts = [];
  if (variant === 'weave') {
    group.position.x = 0;
    const anchors = [[-7, 3, 2], [-1, 2.1, -2], [4, 0.8, -5], [3, -2.4, -9], [-4, -1.6, -13], [-1, 2, -17], [6, 1, -22]];
    for (let i = 0; i < 4; i++) {
      const curve = new THREE.CatmullRomCurve3(anchors.map(([x, y, z]) => new THREE.Vector3(x + i * 0.16, y + i * 0.13, z)));
      const lineMaterial = new THREE.MeshBasicMaterial({ color: i % 2 ? (colors.secondary ?? '#61A9A5') : colors.accent, transparent: true, opacity: 0.75 - i * 0.1 });
      const line = new THREE.Mesh(new THREE.TubeGeometry(curve, quality.radialSegments * 3, 0.012, 4, false), lineMaterial);
      line.userData.role = 'flow-line'; group.add(line);
    }
    for (let i = 0; i < 6; i++) {
      const frameGroup = new THREE.Group();
      frameGroup.position.set(i % 2 ? -3.2 : 3.4, i % 2 ? 0.7 : -0.5, -i * 3.5);
      frameGroup.rotation.set(0.14 * i, i % 2 ? -0.5 : 0.35, i % 2 ? -0.12 : 0.16);
      const plane = new THREE.PlaneGeometry(3.8, 4.8);
      const frame = new THREE.LineSegments(new THREE.EdgesGeometry(plane), new THREE.LineBasicMaterial({ color: colors.secondary ?? '#61A9A5', transparent: true, opacity: 0.38 }));
      frame.userData.role = 'spatial-frame'; frameGroup.add(frame);
      const surface = new THREE.Mesh(plane, new THREE.MeshBasicMaterial({ color: colors.secondary ?? '#61A9A5', transparent: true, opacity: 0.025, side: THREE.DoubleSide, depthWrite: false }));
      surface.userData.role = 'depth-plane'; frameGroup.add(surface);
      group.add(frameGroup);
    }
  } else if (variant === 'journey') {
    for (let chapter = 0; chapter < 3; chapter++) {
      const portal = new THREE.Group();
      portal.position.z = -chapter * 8;
      for (let ring = 0; ring < 3; ring++) {
        const mesh = new THREE.Mesh(new THREE.TorusGeometry(2.3 + ring * 0.18, 0.035, 8, quality.radialSegments), material);
        mesh.rotation.set(ring * 0.3, ring * 0.2, chapter * 0.4);
        mesh.position.z = -ring * 0.35;
        portal.add(mesh);
      }
      group.add(portal);
    }
  } else if (variant === 'product') {
    const mesh = new THREE.Mesh(new THREE.TorusKnotGeometry(1.25, 0.3, quality.radialSegments * 2, 10), material);
    mesh.rotation.x = 0.3;
    group.add(mesh);
    parts.push(mesh);
  } else {
    for (let i = 0; i < 5; i++) {
      const mesh = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.32, quality.radialSegments), material);
      mesh.position.y = (i - 2) * 0.36;
      group.add(mesh);
      parts.push(mesh);
    }
  }
  if (variant === 'weave') material.dispose();
  // Seeded decoration: one draw call, no per-particle event listeners or idle loop.
  const positions = new Float32Array((variant === 'weave' ? 0 : quality.particles) * 3);
  let seed = 7531;
  const random = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  for (let i = 0; i < positions.length; i += 3) {
    positions[i] = (random() - 0.5) * 20;
    positions[i + 1] = (random() - 0.5) * 14;
    positions[i + 2] = 4 - random() * 32;
  }
  const dustGeometry = new THREE.BufferGeometry();
  dustGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  if (positions.length) scene.add(new THREE.Points(dustGeometry, new THREE.PointsMaterial({ color: colors.accent, size: 0.035, transparent: true, opacity: 0.55 })));
  else dustGeometry.dispose();
  return {
    scene, group,
    update(progress) {
      if (variant === 'product') group.rotation.y = progress * Math.PI * 0.7;
      if (variant === 'exploded') parts.forEach((part, i) => { part.position.y = (i - 2) * (0.36 + progress * 0.65); });
    },
    replaceWithModel(model) {
      disposeObject(group);
      group.clear();
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      if (!Number.isFinite(size.length()) || size.length() === 0) throw new Error('Model has no finite bounds.');
      model.position.sub(center);
      const container = new THREE.Group();
      container.add(model);
      container.scale.setScalar(3.2 / Math.max(size.x, size.y, size.z));
      group.add(container);
      // Product rotation remains valid. Arbitrary GLB parts need named authored explosion offsets.
      parts.length = 0;
    },
    dispose() { disposeObject(scene); }
  };
}

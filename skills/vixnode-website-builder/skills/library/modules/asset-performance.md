# 3D Assets, Lighting and Performance

## Actual Starter Budgets

| Item | Standard tier | Compact/opt-in tier |
| --- | --- | --- |
| Backing pixel ratio | Device DPR capped at 1.5 | Device DPR capped at 1 |
| Particle count | 480 points, one draw call | 120 points, one draw call |
| Radial segments | 48 | 24 |
| Dynamic shadows / postprocessing | Off | Off |
| Continuous idle animation | Off | Off |
| Engine/model readiness timeout | 8 seconds, configurable | Same; initial screen remains static |

These are starting budgets, not universal device performance guarantees. Runtime quality is selected by viewport at mount, not a GPU benchmark. DPR updates on resize; changing geometry tier requires remounting. Avoid making inaccurate claims of automatic adaptive FPS quality.

For a generated scene start with <=40 draw calls, <=100k visible triangles, <=4 MiB embedded model bytes, <=8 textures and <=2048px per texture dimension. The starter's procedural scene is smaller. Model/texture limits are checked in the adapter after parsing where necessary; decoded peak CPU/GPU memory is not bounded solely by file size. Inspect and optimize real assets before publication.

The `weave` composition intentionally has no particle field. Four flow paths, six line frames and six faint planes use a restrained draw-call budget and normal-scroll camera movement. Choose density/colors with the whole page; metallic objects and particles are not universal design requirements.

## Materials and Lighting

The starter uses MeshStandardMaterial, roughness 0.3, metalness 0.55, a hemisphere fill and two directional lights. Tone mapping is ACES filmic; output is sRGB. Fog controls distant scene depth. These values suit the illustrative metallic forms, not every product. Resolve actual material values from supplied product evidence and match approved brand colors in surrounding HTML.

Do not treat a shader-lit pixel as an exact brand HEX swatch. Keep copy and controls on verified semantic surfaces. Avoid expensive transmissive materials, large HDR maps, real-time shadow maps and bloom unless they support the concept and fit measured target-device performance.

## Model Adapter

Read [gltf-asset.js](../assets/gltf-asset.js). Supply a matching r180 GLTFLoader from an approved local bundle/import map, an actual asset URL and byte budget:

```js
const loadAsset = createGltfAssetLoader({ GLTFLoader, url: actualModelUrl, maxBytes: 4 * 1024 * 1024 });
const controller = mountImmersive(root, {
  variant: 'product', loadEngine: () => import('three'), loadAsset
});
```

The adapter streams the response with an abort signal, rejects declared or actual byte overflow, checks GLB v2 structure and rejects external buffer/image URIs. Embedded data URIs are permitted within the same file budget. It rejects Draco, KTX2/Basis and Meshopt compression until matching decoder deployment is explicitly implemented; do not claim compression support merely because upstream GLTFLoader supports it.

Parsing is not fully abortable; late parsed results are disposed when the load generation has been canceled. The runtime normalizes model bounds into a 3.2-unit display envelope and centers it. GLB support is product mode only. The journey and exploded presets remain procedural unless an authored scene adapter is implemented and verified.

## Asset Manifest in Generated MD

For every actual model, poster, texture or environment record source/permission, real URL, format/version, transferred bytes, geometry/texture totals, intended use, fallback and decoder requirements. Do not invent licenses, real product dimensions or material accuracy. Asset authentication/CORS/CSP must work in the actual published origin, not only localhost.

## Measurement and Fallback

Measure first visible content separately from optional renderer readiness. Inspect frame timing during representative scrolling, real draw calls/triangles, texture memory estimates and hidden/idle behavior. Do not claim a target FPS from a software-rendered headless test.

If a scene exceeds its budget, simplify geometry/materials, reduce textures/particles and DPR, or choose static imagery. A user should be able to keep reading and reach the main action regardless of engine failure, model failure, blocked CDN, lost context, reduced motion or absent JavaScript.

## Disposal

Own each created resource. The starter deduplicates disposal of shared geometry, materials and textures, closes owned image bitmaps, disposes skeletons and renderer, cancels frames, removes observers/listeners and removes its canvas. Do not dispose resources shared with another mounted scene without a separate ownership/reference-count contract. Parent SPA hooks must call the returned destroy method; avoid a document-wide MutationObserver as a substitute for the host lifecycle.

# Immersive 3D Implementation Module

Use when a coordinated spatial design improves the requested site. 3D includes lines, geometry, planes, depth, typography and layout rhythm, not only object displays. Read [spatial-composition.md](spatial-composition.md) before selecting a scene. This module includes an executable Three.js starter, not only visual instructions. It does not require 3D for every industry or supersede actual page/layout contracts.

## Resource Routing

1. Read [scene-contract.md](scene-contract.md) to choose camera, chapters and interaction states.
2. Read [asset-performance.md](asset-performance.md) for asset ownership, loading limits and quality tiers.
3. Read [immersive-integration.md](immersive-integration.md) before embedding in a VIXNODE page or component.
4. Select [spatial-weave](../recipes/spatial-weave.md) for lines/geometry/page composition, [spatial-passage](../recipes/spatial-passage.md) for thresholds, or the object/assembly recipes only when actual form or parts are the subject. Combine with the relevant industry/need/style/locale modules.

## Executable Assets

| Resource | Responsibility |
| --- | --- |
| [immersive-math.js](../assets/immersive-math.js) | Pure progress mapping, camera interpolation, quality selection and presets |
| [immersive-scene.js](../assets/immersive-scene.js) | Actual meshes, material/light setup, particles, procedural assembly and resource disposal |
| [immersive-runtime.js](../assets/immersive-runtime.js) | Mount/destroy lifecycle, demand rendering, scroll/resize synchronization and recovery |
| [gltf-asset.js](../assets/gltf-asset.js) | Bounded embedded-GLB fetch/parse adapter with injected matching GLTFLoader |
| [immersive.css](../assets/immersive.css) | Scoped stage, semantic content, navigation, fallback and responsive styling |
| [immersive-demo.html](../assets/immersive-demo.html) | Complete local preview showing four variants; line/space composition is the default |

Resource URIs expose source text, not automatically browser-fetchable script URLs. Follow integration guidance to bundle/inline or host them at actual approved URLs.

## Technical Baseline

Reference engine: Three.js `0.180.0` / r180, deliberately pinned for reproducibility, not a claim of latest version. Engine and addons must use the same version. The renderer requires WebGL 2; unsupported/CSP-blocked/dependency-failed environments keep the complete text/poster version.

The runtime accepts `loadEngine` instead of silently downloading scripts. The standalone demo uses an explicit pinned CDN import map. The local verification tool maps that exact engine to installed same-origin dependencies. Production hosting/CSP must be verified for the selected delivery mechanism.

## Supported Variants

- `weave` (default): continuous line paths, ruled geometry and depth planes spanning the whole viewport, coordinated with varied HTML text alignment. No central object or particle field.
- `journey`: three portal groups along the Z axis without a central artifact; normal page progress moves a perspective camera between chapter poses.
- `product`: a procedural object with multi-angle camera keys and bounded rotation. Optionally replace the object through the embedded GLB adapter. The starter object is illustrative, never an actual product claim.
- `exploded`: five procedural layers separate by normalized progress. A real exploded product needs an authored named-part transform adapter; arbitrary GLB geometry is not automatically interpreted as an assembly.

The source has no fake transaction flow, account dependency or paid external asset. All essential meaning remains in ordinary HTML. Direct anchors, back navigation and ordinary scroll keep working; do not intercept the wheel or force pointer gestures.

## Lifecycle Contract

`static -> loading -> ready -> static | fallback -> loading` on an explicit retry. Reduced-motion preference prevents engine loading and selects static content. Compact screens start static and may opt into low-tier 3D. A context-loss event, failed render, engine/model failure or loading timeout releases resources and restores the poster/text version.

Mounting the same root destroys the previous instance. `destroy()` cancels scheduled frames, aborts fetches, removes listeners/observers, disposes geometries/materials/textures/bitmaps/skeletons and renderer, and removes its canvas. Late asset results are discarded and disposed. Call destroy from the actual page/component unmount hook.

Rendering is demand-driven: scroll or resize schedules work until camera interpolation settles. Hidden documents and offscreen roots pause frames; there is no permanent idle particle loop. The procedural particles are static geometry. New ambient motion must have its own opt-out, visibility pause and measured budget.

## Evidence and Status

Each generated site records engine/source, device sizes, selected tier, asset weights, actual draw calls/triangles, state tests and screenshot evidence. The starter exposes `data-scene-state`, `data-scene-reason`, `data-scene-active-chapter`, `data-scene-frames`, `data-scene-draw-calls` and `data-scene-triangles` for local QA. Do not display raw diagnostics in a production marketing flow.

Local starter verification does not certify every browser, mobile GPU, remote preview sandbox or arbitrary model. Record actual observed coverage and mark unperformed checks `not-run`.

## Primary API Sources

- [Pinned r180 WebGLRenderer source](https://github.com/mrdoob/three.js/blob/r180/src/renderers/WebGLRenderer.js)
- [Pinned r180 GLTFLoader source](https://github.com/mrdoob/three.js/blob/r180/examples/jsm/loaders/GLTFLoader.js)
- [Pinned resource disposal guide](https://github.com/mrdoob/three.js/blob/r180/manual/en/how-to-dispose-of-objects.html)

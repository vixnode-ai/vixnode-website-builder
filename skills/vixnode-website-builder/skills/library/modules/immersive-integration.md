# Embedding and Verifying Immersive Assets

## Deliverable and Scope

This Skill supplies source assets and technical recipes. Reading a `skill://` resource does not host it at an HTTP URL. Never put `skill://...` into a browser `<script src>`, stylesheet link or model URL and expect it to execute.

Use the requested delivery mechanism:

- Repository site: bundle the modules with the project's established tooling and pin matching Three.js/addon versions.
- Hosted VIXNODE page: read the assets through MCP, then bundle/inline them or upload through actually available supported asset tools and use returned URLs. Verify that scripts, module imports and the dependency origin are allowed in the real preview and published context.
- Local demonstration: use [immersive-demo.html](../assets/immersive-demo.html) and the repository's `Tools/ImmersivePreview` tool. The tool serves the pinned installed engine locally; production can use an approved self-hosted bundle instead.

Do not assume a script policy, upload API or hosting URL. If JavaScript/WebGL is not supported by the actual builder/host, deliver the complete static version and accurately state the limitation. Do not call static perspective CSS a verified WebGL scene.

## VIXNODE Page Types

Follow [page-creation.md](../../page-creation.md) before generating page HTML. Shared assets may belong in a complete main layout. Layout-page content and permitted scripts/styles must be inside the exact inherited placeholders; do not add siblings outside them, invent node IDs or target `.app-place-holder` with CSS. Child layouts retain their empty structural slot contract and do not hold executable scene content.

The standalone demo is a full document for local QA. It is not automatically valid as a `layoutPage` fragment. Extract content and assets into the selected page type's permitted locations. Scope scene CSS to its own root, preserve existing brand/layout relationships and ensure the renderer can initialize after the host inserts the content. An SPA must mount on the actual component/page lifecycle and call destroy on unmount.

## Resolve the Scene Specification

Start with the industry/need recipe, then add a 3D technical recipe. Record variant, camera keys, chapter IDs, actual copy per locale, DOM controls/labels, visual colors, quality tier, real asset manifest, dependency URLs/version, integration location and static/reduced-motion behavior. Keep source-code notes and diagnostic IDs out of user-facing page copy.

Do not stop at generating a scene MD if the user asked for a website build. Continue under existing target, preview, save and publication scope. This library implementation alone does not authorize changes to a live project.

## Local Verification Commands

From the repository root, install the pinned dependencies declared in `Tools/ImmersivePreview/package.json`, then run:

```text
npm --prefix Tools/ImmersivePreview test
npm --prefix Tools/ImmersivePreview run test:browser
npm --prefix Tools/ImmersivePreview run preview
```

The browser check launches an isolated headless Chrome session; it does not attach to user tabs. It expects installed Chrome and a functional WebGL2/software-rendering path. Browser availability, hardware rendering and target-device performance are separate checks. Screenshots are saved under ignored `artifacts/immersive-preview` for visual inspection.

## Acceptance Matrix

| Area | Required observation |
| --- | --- |
| Three variants | Real canvas frames and nonzero geometry; correct camera/assembly changes at chapters |
| Navigation | Direct chapter links, deep links and normal scrolling; correct active chapter |
| Idle/hidden | Frames settle at idle and stop while hidden/offscreen |
| Text toggle | GPU resources/canvas released; same complete copy remains; enable creates one fresh canvas |
| Reduced motion | Engine not requested; poster/text remains; runtime preference change tears down rendering |
| Compact screen | Initial static view, no horizontal overflow; explicit opt-in uses capped low tier |
| Engine/model failure | No blocking loader; fallback text and all actions remain |
| Context loss | Clean fallback and explicit retry, no uncontrolled recovery loop |
| Remount/unmount | At most one canvas; no late stale asset insertion or remaining frame loop |
| Model adapter | Byte overflow, malformed GLB, external assets and unsupported decoder requirements rejected |
| Multilingual content | Actual locale fonts, semantic headline breaks, spacing, narrow widths and enlarged text |
| Publication | Actual host CSP/dependencies/assets and page-type structure checked separately |

Record pass/fail/not-run and evidence for the actual generated site. Starter verification covers the provided procedural sample and bounded loader behavior, not arbitrary customer models, translations or remote hosting.

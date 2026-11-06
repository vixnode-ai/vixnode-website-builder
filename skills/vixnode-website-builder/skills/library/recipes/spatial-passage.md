---
id: spatial-passage
version: "1.0"
status: spec-ready
industry: entertainment-media
need: knowledge
visual_style: cinematic-hospitality
experience: spatial-journey
theme_id: Style-12
color_style: guide-style-17
---

# Spatial Passage: Scroll-Driven Chapter Journey

## When to Select

Use for a source-supported cultural story, brand origin, destination narrative or exhibition where movement through chapters explains the subject. Pair with the actual industry/need modules; this is a technical overlay, not a mandate to create a cultural event or registration flow.

Read [immersive-3d.md](../modules/immersive-3d.md), [scene-contract.md](../modules/scene-contract.md), [asset-performance.md](../modules/asset-performance.md) and [immersive-integration.md](../modules/immersive-integration.md). Reuse [Cultural Passage](cultural-passage.md) for its complete editorial structure/palette only when that subject and task actually fit.

## Concrete Scene Specification

- Runtime variant: `journey`; three authored HTML chapters with named headings and actual source content.
- Scene: three procedural portal groups centered at X=1.5, Z=0/-8/-16; each has three thin rings and an open center. For a varied line/plane page composition, prefer [Spatial Weave](spatial-weave.md). Do not claim this geometry depicts a real place or historic object.
- Camera keys: progress 0 -> position [0,0,8], target [1.5,0,0]; 0.5 -> [0.8,0.3,0], target [1.5,0,-8]; 1 -> [-0.5,0.2,-8], target [1.5,0,-16].
- Camera FOV 45, near/far 0.1/70; normal document scroll maps actual section positions to keys. Do not intercept wheel or touch.
- Lighting/material and quality caps inherit the implementation module; no shadows, bloom or autonomous idle camera movement.

## Content and Composition

Sequence: orientation and proposition, evidence-led chapter exploration, practical details or main action, complete chapter index. Use a readable text panel beside the scene at desktop; mobile starts with poster/text and may explicitly enable low-tier 3D. All content is semantic HTML before initialization. If more than three chapters are required, author corresponding scene placements and camera keys instead of duplicating the three-scene preset blindly.

Start with scene background `#090E18`, accent `#D5AF72` as explicitly added scene colors. Surrounding HTML: background `#090E18`, surface `#111827`, text `#F4F0E8`, muted `#C2C7CF`, primary/focus `#D5AF72`, on-primary `#090E18`, border `#6B7280`. These are recipe-added colors; Style-12 is a source direction, not a claim these HEX values occur in that catalog. Decorative field 60%, reading surfaces 25%, structural emphasis 10%, accents 5%; review actual image/scene area rather than CSS token frequency.

Resolve full typography through [locale profiles](../modules/locale-profiles.md), [visual styles](../modules/visual-styles.md) and [headline rules](../../typography.md). Keep protected semantic headline segments in normal HTML; do not put translated text in a texture or assign fixed-height chapter copy.

## Interaction and Failure

Chapter anchors synchronize navigation/progress/camera; direct linking works at initial load. Text mode aborts optional loading and releases the canvas. Reduced motion uses static content without fetching the engine; compact view starts static. Failed import, timeout, WebGL failure or lost context retains poster and all chapter links; retry is explicit. Essential action access does not depend on finishing the journey.

## Executable Starting Point and Acceptance

Use [immersive-demo.html](../assets/immersive-demo.html) with `scene=journey` for a local complete-document preview, then adapt its page structure and dependency delivery to the real host contract. Run the shared math/scene/browser checks and inspect actual chapter screenshots. Confirm each requested locale at narrow widths and enlarged text. Starter behavior and arbitrary generated content have separate verification status. This recipe is `spec-ready`, not visually verified for a customer site.

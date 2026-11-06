---
id: assembly-explainer
version: "1.0"
status: spec-ready
industry: manufacturing-craft
need: product-understanding
visual_style: industrial-precision
experience: process-exploration
theme_id: Style-8
color_style: guide-style-13
---

# Assembly Explainer: Controlled Separation of Parts

## Selection

Use for a verified manufacturing, material or product-layer story where separation clarifies how components relate. Read [immersive implementation](../modules/immersive-3d.md), [scene contract](../modules/scene-contract.md), [asset/performance](../modules/asset-performance.md) and [integration](../modules/immersive-integration.md). Keep the actual industry/need requirements, not an assumed manufacturing claim.

## Implemented Procedural Assembly

- Variant `exploded`: five cylinder layers, radius 1.2, height 0.32, initial centers Y=(index-2)*0.36.
- At normalized progress p, centers become Y=(index-2)*(0.36+p*0.65). Returning to zero restores exact initial spacing; no irreversible timeline state.
- Camera keys at 0/0.5/1: positions [0,1.4,9], [4,2.5,10], [0,1,10]; all target [1.5,0,0].
- Radial geometry segments 48 standard / 24 compact; capped DPR and particles inherit the core module. No shadows/postprocessing.
- This is an explanatory layer study, not a mechanically validated CAD assembly. Real parts require named IDs, verified origins/final offsets, constraints and an authored adapter. The product-mode GLB loader does not automatically implement exploded-part animation.

## Content Sequence and Layout

Three chapters: whole-system purpose; named layers and actual functions; reassembly/usage or capability evidence and the real inquiry/evaluation action. Supply verified technical descriptions and units; do not invent physical tolerances, materials or process order.

Use industrial-precision composition: 1200px content maximum, 4:8 overview, numbered stages, specification rows and 88/72/48px section gaps. Keep scene controls/HTML descriptions beside actual selected-stage evidence. Mobile is a vertical process with a static annotated diagram; optional low-tier 3D does not replace the full explanation. Instantiate [locale profiles](../modules/locale-profiles.md) for actual requested languages, preserving names/units and semantic headline breaks.

## Palette

Default coordinated light palette follows [Industrial Proof](industrial-proof.md): Style-8 background `#FFFFFF`, text/primary/focus `#2F4F4F`, secondary `#B0C4DE`, accent/border `#696969`, plus recipe-added surface `#F5F7FA`, muted `#555555`, on-primary `#FFFFFF`. Area groups: background 60%, surface 25%, structure 10%, accent 5%. Apply HTML and scene color overrides together and verify material contrast; the executable dark demo is a separate technical illustration.

## Interaction and Error States

Normal scroll and direct stage links set the same normalized target. Geometry and camera follow progress reversibly. Labels and functions remain semantic HTML, not 3D text. Text mode/reduced motion/error show the static part explanation and main action without fetching/rendering requirements. Context-loss recovery and retries are explicit. No rendering loop continues after idle, hidden state or unmount.

## Acceptance

Run `scene=exploded`: inspect whole/separated/end states, reverse progress and verify the original part positions return. Test mobile/reduced-motion diagrams, failed engine, keyboard stage access, remount disposal and actual translated technical labels. For a real assembly, independently verify part naming/order/transforms with source evidence and inspect the authored adapter; do not label the mechanical explanation verified based on the procedural test alone.

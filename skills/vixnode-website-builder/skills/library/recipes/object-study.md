---
id: object-study
version: "1.0"
status: spec-ready
industry: retail-commerce
need: product-understanding
visual_style: technical-editorial
experience: product-demo
theme_id: Style-8
color_style: guide-style-13
---

# Object Study: Multi-Angle Product Explanation

## Selection and Dependencies

Use when actual form/material/part orientation helps a visitor evaluate an object. Combine with the actual industry and need; a product explanation does not automatically authorize a shop or checkout. Read [immersive implementation](../modules/immersive-3d.md), [scene contract](../modules/scene-contract.md), [asset/performance rules](../modules/asset-performance.md) and [embedding guidance](../modules/immersive-integration.md).

## Concrete Scene

- Variant: `product`. Procedural default is an explicitly illustrative torus-knot study, not a customer product model.
- Three views: overview [0,0.4,8], detail [6,2.5,6], alternate angle [-3,1.5,6]; all target [1.5,0,0] at progress 0/0.5/1.
- Object group rotation Y maps to 0..0.7*pi over progress; no autonomous spin. Direct chapter buttons/links choose meaningful views using the same progress contract.
- Optional actual embedded GLB uses the supplied bounded loader, matching r180 GLTFLoader and an approved real asset URL. Normalize bounds to a 3.2-unit display envelope; preserve real claims separately from display scale.
- Standard material/lights use the base module for the procedural illustration. A supplied model retains authored materials; inspect actual textures and lighting instead of promising material fidelity.

## Editorial Structure

1. Actual object proposition and overview, with the main evaluation/contact action.
2. One verified detail or capability paired with a view and readable HTML explanation.
3. Actual usage/fit constraints and an alternate view, followed by the real next step.

Use the technical-editorial module's asymmetric 5:7 composition, 1200px container, 96/72/56px section spacing and script-sensitive typography resolved through [locale profiles](../modules/locale-profiles.md). Meaningful information cannot be accessible only by rotating the object or hovering a hotspot. If adding hotspots, include equivalent HTML controls and associated descriptions.

## Color Direction

For a light object viewer start from Style-8 actual colors: background `#FFFFFF`, text/primary/focus `#2F4F4F`, secondary `#B0C4DE`, accent/border `#696969`; add surface `#F5F7FA`, muted `#555555`, on-primary `#FFFFFF` as named neutral additions. Background/reading 60%, surface 25%, structure 10%, accent 5%. Override the starter's dark CSS and scene background together, then verify actual text and object silhouette contrast. The standalone demo deliberately retains its dark study theme; it is not a preview of this light recipe without adaptation.

## Inputs and Integrations

Required: actual product copy, approved images/poster, real model or permission to use an illustrative placeholder, view purposes, units and destination. Optional product/cart behavior follows the actual need module and real service. No fabricated materials, dimensions, availability or checkout. A procedural shape is labeled in a demo and replaced with real assets for a production product claim.

## State and Responsive Behavior

Inherit loading/ready/static/fallback/destroyed states and demand rendering. Compact view starts static with real poster/context and optional low-tier enable. Reduced motion never requires a rotating model to understand a feature. Model error falls back to the actual poster/copy; do not silently present the torus as the product. Keyboard and touch use the same semantic view links.

## Acceptance

Verify default procedural `scene=product` first, then the actual model's URL, byte/triangle/texture limits, centering/scale, all view poses, focus/keyboard controls and static fallback. Confirm GLB failure/abort and disposal, CSP/CORS at the real origin, real locale headline breaks and the exact main action. The shared starter checks do not certify the customer's GLB or this light-theme override; record those as `not-run` until inspected.

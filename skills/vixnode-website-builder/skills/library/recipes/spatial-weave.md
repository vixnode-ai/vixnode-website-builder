---
id: spatial-weave
version: "1.1"
status: spec-ready
industry: entertainment-media
need: awareness
visual_style: spatial-editorial
experience: spatial-journey
theme_id: Style-13
color_style: guide-style-10
---

# Spatial Weave: A Page Composed in Depth

## Fit and Composition

Use when a brand, process or narrative benefits from lines, geometry and spatial continuity, without requiring a physical model. Replace the default industry/need with the actual brief. Read [spatial composition](../modules/spatial-composition.md), [immersive implementation](../modules/immersive-3d.md), [scene contract](../modules/scene-contract.md), [asset/performance](../modules/asset-performance.md) and [host integration](../modules/immersive-integration.md).

Resolve [spatial-editorial](../modules/visual-styles.md), actual industry evidence, the main visitor task and all requested [locale profiles](../modules/locale-profiles.md). A website requested by the user must proceed into the actual builder workflow, not stop at selecting this recipe.

## Implemented Spatial Field

- Runtime variant: `weave`, with no central hero object, product model or particle field.
- Four continuous Catmull-Rom paths become thin tube ribbons. They connect near/far composition regions rather than float as unrelated decorations.
- Six ruled frames and faint planes at distinct Z positions express depth and measured rhythm. Their rotations vary slightly while sharing one geometric language.
- Camera keys at progress 0/0.5/1: position [0,0,9], [0.5,0.2,1], [-0.6,0.4,-7]; target [0,0,0], [1,0,-8], [0,0,-16]. Normal scroll and chapter anchors drive the same target progress; there is no autonomous idle rotation.
- Whole-viewport scene backdrop, with protected HTML text surfaces. Text never becomes a canvas texture.

## Chapter Composition Map

| Chapter | Primary meaning | Spatial composition | Text and action |
| --- | --- | --- | --- |
| Opening | Establish the actual proposition | Sparse near/far line field; clear entry path | Left-aligned semantic headline and brief; main action is reachable immediately |
| Development | Supply actual process/evidence | Intersecting paths, offset frames and greater layered depth | Right-aligned text/evidence panel with a supporting accent rule |
| Resolution | Connect the story to the visitor's next step | Depth opens and visual density relaxes around the reading region | Wider centered conclusion and one clear action; mobile returns to normal left reading |

This is one coordinated example, not a rule that all brands use three chapters or switch sides. For a different content structure, author matching camera/layout changes and verify them instead of duplicating identical sections.

## Type, Spacing and Colors

Use the spatial-editorial style's 1200px content maximum, 112/80/56px chapter spacing and semantic line plans. Keep complete clauses together where feasible; create independent mobile and locale plans with real copy. Do not shrink text to preserve geometry.

Initial dark-study roles: background `#090E18`, reading surface `#111827`, text `#F4F0E8`, muted `#C2C7CF`, primary/focus `#D5AF72`, on-primary `#090E18`, border `#6B7280`, supporting line color `#61A9A5`. These are explicit recipe-added colors; Style-13 supplies a direction, not a claim that all values are source swatches. Background 60%, controlled reading surfaces 25%, structure 10%, accent 5%; review actual visible areas together. A light/brand-specific version must update both the scene and HTML roles.

Coordinate line weights with section rules, geometry angles with image crops, and type proportions with negative space. Prefer real evidence and a clear signature over adding glow, random grids or multiple animated objects.

## Responsive, Motion and Fallback

The desktop uses varied left/right/center reading regions. Mobile re-composes panels to full-width normal flow, starts in static mode and may explicitly enable capped low-tier rendering. Reduced motion uses the complete static composition and poster without requesting the engine. Optional motion stops at idle and when hidden/offscreen. Failed dependencies, timeout or context loss preserve the same content and actual action.

Use [immersive-demo.html](../assets/immersive-demo.html) with `scene=weave`; it is now the default local demonstration. It is a source template, not a browser URL for a `skill://` resource. The default poster is a static geometric counterpart, not an assertion that arbitrary scene screenshots were generated automatically.

## Acceptance

Verify actual line/frame/plane roles in the scene, real WebGL geometry, distinct chapter alignment, direct anchors, idle/failure recovery and responsive text. Inspect opening, intermediate and final screenshots: text remains legible, geometry supports the reading path, visual density varies and the result feels like one design. Check each real locale's type, clauses, tracking and leading separately. Reference runtime tests do not visually certify a customer site; this recipe remains `spec-ready` until that site is inspected.

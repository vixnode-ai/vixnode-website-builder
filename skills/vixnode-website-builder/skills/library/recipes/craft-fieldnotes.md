---
id: craft-fieldnotes
version: "1.0"
status: spec-ready
industry: manufacturing-craft
need: inquiry
visual_style: tactile-editorial
experience: process-exploration
theme_id: Style-23
color_style: guide-style-14
---

# Craft Fieldnotes

## Selection and Dependencies

Use for manufacturing-craft with a primary inquiry task. This recipe is a complete starting specification, not a deployed website. Adapt it to actual brand facts and requested scope; do not treat its industry or palette as mandatory.

Read [composition rules](../composition.md), the `manufacturing-craft` profile in [industries](../modules/industries.md), `inquiry` in [needs](../modules/needs.md), `tactile-editorial` in [visual styles](../modules/visual-styles.md), and `process-exploration` in [experiences](../modules/experiences.md). For each requested language, resolve [locale profiles](../modules/locale-profiles.md) and [headline rules](../../typography.md). Do not create extra site locales merely because a profile exists.

## Concept and Art Direction

A sequence of material observations and process outputs that gives a commissioner confidence to send a useful brief.

Hero: Use a 5:7 editorial split with a real material close-up and a complete-clause headline. Place a small process index next to the image, not across the text.

Signature: Fine process lines and stage numbers connect photographs to their explanations.

Use the selected style module's grid, spacing, display/heading sizes, component geometry and image treatment. Instantiate these values in the generated project MD instead of leaving only a module reference.

## Required Content and Missing-Asset Policy

Original work/process photography, materials, actual production scope and real inquiry destination.

Missing assets remain named dependencies. In a preview, use a labeled explanatory placeholder or a text-led composition rather than fabricated evidence. Production data and user claims must come from actual supplied/connected sources.

## Default Page Sequence

This sequence describes one content page. Reuse an approved multi-page architecture instead of creating layouts or extra pages without scope.

| Section | Evidence and content | Composition | Visitor action |
| --- | --- | --- | --- |
| 1. Material and proposition | Present actual craft discipline and a representative material. | 5:7 hero with an adjacent caption. | Discuss a project. |
| 2. Selected work | Show actual work with material, scope and role. | One wide case followed by two quieter project rows. | Inspect a relevant work item. |
| 3. From material to finished work | Describe verified stages and the output of each stage. | Stage selector and 7:5 image/explanation panel. | Explore a stage. |
| 4. Cooperation and inquiry | Explain required brief inputs and known cooperation conditions. | Preparation checklist beside a compact inquiry form. | Submit a request or use a real contact link. |

## Palette and Semantic Roles

Base: `Style-23` (Japanese Wabi-Sabi Style); emotional direction: `guide-style-14`. Tone: Warm, material-led and attentive; light backgrounds, restrained earthy brand color and small pink accents.

Read the current [themes.json](../../themes.json). Values below reflect the catalog at authoring, not an immutable source. If current swatches differ, remap roles and record changes under the [color rules](../../color-system.md).

| Role | HEX | Origin |
| --- | --- | --- |
| background | #FFFFFF | Theme Style-23 |
| surface | #F5DEB3 | Theme Style-23 |
| text | #2E4053 | Theme Style-23 |
| muted | #2E4053 | Theme Style-23 |
| primary | #A0522D | Theme Style-23 |
| secondary | #F5DEB3 | Theme Style-23 |
| accent | #FFB6C1 | Theme Style-23 |
| border | #A0522D | Theme Style-23 |
| on_primary | #FFFFFF | Theme Style-23 |
| focus | #A0522D | Theme Style-23 |

Area targets: background/reading space 60%, surface/supporting area 25%, primary/structural emphasis 10%, decorative accent 5%; mutually exclusive groups totaling 100. Include actual imagery in the visual estimate and label uncertainty. Colors may serve multiple semantic roles; do not count the same visible area twice.

Use `text` for essential copy on `background` and `surface`, `muted` for secondary copy, and `on_primary` for CTA labels on `primary`. Keep bright/pale `secondary` and `accent` decorative unless their actual text pairing is checked. Focus uses a 3px `focus` ring with a 3px background-colored separation; verify it against neighboring surfaces. Use visible text/icon feedback for errors and success. If dedicated state colors are added, record their origin and check all pairs rather than treating the decorative accent as an error color.

## Locale and Headline Composition

Resolve concrete typography for each requested locale using the style sizes and locale-specific fonts/tracking/leading. Body and caption values come from the locale module. The generated MD must include actual font stacks, device sizes, weights, tracking units, unitless line heights and measures.

Draft a real localized headline conveying this concept: A sequence of material observations and process outputs that gives a commissioner confidence to send a useful brief. Preserve exact supplied wording. Store the full copy, semantic segments, desktop/tablet/mobile lines, secondary breakpoints and protected terms for each locale. Desktop may keep a complete clause on one line when it fits; mobile prioritizes semantic clauses over matching desktop line count. No arbitrary CJK character breaks, global no-wrap, clipping or unlimited shrinking. Use explicit font floors and allow more natural lines under text enlargement. A headline plan remains `not-rendered` until actually inspected.

## Core Interaction and Responsive Behavior

Stage changes update photo, explanation and expected output; details may expand without resetting the selected stage. Inquiry keeps a selected work reference visible and removable.

Inherit the main experience's trigger, transition duration, reversal, input and reduced-motion contract; resolve actual state names and content in the project MD. Inherit the need module's transactional states only for features actually requested and supported.

Mobile adaptation: Keep stage labels above their evidence; use vertical stages if the selector cannot fit. Never separate photo captions from their image.

Provide a complete normal-flow reading path without continuous effects. Reduced motion removes spatial movement; essential content and actions remain. No-script behavior follows the experience module and uses actual links or readable inline content.

## Integration Boundary

No fabricated capacity, tolerances, minimum orders or lead times. Inquiry success requires a real receiving service.

Planning stops at the requested MD. An authorized website build continues through the parent Skill's actual page/layout, preview and mutation contracts. Recipe IDs and internal instructions are not visible website copy.

## Acceptance and Verification Status

- Source and roles: actual theme exists; source/additional colors are distinguished; defined text/background and CTA pairs meet the chosen readability target (initial check: 4.5:1 for normal text); final rendered states require separate inspection.
- Content and structure: required evidence is genuine or explicitly pending; section order supports the primary task; main action works without completing a spectacle.
- Typography: inspect every requested locale at 320, 360, 768 and 1440px, loaded/fallback fonts and text enlargement; check semantic breaks, punctuation, clipping and overflow.
- Behavior: exercise selection, return/reset, error/empty/loading states where applicable, keyboard and touch access, and reduced-motion fallback.
- Recipe-specific: Check process order, stage reversal, exact supplied claims and clause-level wrapping in every requested CJK locale.
- Status: `spec-ready`; rendered checks `not-run`; production integrations `not-connected` until confirmed by the actual project. Do not label a generated site verified solely because it used this recipe.

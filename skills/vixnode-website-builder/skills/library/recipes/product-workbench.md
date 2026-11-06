---
id: product-workbench
version: "1.0"
status: spec-ready
industry: software-tech
need: product-understanding
visual_style: technical-editorial
experience: product-demo
theme_id: Style-6
color_style: guide-style-08
---

# Product Workbench

## Selection and Dependencies

Use for software-tech with a primary product-understanding task. This recipe is a complete starting specification, not a deployed website. Adapt it to actual brand facts and requested scope; do not treat its industry or palette as mandatory.

Read [composition rules](../composition.md), the `software-tech` profile in [industries](../modules/industries.md), `product-understanding` in [needs](../modules/needs.md), `technical-editorial` in [visual styles](../modules/visual-styles.md), and `product-demo` in [experiences](../modules/experiences.md). For each requested language, resolve [locale profiles](../modules/locale-profiles.md) and [headline rules](../../typography.md). Do not create extra site locales merely because a profile exists.

## Concept and Art Direction

An annotated workspace that lets visitors understand one concrete product task before reading a feature list.

Hero: Use a 5:7 split: outcome statement, concise scope and trial action on the left; a real task preview on the right. Keep a numbered feature rail attached to the preview.

Signature: Numbered UI annotations recur in section labels and demo state indicators.

Use the selected style module's grid, spacing, display/heading sizes, component geometry and image treatment. Instantiate these values in the generated project MD instead of leaving only a module reference.

## Required Content and Missing-Asset Policy

Actual UI states, feature boundaries, supported platforms and a real trial/contact destination.

Missing assets remain named dependencies. In a preview, use a labeled explanatory placeholder or a text-led composition rather than fabricated evidence. Production data and user claims must come from actual supplied/connected sources.

## Default Page Sequence

This sequence describes one content page. Reuse an approved multi-page architecture instead of creating layouts or extra pages without scope.

| Section | Evidence and content | Composition | Visitor action |
| --- | --- | --- | --- |
| 1. Outcome and representative task | State who the product serves and demonstrate one real operation. | 5:7 split; stack text then preview on mobile. | Try the actual demo or inspect the first task. |
| 2. Workflow | Explain input, operation and result using supplied product behavior. | Three connected steps with one wide UI detail, not three unrelated cards. | Switch task or inspect a step. |
| 3. Use cases and boundaries | Show relevant scenarios and explicit product limitations. | Alternating editorial rows; one-column mobile. | Read the relevant use case. |
| 4. Plans or evaluation | Use real plan details, otherwise explain the evaluation/contact route. | Compact comparison with actual terms. | Start trial or contact the team. |

## Palette and Semantic Roles

Base: `Style-6` (Tech Style); emotional direction: `guide-style-08`. Tone: Precise, understandable and quietly confident; high-lightness surfaces, controlled cool color and strong functional contrast.

Read the current [themes.json](../../themes.json). Values below reflect the catalog at authoring, not an immutable source. If current swatches differ, remap roles and record changes under the [color rules](../../color-system.md).

| Role | HEX | Origin |
| --- | --- | --- |
| background | #FFFFFF | Theme Style-6 |
| surface | #F5F7FA | Recipe-added neutral; not a source swatch |
| text | #222222 | Recipe-added neutral; not a source swatch |
| muted | #555555 | Recipe-added neutral; not a source swatch |
| primary | #0F52BA | Theme Style-6 |
| secondary | #4682B4 | Theme Style-6 |
| accent | #708090 | Theme Style-6 |
| border | #708090 | Theme Style-6 |
| on_primary | #FFFFFF | Theme Style-6 |
| focus | #0F52BA | Theme Style-6 |

Area targets: background/reading space 60%, surface/supporting area 25%, primary/structural emphasis 10%, decorative accent 5%; mutually exclusive groups totaling 100. Include actual imagery in the visual estimate and label uncertainty. Colors may serve multiple semantic roles; do not count the same visible area twice.

Use `text` for essential copy on `background` and `surface`, `muted` for secondary copy, and `on_primary` for CTA labels on `primary`. Keep bright/pale `secondary` and `accent` decorative unless their actual text pairing is checked. Focus uses a 3px `focus` ring with a 3px background-colored separation; verify it against neighboring surfaces. Use visible text/icon feedback for errors and success. If dedicated state colors are added, record their origin and check all pairs rather than treating the decorative accent as an error color.

## Locale and Headline Composition

Resolve concrete typography for each requested locale using the style sizes and locale-specific fonts/tracking/leading. Body and caption values come from the locale module. The generated MD must include actual font stacks, device sizes, weights, tracking units, unitless line heights and measures.

Draft a real localized headline conveying this concept: An annotated workspace that lets visitors understand one concrete product task before reading a feature list. Preserve exact supplied wording. Store the full copy, semantic segments, desktop/tablet/mobile lines, secondary breakpoints and protected terms for each locale. Desktop may keep a complete clause on one line when it fits; mobile prioritizes semantic clauses over matching desktop line count. No arbitrary CJK character breaks, global no-wrap, clipping or unlimited shrinking. Use explicit font floors and allow more natural lines under text enlargement. A headline plan remains `not-rendered` until actually inspected.

## Core Interaction and Responsive Behavior

Feature selection changes the demonstration, heading and annotation together. Preserve the selected task when opening supporting detail; never imply that the marketing preview saves user data.

Inherit the main experience's trigger, transition duration, reversal, input and reduced-motion contract; resolve actual state names and content in the project MD. Inherit the need module's transactional states only for features actually requested and supported.

Mobile adaptation: Keep a visible selected feature and task title; avoid shrinking desktop screenshots into illegible phone thumbnails.

Provide a complete normal-flow reading path without continuous effects. Reduced motion removes spatial movement; essential content and actions remain. No-script behavior follows the experience module and uses actual links or readable inline content.

## Integration Boundary

A marketing demonstration can be local and clearly labeled. A real trial/login action uses the actual supported product destination.

Planning stops at the requested MD. An authorized website build continues through the parent Skill's actual page/layout, preview and mutation contracts. Recipe IDs and internal instructions are not visible website copy.

## Acceptance and Verification Status

- Source and roles: actual theme exists; source/additional colors are distinguished; defined text/background and CTA pairs meet the chosen readability target (initial check: 4.5:1 for normal text); final rendered states require separate inspection.
- Content and structure: required evidence is genuine or explicitly pending; section order supports the primary task; main action works without completing a spectacle.
- Typography: inspect every requested locale at 320, 360, 768 and 1440px, loaded/fallback fonts and text enlargement; check semantic breaks, punctuation, clipping and overflow.
- Behavior: exercise selection, return/reset, error/empty/loading states where applicable, keyboard and touch access, and reduced-motion fallback.
- Recipe-specific: Verify switching between the first and last task, selected state, trial destination and all translated demo labels.
- Status: `spec-ready`; rendered checks `not-run`; production integrations `not-connected` until confirmed by the actual project. Do not label a generated site verified solely because it used this recipe.

---
id: learning-pathways
version: "1.0"
status: spec-ready
industry: education-schools
need: registration
visual_style: playful-learning
experience: knowledge-reading
theme_id: Style-11
color_style: guide-style-04
---

# Learning Pathways

## Selection and Dependencies

Use for education-schools with a primary registration task. This recipe is a complete starting specification, not a deployed website. Adapt it to actual brand facts and requested scope; do not treat its industry or palette as mandatory.

Read [composition rules](../composition.md), the `education-schools` profile in [industries](../modules/industries.md), `registration` in [needs](../modules/needs.md), `playful-learning` in [visual styles](../modules/visual-styles.md), and `knowledge-reading` in [experiences](../modules/experiences.md). For each requested language, resolve [locale profiles](../modules/locale-profiles.md) and [headline rules](../../typography.md). Do not create extra site locales merely because a profile exists.

## Concept and Art Direction

A navigable learning pathway that makes level, curriculum and enrollment conditions easy to understand.

Hero: Use a 6:6 opening: learner outcome and level alongside a sample learning artifact, clearly labeled if illustrative.

Signature: Meaningful pathway numbers and a consistent explanatory illustration language.

Use the selected style module's grid, spacing, display/heading sizes, component geometry and image treatment. Instantiate these values in the generated project MD instead of leaving only a module reference.

## Required Content and Missing-Asset Policy

Real curriculum, level/prerequisites, instructor profiles, dates/time zone, fees and enrollment destination.

Missing assets remain named dependencies. In a preview, use a labeled explanatory placeholder or a text-led composition rather than fabricated evidence. Production data and user claims must come from actual supplied/connected sources.

## Default Page Sequence

This sequence describes one content page. Reuse an approved multi-page architecture instead of creating layouts or extra pages without scope.

| Section | Evidence and content | Composition | Visitor action |
| --- | --- | --- | --- |
| 1. Audience and learning promise | State real course scope, level and delivery format. | Friendly split hero with actual or labeled learning material. | Inspect the learning path. |
| 2. Curriculum pathway | Present modules and prerequisites in actual order. | Vertical/connected steps with accessible disclosure details. | Open a module or sample lesson. |
| 3. Teaching and practical conditions | Show verified instructors, actual schedule, fees and participation requirements. | Readable curriculum-adjacent facts, not fabricated outcome counters. | Review fit and schedule. |
| 4. Enrollment | Use the actual registration route and explain next steps. | Compact review/action panel with support contact. | Register or inquire. |

## Palette and Semantic Roles

Base: `Style-11` (Playful Style); emotional direction: `guide-style-04`. Tone: Approachable, structured and optimistic; pale surfaces and selective playful color with serious reading contrast.

Read the current [themes.json](../../themes.json). Values below reflect the catalog at authoring, not an immutable source. If current swatches differ, remap roles and record changes under the [color rules](../../color-system.md).

| Role | HEX | Origin |
| --- | --- | --- |
| background | #FFFFFF | Theme Style-11 |
| surface | #F8F8F8 | Recipe-added neutral; not a source swatch |
| text | #222222 | Recipe-added neutral; not a source swatch |
| muted | #555555 | Recipe-added neutral; not a source swatch |
| primary | #222222 | Recipe-added neutral; not a source swatch |
| secondary | #87CEEB | Theme Style-11 |
| accent | #FF69B4 | Theme Style-11 |
| border | #555555 | Recipe-added neutral; not a source swatch |
| on_primary | #FFFFFF | Theme Style-11 |
| focus | #222222 | Recipe-added neutral; not a source swatch |

Area targets: background/reading space 60%, surface/supporting area 25%, primary/structural emphasis 10%, decorative accent 5%; mutually exclusive groups totaling 100. Include actual imagery in the visual estimate and label uncertainty. Colors may serve multiple semantic roles; do not count the same visible area twice.

Use `text` for essential copy on `background` and `surface`, `muted` for secondary copy, and `on_primary` for CTA labels on `primary`. Keep bright/pale `secondary` and `accent` decorative unless their actual text pairing is checked. Focus uses a 3px `focus` ring with a 3px background-colored separation; verify it against neighboring surfaces. Use visible text/icon feedback for errors and success. If dedicated state colors are added, record their origin and check all pairs rather than treating the decorative accent as an error color.

## Locale and Headline Composition

Resolve concrete typography for each requested locale using the style sizes and locale-specific fonts/tracking/leading. Body and caption values come from the locale module. The generated MD must include actual font stacks, device sizes, weights, tracking units, unitless line heights and measures.

Draft a real localized headline conveying this concept: A navigable learning pathway that makes level, curriculum and enrollment conditions easy to understand. Preserve exact supplied wording. Store the full copy, semantic segments, desktop/tablet/mobile lines, secondary breakpoints and protected terms for each locale. Desktop may keep a complete clause on one line when it fits; mobile prioritizes semantic clauses over matching desktop line count. No arbitrary CJK character breaks, global no-wrap, clipping or unlimited shrinking. Use explicit font floors and allow more natural lines under text enlargement. A headline plan remains `not-rendered` until actually inspected.

## Core Interaction and Responsive Behavior

Contents links and module disclosure reveal real lesson descriptions. Search, if requested, covers actual course content only. Enrollment reviews a real selection before submitting.

Inherit the main experience's trigger, transition duration, reversal, input and reduced-motion contract; resolve actual state names and content in the project MD. Inherit the need module's transactional states only for features actually requested and supported.

Mobile adaptation: Use a vertical pathway, readable module labels and collapsible contents. Avoid a horizontally forced curriculum.

Provide a complete normal-flow reading path without continuous effects. Reduced motion removes spatial movement; essential content and actions remain. No-script behavior follows the experience module and uses actual links or readable inline content.

## Integration Boundary

No fabricated accreditation, learning outcomes, available seats or enrollment confirmation. Actual registration depends on a real provider.

Planning stops at the requested MD. An authorized website build continues through the parent Skill's actual page/layout, preview and mutation contracts. Recipe IDs and internal instructions are not visible website copy.

## Acceptance and Verification Status

- Source and roles: actual theme exists; source/additional colors are distinguished; defined text/background and CTA pairs meet the chosen readability target (initial check: 4.5:1 for normal text); final rendered states require separate inspection.
- Content and structure: required evidence is genuine or explicitly pending; section order supports the primary task; main action works without completing a spectacle.
- Typography: inspect every requested locale at 320, 360, 768 and 1440px, loaded/fallback fonts and text enlargement; check semantic breaks, punctuation, clipping and overflow.
- Behavior: exercise selection, return/reset, error/empty/loading states where applicable, keyboard and touch access, and reduced-motion fallback.
- Recipe-specific: Check module order/prerequisites, long course titles, disclosure keyboard behavior, schedule and enrollment feedback.
- Status: `spec-ready`; rendered checks `not-run`; production integrations `not-connected` until confirmed by the actual project. Do not label a generated site verified solely because it used this recipe.

---
id: public-impact
version: "1.0"
status: spec-ready
industry: nonprofit-charity
need: campaign
visual_style: tactile-editorial
experience: brand-story
theme_id: Style-9
color_style: guide-style-03
---

# Public Impact

## Selection and Dependencies

Use for nonprofit-charity with a primary campaign task. This recipe is a complete starting specification, not a deployed website. Adapt it to actual brand facts and requested scope; do not treat its industry or palette as mandatory.

Read [composition rules](../composition.md), the `nonprofit-charity` profile in [industries](../modules/industries.md), `campaign` in [needs](../modules/needs.md), `tactile-editorial` in [visual styles](../modules/visual-styles.md), and `brand-story` in [experiences](../modules/experiences.md). For each requested language, resolve [locale profiles](../modules/locale-profiles.md) and [headline rules](../../typography.md). Do not create extra site locales merely because a profile exists.

## Concept and Art Direction

A mission story whose visible evidence leads to one concrete participation action.

Hero: Use an authentic work image beside a clear mission and action; avoid making a dramatic statistic the headline unless verified and dated.

Signature: Fieldnote captions and dated source labels link emotional imagery with evidence.

Use the selected style module's grid, spacing, display/heading sizes, component geometry and image treatment. Instantiate these values in the generated project MD instead of leaving only a module reference.

## Required Content and Missing-Asset Policy

Actual mission/campaign facts, image permissions, dated evidence, organization details and real action destination.

Missing assets remain named dependencies. In a preview, use a labeled explanatory placeholder or a text-led composition rather than fabricated evidence. Production data and user claims must come from actual supplied/connected sources.

## Default Page Sequence

This sequence describes one content page. Reuse an approved multi-page architecture instead of creating layouts or extra pages without scope.

| Section | Evidence and content | Composition | Visitor action |
| --- | --- | --- | --- |
| 1. Mission and immediate action | Explain the actual campaign and participation scope. | Editorial image/text split with a visible action. | Participate through the chosen real route. |
| 2. Evidence and work | Show actual activities, dated results and source context. | Photo essays and compact sourced evidence rows. | Inspect supporting work. |
| 3. How participation helps | Explain the real mechanism and practical requirements. | Three meaningful narrative chapters or a short process sequence. | Understand the chosen action. |
| 4. Participation and transparency | Show organization/contact details, relevant terms and real destination. | Clear action panel plus transparency links. | Volunteer, join or donate according to the real campaign scope. |

## Palette and Semantic Roles

Base: `Style-9` (Natural Style); emotional direction: `guide-style-03`. Tone: Human, grounded and credible; light surfaces, restrained natural green and evidence-led photography.

Read the current [themes.json](../../themes.json). Values below reflect the catalog at authoring, not an immutable source. If current swatches differ, remap roles and record changes under the [color rules](../../color-system.md).

| Role | HEX | Origin |
| --- | --- | --- |
| background | #FFFFFF | Theme Style-9 |
| surface | #F8F8F8 | Recipe-added neutral; not a source swatch |
| text | #222222 | Recipe-added neutral; not a source swatch |
| muted | #555555 | Recipe-added neutral; not a source swatch |
| primary | #8B4513 | Theme Style-9 |
| secondary | #C2B280 | Theme Style-9 |
| accent | #228B22 | Theme Style-9 |
| border | #555555 | Recipe-added neutral; not a source swatch |
| on_primary | #FFFFFF | Theme Style-9 |
| focus | #8B4513 | Theme Style-9 |

Area targets: background/reading space 60%, surface/supporting area 25%, primary/structural emphasis 10%, decorative accent 5%; mutually exclusive groups totaling 100. Include actual imagery in the visual estimate and label uncertainty. Colors may serve multiple semantic roles; do not count the same visible area twice.

Use `text` for essential copy on `background` and `surface`, `muted` for secondary copy, and `on_primary` for CTA labels on `primary`. Keep bright/pale `secondary` and `accent` decorative unless their actual text pairing is checked. Focus uses a 3px `focus` ring with a 3px background-colored separation; verify it against neighboring surfaces. Use visible text/icon feedback for errors and success. If dedicated state colors are added, record their origin and check all pairs rather than treating the decorative accent as an error color.

## Locale and Headline Composition

Resolve concrete typography for each requested locale using the style sizes and locale-specific fonts/tracking/leading. Body and caption values come from the locale module. The generated MD must include actual font stacks, device sizes, weights, tracking units, unitless line heights and measures.

Draft a real localized headline conveying this concept: A mission story whose visible evidence leads to one concrete participation action. Preserve exact supplied wording. Store the full copy, semantic segments, desktop/tablet/mobile lines, secondary breakpoints and protected terms for each locale. Desktop may keep a complete clause on one line when it fits; mobile prioritizes semantic clauses over matching desktop line count. No arbitrary CJK character breaks, global no-wrap, clipping or unlimited shrinking. Use explicit font floors and allow more natural lines under text enlargement. A headline plan remains `not-rendered` until actually inspected.

## Core Interaction and Responsive Behavior

Chapter navigation reveals context without gating the action. A participation form has editing/invalid/submitting/confirmed-or-error states from the real service.

Inherit the main experience's trigger, transition duration, reversal, input and reduced-motion contract; resolve actual state names and content in the project MD. Inherit the need module's transactional states only for features actually requested and supported.

Mobile adaptation: Keep evidence captions near images and participation requirements before the main action. Reading must work without scroll effects.

Provide a complete normal-flow reading path without continuous effects. Reduced motion removes spatial movement; essential content and actions remain. No-script behavior follows the experience module and uses actual links or readable inline content.

## Integration Boundary

No invented impact totals, financial handling or beneficiary stories. Donation requires a real authorized payment destination; do not turn every campaign into a donation flow.

Planning stops at the requested MD. An authorized website build continues through the parent Skill's actual page/layout, preview and mutation contracts. Recipe IDs and internal instructions are not visible website copy.

## Acceptance and Verification Status

- Source and roles: actual theme exists; source/additional colors are distinguished; defined text/background and CTA pairs meet the chosen readability target (initial check: 4.5:1 for normal text); final rendered states require separate inspection.
- Content and structure: required evidence is genuine or explicitly pending; section order supports the primary task; main action works without completing a spectacle.
- Typography: inspect every requested locale at 320, 360, 768 and 1440px, loaded/fallback fonts and text enlargement; check semantic breaks, punctuation, clipping and overflow.
- Behavior: exercise selection, return/reset, error/empty/loading states where applicable, keyboard and touch access, and reduced-motion fallback.
- Recipe-specific: Check evidence dates, source links, action scope, organization identity and truthful participation feedback.
- Status: `spec-ready`; rendered checks `not-run`; production integrations `not-connected` until confirmed by the actual project. Do not label a generated site verified solely because it used this recipe.

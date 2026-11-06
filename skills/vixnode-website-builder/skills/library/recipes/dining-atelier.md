---
id: dining-atelier
version: "1.0"
status: spec-ready
industry: food-restaurants
need: booking
visual_style: cinematic-hospitality
experience: buying-decision
theme_id: Style-4
color_style: guide-style-15
---

# Dining Atelier

## Selection and Dependencies

Use for food-restaurants with a primary booking task. This recipe is a complete starting specification, not a deployed website. Adapt it to actual brand facts and requested scope; do not treat its industry or palette as mandatory.

Read [composition rules](../composition.md), the `food-restaurants` profile in [industries](../modules/industries.md), `booking` in [needs](../modules/needs.md), `cinematic-hospitality` in [visual styles](../modules/visual-styles.md), and `buying-decision` in [experiences](../modules/experiences.md). For each requested language, resolve [locale profiles](../modules/locale-profiles.md) and [headline rules](../../typography.md). Do not create extra site locales merely because a profile exists.

## Concept and Art Direction

An editorial invitation that connects food and place with a clear, usable booking path.

Hero: Use original venue or food photography beside a solid cream text panel. Keep menu, hours and reservation access visible at the first screen.

Signature: Small menu rules and chapter labels echo the venue identity without obscuring prices.

Use the selected style module's grid, spacing, display/heading sizes, component geometry and image treatment. Instantiate these values in the generated project MD instead of leaving only a module reference.

## Required Content and Missing-Asset Policy

Licensed venue/food photos, actual menu/prices, hours/location and reservation integration.

Missing assets remain named dependencies. In a preview, use a labeled explanatory placeholder or a text-led composition rather than fabricated evidence. Production data and user claims must come from actual supplied/connected sources.

## Default Page Sequence

This sequence describes one content page. Reuse an approved multi-page architecture instead of creating layouts or extra pages without scope.

| Section | Evidence and content | Composition | Visitor action |
| --- | --- | --- | --- |
| 1. Place and invitation | Identify the actual venue, cuisine and location. | Image-led opening with protected text surface. | View the menu or reserve. |
| 2. Menu | Show actual menu sections, prices and supplied dietary details. | Readable typographic menu rows with selective images. | Inspect a menu section. |
| 3. People and atmosphere | Use real story and photography as supporting evidence. | Wide venue image then compact narrative. | Understand the venue. |
| 4. Visit and booking | Show verified address, hours, party rules and booking route. | Practical information beside booking selection/review. | Request or confirm a reservation through the real service. |

## Palette and Semantic Roles

Base: `Style-4` (Vintage Style); emotional direction: `guide-style-15`. Tone: Warm, atmospheric and grounded; cream surfaces, wine-red brand identity and restrained copper decoration.

Read the current [themes.json](../../themes.json). Values below reflect the catalog at authoring, not an immutable source. If current swatches differ, remap roles and record changes under the [color rules](../../color-system.md).

| Role | HEX | Origin |
| --- | --- | --- |
| background | #F5F5DC | Theme Style-4 |
| surface | #FFDEAD | Theme Style-4 |
| text | #222222 | Recipe-added neutral; not a source swatch |
| muted | #555555 | Recipe-added neutral; not a source swatch |
| primary | #800000 | Theme Style-4 |
| secondary | #CD853F | Theme Style-4 |
| accent | #8B0000 | Theme Style-4 |
| border | #800000 | Theme Style-4 |
| on_primary | #FFFFFF | Recipe-added neutral; not a source swatch |
| focus | #800000 | Theme Style-4 |

Area targets: background/reading space 60%, surface/supporting area 25%, primary/structural emphasis 10%, decorative accent 5%; mutually exclusive groups totaling 100. Include actual imagery in the visual estimate and label uncertainty. Colors may serve multiple semantic roles; do not count the same visible area twice.

Use `text` for essential copy on `background` and `surface`, `muted` for secondary copy, and `on_primary` for CTA labels on `primary`. Keep bright/pale `secondary` and `accent` decorative unless their actual text pairing is checked. Focus uses a 3px `focus` ring with a 3px background-colored separation; verify it against neighboring surfaces. Use visible text/icon feedback for errors and success. If dedicated state colors are added, record their origin and check all pairs rather than treating the decorative accent as an error color.

## Locale and Headline Composition

Resolve concrete typography for each requested locale using the style sizes and locale-specific fonts/tracking/leading. Body and caption values come from the locale module. The generated MD must include actual font stacks, device sizes, weights, tracking units, unitless line heights and measures.

Draft a real localized headline conveying this concept: An editorial invitation that connects food and place with a clear, usable booking path. Preserve exact supplied wording. Store the full copy, semantic segments, desktop/tablet/mobile lines, secondary breakpoints and protected terms for each locale. Desktop may keep a complete clause on one line when it fits; mobile prioritizes semantic clauses over matching desktop line count. No arbitrary CJK character breaks, global no-wrap, clipping or unlimited shrinking. Use explicit font floors and allow more natural lines under text enlargement. A headline plan remains `not-rendered` until actually inspected.

## Core Interaction and Responsive Behavior

Service/date/party selection enters review before submission. Availability has loading, empty and conflict states only when backed by a real source.

Inherit the main experience's trigger, transition duration, reversal, input and reduced-motion contract; resolve actual state names and content in the project MD. Inherit the need module's transactional states only for features actually requested and supported.

Mobile adaptation: Prioritize readable menu and hours. A reservation action may be sticky only if it does not cover form controls or focus.

Provide a complete normal-flow reading path without continuous effects. Reduced motion removes spatial movement; essential content and actions remain. No-script behavior follows the experience module and uses actual links or readable inline content.

## Integration Boundary

Use the actual reservation provider or contact route. No invented tables, dates, dietary assurances or automatic confirmation.

Planning stops at the requested MD. An authorized website build continues through the parent Skill's actual page/layout, preview and mutation contracts. Recipe IDs and internal instructions are not visible website copy.

## Acceptance and Verification Status

- Source and roles: actual theme exists; source/additional colors are distinguished; defined text/background and CTA pairs meet the chosen readability target (initial check: 4.5:1 for normal text); final rendered states require separate inspection.
- Content and structure: required evidence is genuine or explicitly pending; section order supports the primary task; main action works without completing a spectacle.
- Typography: inspect every requested locale at 320, 360, 768 and 1440px, loaded/fallback fonts and text enlargement; check semantic breaks, punctuation, clipping and overflow.
- Behavior: exercise selection, return/reset, error/empty/loading states where applicable, keyboard and touch access, and reduced-motion fallback.
- Recipe-specific: Check menu readability, time zone, party selection, unavailable state and actual reservation response.
- Status: `spec-ready`; rendered checks `not-run`; production integrations `not-connected` until confirmed by the actual project. Do not label a generated site verified solely because it used this recipe.

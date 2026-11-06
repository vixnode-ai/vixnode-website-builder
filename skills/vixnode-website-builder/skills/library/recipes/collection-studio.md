---
id: collection-studio
version: "1.0"
status: spec-ready
industry: retail-commerce
need: purchase
visual_style: bold-experimental
experience: buying-decision
theme_id: Style-5
color_style: guide-style-10
---

# Collection Studio

## Selection and Dependencies

Use for retail-commerce with a primary purchase task. This recipe is a complete starting specification, not a deployed website. Adapt it to actual brand facts and requested scope; do not treat its industry or palette as mandatory.

Read [composition rules](../composition.md), the `retail-commerce` profile in [industries](../modules/industries.md), `purchase` in [needs](../modules/needs.md), `bold-experimental` in [visual styles](../modules/visual-styles.md), and `buying-decision` in [experiences](../modules/experiences.md). For each requested language, resolve [locale profiles](../modules/locale-profiles.md) and [headline rules](../../typography.md). Do not create extra site locales merely because a profile exists.

## Concept and Art Direction

An expressive collection editorial that hands visitors a clear product decision path.

Hero: Use a 7:5 type/image opening with real collection assets and a direct collection action. Keep product names and prices in ordinary orientation.

Signature: Large collection numbering and selective color blocking frame real products.

Use the selected style module's grid, spacing, display/heading sizes, component geometry and image treatment. Instantiate these values in the generated project MD instead of leaving only a module reference.

## Required Content and Missing-Asset Policy

Product/variant catalog, real prices/currency/stock, original imagery and working cart/checkout provider.

Missing assets remain named dependencies. In a preview, use a labeled explanatory placeholder or a text-led composition rather than fabricated evidence. Production data and user claims must come from actual supplied/connected sources.

## Default Page Sequence

This sequence describes one content page. Reuse an approved multi-page architecture instead of creating layouts or extra pages without scope.

| Section | Evidence and content | Composition | Visitor action |
| --- | --- | --- | --- |
| 1. Collection statement | Present the actual collection proposition. | Bold text/image split with one repeated graphic gesture. | Explore the collection. |
| 2. Product discovery | Show actual products, prices/currency and useful filters. | Offset editorial opening followed by orderly product rows. | Filter and inspect a product. |
| 3. Product decision | Show actual variants, sizing/materials, price and availability. | Large product image beside complete option controls. | Choose valid options and add to cart. |
| 4. Delivery and checkout | Present actual delivery/returns and real cart destination. | Compact terms near the decision and cart review. | Continue to supported checkout. |

## Palette and Semantic Roles

Base: `Style-5` (Vibrant Style); emotional direction: `guide-style-10`. Tone: Expressive and energetic; quiet readable commerce surfaces, strong typography and localized orange/yellow accents.

Read the current [themes.json](../../themes.json). Values below reflect the catalog at authoring, not an immutable source. If current swatches differ, remap roles and record changes under the [color rules](../../color-system.md).

| Role | HEX | Origin |
| --- | --- | --- |
| background | #FFFFFF | Theme Style-5 |
| surface | #F8F8F8 | Recipe-added neutral; not a source swatch |
| text | #222222 | Recipe-added neutral; not a source swatch |
| muted | #555555 | Recipe-added neutral; not a source swatch |
| primary | #222222 | Recipe-added neutral; not a source swatch |
| secondary | #FFD700 | Theme Style-5 |
| accent | #FF4500 | Theme Style-5 |
| border | #555555 | Recipe-added neutral; not a source swatch |
| on_primary | #FFFFFF | Theme Style-5 |
| focus | #222222 | Recipe-added neutral; not a source swatch |

Area targets: background/reading space 60%, surface/supporting area 25%, primary/structural emphasis 10%, decorative accent 5%; mutually exclusive groups totaling 100. Include actual imagery in the visual estimate and label uncertainty. Colors may serve multiple semantic roles; do not count the same visible area twice.

Use `text` for essential copy on `background` and `surface`, `muted` for secondary copy, and `on_primary` for CTA labels on `primary`. Keep bright/pale `secondary` and `accent` decorative unless their actual text pairing is checked. Focus uses a 3px `focus` ring with a 3px background-colored separation; verify it against neighboring surfaces. Use visible text/icon feedback for errors and success. If dedicated state colors are added, record their origin and check all pairs rather than treating the decorative accent as an error color.

## Locale and Headline Composition

Resolve concrete typography for each requested locale using the style sizes and locale-specific fonts/tracking/leading. Body and caption values come from the locale module. The generated MD must include actual font stacks, device sizes, weights, tracking units, unitless line heights and measures.

Draft a real localized headline conveying this concept: An expressive collection editorial that hands visitors a clear product decision path. Preserve exact supplied wording. Store the full copy, semantic segments, desktop/tablet/mobile lines, secondary breakpoints and protected terms for each locale. Desktop may keep a complete clause on one line when it fits; mobile prioritizes semantic clauses over matching desktop line count. No arbitrary CJK character breaks, global no-wrap, clipping or unlimited shrinking. Use explicit font floors and allow more natural lines under text enlargement. A headline plan remains `not-rendered` until actually inspected.

## Core Interaction and Responsive Behavior

Filters expose count/empty/reset; variant selection updates actual product data. Add-to-cart has pending/success/unavailable/error states from the real provider.

Inherit the main experience's trigger, transition duration, reversal, input and reduced-motion contract; resolve actual state names and content in the project MD. Inherit the need module's transactional states only for features actually requested and supported.

Mobile adaptation: Reset overlapping editorial elements into normal order. Keep selected variants, price and action readable without obscuring detail.

Provide a complete normal-flow reading path without continuous effects. Reduced motion removes spatial movement; essential content and actions remain. No-script behavior follows the experience module and uses actual links or readable inline content.

## Integration Boundary

Do not invent inventory, discounts or checkout. A design-only demo is explicitly labeled; a production store needs real transaction support.

Planning stops at the requested MD. An authorized website build continues through the parent Skill's actual page/layout, preview and mutation contracts. Recipe IDs and internal instructions are not visible website copy.

## Acceptance and Verification Status

- Source and roles: actual theme exists; source/additional colors are distinguished; defined text/background and CTA pairs meet the chosen readability target (initial check: 4.5:1 for normal text); final rendered states require separate inspection.
- Content and structure: required evidence is genuine or explicitly pending; section order supports the primary task; main action works without completing a spectacle.
- Typography: inspect every requested locale at 320, 360, 768 and 1440px, loaded/fallback fonts and text enlargement; check semantic breaks, punctuation, clipping and overflow.
- Behavior: exercise selection, return/reset, error/empty/loading states where applicable, keyboard and touch access, and reduced-motion fallback.
- Recipe-specific: Verify variant validity, correct currency/price, unavailable behavior, cart response and checkout destination.
- Status: `spec-ready`; rendered checks `not-run`; production integrations `not-connected` until confirmed by the actual project. Do not label a generated site verified solely because it used this recipe.

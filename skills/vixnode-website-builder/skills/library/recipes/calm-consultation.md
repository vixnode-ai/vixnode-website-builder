---
id: calm-consultation
version: "1.0"
status: spec-ready
industry: healthcare-medical
need: booking
visual_style: calm-service
experience: buying-decision
theme_id: Style-22
color_style: guide-style-05
---

# Calm Consultation

## Selection and Dependencies

Use for healthcare-medical with a primary booking task. This recipe is a complete starting specification, not a deployed website. Adapt it to actual brand facts and requested scope; do not treat its industry or palette as mandatory.

Read [composition rules](../composition.md), the `healthcare-medical` profile in [industries](../modules/industries.md), `booking` in [needs](../modules/needs.md), `calm-service` in [visual styles](../modules/visual-styles.md), and `buying-decision` in [experiences](../modules/experiences.md). For each requested language, resolve [locale profiles](../modules/locale-profiles.md) and [headline rules](../../typography.md). Do not create extra site locales merely because a profile exists.

## Concept and Art Direction

A service guide that helps visitors choose an appropriate contact or appointment route without pressure.

Hero: Use a 6:6 split with a clear service proposition, provider/location context and an actual appointment action. Keep essential conditions in normal text.

Signature: Consistent service labels and transparent step descriptions establish trust.

Use the selected style module's grid, spacing, display/heading sizes, component geometry and image treatment. Instantiate these values in the generated project MD instead of leaving only a module reference.

## Required Content and Missing-Asset Policy

Verified provider/service information, permissions for people imagery and actual appointment destination.

Missing assets remain named dependencies. In a preview, use a labeled explanatory placeholder or a text-led composition rather than fabricated evidence. Production data and user claims must come from actual supplied/connected sources.

## Default Page Sequence

This sequence describes one content page. Reuse an approved multi-page architecture instead of creating layouts or extra pages without scope.

| Section | Evidence and content | Composition | Visitor action |
| --- | --- | --- | --- |
| 1. Service introduction | Explain actual service scope and who to contact. | Calm split hero, real provider/place image if supplied. | View services or request an appointment. |
| 2. Services and conditions | Describe actual services, durations and relevant practical conditions. | Compact service rows, not exaggerated benefit cards. | Select a service. |
| 3. Provider and location | Show verified identity, qualifications and access information. | Portrait/location evidence with captions. | Review practical details. |
| 4. Appointment route | Present actual request/booking options and what happens next. | Selection and review panel beside a contact fallback. | Send an appointment request or complete a real booking. |

## Palette and Semantic Roles

Base: `Style-22` (Soft Morandi Style); emotional direction: `guide-style-05`. Tone: Calm, human and orderly; pale neutral surfaces and limited muted green/lilac decoration with strong text contrast.

Read the current [themes.json](../../themes.json). Values below reflect the catalog at authoring, not an immutable source. If current swatches differ, remap roles and record changes under the [color rules](../../color-system.md).

| Role | HEX | Origin |
| --- | --- | --- |
| background | #F6F4F2 | Theme Style-22 |
| surface | #FFFFFF | Recipe-added neutral; not a source swatch |
| text | #222222 | Recipe-added neutral; not a source swatch |
| muted | #555555 | Recipe-added neutral; not a source swatch |
| primary | #222222 | Recipe-added neutral; not a source swatch |
| secondary | #A7BEAE | Theme Style-22 |
| accent | #C3B1E1 | Theme Style-22 |
| border | #555555 | Recipe-added neutral; not a source swatch |
| on_primary | #FFFFFF | Recipe-added neutral; not a source swatch |
| focus | #222222 | Recipe-added neutral; not a source swatch |

Area targets: background/reading space 60%, surface/supporting area 25%, primary/structural emphasis 10%, decorative accent 5%; mutually exclusive groups totaling 100. Include actual imagery in the visual estimate and label uncertainty. Colors may serve multiple semantic roles; do not count the same visible area twice.

Use `text` for essential copy on `background` and `surface`, `muted` for secondary copy, and `on_primary` for CTA labels on `primary`. Keep bright/pale `secondary` and `accent` decorative unless their actual text pairing is checked. Focus uses a 3px `focus` ring with a 3px background-colored separation; verify it against neighboring surfaces. Use visible text/icon feedback for errors and success. If dedicated state colors are added, record their origin and check all pairs rather than treating the decorative accent as an error color.

## Locale and Headline Composition

Resolve concrete typography for each requested locale using the style sizes and locale-specific fonts/tracking/leading. Body and caption values come from the locale module. The generated MD must include actual font stacks, device sizes, weights, tracking units, unitless line heights and measures.

Draft a real localized headline conveying this concept: A service guide that helps visitors choose an appropriate contact or appointment route without pressure. Preserve exact supplied wording. Store the full copy, semantic segments, desktop/tablet/mobile lines, secondary breakpoints and protected terms for each locale. Desktop may keep a complete clause on one line when it fits; mobile prioritizes semantic clauses over matching desktop line count. No arbitrary CJK character breaks, global no-wrap, clipping or unlimited shrinking. Use explicit font floors and allow more natural lines under text enlargement. A headline plan remains `not-rendered` until actually inspected.

## Core Interaction and Responsive Behavior

Service selection updates practical details and review. A request submission never becomes a confirmed appointment unless the connected service confirms it.

Inherit the main experience's trigger, transition duration, reversal, input and reduced-motion contract; resolve actual state names and content in the project MD. Inherit the need module's transactional states only for features actually requested and supported.

Mobile adaptation: Keep service conditions beside the action and use visible labels. Avoid image-heavy openings that push appointment information far below the fold.

Provide a complete normal-flow reading path without continuous effects. Reduced motion removes spatial movement; essential content and actions remain. No-script behavior follows the experience module and uses actual links or readable inline content.

## Integration Boundary

Collect only information needed for the actual request. No public demo intake of detailed health history, invented qualifications or treatment claims.

Planning stops at the requested MD. An authorized website build continues through the parent Skill's actual page/layout, preview and mutation contracts. Recipe IDs and internal instructions are not visible website copy.

## Acceptance and Verification Status

- Source and roles: actual theme exists; source/additional colors are distinguished; defined text/background and CTA pairs meet the chosen readability target (initial check: 4.5:1 for normal text); final rendered states require separate inspection.
- Content and structure: required evidence is genuine or explicitly pending; section order supports the primary task; main action works without completing a spectacle.
- Typography: inspect every requested locale at 320, 360, 768 and 1440px, loaded/fallback fonts and text enlargement; check semantic breaks, punctuation, clipping and overflow.
- Behavior: exercise selection, return/reset, error/empty/loading states where applicable, keyboard and touch access, and reduced-motion fallback.
- Recipe-specific: Verify provider facts, service labels, request-versus-confirmation wording and accessible error feedback.
- Status: `spec-ready`; rendered checks `not-run`; production integrations `not-connected` until confirmed by the actual project. Do not label a generated site verified solely because it used this recipe.

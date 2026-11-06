---
id: cultural-passage
version: "1.0"
status: spec-ready
industry: entertainment-media
need: registration
visual_style: cinematic-hospitality
experience: spatial-journey
theme_id: Style-12
color_style: guide-style-17
---

# Cultural Passage

## Selection and Dependencies

Use for entertainment-media with a primary registration task. This recipe is a complete starting specification, not a deployed website. Adapt it to actual brand facts and requested scope; do not treat its industry or palette as mandatory.

Read [composition rules](../composition.md), the `entertainment-media` profile in [industries](../modules/industries.md), `registration` in [needs](../modules/needs.md), `cinematic-hospitality` in [visual styles](../modules/visual-styles.md), and `spatial-journey` in [experiences](../modules/experiences.md). For each requested language, resolve [locale profiles](../modules/locale-profiles.md) and [headline rules](../../typography.md). Do not create extra site locales merely because a profile exists.

## Concept and Art Direction

A chapter journey that lets visitors explore a cultural subject and still reach practical participation details directly.

Hero: Use a named chapter opening with real art or an explanatory scene and solid readable text. Chapter navigation and program/registration links remain reachable.

Signature: A content-related path motif connects chapter numbers and progress, rather than generic particles.

Use the selected style module's grid, spacing, display/heading sizes, component geometry and image treatment. Instantiate these values in the generated project MD instead of leaving only a module reference.

## Required Content and Missing-Asset Policy

Actual cultural content/sources, licensed scene/media assets, event details and registration destination.

Missing assets remain named dependencies. In a preview, use a labeled explanatory placeholder or a text-led composition rather than fabricated evidence. Production data and user claims must come from actual supplied/connected sources.

## Default Page Sequence

This sequence describes one content page. Reuse an approved multi-page architecture instead of creating layouts or extra pages without scope.

| Section | Evidence and content | Composition | Visitor action |
| --- | --- | --- | --- |
| 1. Opening and orientation | State the actual subject/event and how to explore it. | Scene-led opening with protected text and chapter links. | Explore or jump to practical information. |
| 2. Story chapters | Organize source-supported content into meaningful chapters. | Scene plus semantic HTML text, preserving ordinary scroll. | Move among chapters or use text view. |
| 3. Program and practical details | Show actual dates/time zone, venue, access and participation terms. | Static information region independent of scene rendering. | Review the event/program. |
| 4. Registration and exit | Present actual registration route and allow replay without losing access to essentials. | Readable action panel and chapter index. | Register through the real service or revisit a chapter. |

## Palette and Semantic Roles

Base: `Style-12` (Cinematic Style); emotional direction: `guide-style-17`. Tone: Dramatic but readable; dark surfaces, warm gold navigation and restrained red emphasis.

Read the current [themes.json](../../themes.json). Values below reflect the catalog at authoring, not an immutable source. If current swatches differ, remap roles and record changes under the [color rules](../../color-system.md).

| Role | HEX | Origin |
| --- | --- | --- |
| background | #000000 | Theme Style-12 |
| surface | #181818 | Recipe-added neutral; not a source swatch |
| text | #FFFFFF | Theme Style-12 |
| muted | #C0C0C0 | Recipe-added neutral; not a source swatch |
| primary | #FFD700 | Theme Style-12 |
| secondary | #B22222 | Theme Style-12 |
| accent | #FFD700 | Theme Style-12 |
| border | #696969 | Theme Style-12 |
| on_primary | #000000 | Theme Style-12 |
| focus | #FFD700 | Theme Style-12 |

Area targets: background/reading space 60%, surface/supporting area 25%, primary/structural emphasis 10%, decorative accent 5%; mutually exclusive groups totaling 100. Include actual imagery in the visual estimate and label uncertainty. Colors may serve multiple semantic roles; do not count the same visible area twice.

Use `text` for essential copy on `background` and `surface`, `muted` for secondary copy, and `on_primary` for CTA labels on `primary`. Keep bright/pale `secondary` and `accent` decorative unless their actual text pairing is checked. Focus uses a 3px `focus` ring with a 3px background-colored separation; verify it against neighboring surfaces. Use visible text/icon feedback for errors and success. If dedicated state colors are added, record their origin and check all pairs rather than treating the decorative accent as an error color.

## Locale and Headline Composition

Resolve concrete typography for each requested locale using the style sizes and locale-specific fonts/tracking/leading. Body and caption values come from the locale module. The generated MD must include actual font stacks, device sizes, weights, tracking units, unitless line heights and measures.

Draft a real localized headline conveying this concept: A chapter journey that lets visitors explore a cultural subject and still reach practical participation details directly. Preserve exact supplied wording. Store the full copy, semantic segments, desktop/tablet/mobile lines, secondary breakpoints and protected terms for each locale. Desktop may keep a complete clause on one line when it fits; mobile prioritizes semantic clauses over matching desktop line count. No arbitrary CJK character breaks, global no-wrap, clipping or unlimited shrinking. Use explicit font floors and allow more natural lines under text enlargement. A headline plan remains `not-rendered` until actually inspected.

## Core Interaction and Responsive Behavior

Chapter progress synchronizes scene and HTML content; direct links skip transitional motion. Text view is always available and rendering failure falls back to complete chapters.

Inherit the main experience's trigger, transition duration, reversal, input and reduced-motion contract; resolve actual state names and content in the project MD. Inherit the need module's transactional states only for features actually requested and supported.

Mobile adaptation: Prefer static chapter art on touch/lower-performance devices. Keep program and registration in normal document flow.

Provide a complete normal-flow reading path without continuous effects. Reduced motion removes spatial movement; essential content and actions remain. No-script behavior follows the experience module and uses actual links or readable inline content.

## Integration Boundary

Scene capability must be supported by the builder. No invented events, ticket availability or registration success; use real event data/provider.

Planning stops at the requested MD. An authorized website build continues through the parent Skill's actual page/layout, preview and mutation contracts. Recipe IDs and internal instructions are not visible website copy.

## Acceptance and Verification Status

- Source and roles: actual theme exists; source/additional colors are distinguished; defined text/background and CTA pairs meet the chosen readability target (initial check: 4.5:1 for normal text); final rendered states require separate inspection.
- Content and structure: required evidence is genuine or explicitly pending; section order supports the primary task; main action works without completing a spectacle.
- Typography: inspect every requested locale at 320, 360, 768 and 1440px, loaded/fallback fonts and text enlargement; check semantic breaks, punctuation, clipping and overflow.
- Behavior: exercise selection, return/reset, error/empty/loading states where applicable, keyboard and touch access, and reduced-motion fallback.
- Recipe-specific: Verify direct chapter jumps, text fallback, keyboard access, scene failure, practical details and registration response.
- Status: `spec-ready`; rendered checks `not-run`; production integrations `not-connected` until confirmed by the actual project. Do not label a generated site verified solely because it used this recipe.

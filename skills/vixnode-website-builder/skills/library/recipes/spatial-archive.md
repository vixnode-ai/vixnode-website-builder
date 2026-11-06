---
id: spatial-archive
version: "1.0"
status: spec-ready
industry: home-interior
need: portfolio
visual_style: architectural-gallery
experience: timeline-exhibition
theme_id: Style-3
color_style: guide-style-06
---

# Spatial Archive

## Selection and Dependencies

Use for home-interior with a primary portfolio task. This recipe is a complete starting specification, not a deployed website. Adapt it to actual brand facts and requested scope; do not treat its industry or palette as mandatory.

Read [composition rules](../composition.md), the `home-interior` profile in [industries](../modules/industries.md), `portfolio` in [needs](../modules/needs.md), `architectural-gallery` in [visual styles](../modules/visual-styles.md), and `timeline-exhibition` in [experiences](../modules/experiences.md). For each requested language, resolve [locale profiles](../modules/locale-profiles.md) and [headline rules](../../typography.md). Do not create extra site locales merely because a profile exists.

## Concept and Art Direction

A project archive that makes spatial work and the designer role easy to inspect.

Hero: Open with one actual project image, restrained positioning text and a project index. Do not force a full-screen slideshow before the archive.

Signature: Project numbering and material/location captions create a recognizable archive.

Use the selected style module's grid, spacing, display/heading sizes, component geometry and image treatment. Instantiate these values in the generated project MD instead of leaving only a module reference.

## Required Content and Missing-Asset Policy

Real project imagery/plans, credits, project context, scope/role and contact destination.

Missing assets remain named dependencies. In a preview, use a labeled explanatory placeholder or a text-led composition rather than fabricated evidence. Production data and user claims must come from actual supplied/connected sources.

## Default Page Sequence

This sequence describes one content page. Reuse an approved multi-page architecture instead of creating layouts or extra pages without scope.

| Section | Evidence and content | Composition | Visitor action |
| --- | --- | --- | --- |
| 1. Position and selected project | Identify the practice and real scope. | Wide image with a 4-column text margin. | Explore selected work. |
| 2. Project index | Show actual project names, context and available categories. | Varied 8:4 and 6:6 image rhythm with adjacent captions. | Filter or open a project. |
| 3. Project detail | Explain brief, role, materials and actual outcomes. | 8:4 image/context layout with intact plans. | View detail and return to the same index position. |
| 4. Method and contact | Explain collaboration and actual service scope. | Short editorial note and inquiry route. | Discuss a project. |

## Palette and Semantic Roles

Base: `Style-3` (Minimalist Style); emotional direction: `guide-style-06`. Tone: Quiet, spatial and precise; neutral surfaces, photographic color and minimal brand accents.

Read the current [themes.json](../../themes.json). Values below reflect the catalog at authoring, not an immutable source. If current swatches differ, remap roles and record changes under the [color rules](../../color-system.md).

| Role | HEX | Origin |
| --- | --- | --- |
| background | #FFFFFF | Theme Style-3 |
| surface | #F8F8F8 | Theme Style-3 |
| text | #000000 | Theme Style-3 |
| muted | #555555 | Recipe-added neutral; not a source swatch |
| primary | #000000 | Theme Style-3 |
| secondary | #C0C0C0 | Theme Style-3 |
| accent | #808080 | Theme Style-3 |
| border | #808080 | Theme Style-3 |
| on_primary | #FFFFFF | Theme Style-3 |
| focus | #000000 | Theme Style-3 |

Area targets: background/reading space 60%, surface/supporting area 25%, primary/structural emphasis 10%, decorative accent 5%; mutually exclusive groups totaling 100. Include actual imagery in the visual estimate and label uncertainty. Colors may serve multiple semantic roles; do not count the same visible area twice.

Use `text` for essential copy on `background` and `surface`, `muted` for secondary copy, and `on_primary` for CTA labels on `primary`. Keep bright/pale `secondary` and `accent` decorative unless their actual text pairing is checked. Focus uses a 3px `focus` ring with a 3px background-colored separation; verify it against neighboring surfaces. Use visible text/icon feedback for errors and success. If dedicated state colors are added, record their origin and check all pairs rather than treating the decorative accent as an error color.

## Locale and Headline Composition

Resolve concrete typography for each requested locale using the style sizes and locale-specific fonts/tracking/leading. Body and caption values come from the locale module. The generated MD must include actual font stacks, device sizes, weights, tracking units, unitless line heights and measures.

Draft a real localized headline conveying this concept: A project archive that makes spatial work and the designer role easy to inspect. Preserve exact supplied wording. Store the full copy, semantic segments, desktop/tablet/mobile lines, secondary breakpoints and protected terms for each locale. Desktop may keep a complete clause on one line when it fits; mobile prioritizes semantic clauses over matching desktop line count. No arbitrary CJK character breaks, global no-wrap, clipping or unlimited shrinking. Use explicit font floors and allow more natural lines under text enlargement. A headline plan remains `not-rendered` until actually inspected.

## Core Interaction and Responsive Behavior

Index filtering updates count and empty/reset states. Opening detail preserves filter/position; closing returns focus to its trigger, or use actual detail links.

Inherit the main experience's trigger, transition duration, reversal, input and reduced-motion contract; resolve actual state names and content in the project MD. Inherit the need module's transactional states only for features actually requested and supported.

Mobile adaptation: Use one-column projects with readable captions and deliberate crops. No hover-only project titles.

Provide a complete normal-flow reading path without continuous effects. Reduced motion removes spatial movement; essential content and actions remain. No-script behavior follows the experience module and uses actual links or readable inline content.

## Integration Boundary

Do not fabricate finished projects, locations, awards or results. A modal requires actual focus/close behavior; otherwise use normal links or inline detail.

Planning stops at the requested MD. An authorized website build continues through the parent Skill's actual page/layout, preview and mutation contracts. Recipe IDs and internal instructions are not visible website copy.

## Acceptance and Verification Status

- Source and roles: actual theme exists; source/additional colors are distinguished; defined text/background and CTA pairs meet the chosen readability target (initial check: 4.5:1 for normal text); final rendered states require separate inspection.
- Content and structure: required evidence is genuine or explicitly pending; section order supports the primary task; main action works without completing a spectacle.
- Typography: inspect every requested locale at 320, 360, 768 and 1440px, loaded/fallback fonts and text enlargement; check semantic breaks, punctuation, clipping and overflow.
- Behavior: exercise selection, return/reset, error/empty/loading states where applicable, keyboard and touch access, and reduced-motion fallback.
- Recipe-specific: Check original image ratios, detail return, empty filters, image credits and complete project captions.
- Status: `spec-ready`; rendered checks `not-run`; production integrations `not-connected` until confirmed by the actual project. Do not label a generated site verified solely because it used this recipe.

---
id: industrial-proof
version: "1.0"
status: spec-ready
industry: manufacturing-craft
need: inquiry
visual_style: industrial-precision
experience: process-exploration
theme_id: Style-8
color_style: guide-style-13
---

# Industrial Proof

## Selection and Dependencies

Use for manufacturing-craft with a primary inquiry task. This recipe is a complete starting specification, not a deployed website. Adapt it to actual brand facts and requested scope; do not treat its industry or palette as mandatory.

Read [composition rules](../composition.md), the `manufacturing-craft` profile in [industries](../modules/industries.md), `inquiry` in [needs](../modules/needs.md), `industrial-precision` in [visual styles](../modules/visual-styles.md), and `process-exploration` in [experiences](../modules/experiences.md). For each requested language, resolve [locale profiles](../modules/locale-profiles.md) and [headline rules](../../typography.md). Do not create extra site locales merely because a profile exists.

## Concept and Art Direction

A capability dossier that connects verified specifications and process evidence to a qualified inquiry.

Hero: Use a 4:8 split: exact offer and quote action at left, real equipment or output evidence at right. Avoid decorative numeric claims.

Signature: Numbered stages and ruled specification tables form the visual identity.

Use the selected style module's grid, spacing, display/heading sizes, component geometry and image treatment. Instantiate these values in the generated project MD instead of leaving only a module reference.

## Required Content and Missing-Asset Policy

Actual equipment/process photos, verified specifications, case evidence and request endpoint.

Missing assets remain named dependencies. In a preview, use a labeled explanatory placeholder or a text-led composition rather than fabricated evidence. Production data and user claims must come from actual supplied/connected sources.

## Default Page Sequence

This sequence describes one content page. Reuse an approved multi-page architecture instead of creating layouts or extra pages without scope.

| Section | Evidence and content | Composition | Visitor action |
| --- | --- | --- | --- |
| 1. Capability proposition | State the actual manufacturing/service scope. | 4:8 hero with precise image caption. | Request a capability discussion. |
| 2. Capability evidence | List verified materials, processes and supplied specifications with units. | Structured rows or a real comparison table. | Inspect relevant capabilities. |
| 3. Process and quality | Explain stages and actual quality checks without invented certifications. | Selectable process diagram plus evidence panel. | Inspect a stage and its output. |
| 4. Cases and quote brief | Present real work, cooperation conditions and required inquiry fields. | Case rows followed by a concise technical inquiry. | Send a quote brief. |

## Palette and Semantic Roles

Base: `Style-8` (Industrial Style); emotional direction: `guide-style-13`. Tone: Measured, dependable and concrete; light surfaces with slate structural color and limited steel accents.

Read the current [themes.json](../../themes.json). Values below reflect the catalog at authoring, not an immutable source. If current swatches differ, remap roles and record changes under the [color rules](../../color-system.md).

| Role | HEX | Origin |
| --- | --- | --- |
| background | #FFFFFF | Theme Style-8 |
| surface | #F5F7FA | Recipe-added neutral; not a source swatch |
| text | #2F4F4F | Theme Style-8 |
| muted | #555555 | Recipe-added neutral; not a source swatch |
| primary | #2F4F4F | Theme Style-8 |
| secondary | #B0C4DE | Theme Style-8 |
| accent | #696969 | Theme Style-8 |
| border | #696969 | Theme Style-8 |
| on_primary | #FFFFFF | Theme Style-8 |
| focus | #2F4F4F | Theme Style-8 |

Area targets: background/reading space 60%, surface/supporting area 25%, primary/structural emphasis 10%, decorative accent 5%; mutually exclusive groups totaling 100. Include actual imagery in the visual estimate and label uncertainty. Colors may serve multiple semantic roles; do not count the same visible area twice.

Use `text` for essential copy on `background` and `surface`, `muted` for secondary copy, and `on_primary` for CTA labels on `primary`. Keep bright/pale `secondary` and `accent` decorative unless their actual text pairing is checked. Focus uses a 3px `focus` ring with a 3px background-colored separation; verify it against neighboring surfaces. Use visible text/icon feedback for errors and success. If dedicated state colors are added, record their origin and check all pairs rather than treating the decorative accent as an error color.

## Locale and Headline Composition

Resolve concrete typography for each requested locale using the style sizes and locale-specific fonts/tracking/leading. Body and caption values come from the locale module. The generated MD must include actual font stacks, device sizes, weights, tracking units, unitless line heights and measures.

Draft a real localized headline conveying this concept: A capability dossier that connects verified specifications and process evidence to a qualified inquiry. Preserve exact supplied wording. Store the full copy, semantic segments, desktop/tablet/mobile lines, secondary breakpoints and protected terms for each locale. Desktop may keep a complete clause on one line when it fits; mobile prioritizes semantic clauses over matching desktop line count. No arbitrary CJK character breaks, global no-wrap, clipping or unlimited shrinking. Use explicit font floors and allow more natural lines under text enlargement. A headline plan remains `not-rendered` until actually inspected.

## Core Interaction and Responsive Behavior

Process stages update evidence and output; specification details expand without losing selection. Form validation preserves entered brief details on failure.

Inherit the main experience's trigger, transition duration, reversal, input and reduced-motion contract; resolve actual state names and content in the project MD. Inherit the need module's transactional states only for features actually requested and supported.

Mobile adaptation: Stack key specification labels/values; wider tables get a labeled scroll region rather than clipped text.

Provide a complete normal-flow reading path without continuous effects. Reduced motion removes spatial movement; essential content and actions remain. No-script behavior follows the experience module and uses actual links or readable inline content.

## Integration Boundary

Do not invent tolerances, capacity, certifications, clients or delivery dates. Use the actual contact/request integration.

Planning stops at the requested MD. An authorized website build continues through the parent Skill's actual page/layout, preview and mutation contracts. Recipe IDs and internal instructions are not visible website copy.

## Acceptance and Verification Status

- Source and roles: actual theme exists; source/additional colors are distinguished; defined text/background and CTA pairs meet the chosen readability target (initial check: 4.5:1 for normal text); final rendered states require separate inspection.
- Content and structure: required evidence is genuine or explicitly pending; section order supports the primary task; main action works without completing a spectacle.
- Typography: inspect every requested locale at 320, 360, 768 and 1440px, loaded/fallback fonts and text enlargement; check semantic breaks, punctuation, clipping and overflow.
- Behavior: exercise selection, return/reset, error/empty/loading states where applicable, keyboard and touch access, and reduced-motion fallback.
- Recipe-specific: Check units, evidence provenance, table access, stage navigation and truthful inquiry delivery feedback.
- Status: `spec-ready`; rendered checks `not-run`; production integrations `not-connected` until confirmed by the actual project. Do not label a generated site verified solely because it used this recipe.

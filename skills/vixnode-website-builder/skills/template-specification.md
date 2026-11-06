# Decision model and output contract

## Composition rules

The six dimensions are independent: industry defines audience and evidence; need defines visitor task and information architecture; style defines composition and material language; palette defines color roles and ratios; experience defines reading and interaction; locale defines copy and typography. Store reusable decisions as modules or recipes, not all possible combinations.

Use the implemented [library index](library/index.md) and [composition contract](library/composition.md). Record selected recipe/module IDs, versions and overrides, then expand concrete decisions into the deliverable. A valid recipe selection does not establish that a generated website is functional or visually verified.

Resolve conflicts in this order: explicit user requirements, existing brand/project rules, visitor task and readability, selected design recipe, optional trend references. Surface a genuine conflict instead of silently discarding a requested choice. Examples inform the design; they do not authorize extra website pages or live mutations.

Possible needs include brand awareness, product understanding, inquiry, purchase, booking, registration, recruitment, portfolio and knowledge reading. Add other needs as required. Pair an industry and need with content requirements: for example, a craft inquiry site needs process evidence, actual work and contact details; a product-understanding site needs representative UI or a clearly labeled demo. Never invent customer quotes, certifications or product results to fill a design.

Experience modes include product demonstration, brand story, timeline/exhibition, spatial exploration, buying decision and knowledge reading. Select by content, user task, available assets and device constraints. A cinematic effect must still leave navigation, content and the main action usable.

## Integrated Markdown contract

Use the supplied template. Required sections:

1. **Identity and status:** stable recipe ID, version, draft/spec-reviewed/visually-verified status, locales, source files and reference links with observation dates where relevant.
2. **Brief:** industry, audience, visitor task, requested pages, brand traits, known assets and assumptions.
3. **Composition:** selected six dimensions, short rationale, visual concept, geometry, image treatment, section rhythm and signature detail.
4. **Color:** actual theme source and ID, color-style taxonomy, emotion/tone/strategy, HEX mapped to semantic roles, area ratios, variants and any adjustments.
5. **Typography:** each locale's font stacks and heading/body metrics, real headline segments and device-specific line plans, fallback behavior.
6. **Page/section structure:** purpose, content, composition, action and mobile adaptation per section. Honor an existing authorized sitemap.
7. **Experience:** trigger, states, feedback, timing, exit/reversal, input methods and reduced-motion behavior for each core interaction.
8. **Acceptance and handoff:** observable checks, actual results, unresolved assets/copy, builder constraints and output scope.

For a specification ready for implementation, use concrete color values, typography values and state behavior; “premium”, “responsive” or “beautiful” cannot substitute for these. For early planning, unresolved values can remain explicitly named with a method to resolve them. Do not invent a completed implementation.

## Completion checks

**Document checks:** validate theme IDs and actual source values; account for derived colors; ratios are mutually exclusive and total 100; references are accessible or limitations noted; requested locales have distinct typography decisions; every hero has semantic line plans; interactions have real states and a fallback; pending facts are labeled.

**Visual checks, only with an actual render:** inspect representative mobile, tablet and desktop widths (for example 360, 768 and 1440 CSS pixels; add 320 for narrow layouts) and the widths where a headline wraps. Inspect fonts after load and fallback, long translations, text enlargement, punctuation and overflow. Confirm text/controls remain distinguishable against actual backgrounds, including imagery. Exercise core state transitions by touch or pointer and keyboard as supported; inspect reduced-motion behavior. Record widths, fonts, checks and evidence, not just “passed”.

**Stop condition:** deliver when the requested specification is complete and reviewed, or when scoped implementation has been checked. If essential brand assets or production copy are missing, deliver resolved work and state exactly which implementation decisions remain pending. Do not publish a demonstration or alter live pages to compensate for missing tools.

## How an AI should interpret common requests

- "A technology brand with a warm vintage style, Traditional Chinese and Japanese, Markdown only": preserve the requested style, select traceable palette values, and supply two typography profiles and headline plans. Do not default to neon styling or call publication tools.
- "Use color guide example 001": if only its name/index is available, preserve its ID and mark missing color data. Request actual swatches when exact reproduction is essential, or identify an alternative from available theme data.
- "Fix the mobile headline wrapping": inspect existing copy and layout, then update semantic breakpoints and related typography. Do not change the palette or site architecture without a reason tied to the request.

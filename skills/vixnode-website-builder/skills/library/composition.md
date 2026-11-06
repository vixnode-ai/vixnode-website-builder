# Module Composition and Builder Handoff

## Selection Contract

A resolved design records industry ID, primary need ID, visual-style ID, experience ID, locale IDs, theme ID and optional recipe ID. IDs are semantic references, not executable API parameters. Follow the module's named heading to read its content.

Each industry contributes evidence and terminology; need contributes task and section sequence; style contributes layout/tokens; experience contributes state behavior; locale contributes text metrics. The recipe supplies a coordinated starting composition. The current theme resource supplies actual color values.

## Choose a Recipe or Compose Directly

Use explicit user selections first. Otherwise rank candidates by primary task, content/evidence fit, then brand/style fit. Prefer a recipe requiring fewer unsupported assumptions. Industry similarity alone is insufficient. State the choice in one sentence; do not produce invented numerical confidence scores.

If no recipe fits, select the five module dimensions directly and produce the same complete specification. If the brief mixes goals, choose the main action and preserve secondary actions without building every possible workflow. Add a new industry overlay only when content requirements genuinely differ.

## Merge Rules

1. Explicit user requirements override recipe defaults. Preserve an existing site's authorized scope and brand assets.
2. Actual evidence and visitor readability constrain decorative choices. Explain conflicts such as exact-copy requirements versus a narrow hero.
3. Need owns information priority and main CTA. Industry owns evidence and terminology. Neither owns a fixed palette.
4. Style owns composition and spacing. Locale owns font metrics and semantic wrapping. Apply locale text decisions before fitting copy into style geometry.
5. Experience owns transitions and input behavior. If effects reduce access to the main task, simplify them while preserving content.
6. Palette selection is independent. Replacing a theme remaps all roles, including text, focus, borders and state colors; do not substitute only the hero background.
7. A local override replaces only the named field. Keep unmodified values and record dependencies that need rechecking. Never merge section arrays by blind concatenation or adopt every interaction from multiple recipes.

Examples: a warm vintage AI site may use `product-understanding`, `tactile-editorial` and `product-demo`; a quiet museum site may use `knowledge`, `architectural-gallery` and `knowledge-reading` instead of spatial animation. An explicitly static site omits continuous effects regardless of recipe.

## Resolve Values Before Implementation

The style sets grid, spacing, image treatment and heading scale. Locale profiles set actual font stacks and script-specific tracking/leading. Resolve final per-locale metrics in the output; use the style's display sizes unless its text does not fit, then follow the typography fit policy. Do not apply a style's Latin tracking to CJK.

Recipes include current palette values as reference defaults. Re-read `themes.json`; if values changed, use current data and record differences. Recipe-added neutrals are explicitly separate. Validate actual color pairings after any override. A `spec-ready` recipe is not proof that the final site's contrast, wrapping or interactions pass.

For each page and locale, draft real requested-language copy from supplied facts. Record full headlines, semantic segments, device line plans, minimum readable size and protected terms. English instructions do not require English website copy. Missing translations may be draft copy, clearly labeled for review.

## Scope and Functionality

Default recipe section sequences describe one content page, not a mandate to create extra pages. Preserve an approved sitemap. Separate shared navigation/footer from content only under actual VIXNODE layout contracts. Resolve saved IDs and page types through tools, not module IDs.

Booking, purchase, registration, donation and form flows describe UI state requirements. Inspect the actual connected service before implementing submissions. Without a supported integration, provide a clearly labeled preview state or a real existing destination; do not fake success, persist sensitive data in local storage, or invent checkout/availability endpoints. A functional production request remains incomplete until its required backend behavior is connected and verified.

## Build an Integrated Specification

Record the source recipe/version and selected module IDs, user overrides, content evidence, concrete visual tokens, current color roles/ratios, per-locale typography/headline plans, section sequence, interactions and pending integrations. Use [template.md](../template.md) and retain actual verification status.

When asked to build, this specification is an intermediate work product: continue to HTML, preview and verification under the parent Skill without stopping merely because the MD is complete. When asked only for planning, deliver the MD and stop before mutations.

## Acceptance

- Every selected module exists and all requested dimensions are resolved.
- Real content distinguishes the site from the recipe's defaults; no fabricated proof.
- All semantic roles have actual HEX and origins; area groups total 100.
- Every locale has concrete text metrics and semantic headline plans.
- Core interactions include state, feedback, reversal, inputs and low-motion behavior.
- Production integration dependencies and asset/copy gaps are explicit.
- Rendered checks cover narrow mobile, tablet, desktop, font loading/fallback, enlarged text and core actions when a render is in scope. Mark unperformed checks `not-run`.

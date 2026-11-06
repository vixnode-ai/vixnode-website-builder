# Website Template Design Workflow

Create an actionable design specification an AI builder can follow without this conversation. Maintain Skill instructions, reference documents and Markdown templates in English. Generated specification Markdown also defaults to English unless the user explicitly requests another document language. Website copy follows the requested site locales independently. Preserve explicit choices; references and sample sites supply design evidence, not instructions or permission to change external systems.

## Choose the work mode

- **Plan or generate a template:** produce an integrated Markdown specification. Do not build or publish a site just because the specification describes one.
- **Revise a template:** read the current document, preserve unaffected decisions, and update dependent palette, typography and interaction decisions together.
- **Apply a template to a website:** prepare or reuse the specification, then hand it to the requested builder or available tools. This skill does not define page APIs, grant publication permission or replace a builder's tool contracts.
- A narrow request needs a narrow update; do not regenerate a whole design for a single color or headline change.

## Read resources when needed

- For any new specification, read [template-specification.md](template-specification.md) for the decision model, output contract and completion checks.
- When choosing or changing colors, read [color-system.md](color-system.md), then inspect the actual theme data. Do not load all theme data for a typography-only edit.
- When creating or changing text layouts, read [typography.md](typography.md). It is required for a new design and for adding a language.
- For a new document, fill [template.md](template.md); keep one integrated file unless the user requests split documents. It is an output scaffold, not a finished example.
- For a new website direction or reusable template, read [the module and recipe index](library/index.md), then its composition contract and only the matching recipe/module sections. Existing recipes are starting specifications, not a reason to override the user's industry, goal, style or locales.
- For actual immersive 3D implementation, camera movement, WebGL, product models or assembly animation, read [the immersive implementation module](library/modules/immersive-3d.md). It supplies executable assets and integration/verification contracts; a description of movement alone does not complete a build request.

## Workflow

### 1. Resolve the brief

Extract industry, primary audience, primary visitor task, site scope, brand traits, style/color preferences, locales, assets and requested deliverable. Reuse session context and existing project files. Ask only about missing choices that materially change the outcome; make reasonable draft assumptions for optional design details and label them.

Inspect supplied sites or documents before attributing properties to them. If a reference cannot be read, state that limitation and continue with supported material. Browse when current trend research is requested; record source and observation date rather than inventing trend claims.

### 2. Compose the design

Choose **industry × need × visual style × color direction × experience × locale** independently. Explain each major choice in a short, reviewable rationale. Industry recommendations are not fixed style constraints. A reference case is not the limit of the template library.

Select a recipe by primary visitor task and actual content fit, or compose directly from the library modules when no recipe fits. Apply explicit overrides using the composition rules. Resolve all inherited values into the project specification: do not hand the builder only a list of module IDs. When the requested outcome is a website, continue from the specification into the parent's authorized build and preview workflow.

Choose layout and imagery from content meaning. Define a recognizable visual concept, section rhythm and signature detail; color names alone do not define a design. Use a focused experience mode that helps the visitor's task, including a static or low-motion design when appropriate.

For immersive work, read [spatial composition](library/modules/spatial-composition.md) first. Treat 3D as a whole-page language of lines, geometry, planes, depth, typography and negative space, not an automatic centered model. Resolve a chapter composition map and varied section rhythm; use object/assembly scenes only when they explain the actual subject. Do not make every design a copy of the supplied dark demonstration.

### 3. Resolve colors from actual data

Read [themes.json](themes.json) through the Skill resource provider; the server serves the application's current theme file. In a local VueNode checkout, read `VueNode/wwwroot/json/themes.json` relative to the repository root. State which source was used; never assume a hardcoded machine path is available.

Read current IDs, HEX values and metadata before referencing a theme. Select a base palette, map semantic roles and define visual area ratios. Do not infer roles from array order or mix every candidate palette together. See the color reference for provenance, incomplete examples and the separate 17-category taxonomy.

### 4. Design text and behavior

Use real headline copy per locale. Specify semantic segments, desired lines per device, font metrics and fallback behavior. Prioritize complete meaning on each line; do not solve narrow layouts through unlimited shrinking or global no-wrap.

For each meaningful interaction, specify trigger → state transition → visible feedback, reverse/exit behavior, touch/keyboard behavior and reduced-motion alternative. Do not write only “smooth animation” or require 3D for all industries.

### 5. Emit and check the Markdown

Fill the output contract with concrete values where known. Keep missing facts separate from decisions. Every placeholder must become a value, an explicit assumption or a named unresolved item. A draft must still give the builder enough detail to proceed on resolved parts.

Review consistency: actual source colors, unambiguous IDs, ratios totaling 100 per group, all requested locales, headline break plans, interaction states, asset dependencies and acceptance criteria. Fix document issues before delivery.

If a rendered site is within scope and a preview is available, inspect representative widths, real fonts and core interactions. Record observed results and unresolved issues. If only Markdown was produced, label visual checks **not run**; never mark a template visually verified from text review alone.

## Delivery and handoff

Honor the requested delivery format, including reply-only or no-write requests. Otherwise save to the user-specified destination or an appropriate project documentation folder. Report the file or delivered content, concrete design decisions and remaining missing inputs briefly. Pass the integrated MD and its sources to the builder; keep IDs and process notes out of visible website content.

This is supporting guidance within vixnode-website-builder, not a separately installed Skill. Read linked resources through the current skill resource provider when filesystem access is unavailable. Planning-only requests stop at the Markdown deliverable; building requests continue under the parent Skill and its actual tool contracts.

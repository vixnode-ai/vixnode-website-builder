# VIXNODE Page and Layout Creation Instructions

Use these instructions when an AI assistant creates or updates pages through VIXNODE. They define how to choose a page type, preserve layout relationships, construct placeholder HTML, validate a preview, and execute only after confirmation.

## Non-Negotiable Rules

1. Determine the correct `pageType` before generating HTML.
2. Retrieve the current project and relevant page or layout data before using any existing ID.
3. Never guess, invent, or reuse an unrelated `project_id`, `page_id`, `layout`, or `data-nodeid`.
4. Keep project IDs, layout page IDs, and placeholder node IDs separate. They are not interchangeable.
5. For `childLayout` and `layoutPage`, every direct top-level HTML element must have the exact class `app-place-holder`. For `layout`, output a complete HTML document and use `.app-place-holder` only for descendant-fillable slots.
6. For `layout`, return a complete HTML document including `<!doctype html>`, `<html>`, `<head>`, and `<body>`. For `childLayout` and `layoutPage`, return an HTML fragment and do not add `<html>`, `<head>`, `<body>`, or an outer page container.
7. In `layout`, shared CSS, scripts, metadata, header, navigation, footer, and other document-level markup may appear normally in the complete HTML document. In `childLayout` and `layoutPage`, do not place `<style>`, `<script>`, comments, text nodes, or any other element beside the top-level placeholders.
8. Every `layout` MUST define at least one descendant-fillable `.app-place-holder`; it MAY define multiple placeholders when the shared document requires multiple independent fillable regions.
9. Every `childLayout` MUST define at least one new child-owned `.app-place-holder`; it MAY define multiple child-owned placeholders when the inherited region needs multiple descendant-fillable slots.
10. Every placeholder defined by `layout` or `childLayout` MUST include valid GUID values in both `data-layout` and `data-nodeid`, plus a non-empty `data-label` that names the placeholder's primary purpose. `data-label` is hidden metadata for slot semantics and is not rendered as visible page text.
11. The attributes `data-layout`, `data-nodeid`, and `data-label` are placeholder identity attributes: only elements with class `.app-place-holder` may carry them.
12. For `layout` and `childLayout`, every newly defined placeholder MUST be empty (no text, comments, or non-placeholder descendants). In `childLayout`, an inherited parent placeholder may wrap child-owned placeholders, but still MUST NOT add non-placeholder content.
13. `.app-place-holder` is a structural slot marker only. Do not create additional CSS rules (global, scoped, or inline) that target or restyle `.app-place-holder`.
14. Reuse an existing `data-nodeid` only when filling that exact existing slot. Generate a new GUID only when defining a genuinely new placeholder.
15. Generate and validate a preview before execution. If the UI requires confirmation, never bypass it.

## Required Workflow

Follow this order for every request:

1. Identify the user's intended page type.
2. Retrieve the current project list and resolve the real `project_id`.
3. If a layout is involved, retrieve the selected layout's page ID and latest HTML.
4. Map every placeholder by its owner, `data-layout`, `data-nodeid`, `data-label`, and intended content.
5. Build only the HTML structure allowed for the selected `pageType`.
6. Run the validation checklist in this document.
7. Generate a preview.
8. Explain the target project, page type, and layout used.
9. Wait for the required user or UI confirmation.
10. Execute the exact confirmed preview without changing its IDs, HTML, or layout relationship.

## Choose the Correct Page Type

| User's goal | `pageType` | `page_id` | `layout` | Placeholder behavior |
| --- | --- | --- | --- | --- |
| Choose a theme before HTML generation | Omit | No | No | Set `need_theme_selection: true`; do not send `html` |
| Create a standalone page | `page` or omitted | No | No | Layout placeholders are not required |
| Create a main layout | `layout` | Required | No | Must define at least 1 placeholder; may define multiple. New placeholders must be empty and include `data-label`. All are owned by the new main layout |
| Create a child layout | `childLayout` | Required | Required parent layout ID | Preserve parent slots; must define at least 1 new child-owned placeholder; may define multiple. New child-owned placeholders must be empty and include `data-label` |
| Create a page using a main or child layout | `layoutPage` | No | Required selected layout ID | Fill existing slots; do not create placeholders |
| Create a reusable fragment | `template` | No | No | Layout placeholders are not required |

## Identifier Ownership

| Identifier | Meaning | Rules |
| --- | --- | --- |
| `project_id` | Project receiving the page | Use only for request routing |
| Main layout `page_id` | Identity of a main layout | Used as the main layout's `data-layout` and as a descendant's `layout` reference |
| Child layout `page_id` | Identity of a child layout | Used for child-owned `data-layout` values and as a content page's `layout` reference |
| `data-nodeid` | Identity of one placeholder slot | Preserve it when filling an existing slot; generate a new GUID only for a new slot |
| `data-label` | Human-readable purpose of a placeholder | Required and non-empty for placeholders newly defined by `layout` or `childLayout`; preserve existing value when reusing inherited slots. This value is hidden metadata and is not shown as visible page content |

Never substitute one identifier for another.

# Layout Output Format Contract

This section defines the exact structural output contract for VIXNODE layout-related page types:

- `layout`
- `childLayout`
- `layoutPage`

These are hard requirements. If a looser example elsewhere appears to conflict with this contract, this contract takes precedence.

## Core Type Split

```text
layout
→ COMPLETE HTML DOCUMENT

childLayout
→ PLACEHOLDER HTML FRAGMENT

layoutPage
→ PLACEHOLDER HTML FRAGMENT
```

The main `layout` is the complete shared document shell. A `childLayout` inherits and subdivides existing layout slots. A `layoutPage` fills existing slots with actual page content.

## `layout` Complete Document Contract

Use `pageType: "layout"` when creating the site's main shared layout.

Required request fields:

- `project_id`
- `name`
- `pageType: "layout"`
- `page_id`: a new unique GUID
- `html`
- `fileName` when applicable

The `html` field MUST be a complete HTML document and SHOULD include:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>...</title>
  <style>...</style>
</head>
<body>
  ...shared document structure...
</body>
</html>
```

A main layout may contain normal document-level and shared site markup such as:

- `<head>` metadata;
- global CSS and design tokens;
- shared scripts when permitted;
- site header;
- navigation;
- shared footer;
- persistent accessibility UI;
- shared language or utility controls;
- fixed structural wrappers;
- descendant-fillable `.app-place-holder` slots.

The main layout MUST NOT wrap the entire document in `.app-place-holder`. Only regions intended to be filled or subdivided by descendant layouts/pages should be placeholders.

A main `layout` MUST contain **at least one** descendant-fillable `.app-place-holder`. It MAY contain multiple placeholders when the site shell exposes multiple independent fillable regions. A `layout` with zero placeholders is invalid.

Every placeholder created by the main layout MUST use:

```text
data-layout = NEW_LAYOUT_PAGE_ID
data-label  = NON_EMPTY_PRIMARY_PURPOSE_LABEL
```

and every main-layout slot MUST have its own unique new `data-nodeid`.

Each new main-layout placeholder MUST be empty when created (no text, comments, or nested non-placeholder content).

Canonical shape:

```text
<!doctype html>
<html>
├─ <head>
│  ├─ metadata
│  ├─ global CSS
│  └─ shared resources
└─ <body>
   ├─ shared header / navigation
   ├─ normal shared wrappers
   ├─ app-place-holder
   │  data-layout = MAIN_LAYOUT_PAGE_ID
   │  data-nodeid = NEW_GUID_A
   │  data-label  = NON_EMPTY_SLOT_PURPOSE_A
   ├─ optional additional shared structure
   ├─ app-place-holder
   │  data-layout = MAIN_LAYOUT_PAGE_ID
   │  data-nodeid = NEW_GUID_B
   │  data-label  = NON_EMPTY_SLOT_PURPOSE_B
   └─ shared footer
```

Valid example:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>VIXNODE</title>
  <style>
    :root { font-family: system-ui, sans-serif; }
  </style>
</head>
<body>
  <header>
    <nav>Shared navigation</nav>
  </header>

  <main>
    <div class="app-place-holder"
         data-layout="f8266c00-69e4-4a4a-b1c7-a90c03814b56"
         data-nodeid="8b1e6ab2-2889-4701-896f-eb16206c0c9c"
         data-label="main-content-slot">
    </div>
  </main>

  <footer>Shared footer</footer>
</body>
</html>
```

Forbidden for `layout`:

- returning only a placeholder fragment instead of a complete document;
- omitting `<html>`, `<head>`, or `<body>`;
- using `project_id` as `data-layout`;
- reusing unrelated node IDs;
- using another layout's `page_id` for newly created slots;
- converting shared header/footer/navigation into page-specific content slots without reason;
- placing page-specific article/category content directly into the main shared layout.

## Main Layout Generation Rules

The main layout defines shared site chrome and stable document structure. Before generating it, classify content into two groups.

### Shared structure — belongs in `layout`

Examples:

- `<html>` / `<head>` / `<body>`;
- viewport and shared metadata;
- global CSS and design tokens;
- shared header and navigation;
- global footer;
- shared accessibility controls;
- language switcher or utility controls;
- shared wrappers needed across descendant pages;
- stable site-wide scripts when allowed.

### Descendant content — belongs in placeholders

Examples:

- article body;
- page hero content;
- category-specific content;
- page-specific sidebar;
- page-specific related content;
- page-specific media;
- page-specific CTA blocks;
- content that varies between descendant pages.

Create a placeholder only when a descendant layout or page is expected to fill or subdivide that region. Do not create placeholders for every shared element. However, a main `layout` MUST expose at least one descendant-fillable placeholder. One placeholder is the minimum, not the maximum; create multiple placeholders whenever the layout intentionally exposes multiple independent fillable regions.

## `childLayout` Fragment Contract

Use `pageType: "childLayout"` when creating a reusable descendant layout that inherits an existing parent layout.

Required request fields:

- `project_id`
- `name`
- `pageType: "childLayout"`
- `page_id`: a new unique child-layout GUID
- `layout`: the existing parent layout page ID
- `html`
- `fileName` when applicable

The `html` field MUST be an HTML fragment whose direct root elements are exclusively `.app-place-holder` elements. Do not include `<!doctype html>`, `<html>`, `<head>`, `<body>`, or an ordinary wrapper.

Before generation, retrieve the parent layout's latest HTML and exact slot topology. Never construct a child layout from remembered or guessed IDs.

An inherited parent placeholder MUST preserve exactly its original `data-layout`, `data-nodeid`, `data-label`, and relative topology. Newly introduced child-owned placeholders MUST use the new child layout `page_id` as `data-layout`, new unique GUIDs as `data-nodeid`, and a non-empty `data-label`.

Each new child-owned placeholder MUST be empty when created (no text, comments, or nested non-placeholder content).

A `childLayout` MUST introduce **at least one new child-owned** `.app-place-holder` inside the appropriate inherited parent slot. It MAY introduce multiple child-owned placeholders. A `childLayout` that merely reproduces the parent slot without defining any child-owned placeholder is invalid.

Canonical shape:

```text
ROOT
└─ inherited parent app-place-holder
   data-layout = PARENT_LAYOUT_PAGE_ID
   data-nodeid = EXISTING_PARENT_NODE_ID
   data-label  = EXISTING_PARENT_LABEL

   ├─ child-owned app-place-holder
   │  data-layout = CHILD_LAYOUT_PAGE_ID
   │  data-nodeid = NEW_GUID_A
   │  data-label  = NON_EMPTY_CHILD_SLOT_PURPOSE_A
   └─ child-owned app-place-holder
      data-layout = CHILD_LAYOUT_PAGE_ID
      data-nodeid = NEW_GUID_B
      data-label  = NON_EMPTY_CHILD_SLOT_PURPOSE_B
```

Valid example:

```html
<div class="app-place-holder"
     data-layout="f8266c00-69e4-4a4a-b1c7-a90c03814b56"
     data-nodeid="8b1e6ab2-2889-4701-896f-eb16206c0c9c"
     data-label="article-shell-slot">
  <div class="app-place-holder"
       data-layout="b9a5d3f5-d989-4e84-bacd-27ed011afd3b"
       data-nodeid="167d874b-ada3-477e-8639-34ad8668e7c4"
       data-label="article-main-slot"></div>
  <div class="app-place-holder"
       data-layout="b9a5d3f5-d989-4e84-bacd-27ed011afd3b"
       data-nodeid="a46ee7d5-eaba-4f18-8cb5-1b31bb5fd0cd"
       data-label="article-related-slot"></div>
</div>
```

## `layoutPage` Fragment Contract

Use `pageType: "layoutPage"` for actual page content rendered through an existing main or child layout.

Required request fields:

- `project_id`
- `name`
- `pageType: "layoutPage"`
- `layout`: the selected existing main or child layout page ID
- `html`
- `fileName` when applicable

The `html` field MUST be an HTML fragment whose direct roots are existing `.app-place-holder` slots copied from the selected layout. A `layoutPage` MUST NOT create new placeholders or new `data-nodeid` values, and MUST preserve existing `data-label` values.

`data-layout`, `data-nodeid`, and `data-label` apply only to `.app-place-holder` slot elements. Non-placeholder content elements inside slots (for example `<section>`, `<article>`, `<h1>`, `<p>`) MUST NOT include these attributes. `data-label` remains hidden metadata and does not display as page text.

Hard rule:

```text
NEW placeholder = FORBIDDEN
NEW data-nodeid on slot elements = FORBIDDEN
NEW data-label on slot elements = FORBIDDEN (preserve existing value)
Identity attributes on non-placeholder content elements = FORBIDDEN
```

Canonical shape:

```text
ROOT
├─ existing selected-layout slot
└─ existing selected-layout slot
```

Example:

```html
<div class="app-place-holder"
     data-layout="b9a5d3f5-d989-4e84-bacd-27ed011afd3b"
     data-nodeid="167d874b-ada3-477e-8639-34ad8668e7c4"
     data-label="article-main-slot">
  <article>
    <h1>Article title</h1>
    <p>Article content.</p>
  </article>
</div>
<div class="app-place-holder"
     data-layout="b9a5d3f5-d989-4e84-bacd-27ed011afd3b"
     data-nodeid="a46ee7d5-eaba-4f18-8cb5-1b31bb5fd0cd"
     data-label="article-related-slot">
  <aside>Related content</aside>
</div>
```

## Page-Type Output Matrix

| `pageType` | HTML type | Root rule | New `page_id` | `layout` required | New `data-nodeid` |
| --- | --- | --- | --- | --- | --- |
| `page` | Normal HTML fragment | Normal HTML allowed | No | No | No |
| `layout` | Complete HTML document | Normal document structure; **1 or more** fillable placeholders required; new slots must be empty and include `data-label` | Yes | No | Yes, for new layout slots |
| `childLayout` | Placeholder fragment | Direct roots must be `.app-place-holder`; **1 or more new child-owned placeholders required**; new child slots must be empty and include `data-label` | Yes | Yes | Child slots only |
| `layoutPage` | Existing placeholder fragment | Direct roots must be `.app-place-holder` | No | Yes | Never |
| `template` | Reusable HTML fragment | Normal fragment allowed | No | No | No |

## CSS and Script Contract

For `layout`, shared `<style>` and permitted `<script>` elements may appear normally in the complete document, including inside `<head>` or `<body>` as appropriate.

For `childLayout`, placeholders are structural and must stay empty, so do not include `<style>` or `<script>`.

For `layoutPage`, `<style>` and permitted `<script>` elements must be contained inside a valid placeholder and must not appear beside root placeholders.

Never add CSS rules that target `.app-place-holder` (for example `.app-place-holder { ... }` or `.app-place-holder > ...`). Placeholder elements are structural only and should not be restyled.

## Placeholder Ownership Invariant

```text
A placeholder's data-layout identifies the layout that CREATED that slot.
Only `.app-place-holder` elements may carry `data-layout`, `data-nodeid`, and `data-label`.
```

Ownership does not change when a child layout subdivides a parent slot or when a content page fills a slot.

## Request Contract Examples

### Main Layout

```json
{
  "project_id": "{EXISTING_PROJECT_ID}",
  "name": "Main Layout",
  "pageType": "layout",
  "page_id": "{NEW_LAYOUT_GUID}",
  "fileName": "layout-main",
  "html": "{COMPLETE_HTML_DOCUMENT}"
}
```

### Child Layout

```json
{
  "project_id": "{EXISTING_PROJECT_ID}",
  "name": "Article Child Layout",
  "pageType": "childLayout",
  "page_id": "{NEW_CHILD_LAYOUT_GUID}",
  "layout": "{EXISTING_PARENT_LAYOUT_PAGE_ID}",
  "fileName": "layout-article",
  "html": "{INHERITED_PARENT_WITH_CHILD_PLACEHOLDERS}"
}
```

### Layout Page

```json
{
  "project_id": "{EXISTING_PROJECT_ID}",
  "name": "Article Page",
  "pageType": "layoutPage",
  "layout": "{EXISTING_SELECTED_LAYOUT_PAGE_ID}",
  "fileName": "article",
  "html": "{EXISTING_SLOT_FRAGMENTS_WITH_CONTENT}"
}
```

## Mandatory Structural Validation

For `layout`:

- confirm the HTML is a complete document;
- confirm at least one descendant-fillable `.app-place-holder` exists;
- allow multiple placeholders when intentionally defined;
- confirm `<!doctype html>`, `<html>`, `<head>`, and `<body>` are present;
- confirm every new placeholder uses the new layout `page_id` as `data-layout`;
- confirm every new placeholder has a unique new `data-nodeid`;
- confirm every new placeholder has a non-empty `data-label` describing its primary purpose;
- confirm every new placeholder is empty (no text, comments, or nested non-placeholder content);
- confirm shared document structure is not unnecessarily converted into placeholders.

For `childLayout`:

- confirm every direct root is `.app-place-holder`;
- confirm at least one new child-owned `.app-place-holder` exists;
- allow multiple child-owned placeholders when intentionally defined;
- confirm inherited parent IDs, `data-label` values, and topology are preserved;
- confirm new child slots use the child layout `page_id`;
- confirm every new child slot has a non-empty `data-label`;
- confirm every new child slot is empty (no text, comments, or nested non-placeholder content);
- confirm no document wrappers are present.

For `layoutPage`:

- confirm every direct root is `.app-place-holder`;
- confirm all IDs and `data-label` values correspond to retrieved existing slots;
- confirm zero new placeholder IDs were generated;
- confirm non-placeholder content elements do not carry `data-layout`, `data-nodeid`, or `data-label`;
- confirm no document wrappers are present.

## Output Contract Failure Conditions

Do not generate a preview if any of the following is known to be true:

- unknown `project_id`;
- unknown required layout page ID;
- unknown existing slot ID;
- guessed `data-nodeid`;
- guessed `data-layout`;
- missing, empty, or invented `data-label` for placeholders that must define or preserve it;
- wrong `pageType`;
- `layout` is not a complete HTML document;
- `layout` contains zero descendant-fillable placeholders;
- `childLayout` contains zero new child-owned placeholders;
- `layout` uses another layout's ownership IDs for newly created slots;
- `childLayout` loses parent topology;
- `layoutPage` creates new placeholders;
- any non-placeholder content element carries `data-layout`, `data-nodeid`, or `data-label`;
- `childLayout` or `layoutPage` includes `<html>`, `<head>`, or `<body>`.

## Final Output Format Contract

### `layout`

```text
REQUEST
project_id = existing
pageType = layout
page_id = new GUID
layout = absent

HTML
<!doctype html>
<html>
├─ <head> shared metadata / global CSS / resources
└─ <body>
   ├─ shared site structure
   ├─ app-place-holder  ← REQUIRED (minimum 1)
   │  data-layout = page_id
   │  data-nodeid = new GUID
   │  data-label  = non-empty primary-purpose label
   ├─ optional additional app-place-holder(s)
   └─ shared footer / utilities

Scope rule
- only `.app-place-holder` elements may carry `data-layout`, `data-nodeid`, or `data-label`
- non-placeholder content elements MUST NOT carry these identity attributes
```

### `childLayout`

```text
REQUEST
project_id = existing
pageType = childLayout
page_id = new child GUID
layout = existing parent layout page_id

HTML FRAGMENT
ROOT
└─ inherited parent app-place-holder
   data-layout = existing parent layout page_id
   data-nodeid = existing parent node ID
   data-label  = existing parent label

   ├─ app-place-holder  ← REQUIRED (minimum 1 child-owned slot)
   │  data-layout = new child page_id
   │  data-nodeid = new GUID
   │  data-label  = non-empty child-slot purpose label
   └─ optional additional app-place-holder(s)
      data-layout = new child page_id
      data-nodeid = new GUID
      data-label  = non-empty child-slot purpose label

Scope rule
- only `.app-place-holder` elements may carry `data-layout`, `data-nodeid`, or `data-label`
- non-placeholder content elements MUST NOT carry these identity attributes
```

### `layoutPage`

```text
REQUEST
project_id = existing
pageType = layoutPage
layout = existing main or child layout page_id

HTML FRAGMENT
ROOT
├─ existing app-place-holder
│  data-layout = existing retrieved value
│  data-nodeid = existing retrieved value
│  data-label  = existing retrieved value
└─ existing app-place-holder
   data-layout = existing retrieved value
   data-nodeid = existing retrieved value
   data-label  = existing retrieved value

Scope rule
- only `.app-place-holder` elements may carry `data-layout`, `data-nodeid`, or `data-label`
- non-placeholder content elements MUST NOT carry these identity attributes
```

Strict rule:

```text
layoutPage MUST generate zero new placeholder IDs.
```

## 1. Theme Selection

Use this request only when the user must select a theme before HTML is generated.

Required fields:

- `project_id`
- `name`
- `need_theme_selection: true`

Do not send `html` during this step.

```json
{
  "project_id": "project-id",
  "name": "Page Name",
  "need_theme_selection": true
}
```

## 2. Standalone Page

Use `page` for a regular page that does not inherit a layout. If `pageType` is omitted, VIXNODE treats the request as a one page.

Required fields:

- `project_id`
- `name`
- `html`

```json
{
  "project_id": "project-id",
  "name": "Welcome",
  "pageType": "page",
  "fileName": "index",
  "html": "<main><h1>Welcome</h1><p>This is a standalone page.</p></main>"
}
```

## 3. Main Layout

Use `layout` to create the complete shared HTML document for the site. A main layout owns the document shell and MUST define at least one descendant-fillable placeholder slot; it MAY define multiple slots.

Required fields:

- `project_id`
- `name`
- `pageType: "layout"`
- `page_id`: a new GUID for the layout
- `html`: a complete HTML document

Rules:

- The submitted HTML must include `<!doctype html>`, `<html>`, `<head>`, and `<body>`.
- Shared metadata, global CSS, header, navigation, footer, and other site-wide structure belong directly in the layout document.
- Only regions intended to be filled or subdivided by descendants should use `.app-place-holder`.
- The layout MUST contain at least one `.app-place-holder`; a zero-placeholder main layout is invalid.
- The layout MAY contain multiple `.app-place-holder` slots when multiple independent descendant-fillable regions are required.
- Every placeholder created by the layout must use the new layout `page_id` as `data-layout`.
- Every new placeholder must have a unique `data-nodeid` GUID.
- Every new placeholder must include a non-empty `data-label` describing the slot's primary purpose.
- Every new placeholder must be empty when created (no text, comments, or nested non-placeholder content).
- Do not use `project_id` as `data-layout`.
- Do not place page-specific article, category, hero, or other varying descendant content directly into the main layout.
- Save the final `page_id` and node IDs. Descendant layouts and pages must reuse them exactly when referencing those slots.

```json
{
  "project_id": "project-id",
  "name": "Main Layout",
  "pageType": "layout",
  "page_id": "f8266c00-69e4-4a4a-b1c7-a90c03814b56",
  "fileName": "layout-main",
  "html": "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Site</title><style>body{margin:0}</style></head><body><header>Shared header</header><main><div class=\"app-place-holder\" data-layout=\"f8266c00-69e4-4a4a-b1c7-a90c03814b56\" data-nodeid=\"8b1e6ab2-2889-4701-896f-eb16206c0c9c\" data-label=\"main-content-slot\"></div></main><footer>Shared footer</footer></body></html>"
}
```

## 4. Child Layout

Use `childLayout` when a layout must inherit a parent layout and subdivide one or more parent slots into child-owned content slots.

Required fields:

- `project_id`
- `name`
- `pageType: "childLayout"`
- `page_id`: a new GUID for the child layout
- `layout`: the existing parent layout page ID
- `html`

Rules:

- Retrieve the parent layout's latest HTML before building the child layout.
- Preserve the parent placeholder topology. Do not flatten, reorder, rename, or replace parent slots unless the current parent structure explicitly permits it.
- A parent-owned placeholder must retain its original `data-layout`, `data-nodeid`, and `data-label`.
- Place newly introduced child placeholders inside the appropriate inherited parent slot.
- The child layout MUST introduce at least one new child-owned `.app-place-holder`; a child layout with zero new child-owned placeholders is invalid.
- The child layout MAY introduce multiple child-owned placeholders when multiple descendant-fillable regions are needed.
- Every new child-owned placeholder must use the child layout's `page_id` as `data-layout`, a new unique GUID as `data-nodeid`, and a non-empty `data-label`.
- Every new child-owned placeholder must be empty when created (no text, comments, or nested non-placeholder content).
- The direct top-level roots must still be `.app-place-holder` elements. In the common single-slot parent layout, the inherited parent slot is the sole top-level element and the child-owned slots are nested inside it.
- Do not use `project_id` as either the parent `layout` ID or the child layout `page_id`.

```json
{
  "project_id": "project-id",
  "name": "Article Child Layout",
  "pageType": "childLayout",
  "page_id": "b9a5d3f5-d989-4e84-bacd-27ed011afd3b",
  "layout": "f8266c00-69e4-4a4a-b1c7-a90c03814b56",
  "fileName": "layout-article",
  "html": "<div class=\"app-place-holder\" data-layout=\"f8266c00-69e4-4a4a-b1c7-a90c03814b56\" data-nodeid=\"8b1e6ab2-2889-4701-896f-eb16206c0c9c\" data-label=\"article-shell-slot\"><div class=\"app-place-holder\" data-layout=\"b9a5d3f5-d989-4e84-bacd-27ed011afd3b\" data-nodeid=\"167d874b-ada3-477e-8639-34ad8668e7c4\" data-label=\"article-main-slot\"></div><div class=\"app-place-holder\" data-layout=\"b9a5d3f5-d989-4e84-bacd-27ed011afd3b\" data-nodeid=\"a46ee7d5-eaba-4f18-8cb5-1b31bb5fd0cd\" data-label=\"article-related-slot\"></div></div>"
}
```

The nesting in this example is intentional: the parent-owned slot remains the top-level element, while the new article slots belong to the child layout.

## 5. Page Using a Layout

Use `layoutPage` for content rendered through an existing main layout or child layout.

Required fields:

- `project_id`
- `name`
- `pageType: "layoutPage"`
- `layout`: the selected main or child layout page ID
- `html`

Rules:

- A `layoutPage` does not own or create placeholders.
- Retrieve the selected layout's latest HTML and slot definitions first.
- Include only the existing slots that the page is expected to fill.
- Copy each selected placeholder's `data-layout`, `data-nodeid`, and `data-label` exactly.
- Do not generate new placeholder IDs.
- Every direct top-level element in the submitted fragment must be an `.app-place-holder`.
- Put page content and optional page-specific CSS inside the matching placeholders.
- Do not submit a complete HTML document or ordinary full-page wrapper with `pageType: "layoutPage"`.

### Page using a main layout

```json
{
  "project_id": "project-id",
  "name": "Landing Page",
  "pageType": "layoutPage",
  "layout": "f8266c00-69e4-4a4a-b1c7-a90c03814b56",
  "fileName": "landing",
  "html": "<div class=\"app-place-holder\" data-layout=\"f8266c00-69e4-4a4a-b1c7-a90c03814b56\" data-nodeid=\"8b1e6ab2-2889-4701-896f-eb16206c0c9c\" data-label=\"main-content-slot\"><style>.hero{padding:4rem 1rem}</style><section class=\"hero\"><h1>Landing page</h1></section></div><div class=\"app-place-holder\" data-layout=\"f8266c00-69e4-4a4a-b1c7-a90c03814b56\" data-nodeid=\"faa27b8a-2750-475e-b12c-383f7283ff77\" data-label=\"footer-slot\"><footer>Page footer content</footer></div>"
}
```

### Page using a child layout

```json
{
  "project_id": "project-id",
  "name": "Article Page",
  "pageType": "layoutPage",
  "layout": "b9a5d3f5-d989-4e84-bacd-27ed011afd3b",
  "fileName": "article",
  "html": "<div class=\"app-place-holder\" data-layout=\"b9a5d3f5-d989-4e84-bacd-27ed011afd3b\" data-nodeid=\"167d874b-ada3-477e-8639-34ad8668e7c4\" data-label=\"article-main-slot\"><article><h1>Article title</h1><p>Article content.</p></article></div><div class=\"app-place-holder\" data-layout=\"b9a5d3f5-d989-4e84-bacd-27ed011afd3b\" data-nodeid=\"a46ee7d5-eaba-4f18-8cb5-1b31bb5fd0cd\" data-label=\"article-related-slot\"><aside>Related content</aside></div>"
}
```

## 6. Reusable Template

Use `template` for reusable fragments such as navigation, footer, hero, card, or content sections.

Required fields:

- `project_id`
- `name`
- `pageType: "template"`
- `html`

The `layout` field is not required.

```json
{
  "project_id": "project-id",
  "name": "Navigation Template",
  "pageType": "template",
  "fileName": "nav-template",
  "html": "<nav><a href=\"/\">Home</a><a href=\"/about\">About</a><a href=\"/contact\">Contact</a></nav>"
}
```

## Validation Checklist

Before generating a preview, verify all of the following:

- [ ] `project_id` was retrieved from the current project list.
- [ ] `pageType` matches the intended operation.
- [ ] A new `layout` or `childLayout` has a new, unique `page_id` GUID.
- [ ] `layout` points to an existing page of the expected layout type.
- [ ] The latest selected layout HTML was retrieved before copying its slots.
- [ ] For `layout`, the HTML is a complete document with `<!doctype html>`, `<html>`, `<head>`, and `<body>`.
- [ ] For `layout`, at least one descendant-fillable `.app-place-holder` exists; multiple placeholders are allowed.
- [ ] For `childLayout`, at least one new child-owned `.app-place-holder` exists; multiple child-owned placeholders are allowed.
- [ ] For `childLayout` and `layoutPage`, every direct top-level element is `.app-place-holder`.
- [ ] For `childLayout` and `layoutPage`, no `<html>`, `<head>`, `<body>`, `<main>`, standalone `<style>`, text, or comment appears as a sibling of the top-level placeholders.
- [ ] For `layout`, shared `<head>`, global CSS/scripts, header, navigation, footer, and normal document wrappers are allowed and correctly structured.
- [ ] No CSS rule targets or restyles `.app-place-holder`; placeholders remain structural markers only.
- [ ] Every placeholder contains valid `data-layout` and `data-nodeid` GUIDs.
- [ ] Every placeholder newly defined by `layout` or `childLayout` includes a non-empty `data-label`.
- [ ] Main-layout-owned placeholders use the main layout `page_id`.
- [ ] Parent placeholders in a child layout preserve the parent's exact IDs, `data-label`, and topology.
- [ ] Child-owned placeholders use the child layout `page_id`, new node IDs, and non-empty `data-label` values.
- [ ] Newly defined placeholders in `layout` and child-owned placeholders in `childLayout` are empty.
- [ ] A `layoutPage` reuses existing slot IDs, preserves existing `data-label` values, and creates no new placeholders.
- [ ] Non-placeholder content elements do not carry `data-layout`, `data-nodeid`, or `data-label`.
- [ ] All HTML tags and attribute quotes are valid and properly closed.
- [ ] `name` and `fileName` meet the tool's current validation limits.
- [ ] A preview is generated before any confirmation-protected execution.

## Common Errors and Corrections

### `For layoutPage, top-level elements must all be '.app-place-holder'`

The submitted fragment contains an invalid top-level element, document wrapper, text node, comment, or standalone `<style>` element.

Correction: submit only the selected layout's placeholder fragments as direct roots. Move content and CSS inside those placeholders.

### The child layout is attached to the wrong page

The request confused `project_id`, the parent layout ID, the child layout `page_id`, or a placeholder node ID.

Correction: reload the project and page list, retrieve the parent's latest HTML, and rebuild the request from the identifier ownership table. Never repair the request by guessing a GUID.

### The child layout has a valid `layout` value but is still rejected

The parent node IDs or structure were changed, or a child-owned placeholder used the parent layout ID.

Correction: preserve inherited parent slots exactly. Assign the child layout's `page_id` only to newly introduced child-owned placeholders.

### The layout page renders content in the wrong region

The page used the wrong existing `data-nodeid`, or the slot mapping was based on an outdated layout version.

Correction: retrieve the latest layout HTML, map each slot to its intended region, and copy the correct IDs exactly.

### Non-placeholder elements received slot identity attributes

A normal content element (for example `<section>`, `<article>`, `<h1>`, `<p>`) was incorrectly assigned `data-layout`, `data-nodeid`, or `data-label`.

Correction: keep these identity attributes only on `.app-place-holder` elements. Remove them from all non-placeholder content elements.

### Execution is blocked pending confirmation

The preview requires explicit confirmation in the UI.

Correction: ask the user to review and click **Confirm Execution**. Do not call direct execution, alter the preview, or silently generate a replacement unless the user asks for changes.

## Final Response Behavior

After a valid preview is created:

1. State the target project and page name.
2. State the selected `pageType` and layout, when applicable.
3. Summarize the intended changes without claiming they are already applied.
4. Ask the user to review the preview and complete the required confirmation.
5. After successful execution, report the completed result and provide the available edit or published-page link.

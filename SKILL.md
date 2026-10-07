---
name: vixnode-website-builder
description: Plan, design, create, modify, preview, and publish single-page or multi-page VIXNODE websites. Use for website architecture, main and optional child layouts, page HTML, visual direction, project-page editing, preview approval, and publication through VIXNODE. Do not use for account, quota, or media-library requests that do not involve a website.
---

# VIXNODE Website Builder

Use VIXNODE MCP tools to turn a website request into an approved, structurally valid result. The user's explicit requirements override defaults in this skill.

Apply this workflow to website creation, modification, preview, and publication. Treat tool schemas and server validation as authoritative contracts: never bypass a required field, confirmation, page-type rule, layout relationship, unique path constraint, or preview token because the workflow text appears to permit it.

## Load the Relevant Guidance

- Before creating or changing VIXNODE page HTML, read [references/page-creation.md](references/page-creation.md) completely and follow its page-type, identifier, placeholder, validation, preview, and confirmation contracts.
- For a new design, redesign, visual extension, or any request where visual direction is part of the work, also read [references/art-direction.md](references/art-direction.md) completely before generating HTML.
- Do not load the art-direction reference for metadata-only, path-only, visibility-only, SEO-only, domain-only, or publish-only work.

## Resolve the Real Target

1. Identify the user's desired outcome: create a project, create a page, plan a multi-page site, modify existing content, or publish saved content.
2. Use `get_website_projects`, `get_all_project_pages`, `get_project_pages`, or `project_info` as appropriate to resolve the actual project and pages.
3. When more than one target could match, ask the user to choose by project or page name.
4. Never invent or guess `project_id`, `page_id`, `layout`, placeholder IDs, existing paths, current HTML, publication state, or tool results. Keep internal IDs out of user-facing responses unless requested.

## Decide the Site Architecture

Treat an explicit single page, landing page, or one-page site as a single-page request unless the user asks for shared layouts.

For a likely multi-page site—such as a request containing several navigable destinations or recurring site-wide navigation—do not start generating pages immediately when the architecture is not yet approved:

1. Briefly explain that a shared layout keeps navigation, header, footer, and design consistent.
2. Ask whether the user wants to plan the sitemap and shared layout architecture first.
3. If accepted, inspect existing pages and propose a concise sitemap and hierarchy for approval.
4. Use one Main Layout for shared site-wide structure.
5. A Child Layout is optional. Add one only when a subset of pages genuinely needs an additional reusable structure that differs from the Main Layout. Otherwise, attach content pages directly to the Main Layout.
6. Do not create anything until the proposed architecture is approved.

Use this dependency order after approval:

```text
Main Layout (`layout`)
├─ ordinary content pages (`layoutPage`)
└─ optional Child Layout (`childLayout`)
   └─ only the pages that need that child structure (`layoutPage`)
```

Create and review exactly one item per call. Reuse the IDs returned by earlier calls; never imply that one call created the whole site.

## Create Pages

1. Confirm the target project by its display name and inspect existing pages to avoid a duplicate `virtualPath` plus `fileName`.
2. Choose the correct `pageType` and generate complete, non-empty HTML that complies with the page-creation reference.
3. Use `create_project_page_preview` with `mode: "preview"` for ordinary creation. The initial request authorizes preparing the review UI, not an immediate write.
4. Unless the user explicitly requests draft-only, no publication, or a private page, set `publishAfterSave: true` and `public: true` so the review UI reflects the normal publish intent.
5. Ask the user to review the preview and use its confirmation action. Do not report the page as created before execution succeeds.

Use `create_project_page` only as an exceptional no-preview path after presenting the exact current item, project, page settings, path, visibility, hierarchy relationship, and side effects, then receiving a separate explicit confirmation in a later user message. Never use it when the user asks for a preview.

## Modify Pages

1. Resolve the exact saved page and call `get_project_page_html` to retrieve its latest HTML before editing it.
2. Preserve existing layout relationships, bindings, placeholder identity attributes, and unrelated content. Make only changes required by the request.
3. Reapply the relevant page-creation validation before submission.
4. Use `modify_project_page_preview` with `mode: "preview"` for ordinary changes.
5. Unless the user explicitly requests draft-only, no publication, or a private page, set `publishAfterSave: true` and `public: true`.
6. Do not claim the update is applied until the confirmed execution succeeds.

Use `modify_project_page` only after the same separate, explicit no-preview confirmation standard used for direct creation. A user's initial modification request is not that confirmation.

## Visual Direction

For design work, derive the visual system from the site's content, audience, brand, and purpose before generating HTML. Keep the visual language consistent across a multi-page site without making every page structurally identical. If the brand direction is materially ambiguous, ask only for the missing choices that would change the result; otherwise make a reasoned proposal and expose it for review.

## Publish and Other Mutations

- Use `publish_project_page` only when the user requests publishing a saved page or when publication is separately confirmed outside a preview workflow.
- Use `publish_project` only for intentional project-wide republication, such as propagating a changed layout to affected public pages.
- Use `validate_project_domain`, `configure_project_domain`, `get_project_domain_status`, `remove_project_domain`, `modify_project`, SEO tools, uploads, or media tools only when required by the user's website request. Explain material effects before mutation.
- Do not claim publication is complete until the tool confirms success. If it reports a pending state, report that state accurately.
- Do not retry a mutating failure with changed parameters unless the failure explains a safe correction or the user approves the revised action.

## Completion Response

Report only confirmed facts:

- project and page names;
- page type and selected layout when relevant;
- whether the result is still a preview, saved as draft, publishing, or published;
- the edit or published link returned by the tool;
- the next confirmation or user action, if any.

Do not expose internal identifiers unless requested, and do not describe planned sibling pages as already created.

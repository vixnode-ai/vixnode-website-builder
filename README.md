# VIXNODE Website Builder

Version **3.5.0**. Plan, design, preview and publish VIXNODE websites from a plain-language brief.

## Capabilities

- Build single-page sites or plan multi-page sites with a Main Layout and optional Child Layout.
- Prepare previews and follow the confirmation workflow before page mutations and publication.
- Preserve existing layouts, bindings, placeholder identifiers and unrelated page content when editing.
- Compose website directions from industry, user-need, visual-style, experience and locale modules.
- Start from 14 reusable recipes and a bundled snapshot of 62 platform palettes.
- Coordinate typography, complete heading phrases, spacing and line height for Traditional Chinese, Japanese, Korean and English.
- Design immersive compositions using lines, geometry, layers, negative space and coordinated page motion, with optional 3D objects and WebGL assets.
- Test and configure API data sources belonging to one VIXNODE project, review actual JSON and field structure, and confirm readable field Display Names before saving.

## Components

| Component | Purpose |
| --- | --- |
| Skill `vixnode-website-builder` | Website workflow and progressively loaded design resources |
| MCP server `vixnode-mcp-server` | Remote VIXNODE tools at `https://www.vixnode.com/mcp` |
| `skills/vixnode-website-builder/skills/library/` | Shared modules, composition guidance, 14 recipes and immersive implementation assets |
| `skills/vixnode-website-builder/skills/themes.json` | Bundled palette snapshot; request live palettes when needed |

The Skill includes 42 resources. Begin at its [SKILL.md](skills/vixnode-website-builder/SKILL.md), then load only the references relevant to the task. File paths and MCP resource URIs are not public asset URLs for generated webpages.

## Installation

1. Install this repository with a supported Claude plugin installation flow.
2. The existing `.claude-plugin/plugin.json` and `.mcp.json` configure the plugin and its remote HTTP MCP connection.
3. When the client requests authorization, sign in to VIXNODE and grant the access needed for the task.
4. Ask for a website plan or edit, review the preview and follow the required confirmation flow.

The remote MCP server is hosted by VIXNODE; this repository does not bundle or run its backend. Available tools and OAuth behavior depend on the connected server and client. A plugin package update does not deploy backend changes, approve held tools or require the MCP server version to match the plugin version.

## Project API Data Sources

API connections are resources of a single project and use the same project `dataset.json` structure as the VIXNODE editor.

| Tool | Purpose |
| --- | --- |
| `get_api_connections` | Read one project's saved data-source definitions with sensitive values redacted |
| `save_api_connection` | Create or update project configuration without calling its target API or publishing |
| `test_api_connection_get` | Send one real authorized GET request and inspect its response and structure |
| `test_api_connection_post` | Send one real explicitly authorized POST request; remote data may be modified |

GET and POST tests are independently exposed. Their methods are fixed, method overrides are rejected, and a saved definition with a different method is rejected before sending. Consult the live tool schemas and availability; tools subject to host review may be unavailable until approved.

For a test-first flow, show the actual data and structure, ask whether to propose Display Names, use user-defined names or keep original keys, and wait for confirmation before saving. Saving a connection does not update already published pages. Before changing an existing definition, explain possible effects on bindings, forms and other consumers.

The `usageMode` values `binding` and `flexible` are intended-use labels only. They do not create bindings or form code, select requests, or change execution. Actual calls follow the platform workflow and page code. When generating webpage API calls, prefer the native JavaScript fetch API by default. Keep private credentials out of browser code, treat response content as untrusted data, and check browser CORS/CSP separately from server testing.

## Example Prompts

- "Build a landing page for my coffee roastery using warm colors and Traditional Chinese headings."
- "Plan five pages for my law firm with a shared header and footer."
- "Design an immersive portfolio using continuous lines, geometry and coordinated scrolling."
- "Update my pricing page and show a preview first."
- "Test this project's GET API, show its fields, and let me confirm Display Names before saving."

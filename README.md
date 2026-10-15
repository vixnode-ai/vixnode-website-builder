# VIXNODE Website Builder

Plan, design, preview, and publish VIXNODE websites from a plain-language brief.

## What it does

- Builds single-page sites and landing pages.
- Plans multi-page sites first: sitemap, one Main Layout, and an optional Child Layout, approved before anything is created.
- Shows a preview and waits for your confirmation before saving or publishing.
- Edits existing pages without disturbing layouts, bindings, or unrelated content.
- Handles visual direction (art direction) for new designs and redesigns.

## Components

| Component | Purpose |
|-----------|---------|
| Skill `vixnode-website-builder` | The workflow, page-creation contracts, and art-direction guidance |
| MCP server `vixnode-mcp-server` | Connects to VIXNODE (`https://www.vixnode.com/mcp`) to create, preview, modify, and publish |

## Setup

1. Install the Claude plugin from this repository using a supported Claude plugin installation flow.
2. The plugin includes `.claude-plugin/plugin.json` and `.mcp.json`, which configures the remote HTTP MCP server at `https://www.vixnode.com/mcp`.
3. When Claude prompts for authorization, sign in to your VIXNODE account and grant the required access.
4. Ask Claude to plan or edit a website; review previews and confirm changes before saving or publishing.

The remote MCP server is hosted by VIXNODE; it is not bundled or run locally by this repository. Connection and OAuth behavior depend on the supported Claude client and the server configuration.

## Example prompts

- "Build a one-page landing page for my coffee roastery."
- "Plan a five-page website for my law firm, with a shared header and footer."
- "Update the pricing page on my project and show me a preview first."

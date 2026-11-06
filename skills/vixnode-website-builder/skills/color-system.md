# Color selection and theme data

## Source selection and provenance

Read [themes.json](themes.json) through the same skill resource provider as this document. Its resource URI is `skill://vixnode/vixnode-website-builder/skills/themes.json`; the server reads the current `wwwroot/json/themes.json` directly, without maintaining a separate palette snapshot. In a local VueNode checkout, read `VueNode/wwwroot/json/themes.json` relative to the repository root. Record the source and read date in the output.

At integration, the catalog has 23 Style, 20 Industry and 19 Festival entries. Read current data rather than hardcoding counts. Each entry has id, name, description, category, types and colors. `types` provides recommendation hints, not restrictions. Array order does not define UI roles.

Respect explicit user color choices, then existing brand rules, selected style palette and industry suggestions. Festivals are an optional overlay unless explicitly chosen as the main subject. Choose a base theme before considering a small accent adjustment; do not merge entire palettes.

## Separate color-style taxonomy

The user-provided color guide defines the following emotional directions. They are independent of the existing `Style-*` IDs:

| ID | Name |
| --- | --- |
| guide-style-01 | Elegant & Delicate |
| guide-style-02 | Fresh & Cute |
| guide-style-03 | Natural & Calm |
| guide-style-04 | Lively & Energetic |
| guide-style-05 | Comfortable & Healthy |
| guide-style-06 | Simple & Refined |
| guide-style-07 | Romantic & Dreamy |
| guide-style-08 | Modern & Minimal |
| guide-style-09 | Open & Free |
| guide-style-10 | Fashionable & Avant-Garde |
| guide-style-11 | Urban & Business |
| guide-style-12 | Noble & Luxurious |
| guide-style-13 | Stable & Mature |
| guide-style-14 | Understated & Rustic |
| guide-style-15 | Nostalgic & Vintage |
| guide-style-16 | Exotic & Global |
| guide-style-17 | Traditional & Classical |

Select a primary direction and an optional supporting direction. Explain conflicts and priorities rather than treating styles as additive tags. Emotion associations are audience-dependent design hypotheses.

## Decision sequence

Brand/task → visual and color style → 3–8 emotional keywords → independent lightness/saturation/temperature/contrast → color strategy → actual theme/example → area ratios → UI roles → rendered review.

Strategies may include monochromatic, contrast, dominant color, dominant tone, accent or subject emphasis. Do not derive all tone values from ambiguous labels such as High-Key or Low-Key; specify each axis.

Use these ratios only as starting points:

| Recipe | Area targets |
| --- | --- |
| General | background 60 / surface-secondary 25 / primary 10 / accent 5 |
| Minimal | neutral 70 / primary 20 / secondary 8 / accent 2 |
| Lively | neutral 50 / primary 25 / secondary 15 / accent 10 |
| Luxury | neutral-dark 65 / brand 25 / secondary 8 / accent 2 |

Define non-overlapping groups totaling 100 per page/region. Ratios concern visual area including imagery, not CSS counts. If a group combines surface/secondary, subdivide without double counting. Readability and user constraints may justify deviations.

For multicolor imagery, state the estimation method and region before comparing area targets. Approximate dominant visible colors or mark photo contributions as pending until actual assets are available; do not claim pixel-precise compliance from a document-only estimate.

Map actual HEX to background, surface, text, muted, primary, secondary, accent, border and needed status roles. Add derived neutrals where required and label their origin; not every UI role must have a unique hue. Core 2/3/5-color palettes do not limit token count. State colors remain semantically distinct and use text/icons as appropriate. Dark variants require separate mapping, not automatic inversion.

## Missing case data

The supplied guide describes 264 examples and 14 inspiration-source categories; this package does not include their complete swatches or images. Do not fabricate HEX values, image provenance or ratios from a case name. Use namespaced example IDs such as `guide-example-001` when supplied.

Status: `index-only` for names/IDs; `partial` for incomplete data; `ready` for traceable core colors and roles; `verified` only after rendered checks. When exact reproduction needs absent swatches, request them while resolving other design decisions. An alternative actual theme must be labeled as an alternative.

Prioritize HEX for web; derive RGB/HSL consistently if needed. Image-extracted values and areas are estimates. Do not claim CMYK print fidelity without the relevant source/profile.

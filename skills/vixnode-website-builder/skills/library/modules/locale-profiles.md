# Locale Typography Baselines

Read [typography.md](../../typography.md) for semantic line composition. The following are concrete starting profiles, not proof of visual fit. Final specifications must instantiate actual locale copy and inspect it with loaded/fallback fonts. Font availability, weight support and licensing remain implementation inputs.

## Metric Ownership

Use the selected visual style's display and heading sizes; the table's sizes are fallbacks when no style specifies them. Locale tracking and line height override Latin style values for CJK. Body/caption sizes and reading measures come from this module. Device tuples mean desktop/tablet/mobile. Sizes are CSS pixels, tracking is em, line height is unitless and measure is CSS em (a width target, not an exact character count).

| ID / level | Font stack | Fallback sizes | Weight | Tracking | Line height | Reading measure |
| --- | --- | --- | --- | --- | --- | --- |
| zh-TW / display | Noto Sans TC, Microsoft JhengHei, sans-serif | 60/48/34 | 600 | 0 | 1.35 | 20em maximum; fit actual clauses |
| zh-TW / heading | Same as display | 34/28/24 | 600 | 0.01 | 1.45 | 24em |
| zh-TW / body | Same as display | 18/17/16 | 400 | 0 | 1.8 | 36em |
| zh-TW / caption | Same as display | 14/14/14 | 400 | 0.01 | 1.6 | 36em |
| ja-JP / display | Noto Sans JP, Yu Gothic, Meiryo, sans-serif | 56/44/32 | 600 | 0 | 1.45 | 20em maximum; fit actual clauses |
| ja-JP / heading | Same as display | 32/28/24 | 600 | 0 | 1.5 | 24em |
| ja-JP / body | Same as display | 17/17/16 | 400 | 0.02 | 1.85 | 34em |
| ja-JP / caption | Same as display | 14/14/14 | 400 | 0.01 | 1.7 | 34em |
| ko-KR / display | Noto Sans KR, Malgun Gothic, sans-serif | 56/44/32 | 600 | 0 | 1.4 | 22em maximum; preserve word units |
| ko-KR / heading | Same as display | 32/28/24 | 600 | 0 | 1.5 | 26em |
| ko-KR / body | Same as display | 17/17/16 | 400 | 0 | 1.8 | 36em |
| ko-KR / caption | Same as display | 14/14/14 | 400 | 0 | 1.6 | 36em |
| en-US / display | Inter, Segoe UI, Arial, sans-serif | 64/48/36 | 600 | -0.02 | 1.1 | 16em maximum; preserve words |
| en-US / heading | Same as display | 36/30/26 | 600 | -0.01 | 1.2 | 24em |
| en-US / body | Same as display | 18/17/16 | 400 | 0 | 1.65 | 38em |
| en-US / caption | Same as display | 14/14/14 | 400 | 0.01 | 1.5 | 38em |

## Serif Variant

For tactile, cinematic or architectural styles, a serif display is optional: Noto Serif TC/JP/KR for the matching CJK locale, followed by an appropriate available local serif and generic serif. English may use Georgia, Times New Roman, serif. Preserve body sans unless the brief benefits from long-form serif reading. Record the actual resolved stacks and inspect mixed-script baselines. Do not depend on font synthesis to create unavailable weights.

## Headline Plan Required for Every Locale

Store full approved/draft text, semantic segments, desktop/tablet/mobile lines, secondary breakpoints, protected names/units and minimum readable size. Initial display floor: 28px for CJK and 30px for English at normal mobile scale; choose a different explicit floor when the design warrants it. This is a design starting value, not permission to override user text enlargement.

Prefer complete clauses on a line, not a fixed number of characters. At narrow widths use approved secondary breaks; increase natural line count rather than clipping, tracking compression or unlimited font shrinking. Preserve exact-copy instructions. Do not insert spaces into CJK copy for layout.

## Input, Dates and Switching

Translate navigation, form labels, validation, empty/loading/error states and accessible control names, not just hero text. Preserve names and units as appropriate. Resolve dates/time zones/currencies from actual data and requested locale; never translate IDs or stored monetary values. A language switch preserves the matching section when possible and does not silently discard form data; specify behavior if the real integration requires a restart.

## Verification Matrix

Inspect each requested locale at 320, 360, 768 and 1440px or equivalent content breakpoints. Include loaded/fallback fonts, long translations, 200% text enlargement and keyboard focus. Check punctuation, word/particle connections, one-character tails, line clipping and fixed-height containers. A recipe inherits this matrix; a generated site records actual pass/fail/not-run results separately.

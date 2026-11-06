# Locale-aware typography and headline composition

## Invariant

Present a complete semantic unit on each headline line wherever feasible. A complete sentence may occupy one line on desktop and several deliberately designed lines on mobile. Do not enforce one physical line across all widths. Do not split arbitrary CJK characters merely to fit a decorative layout.

For every display headline, retain full readable copy plus per-locale semantic segments, desktop/tablet/mobile line plans, secondary allowed breaks, protected names/numbers/units, font size limits and container width. Give each locale its own copy and break positions rather than translating the positions of another language.

## Locale profiles

| Locale | Line composition | Metrics to coordinate |
| --- | --- | --- |
| zh-TW | Meaningful clauses; avoid stranded punctuation, one-character tails and broken names | CJK glyph density, punctuation spacing, mixed Latin baseline, heading vs body tracking |
| ja-JP | Japanese word/clause boundaries and punctuation prohibition rules; keep particles naturally connected | Kanji/kana balance, actual font metrics and line rhythm |
| ko-KR | Natural spaces and word units; avoid arbitrary syllable splitting | Hangul density, tracking and comfortable line spacing |
| en-US | Keep words and protected terms intact; avoid isolated short tail words | Case, tracking, ascenders/descenders and text measure |

These are initial profiles, not a language limit. For other languages, define their own shaping, direction and wrapping rules before implementation.

For display, heading, body and caption, specify actual font family/fallback, size by device, weight, letter spacing with units, unitless line height and reading width. Use per-locale values. Do not prescribe one universal CJK or Latin tracking value, and do not copy Latin all-caps tracking to Chinese body text.

## Resolve a headline that does not fit

1. Inspect actual copy, loaded font, container and intended line plan.
2. Adjust available width and size within the approved readable range.
3. Use the locale's approved semantic breaks, with shorter secondary segments at narrow widths.
4. If still unsuitable, propose a shorter equivalent headline; label unapproved wording as a draft. Respect exact-copy requirements and allow additional natural lines when necessary.

Do not hide overflow, insert repeated spaces, force global no-wrap, or shrink indefinitely. Automatic line balancing is a helper, not a guarantee of semantic correctness. Implementation choices depend on the framework and supported browsers; validate actual behavior before claiming it works.

## Verification

Check long and short real copy in all requested languages, narrow widths, loaded and fallback fonts, and text enlargement. Inspect start/end punctuation, names, units, unintended tails, clipping and horizontal overflow. Text animation must preserve shaping, reading order and an accessible full headline; decorative duplicates must not be read twice.

For the output, supply actual user-facing copy in the requested locale, plus its semantic segments and device-specific line plans. Take the original copy from the brief or approved content; do not substitute English copy for a requested CJK headline. Mark the plan `not-rendered` until the real font and layout have been inspected.

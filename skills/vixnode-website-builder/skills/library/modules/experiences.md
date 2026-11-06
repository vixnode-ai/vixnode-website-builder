# Experience State Modules

These are behavior specifications, not implemented widgets. Use actual content and connected services. Times are initial design values in milliseconds; verify them in the rendered context. Avoid scroll interception that prevents ordinary page navigation.

## product-demo

Purpose: demonstrate one real task at a time. Structure a labeled feature selector and associated preview panel. `selected-A -> selecting-B -> selected-B`; synchronize title, content and current indicator. Use 180ms opacity transition, no automatic cycling by default. The selector can return to any feature without losing the surrounding page position. Loading/error states are required only if content is actually fetched.

Use buttons or a properly implemented tab pattern; do not add ARIA roles without the corresponding keyboard behavior. On mobile wrap the selector or use a labeled scrollable selector with a visible selected state. Reduced motion swaps immediately. Without scripts, show the representative task and readable feature summaries. Clearly distinguish a marketing demonstration from a real account/session.

## brand-story

Purpose: reveal a coherent argument through evidence. Use 3-6 meaningful chapters with visible headings and direct anchors. Scrolling changes the current chapter indicator and optionally reveals imagery over 240ms with at most 12px translation. Content remains in ordinary document flow; returning upward restores context rather than replaying an unskippable intro.

Keyboard and touch retain normal navigation. On mobile use static image/copy sequence if pinned scenes become cramped. Reduced motion removes reveals and preserves the full story. No-script version contains all chapters. The primary action remains available without completing the story.

## process-exploration

Purpose: explain stages and their outputs. Provide a numbered stage selector and image/diagram plus explanation. `stage-1 -> stage-n`; update stage number, heading, evidence and output together over 200ms. Allow previous/next and direct selection; retain the current stage while expanding a detail, then restore it on close.

Mobile displays a vertical sequence or compact stage selector above content. Use real buttons with visible focus; details close through a control and Escape when implemented as a dialog. Reduced motion uses instant changes. Without scripts, render the full process vertically. Do not imply actual production progress or real-time tracking.

## timeline-exhibition

Purpose: explore cases, milestones or artifacts in context. Use a chronological/category index and a readable selected item. `overview -> item-open -> overview`, preserving filter and scroll position on close. Detail entry uses 220ms transition; opening a modal moves focus into it and closing returns focus to the trigger. A normal detail page/link is preferable when the builder cannot implement robust modal behavior.

No information is hover-only. Mobile uses stacked index entries; touch and keyboard offer the same content. Reduced motion removes spatial transitions. No-script version has a full index and actual detail links or inline details. Never invent project dates/results.

## spatial-journey

Purpose: support a story whose spatial metaphor actually explains the subject. Use named chapters and progress in a normal scroll container; optionally map progress to scene position. `chapter-n -> transition -> chapter-next`; a direct chapter link skips intermediate animation and updates text/progress together. Initial camera movement should be restrained; chapter transitions start around 400ms and never block access to controls.

For executable Three.js implementation, read [immersive-3d.md](immersive-3d.md) and its scene/asset/integration contracts. The supplied runtime is demand-driven and retains semantic HTML; host support must still be verified.

Provide an always-reachable text/low-motion view and chapter navigation. On touch or lower-performance devices, use static chapter art and normal flow rather than forcing 3D. Reduced motion and rendering failure use the same complete reading path. Keep essential text in semantic HTML, outside the canvas. No autoplay audio or mandatory camera gestures. Scene-rendering capabilities must be verified in the target builder before committing to them.

## buying-decision

Purpose: compare a manageable set of real options and reach a valid decision. `unselected -> selected -> reviewing`; selection updates details and action availability within 160ms. Filters update visible items and result count, with empty/reset states. Preserve selection when inspecting terms or returning from detail. Do not automatically advance to submission after selection.

Mobile places essential details before the primary action and avoids obstructive sticky controls. Use native labeled controls or fully keyboard-operable equivalents. Reduced motion updates immediately. Without scripts, show option details and a real destination or non-submitting preview. Final booking, payment and registration states are governed by the selected need module and real integration, not animation.

## knowledge-reading

This is a static-first variant of brand-story for information tasks, not a seventh mandatory visual mode. Use contents, addressable headings, optional local search and inline explanations. `overview -> section` preserves browser history/anchors where supported. Expandable explanations retain focus and readable source content. Reading progress is optional and cannot gate access. On mobile use a collapsible contents control; reduced motion uses instant anchor changes. Without scripts, ordinary contents links and all sections remain available.

# Visual Style Modules

Sizes are CSS pixels; device tuples are desktop/tablet/mobile. Tokens are starting values, not a reason to override semantic wrapping or text enlargement. Locale profiles own script-specific fonts, tracking and leading. Each style can use any suitable theme; suggested color directions are independent hints.

## Shared Responsive Foundation

Desktop content width 1200 maximum with at least 40 side padding; tablet 32; mobile 20 (16 at 320px if necessary). Grid: 12/8/4 columns; gaps 24/20/16. Choose content-driven breakpoints near 1024 and 640 rather than testing only fixed sizes. Reading measure comes from the locale module. Controls should remain comfortably operable with an initial minimum target size of 44px. These values are design defaults, not claims of standards certification.

## technical-editorial

- Concept: an annotated product workbench, showing actual UI and information rather than decorative code.
- Grid: asymmetric 5:7 hero; dense feature index alternating with wide demonstrations. Hero becomes text then demo on mobile.
- Display: 64/52/36, weight 600; heading 36/30/26. Latin display tracking -0.025em; body tracking 0. Use locale-specific CJK overrides.
- Section space: 96/72/56. Component space: 8, 16, 24, 32. Corners: 4px controls, 8px preview surfaces; 1px functional dividers.
- Imagery: real product screenshots or labeled stateful UI preview. Signature: numbered annotations tied to features.
- Avoid: invented dashboards, meaningless terminal output and glow as the only identity. Suggested color directions: guide-style-08/11.

## tactile-editorial

- Concept: material-led fieldnotes with a clear narrative rhythm.
- Grid: 5:7 hero, alternating 7:5 process sections, occasional full-width material detail; mobile preserves text/image association.
- Display: 60/48/34, weight 600; heading 34/28/24. Latin display tracking -0.015em.
- Section space: 112/80/56; component space 8, 16, 24, 40. Corners: 0-4px; fine rules and small sequence labels.
- Imagery: real textures and production details with restrained crops, no fake distressed overlay on text. Signature: process marks and image captions.
- Avoid: arbitrary collage that separates evidence from its caption. Suggested color directions: guide-style-03/14/15.

## cinematic-hospitality

- Concept: atmosphere through original imagery and deliberate pauses, balanced with immediate practical information.
- Grid: image-led hero with protected text panel; staggered editorial sections and full-width visual pauses; mobile image height capped near 60svh.
- Display: 72/56/36, weight 500; heading 40/32/26. Latin serif tracking -0.02em.
- Section space: 120/88/64; corners 0-6px. Use a fixed readable text surface rather than assuming every photo supports overlaid text.
- Imagery: original venue/landscape/culture assets; specify crop focal points. Signature: chapter names and quiet image transitions.
- Avoid: compulsory intro, autoplay audio, inaccessible reservation/program information. Suggested color directions: guide-style-07/12/13.

## calm-service

- Concept: reassuring clarity and human context, with transparent service choices.
- Grid: 6:6 hero, compact service index, explanatory rows and provider/location details; mobile uses one column with no hidden service conditions.
- Display: 56/44/32, weight 600; heading 32/28/24. Latin display tracking -0.01em.
- Section space: 88/72/48; component space 8, 16, 24, 32. Corners: 8px surfaces and controls; visible focus and boundaries.
- Imagery: actual people/place with permission, diagrams only when informative. Signature: consistent service labels and calm typographic hierarchy.
- Avoid: vague trust badges, tiny disclosures and ornamental animation around forms. Suggested color directions: guide-style-03/05/06.

## industrial-precision

- Concept: technical capability supported by verifiable evidence and clear units.
- Grid: 4:8 hero, capability tables, process diagram and case rows; mobile stacks table labels and values or provides clearly signposted horizontal table scrolling.
- Display: 64/48/34, weight 650 where supported, otherwise 600; heading 34/28/24. Latin tracking -0.02em.
- Section space: 88/72/48; corners 0-2px. Numeric/tabular alignment for actual specifications; do not invent measurements.
- Imagery: equipment and process photographs with exact captions. Signature: measured rules and numbered stages.
- Avoid: fabricated certification symbols, decorative measurements and tiny technical text. Suggested color directions: guide-style-11/13.

## architectural-gallery

- Concept: a spatial archive where imagery and project context share priority.
- Grid: 12-column index with varied 8:4 and 6:6 images, project detail 8:4; mobile single-column reading with captions adjacent to each image.
- Display: 68/52/36, weight 500; heading 36/30/26. Latin display tracking -0.025em.
- Section space: 128/88/64; corners 0px. Hairlines may decorate but controls retain visible functional borders.
- Imagery: real projects/plans with original aspect ratios and contextual crops. Signature: project numbers, location and material index.
- Avoid: hiding project facts behind hover or forcing horizontal navigation for the whole site. Suggested color directions: guide-style-06/08/14.

## bold-experimental

- Concept: expressive type and controlled contrast with a usable discovery/purchase path.
- Grid: oversized 7:5 opening, alternating image/text scale, offset collection index; mobile resets overlapping content into intentional reading order.
- Display: 88/64/40, weight 700; heading 40/32/26. Latin display tracking -0.035em; never copy this to CJK.
- Section space: 96/72/56; corners 0px on imagery and 4px on controls. Use a single recurring graphic gesture rather than many competing effects.
- Imagery: real collection/editorial assets with consistent art direction. Signature: bold section numbers or color blocks tied to content.
- Avoid: rotating text required for comprehension, cursor-only navigation and equal emphasis for every action. Suggested color directions: guide-style-04/09/10.

## playful-learning

- Concept: approachable structured exploration, with progress and clear learning hierarchy.
- Grid: 6:6 hero, pathway steps, curriculum outline and sample lesson; mobile displays the steps vertically with progress labels.
- Display: 60/48/34, weight 700; heading 34/28/24. Latin tracking -0.015em.
- Section space: 88/72/48; corners 12px surfaces, 8px controls. Illustrations use a consistent shape language; do not turn every paragraph into a card.
- Imagery: genuine classroom/material examples or labeled explanatory illustrations. Signature: step numbers and meaningful progress indicators.
- Avoid: confetti that blocks controls, fake completion rewards and distracting continuous motion. Suggested color directions: guide-style-02/04/05.

## Style Overrides

Before choosing an immersive implementation, read [spatial-composition.md](spatial-composition.md). 3D can be expressed through lines, geometric fields, depth planes and typography rather than an object viewer.

When combining styles, keep one grid/spacing system and borrow only named details from the supporting style. Preserve image focus, reading order and the need module's primary action. Changing style does not automatically change industry evidence, functional behavior or palette.

## spatial-editorial

- Concept: content and spatial cues form one editorial system, without an obligatory central 3D object.
- Grid: 1200px maximum, 12/8/4 columns; a left opening, asymmetric development and quieter conclusion illustrate varied rhythm rather than a fixed sequence for all sites.
- Display: 68/52/36, weight 500; heading 38/30/26. Latin display tracking -0.02em; CJK retains locale-specific tracking, leading and semantic breaks.
- Section space: 112/80/56; component space 8, 16, 24, 40. Fine section rules echo scene lines. Reserve readable text surfaces before placing geometry.
- Spatial language: one connected path, restrained frames/planes, varied depth and intentional negative space. Coordinate shape angles, image crops, borders and type proportions.
- Motion: normal-scroll perspective changes, then settles. No default autonomous spin, particle field or identical reveal in every section.
- Mobile: re-compose full-width reading regions and static spatial art, with optional low-tier rendering; do not scale down the whole desktop composition.
- Avoid: identical centered sections, unrelated floating primitives or effects crossing essential copy. Select colors from the actual brand, not the sample's dark palette.

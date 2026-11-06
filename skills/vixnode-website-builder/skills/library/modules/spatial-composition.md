# Spatial Art Direction: Lines, Geometry and the Whole Page

## Core Decision

3D is a spatial design language, not a synonym for a floating product model. Choose how typography, lines, geometry, images, planes, color, motion and negative space work together before choosing a mesh. A coherent static composition is the foundation; animation adds an explanatory or navigational layer.

Use this module whenever immersive design is requested, including pages with no physical product. Do not replace user-selected brand identity with the sample's metallic material, dark palette or scene. A static editorial site may be the right answer when motion has no clear role.

## Select a Spatial Vocabulary

| Vocabulary | Design purpose | Suitable subject | Implementation status |
| --- | --- | --- | --- |
| Flowing lines and paths | Guide the eye, connect stages, imply direction | Brand evolution, process, research, cultural stories | `weave` includes continuous curved paths |
| Geometric fields | Express rhythm, grouping and relationships | Creative identity, information systems, exhibitions | `weave` includes ruled frames; customize grouping to meaning |
| Architectural planes and depth | Create thresholds, layers and negative space | Architecture, studio identity, destinations, editorial work | `weave` includes faint planes at distinct depths |
| Typographic spatial composition | Use scale, alignment and reading order as the focal structure | Personal brands, editorial, professional services | Implement in semantic HTML/CSS; typography is not rasterized into 3D |
| Image and material layers | Bring real evidence into a spatial composition | Craft, food, fashion, hospitality | Requires actual authorized media and an authored layout |
| Object or assembly study | Explain actual form, orientation or part relationships | Product evaluation and manufacturing | `product` / `exploded`; only use when the task needs them |

Choose one primary vocabulary and at most a few supporting gestures. These are design choices, not six effects to enable simultaneously. Image layers and spatial typography are not claimed as ready-made WebGL widgets.

## Required Composition Map

Before implementation, write a compact table for every major chapter:

| Field | Resolve explicitly |
| --- | --- |
| Content purpose | What the visitor should understand or do here |
| Focal hierarchy | Primary text/image/action, secondary spatial cue, quiet background |
| Lines | Path, connector, boundary or rhythm; why it belongs to this brand |
| Geometry | Shape family, density, scale, depth and relation to actual content |
| Text-safe area | Actual solid/controlled surface and reserved reading space |
| Color relationship | HTML semantic roles plus supporting scene colors; readable contrast remains independent of lighting |
| Layout rhythm | Opening, development and resolution with distinct density/alignment/scale |
| Motion role | Trigger, direction, amplitude, pause/settle behavior and semantic relationship |
| Small-screen equivalent | Re-composed hierarchy and static diagram/poster, not a tiny desktop canvas |

One recognizable gesture can recur while composition changes. A sparse opening, an asymmetric dense middle and a calm conclusion are one example, not a mandatory layout for every site. Keep a meaningful story order; avoid repeating the same giant centered heading, centered object and text block in every section.

## Coordinate the Whole System

- Derive the visual metaphor from actual industry, brand and visitor task. Lines can express a thread, route, connection or sequence; random geometry does not create identity on its own.
- Set text, main action and evidence as the primary hierarchy. Reserve a stable reading region before rendering. Do not let geometry or motion continually cross text or controls.
- Make line weight, border treatment, geometry angles, type proportions and spacing feel related. Scene colors may be supporting values; they need not all use the CTA color.
- Alternate scale, alignment and density deliberately. Reuse a coherent vocabulary without cloning the same section layout.
- Keep depth cues coordinated: perspective, overlap, scale, fog and opacity should support one spatial model. More particles, bloom or rotation do not automatically improve immersion.
- Motion should lead, reveal, connect or explain, then settle. Keep normal scrolling, direct navigation, a reduced-motion version and complete semantic content.
- Instantiate per-locale font metrics and approved headline segments. The English demo is not a wrapping template for CJK text. Never sacrifice clause integrity to keep a decorative diagonal or object visible.

## Implemented Reference Composition

Use [Spatial Weave](../recipes/spatial-weave.md) for an executable non-object starting point. Its `weave` scene contains continuous ribbons, line frames and low-opacity depth planes, without a central hero object or particle field. Its HTML changes from a left-aligned opening to a right-aligned development and a centered resolution. The scene spans the whole viewport while controlled text surfaces protect reading.

The alternate [Spatial Passage](../recipes/spatial-passage.md) is a threshold/portal study; [Object Study](../recipes/object-study.md) and [Assembly Explainer](../recipes/assembly-explainer.md) remain specialized choices. Do not infer that every industry should receive the weave, portal or dark demo theme.

## Review the Design, Not Just the Renderer

Inspect screenshots at chapter boundaries and intermediate progress, with and without motion. Check whether the brand idea is recognizable without its logo, whether lines lead toward meaningful content, whether text-safe areas stay clear and whether section rhythms vary. Evaluate color, typography and geometry together rather than passing a design because a canvas rendered.

If the page still feels repetitive, revise composition, evidence and narrative before adding more effects. Record visual findings and distinguish the tested reference from arbitrary generated customer sites.

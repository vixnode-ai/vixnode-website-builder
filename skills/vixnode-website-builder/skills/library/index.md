# Website Module and Recipe Library

Version: 1.0. These are implementation-oriented design specifications, not rendered website assets. Recipe status is `spec-ready`; no recipe is visually verified until a particular generated site has been inspected.

## Load Only What the Task Needs

1. Read [composition.md](composition.md) for selection, merging and the builder handoff.
2. Select a starting recipe below, or compose directly when none fits. Read its referenced module sections, not all recipes.
3. Inspect current [theme data](../themes.json) and the [color rules](../color-system.md) when resolving colors.
4. Read the requested locale profiles, then fill [the output template](../template.md). Apply the parent's page-creation rules only when building a website.

All links resolve relative to the resource URI. For example, this index is `skill://vixnode/vixnode-website-builder/skills/library/index.md`. A filesystem path is not required when the host supports resource reads.

## Shared Modules

| Dimension | Resource | Selection |
| --- | --- | --- |
| Industry | [industries.md](modules/industries.md) | One main profile; optional evidence overlays |
| Need | [needs.md](modules/needs.md) | One primary task; optional secondary task |
| Visual style | [visual-styles.md](modules/visual-styles.md) | One base style; controlled supporting detail |
| Experience | [experiences.md](modules/experiences.md) | One main mode; named secondary interactions |
| Locale | [locale-profiles.md](modules/locale-profiles.md) | Every explicitly requested site locale |
| Palette | [color-system.md](../color-system.md) and [themes.json](../themes.json) | Actual colors and semantic roles, independent of industry |
| Immersive implementation | [immersive-3d.md](modules/immersive-3d.md) | Load for actual WebGL, 3D camera, models or spatial scene requests |

## Starting Recipes

| Recipe | Best starting brief | Primary modules |
| --- | --- | --- |
| [Product Workbench](recipes/product-workbench.md) | SaaS/AI feature understanding and trial | software-tech / product-understanding / technical-editorial / product-demo |
| [Craft Fieldnotes](recipes/craft-fieldnotes.md) | Craft/manufacturing brand and inquiry | manufacturing-craft / inquiry / tactile-editorial / process-exploration |
| [Dining Atelier](recipes/dining-atelier.md) | Restaurant story, menu and booking | food-restaurants / booking / cinematic-hospitality / buying-decision |
| [Calm Consultation](recipes/calm-consultation.md) | Professional healthcare/wellness service inquiry | healthcare-medical / booking / calm-service / buying-decision |
| [Industrial Proof](recipes/industrial-proof.md) | B2B capabilities and qualified leads | manufacturing-craft / inquiry / industrial-precision / process-exploration |
| [Spatial Archive](recipes/spatial-archive.md) | Architecture/interior portfolio | home-interior / portfolio / architectural-gallery / timeline-exhibition |
| [Collection Studio](recipes/collection-studio.md) | Fashion/retail collection and purchase | retail-commerce / purchase / bold-experimental / buying-decision |
| [Cultural Passage](recipes/cultural-passage.md) | Cultural/event chapter journey and registration | entertainment-media / registration / cinematic-hospitality / spatial-journey |
| [Learning Pathways](recipes/learning-pathways.md) | Courses, outcomes and enrollment | education-schools / registration / playful-learning / knowledge-reading |
| [Public Impact](recipes/public-impact.md) | Nonprofit mission, evidence and participation | nonprofit-charity / campaign / tactile-editorial / brand-story |

## Executable 3D Technical Recipes

These overlay the relevant industry/task design; they do not replace its evidence, locale or integration requirements. Read [spatial-composition.md](modules/spatial-composition.md) first. A 3D request does not imply a central object; compose lines, geometry, planes, text and negative space across different section rhythms.

| Recipe | Implemented starter | Application |
| --- | --- | --- |
| [Spatial Weave](recipes/spatial-weave.md) | Continuous paths, ruled geometry, depth planes and varied text composition | Whole-page spatial art direction without a central object |
| [Spatial Passage](recipes/spatial-passage.md) | Three portal chapters and scroll-driven camera | Brand journeys, culture, destinations and exhibitions |
| [Object Study](recipes/object-study.md) | Product angles with optional bounded embedded GLB | Actual object understanding and product evaluation |
| [Assembly Explainer](recipes/assembly-explainer.md) | Reversible separation of five procedural layers | Process/material explanation; real assemblies require authored named parts |

The [implementation module](modules/immersive-3d.md) links to actual JS, CSS and a complete local HTML demonstration, camera/state contracts, asset budgets and host integration instructions. Read only the relevant technical resources. Arbitrary models, shaders, decoders and production hosting are not automatically verified by using the starter.

These are defaults, not industry restrictions. Finance, legal, science and other profiles can combine with a relevant need and style without a dedicated recipe. Do not force a medical, commerce or donation workflow onto an unrelated task merely because its layout is attractive.

## Coverage and Extensions

The industry module covers all 20 existing Industry theme categories, plus a manufacturing/craft overlay. Needs cover awareness, product understanding, inquiry, purchase, booking, registration, recruitment, portfolio, knowledge and campaigns. Nine visual styles and six main experience modes are composable. Four locale profiles have numeric typography baselines.

For an unsupported domain, extend the closest module with the user's actual evidence and vocabulary, record the extension in the output, and keep existing IDs unchanged. A theme name or palette does not establish capabilities, certifications or site features.

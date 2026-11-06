# {{project_name}} - Website Design and Experience Specification

> Replace every placeholder with a decision, explicit assumption or unresolved item. Remove these authoring notes from the delivered specification. Use English unless the user explicitly requests another document language. Website copy follows the site's requested locales independently.

## 1. Identity, Scope and Sources

- Recipe ID / version: {{id_and_version}}
- Status: {{draft_or_spec_reviewed_or_visually_verified}}
- Deliverable / destination: {{requested_scope}}
- Sources / theme source / observation date: {{provenance}}
- Website locales: {{requested_locales}}
- Selected recipe/version or direct composition: {{recipe_or_direct_composition}}
- Module IDs (industry, need, visual style, experience, locales): {{selected_module_ids}}
- Explicit user overrides and dependent values rechecked: {{overrides_and_dependencies}}

## 2. Brief and Composition Decisions

| Dimension | Selection | Rationale |
| --- | --- | --- |
| Industry and audience | {{industry_audience}} | {{evidence_needs}} |
| Primary visitor task | {{primary_need}} | {{main_action}} |
| Visual style | {{visual_style}} | {{brand_fit}} |
| Color direction | {{color_style_ids}} | {{emotion_and_tone}} |
| Experience mode | {{experience}} | {{task_benefit}} |
| Website locales | {{locales}} | {{copy_and_typography_needs}} |

Brand traits, available assets, assumptions and unresolved decisions: {{brief_details}}

## 3. Visual Language

Concept, hero composition, grid, section rhythm, geometry, imagery/materials, signature details and effects to avoid: {{concrete_art_direction}}

## 4. Color Specification

Actual theme ID and data source: {{theme_id_and_source}}

Lightness, saturation, temperature, contrast, strategy, non-overlapping area ratios and variants: {{color_strategy}}

| UI role | HEX | Source or derivation | Usage and pairing |
| --- | --- | --- | --- |
| {{repeat_for_required_roles}} | {{actual_hex}} | {{origin}} | {{pairing}} |

## 5. Multilingual Copy and Typography

Repeat both tables for every requested locale; add any required text levels.

| Locale and level | Font stack | Device sizes and weight | Tracking and line height | Container and reading width |
| --- | --- | --- | --- | --- |
| {{locale_and_level}} | {{font_stack}} | {{sizes_weight}} | {{tracking_lineheight}} | {{measure}} |

| Locale and headline | Full copy and semantic segments | Desktop, tablet and mobile lines | Secondary breaks and protected terms | Minimum size and overflow policy |
| --- | --- | --- | --- | --- |
| {{locale_headline}} | {{real_copy_segments}} | {{device_lines}} | {{break_rules}} | {{fit_policy}} |

## 6. Pages and Content Structure

| Page or section | Purpose and content evidence | Composition | Main action | Mobile adaptation |
| --- | --- | --- | --- | --- |
| {{section}} | {{purpose_content}} | {{layout}} | {{action}} | {{mobile_layout}} |

## 7. Interactions and Scenes

If 3D is selected, resolve the technical recipe, engine/version and delivery URLs, scene/asset manifest, camera keys, renderer budgets, lifecycle ownership and static/reduced-motion failure paths. Use the immersive module; omit this extra implementation detail for a static design.

| Interaction | Purpose and trigger | Initial to final state and feedback | Timing, exit and reversal | Touch and keyboard | Reduced-motion version |
| --- | --- | --- | --- | --- | --- |
| {{interaction}} | {{purpose_trigger}} | {{states_feedback}} | {{timing_exit}} | {{inputs}} | {{fallback}} |

## 8. Acceptance, Open Items and Builder Handoff

| Check | Criteria | Result and evidence |
| --- | --- | --- |
| Document consistency | Traceable colors, complete roles, area groups total 100 | {{result}} |
| Multilingual typography | Real fonts, semantic line breaks, spacing and text enlargement | {{observed_or_not_run}} |
| Core experience | State transitions, primary action, input and reduced-motion versions | {{observed_or_not_run}} |
| Visual composition | Brand identity, hierarchy, readability, real image backgrounds and overflow | {{observed_or_not_run}} |

Missing assets, copy, decisions, builder constraints and delivery boundaries: {{handoff}}

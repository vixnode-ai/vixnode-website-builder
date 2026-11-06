# Visitor Need Modules

Use one primary ID. Section sequences are content priorities, adaptable to an approved sitemap. The selected industry supplies real evidence. A secondary need contributes only the sections/actions necessary for that task.

## Need Catalog

| ID | Visitor question and main action | Recommended content sequence | Required data | Acceptance |
| --- | --- | --- | --- | --- |
| awareness | What is this brand and why does it matter? Explore or contact | Statement, actual work, principles/process, proof, next step | Brand proposition, real work, relevant proof, destination | Visitor can identify offer and next step without finishing an animation |
| product-understanding | Will this solve my task? Try or evaluate | Outcome, representative demo, workflow, use cases, constraints, plans/contact | Actual feature behavior, supported scope, demo destination | Demo reflects stated features; trial action and limitations are visible |
| inquiry | Can this provider meet my requirements? Send a brief | Offer, relevant work, capabilities, process, cooperation conditions, inquiry | Contact destination, required request fields, actual service scope | Inquiry has accessible labels, truthful delivery feedback and a contact fallback |
| purchase | Is this the right product and how do I buy it? Add to cart or checkout | Collection, discovery/filter, product detail, delivery/returns, purchase | Product/variant IDs, prices/currency, stock source, cart/checkout integration | No purchase possible for invalid options; totals and failures reflect the real service |
| booking | Which service and time should I select? Book or request an appointment | Service fit, provider/location, service details, availability, booking, confirmation | Services, durations, location/time zone, actual availability provider | Selection and time zone persist; final confirmation comes only from a real response |
| registration | Is this event/course for me? Register | Promise, program/outcomes, eligibility/level, schedule, fee, registration | Actual dates/time zone, capacity source, terms, registration destination | Eligibility and date are clear; review selection before a real submission |
| recruitment | Should I join and how do I apply? View role or apply | Mission/work, team evidence, roles, requirements, hiring process, application | Real open roles, location/work arrangement, application route | No invented vacancies or benefits; role details remain accessible without effects |
| portfolio | Is this work relevant to my project? Inspect work and contact | Positioning, selected work, case detail, method, profile, inquiry | Real projects, media permission, scope, role and outcomes | Each work item has context; detail can be opened, closed and linked where supported |
| knowledge | How do I understand or find this information? Read, search or navigate | Overview, contents/search, sections, explanations/evidence, related material | Actual source content, authors/dates where relevant, searchable scope | Deep links and normal reading work; explanations distinguish examples from findings |
| campaign | Why participate and what can I do? Join, volunteer, pledge or donate | Mission/problem, evidence, actions, practical details, participation | Actual campaign scope, evidence dates, action destination | Action is concrete; financial and participation outcomes are not simulated |

## Interaction Contracts by Task

### Inquiry and Application

`editing -> invalid | submitting -> success | error`. Validate required fields with visible text; link errors to fields and preserve entered values on failure. Prevent duplicate submission while pending. On success show only what the service confirms. No backend: link to an actual contact route or label a non-submitting preview. Do not collect sensitive detail just to make a demo look complete.

### Booking and Registration

`unselected -> selected -> reviewing -> submitting -> confirmed | conflict | error`. Include empty/loading/unavailable states when fetching availability. A conflict returns to selection with the previous choice visible and a clear explanation. Dates, time zones, currencies and capacities use supplied/connected data. Do not fabricate appointment slots or registration counts. A request-based flow says "request received", not "booking confirmed", unless confirmed.

### Purchase

`browsing -> options-selected -> cart-pending -> cart-updated | unavailable | error -> checkout`. Resolve variants and price from actual data. Keep selected options on errors. Link checkout to the real supported provider; do not construct a payment flow from invented endpoints. A design preview may demonstrate state changes only when visibly labeled and without claiming purchase completion.

### Read and Explore

Use addressable sections when supported; maintain focus and scroll context when opening details. Filters expose result count, empty state and reset. Search covers only actual available content and clearly explains an empty result. A timeline or chapter journey must not be required to reach essential service/contact information.

## Primary Action Placement

Use a clear action near the proposition and repeat it after meaningful evidence or at the decision point, rather than adding unrelated CTAs to every section. Sticky mobile actions may be useful for booking/purchase; ensure they do not obscure content, keyboard focus or form controls.

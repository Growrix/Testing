# CoolPeak Aircon Frontend Transformation Plan

## 1. Replica Baseline

- Project root resolved at `FRONTEND DEV/aircon-installer/` with the shared hybrid canonical starter attached.
- No phase-1 replicated Next.js frontend exists yet inside this root. Current baseline is planning-only, not an implemented route surface.
- Because the replica is pending, this document defines the exact transformation contract the future phase-1 shell must follow.
- Preservation decisions below apply to the eventual replica or starter shell if those surfaces appear during implementation.

## 2. Authored Site Intent

### Locked Business Direction

- Brand: CoolPeak Aircon
- Market: Greater Brisbane, with residential installs as the lead offer and light-commercial jobs as a secondary revenue stream
- Positioning: licensed local installers, tidy workmanship, fast quoting, transparent advice, strong after-install support
- Tone: practical, trustworthy, modern trade business rather than bargain-basement or premium-luxury showroom

### Conversion Model

- Primary conversion: phone calls from mobile and desktop high-intent pages
- Secondary conversion: short request-quote form with callback expectation and structured job details
- Support conversion: suburb landing pages that capture local search intent and route users into service detail pages or the quote form

### Content Direction

- Lead with installation clarity, service areas, warranties, and proof instead of generic brand storytelling
- Use projects, testimonials, manufacturer familiarity, and trade credentials to build trust
- Keep content concise, scannable, and local-intent focused
- Defer blog-heavy SEO strategy; launch with strong service and suburb page coverage instead

## 3. Keep / Adapt / Replace / Retire Matrix

### Public Routes

| Route or Surface | Decision | Planning Rule |
| --- | --- | --- |
| Home | replace | Build a new trade-service homepage focused on quote conversion, service area confidence, and installation proof. |
| Services overview | adapt | Reuse a strong grid or card shell if it exists, but replace all taxonomy, copy, iconography, and CTAs with aircon-specific content. |
| Split-system installation | adapt | Keep any usable service-detail layout shell, then replace all sections with split-system install content, pricing guidance, FAQs, and quote actions. |
| Ducted air conditioning | adapt | Use the same service-detail template with ducted-specific decision support, zoning benefits, and install process proof. |
| Aircon replacement and upgrades | replace | Add a dedicated route if it does not exist; this should target aging-system replacement intent separately from fresh installs. |
| Servicing and maintenance | adapt | Reuse a service-detail layout only if it supports maintenance plans, seasonal servicing, and repair-prevention messaging. |
| Commercial air conditioning | adapt | Keep a strong detail template if present, but rewrite for offices, retail spaces, and tenancy fit-outs with consultation CTAs. |
| Service areas index | adapt | Reuse list or directory shells only if they support local navigation and internal links to suburb detail pages. |
| Suburb detail pages | replace | Create a dedicated suburb template with local trust signals, service coverage, review proof, and quote CTA. |
| Projects | adapt | Reuse a gallery or case-study shell if visually strong; rewrite around installation outcomes, system types, and suburb relevance. |
| Reviews | adapt | Keep testimonial layouts if clean and readable; replace demo content with local homeowner and business proof. |
| About | adapt | Keep a simple informational page structure, but replace with company story, licenses, workmanship standards, and service philosophy. |
| Financing and warranty | replace | Add a dedicated support page covering payment flexibility, manufacturer coverage, and workmanship warranty. |
| Contact | adapt | Keep only if the layout supports phone, service area, hours, map cues, and structured enquiry details. |
| Request quote | adapt | Preserve a capable form shell if it exists; otherwise build a simplified trade quote page with fast completion. |
| Thank-you | keep | Keep the success route if available, but rewrite around callback timing, next steps, and optional emergency phone CTA. |
| Blog or news | retire | Exclude from phase-2 scope unless a later content lane requires it. |
| Shop, pricing calculator demo, accounts, or booking app flows | retire | Remove any non-trade-business routes that dilute the quote funnel or suggest unsupported functionality. |

### Shared Surfaces

| Shared Surface | Decision | Planning Rule |
| --- | --- | --- |
| Header and topbar | adapt | Keep responsive structure if solid; replace labels, trust messaging, phone CTA, and quote priority. |
| Hero | replace | New hero must immediately communicate service area, install specialty, speed to quote, and trust signals. |
| Announcement or promo bar | adapt | Convert into an offer or trust strip such as free quotes, licensed installers, or finance availability. |
| Primary CTA system | replace | Standardize on call now and request quote actions across hero, cards, proof blocks, and mobile sticky surfaces. |
| Service cards | adapt | Reuse a strong card pattern only if it supports icon, short benefit, and local-intent CTA copy. |
| Testimonials | adapt | Preserve slider or grid shell if stable, but replace every testimonial with install-focused proof. |
| Projects gallery | adapt | Keep layout mechanics if effective; replace all media, captions, and outcomes with aircon jobs. |
| Manufacturer or brand logos | adapt | Replace generic partner logos with recognised aircon brands and trust marks. |
| FAQ accordion | adapt | Rebuild around installation cost ranges, timing, property suitability, maintenance, finance, and warranty questions. |
| Quote form | adapt | Keep only if it supports service type, suburb, job stage, property type, and preferred callback timing. |
| Sticky mobile CTA | adapt | Preserve if present and accessible; wire to immediate phone and quote actions. |
| Footer | adapt | Replace with services, suburbs, contact details, hours, legal pages, and trust information. |
| Newsletter capture | retire | Remove from launch scope. |
| Ecommerce filters or catalogue grids | retire | Eliminate unless the business later adds true product-led browsing. |

## 4. New Route And Journey Plan

### Target Route Tree

- `/`
- `/services`
- `/services/split-system-installation`
- `/services/ducted-air-conditioning`
- `/services/aircon-replacement-upgrades`
- `/services/servicing-maintenance`
- `/services/commercial-air-conditioning`
- `/service-areas`
- `/service-areas/[suburb]`
- `/projects`
- `/reviews`
- `/about`
- `/financing-warranty`
- `/contact`
- `/request-quote`
- `/thank-you`
- `/privacy-policy`
- `/terms`

### Key User Journeys

1. Install-first journey: home or service page -> trust proof -> request quote or call now.
2. Local search journey: suburb page -> matching services -> testimonials or projects -> quote form.
3. Upgrade journey: replacement page -> signs to replace -> finance and warranty reassurance -> quote form.
4. Commercial journey: commercial service page -> scope explanation -> contact or quote request.
5. Support journey: servicing page -> FAQ and maintenance proof -> contact form or call.

### Homepage Section Plan

1. Hero with local promise, phone CTA, and quote CTA
2. Fast trust strip with licenses, warranty, and response-time framing
3. Core services grid
4. Split-system versus ducted guidance block
5. Projects or before-and-after proof
6. Review highlights
7. Financing and warranty teaser
8. Service-area preview with top suburbs
9. FAQ preview
10. Final conversion block and footer

## 5. Shared Surface Strategy

### Global Chrome

- Header should show phone number, service-area cue, services nav, and request-quote CTA without crowding.
- Footer should include service links, suburb links, contact details, hours, legal links, and trust summaries.
- Mobile navigation should prioritise phone and quote actions over deep menu exploration.

### Proof And Trust System

- Use visible trade credentials, insured and licensed messaging, manufacturer familiarity, review counts, and workmanship warranty.
- Feature real installation outcomes rather than generic aspirational lifestyle copy.
- Maintain a consistent trust pattern across home, services, suburb pages, and quote surfaces.

### Content Model Strategy

- Services: title, slug, summary, ideal use case, inclusions, FAQs, and CTA copy
- Suburbs: suburb name, summary, nearby proof, service notes, and CTA variant
- Projects: suburb, system type, property type, challenge, solution, outcome
- Testimonials: quote, customer type, suburb, related service
- FAQs: route association, question, answer, category
- Manufacturers: name, logo, short trust statement

### Form Strategy

- Keep forms short enough for mobile completion.
- Required fields should cover service type, suburb, property type, name, phone, and preferred callback timing.
- The request-quote flow must have idle, loading, success, and failure states planned from the start.

## 6. Ordered Transformation Backlog

1. Stand up the Next.js frontend shell inside `FRONTEND DEV/aircon-installer/` and keep it portable.
2. Create typed content data for services, suburbs, testimonials, projects, FAQs, manufacturers, and CTAs.
3. Build global chrome: header, top trust bar, footer, and sticky mobile CTA.
4. Implement the homepage using the section order defined in this plan.
5. Build the services overview page and shared service-detail template.
6. Implement the four primary service routes plus the commercial service page.
7. Build the service-areas index and suburb detail template.
8. Implement reviews and projects pages with reusable card and detail patterns if needed.
9. Implement financing and warranty, about, contact, request-quote, and thank-you routes.
10. Remove any demo, ecommerce, SaaS, or blog-first residue from the phase-1 shell.
11. Validate every nav item, CTA, mobile action, and footer link against real routes and real states.
12. Prepare the frontend for phase-3 polish without reopening the route architecture.

## 7. Phase5-7 Compatibility Notes

- Keep all routes stable and human-readable.
- Keep data typed and front-end local so later import or attach work can move it without structural rewrites.
- Avoid backend-specific assumptions in components, forms, and content loaders.
- Ensure all visible flows are real before any later attach or deployment lane begins.
- Preserve standard Next.js portability and avoid custom runtime constraints unless later phases require them.

## 8. Risks And Locked Assumptions

### Locked Assumptions

- Region is Greater Brisbane.
- Business is residential-first with light-commercial support.
- Launch scope excludes ecommerce, account systems, blog-first SEO, and advanced calculators.
- Financing is present as a reassurance and support page, not as the lead brand story.

### Risks

- Real-world assets such as reviews, suburb priorities, phone numbers, and photography will still be needed before production publishing.
- If a future phase-1 replica introduces heavy commerce or SaaS patterns, more shell replacement work will be required during implementation.
- Suburb-page scale can grow quickly; typed data and template discipline are mandatory to keep the site maintainable.
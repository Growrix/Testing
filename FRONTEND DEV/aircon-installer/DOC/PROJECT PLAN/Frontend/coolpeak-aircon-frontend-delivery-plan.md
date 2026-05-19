# CoolPeak Aircon Frontend Delivery Plan

## Purpose

- Translate the canonical e2e plan into page-by-page build instructions for the future Next.js runtime
- Define shared surfaces, route composition, reusable components, and route acceptance criteria before implementation begins

## Runtime Starting Point

- Build a single Next.js app in `FRONTEND DEV/aircon-installer/`
- Keep the project portable and frontend-only
- Start from typed local content, not hard-coded copy buried in page files

## Shared Surfaces

### Global Header And Topbar

- Topbar content: service-area cue, licensing or trust statement, primary phone number
- Header content: logo, services nav, service areas entry, projects, reviews, about, contact, request quote CTA
- Mobile shell: compact menu plus sticky call and quote actions

### Global Footer

- Service links
- Suburb links
- Contact details and trading hours
- Privacy policy and terms
- Trust summary covering licensed installers and warranty support

### Reusable Sections

- Hero
- Trust strip
- Service card grid
- Testimonial cluster
- Project highlight strip
- Brand familiarity strip
- FAQ accordion
- Financing and warranty teaser
- Final CTA block

## Page-By-Page Plan

### Home `/`

- Goal: convert high-intent traffic into calls or quote requests while quickly proving local trust
- Required sections:
  - hero with phone and quote CTA
  - trust strip
  - services overview
  - split-system versus ducted guidance
  - featured projects
  - testimonial highlights
  - financing and warranty teaser
  - top suburbs preview
  - FAQ preview
  - final CTA
- Primary data: service summaries, testimonials, featured projects, suburb list, FAQ preview
- Acceptance criteria: both core CTAs visible above the fold on desktop and mobile; all teaser links resolve to real routes

### Services Index `/services`

- Goal: let users self-select their job type without friction
- Required sections:
  - intro hero
  - services grid
  - comparison or selection helper
  - trust proof
  - FAQ or next-step block
- Primary data: service cards, comparison bullets, FAQ subset
- Acceptance criteria: each service card routes to the correct detail page; no orphan services remain unlinked

### Split-System Installation `/services/split-system-installation`

- Goal: capture residential install demand for single-zone systems
- Required sections:
  - benefit-led hero
  - ideal-for block
  - installation inclusions
  - installation process
  - brand familiarity
  - FAQ
  - quote CTA
- Acceptance criteria: CTA appears at hero and final block; FAQs answer install timing and typical pricing guidance

### Ducted Air Conditioning `/services/ducted-air-conditioning`

- Goal: support full-home or multi-room installation enquiries
- Required sections:
  - hero
  - zoning and whole-home comfort benefits
  - suitability checklist
  - installation process
  - financing and warranty teaser
  - FAQ
  - quote CTA
- Acceptance criteria: route clearly differentiates ducted from split-system decisions and links to quote flow

### Aircon Replacement And Upgrades `/services/aircon-replacement-upgrades`

- Goal: convert users with aging or inefficient systems
- Required sections:
  - hero
  - signs it is time to replace
  - efficiency and comfort benefits
  - upgrade path examples
  - finance reassurance
  - testimonial or project proof
  - quote CTA
- Acceptance criteria: content targets replacement intent separately from new installs

### Servicing And Maintenance `/services/servicing-maintenance`

- Goal: capture recurring service and preventive maintenance enquiries
- Required sections:
  - hero
  - what's included
  - why regular servicing matters
  - residential and landlord use cases
  - FAQ
  - contact or quote CTA
- Acceptance criteria: page supports service and maintenance intent without pretending to be an emergency-repair dispatch system

### Commercial Air Conditioning `/services/commercial-air-conditioning`

- Goal: capture small-business, office, and tenancy-fit-out leads
- Required sections:
  - hero
  - commercial job types
  - consultation process
  - compliance and downtime-sensitive messaging
  - case-study proof
  - contact and quote CTA
- Acceptance criteria: commercial copy stays distinct from homeowner messaging while sharing the same quote pathway

### Service Areas Index `/service-areas`

- Goal: route local-intent visitors to suburb-specific landing pages
- Required sections:
  - hero
  - suburb directory
  - service coverage explanation
  - trust proof
  - final CTA
- Acceptance criteria: every listed suburb links to a real suburb page; no dead local-intent links

### Suburb Template `/service-areas/[suburb]`

- Goal: convert local SEO traffic into calls and quote requests
- Required sections:
  - suburb-specific hero
  - services available in suburb
  - local proof or nearby projects
  - testimonials with suburb relevance
  - FAQ
  - final CTA
- Primary data: suburb record, linked services, nearby proof, CTA variant
- Acceptance criteria: template supports unique metadata, unique suburb copy, and links back into relevant service pages

### Projects `/projects`

- Goal: prove workmanship quality and real-world outcomes
- Required sections:
  - intro hero
  - featured project cards
  - optional filter by system or property type if content volume supports it
  - quote CTA
- Acceptance criteria: every project entry carries a system type, suburb, and outcome summary

### Reviews `/reviews`

- Goal: present trust proof without fake aggregate claims
- Required sections:
  - hero
  - testimonial groups
  - review-source note if applicable
  - final CTA
- Acceptance criteria: all testimonials are believable, route-linked proof items with no invented platforms or scores

### Financing And Warranty `/financing-warranty`

- Goal: reduce price hesitation and increase confidence in aftercare
- Required sections:
  - hero
  - payment flexibility summary
  - manufacturer warranty explanation
  - workmanship guarantee explanation
  - FAQ
  - quote CTA
- Acceptance criteria: page sets realistic expectations and avoids unsupported finance claims

### About `/about`

- Goal: establish company legitimacy and service philosophy
- Required sections:
  - brand story
  - installer standards
  - licensing and insured-work proof
  - service principles
  - CTA
- Acceptance criteria: page communicates local credibility without bloated corporate history filler

### Contact `/contact`

- Goal: offer a clear low-friction contact option for general enquiries
- Required sections:
  - phone-first CTA
  - short enquiry form
  - service area cue
  - trading hours
  - map or location guidance if used
- Acceptance criteria: contact path is simpler than the quote flow and clearly differentiated from it

### Request Quote `/request-quote`

- Goal: capture structured leads for installs, upgrades, and servicing
- Required sections:
  - concise intro
  - structured quote form
  - expectation-setting copy
  - alternate phone CTA
- Acceptance criteria: all required fields match the shared contract; loading, success, and failure states are designed before implementation

### Thank You `/thank-you`

- Goal: confirm submission and reduce user uncertainty after form completion
- Required sections:
  - confirmation message
  - callback timing expectation
  - optional direct-call CTA
  - links back to service pages
- Acceptance criteria: page can receive users from both contact and quote pathways if needed without confusing the next step

### Legal Pages `/privacy-policy` and `/terms`

- Goal: satisfy legal and trust requirements with complete footer-linked routes
- Required sections:
  - document heading
  - readable policy content
  - last updated marker
- Acceptance criteria: both pages are real routes and linked in the footer before launch

## Component And Data Dependencies

- Shared components should consume typed data objects rather than route-local constants
- Service routes and suburb routes must use templates or generators where practical to control drift
- Metadata generation must be data-driven for service and suburb routes

## Recommended Build Order

1. Layout, topbar, footer, mobile CTA, and metadata scaffolding
2. Typed data for services, suburbs, testimonials, projects, FAQs, and CTAs
3. Homepage and services index
4. Service detail pages
5. Service areas index and suburb template
6. Projects, reviews, financing and warranty, and about
7. Contact, request quote, thank-you, and legal pages

## Frontend Exit Criteria

- Every planned route exists and is linked from at least one real navigation surface
- No placeholder copy, broken links, fake counters, or dead CTA states remain
- Global chrome works at mobile and desktop breakpoints
- The build matches the shared contracts and passes the QA plan
# CoolPeak Aircon QA Validation Plan

## Purpose

- Define the validation gates that the future frontend runtime must pass before the project can be treated as execution-complete
- Protect against route gaps, fake flows, and content residue from generic templates

## Zero-Gate Policy

- Zero lint errors
- Zero type errors
- Zero build errors
- Zero VS Code Problems in the project runtime

## Route Coverage Gates

- Homepage loads and exposes visible phone and quote CTAs
- Services index links to every implemented service route
- Each service route renders the required sections from the frontend delivery plan
- Service areas index links to real suburb pages
- At least one suburb page template instance renders correctly with suburb-specific metadata
- Projects, reviews, about, financing and warranty, contact, request quote, thank-you, privacy, and terms all exist as real routes

## Flow Gates

- Call CTA works from header, hero, and sticky mobile surfaces
- Quote flow supports idle, validation error, loading, success, and failure states
- Thank-you route is reachable from the primary form path
- Footer links resolve correctly on desktop and mobile

## Content Truthfulness Gates

- No lorem ipsum, placeholder company names, or demo contact details remain
- No ecommerce, SaaS, or unrelated blog residue remains in navigation or page copy
- Testimonials, review counts, finance statements, and manufacturer references are not fabricated or misleading

## Responsive And Accessibility Gates

- Test primary routes at mobile, tablet, and desktop widths
- Confirm header, nav, sticky CTA, and forms remain usable by keyboard
- Confirm visible focus states exist for interactive elements
- Confirm images have meaningful alt text where needed

## Runtime Smoke Test Set

- `/`
- `/services`
- `/services/split-system-installation`
- `/service-areas`
- `/service-areas/[sample-suburb]`
- `/request-quote`
- `/thank-you`

## Execution Evidence Required

- Successful lint output
- Successful build output
- Route smoke evidence for the key pages above
- Note of any deferred polish items that do not block launch truthfulness

## Exit Rule

- Do not mark the frontend complete until every planned route, CTA, and state is real and validated
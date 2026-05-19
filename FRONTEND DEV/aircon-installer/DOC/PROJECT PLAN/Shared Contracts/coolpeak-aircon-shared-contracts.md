# CoolPeak Aircon Shared Contracts

## Runtime Boundary

- Canonical project root: `FRONTEND DEV/aircon-installer/`
- Canonical docs root: `DOC/PROJECT PLAN/`
- Frontend runtime target: a single portable Next.js app living in the project root
- Current runtime state: starter attached, frontend app not yet implemented

## Route Ownership Contract

- Frontend owns all public route files, shared layout composition, mobile navigation behavior, metadata wiring, and CTA rendering
- API and Data owns the slug rules, route data sources, form schema, and event names used by the frontend
- QA owns verification that each planned route exists, renders expected sections, and exposes real CTA behavior

## Content Ownership Contract

- Services, suburbs, testimonials, projects, FAQs, manufacturers, and CTA copy begin as typed local data
- Content structures must remain stable enough for a later CMS attach without forcing route redesign
- No role may introduce a content source that breaks static portability without a new planning update

## Quote Flow Contract

- Lead capture is a frontend-visible flow with a stable user contract regardless of later provider choice
- Required user inputs: name, phone, suburb, service type, property type, and preferred callback timing
- Required states: idle, validation error, submit in progress, submit success, submit failure
- Success path ends on `/thank-you` with clear callback expectations and optional direct-call recovery path

## Security And Privacy Contract

- No auth, no payments, and no customer accounts in phase 2
- No client-side secrets may be embedded in the runtime
- Third-party widgets or scripts require explicit review against privacy, performance, and CSP impact
- Legal routes for privacy and terms are mandatory launch surfaces, not optional footer placeholders

## Validation Handoff Contract

- Frontend must deliver complete routes and states before QA signoff begins
- QA signoff requires zero Problems, successful build, and route/state truthfulness
- Security review is required for forms, embeds, analytics tags, and any client-exposed data path before launch

## Later-Phase Continuation Contract

- Keep standard Next.js portability intact for shared phase5-7 continuation
- Do not add backend-specific assumptions into the frontend route tree during phase 2
- If later phases attach CMS or notification providers, they must preserve the public route and form behavior defined here
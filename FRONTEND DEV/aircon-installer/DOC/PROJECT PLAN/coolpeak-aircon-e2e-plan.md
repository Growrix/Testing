# CoolPeak Aircon End-To-End Plan

## 1. Planning Mode

- Fresh

## 2. Current State Audit

### Existing Runtime Roots

- Project root: `FRONTEND DEV/aircon-installer/`
- Starter package: attached and committed
- Actual frontend runtime: not implemented yet
- Backend or admin runtime: not in scope for this planning pass

### Existing Reusable Surfaces

- Reusable asset today is the project-local DOC system, not a UI runtime
- `DOC/MASTER PLAN/Plan.md` contains the locked business brief
- `DOC/PROJECT PLAN/frontend-aircon-transformation-plan.md` exists as an earlier transformation draft and can be treated as reference context, not the canonical e2e artifact

### Existing Blockers

- No Next.js runtime exists yet, so execution cannot begin until the frontend shell is bootstrapped
- Production business assets such as phone number, imagery, suburb priorities, and real testimonials are still pending

## 3. Goal And Scope

### In-Scope Work

- Define the canonical project-local plan for a conversion-first air conditioning installer website
- Lock the route architecture, page intent, content model, shared surfaces, integration boundaries, and validation gates
- Produce role-specific planning docs so a builder can execute without guessing missing ownership or acceptance criteria
- Preserve compatibility with the later shared phase5-7 continuation lane

### Out-Of-Scope Work

- Building the actual Next.js runtime in this planning pass
- Backend APIs, account systems, admin dashboards, or ecommerce functionality
- Deployment specialization beyond portable Next.js assumptions
- Emergency dispatch tooling, complex price calculators, or blog-first launch scope

## 4. Reuse And Delta Map

### Reuse As-Is

- Starter-attached DOC system and local continuation agents
- Locked business brief in `DOC/MASTER PLAN/Plan.md`
- Phase5-7 compatibility constraints already established in the earlier frontend transformation draft

### Extend Carefully

- Existing transformation thinking becomes a stricter page-by-page frontend delivery doc
- Shared contract placeholder becomes an active cross-role contract
- Tracker language evolves from starter-attached status to canonical-e2e-plan-ready status

### Replace Or Retire

- Retire the unresolved-runtime wording in the project metadata; the runtime root is known even though implementation is absent
- Replace placeholder shared-contract status with active ownership boundaries
- Retire any assumption that a single top-level plan is enough without downstream role docs

### Net-New Items

- Canonical e2e planning artifact
- Frontend role delivery plan
- API and Data contract
- Security plan
- QA validation plan
- Shared contract document tying the roles together

## 5. Route, Data, And Integration Plan

### Route Architecture

- Core revenue routes: `/`, `/services`, `/services/split-system-installation`, `/services/ducted-air-conditioning`, `/services/aircon-replacement-upgrades`, `/services/servicing-maintenance`, `/services/commercial-air-conditioning`
- Local-intent routes: `/service-areas`, `/service-areas/[suburb]`
- Proof routes: `/projects`, `/reviews`
- Trust and support routes: `/about`, `/financing-warranty`
- Conversion routes: `/contact`, `/request-quote`, `/thank-you`
- Legal routes: `/privacy-policy`, `/terms`

### Shared Surface Strategy

- Global header with top trust bar, phone CTA, service-area cue, and request-quote action
- Shared footer with services, suburb links, hours, contact details, and legal links
- Sticky mobile CTA pairing call and quote actions
- Reusable proof surfaces for testimonials, project highlights, brand familiarity, FAQ, and financing-warranty reassurance

### Data Ownership And CMS Needs

- Frontend owns the rendered pages, shared section composition, and route wiring
- API and Data planning owns the content model, slug rules, form field contract, and analytics event taxonomy
- Content stays in typed local data for phase 2 and must remain CMS-attachable later without route churn

### Integration Ownership

- Quote-form behavior, validation, and submission states are defined by the API and Data contract
- PII handling, anti-spam expectations, and third-party embed rules are defined by the Security plan
- Validation gates and pre-launch evidence are defined by the QA plan
- No backend runtime is required in this planning pass; any future provider attachment must preserve the same frontend route and form contract

## 6. Downstream Role Docs Required

- Frontend: required
- API and Data: required
- Security: required
- QA: required
- Backend: not required for current scope
- DevOps: not required for current scope
- Admin Dashboard: not required for current scope
- Supabase: not required for current scope

## 7. Validation Gates

- Static checks: lint, type safety, build, and zero VS Code Problems when the runtime exists
- Page-completeness checks: every route in the plan resolves to a real page with real CTA states
- Content checks: no placeholder commerce or SaaS residue, no fake social proof, and no missing legal links
- Runtime smoke checks: homepage, one service route, one suburb route, quote flow, and thank-you state
- Responsive checks: mobile call and quote actions must remain available across high-intent pages

## 8. Ordered Backlog

1. Bootstrap the actual Next.js runtime in `FRONTEND DEV/aircon-installer/`.
2. Implement the shared content and routing foundation defined by the API and Data contract.
3. Build global chrome and reusable conversion surfaces first.
4. Implement the homepage and services routes.
5. Implement suburb pages, proof routes, and trust-support routes.
6. Implement the quote flow and legal routes.
7. Run the QA validation plan and close all route, state, and content gaps.

## 9. Risks And Open Questions

- The project is planning-complete but execution-blocked until a real frontend runtime exists.
- Real business assets will still need substitution before production launch.
- If future scope introduces backend workflows or online booking complexity, new downstream role docs will be required before execution expands.
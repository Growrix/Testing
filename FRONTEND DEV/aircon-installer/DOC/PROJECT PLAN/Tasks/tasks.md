# Tasks

## Project Status
- Current status: canonical end-to-end planning complete for CoolPeak Aircon
- Frontend runtime root: `FRONTEND DEV/aircon-installer/` with starter attached; Next.js runtime implementation still pending
- Canonical planning artifact: `DOC/PROJECT PLAN/coolpeak-aircon-e2e-plan.md`
- Downstream role docs: Frontend, API and Data, Security, and QA planning docs created and active
- Local implementation status: not started

## Active Planning Artifacts
- `DOC/MASTER PLAN/Plan.md` - locked project brief for CoolPeak Aircon
- `DOC/PROJECT PLAN/coolpeak-aircon-e2e-plan.md` - canonical end-to-end plan for scope, ownership, backlog, and validation gates
- `DOC/PROJECT PLAN/Shared Contracts/coolpeak-aircon-shared-contracts.md` - cross-role source of truth for runtime boundary, route ownership, quote flow, and validation handoffs
- `DOC/PROJECT PLAN/Frontend/coolpeak-aircon-frontend-delivery-plan.md` - page-by-page frontend build plan and route acceptance criteria
- `DOC/PROJECT PLAN/API and Data/coolpeak-aircon-data-contract.md` - typed content, slug, form, and analytics contract
- `DOC/PROJECT PLAN/Security/coolpeak-aircon-security-plan.md` - frontend security and privacy rules for forms, scripts, and authenticity
- `DOC/PROJECT PLAN/QA/coolpeak-aircon-qa-validation-plan.md` - validation gates and route/state truthfulness checklist

## Next Steps
1. Bootstrap the actual Next.js frontend runtime inside `FRONTEND DEV/aircon-installer/`.
2. Execute the frontend build using the shared contracts, frontend delivery plan, and API and Data contract together.
3. Run the QA validation plan after implementation and close every route, CTA, and state gap before treating the frontend as complete.

## Blockers
- No frontend runtime has been implemented yet.
- Production-ready business assets are still pending, but they do not block the planning contract.
- Backend, DevOps, Admin Dashboard, and Supabase planning docs are intentionally absent because they are not required for the current frontend-only scope.
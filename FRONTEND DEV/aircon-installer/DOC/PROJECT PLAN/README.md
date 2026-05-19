# Project Plan Root

This folder is the canonical project-local documentation root created by the hybrid canonical starter package.

## What This Folder Does

- keeps future planning inside the project instead of chat-only memory
- provides a stable entrypoint for project-local agents
- records canonical planning artifacts before implementation expands

## Canonical AI Entry

Start with `DOC/PROJECT PLAN/ai-context.yaml`.

## Minimal Read Order

1. `DOC/PROJECT PLAN/ai-context.yaml`
2. `DOC/MASTER PLAN/Plan.md`
3. `DOC/PROJECT PLAN/Tasks/tasks.md`
4. `DOC/PROJECT PLAN/Shared Contracts/README.md`

## Planning Rule

- Every fresh, scale, or enhancement planning session must create or update a real markdown artifact under `DOC/PROJECT PLAN/` before the tracker is updated.
- The project-local planning agent must also create or update the affected downstream role docs before the tracker is treated as canonical.

## Active Artifact Set

- Canonical e2e plan: `DOC/PROJECT PLAN/coolpeak-aircon-e2e-plan.md`
- Frontend role doc: `DOC/PROJECT PLAN/Frontend/coolpeak-aircon-frontend-delivery-plan.md`
- API and Data role doc: `DOC/PROJECT PLAN/API and Data/coolpeak-aircon-data-contract.md`
- Security role doc: `DOC/PROJECT PLAN/Security/coolpeak-aircon-security-plan.md`
- QA role doc: `DOC/PROJECT PLAN/QA/coolpeak-aircon-qa-validation-plan.md`
- Shared contract doc: `DOC/PROJECT PLAN/Shared Contracts/coolpeak-aircon-shared-contracts.md`

## Current Planning Scope

- Fresh planning for a Brisbane-focused air conditioning installer marketing site.
- Frontend-only execution is in scope for the next phase.
- Backend, admin dashboard, Supabase, and deployment specialization remain out of scope unless the project expands.

## Role Docs

The starter package does not force every role doc to exist on day one.
Create the role folders and role-specific planning docs only when the scoped plan actually requires them.

Common role roots:
- `DOC/PROJECT PLAN/Frontend/`
- `DOC/PROJECT PLAN/Backend/`
- `DOC/PROJECT PLAN/API and Data/`
- `DOC/PROJECT PLAN/Security/`
- `DOC/PROJECT PLAN/DevOps/`
- `DOC/PROJECT PLAN/QA/`
- `DOC/PROJECT PLAN/Admin Dashboard/`
- `DOC/PROJECT PLAN/Supabase/`

## Tracker Rule

Use `DOC/PROJECT PLAN/Tasks/tasks.md` as the single execution tracker for phase status, blockers, and next steps.

Update the tracker only after the artifact set above is present and current.
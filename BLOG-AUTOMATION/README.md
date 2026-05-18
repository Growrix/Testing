# BLOG-AUTOMATION

This folder is the isolated workspace root for the blog automation system.

From this point forward, all blog-automation-specific assets should live here:
- agents
- planning documents
- implementation docs
- code
- infrastructure files
- tests
- runtime configs

Why this root exists:
- prevents cross-project file drift in the main workspace root
- keeps the blog system portable as a standalone VS Code workspace
- allows local `.github/agents/` discovery when this folder is opened as its own workspace root

Canonical planning document:
- `DOC/PLAN/BLOG-AUTOMATION-BLUEPRINT.md`

Current status:
- planning updated
- local agent system added
- milestone-1 workspace scaffold added

## Current Structure

- `.github/agents/`: local public agent surface
- `DOC/`: canonical planning, specs, checklists, runbooks, and ADRs
- `apps/automation-api/`: milestone-1 API scaffold
- `packages/`: milestone-1 domain packages
- `storage/`: schema and seed placeholders
- `infra/n8n/`: workflow manifest scaffold
- `tests/`: milestone-1 unit coverage scaffold

## Commands

- `npm install`
- `npm run typecheck`
- `npm run test`
- `npm run build`
- `npm run verify`
- `npm run dev:api`

## Delivery Classification

Current classification:

`scaffold_ready_implementation_pending`

This means the isolated root, local agent system, specs, checklist coverage, and initial milestone-1 code scaffold now exist, but the full production feature implementation is still pending.
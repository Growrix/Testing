# Agent Lanes

This root now exposes one shared frontend entrypoint and two separate frontend-building lanes that converge into the same later backend/deploy phases.

## Shared Frontend Entry
- `phase1-site-replication.agent.md` — general-purpose screenshot replication with data-driven architecture emphasis.
- `phase1.1-pixel-replicator.agent.md` — pixel-perfect focused replicator. Extracts exact design tokens first, builds section by section, and verifies each screenshot before calling done. Use this when visual accuracy is the primary goal.

Phase 1 and Phase 1.1 are alternative entrypoints. Use Phase 1.1 when you need the tightest possible visual match to the screenshots. Both feed into the same downstream frontend lanes and backend/deploy phases.

## Project Starter Package
Shared phase1 and DOC-system phase2 agents now bootstrap missing project-local continuation roots from:
- `.github/project-starters/hybrid-canonical-project-starter/`

Bootstrap script:
- `.github/project-starters/bootstrap-hybrid-canonical-project-starter.ps1`

This is the canonical DOC plus local-agent source for new website project roots.
Historical exports such as `DOC-System-Export-20260518-100741/` remain reference snapshots, not the starter source.

## [REPLI SYSTEM] Frontend Lane
These agents keep the current screenshot-first completion workflow:
- `phase2-frontend-planning.agent.md`
- `phase2-frontend-completion.agent.md`
- `phase3-frontend-polish.agent.md`

Use this lane when the site should stay rooted in what Phase 1 visibly replicated, and the remaining work is truthful route/state completion plus polish.

### [REPLI SYSTEM] Candidate Track
These candidate agents preserve the locked REPLI baseline while testing earlier deployability and a dedicated Next.js migration step:
- `phase2-frontend-planning-deployable-candidate.agent.md`
- `phase2-frontend-completion-deployable-candidate.agent.md`
- `phase2.5-nextjs-migration-candidate.agent.md`
- `phase2.6-nextjs-native-completion.agent.md`

Use this track when you want to test earlier Vercel plus subdomain deploy readiness before the shared phase-7 lane, or when you want to validate a separate Next.js migration pass without changing the locked REPLI agents.
Use `phase2.6-nextjs-native-completion.agent.md` when the site is already visually approved but still relies on legacy HTML-backed ownership inside a Next.js shell and you want a pure Next.js App Router product with exact visual parity.

## [DOC SYSTEM] Frontend Lane
These agents start from the same Phase 1 replica but let you reshape the site around your own authored plan:
- `phase2-doc-system-planning.agent.md`
- `phase2-doc-system-frontend-dev.agent.md`
- `phase2.1-doc-system-frontend-dev.agent.md`
- `phase2.2-doc-system-frontend-specialist.agent.md`
- `phase3-doc-system-polish.agent.md`

Use this lane when the screenshot provides the starting substrate, but your own plan should redefine route architecture, page composition, content direction, conversion flow, and shared UX surfaces.
Use `phase2.1-doc-system-frontend-dev.agent.md` when the authored plan needs a more specialist frontend execution pass: stronger visual direction, more distinctive layout composition, richer interaction and motion craft, and more intentional app-like mobile behavior while keeping the same DOC-system contract.
Use `phase2.2-doc-system-frontend-specialist.agent.md` when you want an independent frontend-specialist build pass inside a chosen `FRONTEND DEV` root: build the startup theme, shared sections, reusable blocks, and core components directly from the authored brief or plan without scanning unrelated reference-style folders or sibling frontend projects.

## Backend & Deploy Lane
These are additive agents for the imported backend/deploy workflow. They operate against the isolated bundle under `Backend & Deploy/` and do not replace either frontend lane:
- `phase4-foundation-planning.agent.md`
- `phase4-foundation-development.agent.md`
- `phase5-template-import-attach.agent.md`
- `phase6-post-import-continuation.agent.md`
- `phase7-template-deployment.agent.md`

Use this lane only after either frontend lane is already complete enough to be imported, attached, continued, and prepared for deployment.

## Meta Lane
These are system-building agents for the workflow itself:
- `system-builder.agent.md`
- `agent-builder-modes2.agent.md`

Use this lane when the work is about agent design, lane alignment, governance, supporting files, or system-level drift repair rather than product delivery.
Use `agent-builder-modes2.agent.md` when you want a specialist two-stage authoring workflow that first produces a blueprint and then emits one ready-to-use `agent.md` file.
Use `system-builder.agent.md` when the request changes the shared agent system itself: wrappers, canonical sources, specs, checklists, registries, or lane boundaries.
For large architecture blueprints, this lane now performs module-level readiness classification (`currently_supported`, `requires_extension`, `missing_knowledge`) before any downstream delivery handoff.
For non-SaaS local automation/tooling blueprints such as Node CLI generators, prompt-driven builders, local dashboards, or file-output systems, this lane must first decide whether the work belongs in a new isolated local system instead of the shared phase1-7/backend lanes.
When progress depends on user-supplied external accounts, keys, IDs, dashboards, or other off-repo assets, this lane must ask for them with Bangla acquisition instructions.

## Core Git Management
These are root-level Git governance assets for the workspace itself:
- `github-agent.agent.md`

Use this root agent when the work is about repo targeting, onboarding a new repo, commit or pull or push safety, factory-backup routing, or workspace Git registry updates.
The canonical support root for this agent lives under `.github/git-workspace-manager/`, and its human-facing owner brief is `.github/Github_Agent.md`.
This is a core root system for the Testing factory, not an isolated local subsystem.

## Generic SaaS Delivery Entry
This is the optional one-agent generalist entrypoint for SaaS project work:
- `senior-saas-developer.agent.md`

Use this root agent when you want one senior developer role that first audits the current project end-to-end, then plans, implements, refactors, debugs, validates, and documents the work across frontend and backend.
It does not replace the existing phase lanes, project wrappers, or backend/deploy continuation lane. It is a convenience entrypoint for users who want one generic senior builder while still respecting project docs, lane rules, quality gates, and local-only Git discipline.

## Project Wrapper Entries
These are root-selectable wrappers that delegate to project-local canonical agents:
- `growrixos-strict-executor.agent.md` -> `On Going DOCS/Growrixos/.github/agents/project-strict-executor.agent.md`

Use these wrappers when you need picker visibility from the root surface but want execution behavior to follow the local project agent contract.

## Safety Rules
- Keep Phase 1 unchanged as the shared frontend entrypoint.
- When shared phase1 or DOC-system phase2 initializes a project root, attach the hybrid canonical project starter package before continuing.
- Choose exactly one frontend-building lane after Phase 1: `[REPLI SYSTEM]` or `[DOC SYSTEM]`.
- Both frontend lanes must converge into the same later Phase 5, 6, and 7 process.
- Treat phase4-7 as an opt-in continuation lane.
- Use `github-agent.agent.md` for workspace Git operations instead of repurposing frontend or backend agents for repo management.
- Use `senior-saas-developer.agent.md` when you want one generic senior generalist for project delivery instead of manually selecting separate plan, execution, refactor, and debug roles.
- Use the meta lane for system structure work before editing delivery lanes directly.
- Use `agent-builder-modes2.agent.md` when the goal is to design an agent in Mode 1 and output one final `agent.md` in Mode 2 without changing shared governance.
- Keep backend/deploy artifacts under `Backend & Deploy/` unless the user explicitly asks to promote them into the main root.
- Do not mutate source frontend projects in place during phase5 import/attach work.
- Use project wrapper entries for project delivery roles; do not route project feature work through `github-agent.agent.md`.
- Do not route system-governance work or workspace Git-topology work through `senior-saas-developer.agent.md`.

## Convergence Contract
- `[REPLI SYSTEM]` and `[DOC SYSTEM]` are frontend-only alternatives.
- They must produce the same kind of frontend-complete outcome: a working Next.js project that can enter the existing backend/deploy continuation lane.
- Phase 5, Phase 6, and Phase 7 stay shared and unchanged.

## Selection Guide
- Choose `[REPLI SYSTEM]` when you want to keep the Phase 1 screenshot-derived site and finish the missing truth behind it.
- Choose the `[REPLI SYSTEM]` candidate track when you want to test earlier frontend-only Vercel plus subdomain deployment or a separate full Next.js migration step while preserving the locked REPLI baseline.
- Inside the `[REPLI SYSTEM]` candidate track, choose `phase2.6-nextjs-native-completion.agent.md` when the runtime already builds and looks correct but primary routes are still legacy HTML-backed and need final ownership migration into pure Next.js.
- Choose `[DOC SYSTEM]` when you want to use the Phase 1 replica only as a starting base, then rebuild the site around your own authored plan.
- Inside `[DOC SYSTEM]`, choose `phase2-doc-system-frontend-dev.agent.md` for the standard transformation pass and `phase2.1-doc-system-frontend-dev.agent.md` when the plan requires frontend-specialist execution quality beyond the standard Phase 2 agent.
- Inside `[DOC SYSTEM]`, choose `phase2.2-doc-system-frontend-specialist.agent.md` when you want a more independent startup-theme builder that stays locked to the target `FRONTEND DEV` root and does not go hunting through unrelated references.
- Choose `senior-saas-developer.agent.md` when you want one generic senior SaaS developer to audit the current project first and then decide planning versus execution without manually switching roles.
- Choose `agent-builder-modes2.agent.md` when you want a blueprint-first agent-authoring workflow that ends in one ready-to-use `agent.md` file.

Do not run both frontend lanes on the same site in the same pass.
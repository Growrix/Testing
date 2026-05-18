# Agent Lanes

This root now exposes one shared frontend entrypoint and two separate frontend-building lanes that converge into the same later backend/deploy phases.

## Shared Frontend Entry
- `phase1-site-replication.agent.md`

Phase 1 remains unchanged. It is the common screenshot-replication entrypoint for both frontend lanes below.

## [REPLI SYSTEM] Frontend Lane
These agents keep the current screenshot-first completion workflow:
- `phase2-frontend-planning.agent.md`
- `phase2-frontend-completion.agent.md`
- `phase3-frontend-polish.agent.md`

Use this lane when the site should stay rooted in what Phase 1 visibly replicated, and the remaining work is truthful route/state completion plus polish.

## [DOC SYSTEM] Frontend Lane
These agents start from the same Phase 1 replica but let you reshape the site around your own authored plan:
- `phase2-doc-system-planning.agent.md`
- `phase2-doc-system-frontend-dev.agent.md`
- `phase3-doc-system-polish.agent.md`

Use this lane when the screenshot provides the starting substrate, but your own plan should redefine route architecture, page composition, content direction, conversion flow, and shared UX surfaces.

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

Use this lane when the work is about agent design, lane alignment, governance, supporting files, or system-level drift repair rather than product delivery.
For large architecture blueprints, this lane now performs module-level readiness classification (`currently_supported`, `requires_extension`, `missing_knowledge`) before any downstream delivery handoff.
For non-SaaS local automation/tooling blueprints such as Node CLI generators, prompt-driven builders, local dashboards, or file-output systems, this lane must first decide whether the work belongs in a new isolated local system instead of the shared phase1-7/backend lanes.
When progress depends on user-supplied external accounts, keys, IDs, dashboards, or other off-repo assets, this lane must ask for them with Bangla acquisition instructions.

## Safety Rules
- Keep Phase 1 unchanged as the shared frontend entrypoint.
- Choose exactly one frontend-building lane after Phase 1: `[REPLI SYSTEM]` or `[DOC SYSTEM]`.
- Both frontend lanes must converge into the same later Phase 5, 6, and 7 process.
- Treat phase4-7 as an opt-in continuation lane.
- Use the meta lane for system structure work before editing delivery lanes directly.
- Keep backend/deploy artifacts under `Backend & Deploy/` unless the user explicitly asks to promote them into the main root.
- Do not mutate source frontend projects in place during phase5 import/attach work.

## Convergence Contract
- `[REPLI SYSTEM]` and `[DOC SYSTEM]` are frontend-only alternatives.
- They must produce the same kind of frontend-complete outcome: a working Next.js project that can enter the existing backend/deploy continuation lane.
- Phase 5, Phase 6, and Phase 7 stay shared and unchanged.

## Selection Guide
- Choose `[REPLI SYSTEM]` when you want to keep the Phase 1 screenshot-derived site and finish the missing truth behind it.
- Choose `[DOC SYSTEM]` when you want to use the Phase 1 replica only as a starting base, then rebuild the site around your own authored plan.

Do not run both frontend lanes on the same site in the same pass.
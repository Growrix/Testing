# Agent Anatomy Audit Report (Correction Pass)

## Request Alignment
You asked for a proper re-check because subphase points like **1.2, 1.3, 2.5, 2.6** were missed.  
This report corrects coverage by auditing all discoverable agent surfaces and reclassifying environment fit against:

- `/tmp/workspace/Growrix/Testing/GENERIC_AGENT_ROADMAP.md`

Model used for complexity synthesis: **GPT-5.5**.

---

## 1) What was missed previously (now corrected)

### Missed inventory surfaces
- Additional agent ecosystems exist beyond root `.github/agents`:
  - `/tmp/workspace/Growrix/Testing/DOC-System-Export-20260518-100741/.github/agents/*`
  - `/tmp/workspace/Growrix/Testing/Backend & Deploy/.github/agents/*`
  - `/tmp/workspace/Growrix/Testing/Replicator/.github/agents/*` (mirrors)
  - `/tmp/workspace/Growrix/Testing/Replicator/Backend & Deploy/.github/agents/*` (mirrors)

### Missed subphase/substep evidence
- In:
  - `/tmp/workspace/Growrix/Testing/DOC-System-Export-20260518-100741/.github/agents/DS_site_planner.agent.md`
- Observed numbered substeps:
  - `1.2`
  - `1.3`
  - `2.5`
- `2.6` was **not explicitly found** in searchable evidence during this pass.

### Missed agent naming variant
- A non-`.agent.md` agent file exists:
  - `/tmp/workspace/Growrix/Testing/DOC-System-Export-20260518-100741/.github/agents/Claude_Frontend_Agent.md`

---

## 2) Full Agent Surface Snapshot

### A. Root phase-chain (primary)
- `phase1-site-replication.agent.md`
- `phase2-frontend-planning.agent.md`
- `phase2-frontend-completion.agent.md`
- `phase3-frontend-polish.agent.md`
- `phase4-foundation-planning.agent.md`
- `phase4-foundation-development.agent.md`
- `phase5-template-import-attach.agent.md`
- `phase6-post-import-continuation.agent.md`
- `phase7-template-deployment.agent.md`

### B. Backend & Deploy canonical set
- `foundation_planner.agent.md`
- `foundation_developer.agent.md`
- `template_import_attacher.agent.md`
- `template_post_import_continuation.agent.md`
- `template_deployment_operator.agent.md`

### C. DOC-System extended/meta + legacy set
- `DS_site_planner.agent.md`
- `DS_Frontend_developer.agent.md`
- `system_architect.agent.md`
- `ongoing_execution_orchestrator.agent.md`
- `frontend_planner.agent.md`
- `frontend_developer.agent.md`
- `frontend_factory_planner.agent.md`
- `frontend_factory_developer.agent.md`
- `frontend_factory_hybrid_developer.agent.md`
- `backend_planner.agent.md`
- `backend_developer.agent.md`
- `foundation_planner.agent.md`
- `foundation_developer.agent.md`
- `template_import_attacher.agent.md`
- `template_post_import_continuation.agent.md`
- `template_deployment_operator.agent.md`
- `Claude_Frontend_Agent.md`

### D. Replicator surfaces
- Replicator contains mirrored copies of root and Backend & Deploy agent chains.

---

## 3) Complexity Audit vs VS Code + GitHub Copilot Baseline

Baseline criteria used (from `GENERIC_AGENT_ROADMAP.md`):
- contract clarity
- modular capability boundaries
- schema discipline
- context discipline
- precedence + tool governance
- validation gates + phased rollout

### Corrected Classification Table

| Agent group | Complexity | Copilot fit | Preferred environment | Action |
|---|---:|---:|---|---|
| Root phase1–7 chain | High | Medium-High | VS Code + GitHub Copilot | Keep, but enforce stricter contracts and scope caps |
| Backend & Deploy canonical 5 | Medium-High | High | VS Code + GitHub Copilot | Keep as core deploy lane |
| DOC meta orchestrators (`system_architect`, `ongoing_execution_orchestrator`) | Very High | Low | Cursor / LangChain / OpenClaw | Move out of Copilot primary lane |
| DOC DS pair (`DS_site_planner`, `DS_Frontend_developer`) | Very High | Low-Medium | Cursor / LangChain / OpenClaw | Move or heavily simplify |
| DOC legacy planner/developer/factory/backend set | Very High (overlap-heavy) | Low-Medium | Cursor / LangChain | Retire/merge/move to orchestration environments |
| `Claude_Frontend_Agent` track | High | Medium | Cursor (or optional specialist lane) | Keep as optional specialist, not default Copilot lane |
| Replicator mirrors | Low logic / High drift risk | N/A | N/A | Keep for export only; deduplicate governance |

---

## 4) Why these became too complex for Copilot-first workflow
- Multi-layer orchestration dependencies across planner/developer/polish/meta agents.
- Heavy route/state graph derivation requirements in phase-2 prompts.
- Dense constraint stack in `frontend-phase2.instructions.md`.
- Overlapping agent families (root + DOC-system + backend/deploy + replicator mirrors) causing policy drift.
- Mixed naming/format conventions (`.agent.md` and non-standard variants), increasing control-plane ambiguity.

---

## 5) Final Plan — What to keep where

### Keep for VS Code + GitHub Copilot (primary lane)
1. Root phase chain (`phase1`..`phase7`) as the visible user path.
2. Backend & Deploy canonical 5 agents.
3. Existing CI validation lane (`lint/test/build`) as hard completion gate.

### Keep for Cursor/LangChain/OpenClaw (orchestration lane)
1. DOC meta orchestrators:
   - `system_architect`
   - `ongoing_execution_orchestrator`
2. DS heavy planning/development pair:
   - `DS_site_planner`
   - `DS_Frontend_developer`
3. Legacy factory + multi-planner/developer stacks that need long-context decomposition.

### Optional specialist lane
- `Claude_Frontend_Agent` for screenshot-first or advanced visual continuation, not as default Copilot path.

---

## 6) Execution Plan to stabilize both environments
1. Declare one canonical Copilot chain (root phase1–7 + backend/deploy canonical).
2. Mark DOC meta/legacy stacks as orchestration-only in documentation.
3. Add explicit handoff artifact between environments (example: `phase2-output.json` with route/state/severity outputs).
4. Enforce phase exit contracts (inputs, outputs, validations, status) across Copilot lane.
5. Keep replicator copies export-only; do not treat mirrored files as additional live control planes.

---

## 7) Direct answer to your correction
- Yes, you were right: the earlier report missed broader agent surfaces and missed substep references like `1.2`, `1.3`, `2.5`.
- This corrected report now covers the extended agent ecosystem and adds an explicit environment split and stabilization plan.

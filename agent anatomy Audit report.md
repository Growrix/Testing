# Agent Anatomy Audit Report

## Scope and Method
- Repository analyzed: `/tmp/workspace/Growrix/Testing`
- Baseline compared against: `/tmp/workspace/Growrix/Testing/GENERIC_AGENT_ROADMAP.md`
- Model used for complexity assessment: **GPT-5.5**
- Evidence reviewed:
  - `.github/instructions/frontend-phase2.instructions.md`
  - `.github/prompts/phase2-frontend-planning.prompt.md`
  - `.github/prompts/phase2-frontend-completion.prompt.md`
  - `.github/prompts/phase3-frontend-polish.prompt.md`
  - `.github/workflows/backend-platform-ci.yml`
  - `.github/agents/*` file names

## Constraint Note
Detailed file-content inspection of `.github/agents/*.agent.md` was not available in this run, so those agents are classified using:
- available prompt files,
- instruction workload,
- and phase naming/orchestration patterns.

---

## Baseline (from GENERIC_AGENT_ROADMAP.md) used for suitability scoring
1. Clear agent contract and boundaries  
2. Modular capability model (avoid over-coupled orchestration)  
3. Standardized input/output schemas  
4. Context discipline (avoid runaway context windows)  
5. Instruction/tool precedence and governance  
6. Validation gates and phased rollout  

Agents/workflows with large cross-phase orchestration, heavy state-graph derivation, and broad simultaneous obligations are considered **higher complexity** for VS Code + GitHub Copilot workflows.

---

## Agent/Workflow Complexity Classification

| Item | Evidence Signal | Complexity | Environment Fit | Recommendation |
|---|---|---:|---|---|
| `phase1-site-replication.agent.md` | Phase name implies broad replication workflow and large visual-context iteration | High | Better for Cursor/LangChain/OpenClaw | Keep outside Copilot-primary path |
| `phase2-frontend-planning.agent.md` | Prompt requires route/state coverage matrix + severity-ranked audit backlog | High | Better for Cursor/LangChain/OpenClaw | Keep in orchestration environments |
| `phase2-frontend-completion.agent.md` | Prompt mandates planner -> completion -> polish chain + broad frontend truthfulness checks | High | Better for Cursor/LangChain/OpenClaw | Keep in orchestration environments |
| `phase3-frontend-polish.agent.md` | Prompt scope is bounded polish with checks | Medium | VS Code + Copilot (with simplification) | Keep, but tighten schema and scope caps |
| `phase4-foundation-planning.agent.md` | Planning phase, likely manageable if schema-driven | Medium | VS Code + Copilot (with simplification) | Keep with strict contracts |
| `phase4-foundation-development.agent.md` | Development phase potentially broad if unbounded | Medium-High | VS Code + Copilot (with simplification) | Split into smaller capability passes |
| `phase5-template-import-attach.agent.md` | Procedural integration phase | Medium | VS Code + Copilot (with simplification) | Keep with deterministic checklist |
| `phase6-post-import-continuation.agent.md` | Continuation/follow-up phase | Medium | VS Code + Copilot (with simplification) | Keep with strict handoff contract |
| `phase7-template-deployment.agent.md` | Deployment phase, operational risk but gateable | Medium | VS Code + Copilot (with simplification) | Keep with hard validation gates |
| `backend-platform-ci.yml` | Clear lint/test/build pipeline | Low | VS Code + Copilot | Keep as-is |

---

## Why Some Agents Become Too Complex for VS Code + GitHub Copilot
The strongest complexity drivers observed:
1. **Cross-phase coupling** (single flow depends on multiple agents and strict sequence).
2. **Large route/state derivation requirements** (audit matrices, downstream graph completion, exhaustive interaction/state coverage).
3. **Simultaneous quality constraints** (zero Problems + lint/build/type + runtime expectations).
4. **Instruction density** in phase-2 rules (many mandatory UI/flow branches in one pass).

These patterns align better with orchestration-first environments (Cursor/LangChain/OpenClaw) that are optimized for long-context decomposition and multi-step agent choreography.

---

## Comparison Against the Existing VS Code + Copilot Agentic Baseline

### Where current phase agents diverge from baseline
- **Contract clarity:** some phase tasks appear broad (“complete all implied flows”), risking ambiguous done criteria.
- **Capability modularity:** planner/completion/polish are coupled in prompts, increasing failure blast radius.
- **Schema discipline:** large narrative outputs are requested, but strict machine-checkable schemas are not explicit.
- **Context discipline:** exhaustive scope can exceed practical review and execution boundaries for single-agent turns.

### Where alignment already exists
- **Validation gates:** lint/build/type checks are explicitly emphasized.
- **Phased framing:** work is already split into phases (good foundation for stricter modularity).
- **Operational checks:** workflow CI in backend platform is simple and robust.

---

## Plan: What to Keep for VS Code + GitHub Copilot vs Other Environments

### A) Keep in VS Code + GitHub Copilot (primary lane)
1. `phase3-frontend-polish.agent.md` (after simplification)
2. `phase4-foundation-planning.agent.md` (schema-driven)
3. `phase4-foundation-development.agent.md` (split into small bounded tasks)
4. `phase5-template-import-attach.agent.md` (deterministic checklist)
5. `phase6-post-import-continuation.agent.md` (strict handoff I/O)
6. `phase7-template-deployment.agent.md` (gated deploy checklist)
7. `backend-platform-ci.yml` (keep unchanged)

### Required simplifications for Copilot lane
- Add strict input/output templates per phase (contract, assumptions, gates, status).
- Impose context and scope caps per run (bounded route set/state set).
- Break each phase into smaller capability tasks (audit-only, implement-only, verify-only).
- Enforce explicit exit criteria at each phase boundary.

### B) Keep for Cursor / LangChain / OpenClaw (orchestration lane)
1. `phase1-site-replication.agent.md`
2. `phase2-frontend-planning.agent.md`
3. `phase2-frontend-completion.agent.md`

### Why these stay there
- They require heavier orchestration, broader context windows, and multi-branch route/state reasoning.
- They are high-value but less predictable in a tightly bounded VS Code + Copilot task loop unless significantly re-authored.

---

## Practical Migration Sequence
1. Keep current phase1/phase2 in orchestration lane immediately.  
2. Re-author phase3–phase7 contracts to strict schemas and capped scopes for Copilot lane.  
3. Introduce handoff artifact between environments:  
   - `phase2-output.json` (route graph, state graph, severity backlog, ownership gaps).  
4. Make Copilot lane consume only validated handoff artifact, not raw exploratory context.  
5. Keep CI gates mandatory (`lint`, `test`, `build`) before phase completion.  

---

## Final Recommendation
- Treat **phase1 + phase2** as orchestration-heavy agents (better suited to Cursor/LangChain/OpenClaw).
- Treat **phase3 to phase7 + backend CI** as the VS Code + GitHub Copilot execution lane, but only after contract/schema hardening and scope decomposition.
- This split best matches the roadmap’s target principles: modular capability, predictable validation, and controlled context for high-accuracy delivery.

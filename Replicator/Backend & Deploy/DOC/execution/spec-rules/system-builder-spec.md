# System Builder Spec

## Purpose
Define the governed workflow for designing, auditing, extending, repairing, and aligning the agent system itself.

## Required Inputs
- A system-level request or drift report
- Optional large blueprint/spec artifact requiring module-level readiness audit
- Public wrapper surface under `.github/agents/`
- Canonical agent surface under `Backend & Deploy/.github/agents/` and `Backend & Deploy/DOC/agents/`
- Applicable registry docs, specs, and checklists

## Required Outputs
- Updated agent system artifacts at the correct public and canonical locations
- Supporting governance artifacts for any non-trivial system change
- Updated registry documentation for any public-surface change
- A blueprint readiness matrix listing `currently_supported`, `requires_extension`, and `missing_knowledge`
- Lane handoff mapping from blueprint modules to execution owners

## Change Classes
Each request or discovered issue must be classified as at least one of:
- `wrapper_gap`
- `canonical_gap`
- `governance_gap`
- `validation_gap`
- `mirror_drift`
- `handoff_drift`
- `knowledge_gap`

## Execution Rules
- Start by inventorying the existing public wrapper, canonical agent, governance, and registry surface.
- Reuse existing structures before creating new ones.
- For any non-trivial public agent change, update the wrapper, canonical source, support files, and registry docs together.
- Preserve active delivery lanes unless the user explicitly asks to redesign or replace them.
- Keep system artifacts generic and reusable; do not hardcode project-specific output behavior into them.
- When mirrored lanes exist under `Replicator/Backend & Deploy/`, keep them aligned in the same change set.
- Report unresolved structural drift explicitly; do not imply readiness.
- For blueprint requests, classify every major module into `currently_supported`, `requires_extension`, or `missing_knowledge` before approving downstream execution.
- Unknown tools, APIs, integrations, env vars, and operational dependencies must be reported as `knowledge_gap`/`missing_knowledge` rather than assumed.

## Validation
- The public wrapper must exist in `.github/agents/` with valid frontmatter and a meaningful description.
- The canonical agent must exist under both `Backend & Deploy/.github/agents/` and `Backend & Deploy/DOC/agents/`.
- Supporting governance files must exist for any non-trivial meta agent change.
- Public registry docs must list newly added or materially changed public agents.
- Mirror copies must be updated when the same lane is mirrored.
- Blueprint-module coverage and lane ownership must be explicit for all major modules in scope.

## Failure Modes
- `SYSTEM_REQUEST_MISSING`
- `SYSTEM_PUBLIC_WRAPPER_MISSING`
- `SYSTEM_CANONICAL_AGENT_MISSING`
- `SYSTEM_SUPPORTING_ARTIFACTS_MISSING`
- `SYSTEM_REGISTRY_DRIFT`
- `SYSTEM_MIRROR_DRIFT`
- `SYSTEM_VALIDATION_FAILED`
- `SYSTEM_BLUEPRINT_UNCOVERED`
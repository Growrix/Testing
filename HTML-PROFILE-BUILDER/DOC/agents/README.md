# HTML Profile Builder Canonical Agent Sources

This folder contains the canonical local sources for the isolated HTML Profile Builder system.

Public local wrappers live under:

`.github/agents/`

Canonical local sources:
- Phase 1: `html_profile_system_builder.agent.md`
- Phase 2: `html_profile_workflow_architect.agent.md`
- Phase 3: `html_profile_builder_developer.agent.md`
- Phase 4: `html_profile_validator.agent.md`

Execution order:
`Phase 1 System Builder` -> `Phase 2 Workflow Architect` -> `Phase 3 Builder Developer` -> `Phase 4 Validator`

Maintenance rules:
- keep public wrappers and canonical local sources aligned
- update specs and checklists with non-trivial local-agent changes
- keep all HTML Profile Builder assets inside the isolated root
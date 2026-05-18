# HTML Profile Builder

Isolated local system root for the HTML Business Profile Builder.

This root is intentionally separate from the shared website lanes, Foundation lane, and other local systems in the workspace.

## Canonical Documents
- Locked blueprint: `DOC/PLAN/HTML-PROFILE-BUILDER-BLUEPRINT.md`
- Local agent registry: `DOC/agents/README.md`
- Local system spec: `DOC/execution/spec-rules/local-agent-system-spec.md`
- Milestone-1 spec: `DOC/execution/spec-rules/milestone-1-execution-spec.md`
- Brief/output contract: `DOC/execution/spec-rules/brief-output-contract-spec.md`
- Readiness checklists: `DOC/validation/checklists/`

## Phase Lane
- Phase 1: `html-profile-system-builder.agent.md`
- Phase 2: `html-profile-workflow-architect.agent.md`
- Phase 3: `html-profile-builder-developer.agent.md`
- Phase 4: `html-profile-validator.agent.md`

Default order:
`Phase 1 System Builder` -> `Phase 2 Workflow Architect` -> `Phase 3 Builder Developer` -> `Phase 4 Validator`

## Isolation Rules
- Keep implementation assets inside `HTML-PROFILE-BUILDER/`.
- Do not place project-specific prompts, themes, briefs, outputs, or scripts in workspace-root systems.
- Treat `On Going DOCS/SAAS PLAN/html-profile-builder-blueprint.md` as the draft/source note, not the locked execution canon.

## Locked Milestone Outcome
Milestone 1 is a deterministic local builder that turns one normalized client brief into one validated HTML delivery bundle with traceable build artifacts.

## Runtime Model
Milestone 1 does not call an external AI API.

GitHub Copilot is used during development inside VS Code to help author and refine the builder, prompts, themes, and templates. The runtime itself is a local deterministic renderer inside this isolated root.

## Implemented Local Commands
```bash
npm install
npm run verify
node scripts/form-sync.js --input tests/fixtures/sample-cafe-raw.json --output briefs/ready/brew-and-bean.json
node scripts/build.js --brief briefs/ready/brew-and-bean.json
node scripts/approve-qa.js --result outputs/brew-and-bean/v1/build-result.json --by "QA Reviewer" --notes "Ready for delivery"
```
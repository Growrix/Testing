# Architecture overview

## Runtime flow

1. **Planner** (`src/orchestrator/planner.js`) creates tasks from request goals.
2. **Dispatcher** (`src/orchestrator/dispatcher.js`) routes each task to a matching specialist agent.
3. **Validator** (`src/orchestrator/validator.js`) applies task acceptance and QA/reliability gates.

## Agent model

- Contracts live in `src/agents/contracts.js`.
- Registry/fallback lookup in `src/agents/registry.js`.
- 12 specialist contracts are enforced by runtime check.

## Infrastructure brain

- Schema in `src/infrastructure-brain/schema.js`.
- Default rule registry in `src/infrastructure-brain/default-rule-registry.js`.

## QA and reliability

`src/qa/gates.js` provides:
- security gate
- load gate
- infra gate
- aggregated reliability result

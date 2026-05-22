# backend-platform (milestone-1)

Minimal Node.js runtime scaffold for an agent-system builder.

## Included deliverables

1. Orchestrator skeleton.
2. Specialist-agent contracts/interfaces for exactly 12 agents.
3. Infrastructure-brain schema + default rule registry.
4. Runtime pipeline: `plan -> agent dispatch -> validation`.
5. QA/reliability gates for security, load, and infra checks.
6. CI baseline with lint/test/build.
7. Docs and usage examples.

## Run locally

```bash
cd backend-platform
npm run lint
npm test
npm run build
npm start
```

## Usage example

```js
const { Orchestrator } = require("./src");

async function main() {
  const orchestrator = new Orchestrator({
    context: {
      runId: "example-run",
      qa: {
        security: { authContext: true, containsPlaintextSecrets: false },
        load: { throughputRps: 75, p95LatencyMs: 250 },
        infra: { healthchecksConfigured: true, backupPolicyDeclared: true }
      }
    }
  });

  const result = await orchestrator.execute({
    id: "example-request",
    goals: ["security hardening", "api baseline", "infra deploy prep"]
  });

  console.log(result.validation);
}

main();
```

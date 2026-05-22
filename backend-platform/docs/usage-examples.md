# Usage examples

## 1) Execute a request

```js
const { Orchestrator } = require("../src");

const orchestrator = new Orchestrator({
  context: {
    runId: "demo",
    qa: {
      security: { authContext: true, containsPlaintextSecrets: false },
      load: { throughputRps: 80, p95LatencyMs: 220 },
      infra: { healthchecksConfigured: true, backupPolicyDeclared: true }
    }
  }
});

orchestrator.execute({
  id: "req-100",
  goals: ["api onboarding", "security hardening", "infra deployment guardrails"]
});
```

## 2) Override infrastructure-brain rules

```js
const { Orchestrator, DEFAULT_RULE_REGISTRY } = require("../src");

const customRules = {
  ...DEFAULT_RULE_REGISTRY,
  version: "1.1.0"
};

const orchestrator = new Orchestrator({
  infrastructureBrain: customRules
});
```

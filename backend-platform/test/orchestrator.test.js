const test = require("node:test");
const assert = require("node:assert/strict");

const { Orchestrator } = require("../src/orchestrator/Orchestrator");
const { SPECIALIST_AGENT_CONTRACTS } = require("../src/agents/contracts");

test("has exactly 12 specialist-agent contracts", () => {
  assert.equal(SPECIALIST_AGENT_CONTRACTS.length, 12);
});

test("orchestrator executes plan -> dispatch -> validation pipeline", async () => {
  const orchestrator = new Orchestrator({
    context: {
      runId: "test-run",
      qa: {
        security: { authContext: true, containsPlaintextSecrets: false },
        load: { throughputRps: 100, p95LatencyMs: 190 },
        infra: { healthchecksConfigured: true, backupPolicyDeclared: true }
      }
    }
  });

  const result = await orchestrator.execute({
    id: "request-1",
    goals: ["security hardening", "api definition", "infra deploy readiness"]
  });

  assert.equal(result.plan.tasks.length, 3);
  assert.equal(result.dispatch.results.length, 3);
  assert.equal(result.validation.passed, true);
});

test("orchestrator fails validation when QA reliability gates fail", async () => {
  const orchestrator = new Orchestrator({
    context: {
      runId: "test-run-fail",
      qa: {
        security: { authContext: false, containsPlaintextSecrets: true },
        load: { throughputRps: 20, p95LatencyMs: 550 },
        infra: { healthchecksConfigured: false, backupPolicyDeclared: false }
      }
    }
  });

  const result = await orchestrator.execute({
    id: "request-2",
    goals: ["security hardening"]
  });

  assert.equal(result.validation.passed, false);
  assert.equal(result.validation.reliability.gates.length, 3);
});

const { Orchestrator } = require("./orchestrator/Orchestrator");
const { SPECIALIST_AGENT_CONTRACTS } = require("./agents/contracts");
const { INFRASTRUCTURE_BRAIN_SCHEMA } = require("./infrastructure-brain/schema");
const { DEFAULT_RULE_REGISTRY } = require("./infrastructure-brain/default-rule-registry");

module.exports = {
  Orchestrator,
  SPECIALIST_AGENT_CONTRACTS,
  INFRASTRUCTURE_BRAIN_SCHEMA,
  DEFAULT_RULE_REGISTRY
};

if (require.main === module) {
  const orchestrator = new Orchestrator({
    context: {
      runId: "cli-demo",
      qa: {
        security: { authContext: true, containsPlaintextSecrets: false },
        load: { throughputRps: 60, p95LatencyMs: 250 },
        infra: { healthchecksConfigured: true, backupPolicyDeclared: true }
      }
    }
  });

  orchestrator
    .execute({
      id: "demo-request",
      goals: ["security hardening", "api design baseline", "infra deploy checklist"]
    })
    .then((result) => {
      console.log(JSON.stringify(result.validation, null, 2));
    })
    .catch((error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
}

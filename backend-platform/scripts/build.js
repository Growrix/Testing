const { Orchestrator } = require("../src/orchestrator/Orchestrator");

async function runBuildCheck() {
  const orchestrator = new Orchestrator({
    context: {
      runId: "build-check",
      qa: {
        security: { authContext: true, containsPlaintextSecrets: false },
        load: { throughputRps: 55, p95LatencyMs: 280 },
        infra: { healthchecksConfigured: true, backupPolicyDeclared: true }
      }
    }
  });

  const result = await orchestrator.execute({
    id: "build-request",
    goals: ["api reliability", "security checks", "infra readiness"]
  });

  if (!result.validation.passed) {
    throw new Error("Build check failed: validation gates did not pass.");
  }

  console.log("Build check passed.");
}

runBuildCheck().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

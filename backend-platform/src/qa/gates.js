function runSecurityGate(input = {}) {
  const hasAuth = Boolean(input.authContext);
  const hasNoPlaintextSecrets = !input.containsPlaintextSecrets;

  return {
    gate: "security",
    passed: hasAuth && hasNoPlaintextSecrets,
    checks: {
      authContext: hasAuth,
      noPlaintextSecrets: hasNoPlaintextSecrets
    }
  };
}

function runLoadGate(input = {}) {
  const throughput = Number(input.throughputRps || 0);
  const p95LatencyMs = Number(input.p95LatencyMs || Number.MAX_SAFE_INTEGER);
  const pass = throughput >= 50 && p95LatencyMs <= 300;

  return {
    gate: "load",
    passed: pass,
    checks: {
      throughputRps: throughput,
      p95LatencyMs
    }
  };
}

function runInfraGate(input = {}) {
  const healthchecksConfigured = Boolean(input.healthchecksConfigured);
  const backupPolicyDeclared = Boolean(input.backupPolicyDeclared);

  return {
    gate: "infra",
    passed: healthchecksConfigured && backupPolicyDeclared,
    checks: {
      healthchecksConfigured,
      backupPolicyDeclared
    }
  };
}

function runReliabilityGates(context = {}) {
  const security = runSecurityGate(context.security);
  const load = runLoadGate(context.load);
  const infra = runInfraGate(context.infra);

  return {
    passed: security.passed && load.passed && infra.passed,
    gates: [security, load, infra]
  };
}

module.exports = {
  runSecurityGate,
  runLoadGate,
  runInfraGate,
  runReliabilityGates
};

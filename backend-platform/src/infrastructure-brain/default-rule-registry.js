const DEFAULT_RULE_REGISTRY = {
  version: "1.0.0",
  rules: [
    {
      id: "security-no-public-secrets",
      category: "security",
      severity: "critical",
      check: "No plaintext secrets in runtime config",
      enabled: true
    },
    {
      id: "security-auth-required",
      category: "security",
      severity: "high",
      check: "All protected operations require auth context",
      enabled: true
    },
    {
      id: "load-min-throughput",
      category: "load",
      severity: "high",
      check: "Minimum throughput threshold must be met",
      enabled: true
    },
    {
      id: "load-max-latency",
      category: "load",
      severity: "medium",
      check: "p95 latency must stay below threshold",
      enabled: true
    },
    {
      id: "infra-healthchecks-defined",
      category: "infra",
      severity: "high",
      check: "Health check endpoints and probes are configured",
      enabled: true
    },
    {
      id: "infra-backup-policy",
      category: "infra",
      severity: "medium",
      check: "Backup policy declared for critical state",
      enabled: true
    }
  ]
};

module.exports = {
  DEFAULT_RULE_REGISTRY
};

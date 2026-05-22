const INFRASTRUCTURE_BRAIN_SCHEMA = {
  $id: "backend-platform.infrastructure-brain",
  type: "object",
  required: ["version", "rules"],
  properties: {
    version: { type: "string" },
    rules: {
      type: "array",
      minItems: 1,
      items: {
        type: "object",
        required: ["id", "category", "severity", "check"],
        properties: {
          id: { type: "string" },
          category: { type: "string", enum: ["security", "load", "infra"] },
          severity: { type: "string", enum: ["low", "medium", "high", "critical"] },
          check: { type: "string" },
          enabled: { type: "boolean" }
        }
      }
    }
  }
};

function validateInfrastructureBrainSchema(payload) {
  if (!payload || typeof payload !== "object") return false;
  if (typeof payload.version !== "string") return false;
  if (!Array.isArray(payload.rules) || payload.rules.length === 0) return false;

  return payload.rules.every((rule) => {
    return (
      typeof rule.id === "string" &&
      ["security", "load", "infra"].includes(rule.category) &&
      ["low", "medium", "high", "critical"].includes(rule.severity) &&
      typeof rule.check === "string"
    );
  });
}

module.exports = {
  INFRASTRUCTURE_BRAIN_SCHEMA,
  validateInfrastructureBrainSchema
};

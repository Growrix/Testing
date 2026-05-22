/**
 * Contract shape used by specialist agents.
 * @typedef {Object} SpecialistAgentContract
 * @property {string} id
 * @property {string} role
 * @property {string} description
 * @property {string[]} handles
 * @property {(task: Object, context: Object) => Promise<Object>} execute
 */

const SPECIALIST_AGENT_CONTRACTS = [
  { id: "agent-strategy-planner", role: "strategy-planner", description: "Builds execution plans", handles: ["plan"] },
  { id: "agent-api-designer", role: "api-designer", description: "Designs API-focused tasks", handles: ["api"] },
  { id: "agent-data-architect", role: "data-architect", description: "Designs data/storage tasks", handles: ["data"] },
  { id: "agent-security-auditor", role: "security-auditor", description: "Assesses security posture", handles: ["security"] },
  { id: "agent-load-engineer", role: "load-engineer", description: "Assesses scale and capacity", handles: ["load"] },
  { id: "agent-infra-operator", role: "infra-operator", description: "Assesses infra and deployment controls", handles: ["infra"] },
  { id: "agent-devops-specialist", role: "devops-specialist", description: "Optimizes CI/CD behavior", handles: ["devops"] },
  { id: "agent-observability-analyst", role: "observability-analyst", description: "Improves telemetry", handles: ["observability"] },
  { id: "agent-qa-validator", role: "qa-validator", description: "Validates quality signals", handles: ["qa"] },
  { id: "agent-compliance-officer", role: "compliance-officer", description: "Checks regulatory alignment", handles: ["compliance"] },
  { id: "agent-runtime-tuner", role: "runtime-tuner", description: "Improves runtime behavior", handles: ["runtime"] },
  { id: "agent-release-manager", role: "release-manager", description: "Plans release readiness", handles: ["release"] }
];

if (SPECIALIST_AGENT_CONTRACTS.length !== 12) {
  throw new Error("Exactly 12 specialist-agent contracts are required.");
}

module.exports = {
  SPECIALIST_AGENT_CONTRACTS
};

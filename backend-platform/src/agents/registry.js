const { SPECIALIST_AGENT_CONTRACTS } = require("./contracts");

function createNoOpAgent(contract) {
  return {
    ...contract,
    async execute(task, context = {}) {
      return {
        agentId: contract.id,
        role: contract.role,
        taskId: task.id,
        accepted: true,
        notes: `Handled ${task.type} task`,
        contextTag: context.runId || "local-run"
      };
    }
  };
}

function createAgentRegistry() {
  const registry = new Map();

  for (const contract of SPECIALIST_AGENT_CONTRACTS) {
    registry.set(contract.id, createNoOpAgent(contract));
  }

  return registry;
}

function findAgentForTask(taskType, registry) {
  for (const agent of registry.values()) {
    if (agent.handles.includes(taskType)) {
      return agent;
    }
  }

  return registry.get("agent-strategy-planner");
}

module.exports = {
  createAgentRegistry,
  findAgentForTask
};

const { findAgentForTask } = require("../agents/registry");

async function dispatchPlan(plan, agentRegistry, context = {}) {
  const results = [];

  for (const task of plan.tasks) {
    const agent = findAgentForTask(task.type, agentRegistry);
    const outcome = await agent.execute(task, context);
    results.push({
      task,
      agentId: agent.id,
      outcome
    });
  }

  return {
    planId: plan.requestId,
    dispatchedAt: new Date().toISOString(),
    results
  };
}

module.exports = {
  dispatchPlan
};

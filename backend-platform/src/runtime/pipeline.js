const { createExecutionPlan } = require("../orchestrator/planner");
const { dispatchPlan } = require("../orchestrator/dispatcher");
const { validateExecution } = require("../orchestrator/validator");
const { createAgentRegistry } = require("../agents/registry");
const { DEFAULT_RULE_REGISTRY } = require("../infrastructure-brain/default-rule-registry");
const { validateInfrastructureBrainSchema } = require("../infrastructure-brain/schema");

async function runPipeline(request, options = {}) {
  const infrastructureBrain = options.infrastructureBrain || DEFAULT_RULE_REGISTRY;

  if (!validateInfrastructureBrainSchema(infrastructureBrain)) {
    throw new Error("Invalid infrastructure-brain registry.");
  }

  const agentRegistry = options.agentRegistry || createAgentRegistry();
  const context = options.context || { runId: "runtime-local" };

  const plan = createExecutionPlan(request, infrastructureBrain);
  const dispatch = await dispatchPlan(plan, agentRegistry, context);
  const validation = validateExecution(dispatch, context);

  return { plan, dispatch, validation };
}

module.exports = {
  runPipeline
};

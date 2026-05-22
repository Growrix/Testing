const { runReliabilityGates } = require("../qa/gates");

function validateExecution(dispatchResult, context = {}) {
  const failedTasks = dispatchResult.results.filter((result) => !result.outcome.accepted);
  const reliability = runReliabilityGates(context.qa || {});

  return {
    validatedAt: new Date().toISOString(),
    taskPass: failedTasks.length === 0,
    failedTasks,
    reliability,
    passed: failedTasks.length === 0 && reliability.passed
  };
}

module.exports = {
  validateExecution
};

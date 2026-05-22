function createExecutionPlan(request, infrastructureBrain) {
  const goals = Array.isArray(request.goals) ? request.goals : [];

  const tasks = goals.map((goal, index) => {
    const normalized = String(goal).toLowerCase();
    let type = "plan";

    if (normalized.includes("security")) type = "security";
    else if (normalized.includes("load") || normalized.includes("scale")) type = "load";
    else if (normalized.includes("infra") || normalized.includes("deploy")) type = "infra";
    else if (normalized.includes("api")) type = "api";
    else if (normalized.includes("database") || normalized.includes("data")) type = "data";

    return {
      id: `task-${index + 1}`,
      goal,
      type,
      ruleHints: infrastructureBrain.rules.filter((rule) => rule.category === type)
    };
  });

  return {
    requestId: request.id || "request-local",
    createdAt: new Date().toISOString(),
    tasks
  };
}

module.exports = {
  createExecutionPlan
};

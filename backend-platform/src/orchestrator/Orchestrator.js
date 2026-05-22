const { runPipeline } = require("../runtime/pipeline");

class Orchestrator {
  constructor(config = {}) {
    this.config = config;
  }

  async execute(request) {
    if (!request || !Array.isArray(request.goals) || request.goals.length === 0) {
      throw new Error("Request must include at least one goal.");
    }

    return runPipeline(request, this.config);
  }
}

module.exports = {
  Orchestrator
};

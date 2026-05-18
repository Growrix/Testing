# BLOG-AUTOMATION Agent Surface

This folder is reserved for blog-automation-specific agents.

All future agent prompts for this system must stay inside this isolated root rather than the workspace-level `.github/agents/` folder.

Intended local lanes:
- `blog-automation-system-builder`: system design, audit, folder governance, and capability alignment inside this root
- `blog-automation-backend-planner`: API, queue, storage, and integration planning
- `blog-automation-workflow-architect`: n8n workflows, scheduling, retries, and automation contracts
- `blog-automation-content-ops-planner`: editorial flow, prompt contracts, review gates, and SEO/content policy
- `blog-automation-validator`: quality gates, smoke paths, and release readiness

Constraint:
- Do not place blog-automation-specific agents in the workspace root unless the project is intentionally promoted to a shared system.
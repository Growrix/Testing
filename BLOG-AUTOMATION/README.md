# BLOG-AUTOMATION

This folder is the isolated workspace root for the blog automation system.

From this point forward, all blog-automation-specific assets should live here:
- agents
- planning documents
- implementation docs
- code
- infrastructure files
- tests
- runtime configs

Why this root exists:
- prevents cross-project file drift in the main workspace root
- keeps the blog system portable as a standalone VS Code workspace
- allows local `.github/agents/` discovery when this folder is opened as its own workspace root

Canonical planning document:
- `DOC/PLAN/BLOG-AUTOMATION-BLUEPRINT.md`

Current status:
- planning updated
- implementation not started in this root yet
- agent registry placeholder created for future project-specific lanes
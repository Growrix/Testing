# System Builder Readiness Checklist

Use this checklist before declaring a system-level change complete.

## Public Surface
- The public wrapper exists under `.github/agents/`.
- The wrapper frontmatter includes a meaningful `description` and user-invocable metadata when intended.
- The wrapper language describes system work, not project delivery work.

## Canonical Surface
- The canonical public agent exists under `Backend & Deploy/.github/agents/`.
- The canonical source mirror exists under `Backend & Deploy/DOC/agents/`.
- Canonical and mirrored intent stay aligned.

## Governance Support
- A non-trivial system change includes or updates its supporting spec/checklist artifacts.
- The spec defines purpose, inputs, outputs, execution rules, validation, and failure modes.
- The checklist covers wrapper, canonical, governance, registry, and mirror expectations.

## Blueprint Readiness
- For large blueprints, a module-level readiness matrix exists with `currently_supported`, `requires_extension`, and `missing_knowledge` buckets.
- Major blueprint modules have explicit lane ownership/handoff mapping.
- Unknown integrations, APIs, env vars, and tool dependencies are explicitly flagged instead of assumed.

## Registry and Discovery
- Root public agent documentation is updated when a public wrapper is added or materially changed.
- Canonical registry documentation is updated when the canonical public surface changes.
- The change does not create hidden discovery drift between public and canonical surfaces.

## Lane Safety
- Existing delivery lanes remain intact unless explicit redesign was requested.
- New meta/system language stays generic and reusable.
- Remaining unresolved gaps are documented explicitly.
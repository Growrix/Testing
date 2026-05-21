# REPLI Next.js Native Completion Spec

## Purpose
Define the governed completion pass for converting a screenshot-derived REPLI frontend from legacy HTML-backed ownership into a pure Next.js App Router frontend without changing the approved visual result.

## Required Inputs
- target project root under `FRONTEND DEV/<slug>/`
- current route ownership audit
- approved visual baseline from the pre-phase-2.6 runtime
- list of primary user-facing routes in scope

## Required Outputs
- primary route ownership moved into `src/app/**`, reusable components, and typed data modules
- shared shell ownership extracted from legacy-backed HTML rendering
- explicit classification of any remaining `legacy_html_backed`, `mixed`, or `blocked` routes
- parity validation evidence proving the post-migration site still matches the approved visual baseline

## Execution Rules
- Work in the same project root; do not create a second frontend runtime.
- Preserve the approved visual output exactly unless the user explicitly authorizes redesign.
- Migrate in this order: shared shell, homepage, repeated sections, high-traffic routes, then secondary routes.
- Do not declare completion while primary routes still depend on legacy HTML-backed ownership.
- `dangerouslySetInnerHTML` may be used only for routes still explicitly classified as `blocked` or `mixed`; it is forbidden as the final ownership model for completed primary routes.
- Remove HTML filename route conventions for completed primary routes when parity-safe.
- Keep the frontend buildable and deployable after each migration slice.

## Validation
- route ownership classification exists and is explicit
- shared shell ownership is migrated into reusable Next.js components
- completed primary routes are App Router owned
- lint/build pass with zero Problems
- visual parity remains intact for desktop and mobile breakpoints
- remaining legacy dependencies are explicitly documented rather than hidden

## Failure Modes
- `REPLI_NATIVE_BASELINE_MISSING`
- `REPLI_NATIVE_ROUTE_AUDIT_FAILED`
- `REPLI_NATIVE_VISUAL_PARITY_FAILED`
- `REPLI_NATIVE_VALIDATION_FAILED`
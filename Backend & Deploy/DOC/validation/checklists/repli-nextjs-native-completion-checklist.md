# REPLI Next.js Native Completion Checklist

- The public wrapper exists under `.github/agents/phase2.6-nextjs-native-completion.agent.md`.
- Canonical copies exist under `Backend & Deploy/.github/agents/` and `Backend & Deploy/DOC/agents/`.
- The candidate track README entries list the new phase-2.6 handoff clearly.
- The spec defines inputs, outputs, route-ownership rules, validation, and failure modes.
- The migration order is explicit: shared shell, homepage, repeated sections, high-traffic routes, then secondary routes.
- Visual parity is treated as a hard requirement, not a soft preference.
- Completed primary routes are not still owned by `src/legacy/**` or equivalent HTML-backed loaders.
- `dangerouslySetInnerHTML` is not the final ownership model for completed primary routes.
- Remaining `legacy_html_backed`, `mixed`, or `blocked` routes are documented explicitly.
- Lint/build/runtime checks and editor Problems are all clean before completion.
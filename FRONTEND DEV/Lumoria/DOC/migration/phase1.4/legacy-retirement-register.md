# Legacy Retirement Register

Date: 2026-05-24

## Retired
- Full-route remote-domain proxy rewrite removed
- External domain canonical and primary anchor links removed from served localhost HTML

## Still Active
- Route handlers serve HTML snapshot files from public/lumoria-pages
- Legacy source JS bundles remain active via localized assets
- jQuery-driven behavior remains intact from mirrored legacy scripts

## Required Retirement for Verified Native
1. Replace HTML snapshot serving with native App Router page components
2. Retire catch-all HTML renderer behavior
3. Replace legacy script-owned interaction paths with React state and event ownership
4. Keep only minimal third-party scripts that are non-primary to route ownership

## Status
- Phase 1.4 legacy retirement gate: FAIL

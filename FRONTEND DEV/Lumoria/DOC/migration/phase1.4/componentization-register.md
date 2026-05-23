# Componentization Register

Date: 2026-05-24

## Current State
- Shared native shell components: Not implemented
- Route ownership in src/app/**/page.tsx: Not implemented for primary Lumoria pages
- Current ownership method: route handlers serving local HTML snapshots

## Missing Native Ownership Work
- Build native App Router page ownership for each primary route
- Extract shared header, footer, hero, cards, blog listing, sidebar blocks into reusable components
- Replace duplicated page dump behavior with typed section data and reusable section components

## Priority Extraction Targets
1. Header and mega-navigation
2. Footer with multi-column links and newsletter area
3. Hero variants (homepage, inner page banner, blog detail)
4. Blog list and single post layout blocks
5. Career and services listing/detail cards
6. FAQ accordion and pricing table blocks

## Status
- Phase 1.4 componentization gate: FAIL

# Source Inventory

Date: 2026-05-24

## Inputs
- source_root: On Going DOCS/Reference Style/Lumoria
- existing_attempt_root: FRONTEND DEV/Lumoria
- output_root: FRONTEND DEV/Lumoria

## Source Assets
- 23 screenshot captures under On Going DOCS/Reference Style/Lumoria
- Existing attempt localizes source pages and assets under:
  - public/lumoria-pages
  - public/lumoria-assets

## Global Visual Tokens
- Extracted into design-tokens.css
- Primary palette includes #C69A59, #161616, #F5F4F2, #585858, #DFDEDC
- Typography: Jost and DM Sans

## Current Runtime Ownership
- App route handlers currently serve HTML snapshots from public/lumoria-pages
- Catch-all route handler: src/app/[...slug]/route.ts
- Snapshot loader: src/lib/snapshotResponse.ts

## Phase 1.4 Risk Summary
- Strong screenshot parity due snapshot mirroring
- Fails verified-native ownership because runtime still reads and serves HTML snapshots

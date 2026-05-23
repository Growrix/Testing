# Flow Contract Register

Date: 2026-05-24

## Audited Flows
- Contact form flow
- Newsletter/signup surfaces
- Search interactions
- Menu and dropdown interactions
- FAQ accordion interactions

## Current Runtime Behavior
- Behaviors are preserved from snapshot HTML + legacy scripts
- No native React state ownership exists for primary interaction graphs

## Contract Gaps
- No explicit frontend flow contracts for success/error/not-configured states
- No native validation and submit state model for forms
- No native state ownership for legacy jQuery-powered widgets

## Status
- Phase 1.4 flow contract gate: FAIL

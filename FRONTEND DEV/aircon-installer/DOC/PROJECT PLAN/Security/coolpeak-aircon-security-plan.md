# CoolPeak Aircon Security Plan

## Scope

- Frontend-only security and privacy planning for a local-service marketing site
- Lead capture protection, content authenticity, and third-party-script restraint

## Security Posture

- No authentication flows
- No payments
- No customer accounts
- Minimal exposed surface beyond static pages, forms, analytics hooks, and optional embeds

## Lead Capture Controls

- Collect only the minimum PII needed to contact the lead and scope the job
- Do not expose secret provider keys in client-side code
- Plan anti-spam protection before launch, such as provider-side filtering or challenge-response where justified
- Keep form error messages user-friendly without leaking internal provider details

## Privacy Requirements

- Privacy policy route is mandatory before launch
- Form copy must accurately describe callback or contact expectations
- Third-party embeds and analytics must be reviewed for privacy impact before enablement
- Avoid loading unnecessary trackers that do not directly support business measurement or user experience

## Content Authenticity Rules

- Do not publish fabricated ratings, invented review sources, or unsupported finance claims
- Manufacturer and licensing claims must reflect real business capability
- Images must represent real or honestly licensed trade imagery appropriate to aircon installation work

## Dependency And Script Rules

- Keep dependencies lean until the runtime exists and a need is proven
- Any third-party widget must justify its effect on performance, privacy, and content security policy
- Prefer server-safe or configuration-driven attachment points over hard-coded script fragments in page components

## Pre-Launch Security Checklist

- Confirm no secrets are committed to the frontend runtime
- Confirm legal pages exist and are linked
- Confirm form submission path handles failure safely
- Confirm analytics and embed decisions have been explicitly approved in the project docs
- Confirm no placeholder admin, auth, or payment endpoints are exposed
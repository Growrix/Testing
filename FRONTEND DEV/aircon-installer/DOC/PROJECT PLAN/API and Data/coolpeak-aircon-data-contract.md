# CoolPeak Aircon API And Data Contract

## Purpose

- Define the data model and provider-agnostic contracts needed for frontend execution
- Keep the site portable during phase 2 while preserving a clean later path to CMS or notification-provider attachment

## Data Ownership

- Frontend owns page composition and section rendering
- API and Data owns typed content structures, slug rules, form payload shape, and analytics event names
- Future provider attachments must preserve the same content schema and public route slugs unless the project is replanned

## Domain Entities

### Service

- Required fields: `title`, `slug`, `summary`, `heroHeadline`, `heroCopy`, `idealFor`, `inclusions`, `processSteps`, `faqIds`, `ctaVariant`, `relatedProjectIds`

### Suburb

- Required fields: `name`, `slug`, `summary`, `serviceIds`, `nearbyProjectIds`, `testimonialIds`, `faqIds`, `ctaVariant`, `metadataTitle`, `metadataDescription`

### Project

- Required fields: `title`, `slug`, `suburb`, `serviceId`, `propertyType`, `challenge`, `solution`, `outcome`, `imageSet`

### Testimonial

- Required fields: `customerType`, `suburb`, `serviceId`, `quote`, `displayName`, `sourceLabel`

### FAQ

- Required fields: `question`, `answer`, `routeScope`, `category`

### Manufacturer

- Required fields: `name`, `logoAsset`, `supportingCopy`

### CTA Variant

- Required fields: `headline`, `body`, `primaryLabel`, `primaryHref`, `secondaryLabel`, `secondaryHref`

## Slug And Route Rules

- Service slugs must match the route plan exactly
- Suburb slugs must be human-readable and stable
- Project slugs should remain internal-facing unless individual project detail pages are added later
- Route changes require a shared-contract update before execution proceeds

## Quote Form Contract

### Required Fields

- `name`
- `phone`
- `suburb`
- `serviceType`
- `propertyType`
- `preferredCallbackTiming`

### Optional Fields

- `email`
- `message`
- `existingSystem`

### Required Validation Behavior

- Client-side required-field validation before submit
- Clear inline error messaging
- Submission loading state
- Failure state with recovery action
- Success state that redirects or resolves to `/thank-you`

## Analytics Event Contract

- `call_click`
- `quote_form_start`
- `quote_form_submit`
- `quote_form_error`
- `service_cta_click`
- `suburb_cta_click`
- `contact_submit`

Event naming must stay stable across provider changes so reporting does not break when analytics tooling is attached later.

## Integration Boundaries

- Email, CRM, or webhook providers are attachments behind the form contract, not page-level assumptions
- Map embeds, review badges, and finance references are optional enhancements and must not block launch
- No provider should force the public route tree to change

## Data Readiness Gates

- Every planned route must have a mapped data source before build work starts
- Services and suburbs must be complete enough to prevent placeholder pages
- CTA variants and FAQs must be defined centrally rather than copied across page files
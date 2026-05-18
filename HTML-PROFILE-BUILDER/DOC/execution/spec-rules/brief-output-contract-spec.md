# Brief And Output Contract Spec

## Purpose
Define the exact input and output contracts for the HTML Profile Builder.

## Input Classes

### Raw Intake
- Source: copied Google Form export, Apps Script JSON payload, or manually prepared source JSON
- Location: `briefs/inbox/`
- Status: untrusted, not buildable directly

### Normalized Brief
- Source: output of `form-sync.js` or manual normalization
- Location: `briefs/ready/`
- Status: buildable

## Required Normalized Brief Fields
- `clientId`
- `revision`
- `businessName`
- `tagline`
- `businessType`
- `colorVibe`
- `deliveryTier`
- `contact.phone`
- `contact.whatsapp`
- `contact.email`
- `location.address`
- `location.googleMapsLink`
- `social.facebook`
- `social.instagram`
- `social.website`
- `services`
- `hours`
- `aboutText`
- `team`
- `assets.logoPath`
- `assets.gallery`
- `optionalSections`

## Optional Normalized Brief Fields
- `optionalSections.statusLabel`
- `optionalSections.ratingLabel`
- `optionalSections.proofStats`
- `optionalSections.portfolioLabels`
- `optionalSections.techStack`
- `optionalSections.processSteps`
- `optionalSections.deliveryInfo`
- `optionalSections.bookingLink`

## Required Output Bundle

### `profile.html`
- Full HTML document
- Must begin with `<!DOCTYPE html>`
- Must contain `meta name="description"`
- Must contain Open Graph title and description tags

### `build-result.json`
- `status`
- `delivery_class`
- `client_id`
- `revision`
- `theme_name`
- `business_type`
- `model`
- `required_sections_rendered`
- `omitted_sections`
- `validation_results`
- `build_started_at`
- `build_completed_at`

### `input-snapshot.json`
- Exact normalized brief used for the generation call

### `prompt-bundle.md`
- Combined system prompt
- Category prompt if used
- Theme snapshot
- Build instruction block

### `qa-report.md`
- Pre-filled checklist path
- manual approval fields
- blockers or revision notes

## Blocking Rules
- Missing required brief field: block
- Nonexistent theme mapping: block
- Model call failure: block
- HTML missing required structure: block
- Invented content detected: block

## Output Path Rules
- Output path format: `outputs/<clientId>/<revision>/`
- No flat writes directly under `outputs/`
- Every build must be revision-scoped
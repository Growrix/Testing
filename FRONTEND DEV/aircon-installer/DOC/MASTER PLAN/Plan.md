# Master Plan

Use this file as the human source of truth before canonical planning begins.

## Project Identity
- Project name: CoolPeak Aircon
- Project slug: aircon-installer
- Business type: Local residential-first air conditioning installer with light-commercial capability
- Primary audience: Brisbane homeowners, landlords, property managers, and small business operators needing installation, replacement, or scheduled servicing

## Goal
- Launch a conversion-first Next.js website that turns local aircon demand into phone calls and quote requests, with strong suburb SEO, clear trust proof, and a practical trade-business brand.

## Visual Inputs
- Screenshot set or reference path: Phase-1 replica pending; the phase-2 build should use a local-service trade-site structure rather than generic SaaS or commerce framing.
- Existing live site or competitor references: No single competitor is being copied; use proven Australian trade-site patterns for layout hierarchy, quote urgency, and service-area trust cues.
- Brand direction or visual constraints: Clean, cool-toned, contemporary trade brand; use real install imagery, technician photos, indoor wall-split and ducted-system scenes, and avoid luxury-minimal or corporate-tech styling.

## Required Surfaces
- Primary routes: home, services, split-system installation, ducted air conditioning, aircon replacement and upgrades, servicing and maintenance, commercial air conditioning, service areas, suburb detail pages, projects, reviews, about, financing and warranty, contact, request quote, thank-you, privacy policy, terms
- Core conversion flows: click-to-call, short quote request, service-detail to quote, suburb-page to quote, reviews or projects to quote, and sticky mobile actions across high-intent pages
- Required shared surfaces: responsive header, top trust bar, hero, service cards, testimonials, manufacturer strip, financing and warranty proof, FAQ, sticky mobile CTA, footer, and complete lead-form states

## Content And Operations
- CMS or content ownership needs: Typed frontend data collections for services, suburbs, testimonials, projects, FAQs, financing copy, manufacturer logos, and CTA variants; CMS can be attached later without route churn.
- Operator workflows: Update service areas, quote destinations, proof sections, promotions, phone number, trading hours, and featured projects with minimal code changes.
- Admin or dashboard needs: No admin dashboard in phase 2; content should remain frontend-managed and attach-friendly.

## Integrations And Data
- Payments: No online payments at launch.
- Forms and notifications: Provider-agnostic quote form with email notification assumption and structured fields for service type, suburb, property type, and preferred timing.
- Auth: None.
- Analytics: Plan for CTA and form-submit event hooks; implementation can attach GA4 or a privacy-first analytics tool later.
- Other third-party services: Optional map embed, review badge widgets, and financing partner references; no hard dependency in phase 2.

## Constraints
- Deployment constraints: Preserve a portable Next.js frontend with no backend or vendor lock-in assumptions.
- Timeline or priority constraints: Core revenue routes and quote conversion come first; blog, calculators, and advanced interactive tooling are intentionally deferred.
- Explicit non-goals: Ecommerce catalogue, customer login, long-form editorial blog as a launch dependency, complex BTU calculators, or emergency-dispatch workflow software.
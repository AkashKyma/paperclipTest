# Implementation Notes

## Ticket

- AZI-2
- Project: Cloude Skill platform

## Architecture summary

This deliverable is implemented as a single-page Next.js application using the App Router.

### Composition

- `app/page.tsx`
  - assembles the landing page sections in order
- `src/catalog.ts`
  - stores the structured content for suites, overlays, pricing tiers, and appendix links
- `components/Hero.tsx`
  - presents headline positioning and top-level counts
- `components/SuiteGrid.tsx`
  - renders department suite cards
- `components/OverlayTable.tsx`
  - renders industry overlays in tabular form
- `components/PricingCards.tsx`
  - renders subscription packaging cards
- `components/AppendixLinks.tsx`
  - renders the URL appendix

## Content model

The page is driven by typed static data collections:

- `DepartmentSuite`
- `IndustryOverlay`
- `SubscriptionTier`
- `urlAppendix`

This keeps presentation components simple and makes future content edits straightforward without changing layout logic.

## Release readiness notes

- App metadata is defined in `app/layout.tsx`.
- Current appendix URLs are placeholders and should be replaced if this page is published externally.
- No runtime API integration or environment configuration is required.
- The implemented scope appears aligned to a buyer-facing catalog snapshot rather than a transactional product flow.

## Handoff

This repo is ready for automated PR preparation from the documentation side.
Testing/build validation should rely on the existing implementation and prior Pedant verification artifacts.

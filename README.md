# Cloude Skill Platform

A Next.js app for presenting an expanded enterprise Claude Skills catalog with:

- department suites
- industry overlay suites
- subscription packaging
- skill credit positioning
- a URL appendix for related catalog resources

This implementation was built for ticket **AZI-2** and packages the catalog into a single, readable landing page.

## What was built

The app renders a structured catalog experience with these sections:

1. **Hero summary**
   - highlights the Expanded v2 research snapshot
   - shows counts for department suites, industry overlays, and subscription tiers
2. **Department suites**
   - Revenue Operations
   - People & Talent
   - Finance & Strategy
   - Support Excellence
3. **Industry overlays**
   - Healthcare & Life Sciences
   - Financial Services
   - Manufacturing & Industrial
   - Public Sector & Education
4. **Subscription packaging**
   - Foundation
   - Expansion
   - Enterprise Grid
5. **Complete URL appendix**
   - placeholder reference links for the catalog narrative

## Tech stack

- Next.js 14
- React 18
- TypeScript

## Setup

Install dependencies:

```bash
npm install
```

## Run locally

Start the development server:

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Production build

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

## Project structure

```text
app/
  layout.tsx
  page.tsx
components/
  AppendixLinks.tsx
  Hero.tsx
  OverlayTable.tsx
  PricingCards.tsx
  SuiteGrid.tsx
src/
  catalog.ts
```

## Notes for release

- The page is currently driven by static catalog data in `src/catalog.ts`.
- External appendix links use placeholder `example.com` URLs and can be replaced during content publishing.
- No environment variables are required for the current implementation.

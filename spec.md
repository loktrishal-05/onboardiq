# OnboardIQ — Employee Onboarding Dashboard

## Current State
Scaffolded Caffeine project with React + Vite + Tailwind CSS frontend. Backend is a stub actor. A `server.js` Node/Express backend exists at the workspace root providing `POST /api/generate-plan` which calls Gemini to generate a structured 30-60-90 day onboarding plan and returns `{ day_in_journey, top_tasks, nudges, full_plan }`.

## Requested Changes (Diff)

### Add
- `/dashboard` page (new route in App.tsx) as the primary view
- `Dashboard.tsx` component with full onboarding UI
- `TaskCard` sub-component: title, description, due date, checkbox toggle
- `ProgressRing` sub-component: animated SVG circular progress indicator
- `NudgeBanner` sub-component: gold/yellow alert banners for smart nudges
- `Timeline` sub-component: vertical timeline grouped by Day 0–7, Week 2–4, Day 30–60, Day 60–90
- Seed/mock data fallback so the UI renders without a live backend

### Modify
- `App.tsx`: add route for `/dashboard`, default redirect to `/dashboard`
- `index.css`: add dark theme CSS variables matching the design system (#0A0F1E bg, #2563EB primary, #C9A84C gold)
- `tailwind.config.js`: extend with brand color tokens (navy, blue, gold)

### Remove
- Nothing removed

## Implementation Plan
1. Update `index.css` with dark theme tokens and body background
2. Extend `tailwind.config.js` with `navy`, `brand-blue`, `gold` color tokens
3. Create `src/components/dashboard/TaskCard.tsx`
4. Create `src/components/dashboard/ProgressRing.tsx` (animated SVG ring)
5. Create `src/components/dashboard/NudgeBanner.tsx`
6. Create `src/components/dashboard/Timeline.tsx`
7. Create `src/pages/Dashboard.tsx` — fetches from `POST /api/generate-plan` with mock fallback, composes all sub-components
8. Update `App.tsx` to add `/dashboard` route and redirect root to it

---
name: qa_audit
description: QA audit for Next.js/TypeScript strict mode — check for any types, unhandled async errors, missing Suspense boundaries, broken Supabase queries, accessibility on dark backgrounds, and Lighthouse performance.
---

# QA Audit

## When to Use

At the end of every phase, after the Engineer completes coding.

## Audit Checklist

### TypeScript Strict Compliance

- [ ] Zero `any` types — search for `: any` and `as any` across all `.ts`/`.tsx` files
- [ ] No `@ts-ignore` or `@ts-expect-error` without justification
- [ ] All function parameters and return types explicitly typed
- [ ] `noUncheckedIndexedAccess` enabled and handled (all array/object accesses guarded)

### Next.js Best Practices

- [ ] Server vs Client components correctly separated (`'use client'` only where needed)
- [ ] No data fetching in Client Components that should be Server Components
- [ ] `Suspense` boundaries around async Server Components
- [ ] `loading.tsx` files for route-level loading states
- [ ] `error.tsx` files for route-level error boundaries
- [ ] Proper `metadata` exports for SEO on every page
- [ ] `next/image` used for all images with proper `alt`, `width`, `height`

### Recharts Override Completeness

- [ ] No default Recharts colours visible (the telltale blue/green/red)
- [ ] All axes, grids, tooltips, dots use constellation theme values
- [ ] Chart background is transparent (not white or grey)
- [ ] PB dots use gold colour with glow filter
- [ ] Tooltip styled with dark background matching design tokens

### Accessibility (WCAG AA on #0a0a0f)

- [ ] Text contrast ratio ≥ 4.5:1 against `#0a0a0f`
  - `#f8f8f8` on `#0a0a0f` = 18.3:1 ✅
  - `#a0a0b0` on `#0a0a0f` = 6.8:1 ✅
  - `#606070` on `#0a0a0f` = 3.2:1 ⚠️ (use only for decorative/non-essential text)
- [ ] All interactive elements have visible focus indicators
- [ ] All images have descriptive `alt` text
- [ ] All form inputs have associated labels
- [ ] Charts have an alternative table view for screen readers
- [ ] ARIA landmarks: `<nav>`, `<main>`, `<footer>` properly used

### Performance

- [ ] Lighthouse Performance score > 90
- [ ] Lighthouse Accessibility score > 90
- [ ] No layout shifts (CLS < 0.1)
- [ ] First Contentful Paint < 1.5s
- [ ] No unused CSS/JS bundles

### Security (Phase 3+)

- [ ] `.env.local` is in `.gitignore`
- [ ] No secrets in client-side code (check `NEXT_PUBLIC_` prefix usage)
- [ ] Supabase RLS policies active on all tables
- [ ] No direct database writes from client — all through Server Actions

### Dependency Health

- [ ] `pnpm audit` shows no high/critical vulnerabilities
- [ ] All dependencies are on recent stable versions
- [ ] `pnpm build` completes with zero warnings
- [ ] `pnpm lint` passes with zero errors

## Fixing Protocol

1. Run `pnpm build` and fix all TypeScript/build errors
2. Run `pnpm lint` and fix all ESLint errors
3. Visually inspect every page in the browser at 3 breakpoints (mobile, tablet, desktop)
4. Check the browser console for runtime errors
5. Overwrite any flawed files in `app_build/` with corrected versions
6. Re-run build to confirm all fixes

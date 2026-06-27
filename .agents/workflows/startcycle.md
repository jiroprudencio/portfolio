---
description: Start the Autonomous AI Developer Pipeline for the Portfolio + Athletics Dashboard project
---

When the user types `/startcycle`, orchestrate the full project build using `.agents/agents.md` roles and `.agents/skills/`.

### Phase-Aware Execution

Unlike a linear pipeline, this workflow operates in **4 phases**. Each phase follows the same internal cycle: **Spec → Build → QA → Run**.

---

### Phase 1 — Static Frontend (Days 1–3)

1. **@pm**: Define component specs for all portfolio sections and the athletics dashboard. Save to `production_artifacts/Phase1_Spec.md`. *(Wait for user approval.)*
2. **@engineer**: Execute skills in order:
   - `nextjs_scaffold` — initialise project in `app_build/`
   - `design_system` — set up constellation tokens, starfield, typography
   - `data_pipeline` (Phase 1 section) — create TypeScript interfaces and hardcoded data files
   - `athletics_dashboard` — build constellation chart components
   - Build all portfolio page sections (hero, about, experience, education, projects, skills)
3. **@qa**: Execute `qa_audit` skill against `app_build/`
4. **@devops**: Run `pnpm dev` in `app_build/` and provide localhost URL

**Git checkpoint**: `git init`, first commit, push to GitHub with README

---

### Phase 2 — API Routes (Days 4–6)

1. **@pm**: Define API route specs (endpoints, request/response shapes). Save to `production_artifacts/Phase2_Spec.md`. *(Wait for approval.)*
2. **@engineer**: Create Next.js API routes + Server Actions. Refactor frontend to fetch from API instead of importing hardcoded data.
3. **@qa**: Execute `qa_audit` — verify SSR/CSR split, Suspense boundaries, loading states
4. **@devops**: Run `pnpm dev` and verify API responses

**Git checkpoint**: Feature branches per API route, Conventional Commits

---

### Phase 3 — Supabase Database (Days 7–9)

1. **@pm**: Define database schema and migration plan. Save to `production_artifacts/Phase3_Spec.md`. *(Wait for approval.)*
2. **@engineer**: Execute skills:
   - `supabase_integration` — set up Supabase project, client, env vars
   - `data_pipeline` (Phase 3 section) — migration SQL, seed script
   - Refactor API routes to query Supabase instead of hardcoded data
3. **@qa**: Execute `qa_audit` — verify RLS policies, env var security, query correctness
4. **@devops**: Verify Supabase connection, run seeds, test locally

**Git checkpoint**: `.env.local` / `.env.example` pattern, branch per feature

---

### Phase 4 — Deployment & Polish (Day 10)

1. **@pm**: Final review of all pages and features. Create deployment checklist in `production_artifacts/Phase4_Checklist.md`.
2. **@engineer**: Final polish — meta tags, OG images, README, responsive fixes
3. **@qa**: Full `qa_audit` — Lighthouse scores, accessibility, security
4. **@devops**: Execute skills:
   - `deploy_vercel` — deploy to Vercel with env vars
   - `git_workflow` — tag `v1.0.0`, set up GitHub Actions

**Git checkpoint**: Tag `v1.0.0` release, finalise public README
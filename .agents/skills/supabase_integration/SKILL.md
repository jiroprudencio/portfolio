---
name: supabase_integration
description: Set up Supabase PostgreSQL — project creation, environment variables, TypeScript client, RLS policies, and Next.js API routes / Server Actions for data fetching.
---

# Supabase Integration

## When to Use

Phase 3 (Days 7–9) — when replacing hardcoded TypeScript data with a live database.

## Instructions

### 1. Supabase Project Setup

- Create a free Supabase project at https://supabase.com
- Note the project URL and anon key
- No credit card required

### 2. Environment Variables

Create `app_build/.env.local` (gitignored):
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Create `app_build/.env.example` (committed):
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

### 3. Supabase Client

Install and configure:
```bash
pnpm add @supabase/supabase-js
```

Create `src/lib/supabase.ts`:
```typescript
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
```

### 4. Database Schema

Run the migration SQL from the `data_pipeline` skill. Use Supabase Dashboard SQL editor or Supabase CLI.

### 5. Type Generation

Generate TypeScript types from the database:
```bash
pnpm dlx supabase gen types typescript --project-id your-project-id > src/types/database.ts
```

### 6. Row Level Security (RLS)

Since this is a public portfolio (read-only), enable RLS with a permissive read policy:
```sql
ALTER TABLE performances ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON performances FOR SELECT USING (true);
-- Repeat for all tables
```

### 7. API Routes & Server Actions

Replace hardcoded data imports with Supabase queries:

- `src/app/api/performances/route.ts` — GET all performances with discipline joins
- `src/app/api/personal-bests/route.ts` — GET personal bests per discipline
- Server Actions in `src/actions/` for any write operations (future admin panel)

### 8. Refactor Frontend

Update all components to fetch from API routes instead of importing from `src/data/`. Use:
- `fetch()` in Server Components
- SWR or React Query in Client Components (charts)
- Proper loading states with `Suspense` boundaries

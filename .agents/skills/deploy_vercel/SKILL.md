---
name: deploy_vercel
description: Deploy the Next.js portfolio to Vercel with Supabase environment variables, build settings, custom domain, and GitHub integration for auto-deploy on push to main.
---

# Deploy to Vercel

## When to Use

Phase 4 (Day 10) — final deployment and production configuration.

## Pre-requisites

- Vercel account (free, no credit card)
- GitHub repo connected
- Supabase project running with env vars ready

## Instructions

### 1. Install Vercel CLI

```bash
pnpm add -g vercel
```

### 2. Link Project

```bash
cd app_build
vercel link
```

Select or create a new Vercel project.

### 3. Set Environment Variables

```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
```

Or set via Vercel Dashboard → Project Settings → Environment Variables.

### 4. Deploy

```bash
vercel --prod
```

### 5. Build Settings

Verify in Vercel Dashboard:
- **Framework Preset**: Next.js
- **Build Command**: `pnpm build`
- **Output Directory**: `.next`
- **Install Command**: `pnpm install`
- **Root Directory**: `app_build` (if monorepo)

### 6. GitHub Integration

- Connect the GitHub repo in Vercel Dashboard
- Enable auto-deploy on push to `main`
- Preview deployments on PR branches

### 7. Custom Domain (Optional)

- Add domain in Vercel Dashboard → Domains
- Update DNS records as instructed

### 8. Post-Deploy Verification

- [ ] All pages load without errors
- [ ] Athletics charts render correctly
- [ ] Supabase data loads (Phase 3+)
- [ ] Mobile responsive
- [ ] Lighthouse score > 90
- [ ] Meta tags and OG images present

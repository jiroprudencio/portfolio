---
name: git_workflow
description: Git operations for this project — conventional commits, feature branching, PR workflow, .gitignore, .env patterns, merge conflict resolution, tagging, and GitHub Actions for Vercel deployment.
---

# Git Workflow

## When to Use

Every phase — Git checkpoints are woven into every day of the build.

## Conventions

### Commit Messages — Conventional Commits

```
feat: add constellation chart component
fix: correct Y-axis inversion on sprint timeline
chore: update dependencies
docs: add README athletics dashboard section
refactor: extract chart theme to shared module
style: adjust starfield animation timing
```

### Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production — always deployable |
| `feat/<name>` | New features (e.g., `feat/navbar`, `feat/athletics-dashboard`) |
| `fix/<name>` | Bug fixes |
| `chore/<name>` | Maintenance tasks |

### Feature Branch Workflow

```bash
git checkout -b feat/feature-name
# ... make changes ...
git add .
git commit -m "feat: description"
git push -u origin feat/feature-name
# Create PR on GitHub, merge to main
git checkout main
git pull
git branch -d feat/feature-name
```

## .gitignore Template

```gitignore
# Dependencies
node_modules/
.pnpm-store/

# Environment
.env
.env.local
.env.*.local

# Next.js
.next/
out/

# Build
dist/
build/

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Vercel
.vercel/

# Supabase
supabase/.temp/
```

## Environment Variable Pattern

- `.env.local` — real secrets, NEVER committed
- `.env.example` — template with empty values, committed
- Document all required env vars in README

## Phase-Specific Git Milestones

| Phase | Git Milestone |
|-------|--------------|
| 1 | Init repo, first commit, README, `feat/navbar` branch + PR |
| 2 | `.gitignore` for env files, Conventional Commits enforced |
| 3 | `.env` vs `.env.example` pattern, branch per feature |
| 4 | Tag `v1.0.0`, GitHub Actions for Vercel auto-deploy |

## GitHub Actions — Vercel Deployment

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - run: pnpm install --frozen-lockfile
      - run: pnpm build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

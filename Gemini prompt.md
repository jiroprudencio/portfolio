## OUTPUT REQUIREMENT — READ BEFORE EVERYTHING ELSE

You will produce one single, complete Markdown document. Do not truncate, summarise,
or abbreviate any section. Do not write placeholder text such as "add content here"
or "see above." If you cannot complete a section in full, say so explicitly at the
top of your response before producing the document — do not silently omit sections.
Every code block must be copy-paste ready with no values left for the user to fill in
without an immediately preceding step telling them exactly what value to use.

---

## ROLE

You are a senior full-stack web developer and technical educator. You specialise in
helping people with data science backgrounds transition into modern web development.
You are precise, never skip steps, and explain every concept at first use.

---

## STUDENT PROFILE

- Data scientist fluent in Python, SQL, pandas, NumPy, scikit-learn, NLP, GenAI
- Had web development experience before 2024; on a 2-year hiatus — needs steps
  shown explicitly, not a complete beginner
- Zero experience with Git and GitHub — treat as a brand new tool
- Competitive sprinter based in Singapore, competing since 2016 in 100m, 200m,
  400m, 4x100m relay, and 4x400m relay
- Resume is attached to this conversation as a PDF — read it; use it as the sole
  source of truth for all portfolio content (name, experience, education, skills,
  achievements)
- World Athletics profile: https://worldathletics.org/athletes/singapore/jiro-prudencio-15088255
  — fetch this page now and use it to populate all athletics performance seed data
- Available time: 6–8 hours per day for 10 days

---

## PROJECT

A full-stack personal portfolio website with an athletics performance dashboard.
Serves four purposes:

1. Professional portfolio — experience, education, projects, skills
2. Athletics dashboard — World Athletics-style sprint progression tracker (2016–present)
3. Full-stack showcase — demonstrates frontend, backend, database, and deployment skills
4. First GitHub repository — the student's complete introduction to version control

### Build Phases — follow this sequence exactly

| Phase | Days | What is built                                             |
| ----- | ---- | --------------------------------------------------------- |
| 1     | 1–3  | Static frontend, all data hardcoded as TypeScript files   |
| 2     | 4–6  | Next.js API routes serving the same data from the backend |
| 3     | 7–9  | Supabase PostgreSQL database replacing all hardcoded data |
| 4     | 10   | Deployment, polish, GitHub repo presentation              |

---

## TECH STACK — FINAL, DO NOT MODIFY OR SUGGEST ALTERNATIVES

| Layer           | Technology                          | Version         |
| --------------- | ----------------------------------- | --------------- |
| IDE             | Google Antigravity IDE              | latest          |
| Framework       | Next.js                             | 16.2.9          |
| Language        | TypeScript                          | strict mode     |
| Styling         | Tailwind CSS                        | v4.3            |
| Components      | shadcn/ui                           | latest          |
| Animations      | Framer Motion                       | latest          |
| Charts          | Recharts                            | latest          |
| Backend         | Next.js API Routes + Server Actions | —               |
| Database        | Supabase (PostgreSQL)               | free tier       |
| Deployment      | Vercel                              | free hobby tier |
| Version Control | Git + GitHub                        | —               |
| Package Manager | pnpm                                | latest          |

### Google Antigravity IDE — include this setup section on Day 1

- Download from `antigravity.google/download` — specifically "Antigravity IDE",
  NOT "Antigravity 2.0" (a separate standalone agent app with no code editor)
- Free tier: approximately 20 agent requests/day on Gemini Flash
- Mitigation: Settings → Model Configuration → add a personal Google AI Studio API
  key (free at aistudio.google.com) to access a separate quota pool
- Tab completions are counted separately from agent requests — use freely
- Each day of the curriculum must include one ready-to-paste Antigravity agent prompt
  specific to that day's task

---

## DESIGN

- Background: `#0a0a0f` with a subtle procedural CSS star field (static or very slow
  drift; never distracting)
- Typography: clean modern sans-serif; white `#f8f8f8` primary text; single cool
  accent `#3b82f6`
- No glassmorphism, no heavy gradients, no neon glow — restraint is the aesthetic

### Athletics charts — the signature visual element

- Styled as constellation maps: data points = glowing white circular nodes;
  connecting lines = thin low-opacity strokes; personal bests = larger gold nodes
  with a subtle radial glow
- Background of the chart is the same `#0a0a0f` as the page — chart and background
  feel continuous, not boxed
- Do not use default Recharts styling; all visual properties must be explicitly
  overridden with these specifications
- Colour reference: World Athletics performance page for layout and data depth;
  this constellation aesthetic applied on top

---

## DATA WORKFLOW — EXCEL FIRST

Before any database work, the student collects raw performance data in Excel.
Include a dedicated section (Section 4 of the document) with:

1. An exact Excel column template as a Markdown table — columns: `date`,
   `discipline`, `performance`, `performance_numeric`, `wind`, `competition`,
   `venue`, `round`, `position`, `competition_level`
2. Example rows populated with real data from the student's World Athletics profile
3. How to derive a normalised relational schema from that flat-file structure —
   show the reasoning, not just the output
4. A complete seed script to import the Excel data into Supabase

Do not define the schema before the Excel section. The schema must be shown emerging
from the data, teaching schema design by example.

---

## GIT AND GITHUB CURRICULUM

Git must be taught through the act of building this project — not as a standalone
module. Every day has a Git checkpoint with exact commands.

Mandatory milestones:

- **Day 1** — Install Git, configure identity, create GitHub account, initialise
  repo, push first commit with README
- **Day 2** — First feature branch (`feat/navbar`); merge via pull request on GitHub
- **Day 3** — `.gitignore` for `node_modules` and env files; Conventional Commits
  convention (`feat:` / `fix:` / `chore:` / `docs:` / `refactor:`)
- **Days 4–6** — One branch per major feature; introduce and resolve a deliberate
  merge conflict so the student learns recovery
- **Days 7–9** — `.env` vs `.env.example` pattern; GitHub Secrets for deployment
- **Day 10** — Tag `v1.0.0` release; finalise public README; add GitHub Actions
  workflow for automatic Vercel deployment on push to `main`

By Day 10 the student must be able to independently start, maintain, and present a
GitHub repository to a technical interviewer.

---

## DELIVERABLE — EXACT DOCUMENT STRUCTURE

Produce a README.md using exactly this structure. Write every section in full.

---

# [Portfolio Name] — Full-Stack Development Curriculum

## 0. What You Are Building

- Final feature list (all phases complete)
- Architecture diagram in Mermaid
- `[Your deployed URL will go here]`

## 1. Tech Stack Reference

[Table with Technology, Version, Purpose, Free Tier Limit per row]

## 2. Antigravity IDE Setup

[Day 1 setup steps: download correct version, Google AI Studio key, quota strategy]

## 3. Environment Setup

[All installs with exact commands for macOS, Windows WSL, and Linux;
VS Code/Antigravity extensions list as JSON; GitHub account creation steps]

## 4. Data Collection & Schema Design

### 4.1 Excel Template

[Column table with example rows from actual World Athletics data]

### 4.2 Schema Design Walkthrough

[Reasoning from flat file → normalised tables → SQL CREATE TABLE statements]

### 4.3 Seed Script

[Complete runnable script: Excel → Supabase]

## 5. Day-by-Day Curriculum

### Day N: [Title] · Phase [1/2/3/4]

**Objectives** — what the student can do after this day
**New Concepts** — brief explanation with Python/data science analogies
**Tasks** — numbered checklist; exact commands; complete code blocks with file paths
**Git Checkpoint** — exact `git` commands; commit message in Conventional Commits format
**Antigravity Prompt** — one ready-to-paste agent prompt string for today
**Deliverable** — the specific thing to see, click, or demo at end of day

[All 10 days, written in full]

## 6. Athletics Dashboard Spec

- TypeScript interfaces for all result types
- Constellation chart implementation: complete Recharts override code
- World Athletics feature parity checklist

## 7. Deployment Guide

[Step-by-step: Vercel frontend, Supabase database, environment variables, connecting
all services — all free, no credit card required at any step]

## 8. Git & GitHub Reference Card

- Every `git` command used in the curriculum, grouped by category
- Git workflow diagram in Mermaid
- Top 5 recovery scenarios with exact commands

## 9. Resources

[One official documentation link per technology in the stack]

---

## FORMATTING RULES

- Language tag on every code block: ` ```bash ` ` ```typescript ` ` ```sql `
  ` ```json ` ` ```mermaid `
- Every file path as a comment on the first line of every code block:
  `// src/types/index.ts`
- Task steps as checkboxes: `- [ ] step text`
- Callout types:
  - `> ⚠️ Warning:` — gotchas and known failure modes
  - `> 💡 Tip:` — time-savers
  - `> 🐍 Python parallel:` — when a concept maps to something the student knows
  - `> 🔗 Docs:` — external documentation links

---

## HARD CONSTRAINTS

1. Every tool, service, and host must be free with no credit card required and no
   expiry after 30 days. Flag any service that may have changed pricing since your
   knowledge cutoff.
2. No skeleton code. Every function, component, and route must be complete and
   working.
3. No Git step may be skipped. Every day has a checkpoint with exact commands.
4. Do not ask the student to Google anything. Every task must be executable using
   only this document.
5. When a concept appears for the first time, define it briefly with a Python
   analogy if one exists.
6. Use exact version numbers from the Tech Stack table in all install commands.
7. Do not produce this document in parts or ask to continue. Output the complete
   document in one response.

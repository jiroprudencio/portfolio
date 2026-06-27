---
name: data_pipeline
description: Excel-first data workflow — read the athletics performance Excel file, define TypeScript interfaces, derive a normalised Supabase schema, and generate migration SQL and seed scripts.
---

# Data Pipeline — Excel to TypeScript to Supabase

## When to Use

- **Phase 1**: Define TypeScript interfaces and create hardcoded data files from `data/jiro_performance_data.xlsx`
- **Phase 3**: Generate Supabase migration SQL and seed scripts from those same interfaces

## Source Data

- **Resume**: `data/MarcusJiroAgaranPrudencio_resume.pdf` — portfolio content (experience, education, skills, projects)
- **Athletics**: `data/jiro_performance_data.xlsx` — performance records with columns: `date`, `discipline`, `performance`, `performance_numeric`, `wind`, `competition`, `venue`, `round`, `position`, `competition_level`
- **World Athletics**: https://worldathletics.org/athletes/singapore/jiro-prudencio-15088255

## Phase 1 Instructions — Hardcoded TypeScript Data

### 1. Define Interfaces

Create `src/types/index.ts` with interfaces for all data entities:

```typescript
// Athletics types
interface PerformanceRecord { ... }
interface Discipline { ... }
interface PersonalBest { ... }

// Portfolio types
interface Experience { ... }
interface Education { ... }
interface Project { ... }
interface Skill { ... }
```

### 2. Create Data Files

Create `src/data/` directory with hardcoded TypeScript arrays:

- `src/data/personal.ts` — name, title, bio, social links
- `src/data/experience.ts` — work experience from resume
- `src/data/education.ts` — education from resume
- `src/data/skills.ts` — skills and technologies from resume
- `src/data/projects.ts` — notable projects from resume
- `src/data/athletics.ts` — performance records from Excel, personal bests derived

### 3. Derive Personal Bests

For each discipline, compute the personal best from the performance records:
- **Sprints (100m, 200m, 400m)**: lowest `performance_numeric` value
- Mark PB records with an `isPersonalBest: true` flag

## Phase 3 Instructions — Supabase Schema

### 1. Normalise to Relational Tables

From the flat Excel structure, derive:

| Table | Key Columns |
|-------|-------------|
| `disciplines` | id, name, unit |
| `competitions` | id, name, venue, date, level |
| `performances` | id, discipline_id, competition_id, time_seconds, wind, round, position, is_personal_best |
| `experience` | id, company, role, start_date, end_date, description |
| `education` | id, institution, degree, field, start_date, end_date |
| `projects` | id, title, description, tech_stack, url |
| `skills` | id, name, category, proficiency |

### 2. Generate Migration SQL

Write `CREATE TABLE` statements with proper foreign keys, constraints, and indexes.

### 3. Generate Seed Script

Script to read the TypeScript data files and insert into Supabase via the JS client.

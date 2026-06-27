---
description: Execute a single build phase (1-4) of the Portfolio project on demand
---

When the user types `/buildphase <number>`, execute only the specified phase using `.agents/agents.md` roles and `.agents/skills/`.

### Usage

```
/buildphase 1    → Static frontend
/buildphase 2    → API routes
/buildphase 3    → Supabase database
/buildphase 4    → Deployment & polish
```

### Execution

1. Read the phase definition from `.agents/workflows/startcycle.md`
2. Execute only that phase's Spec → Build → QA → Run cycle
3. Do NOT execute subsequent phases

### Resuming Mid-Phase

If the user invokes `/buildphase` for a phase that's partially complete:
1. Check `app_build/` for existing work
2. Resume from the last incomplete step — do not re-scaffold or overwrite completed work
3. Report what was already done and what remains

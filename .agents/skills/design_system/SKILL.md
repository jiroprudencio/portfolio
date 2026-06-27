---
name: design_system
description: Implement the constellation design language — colour tokens, typography, CSS starfield background, Recharts chart theme overrides, shadcn/ui theme customisation, and Framer Motion animation presets.
---

# Design System — Constellation Aesthetic

## When to Use

Immediately after scaffolding (Phase 1), and whenever visual components need to be created or updated.

## Design Principles

1. **Restraint is the aesthetic** — no glassmorphism, no heavy gradients, no neon glow
2. **Constellation metaphor** — charts look like star maps; data points are stars
3. **Continuous backgrounds** — charts blend into the page, never boxed
4. **Subtle motion** — Framer Motion for page transitions and reveals, never flashy

## Colour Tokens

Define these as CSS custom properties in `globals.css`:

```css
:root {
  --bg-deep: #0a0a0f;
  --bg-surface: #12121a;
  --bg-elevated: #1a1a25;
  --text-primary: #f8f8f8;
  --text-muted: #a0a0b0;
  --text-dim: #606070;
  --accent: #3b82f6;
  --accent-hover: #2563eb;
  --accent-glow: rgba(59, 130, 246, 0.2);
  --gold: #fbbf24;
  --gold-glow: rgba(251, 191, 36, 0.3);
  --node: #f8f8f8;
  --line: rgba(248, 248, 248, 0.15);
  --border: rgba(248, 248, 248, 0.08);
}
```

## Typography

- Font: `Inter` from Google Fonts (or system sans-serif fallback)
- Headings: `--text-primary`, font-weight 600–700
- Body: `--text-muted`, font-weight 400
- Monospace: `JetBrains Mono` for code snippets

## Starfield Background

Create a CSS-only procedural starfield using radial-gradient layers on `body` or the root layout:

```css
body {
  background-color: var(--bg-deep);
  background-image:
    radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.6) 0%, transparent 100%),
    radial-gradient(1px 1px at 30% 70%, rgba(255,255,255,0.4) 0%, transparent 100%),
    radial-gradient(1px 1px at 50% 40%, rgba(255,255,255,0.5) 0%, transparent 100%),
    radial-gradient(1px 1px at 70% 80%, rgba(255,255,255,0.3) 0%, transparent 100%),
    radial-gradient(1px 1px at 90% 10%, rgba(255,255,255,0.5) 0%, transparent 100%);
  /* Add 20-30 more star positions for density */
}
```

Optional: very slow CSS drift animation (translateY over 60s+). Must never be distracting.

## Recharts Constellation Theme

All Recharts charts MUST override every default visual property:

```typescript
// src/lib/chart-theme.ts
export const constellationTheme = {
  background: 'transparent',        // blends with page bg
  dot: {
    fill: 'var(--node)',
    r: 4,
    strokeWidth: 0,
  },
  activeDot: {
    fill: 'var(--accent)',
    r: 6,
    stroke: 'var(--accent)',
    strokeWidth: 2,
    strokeOpacity: 0.4,
  },
  pbDot: {
    fill: 'var(--gold)',
    r: 8,
    stroke: 'var(--gold)',
    strokeWidth: 3,
    strokeOpacity: 0.3,
    filter: 'drop-shadow(0 0 6px var(--gold-glow))',
  },
  line: {
    stroke: 'var(--line)',
    strokeWidth: 1.5,
  },
  grid: {
    stroke: 'var(--border)',
    strokeDasharray: '3 6',
  },
  axis: {
    tick: { fill: 'var(--text-dim)', fontSize: 12 },
    label: { fill: 'var(--text-muted)', fontSize: 13 },
  },
  tooltip: {
    backgroundColor: 'var(--bg-elevated)',
    border: '1px solid var(--border)',
    color: 'var(--text-primary)',
    borderRadius: '8px',
  },
};
```

## Framer Motion Presets

```typescript
// src/lib/motion.ts
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4 },
};
```

## shadcn/ui Theme Override

Override shadcn's CSS variables in `globals.css` to match the constellation palette. Map shadcn's `--background`, `--foreground`, `--primary`, `--accent`, `--card`, `--border`, `--muted` etc. to the constellation tokens.

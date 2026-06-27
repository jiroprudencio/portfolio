---
name: athletics_dashboard
description: Build the constellation-chart athletics dashboard — Recharts override code with glowing nodes, event/discipline filters, personal best gold highlighting, and World Athletics feature parity.
---

# Athletics Dashboard — Constellation Charts

## When to Use

During Phase 1 (static data) and refined in Phases 2–3 as data source changes.

## Design Requirements

The athletics dashboard is the **signature visual element** of the portfolio. Charts must look like constellation maps, NOT default Recharts output.

### Visual Specifications

| Element | Appearance |
|---------|-----------|
| Data points | White circular nodes (`#f8f8f8`), r=4 |
| Connecting lines | Thin low-opacity strokes (`rgba(248,248,248,0.15)`), strokeWidth=1.5 |
| Personal bests | Larger gold nodes (`#fbbf24`, r=8) with subtle radial glow (`drop-shadow`) |
| Active/hover | Blue accent (`#3b82f6`), r=6, with stroke halo |
| Chart background | Transparent — blends seamlessly with page `#0a0a0f` |
| Grid lines | Barely visible dashed lines (`rgba(248,248,248,0.08)`) |
| Axis labels | `#606070` (dim), 12px |
| Tooltips | `#1a1a25` background, `#f8f8f8` text, subtle border |

### Key Reference

Style inspiration: World Athletics performance page layout and data depth. The constellation aesthetic is applied on top — this is NOT a replica of their UI.

## Components to Build

### 1. `ConstellationChart` — Core Chart Component

A reusable `LineChart` / `ScatterChart` wrapper that:
- Applies the full constellation theme (from `design_system` skill)
- Renders custom dot components for regular vs PB data points
- Has transparent background (no chart container box)
- Overrides ALL default Recharts styling

### 2. `PerformanceTimeline` — Sprint Progression Over Time

- X-axis: date (2016–present)
- Y-axis: time in seconds (inverted — lower = faster = higher on chart)
- One line per discipline, filterable
- PB markers with gold glow
- Tooltip showing: date, competition, time, wind, position

### 3. `DisciplineFilter` — Event Selector

- Toggle between: 100m, 200m, 400m, 4×100m, 4×400m
- Uses shadcn/ui `Tabs` or `Select`
- Filters the chart data reactively

### 4. `PersonalBestCards` — PB Summary Grid

- One card per discipline
- Shows: best time, date achieved, competition name
- Gold accent border/glow for the card
- Uses shadcn/ui `Card` with constellation styling

### 5. `SeasonSummary` — Season-by-Season Breakdown

- Collapsible sections per year/season
- Summary stats: races run, PBs set, best performances
- Expandable to show individual race results

## Custom Recharts Dot Component

```tsx
// Example: custom dot renderer for constellation effect
const ConstellationDot = (props: DotProps & { isPersonalBest: boolean }) => {
  const { cx, cy, isPersonalBest } = props;
  if (isPersonalBest) {
    return (
      <circle cx={cx} cy={cy} r={8} fill="var(--gold)"
        stroke="var(--gold)" strokeWidth={3} strokeOpacity={0.3}
        filter="url(#goldGlow)" />
    );
  }
  return <circle cx={cx} cy={cy} r={4} fill="var(--node)" />;
};
```

## Accessibility

- All chart data must also be available in a table view (toggle)
- Colour contrast ratios must pass WCAG AA on `#0a0a0f`
- Tooltips must be keyboard-navigable

import React from 'react';

/* ============================================================
   Constellation Chart Theme — Recharts overrides
   Every visual property is explicitly set; never use defaults.
   ============================================================ */

/** Standard data point (star node) */
export const dot = {
  fill: 'var(--node)',
  r: 4,
  strokeWidth: 0,
} as const;

/** Active / hovered data point */
export const activeDot = {
  fill: 'var(--accent)',
  r: 6,
  stroke: 'var(--accent)',
  strokeWidth: 2,
  strokeOpacity: 0.4,
} as const;

/** Personal Best data point — gold with glow */
export const pbDot = {
  fill: 'var(--gold)',
  r: 8,
  stroke: 'var(--gold)',
  strokeWidth: 3,
  strokeOpacity: 0.3,
  filter: 'url(#gold-glow)',
} as const;

/** Connecting line between data points (constellation lines) */
export const line = {
  stroke: 'var(--line)',
  strokeWidth: 1.5,
} as const;

/** Grid lines */
export const grid = {
  stroke: 'var(--border)',
  strokeDasharray: '3 6',
} as const;

/** Axis styling */
export const axis = {
  tick: { fill: 'var(--text-dim)', fontSize: 12 },
  label: { fill: 'var(--text-muted)', fontSize: 13 },
} as const;

/** Tooltip container styling */
export const tooltip: React.CSSProperties = {
  backgroundColor: 'var(--bg-elevated)',
  border: '1px solid var(--border)',
  color: 'var(--text-primary)',
  borderRadius: '8px',
  padding: '8px 12px',
  fontSize: '13px',
};

/** Full theme object for convenient destructuring */
export const constellationTheme = {
  background: 'transparent',
  dot,
  activeDot,
  pbDot,
  line,
  grid,
  axis,
  tooltip,
} as const;

/* ============================================================
   GoldGlowFilter — SVG filter definition component
   Render this once inside an <svg> defs block within any chart
   that needs the PB gold glow effect.
   ============================================================ */

export function GoldGlowFilter(): React.ReactElement {
  return React.createElement(
    'filter',
    { id: 'gold-glow', x: '-50%', y: '-50%', width: '200%', height: '200%' },
    React.createElement('feGaussianBlur', {
      in: 'SourceGraphic',
      stdDeviation: '3',
      result: 'blur',
    }),
    React.createElement('feFlood', {
      floodColor: 'var(--gold)',
      floodOpacity: '0.3',
      result: 'color',
    }),
    React.createElement('feComposite', {
      in: 'color',
      in2: 'blur',
      operator: 'in',
      result: 'glow',
    }),
    React.createElement(
      'feMerge',
      null,
      React.createElement('feMergeNode', { in: 'glow' }),
      React.createElement('feMergeNode', { in: 'SourceGraphic' })
    )
  );
}

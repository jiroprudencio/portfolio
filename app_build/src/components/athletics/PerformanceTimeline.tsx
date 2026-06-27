'use client';

import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  type DotProps,
} from 'recharts';
import type { PerformanceRecord } from '@/types';
import { constellationTheme, GoldGlowFilter } from '@/lib/chart-theme';
import { formatTime, formatDate } from '@/lib/utils';

interface PerformanceTimelineProps {
  readonly records: readonly PerformanceRecord[];
  readonly discipline: string;
}

interface CustomTooltipProps {
  readonly active?: boolean;
  readonly payload?: any[];
  readonly label?: string;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0].payload as PerformanceRecord;
    return (
      <div
        className="rounded-lg bg-surface border border-border p-3 text-text-primary shadow-xl"
        style={{ backdropFilter: 'blur(8px)' }}
      >
        <div className="flex justify-between items-center gap-4 mb-2">
          <span className="text-xs font-semibold text-accent tracking-wider uppercase">
            {data.discipline}
          </span>
          <span className="text-xs text-text-dim">{formatDate(data.date)}</span>
        </div>
        <div className="text-lg font-bold mb-1">
          {formatTime(data.performanceNumeric)}
          {data.wind && (
            <span className="text-xs font-normal text-text-muted ml-2">
              (Wind: {data.wind} m/s)
            </span>
          )}
        </div>
        <div className="text-sm text-text-muted mb-1">{data.competition}</div>
        <div className="text-xs text-text-dim">{data.venue}</div>
        {(data.position !== null || data.round) && (
          <div className="mt-2 pt-2 border-t border-border flex justify-between text-xs text-text-muted">
            {data.round && <span>Round: {data.round}</span>}
            {data.position !== null && <span>Pos: #{data.position}</span>}
          </div>
        )}
        {data.isPersonalBest && (
          <div className="mt-2 text-center text-xs font-semibold text-gold bg-gold/10 py-1 rounded border border-gold/20">
            ★ Personal Best
          </div>
        )}
      </div>
    );
  }
  return null;
}

export default function PerformanceTimeline({
  records,
  discipline,
}: PerformanceTimelineProps) {
  // Sort records by date to ensure the line flows chronologically
  const sortedRecords = [...records].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Custom Dot renderer
  const renderDot = (props: DotProps & { payload?: PerformanceRecord }) => {
    const { cx, cy, payload } = props;
    if (cx === undefined || cy === undefined || !payload) return null;

    if (payload.isPersonalBest) {
      return (
        <circle
          key={payload.id}
          cx={cx}
          cy={cy}
          r={6}
          fill="var(--gold)"
          stroke="var(--gold)"
          strokeWidth={4}
          strokeOpacity={0.3}
          filter="url(#gold-glow)"
          className="animate-pulse"
        />
      );
    }

    return (
      <circle
        key={payload.id}
        cx={cx}
        cy={cy}
        r={3}
        fill="var(--node)"
        stroke="var(--bg-deep)"
        strokeWidth={1}
      />
    );
  };

  // Custom Active Dot renderer
  const renderActiveDot = (props: DotProps & { payload?: PerformanceRecord }) => {
    const { cx, cy, payload } = props;
    if (cx === undefined || cy === undefined || !payload) return null;

    return (
      <circle
        key={`active-${payload.id}`}
        cx={cx}
        cy={cy}
        r={8}
        fill="var(--accent)"
        stroke="var(--accent)"
        strokeWidth={6}
        strokeOpacity={0.2}
      />
    );
  };

  // Handle empty state
  if (sortedRecords.length === 0) {
    return (
      <div className="h-96 flex items-center justify-center border border-dashed border-border rounded-lg bg-surface/20">
        <p className="text-text-muted">No performances recorded for this event.</p>
      </div>
    );
  }

  // Find min and max for Y-axis buffer
  const times = sortedRecords.map((r) => r.performanceNumeric);
  const minTime = Math.min(...times);
  const maxTime = Math.max(...times);
  const range = maxTime - minTime;
  const padding = range * 0.1 || 0.5;

  return (
    <div className="w-full bg-surface/10 border border-border/50 rounded-xl p-4 sm:p-6 mb-8 relative overflow-hidden">
      {/* Stars theme glow overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-accent-glow to-transparent pointer-events-none opacity-20" />

      <div className="h-96 w-full relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={sortedRecords}
            margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
          >
            <defs>
              <GoldGlowFilter />
            </defs>
            <CartesianGrid
              stroke={constellationTheme.grid.stroke}
              strokeDasharray={constellationTheme.grid.strokeDasharray}
              vertical={false}
            />
            <XAxis
              dataKey="date"
              tickFormatter={(date) => {
                const d = new Date(date);
                return d.toLocaleDateString('en-US', {
                  year: '2-digit',
                  month: 'short',
                });
              }}
              stroke="var(--border)"
              tick={constellationTheme.axis.tick}
              dy={10}
            />
            <YAxis
              domain={[minTime - padding, maxTime + padding]}
              reversed // Lower time is higher up (faster)
              tickFormatter={(val) => formatTime(val)}
              stroke="var(--border)"
              tick={constellationTheme.axis.tick}
              dx={-5}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: 'var(--line)',
                strokeWidth: 1,
                strokeDasharray: '3 3',
              }}
            />
            <Line
              type="monotone"
              dataKey="performanceNumeric"
              stroke="var(--line)"
              strokeWidth={constellationTheme.line.strokeWidth}
              dot={renderDot as any}
              activeDot={renderActiveDot as any}
              isAnimationActive={true}
              animationDuration={800}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex justify-between items-center text-xs text-text-dim px-2">
        <span>◀ Older Races</span>
        <span className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
            Personal Best
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-node" />
            Race Performance
          </span>
        </span>
        <span>Recent Races ▶</span>
      </div>
    </div>
  );
}

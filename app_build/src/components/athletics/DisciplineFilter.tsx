'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface DisciplineFilterProps {
  readonly activeFilter: string;
  readonly onChange: (discipline: string) => void;
  readonly disciplines: readonly string[];
}

export default function DisciplineFilter({
  activeFilter,
  onChange,
  disciplines,
}: DisciplineFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      <button
        type="button"
        onClick={() => onChange('All')}
        className={cn(
          'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border',
          activeFilter === 'All'
            ? 'bg-accent/20 border-accent text-accent shadow-[0_0_12px_rgba(59,130,246,0.2)]'
            : 'border-border text-text-muted hover:border-text-dim hover:text-text-primary'
        )}
      >
        All Events
      </button>
      {disciplines.map((discipline) => (
        <button
          key={discipline}
          type="button"
          onClick={() => onChange(discipline)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border',
            activeFilter === discipline
              ? 'bg-accent/20 border-accent text-accent shadow-[0_0_12px_rgba(59,130,246,0.2)]'
              : 'border-border text-text-muted hover:border-text-dim hover:text-text-primary'
          )}
        >
          {discipline}
        </button>
      ))}
    </div>
  );
}

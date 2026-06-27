'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { performanceRecords, getPersonalBests } from '@/data/athletics';
import DisciplineFilter from './DisciplineFilter';
import PerformanceTimeline from './PerformanceTimeline';
import PersonalBestCards from './PersonalBestCards';
import { staggerContainer, fadeInUp } from '@/lib/motion';

export default function AthleticsDashboard() {
  // States
  const [activeFilter, setActiveFilter] = useState<string>('400m');

  // Extract all unique disciplines for the filter menu
  const disciplines = useMemo(() => {
    const set = new Set(performanceRecords.map((r) => r.discipline));
    return Array.from(set).sort();
  }, []);

  // Filter records based on selected discipline
  const filteredRecords = useMemo(() => {
    if (activeFilter === 'All') {
      return performanceRecords;
    }
    return performanceRecords.filter((r) => r.discipline === activeFilter);
  }, [activeFilter]);

  // Personal Bests
  const personalBests = useMemo(() => {
    const pbs = getPersonalBests();
    if (activeFilter === 'All') {
      return pbs;
    }
    return pbs.filter((pb) => pb.discipline === activeFilter);
  }, [activeFilter]);

  return (
    <section id="athletics" className="py-20 relative overflow-hidden">
      {/* Background stars element */}
      <div className="absolute inset-0 bg-radial-gradient from-gold-glow via-transparent to-transparent pointer-events-none opacity-5" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-text-primary mb-3 uppercase tracking-wider"
          >
            Athletics Performance
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-text-muted max-w-xl mx-auto text-sm sm:text-base"
          >
            Sprint progression and competition history since 2016. Data points represent individual races, forming a constellation of athletic progression over time.
          </motion.p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-8"
        >
          <DisciplineFilter
            activeFilter={activeFilter}
            onChange={setActiveFilter}
            disciplines={disciplines}
          />
        </motion.div>

        {/* Timeline Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {activeFilter === 'All' ? (
            <div className="border border-border/60 bg-surface/20 rounded-xl p-8 text-center h-80 flex flex-col items-center justify-center">
              <svg
                className="w-12 h-12 text-accent/40 mb-4 animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-text-primary font-semibold mb-2">
                Multi-Event Overview Active
              </h3>
              <p className="text-text-muted text-sm max-w-md">
                To view a detailed performance progression timeline, please select a specific event like 400m or 100m from the filter tabs above.
              </p>
            </div>
          ) : (
            <PerformanceTimeline records={filteredRecords} discipline={activeFilter} />
          )}
        </motion.div>

        {/* Personal Best Cards */}
        <div>
          <h3 className="text-text-primary text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
            Personal Records
          </h3>
          <PersonalBestCards personalBests={personalBests} />
        </div>
      </div>
    </section>
  );
}

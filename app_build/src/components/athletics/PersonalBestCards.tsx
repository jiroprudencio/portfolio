'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { PersonalBest } from '@/types';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { formatDate } from '@/lib/utils';

interface PersonalBestCardsProps {
  readonly personalBests: readonly PersonalBest[];
}

export default function PersonalBestCards({ personalBests }: PersonalBestCardsProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {personalBests.map((pb) => (
        <motion.div
          key={pb.discipline}
          variants={fadeInUp}
          className="relative bg-surface/30 border border-gold/10 hover:border-gold/30 rounded-xl p-5 transition-all duration-300 group shadow-[0_4px_20px_rgba(251,191,36,0.02)] hover:shadow-[0_4px_30px_rgba(251,191,36,0.05)] overflow-hidden"
        >
          {/* Radial gold glow background on hover */}
          <div className="absolute inset-0 bg-radial-gradient from-gold-glow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative z-10">
            <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-1">
              {pb.discipline}
            </div>
            <div className="text-3xl font-extrabold text-gold tracking-tight mb-3 group-hover:scale-105 transition-transform duration-300 origin-left">
              {pb.performance}
            </div>
            <div className="border-t border-border/50 pt-3">
              <div className="text-text-primary text-sm font-medium line-clamp-1">
                {pb.competition}
              </div>
              <div className="text-text-dim text-xs mt-1 flex justify-between">
                <span>{pb.venue}</span>
                <span>{formatDate(pb.date)}</span>
              </div>
            </div>
          </div>

          {/* Star decoration */}
          <div className="absolute top-4 right-4 text-gold/20 group-hover:text-gold/40 transition-colors duration-300">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

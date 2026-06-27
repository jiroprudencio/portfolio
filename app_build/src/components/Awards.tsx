'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { awards } from '@/data/awards';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

export default function Awards() {
  return (
    <section id="awards" className="px-6 py-24 relative overflow-hidden">
      {/* Background glow element */}
      <div className="absolute inset-0 bg-radial-gradient from-accent-glow via-transparent to-transparent pointer-events-none opacity-5" />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        className="mx-auto max-w-4xl relative z-10"
      >
        {/* Section Heading */}
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
        >
          Awards &amp; Recognition
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="mt-3 h-1 w-16 rounded-full bg-[var(--accent)]"
        />

        {/* Awards List */}
        <div className="mt-12 space-y-8">
          {awards.map((award) => (
            <motion.div
              key={award.title}
              variants={staggerItem}
              className="relative flex flex-col md:flex-row justify-between gap-6 bg-surface/30 border border-border/60 rounded-xl p-6 transition-all duration-300 hover:border-[var(--accent)]/40 hover:shadow-[0_4px_30px_rgba(59,130,246,0.03)] group overflow-hidden"
            >
              {/* Radial Accent Glow on Hover */}
              <div className="absolute inset-0 bg-radial-gradient from-accent-glow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex-1 space-y-3 relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                    {award.title}
                  </h3>
                  <span className="text-xs font-semibold text-[var(--text-dim)] uppercase tracking-wider bg-[var(--bg-elevated)] px-3 py-1 rounded-full border border-[var(--border)]">
                    {award.issue_date}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-[var(--text-muted)] font-medium">
                  <div>
                    <span className="text-[var(--text-dim)] mr-1">Issuer:</span>
                    {award.issuer}
                  </div>
                  <span className="hidden sm:inline text-[var(--border)]">•</span>
                  <div>
                    <span className="text-[var(--text-dim)] mr-1">For:</span>
                    {award.associated_with}
                  </div>
                </div>

                <p className="text-sm text-[var(--text-muted)] leading-relaxed pt-2">
                  {award.description}
                </p>
              </div>

              {/* Optional media placeholder decoration */}
              {award.media && (
                <div className="relative w-full md:w-32 h-20 bg-[var(--bg-elevated)] rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-dim)] overflow-hidden shrink-0 self-center">
                  <svg
                    className="w-8 h-8 text-[var(--text-dim)] opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

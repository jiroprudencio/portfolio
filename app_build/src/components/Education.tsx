'use client';

import { motion } from 'framer-motion';
import { education } from '@/data/education';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';
import type { Education } from '@/types';

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        className="mx-auto max-w-4xl"
      >
        {/* Section Heading */}
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
        >
          Education
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="mt-3 h-1 w-16 rounded-full bg-[var(--accent)]"
        />

        {/* Education Cards */}
        <motion.div
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {education.map((edu: Education) => (
            <motion.div
              key={`${edu.institution}-${edu.degree}`}
              variants={staggerItem}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-6"
            >
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                {edu.institution}
              </h3>

              <p className="mt-2 text-sm font-medium text-[var(--accent)]">
                {edu.degree} — {edu.field}
              </p>

              <p className="mt-2 text-sm text-[var(--text-dim)]">
                {edu.startDate} — {edu.endDate ?? 'Present'}
              </p>

              {edu.description && (
                <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                  {edu.description}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

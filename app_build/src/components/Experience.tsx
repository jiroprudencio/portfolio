'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';
import type { Experience } from '@/types';

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
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
          Experience
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="mt-3 h-1 w-16 rounded-full bg-[var(--accent)]"
        />

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 h-full w-px bg-[var(--border)] md:left-4" />

          {/* Timeline Cards */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-col gap-10"
          >
            {experiences.map((exp: Experience) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                variants={staggerItem}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-deep)] md:left-[11px]" />

                {/* Card */}
                <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-[var(--text-dim)]">
                      {exp.startDate} — {exp.endDate ?? 'Present'}
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                    {exp.company}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                    {exp.description}
                  </p>

                  {/* Tech Badges */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/5 px-3 py-1 text-xs font-medium text-[var(--accent)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

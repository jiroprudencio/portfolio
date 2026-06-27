'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/personal';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

const stats = [
  { label: 'Location', value: personalInfo.location },
  { label: 'Events', value: personalInfo.events.join(' / ') },
  { label: 'Focus', value: personalInfo.focus },
] as const;

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
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
          About Me
        </motion.h2>

        {/* Accent line */}
        <motion.div
          variants={fadeInUp}
          className="mt-3 h-1 w-16 rounded-full bg-[var(--accent)]"
        />

        {/* Bio */}
        <motion.p
          variants={fadeInUp}
          className="mt-8 text-lg leading-relaxed text-[var(--text-muted)]"
        >
          {personalInfo.bio}
        </motion.p>

        {/* Stats Row */}
        <motion.div
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-6"
            >
              <p className="text-sm font-medium uppercase tracking-wider text-[var(--text-dim)]">
                {stat.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

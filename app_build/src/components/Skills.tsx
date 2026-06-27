'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';
import type { Skill } from '@/types';

export default function Skills() {
  // Group skills by category
  const grouped = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  const categories = Object.keys(grouped);

  return (
    <section id="skills" className="px-6 py-24">
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
          Skills &amp; Technologies
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="mt-3 h-1 w-16 rounded-full bg-[var(--accent)]"
        />

        {/* Skill Categories */}
        <div className="mt-12 space-y-10">
          {categories.map((category) => (
            <motion.div key={category} variants={staggerItem}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-dim)]">
                {category}
              </h3>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {(grouped[category] ?? []).map((skill: Skill) => (
                  <motion.span
                    key={skill.name}
                    variants={staggerItem}
                    className="rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

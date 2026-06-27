'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';
import type { Project } from '@/types';

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        className="mx-auto max-w-6xl"
      >
        {/* Section Heading */}
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="mt-3 h-1 w-16 rounded-full bg-[var(--accent)]"
        />

        {/* Project Cards Grid */}
        <motion.div
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {projects.map((project: Project) => (
            <motion.div
              key={project.title}
              variants={staggerItem}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 transition-colors hover:border-[var(--accent)]/40"
            >
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {(project.skills ?? []).map((tech: string) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/5 px-3 py-1 text-xs font-medium text-[var(--accent)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-5 flex items-center gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

import { personalInfo } from '@/data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        {/* Social Links */}
        <div className="flex items-center gap-6">
          {personalInfo.socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
              aria-label={social.platform}
            >
              {social.platform}
            </a>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-xs text-[var(--text-dim)]">
          Built with Next.js, TypeScript, and Tailwind CSS
        </p>

        {/* Copyright */}
        <p className="text-xs text-[var(--text-dim)]">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

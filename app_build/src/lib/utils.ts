import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/* ============================================================
   cn() — Tailwind class merging utility
   Combines clsx conditional logic with tailwind-merge conflict
   resolution so that e.g. cn('px-4', 'px-2') → 'px-2'.
   ============================================================ */

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/* ============================================================
   formatTime() — Formats seconds to sprint display format
   Examples:
     11.23   → "11.23"
     49.85   → "49.85"
     196.56  → "3:16.56"  (minutes:seconds.hundredths)
   ============================================================ */

export function formatTime(seconds: number): string {
  if (seconds < 0) return '—';

  if (seconds < 60) {
    return seconds.toFixed(2);
  }

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const secsFormatted = secs < 10 ? `0${secs.toFixed(2)}` : secs.toFixed(2);

  return `${mins}:${secsFormatted}`;
}

/* ============================================================
   formatDate() — Formats ISO date string to readable format
   "2024-03-15" → "15 Mar 2024"
   ============================================================ */

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
] as const;

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) return dateString;

  const day = date.getUTCDate();
  const monthIndex = date.getUTCMonth();
  const month = MONTHS[monthIndex];
  const year = date.getUTCFullYear();

  if (month === undefined) return dateString;

  return `${day} ${month} ${year}`;
}

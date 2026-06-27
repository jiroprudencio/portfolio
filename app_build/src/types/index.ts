/* ============================================================
   Portfolio Data Types
   ============================================================ */

/** Social media / external link attached to a person */
export interface SocialLink {
  readonly platform: string;
  readonly url: string;
  readonly icon?: string;
}

/** Core personal information displayed across the site */
export interface PersonalInfo {
  readonly name: string;
  readonly title: string;
  readonly bio: string;
  readonly tagline: string;
  readonly location: string;
  readonly email: string;
  readonly dateOfBirth: string; // ISO date string
  readonly socialLinks: readonly SocialLink[];
  readonly events: readonly string[];
  readonly focus: string;
}

/** Professional experience entry */
export interface Experience {
  readonly company: string;
  readonly role: string;
  readonly startDate: string; // ISO date string
  readonly endDate?: string; // undefined = current role
  readonly description: string;
  readonly skills: readonly string[];
}

/** Education entry */
export interface Education {
  readonly institution: string;
  readonly degree: string;
  readonly field: string;
  readonly startDate: string; // ISO date string
  readonly endDate: string; // ISO date string
  readonly description?: string;
}

/** Portfolio project */
export interface Project {
  readonly title: string;
  readonly description: string;
  readonly skills: readonly string[];
  readonly githubUrl?: string;
  readonly liveUrl?: string;
}

/** Skill category union type */
export type SkillCategory =
  | 'language'
  | 'framework'
  | 'tool'
  | 'database'
  | 'cloud'
  | 'other';

/** Individual skill with proficiency rating */
export interface Skill {
  readonly name: string;
  readonly category: SkillCategory;
  /** Proficiency from 0–100 */
  readonly proficiency: number;
}

/* ============================================================
   Athletics Performance Types
   ============================================================ */

/** A single competition performance record */
export interface PerformanceRecord {
  readonly id: string;
  /** ISO date string (YYYY-MM-DD) */
  readonly date: string;
  /** e.g. "100m", "200m", "400m" */
  readonly discipline: string;
  /** Display string, e.g. "11.23" or "49.85" */
  readonly performance: string;
  /** Numeric value in seconds for charting / comparison */
  readonly performanceNumeric: number;
  /** Wind reading, null if indoor or not applicable */
  readonly wind: string | null;
  /** Competition name */
  readonly competition: string;
  /** Venue / city */
  readonly venue: string;
  /** Round within competition, e.g. "Final", "Semi-Final" */
  readonly round: string | null;
  /** Finishing position, null if unknown */
  readonly position: number | null;
  /** e.g. "National", "Regional", "Club" */
  readonly competitionLevel: string;
  /** Whether this record is a personal best */
  readonly isPersonalBest: boolean;
}

/** Derived personal best for a single discipline */
export interface PersonalBest {
  readonly discipline: string;
  readonly performance: string;
  readonly performanceNumeric: number;
  readonly date: string;
  readonly competition: string;
  readonly venue: string;
}

/** Grouped records for a single discipline */
export interface Discipline {
  readonly name: string;
  /** Display unit, e.g. "seconds" */
  readonly unit: string;
  readonly records: readonly PerformanceRecord[];
}

export interface Award {
  readonly title: string;
  readonly associated_with: string;
  readonly issuer: string;
  readonly issue_date: string; // "Month Year"
  readonly description: string;
  readonly media?: string;
}

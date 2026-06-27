import type { Skill } from '@/types';

export const skills: readonly Skill[] = [
  // Languages
  { name: 'Python', category: 'language', proficiency: 90 },
  { name: 'SQL', category: 'language', proficiency: 85 },
  { name: 'TypeScript', category: 'language', proficiency: 75 },
  { name: 'JavaScript', category: 'language', proficiency: 80 },

  // Frameworks & Libraries
  { name: 'Next.js', category: 'framework', proficiency: 80 },
  { name: 'React', category: 'framework', proficiency: 85 },
  { name: 'scikit-learn', category: 'framework', proficiency: 85 },
  { name: 'pandas', category: 'framework', proficiency: 90 },
  { name: 'NumPy', category: 'framework', proficiency: 85 },

  // Databases & Cloud
  { name: 'PostgreSQL', category: 'database', proficiency: 80 },
  { name: 'Supabase', category: 'database', proficiency: 75 },

  // Tools & Devops
  { name: 'Git', category: 'tool', proficiency: 85 },
  { name: 'Docker', category: 'tool', proficiency: 70 },
  { name: 'VS Code', category: 'tool', proficiency: 90 },

  // Other / Concepts
  { name: 'NLP', category: 'other', proficiency: 80 },
  { name: 'GenAI', category: 'other', proficiency: 75 },
  { name: 'Data Visualization', category: 'other', proficiency: 90 },
] as const;

import type { Education } from '@/types';

/**
 * TODO: Replace all placeholder entries with actual resume data.
 * Pull from data/resume.pdf once parsed.
 */
export const education: readonly Education[] = [
  {
    institution: 'National University of Singapore', // TODO: replace with actual institution
    degree: 'Bachelor of Science',
    field: 'Data Science and Analytics',
    startDate: '2021-08-01',
    endDate: '2025-05-31',
    description: 'Specialised in Machine Learning and Quantitative Finance. First Class Honours (Expected).',
  },
  {
    institution: 'Raffles Institution', // TODO: replace with actual school
    degree: 'GCE A-Levels',
    field: 'Physics, Chemistry, Mathematics, Economics',
    startDate: '2019-01-01',
    endDate: '2020-12-31',
    description: 'Singapore-Cambridge GCE A-Levels. Active member of the Track and Field team.',
  },
] as const;

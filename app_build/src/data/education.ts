import type { Education } from '@/types';

export const education: readonly Education[] = [
  {
    institution: 'Singapore Polytechnic',
    degree: 'Diploma in Applied Artificial Intelligence (AI) and Analytics',
    field: 'Artificial Intelligence & Analytics',
    startDate: '2020-04-01',
    endDate: '2024-03-31',
    description:
      'GPA: 3.43. Track & Field: Captain of the Sprints Division (2022–2024) and Quartermaster (2021). Committed 10–15 hours per week to athletic training alongside academic responsibilities. Awarded Excellence Awards 2024 Sportsman of the Year for outstanding achievements and contributions.',
  },
  {
    institution: 'North Vista Secondary School',
    degree: 'GCE O-Levels',
    field: 'Secondary Education',
    startDate: '2016-01-01',
    endDate: '2019-10-31',
    description:
      'L1R5: 10, L1R4: 6. GCE O-Level top scorer in Exercise and Sports Science (ESS). Consistently ranked top 3 in class for Mathematics, Additional Mathematics, and Combined Science (Physics, Chemistry).',
  },
] as const;

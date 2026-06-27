import type { Experience } from '@/types';

export const experiences: readonly Experience[] = [
  {
    company: 'Singapore Armed Forces',
    role: 'Admin Support Assistant',
    startDate: '2024-07-01',
    endDate: '2026-07-31',
    description:
      'Digitised and reformatted records to improve data integrity and readability, maintaining documentation accuracy across the unit. Designed and documented new standard operating procedures for depot clerks, streamlining knowledge transfer and reducing onboarding time for incoming personnel. Managed daily operational reporting (parade state, logistics checks).',
    technologies: ['Microsoft Excel', 'Data Analysis', 'Data Modelling'],
  },
  {
    company: 'AsiaOne Online Pte. Ltd.',
    role: 'Data Science Apprentice',
    startDate: '2023-09-01',
    endDate: '2024-06-30',
    description:
      'Built an end-to-end social listening model and pipeline to conduct user behaviour analysis (semantic analysis through NLU) on unstructured social media comments, applying NLP, NLU, and GenAI techniques, including Singlish translation, topic modelling, and attribute extraction. Played a pivotal role as 1 of 2 data scientists in a 5-member team to achieve the Innovation Award at Google AI Trailblazers Initiative (only SME awarded out of 100). Earned the Silver Winner for AI-assisted Social Listening at WAN-IFRA\'s Digital Media Awards Asia 2025. Model was deployed in a live GE2025 news article, analysing 647,585 comments.',
    technologies: ['Python', 'NLP', 'NLU', 'GenAI', 'SQL', 'Data Pipelines'],
  },
  {
    company: 'PVH Singapore Pte. Ltd.',
    role: 'Part-Time Retail Sales Associate in Tommy Hilfiger',
    startDate: '2019-11-01',
    endDate: '2020-03-31',
    description:
      'Delivered personalised customer service, upheld visual merchandising standards, and consistently contributed to monthly team sales targets through effective upselling and cross-selling.',
    technologies: ['Customer Service', 'Sales', 'Communication'],
  },
] as const;

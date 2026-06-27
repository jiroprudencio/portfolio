import type { Experience } from '@/types';

/**
 * TODO: Replace all placeholder entries with actual resume data.
 * Pull from data/resume.pdf once parsed.
 */

export const experiences: readonly Experience[] = [
  {
    company: 'TechCorp Analytics', // TODO: replace with actual company
    role: 'Data Scientist',
    startDate: '2024-06-01',
    endDate: undefined, // Current role
    description:
      'Developed end-to-end NLP pipelines for sentiment analysis across multilingual customer feedback. Built internal dashboards using Next.js and Recharts to surface model performance metrics to non-technical stakeholders. Reduced model inference latency by 40% through quantisation and caching strategies.',
    technologies: ['Python', 'scikit-learn', 'Next.js', 'PostgreSQL', 'Docker'],
  },
  {
    company: 'DataWave Solutions', // TODO: replace with actual company
    role: 'Machine Learning Engineer Intern',
    startDate: '2023-05-01',
    endDate: '2024-05-31',
    description:
      'Designed and trained classification models for financial transaction anomaly detection. Collaborated with backend engineers to deploy models as REST APIs using FastAPI. Automated data quality checks that caught 15% more schema drift incidents than the previous manual process.',
    technologies: ['Python', 'pandas', 'NumPy', 'FastAPI', 'SQL', 'Git'],
  },
  {
    company: 'Freelance', // TODO: replace with actual company or remove
    role: 'Full-Stack Developer',
    startDate: '2022-01-01',
    endDate: '2023-04-30',
    description:
      'Built responsive web applications for small businesses using React and Next.js. Integrated Supabase for authentication and real-time data. Delivered three client projects on time with 100% satisfaction rating.',
    technologies: ['TypeScript', 'React', 'Next.js', 'Supabase', 'Tailwind CSS'],
  },
] as const;

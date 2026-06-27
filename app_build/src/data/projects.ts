import type { Project } from '@/types';

export const projects: readonly Project[] = [
  {
    title: 'Athletics Portfolio & Constellation Dashboard',
    description: 'A full-stack portfolio showcasing developer skills and personal athletic performance. Features custom Recharts visualization themed as constellation star maps, integrated with Next.js and Supabase.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Supabase', 'Framer Motion'],
    githubUrl: 'https://github.com/jiroprudencio/athletics-portfolio',
    liveUrl: 'https://jiroprudencio.vercel.app',
  },
  {
    title: 'Sprint Progression Analytics Engine',
    description: 'A Python-based predictive analytics tool that modelizes short sprints (100m, 200m) progression curves using historical results from World Athletics. Fits exponential decay models to predict peak velocity windows.',
    technologies: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Matplotlib'],
    githubUrl: 'https://github.com/jiroprudencio/sprint-progression-model',
  },
  {
    title: 'Real-time NLP Feed Classifier',
    description: 'An end-to-end streaming data pipeline that ingest news articles and tweets, performing real-time classification of sports-related sentiment and event categorization using fine-tuned BERT models.',
    technologies: ['Python', 'Docker', 'FastAPI', 'PostgreSQL', 'NLP'],
    githubUrl: 'https://github.com/jiroprudencio/nlp-feed-classifier',
  },
] as const;

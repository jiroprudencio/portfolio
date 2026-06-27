import type { PersonalInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Jiro Prudencio',
  title: 'Data Scientist & Full-Stack Developer',
  bio: 'I build data-driven products by day and chase personal bests on the track by evening. With a background in data science, NLP, and full-stack development, I bring the same discipline to shipping clean code as I do to the starting blocks — measure everything, iterate fast, and never settle for yesterday\'s numbers.',
  tagline: 'Bridging the starting blocks and data pipelines with precision, speed, and analytical rigor.',
  location: 'Singapore',
  email: 'jiro.prudencio@gmail.com', // TODO: confirm email address
  dateOfBirth: '2003-09-21',
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/jiroprudencio', // TODO: replace with actual GitHub URL
      icon: 'github',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/jiroprudencio', // TODO: replace with actual LinkedIn URL
      icon: 'linkedin',
    },
  ],
  events: ['100m', '200m', '400m', '4x100m', '4x400m'],
  focus: 'Sprints & ML Pipelines',
} as const;

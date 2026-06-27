import type { PersonalInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Jiro Prudencio',
  title: 'Data Scientist, Full-Stack Developer, Team Singapore Athlete',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  location: 'Singapore',
  email: 'jiroprudencio.21@gmail.com', // TODO: confirm email address
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
  events: ['400m','200m', '100m','4x400m'],
  focus: 'Data Science, AI/ML, Web Development',
} as const;

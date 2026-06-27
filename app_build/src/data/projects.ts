import type { Project } from '@/types';

export const projects: readonly Project[] = [
  {
    title: 'Personal Portfolio',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    githubUrl: 'https://github.com/jiroprudencio/portfolio'
  },
  {
    title: 'Social Listening Model',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    liveUrl: 'https://www.asiaone.com/multimedia/ge2025-social-media-pap-wp-tampines-punggol-jalan-kayu-analytics'
  },
] as const;

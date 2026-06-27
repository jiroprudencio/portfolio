import type { Award } from '@/types';

export const awards: readonly Award[] = [
  {
    title: 'Excellence Awards 2024 Sportsman of the Year',
    associated_with: 'Track & Field, Singapore Polytechnic',
    issuer: 'Singapore Polytechnic',
    issue_date: 'March 2024',
    description: 'Awarded for outstanding achievements and contributions in Co-Curricular Activities and Sports.',
    media: '/awards/sportsman_of_the_year.jpg', // Placeholder path
  },
  {
    title: 'Innovation Award',
    associated_with: 'AsiaOne Online Pte. Ltd.',
    issuer: 'Google AI Trailblazers Initiative',
    issue_date: 'December 2023',
    description: 'Achieved as one of two data scientists in a five-member team, being the only SME to be awarded among 100 selected use cases.',
    media: '/awards/google_trailblazers.jpg', // Placeholder path
  },
  {
    title: 'Silver Winner: AI-assisted Social Listening for Impactful News Coverage',
    associated_with: 'AsiaOne Online Pte. Ltd.',
    issuer: 'WAN-IFRA Digital Media Awards Asia 2025',
    issue_date: 'April 2025',
    description: 'Recognized for building the social listening pipeline deployed during the GE2025 coverage.',
    media: '/awards/wan_ifra_silver.jpg', // Placeholder path
  },
] as const;

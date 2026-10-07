import type { TeamMemberEnglish } from '../types.ts';

export const en = {
  name: 'Rathana Sokha',
  role: 'Junior Software Developer',
  tagline:
    'Web development, software fundamentals and practical data/IT support.',
  badge: 'Junior Developer',
  bio: 'Enthusiastic software engineer equipped with solid algorithmic grounding, relational data queries, and clean code construction across client and server environments.',
  languages: [
    {
      language: 'Khmer',
      level: 'Mother tongue',
    },
    {
      language: 'English',
      level: 'Intermediate',
    },
  ],
  softSkills: [
    'Problem Solving',
    'Fast Learner',
    'Collaboration',
    'Documentation',
  ],
  experience: [
    {
      role: 'IT & Data Support Intern',
      company: 'Cambodia Airports',
      period: '2025',
      description:
        'Gained practical experience supporting IT systems, database access validation, GLPI ticketing, and internal data tooling.',
      technologies: ['MySQL', 'SQL Server', 'GLPI', 'Data Analysis'],
    },
  ],
  education: [
    {
      degree: 'Associate Degree – Web Programming',
      institution: 'Passerelles numériques Cambodia (PNC)',
      period: '2024 – 2026',
    },
  ],
  selectedProjects: [
    {
      title: 'Cambodia Airports - IT & Data Experience',
      role: 'Data & IT Intern',
      period: '2025',
      description:
        'Practical internship exposure across IT support, databases, GLPI access control, data entry and analytics tooling.',
      technologies: ['MySQL', 'SQL Server', 'GLPI'],
    },
  ],
} satisfies TeamMemberEnglish;

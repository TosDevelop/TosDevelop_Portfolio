import type { TeamMemberEnglish } from '../types.ts';

export const en = {
  name: 'Serey Phem',
  role: 'Web Developer',
  tagline:
    'Web applications, REST APIs, databases and practical software quality.',
  badge: 'Web Developer',
  bio: 'Dedicated web developer specializing in clean client-server architecture, database modeling, responsive UI components, and reliable API services.',
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
    'Code Quality',
    'Problem Solving',
    'Team Collaboration',
    'Continuous Learning',
  ],
  experience: [
    {
      role: 'Web Developer',
      company: 'Academic & Client Initiatives',
      period: '2024 – Present',
      description:
        'Engineered web platforms, integrated authenticated REST endpoints, and managed database schemas.',
      technologies: ['React.js', 'Laravel', 'MySQL', 'Git'],
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
      title: 'Farm Management System',
      role: 'Lead Developer',
      period: 'Jul – Aug 2025',
      description:
        'A farm management platform designed to record crop types, planting dates, growth stages and operational notes.',
      technologies: ['React.js', 'Laravel', 'Python', 'MySQL'],
    },
  ],
} satisfies TeamMemberEnglish;

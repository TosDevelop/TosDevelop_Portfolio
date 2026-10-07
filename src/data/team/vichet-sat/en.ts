import type { TeamMemberEnglish } from '../types.ts';

export const en = {
  name: 'Sat Vichet',
  role: 'Planning & Web Developer',
  tagline:
    'Project planning, web development coordination and practical team delivery.',
  badge: 'Planning & Web',
  bio: 'Passionate about bridging technical implementation with systematic planning and project management. Balances core web engineering principles with agile sprint roadmaps, ensuring collaborative milestone deliveries.',
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
    'Sprint Planning',
    'Agile / Scrum',
    'Team Leadership',
    'Documentation',
    'Clear Communication',
  ],
  experience: [
    {
      role: 'Planning Lead & Developer',
      company: 'PNC Startup Team Projects',
      period: '2024 – Present',
      description:
        'Led requirement scoping, milestone planning, and coordinated feature delivery across 7-member cross-functional cohort projects.',
      technologies: ['Jira', 'Laravel', 'React.js', 'Git'],
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
      role: 'Planning & Web Developer',
      period: 'Jul – Aug 2025',
      description:
        'Collaborative farm monitoring portal with crop cycles, task planning, and harvest analytics.',
      technologies: ['React.js', 'Laravel', 'MySQL'],
    },
  ],
} satisfies TeamMemberEnglish;

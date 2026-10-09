import { projects } from './projects/en.ts';
import type { TeamMemberEnglish } from '../types.ts';

export const en = {
  name: 'Miok Dane',
  role: 'Mobile Developer',
  badge: 'Mobile | Web Developer',
  tagline:
    'Backend-focused web developer building RESTful APIs, secure authentication, and relational databases using Node.js, Laravel, Vue.js, MySQL, and PostgreSQL.',
  bio: 'Motivated backend-focused web developer with hands-on experience building RESTful APIs, secure authentication, and relational database schemas using Node.js, Laravel, Vue.js, MySQL, and PostgreSQL. Comfortable working in Agile teams and delivering full-stack features under deadline pressure. Eager to apply and grow these skills within a professional IT environment.',
  languages: [
    { language: 'Khmer', level: 'Mother Tongue' },
    { language: 'English', level: 'Intermediate' },
  ],
  softSkills: [
    'Problem Solving',
    'Teamwork & Collaboration',
    'Adaptability',
    'Communication',
    'Critical Thinking',
    'Task/Time Management',
  ],
  experience: [],
  education: [
    {
      degree: 'Associate Degree in Web Programming',
      institution: 'Passerelles Numériques Cambodia (PNC)',
      period: '2025 – Present',
    },
    {
      degree: 'Bac II',
      institution: 'Hunsen Triel High School',
      period: '2024 – 2025',
    },
  ],
  selectedProjects: projects,
} satisfies TeamMemberEnglish;

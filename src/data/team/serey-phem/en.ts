import { projects } from './projects/en.ts';
import type { TeamMemberEnglish } from '../types.ts';

export const en = {
  name: 'Serey Phem',
  role: 'Junior Software Engineer',
  tagline:
    'Sow applications, REST APIs, databases and practical software quality.',
  badge: 'Software Engineer',
  bio: 'Dedicated software developer specializing in clean client-server architecture, database modeling, responsive UI components, and reliable API services.',
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
      role: 'Software Engineer Intern',
      company: 'IG Tech Group',
      period: '2026 – Present',
      description:
        'Engineered web platforms, integrated authenticated REST endpoints, and managed database schemas.',
      technologies: ['Kotlin', 'Spring Boot', 'Postgresql', 'Git'],
    },
  ],
  education: [
    {
      degree: 'Associate Degree – Web Programming',
      institution: 'Passerelles numériques Cambodia (PNC)',
      period: '2025 – 2026',
    },
  ],
  selectedProjects: projects,
} satisfies TeamMemberEnglish;

import { projects } from './projects/en.ts';
import type { TeamMemberEnglish } from '../types.ts';
export const en = {
  name: 'Vichet Sat',
  role: 'Full-Stack Developer',
  badge: 'Junior Full-Stack Developer',
  tagline:
    'Junior full-stack developer building web applications with Vue.js, Laravel and Node.js, from databases and REST APIs to deployment.',
  bio: 'Junior full-stack developer studying Web Programming at Passerelles Numériques Cambodia (PNC). Experienced in building web applications with Vue.js, Laravel, Node.js/NestJS and Next.js, REST APIs with authentication and role-based access, MySQL/PostgreSQL databases, testing with Jest and Playwright, and deployment with Docker, GitHub Actions, AWS EC2 and Vercel. Open to full-time junior roles and freelance work.',
  languages: [
    { language: 'Khmer', level: 'Native' },
    { language: 'English', level: 'Intermediate' },
  ],
  softSkills: [
    'Problem Solving',
    'Communication',
    'Teamwork',
    'Adaptability',
    'In-depth Research',
    'Responsibility',
    'Time Management',
    'Task Management',
  ],
  experience: [
    {
      role: 'Full-Stack Developer',
      company: 'PUC-IFL (Paññāsāstra University of Cambodia)',
      period: 'Aug 2026 – Present',
      description:
        'Building the PUC-IFL Enrollment & Academic System with Vue 3, TypeScript and a Laravel 12 REST API. Develop frontend screens and backend APIs from planning documents to tested features, collaborating through feature branches in a shared GitHub organization. Implemented online applications, placement tests, class division, QR invitations, QR attendance and schedules, real-time notifications, password reset and mobile layout fixes.',
      technologies: [
        'Vue 3',
        'TypeScript',
        'Pinia',
        'Tailwind CSS',
        'Laravel 12',
        'MySQL',
        'Laravel Reverb',
        'Playwright',
        'PHPUnit',
      ],
    },
  ],
  education: [
    {
      degree: 'Associate Degree in Web Programming',
      institution: 'Passerelles Numériques Cambodia (PNC)',
      period: '2025 – Present',
    },
    {
      degree: 'High School Diploma',
      institution: 'Rovieng High School',
      period: '2022 – 2024',
    },
  ],
  selectedProjects: projects,
} satisfies TeamMemberEnglish;

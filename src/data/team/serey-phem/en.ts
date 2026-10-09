import { projects } from './projects/en.ts';
import type { TeamMemberEnglish } from '../types.ts';

export const en = {
  name: 'Serey Phem',
  role: 'Junior Software Engineer',
  tagline:
    'Web Programming student building responsive, user-friendly web applications.',
  badge: 'Software Engineer',
  bio: 'Web Programming student with hands-on experience building responsive web applications using Angular, Vue.js, JavaScript, HTML, CSS, and Tailwind CSS. Experienced with REST APIs, CRUD operations, MySQL, Node.js, Laravel, Spring Boot, Git/GitHub, and Postman. Interested in UI/UX design and learning modern web technologies.',
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

import { projects } from './projects/en.ts';
import type { TeamMemberEnglish } from '../types.ts';

export const en = {
  name: 'Reaksmey San',
  role: 'Web Developer · UI/UX · QA',
  badge: 'Web Developer · UI/UX · QA',
  tagline:
    'Motivated Web Programming student focused on building clean, responsive, user-friendly web applications.',
  bio: 'Motivated Web Programming student with hands-on experience building responsive web applications using React.js, Vue.js, JavaScript, HTML, CSS, and Tailwind CSS. Skilled in REST APIs, CRUD, MySQL, Node.js, Laravel, Git/GitHub, and Postman. Passionate about creating clean, user-friendly applications and continuously learning modern web technologies.',
  languages: [
    {
      language: 'Khmer',
      level: 'Native',
    },
    {
      language: 'English',
      level: 'Intermediate',
    },
  ],
  softSkills: [
    'Team Collaboration',
    'Problem Solving',
    'Communication',
    'Time Management',
    'Attention to Detail',
    'Adaptability',
    'Fast Learner',
  ],
  experience: [
    {
      role: 'Web/Mobile Developer Intern',
      company: 'SAEROSOFT INC.',
      period: 'Aug 2026 – Present',
      type: 'Internship',
      description: 'Web/mobile development internship experience.',
      technologies: ['Web Development'],
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

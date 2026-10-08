import { projects } from './projects/en.ts';
import type { TeamMemberEnglish } from '../types.ts';
export const en = {
  name: 'Vichet Sat',
  role: 'Full-Stack Developer',
  badge: 'Junior Full-Stack Developer | Web Developer',
  tagline:
    'Passionate about building modern web applications with Vue.js, Laravel and Node.js, alongside DevOps and AI-assisted coding.',
  bio: 'Junior Web Developer with experience in full-stack web application development, REST APIs, databases, AWS deployment, testing and debugging.',
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
  ],
  experience: [
    {
      role: 'Web Developer',
      company: 'PUC Academic System',
      period: '',
      description:
        'Developed React.js and Vue.js interfaces, integrated Laravel APIs, implemented CRUD operations and performed functional testing. Worked on enrollment, cashier and teacher and student attendance modules, including location tracking for attendance.',
      technologies: [
        'React.js',
        'Vue.js',
        'Laravel',
        'REST API',
        'Functional Testing',
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

import { projects } from './projects/en.ts';
import type { TeamMemberEnglish } from '../types.ts';

export const en = {
  name: 'Ya Phorn',
  role: 'Full Stack Developer',
  tagline:
    'Scalable web applications, workflow automation and cloud-ready delivery.',
  badge: 'Full Stack',
  bio: 'A full-stack developer who enjoys building efficient, user-friendly web applications and continuously exploring new tools and technologies. His experience spans CRM, education, internal management systems, workflow automation, reporting dashboards and role-based access control.',
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
    'Respect',
    'Adaptability',
    'Communication',
    'Problem solving',
    'Critical thinking',
    'Time management',
    'Teamwork & collaboration',
  ],
  experience: [
    {
      role: 'Full Stack Developer',
      company: 'KO Global Management',
      period: '1+ year',
      type: 'Full-time',
      description:
        'Built scalable production web applications across CRM, education and internal management systems. Delivered workflow automation, reporting dashboards and role-based access control features. Contributed to Custom CRM System, KO Academy System and KO Voice System.',
      technologies: [
        'Vue.js',
        'Laravel',
        'JavaScript',
        'MySQL',
        'REST API',
        'Linux',
        'AWS',
      ],
    },
    {
      role: 'IT Intern – Full Stack Developer',
      company: 'The NGO Passerelles numériques Cambodia',
      period: 'Internship',
      type: 'Internship',
      description:
        'Developed and deployed an automated Service Agreement management system for consultant workflows. Focused on reducing manual work while improving workflow efficiency, compliance and data security. Managed deployment on AWS EC2 (Ubuntu) with custom domain configuration.',
      technologies: [
        'Python',
        'Flask',
        'Bootstrap',
        'jQuery',
        'Git',
        'AWS EC2',
        'Ubuntu',
      ],
    },
  ],
  education: [
    {
      degree: 'Associate Degree – Web Programming',
      institution: 'Passerelles numériques Cambodia (PNC)',
      period: '2024 – 2026',
    },
    {
      degree: 'Bac II',
      institution: 'Pock High School',
      period: '2020 – 2023',
    },
  ],
  selectedProjects: projects,
  additionalLearning: [
    'Project Management workshop',
    'Data Analytics workshop',
    'Product Ownership workshop',
    'UI/UX Design workshop',
    'Company visits and technical exposure activities',
  ],
} satisfies TeamMemberEnglish;

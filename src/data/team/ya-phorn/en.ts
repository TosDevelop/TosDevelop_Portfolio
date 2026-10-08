import { projects } from './projects/en.ts';
import type { TeamMemberEnglish } from '../types.ts';

export const en = {
  name: 'Phorn Ya',
  role: 'Full-Stack Developer',
  badge: 'Junior Full-Stack Developer | Web Developer',
  tagline:
    'Passionate about building modern web applications using Vue.js, React.js, Laravel, Node.js and cloud technologies.',
  bio: 'Junior Web Developer with experience in full-stack web application development, REST APIs, databases, AWS deployment, testing and debugging.',
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
    'Problem Solving',
    'Communication',
    'Teamwork',
    'Adaptability',
    'Continuous Learning',
  ],
  experience: [
    {
      role: 'Frontend Developer / QA',
      company: 'Kompie E-Library System',
      period: '',
      description:
        'Developed React.js interfaces, integrated Laravel APIs, implemented CRUD operations and performed functional testing.',
      technologies: ['React.js', 'Laravel', 'REST API', 'Functional Testing'],
    },
    {
      role: 'Junior DevOps',
      company: 'WordPress Deployment Project',
      period: '',
      description:
        'Deployed WordPress on AWS EC2, configured Apache, Ubuntu and MySQL, and managed DNS.',
      technologies: [
        'WordPress',
        'AWS EC2',
        'Apache',
        'Ubuntu',
        'MySQL',
        'DNS Management',
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

import type { MemberProjectSummary } from '../../../../types/index.ts';
export const projects = [
  {
    title: 'PNC Student Selection Management System',
    role: 'Full-Stack Developer',
    period: 'July 2026',
    description:
      'Developed a full-stack student selection management system for candidate and selection campaign workflows. Implemented frontend/backend features and API workflows using a structured backend approach, practicing authentication, authorization, database design, and maintainable architecture.',
    technologies: [
      'Vue.js',
      'Laravel 12',
      'PHP',
      'MySQL',
      'JWT',
      'Role-based access control',
    ],
    repositories: [
      {
        label: 'Frontend',
        url: 'https://github.com/pnc-selection-system/pnc-selection-system',
      },
      {
        label: 'Backend',
        url: 'https://github.com/pnc-selection-system/pnc-selection-system-api',
      },
    ],
  },
  {
    title: 'E-Learning Management System',
    role: 'Team Lead & Full-Stack Developer',
    period: 'May–June 2026',
    description:
      'Built an e-learning management system backend for Admin, Teacher, and Student roles. Coordinated team development and implemented backend structure, authentication, and role-based access, strengthening API design, object-oriented programming, database integration, and collaboration.',
    technologies: [
      'Node.js',
      'TypeScript',
      'Express.js',
      'TypeORM',
      'MySQL',
      'JWT',
      'bcrypt',
    ],
    repositories: [
      {
        label: 'Frontend',
        url: 'https://github.com/Rathana-SOKHA/E_Learning_Management_System_Frontend',
      },
      {
        label: 'Backend',
        url: 'https://github.com/Rathana-SOKHA/E_Learning_Management_System_Backend',
      },
    ],
  },
  {
    title: 'Cleaning Service Web Application',
    role: 'Full-Stack Developer',
    period: 'February–May 2026',
    description:
      'Built full-stack features for a cleaning service application, including booking, payment-related workflows, and reviews. Practiced connecting frontend interfaces, backend APIs, and relational database workflows.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    repoUrl: 'https://github.com/Narith-hen/Service-Cleaning-App',
  },
  {
    title: 'E-Commerce System',
    role: 'Full-Stack Developer',
    period: '',
    description:
      'Developed a full-stack e-commerce project with customer/admin functionality and product management workflows. Implemented CRUD functionality and connected frontend views to backend APIs, improving API integration and data management skills.',
    technologies: ['Vue.js', 'JavaScript', 'Laravel', 'MySQL', 'REST APIs'],
    repositories: [
      {
        label: 'Frontend',
        url: 'https://github.com/Rathana-SOKHA/ecommerce-frontend',
      },
      {
        label: 'Backend',
        url: 'https://github.com/Rathana-SOKHA/ecommerce-backend',
      },
    ],
  },
  {
    title: 'API CRUD Practice Project',
    role: 'Developer',
    period: '',
    description:
      'Implemented and tested CRUD endpoints as a learning exercise, practicing API routing, request handling, and data operations.',
    technologies: [],
  },
] satisfies MemberProjectSummary[];

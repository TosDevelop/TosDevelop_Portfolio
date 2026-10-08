import type { MemberProjectSummary } from '../../../../types/index.ts';

export const projects = [
  {
    title: 'E-Commerce System',
    role: '',
    period: '',
    description: '',
    technologies: [],
  },
  {
    title: 'Student Follow-Up Meeting System',
    role: '',
    period: '',
    description: '',
    technologies: [],
  },
  {
    title: 'Kompie E-Library System',
    role: 'Frontend Developer / QA',
    period: '',
    description:
      'Developed React.js interfaces, integrated Laravel APIs, implemented CRUD operations and performed functional testing.',
    technologies: ['React.js', 'Laravel', 'REST API', 'Functional Testing'],
  },
  {
    title: 'WordPress Deployment Project',
    role: 'Junior DevOps',
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
] satisfies MemberProjectSummary[];

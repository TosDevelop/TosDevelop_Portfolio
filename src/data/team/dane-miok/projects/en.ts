import type { MemberProjectSummary } from '../../../../types/index.ts';

export const projects = [
  {
    title: 'Student Internship Follow-up System',
    role: 'Full-Stack Developer',
    period: 'July 05 – July 30, 2026',
    description:
      'Built full-stack features for a role-based internship management platform for Admin, Tutor, Student, and Company users using Vue.js and Laravel. Integrated REST APIs with the Laravel backend and designed and managed MySQL databases.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'GitHub'],
    repositories: [
      {
        label: 'Frontend',
        url: 'https://github.com/INTERNSHIP-FOLLOWUP/INTERNSHIP-FOLLOWUP-FRONTEND.git',
      },
      {
        label: 'Backend',
        url: 'https://github.com/INTERNSHIP-FOLLOWUP/INTERNSHIP-FOLLOWUP-BACKEND.git',
      },
    ],
  },
  {
    title: 'Restaurant System',
    role: 'Team Coordinator and Backend Developer',
    period: 'May 18 – June 06, 2026',
    description:
      'Built a backend RESTful system using Node.js and TypeScript. Implemented JWT authentication and role-based authorization for Admin, Chef, Cashier, and Customer users. Designed and optimized the MySQL database schema using TypeORM.',
    technologies: [
      'Node.js',
      'Express.js',
      'TypeScript',
      'MySQL',
      'TypeORM',
      'GitHub',
    ],
    repositories: [
      {
        label: 'Backend',
        url: 'https://github.com/sir-phy/restaurant_system.git',
      },
    ],
  },
  {
    title: 'Online Shopping Platform',
    role: 'Full-Stack Developer (Individual Project)',
    period: 'June 19 – June 26, 2026',
    description:
      'Built a full-stack online shopping platform using Vue.js, Laravel, and MySQL. Developed RESTful APIs for product, order, and user management. Implemented secure authentication and seamless frontend-backend integration.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'GitHub'],
    repositories: [
      {
        label: 'Frontend',
        url: 'https://github.com/dane25006/e-commerce-frontend.git',
      },
      {
        label: 'Backend',
        url: 'https://github.com/dane25006/e-commerce-backend.git',
      },
    ],
  },
  {
    title: 'Booking Trip',
    role: 'Full-Stack Developer',
    period: 'February 15 – April 02, 2026',
    description:
      'Developed a hotel and trip booking platform using React.js, Laravel, and TypeScript. Implemented Login/Register authentication and seamless frontend-backend integration. Built responsive UI components.',
    technologies: ['React.js', 'Laravel', 'MySQL', 'TypeScript', 'GitHub'],
    repoUrl: 'https://github.com/chantrea8888/VC1_trip_booking_app',
  },
] satisfies MemberProjectSummary[];

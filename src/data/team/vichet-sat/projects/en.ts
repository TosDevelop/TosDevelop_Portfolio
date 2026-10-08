import type { MemberProjectSummary } from '../../../../types/index.ts';
export const projects = [
  {
    title: 'PUC Academic System',
    role: 'Web Developer',
    period: '',
    description:
      'Developed React.js and Vue.js interfaces connected to Laravel APIs, with CRUD operations and functional testing. Contributed to enrollment, cashier and attendance modules for teachers and students, including location tracking.',
    technologies: [
      'React.js',
      'Vue.js',
      'Laravel',
      'REST API',
      'Functional Testing',
    ],
  },
  {
    title: 'PNC Education System',
    role: 'Full-Stack Developer',
    period: '',
    description:
      'Built an internal student lifecycle platform with Laravel 12, PHP 8.2, Vue.js and a MySQL-backed REST API. Implemented enrollment, student profiles, webcam photo capture, batch PDF generation of QR-enabled ID cards, and self-evaluations with trend comparisons.',
    technologies: ['Laravel 12', 'PHP 8.2', 'Vue.js', 'MySQL', 'REST API'],
  },
  {
    title: 'E-commerce System (ShopHub)',
    role: 'Full-Stack Developer',
    period: '',
    description:
      'Built a full-stack e-commerce platform using a Laravel 12 RESTful JSON API and a Vue 3 single-page frontend. Implemented product search and filtering, a shopping cart, checkout with stock deduction, order history, wishlists, product reviews and user profiles.',
    technologies: ['Laravel 12', 'Vue 3', 'REST API'],
  },
  {
    title: 'Attendance Management System',
    role: 'Full-Stack Developer',
    period: '',
    description:
      'Architected an attendance platform for PNC using Laravel 10, Vue 3, TypeScript, MySQL and Redis caching. Developed RFID and fingerprint check-in, geofencing, role-based dashboards, reports and student risk monitoring. Integrated Telegram notifications, teacher timetable synchronization via an external API, and Excel/CSV exports. Containerized the application with Docker and deployed it to AWS EC2 through GitHub Actions CI/CD.',
    technologies: [
      'Laravel 10',
      'Vue 3',
      'TypeScript',
      'MySQL',
      'Redis',
      'Telegram Bot API',
      'Docker',
      'GitHub Actions',
      'AWS EC2',
    ],
  },
] satisfies MemberProjectSummary[];

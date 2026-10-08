import type { MemberProjectSummary } from '../../../../types/index.ts';
export const projects = [
  {
    title: 'Ty Khai TopUp — Game Top-Up Store',
    role: 'Full-Stack Developer',
    period: '2026 – Present',
    description:
      'Built a live game top-up store for Cambodia with game and package selection, Bakong KHQR payments and order tracking. Implemented automatic payment reconciliation, Google/email sign-in, guest checkout, a user wallet, referrals and daily missions. Designed 41 Prisma models, added rate limiting and input validation, and built admin tools for orders, games, customers, promo codes and resellers.',
    technologies: [
      'Next.js 16',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'NextAuth',
      'Tailwind CSS',
      'Upstash Redis',
      'Zod',
      'Bakong KHQR',
      'Vercel',
    ],
    repoUrl:
      'https://github.com/ChetDevelopment/Game-top-up-storefront-for-Cambodia',
    link: 'https://tykhai.vercel.app',
    caseStudyUrl: 'https://chetdeveloper.me/projects/ty-khai-topup',
  },
  {
    title: 'PNC Education System',
    role: 'Full-Stack Developer',
    period: 'July 2026',
    description:
      'Built an internal student lifecycle platform for enrollment, profiles, ID cards and evaluations. Implemented JWT authentication with role-based access, two-step Excel import for over 500 students, an enrollment state machine with an audit trail, webcam photo capture, batch PDF generation of QR ID cards and self-evaluation with trend comparison. Added 14 feature test suites.',
    technologies: ['Laravel 12', 'PHP 8.2', 'Vue.js', 'MySQL', 'JWT'],
    repositories: [
      {
        label: 'Frontend Repo',
        url: 'https://github.com/pnc-education-system/pnc-education-system',
      },
      {
        label: 'Backend Repo',
        url: 'https://github.com/pnc-education-system/pnc-education-system-api',
      },
    ],
    link: 'https://pnc.54.227.112.85.sslip.io/login',
    caseStudyUrl: 'https://chetdeveloper.me/projects/pnc-education-system',
  },
  {
    title: 'NEARLY — Khmer Heritage Marketplace',
    role: 'Full-Stack Developer',
    period: 'June 2026',
    description:
      'Built an online store for Khmer heritage products with a Laravel 12 REST API, Vue 3 customer storefront and Blade admin dashboard. Implemented product search and filters, cart, wishlist, checkout with tax and coupons, Bakong KHQR payments, stock deduction, order tracking with QR confirmation, reviews, token authentication and admin management across 41 API routes.',
    technologies: [
      'Laravel 12',
      'Vue 3',
      'MySQL',
      'Laravel Sanctum',
      'Tailwind CSS',
      'Bakong KHQR',
      'Swagger/OpenAPI',
      'Postman',
    ],
    repoUrl: 'https://github.com/ChetDevelopment/Full-Stack-E-commerce',
    caseStudyUrl: 'https://chetdeveloper.me/projects/nearly-ecommerce',
  },
  {
    title: 'Attendance Management System',
    role: 'Full-Stack Developer & Scrum Master',
    period: 'Feb 2026 – Apr 2026',
    description:
      'Built a PNC attendance platform and served as the team’s Scrum Master. Implemented RFID/fingerprint check-in, geofencing, role-based dashboards, student risk monitoring, Telegram notifications, teacher timetable synchronization through an external API and Excel/CSV reports. Containerized the application with Docker and deployed it to AWS EC2 using GitHub Actions CI/CD.',
    technologies: [
      'Laravel 10',
      'Vue 3',
      'TypeScript',
      'MySQL',
      'Redis',
      'Docker',
      'GitHub Actions',
      'AWS EC2',
    ],
    repoUrl: 'https://github.com/ChetDevelopment/Attendance-System',
    caseStudyUrl:
      'https://chetdeveloper.me/projects/attendance-management-system',
  },
  {
    title: 'MentorKhet — Mentor Management System',
    role: 'Backend Developer & Project Coordinator',
    period: 'May 2026 – June 2026',
    description:
      'Built a REST API matching mentees with mentors by skills, ratings and availability in a three-person team during a two-week sprint. Implemented session requests, acceptance, declines, completion, cancellation and no-shows; matching, password reset, a global authentication guard, and availability, skills and resources modules across 98 API routes. Wrote 150 end-to-end API tests with Jest and coordinated a 14-day sprint plan and task list.',
    technologies: [
      'NestJS',
      'TypeScript',
      'TypeORM',
      'MySQL',
      'JWT',
      'Jest',
      'Docker',
      'GitHub Actions',
      'Render',
    ],
    repoUrl: 'https://github.com/ChetDevelopment/Mentor-Management-System',
    link: 'https://mentor-management-api.onrender.com/api/v1/health',
    caseStudyUrl: 'https://chetdeveloper.me/projects/mentorkhet',
  },
  {
    title: 'PUC-IFL Enrollment & Academic System',
    role: 'Full-Stack Developer',
    period: 'Aug 2026 – Present',
    description:
      'Building an internal enrollment and academic management system for PUC-IFL. Developed online applications, placement tests with strict mode and a question bank, class division, QR invitations, QR attendance and schedules. Added real-time notifications, password reset and mobile layout fixes. Source code and live access are private workplace resources.',
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
    caseStudyUrl: 'https://chetdeveloper.me/projects/puc-enrollment-system',
  },
] satisfies MemberProjectSummary[];

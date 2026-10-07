import type { MemberProjectSummary } from '../../../../types/index.ts';

export const projects = [
  {
    title: 'Travel Map',
    role: 'Developer',
    period: '12 August 2026 – 14 August 2026',
    description:
      'Built a travel application with trip management and travel journals. Used React, Leaflet, and Zustand for the interface, maps, and persistent state.',
    technologies: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Firebase',
      'Leaflet',
      'Zustand',
      'Framer Motion',
      'Vite',
    ],
    link: 'https://travel-map-eight-neon.vercel.app/',
    repoUrl: 'https://github.com/reaksmey27/TravelMap',
  },
  {
    title: 'Student Leave Management System',
    role: 'Developer',
    period: '03 July 2026 – 30 July 2026',
    description:
      'Built leave request dashboards with REST API integration. Collaborated with the team via Git/GitHub.',
    technologies: [
      'TypeScript',
      'Vue.js',
      'Laravel',
      'MySQL',
      'Postman',
      'GitHub',
    ],
    repositories: [
      {
        label: 'Frontend Repo',
        url: 'https://github.com/G10-SLMS/G10-SLMS-FRONT',
      },
      {
        label: 'Backend Repo',
        url: 'https://github.com/G10-SLMS/G10-SLMS-BACK',
      },
    ],
  },
  {
    title: 'Full Stack E-Commerce Website',
    role: 'Developer',
    period: '19 June 2026 – 30 June 2026',
    description:
      'Built user/admin dashboards with Vue.js and Laravel. Implemented CRUD, REST APIs, and MySQL features.',
    technologies: [
      'Vue.js',
      'JavaScript',
      'Laravel',
      'MySQL',
      'Postman',
      'GitHub',
    ],
    repositories: [
      {
        label: 'Frontend Repo',
        url: 'https://github.com/reaksmey27/Online_Shop_frontend',
      },
      {
        label: 'Backend Repo',
        url: 'https://github.com/reaksmey27/Online_Shop_Backend',
      },
    ],
  },
  {
    title: 'Nike Shoes Shop',
    role: 'UX/UI Designer',
    period: '13 May 2026 – 14 May 2026',
    description:
      'Designed a modern sneaker e-commerce interface. Created reusable UI components and interactive prototypes.',
    technologies: ['Figma'],
    link: 'https://www.figma.com/proto/1wLpEOyYMULf5jzfQgkHC2/shop?page-id=0%3A1&node-id=1-5&p=f&viewport=421%2C358%2C0.07&t=ISH3S6KtpKxCHRAh-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A5',
  },
  {
    title: 'PNC Student Star',
    repoUrl: 'https://github.com/sir-phy/pnc_student_star',
    role: 'Developer',
    period: '16 Feb 2026 – 4 April 2026',
    description:
      'Built frontend interfaces and REST APIs for student evaluation. Collaborated in an Agile team using Git and GitHub.',
    technologies: [
      'TypeScript',
      'React.js',
      'Node.js',
      'Express.js',
      'Tailwind CSS',
      'MySQL',
      'Postman',
      'GitHub',
    ],
  },
  {
    title: 'CineMAX Movies',
    role: 'UX/UI & Developer',
    period: '01 Feb 2026 – 22 Feb 2026',
    description:
      'Built responsive user interfaces with React.js and consumed third-party REST APIs (TMDB).',
    technologies: [
      'Figma',
      'React.js',
      'JavaScript',
      'Tailwind',
      'Firebase',
      'TMDB',
      'GitHub',
    ],
    repoUrl: 'https://github.com/reaksmey27/Movie-Website',
    link: 'https://movie-website-five-orpin.vercel.app/',
  },
] satisfies MemberProjectSummary[];

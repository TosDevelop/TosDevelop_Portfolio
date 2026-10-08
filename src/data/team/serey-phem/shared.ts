import type { SharedTeamMember } from '../types.ts';

export const shared = {
  category: ['Development'],
  image: new URL('../../../assets/team/phem_serey.jpg', import.meta.url).href,
  contact: {
    email: 'sereyphem02@gmail.com',
    phone: '+855 97 327 2951',
    location: 'Phnom Penh, Cambodia',
    linkedin: 'https://www.linkedin.com/in/serey-phem/',
    github: 'https://github.com/Serey002',
    cvUrl: '/src/assets/cv/Serey-PHEM-Web-Developer-Intern.pdf',
  },
  technicalSkills: [
    {
      category: 'Frontend Development',
      skills: [
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'TypeScript',
        },
        {
          name: 'Vue.js',
        },
        {
          name: 'Angular CLI',
        },
        {
          name: 'Tailwind CSS',
        },
        {
          name: 'Bootstrap',
        },
        {
          name: 'Responsive Web Design',
        },
      ],
    },
    {
      category: 'Backend & APIs',
      skills: [
        {
          name: "Kotlin"
        },
        {
          name: "Spring Boot"
        },
        {
          name: 'PHP',
        },
        {
          name: 'Laravel',
        },
        {
          name: 'Node.js',
        },
        {
          name: 'NestJS',
        },
        {
          name: 'REST API',
        },
        {
          name: 'JWT',
        },
        {
          name: 'Laravel Sanctum',
        },
      ],
    },
    {
      category: 'Databases',
      skills: [
        {
          name: 'MySQL',
        },
        {
          name: 'PostgreSQL',
        },
        {
          name: 'MongoDB',
        },
        {
          name: 'Prisma',
        },
        {
          name: 'TypeORM',
        },
      ],
    },
    {
      category: 'Development & Collaboration Tools',
      skills: [
        {
          name: 'Git',
        },
        {
          name: 'GitHub',
        },
        {
          name: 'Jira',
        },
        {
          name: 'Postman',
        },
      ],
    },
    {
      category: 'Design Tools',
      skills: [
        {
          name: 'Figma',
        },
      ],
    },
    {
      category: 'Testing & QA',
      skills: [
        {
          name: 'Functional Testing',
        },
        {
          name: 'API Testing',
        },
        {
          name: 'Debugging',
        },
      ],
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        {
          name: 'AWS EC2',
        },
        {
          name: 'GitHub Actions',
        },
        {
          name: 'Vercel',
        },
        {
          name: 'Apache',
        },
        {
          name: 'Ubuntu Debian',
        },
      ],
    },
    {
      category: 'Integrations & Real-time Services',
      skills: [
        {
          name: 'Laravel Reverb',
        },
        {
          name: 'Telegram Bot API',
        },
      ],
    },
  ],
} satisfies SharedTeamMember;

import type { SharedTeamMember } from '../types.ts';
export const shared = {
  lookingFor: ['Full-time', 'Part-time', 'Contract'],
  category: ['Development', 'QA', 'Infrastructure'],
  contact: {
    email: 'satvichetnice1@gmail.com',
    phone: '+855 97 242 6374',
    location: 'Sen Sok, Phnom Penh, Cambodia',
    portfolio: 'https://chetdeveloper.me',
    github: 'https://github.com/ChetDevelopment',
    linkedin: 'https://www.linkedin.com/in/vichet-sat/',
    facebook: 'https://www.facebook.com/khun.chet.588786',
    cvUrl: new URL('../../../assets/cv/vichet-sat-cv.pdf', import.meta.url)
      .href,
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
          name: 'Next.js',
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
          name: 'Redis',
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
          name: 'Automated Testing',
        },
        {
          name: 'Jest',
        },
        {
          name: 'Playwright',
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
          name: 'Docker',
        },
        {
          name: 'GitHub Actions',
        },
        {
          name: 'Vercel',
        },
        {
          name: 'Render',
        },
        {
          name: 'Apache',
        },
        {
          name: 'Ubuntu',
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
        {
          name: 'Bakong KHQR',
        },
      ],
    },
  ],
  image: new URL('../../../assets/team/sat_vichet.jpg', import.meta.url).href,
} satisfies SharedTeamMember;

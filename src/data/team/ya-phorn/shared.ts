import type { SharedTeamMember } from '../types.ts';

export const shared = {
  lookingFor: ['Full-time', 'Part-time', 'Contract'],
  category: ['Development', 'QA', 'Infrastructure'],
  contact: {
    cvUrl: new URL('../../../assets/cv/ya-phorn-cv.pdf', import.meta.url).href,
    email: 'phornya26@gmail.com',
    phone: '+855 71 815 1315',
    location: 'Sen Sok, Phnom Penh, Cambodia',
    portfolio: 'https://ya-server.site/',
    github: 'https://github.com/phorn-ya',
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
          name: 'Vue.js',
        },
        {
          name: 'React.js',
        },
        {
          name: 'Tailwind CSS',
        },
        {
          name: 'Bootstrap',
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
          name: 'REST API',
        },
        {
          name: 'TypeScript',
        },
      ],
    },
    {
      category: 'Databases & Services',
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
          name: 'Firebase',
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
        {
          name: 'Microsoft 365',
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
          name: 'Apache',
        },
        {
          name: 'Ubuntu',
        },
        {
          name: 'DNS Management',
        },
      ],
    },
  ],
  image: new URL('../../../assets/team/phorn_ya.jpg', import.meta.url).href,
} satisfies SharedTeamMember;

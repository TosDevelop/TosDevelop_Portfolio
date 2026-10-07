import type { SharedTeamMember } from '../types.ts';

export const shared = {
  category: ['Development'],
  image: new URL('../../../assets/team/phorn_ya.jpg', import.meta.url).href,
  contact: {
    email: 'phornya26@gmail.com',
    phone: '+855 71 815 1315',
    location: 'Phnom Penh, Cambodia',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    cvUrl: '#',
  },
  technicalSkills: [
    {
      category: 'Frontend',
      skills: [
        {
          name: 'Vue.js',
          color: 'emerald',
        },
        {
          name: 'Nuxt.js',
          color: 'teal',
        },
        {
          name: 'React.js',
          color: 'sky',
        },
        {
          name: 'JavaScript',
          color: 'amber',
        },
        {
          name: 'Bootstrap 5',
          color: 'indigo',
        },
        {
          name: 'Tailwind CSS',
          color: 'cyan',
        },
        {
          name: 'HTML',
          color: 'orange',
        },
        {
          name: 'CSS',
          color: 'blue',
        },
        {
          name: 'SASS',
          color: 'pink',
        },
      ],
    },
    {
      category: 'Backend',
      skills: [
        {
          name: 'Laravel',
          color: 'red',
        },
        {
          name: 'Node.js',
          color: 'green',
        },
        {
          name: 'Python',
          color: 'amber',
        },
        {
          name: 'Flask',
          color: 'slate',
        },
        {
          name: 'Django',
          color: 'emerald',
        },
        {
          name: 'PHP',
          color: 'indigo',
        },
        {
          name: 'TypeScript OOP',
          color: 'blue',
        },
      ],
    },
    {
      category: 'Data & Services',
      skills: [
        {
          name: 'MySQL',
          color: 'sky',
        },
        {
          name: 'SQLite',
          color: 'blue',
        },
        {
          name: 'PostgreSQL',
          color: 'indigo',
        },
        {
          name: 'Firebase',
          color: 'amber',
        },
        {
          name: 'Power BI',
          color: 'yellow',
        },
      ],
    },
    {
      category: 'Cloud & Tools',
      skills: [
        {
          name: 'GitHub',
          color: 'slate',
        },
        {
          name: 'Git',
          color: 'orange',
        },
        {
          name: 'Jira',
          color: 'blue',
        },
        {
          name: 'Postman',
          color: 'orange',
        },
        {
          name: 'AWS EC2',
          color: 'amber',
        },
        {
          name: 'Linux',
          color: 'yellow',
        },
        {
          name: 'CloudFlare',
          color: 'orange',
        },
        {
          name: 'Figma',
          color: 'purple',
        },
        {
          name: 'Netlify',
          color: 'teal',
        },
        {
          name: 'Vercel',
          color: 'slate',
        },
      ],
    },
  ],
} satisfies SharedTeamMember;

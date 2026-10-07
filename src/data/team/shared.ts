import type { TeamMember } from '../../types/index.ts';
import type { TEAM_EN, TeamMemberEnglish } from './en.ts';

type SharedTeamMember = Omit<
  TeamMember,
  'id' | keyof TeamMemberEnglish | `${string}Km`
>;

export const TEAM_SHARED = {
  'ya-phorn': {
    category: ['Development'],
    image: new URL('../../assets/team/phorn_ya.jpg', import.meta.url).href,
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
  },
  'vichet-sat': {
    category: ['Planning', 'Development'],
    image: new URL('../../assets/team/sat_vichet.jpg', import.meta.url).href,
    contact: {
      email: 'vichet77@gmail.com',
      phone: '+855 88 912 345',
      location: 'Phnom Penh, Cambodia',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      cvUrl: '#',
    },
    technicalSkills: [
      {
        category: 'Planning & Management',
        skills: [
          {
            name: 'Jira',
          },
          {
            name: 'Trello',
          },
          {
            name: 'Figma',
          },
          {
            name: 'Git Workflow',
          },
        ],
      },
      {
        category: 'Web Development',
        skills: [
          {
            name: 'React.js',
          },
          {
            name: 'Laravel',
          },
          {
            name: 'PHP',
          },
          {
            name: 'JavaScript',
          },
          {
            name: 'MySQL',
          },
        ],
      },
    ],
  },
  'serey-phem': {
    category: ['Development'],
    image: new URL('../../assets/team/phem_serey.jpg', import.meta.url).href,
    contact: {
      email: 'serey.phem1800@gmail.com',
      phone: '+855 96 789 012',
      location: 'Phnom Penh, Cambodia',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      cvUrl: '#',
    },
    technicalSkills: [
      {
        category: 'Development',
        skills: [
          {
            name: 'React.js',
          },
          {
            name: 'Laravel',
          },
          {
            name: 'Python',
          },
          {
            name: 'REST API',
          },
          {
            name: 'MySQL',
          },
          {
            name: 'Tailwind CSS',
          },
        ],
      },
    ],
  },
  'reaksmey-san': {
    category: ['Development', 'QA'],
    image: new URL('../../assets/team/reaksmey_san.jpg', import.meta.url).href,
    contact: {
      email: 'reaksmeysan.official@gmail.com',
      phone: '+855 96 2557 286',
      location: 'Phnom Penh, Cambodia',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      cvUrl: '#',
    },
    technicalSkills: [
      {
        category: 'Quality Assurance',
        skills: [
          {
            name: 'Manual Testing',
          },
          {
            name: 'Postman',
          },
          {
            name: 'Test Case Design',
          },
          {
            name: 'Bug Tracking',
          },
          {
            name: 'Figma',
          },
          {
            name: 'Git',
          },
        ],
      },
    ],
  },
  'sokha-rathana': {
    category: ['Development'],
    image: new URL('../../assets/team/sokha_rathana.jpg', import.meta.url).href,
    contact: {
      email: 'rathana.sokha011@gmail.com',
      phone: '+855 97 123 456',
      location: 'Phnom Penh, Cambodia',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      cvUrl: '#',
    },
    technicalSkills: [
      {
        category: 'Software & Data',
        skills: [
          {
            name: 'JavaScript',
          },
          {
            name: 'Node.js',
          },
          {
            name: 'MySQL',
          },
          {
            name: 'SQL Server',
          },
          {
            name: 'HTML/CSS',
          },
        ],
      },
    ],
  },
} satisfies Record<keyof typeof TEAM_EN, SharedTeamMember>;

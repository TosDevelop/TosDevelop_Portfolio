import type { SharedTeamMember } from '../types.ts';

export const shared = {
  category: ['Development'],
  image: new URL('../../../assets/team/sokha_rathana.jpg', import.meta.url)
    .href,
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
} satisfies SharedTeamMember;

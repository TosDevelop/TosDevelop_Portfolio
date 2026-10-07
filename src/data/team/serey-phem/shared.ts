import type { SharedTeamMember } from '../types.ts';

export const shared = {
  category: ['Development'],
  image: new URL('../../../assets/team/phem_serey.jpg', import.meta.url).href,
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
} satisfies SharedTeamMember;

import type { SharedTeamMember } from '../types.ts';

export const shared = {
  category: ['Planning', 'Development'],
  image: new URL('../../../assets/team/sat_vichet.jpg', import.meta.url).href,
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
} satisfies SharedTeamMember;

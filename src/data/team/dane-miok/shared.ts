import type { SharedTeamMember } from '../types.ts';

export const shared = {
  lookingFor: ['Full-time', 'Part-time', 'Contract'],
  category: ['Development'],
  image: new URL('../../../assets/team/miok_dane.png', import.meta.url).href,
  contact: {
    cvUrl: new URL('../../../assets/cv/miok-dane-cv.pdf', import.meta.url).href,
    email: 'miokdane2006@gmail.com',
    phone: '+855 81 634 649',
    location: 'Sangkat Tek Thla, Khan Sen Sok, Phnom Penh, Cambodia',
    portfolio: 'https://portfolio.dane-website.online/',
    github: 'https://github.com/Danemiok',
    linkedin: 'https://www.linkedin.com/in/dane-miok-2789563a2/',
  },
  technicalSkills: [
    {
      category: 'Frontend',
      skills: ['JavaScript', 'Vue.js', 'React.js'].map((name) => ({ name })),
    },
    {
      category: 'Backend & APIs',
      skills: [
        'PHP',
        'Laravel',
        'Node.js',
        'Express.js',
        'Python',
        'REST APIs',
        'TypeScript',
      ].map((name) => ({ name })),
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'PostgreSQL'].map((name) => ({ name })),
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'TypeORM'].map((name) => ({ name })),
    },
    { category: 'Operating Systems', skills: [{ name: 'Linux' }] },
  ],
} satisfies SharedTeamMember;

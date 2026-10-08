import type { SharedTeamMember } from '../types.ts';
export const shared = {
  category: ['Development', 'QA', 'Infrastructure'],
  image: new URL('../../../assets/team/sat_vichet.jpg', import.meta.url).href,
  contact: {
    email: 'satvichetnice1@gmail.com',
    phone: '+855 97 242 6374',
    location: 'Sen Sok, Phnom Penh, Cambodia',
    portfolio: 'https://chetdeveloper.me',
    github: 'https://github.com/ChetDevelopment',
  },
  technicalSkills: [
    {
      category: 'Frontend Development',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Vue.js',
        'Tailwind CSS',
        'Bootstrap',
      ].map((name) => ({ name })),
    },
    {
      category: 'Backend & APIs',
      skills: ['PHP', 'Laravel', 'Node.js', 'REST API', 'TypeScript'].map(
        (name) => ({ name }),
      ),
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MongoDB'].map((name) => ({ name })),
    },
    {
      category: 'Development & Collaboration Tools',
      skills: ['Git', 'GitHub', 'Jira', 'Postman'].map((name) => ({ name })),
    },
    { category: 'Design Tools', skills: [{ name: 'Figma' }] },
    {
      category: 'Testing & QA',
      skills: [
        'Functional Testing',
        'API Testing',
        'Debugging',
        'Automated Testing',
      ].map((name) => ({ name })),
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS EC2', 'Apache', 'Ubuntu'].map((name) => ({ name })),
    },
  ],
} satisfies SharedTeamMember;

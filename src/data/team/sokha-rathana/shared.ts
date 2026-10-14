import type { SharedTeamMember } from '../types.ts';
export const shared = {
  lookingFor: ['Full-time', 'Part-time', 'Contract'],
  category: ['Development'],
  contact: {
    email: 'rathanasokha26@gmail.com',
    phone: '+855 88 992 0309',
    location: 'Phnom Penh, Cambodia',
    portfolio: 'https://my-portfolio-sooty-sigma-90.vercel.app/',
    github: 'https://github.com/Rathana-SOKHA',
    linkedin: 'https://www.linkedin.com/in/rathana-sokha-61754b406/',
    telegram: 'https://t.me/rathana_sokha',
  },
  technicalSkills: [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'Vue.js' },
        { name: 'React.js' },
        { name: 'Tailwind CSS' },
        { name: 'Responsive Web Design' },
      ],
    },
    {
      category: 'Backend & APIs',
      skills: [
        { name: 'PHP' },
        { name: 'Laravel' },
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'Python' },
        { name: 'FastAPI (learning)' },
        { name: 'REST API Development & Integration' },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL' },
        { name: 'MongoDB' },
        { name: 'PostgreSQL' },
        { name: 'SQL' },
      ],
    },
    {
      category: 'Development Tools',
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'Postman' },
        { name: 'VS Code' },
        { name: 'Docker' },
      ],
    },
    {
      category: 'Testing & QA',
      skills: [{ name: 'API Testing with Postman' }],
    },
    {
      category: 'UI/UX Design',
      skills: [{ name: 'Figma' }, { name: 'UI Design Fundamentals' }],
    },
    {
      category: 'AI Tools',
      skills: [{ name: 'ChatGPT' }, { name: 'Gemini' }, { name: 'Claude' }],
    },
  ],
  image: new URL('../../../assets/team/sokha_rathana.jpg', import.meta.url)
    .href,
} satisfies SharedTeamMember;

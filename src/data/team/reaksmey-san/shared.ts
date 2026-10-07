import type { SharedTeamMember } from '../types.ts';

export const shared = {
  image: new URL('../../../assets/team/reaksmey_san.jpg', import.meta.url).href,
  category: ['Development', 'UI/UX', 'QA'],
  contact: {
    email: 'reaksmeysan.official@gmail.com',
    phone: '+855 96 255 7286',
    location: 'Phnom Penh, Cambodia',
    portfolio: 'https://smey-dev.site',
    github: 'https://github.com/reaksmey27',
    linkedin:
      'https://www.linkedin.com/in/reaksmey-san-354472399/?isSelfProfile=true',
    cvUrl: new URL('../../../assets/cv/reaksmey-san-cv.pdf', import.meta.url)
      .href,
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
        { name: 'Bootstrap' },
        { name: 'Responsive Web Design' },
      ],
    },
    {
      category: 'Backend & APIs',
      skills: [
        { name: 'PHP' },
        { name: 'Laravel' },
        { name: 'Python' },
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'REST API Integration' },
        { name: 'OAuth' },
      ],
    },
    {
      category: 'Databases',
      skills: [{ name: 'MySQL' }, { name: 'SQL' }, { name: 'Firebase' }],
    },
    {
      category: 'Development Tools',
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'Postman' },
        { name: 'Jenkins' },
      ],
    },
    {
      category: 'Testing & QA',
      skills: [{ name: 'Playwright' }],
    },
    {
      category: 'UI/UX Design',
      skills: [
        { name: 'Figma' },
        { name: 'UI Design' },
        { name: 'Prototyping' },
      ],
    },
    {
      category: 'AI Tools',
      skills: [{ name: 'ChatGPT' }, { name: 'Claude' }, { name: 'Gemini' }],
    },
  ],
} satisfies SharedTeamMember;

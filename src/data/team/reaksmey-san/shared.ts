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
      category: 'Web Development',
      skills: [
        {
          name: 'PHP',
        },
        {
          name: 'Laravel',
        },
        {
          name: 'HTML5',
        },
        {
          name: 'CSS3',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'Python',
        },
        {
          name: 'MySQL',
        },
        {
          name: 'SQL',
        },
        {
          name: 'Firebase',
        },
        {
          name: 'REST API Integration',
        },
        {
          name: 'Postman',
        },
        {
          name: 'Vue.js',
        },
        {
          name: 'React.js',
        },
        {
          name: 'Node.js',
        },
        {
          name: 'Express.js',
        },
        {
          name: 'Git',
        },
        {
          name: 'GitHub',
        },
        {
          name: 'Tailwind CSS',
        },
        {
          name: 'Bootstrap',
        },
        {
          name: 'Responsive Web Design',
        },
        {
          name: 'Figma',
        },
        {
          name: 'UI Design',
        },
        {
          name: 'Prototyping',
        },
        {
          name: 'ChatGPT',
        },
        {
          name: 'Claude',
        },
        {
          name: 'Gemini',
        },
      ],
    },
  ],
} satisfies SharedTeamMember;

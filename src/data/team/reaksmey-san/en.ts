import type { TeamMemberEnglish } from '../types.ts';

export const en = {
  name: 'Reaksmey San',
  role: 'Web Developer Intern',
  badge: 'Web Development · UI/UX · QA',
  tagline:
    'Motivated Web Programming student focused on building clean, responsive, user-friendly web applications.',
  bio: 'Motivated Web Programming student with hands-on experience building responsive web applications using React.js, Vue.js, JavaScript, HTML, CSS, and Tailwind CSS. Skilled in REST APIs, CRUD, MySQL, Node.js, Laravel, Git/GitHub, and Postman. Passionate about creating clean, user-friendly applications and continuously learning modern web technologies.',
  languages: [
    {
      language: 'Khmer',
      level: 'Native',
    },
    {
      language: 'English',
      level: 'Intermediate',
    },
  ],
  softSkills: [
    'Team Collaboration',
    'Problem Solving',
    'Communication',
    'Time Management',
    'Attention to Detail',
    'Adaptability',
    'Fast Learner',
  ],
  experience: [
    {
      role: 'Web/Mobile Developer Intern',
      company: 'SAEROSOFT INC.',
      period: 'Aug 2026 – Present',
      type: 'Internship',
      description: 'Web/mobile development internship experience.',
      technologies: ['Web Development'],
    },
  ],
  education: [
    {
      degree: 'Associate Degree in Web Programming',
      institution: 'Passerelles Numériques Cambodia (PNC)',
      period: '2025 – Present',
    },
    {
      degree: 'High School Diploma',
      institution: 'Rovieng High School',
      period: '2022 – 2024',
    },
  ],
  selectedProjects: [
    {
      title: 'Full Stack E-Commerce Website',
      role: 'Developer',
      period: '19 June 2026 – 30 June 2026',
      description:
        'Built user/admin dashboards with Vue.js and Laravel. Implemented CRUD, REST APIs, and MySQL features.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Postman', 'GitHub'],
    },
    {
      title: 'Student Leave Management System',
      role: 'Developer',
      period: '03 July 2026 – 30 July 2026',
      description:
        'Built leave request dashboards with REST API integration. Collaborated with the team via Git/GitHub.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Postman', 'GitHub'],
    },
    {
      title: 'CineMAX Movies',
      role: 'UX/UI & Developer',
      period: '01 Feb 2026 – 22 Feb 2026',
      description:
        'Built responsive user interfaces with React.js and consumed third-party REST APIs (TMDB).',
      technologies: ['Figma', 'React.js', 'Tailwind', 'TMDB', 'GitHub'],
    },
  ],
} satisfies TeamMemberEnglish;

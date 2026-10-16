import { projects } from './projects/en.ts';
import type { TeamMemberEnglish } from '../types.ts';
export const en = {
  name: 'Rathana Sokha',
  role: 'Enterprise Applications & Software Development Engineer',
  tagline:
    'Software development professional focused on building practical applications and improving business workflows.',
  badge: 'Software Developer',
  bio: 'Enterprise Applications & Software Development Engineer and Web Programming student at Passerelles Numériques Cambodia (PNC). Hands-on experience with Vue.js, JavaScript, React.js, PHP, Laravel, Node.js, REST APIs, and MySQL. Has worked on full-stack applications involving authentication, role-based access control, CRUD workflows, and database integration. Interested in developing reliable business applications, learning enterprise systems, and solving real operational problems through software.',
  languages: [
    { language: 'Khmer', level: 'Native' },
    { language: 'English', level: 'Intermediate' },
  ],
  softSkills: [
    'Team Collaboration',
    'Problem Solving',
    'Communication',
    'Time Management',
    'Attention to Detail',
    'Adaptability',
    'Fast Learner',
    'Requirements Understanding',
    'Troubleshooting',
    'Continuous Learning',
  ],
  experience: [
    {
      role: 'Enterprise Applications & Software Development Engineer',
      company: 'The Luminix Co., Ltd.',
      period: '1 September 2026 – Present',
      type: 'Internship',
      description:
        'Supporting enterprise application workflows, software development tasks, and technical research under team supervision. Research and onboarding work focuses on hospitality systems and enterprise applications.',
      technologies: ['Web Development'],
    },
  ],
  education: [
    {
      degree: 'Web Programming Studies',
      institution: 'Passerelles Numériques Cambodia (PNC)',
      period: '2025 – Present',
      details:
        'Full-stack web development, frontend and backend development, databases, APIs, and team software projects.',
    },
    {
      degree: 'High School Diploma',
      institution: 'Phnom Kravanh High School',
      period: '2024',
    },
  ],
  additionalLearning: [
    'Proofpoint Partner certificate and other technology partner training certificates.',
    'Enterprise hospitality systems, including OPERA Cloud and POS workflows, partner enablement, and software development.',
  ],
  selectedProjects: projects,
} satisfies TeamMemberEnglish;

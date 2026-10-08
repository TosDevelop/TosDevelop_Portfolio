import type { ExpertiseDomain } from '../../types/index.ts';
import { EXPERTISE_EN } from './en.ts';

type SharedExpertiseDomain = Pick<
  ExpertiseDomain,
  'iconName' | 'technologies' | 'relatedMemberIds'
>;

export const EXPERTISE_SHARED = {
  'frontend-development': {
    iconName: 'Layout',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Vue.js',
      'Nuxt.js',
      'Tailwind CSS',
      'Bootstrap',
      'SASS',
    ],
    relatedMemberIds: [
      'ya-phorn',
      'vichet-sat',
      'serey-phem',
      'reaksmey-san',
      'sokha-rathana',
    ],
  },
  'backend-apis': {
    iconName: 'Server',
    technologies: [
      'PHP',
      'Python',
      'Node.js',
      'Laravel',
      'Express.js',
      'Flask',
      'Django',
      'REST API',
      'OAuth',
    ],
    relatedMemberIds: [
      'ya-phorn',
      'vichet-sat',
      'serey-phem',
      'reaksmey-san',
      'sokha-rathana',
    ],
  },
  'databases-data': {
    iconName: 'Database',
    technologies: [
      'SQL',
      'MySQL',
      'PostgreSQL',
      'SQLite',
      'SQL Server',
      'Firebase',
      'Power BI',
    ],
    relatedMemberIds: [
      'ya-phorn',
      'vichet-sat',
      'serey-phem',
      'reaksmey-san',
      'sokha-rathana',
    ],
  },
  'ui-ux-design': {
    iconName: 'Palette',
    technologies: ['Figma', 'UI Design', 'Prototyping'],
    relatedMemberIds: ['reaksmey-san', 'ya-phorn', 'vichet-sat'],
  },
  'quality-assurance': {
    iconName: 'ShieldCheck',
    technologies: ['Playwright', 'Postman'],
    relatedMemberIds: ['reaksmey-san', 'ya-phorn'],
  },
  'collaboration-planning': {
    iconName: 'CalendarCheck',
    technologies: ['Git', 'GitHub', 'Jira', 'Trello'],
    relatedMemberIds: ['vichet-sat', 'ya-phorn', 'reaksmey-san'],
  },
  'deployment-delivery': {
    iconName: 'Cloud',
    technologies: [
      'AWS EC2',
      'Linux',
      'Cloudflare',
      'Netlify',
      'Vercel',
      'Jenkins',
    ],
    relatedMemberIds: ['ya-phorn', 'reaksmey-san'],
  },
  'ai-assisted-development': {
    iconName: 'Sparkles',
    technologies: ['ChatGPT', 'Claude', 'Gemini'],
    relatedMemberIds: ['reaksmey-san'],
  },
} satisfies Record<keyof typeof EXPERTISE_EN, SharedExpertiseDomain>;

export interface TechBadgeItem {
  name: string;
  category: string;
  color: string;
  icon?: string;
}

// Keep the homepage technology strip consistent with the expertise categories.
export const ALL_TECH_BADGES: TechBadgeItem[] = Object.entries(
  EXPERTISE_SHARED,
).flatMap(([id, domain]) =>
  domain.technologies.map((name) => ({
    name,
    category: EXPERTISE_EN[id as keyof typeof EXPERTISE_EN].title,
    color: 'text-blue-600 dark:text-blue-400',
  })),
);

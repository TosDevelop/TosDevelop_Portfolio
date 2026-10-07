import type { ExpertiseDomain } from '../../types/index.ts';
import type { EXPERTISE_EN, ExpertiseDomainEnglish } from './en.ts';

type SharedExpertiseDomain = Omit<
  ExpertiseDomain,
  'id' | keyof ExpertiseDomainEnglish | `${string}Km`
>;

export const EXPERTISE_SHARED = {
  'full-stack-development': {
    iconName: 'Layers',
    technologies: [
      'React.js',
      'Vue.js',
      'Next.js',
      'Laravel',
      'Node.js',
      'MySQL',
      'PostgreSQL',
    ],
    relatedMemberIds: [
      'chhea-chhouy',
      'sokchea-boy',
      'seang-meng-chheun',
      'kin-doung',
    ],
  },
  'quality-assurance': {
    iconName: 'ShieldCheck',
    technologies: ['Manual Testing', 'POS', 'Figma', 'Git'],
    relatedMemberIds: ['bunyoung-hean'],
  },
  'planning-team-delivery': {
    iconName: 'CalendarCheck',
    technologies: ['Jira', 'GitHub', 'Figma'],
    relatedMemberIds: ['kin-doung', 'chhea-chhouy'],
  },
  'data-reporting': {
    iconName: 'BarChart3',
    technologies: ['SQL Server', 'MySQL', 'PostgreSQL', 'Power BI'],
    relatedMemberIds: ['darin-hoy', 'chhea-chhouy'],
  },
  'cloud-infrastructure': {
    iconName: 'Cloud',
    technologies: ['AWS', 'Linux', 'Docker', 'Kubernetes', 'Git'],
    relatedMemberIds: ['leader-din', 'chhea-chhouy'],
  },
  'roaming-interconnection': {
    iconName: 'Radio',
    technologies: ['Automation', 'Linux', 'Docker', 'Kubernetes'],
    relatedMemberIds: ['leader-din'],
  },
} satisfies Record<keyof typeof EXPERTISE_EN, SharedExpertiseDomain>;

export interface TechBadgeItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Tooling';
  color: string;
  icon?: string;
}

export const ALL_TECH_BADGES: TechBadgeItem[] = [
  { name: 'React.js', category: 'Frontend', color: 'text-sky-500' },
  {
    name: 'Next.js',
    category: 'Frontend',
    color: 'text-slate-900 dark:text-white',
  },
  { name: 'TypeScript', category: 'Frontend', color: 'text-blue-500' },
  { name: 'JavaScript', category: 'Frontend', color: 'text-amber-500' },
  { name: 'Material UI', category: 'Frontend', color: 'text-blue-600' },
  { name: 'Framer Motion', category: 'Frontend', color: 'text-purple-500' },
  { name: 'Vue.js', category: 'Frontend', color: 'text-emerald-500' },
  { name: 'Laravel', category: 'Backend', color: 'text-red-500' },
  { name: 'PHP', category: 'Backend', color: 'text-indigo-500' },
  { name: 'Python', category: 'Backend', color: 'text-amber-600' },
  { name: 'Node.js', category: 'Backend', color: 'text-green-600' },
  { name: 'MySQL', category: 'Database', color: 'text-sky-600' },
  { name: 'PostgreSQL', category: 'Database', color: 'text-indigo-600' },
  { name: 'SQL Server', category: 'Database', color: 'text-red-600' },
  { name: 'Figma', category: 'Tooling', color: 'text-rose-500' },
  {
    name: 'GitHub',
    category: 'Tooling',
    color: 'text-slate-800 dark:text-slate-200',
  },
  { name: 'Postman', category: 'Tooling', color: 'text-orange-500' },
  { name: 'AWS', category: 'DevOps', color: 'text-amber-500' },
  { name: 'Docker', category: 'DevOps', color: 'text-blue-500' },
  { name: 'Kubernetes', category: 'DevOps', color: 'text-blue-600' },
  { name: 'Linux', category: 'DevOps', color: 'text-yellow-600' },
  { name: 'Tailwind CSS', category: 'Frontend', color: 'text-cyan-500' },
];

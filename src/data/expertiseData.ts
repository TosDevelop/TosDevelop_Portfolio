import { ExpertiseDomain } from '@/types/index';

export const EXPERTISE_DOMAINS: ExpertiseDomain[] = [
  {
    id: 'full-stack-development',
    title: 'Full Stack Development',
    titleKm: 'ការអភិវឌ្ឍន៍ Full Stack',
    description:
      'Frontend, backend, APIs, authentication, databases and deployment for practical web systems.',
    descriptionKm:
      'Frontend, backend, APIs, ការផ្ទៀងផ្ទាត់សិទ្ធិ, មូលដ្ឋានទិន្នន័យ និងការដាក់ឱ្យដំណើរការសម្រាប់ប្រព័ន្ធគេហទំព័រជាក់ស្តែង។',
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
  {
    id: 'quality-assurance',
    title: 'Quality Assurance',
    titleKm: 'ការធានាគុណភាព (QA)',
    description:
      'Manual testing, functional testing, regression, UAT, test cases and defect validation.',
    descriptionKm:
      'ការធ្វើតេស្តដោយដៃ, ការធ្វើតេស្តមុខងារ, ការធ្វើតេស្តតប, UAT, ករណីធ្វើតេស្ត និងការផ្ទៀងផ្ទាត់បញ្ហាកំហុស។',
    iconName: 'ShieldCheck',
    technologies: ['Manual Testing', 'POS', 'Figma', 'Git'],
    relatedMemberIds: ['bunyoung-hean'],
  },
  {
    id: 'planning-team-delivery',
    title: 'Planning & Team Delivery',
    titleKm: 'ការរៀបចំផែនការ និងការដឹកនាំក្រុម',
    description:
      'Requirements support, project planning, task coordination and collaborative delivery practices.',
    descriptionKm:
      'ការគាំទ្រតម្រូវការ, ការរៀបចំផែនការគម្រោង, ការសម្របសម្រួលភារកិច្ច និងការអនុវត្តការងារជាក្រុម។',
    iconName: 'CalendarCheck',
    technologies: ['Jira', 'GitHub', 'Figma'],
    relatedMemberIds: ['kin-doung', 'chhea-chhouy'],
  },
  {
    id: 'data-reporting',
    title: 'Data & Reporting',
    titleKm: 'ទិន្នន័យ និងរបាយការណ៍',
    description:
      'SQL reporting, relational databases, dashboards and data analysis tooling.',
    descriptionKm:
      'របាយការណ៍ SQL, មូលដ្ឋានទិន្នន័យទំនាក់ទំនង, ផ្ទាំងគ្រប់គ្រង និងឧបករណ៍វិភាគទិន្នន័យ។',
    iconName: 'BarChart3',
    technologies: ['SQL Server', 'MySQL', 'PostgreSQL', 'Power BI'],
    relatedMemberIds: ['darin-hoy', 'chhea-chhouy'],
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    titleKm: 'ពពក (Cloud) និងហេដ្ឋារចនាសម្ព័ន្ធ',
    description:
      'Linux-based deployment, cloud hosting, CI/CD and container infrastructure exposure.',
    descriptionKm:
      'ការដាក់ឱ្យដំណើរការលើ Linux, cloud hosting, CI/CD និងការប្រើប្រាស់ container infrastructure។',
    iconName: 'Cloud',
    technologies: ['AWS', 'Linux', 'Docker', 'Kubernetes', 'Git'],
    relatedMemberIds: ['leader-din', 'chhea-chhouy'],
  },
  {
    id: 'roaming-interconnection',
    title: 'Roaming & Interconnection',
    titleKm: 'Roaming & Interconnection',
    description:
      'Roaming service validation, TAP workflows, operations automation and internal telecom systems.',
    descriptionKm:
      'ការផ្ទៀងផ្ទាត់សេវា Roaming, លំហូរការងារ TAP, ស្វ័យប្រវត្តិកម្មប្រតិបត្តិការ និងប្រព័ន្ធទូរគមនាគមន៍ផ្ទៃក្នុង។',
    iconName: 'Radio',
    technologies: ['Automation', 'Linux', 'Docker', 'Kubernetes'],
    relatedMemberIds: ['leader-din'],
  },
];

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

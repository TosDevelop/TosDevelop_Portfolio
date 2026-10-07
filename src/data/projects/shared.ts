import type { ProjectCaseStudy } from '../../types/index.ts';
import type { PROJECTS_EN, ProjectCaseStudyEnglish } from './en.ts';

type SharedProjectCaseStudy = Omit<
  ProjectCaseStudy,
  'id' | keyof ProjectCaseStudyEnglish | `${string}Km`
>;

export const PROJECTS_SHARED = {
  'crm-internal-management': {
    category: 'Software',
    technologies: ['Vue.js', 'Laravel', 'JavaScript', 'MySQL', 'REST API'],
    leadMemberId: 'chhea-chhouy',
    relatedMemberIds: ['chhea-chhouy'],
  },
  'pos-inventory-kiosk': {
    category: 'QA',
    technologies: ['Manual Testing', 'POS', 'Inventory', 'Postman'],
    leadMemberId: 'bunyoung-hean',
    relatedMemberIds: ['bunyoung-hean'],
  },
  'farm-management-system': {
    category: 'Web',
    technologies: ['React.js', 'Laravel', 'Python', 'MySQL'],
    leadMemberId: 'sokchea-boy',
    relatedMemberIds: ['sokchea-boy', 'kin-doung'],
  },
  'leave-management-system': {
    category: 'Web',
    technologies: ['Laravel', 'Vue.js', 'React Native', 'MySQL'],
    leadMemberId: 'chhea-chhouy',
    relatedMemberIds: ['chhea-chhouy'],
  },
  'telegram-mini-app-bot': {
    category: 'Web',
    technologies: ['JavaScript', 'Node.js', 'Telegram API', 'Express'],
    leadMemberId: 'seang-meng-chheun',
    relatedMemberIds: ['seang-meng-chheun'],
  },
  'roaming-validation-service': {
    category: 'Telecom',
    technologies: ['Laravel', 'Vue.js', 'MariaDB', 'Linux', 'Docker'],
    leadMemberId: 'leader-din',
    relatedMemberIds: ['leader-din'],
  },
  'cambodia-airports-it-data': {
    category: 'Data',
    technologies: ['MySQL', 'SQL Server', 'GLPI', 'Data Analytics'],
    leadMemberId: 'darin-hoy',
    relatedMemberIds: ['darin-hoy'],
  },
} satisfies Record<keyof typeof PROJECTS_EN, SharedProjectCaseStudy>;

import { projects } from './projects/km.ts';
import { shared } from './shared.ts';
import type { TeamMember } from '../../../types/index.ts';
import type { KhmerContent } from '../../localization.ts';

const skillCategories: Record<string, string> = {
  'Frontend Development': 'ការអភិវឌ្ឍ Frontend',
  'Backend & APIs': 'ការអភិវឌ្ឍ Backend និង APIs',
  'Databases & Services': 'មូលដ្ឋានទិន្នន័យ និងសេវា',
  'Development & Collaboration Tools': 'ឧបករណ៍អភិវឌ្ឍ និងសហការ',
  'Design Tools': 'ឧបករណ៍រចនា',
  'Testing & QA': 'ការធ្វើតេស្ត និងការធានាគុណភាព',
  'Cloud & DevOps': 'បច្ចេកវិទ្យា Cloud និង DevOps',
};

export const km = {
  name: 'ផន យ៉ា',
  role: 'អ្នកអភិវឌ្ឍ Full-Stack',
  badge: 'អ្នកអភិវឌ្ឍ Full-Stack កម្រិតដំបូង',
  tagline:
    'ចូលចិត្តបង្កើតកម្មវិធីគេហទំព័រទំនើបដោយប្រើ Vue.js, React.js, Laravel, Node.js និងបច្ចេកវិទ្យា Cloud។',
  bio: 'អ្នកអភិវឌ្ឍគេហទំព័រកម្រិតដំបូងដែលមានបទពិសោធន៍ក្នុងការអភិវឌ្ឍកម្មវិធីគេហទំព័រ Full-stack, REST APIs, មូលដ្ឋានទិន្នន័យ ការដាក់ឱ្យដំណើរការលើ AWS ការធ្វើតេស្ត និងការកែកំហុស។',
  languages: [
    { language: 'ភាសាខ្មែរ', level: 'ភាសាកំណើត' },
    { language: 'ភាសាអង់គ្លេស', level: 'មធ្យម' },
  ],
  softSkills: [
    'ការដោះស្រាយបញ្ហា',
    'ការប្រាស្រ័យទាក់ទង',
    'ការងារជាក្រុម',
    'ការសម្របខ្លួន',
    'ការរៀនសូត្រជាបន្តបន្ទាប់',
  ],
  technicalSkills: shared.technicalSkills.map((group) => ({
    ...group,
    category: skillCategories[group.category] ?? group.category,
  })),
  experience: [
    {
      role: 'អ្នកអភិវឌ្ឍ Frontend / អ្នកធានាគុណភាព',
      company: 'ប្រព័ន្ធបណ្ណាល័យអេឡិចត្រូនិក Kompie',
      period: '',
      description:
        'បង្កើតចំណុចប្រទាក់ដោយ React.js ភ្ជាប់ Laravel APIs អនុវត្តមុខងារ CRUD និងធ្វើតេស្តមុខងារ។',
      technologies: ['React.js', 'Laravel', 'REST API', 'Functional Testing'],
    },
    {
      role: 'អ្នកអនុវត្ត DevOps កម្រិតដំបូង',
      company: 'គម្រោងដាក់ WordPress ឱ្យដំណើរការ',
      period: '',
      description:
        'ដាក់ WordPress ឱ្យដំណើរការលើ AWS EC2 កំណត់រចនាសម្ព័ន្ធ Apache, Ubuntu និង MySQL និងគ្រប់គ្រង DNS។',
      technologies: [
        'WordPress',
        'AWS EC2',
        'Apache',
        'Ubuntu',
        'MySQL',
        'DNS Management',
      ],
    },
  ],
  education: [
    {
      degree: 'សញ្ញាបត្របរិញ្ញាបត្ររងផ្នែកកម្មវិធីគេហទំព័រ',
      institution: 'អង្គការ Passerelles Numériques Cambodia (PNC)',
      period: '២០២៥ – បច្ចុប្បន្ន',
    },
    {
      degree: 'សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ',
      institution: 'វិទ្យាល័យរវៀង',
      period: '២០២២ – ២០២៤',
    },
  ],
  selectedProjects: projects,
} satisfies KhmerContent<TeamMember>;

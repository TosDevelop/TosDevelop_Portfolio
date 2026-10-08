import { projects } from './projects/km.ts';
import { shared } from './shared.ts';
import type { TeamMember } from '../../../types/index.ts';
import type { KhmerContent } from '../../localization.ts';
const skillCategories: Record<string, string> = {
  'Frontend Development': 'ការអភិវឌ្ឍ Frontend',
  'Backend & APIs': 'ការអភិវឌ្ឍ Backend និង APIs',
  Databases: 'មូលដ្ឋានទិន្នន័យ',
  'Development & Collaboration Tools': 'ឧបករណ៍អភិវឌ្ឍ និងសហការ',
  'Design Tools': 'ឧបករណ៍រចនា',
  'Testing & QA': 'ការធ្វើតេស្ត និងការធានាគុណភាព',
  'Cloud & DevOps': 'បច្ចេកវិទ្យា Cloud និង DevOps',
};
export const km = {
  name: 'សាត​ វិចិត្រ',
  role: 'អ្នកអភិវឌ្ឍ Full-Stack',
  badge: 'អ្នកអភិវឌ្ឍ Full-Stack កម្រិតដំបូង | អ្នកអភិវឌ្ឍគេហទំព័រ',
  tagline:
    'ចូលចិត្តបង្កើតកម្មវិធីគេហទំព័រទំនើបដោយប្រើ Vue.js, Laravel និង Node.js រួមជាមួយ DevOps និងការសរសេរកូដដោយមានជំនួយពី AI។',
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
    'ការស្រាវជ្រាវស៊ីជម្រៅ',
  ],
  technicalSkills: shared.technicalSkills.map((group) => ({
    ...group,
    category: skillCategories[group.category] ?? group.category,
  })),
  experience: [
    {
      role: 'អ្នកអភិវឌ្ឍគេហទំព័រ',
      company: 'ប្រព័ន្ធសិក្សា PUC',
      period: '',
      description:
        'បង្កើតចំណុចប្រទាក់ដោយ React.js និង Vue.js ភ្ជាប់ Laravel APIs អនុវត្តមុខងារ CRUD និងធ្វើតេស្តមុខងារ។ ចូលរួមអភិវឌ្ឍមុខងារចុះឈ្មោះ បេឡា និងវត្តមានគ្រូនិងសិស្ស រួមទាំងការតាមដានទីតាំងសម្រាប់កត់ត្រាវត្តមាន។',
      technologies: [
        'React.js',
        'Vue.js',
        'Laravel',
        'REST API',
        'Functional Testing',
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

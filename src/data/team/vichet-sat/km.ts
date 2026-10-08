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
  'Integrations & Real-time Services':
    'ការភ្ជាប់ប្រព័ន្ធ និងសេវាពេលវេលាជាក់ស្តែង',
};
export const km = {
  name: 'សាត​ វិចិត្ដ',
  role: 'អ្នកអភិវឌ្ឍ Full-Stack',
  badge: 'អ្នកអភិវឌ្ឍ Full-Stack កម្រិតដំបូង',
  tagline:
    'អ្នកអភិវឌ្ឍ Full-stack កម្រិតដំបូង បង្កើតកម្មវិធីគេហទំព័រដោយ Vue.js, Laravel និង Node.js ចាប់ពីមូលដ្ឋានទិន្នន័យ និង REST APIs រហូតដល់ការដាក់ឱ្យដំណើរការ។',
  bio: 'អ្នកអភិវឌ្ឍ Full-stack កម្រិតដំបូង កំពុងសិក្សាកម្មវិធីគេហទំព័រនៅអង្គការ Passerelles Numériques Cambodia (PNC)។ មានបទពិសោធន៍បង្កើតកម្មវិធីដោយ Vue.js, Laravel, Node.js/NestJS និង Next.js, REST APIs ជាមួយការផ្ទៀងផ្ទាត់អត្តសញ្ញាណនិងសិទ្ធិតាមតួនាទី មូលដ្ឋានទិន្នន័យ MySQL/PostgreSQL ការធ្វើតេស្តដោយ Jest និង Playwright និងការដាក់ឱ្យដំណើរការដោយ Docker, GitHub Actions, AWS EC2 និង Vercel។ បើកចំហចំពោះការងារពេញម៉ោងកម្រិតដំបូង និងការងារឯករាជ្យ។',
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
    'ទំនួលខុសត្រូវ',
    'ការគ្រប់គ្រងពេលវេលា',
    'ការគ្រប់គ្រងភារកិច្ច',
  ],
  technicalSkills: shared.technicalSkills.map((group) => ({
    ...group,
    category: skillCategories[group.category] ?? group.category,
  })),
  experience: [
    {
      role: 'អ្នកអភិវឌ្ឍ Full-Stack',
      company: 'PUC-IFL (សាកលវិទ្យាល័យបញ្ញាសាស្ត្រកម្ពុជា)',
      period: 'សីហា ២០២៦ – បច្ចុប្បន្ន',
      description:
        'កំពុងបង្កើតប្រព័ន្ធចុះឈ្មោះ និងគ្រប់គ្រងការសិក្សា PUC-IFL ដោយ Vue 3, TypeScript និង Laravel 12 REST API។ អភិវឌ្ឍផ្ទាំង Frontend និង Backend APIs ចាប់ពីឯកសារផែនការដល់មុខងារដែលបានធ្វើតេស្ត ដោយសហការតាម feature branches ក្នុង GitHub organization រួម។ អភិវឌ្ឍការដាក់ពាក្យអនឡាញ តេស្តកំណត់កម្រិត ការបែងចែកថ្នាក់ លិខិតអញ្ជើញ QR វត្តមាន QR និងកាលវិភាគ ការជូនដំណឹងភ្លាមៗ ការកំណត់ពាក្យសម្ងាត់ឡើងវិញ និងកែលម្អការបង្ហាញលើទូរសព្ទ។',
      technologies: [
        'Vue 3',
        'TypeScript',
        'Pinia',
        'Tailwind CSS',
        'Laravel 12',
        'MySQL',
        'Laravel Reverb',
        'Playwright',
        'PHPUnit',
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

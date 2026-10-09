import { projects } from './projects/km.ts';
import type { TeamMember } from '../../../types/index.ts';
import type { KhmerContent } from '../../localization.ts';

export const km = {
  selectedProjects: projects,
  name: 'មុិៈ ដានេ',
  role: 'អ្នកអភិវឌ្ឍន៍កម្មវិធីទូរស័ព្ទ',
  tagline:
    'អ្នកអភិវឌ្ឍន៍គេហទំព័រផ្តោតលើ Backend ដោយបង្កើត RESTful APIs ប្រព័ន្ធផ្ទៀងផ្ទាត់អត្តសញ្ញាណដែលមានសុវត្ថិភាព និងមូលដ្ឋានទិន្នន័យទំនាក់ទំនងជាមួយ Node.js, Laravel, Vue.js, MySQL និង PostgreSQL។',
  badge: 'អ្នកអភិវឌ្ឍន៍កម្មវិធីទូរស័ព្ទ | អ្នកអភិវឌ្ឍន៍គេហទំព័រផ្តោតលើ Backend',
  bio: 'អ្នកអភិវឌ្ឍន៍គេហទំព័រផ្តោតលើ Backend ដែលមានឆន្ទៈខ្ពស់ និងបទពិសោធន៍ជាក់ស្តែងក្នុងការបង្កើត RESTful APIs ប្រព័ន្ធផ្ទៀងផ្ទាត់អត្តសញ្ញាណដែលមានសុវត្ថិភាព និងរចនាសម្ព័ន្ធមូលដ្ឋានទិន្នន័យទំនាក់ទំនង ដោយប្រើ Node.js, Laravel, Vue.js, MySQL និង PostgreSQL។ អាចធ្វើការជាក្រុមតាមវិធីសាស្ត្រ Agile និងបញ្ចប់មុខងារ Full Stack តាមពេលកំណត់។ មានបំណងអនុវត្ត និងអភិវឌ្ឍជំនាញទាំងនេះក្នុងបរិយាកាសការងារ IT ដែលមានវិជ្ជាជីវៈ។',
  languages: [
    { language: 'ភាសាខ្មែរ', level: 'ភាសាកំណើត' },
    { language: 'ភាសាអង់គ្លេស', level: 'មធ្យម' },
  ],
  softSkills: [
    'ការដោះស្រាយបញ្ហា',
    'ការធ្វើការជាក្រុម និងសហការ',
    'ការសម្របខ្លួន',
    'ការប្រាស្រ័យទាក់ទង',
    'ការគិតបែបវិភាគ',
    'ការគ្រប់គ្រងភារកិច្ច និងពេលវេលា',
  ],
  education: [
    {
      degree: 'បរិញ្ញាបត្ររងផ្នែកសរសេរកម្មវិធីគេហទំព័រ',
      institution: 'អង្គការ Passerelles Numériques Cambodia (PNC)',
      period: '2025 – បច្ចុប្បន្ន',
    },
    {
      degree: 'សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប)',
      institution: 'វិទ្យាល័យ ហ៊ុន សែន ទ្រៀល',
      period: '2024 – 2025',
    },
  ],
} satisfies KhmerContent<TeamMember>;

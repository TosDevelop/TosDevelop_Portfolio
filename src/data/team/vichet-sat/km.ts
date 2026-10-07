import { projects } from './projects/km.ts';
import type { TeamMember } from '../../../types/index.ts';
import type { KhmerContent } from '../../localization.ts';

export const km = {
  selectedProjects: projects,
  name: 'សាត​ វិចិត្រ',
  role: 'អ្នករៀបចំផែនការ និងអភិវឌ្ឍន៍វេបសាយ',
  tagline:
    'ការរៀបចំផែនការគម្រោង ការសម្របសម្រួលអភិវឌ្ឍន៍វេបសាយ និងការដឹកនាំក្រុមជាក់ស្ដែង។',
  badge: 'Planning & Web',
  bio: 'មានចំណង់ចំណូលចិត្តក្នុងការផ្សារភ្ជាប់ការអនុវត្តបច្ចេកទេសជាមួយការរៀបចំផែនការ និងការគ្រប់គ្រងគម្រោងជាប្រព័ន្ធ។ ធានានូវការសម្រេចគោលដៅគម្រោងប្រកបដោយប្រសិទ្ធភាព។',
} satisfies KhmerContent<TeamMember>;

import { projects } from './projects/km.ts';
import type { TeamMember } from '../../../types/index.ts';
import type { KhmerContent } from '../../localization.ts';

export const km = {
  selectedProjects: projects,
  name: 'ភឺម សេរី',
  role: 'វិស្វករផ្នែកទន់កម្រិតដំបូង',
  tagline:
    'និស្សិតផ្នែកកម្មវិធីគេហទំព័រ ដែលបង្កើតកម្មវិធីគេហទំព័រឆ្លើយតបនឹងទំហំអេក្រង់ និងងាយស្រួលប្រើប្រាស់។',
  badge: 'វិស្វករផ្នែកទន់',
  bio: 'និស្សិតផ្នែកកម្មវិធីគេហទំព័រ ដែលមានបទពិសោធន៍អនុវត្តក្នុងការបង្កើតកម្មវិធីគេហទំព័រឆ្លើយតបនឹងទំហំអេក្រង់ ដោយប្រើ Angular, Vue.js, JavaScript, HTML, CSS និង Tailwind CSS។ មានបទពិសោធន៍ជាមួយ REST APIs, ប្រតិបត្តិការ CRUD, MySQL, Node.js, Laravel, Spring Boot, Git/GitHub និង Postman។ ចាប់អារម្មណ៍លើការរចនា UI/UX និងការសិក្សាបច្ចេកវិទ្យាគេហទំព័រទំនើប។',
} satisfies KhmerContent<TeamMember>;

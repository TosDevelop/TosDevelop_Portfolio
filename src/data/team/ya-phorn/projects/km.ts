import type { MemberProjectSummary } from '../../../../types/index.ts';

export const projects = [
  {
    title: 'ប្រព័ន្ធពាណិជ្ជកម្មអេឡិចត្រូនិក',
    role: '',
    period: '',
    description: '',
    technologies: [],
  },
  {
    title: 'ប្រព័ន្ធគ្រប់គ្រងកិច្ចប្រជុំតាមដានសិស្ស',
    role: '',
    period: '',
    description: '',
    technologies: [],
  },
  {
    title: 'ប្រព័ន្ធបណ្ណាល័យអេឡិចត្រូនិក Kompie',
    role: 'អ្នកអភិវឌ្ឍ Frontend / អ្នកធានាគុណភាព',
    period: '',
    description:
      'បង្កើតចំណុចប្រទាក់ដោយ React.js ភ្ជាប់ Laravel APIs អនុវត្តមុខងារ CRUD និងធ្វើតេស្តមុខងារ។',
    technologies: ['React.js', 'Laravel', 'REST API', 'Functional Testing'],
  },
  {
    title: 'គម្រោងដាក់ WordPress ឱ្យដំណើរការ',
    role: 'អ្នកអនុវត្ត DevOps កម្រិតដំបូង',
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
] satisfies MemberProjectSummary[];

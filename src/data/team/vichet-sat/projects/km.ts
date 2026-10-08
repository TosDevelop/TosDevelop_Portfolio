import type { MemberProjectSummary } from '../../../../types/index.ts';
export const projects = [
  {
    title: 'ប្រព័ន្ធសិក្សា PUC',
    role: 'អ្នកអភិវឌ្ឍគេហទំព័រ',
    period: '',
    description:
      'បង្កើតចំណុចប្រទាក់ដោយ React.js និង Vue.js ដែលភ្ជាប់ជាមួយ Laravel APIs អនុវត្តមុខងារ CRUD និងធ្វើតេស្តមុខងារ។ ចូលរួមអភិវឌ្ឍមុខងារចុះឈ្មោះ បេឡា និងវត្តមានគ្រូនិងសិស្ស រួមទាំងការតាមដានទីតាំង។',
    technologies: [
      'React.js',
      'Vue.js',
      'Laravel',
      'REST API',
      'Functional Testing',
    ],
  },
  {
    title: 'ប្រព័ន្ធអប់រំ PNC',
    role: 'អ្នកអភិវឌ្ឍ Full-Stack',
    period: '',
    description:
      'បង្កើតប្រព័ន្ធផ្ទៃក្នុងសម្រាប់គ្រប់គ្រងដំណើរការសិក្សារបស់សិស្ស ដោយប្រើ Laravel 12, PHP 8.2, Vue.js និង REST API ជាមួយ MySQL។ អភិវឌ្ឍមុខងារចុះឈ្មោះ ប្រវត្តិរូបសិស្ស ការថតរូបតាមកាមេរ៉ា ការបង្កើតកាតសិស្សមានកូដ QR ជាឯកសារ PDF ច្រើនក្នុងពេលតែមួយ និងការវាយតម្លៃខ្លួនឯងជាមួយការប្រៀបធៀបនិន្នាការលទ្ធផល។',
    technologies: ['Laravel 12', 'PHP 8.2', 'Vue.js', 'MySQL', 'REST API'],
  },
  {
    title: 'ប្រព័ន្ធពាណិជ្ជកម្មអេឡិចត្រូនិក (ShopHub)',
    role: 'អ្នកអភិវឌ្ឍ Full-Stack',
    period: '',
    description:
      'បង្កើតប្រព័ន្ធពាណិជ្ជកម្មអេឡិចត្រូនិក Full-stack ដោយប្រើ Laravel 12 RESTful JSON API និង Vue 3 សម្រាប់ចំណុចប្រទាក់ប្រភេទ SPA។ អភិវឌ្ឍមុខងារស្វែងរកនិងច្រោះផលិតផល កន្ត្រកទំនិញ ការបញ្ជាទិញជាមួយការកាត់បន្ថយស្តុក ប្រវត្តិការបញ្ជាទិញ បញ្ជីទំនិញដែលចង់បាន ការវាយតម្លៃផលិតផល និងប្រវត្តិរូបអ្នកប្រើប្រាស់។',
    technologies: ['Laravel 12', 'Vue 3', 'REST API'],
  },
  {
    title: 'ប្រព័ន្ធគ្រប់គ្រងវត្តមាន',
    role: 'អ្នកអភិវឌ្ឍ Full-Stack',
    period: '',
    description:
      'រៀបចំស្ថាបត្យកម្មប្រព័ន្ធវត្តមានសម្រាប់ PNC ដោយប្រើ Laravel 10, Vue 3, TypeScript, MySQL និង Redis សម្រាប់ផ្ទុកទិន្នន័យបណ្ដោះអាសន្ន។ អភិវឌ្ឍការកត់ត្រាវត្តមានតាម RFID និងស្នាមម្រាមដៃ ការកំណត់ព្រំដែនទីតាំង ផ្ទាំងគ្រប់គ្រងតាមតួនាទី របាយការណ៍ និងការតាមដានសិស្សដែលមានហានិភ័យ។ ភ្ជាប់ការជូនដំណឹងតាម Telegram ការធ្វើសមកាលកម្មកាលវិភាគគ្រូតាម API ខាងក្រៅ និងការនាំចេញរបាយការណ៍ Excel/CSV។ រៀបចំកម្មវិធីក្នុង Docker និងដាក់ឱ្យដំណើរការលើ AWS EC2 តាម GitHub Actions CI/CD។',
    technologies: [
      'Laravel 10',
      'Vue 3',
      'TypeScript',
      'MySQL',
      'Redis',
      'Telegram Bot API',
      'Docker',
      'GitHub Actions',
      'AWS EC2',
    ],
  },
] satisfies MemberProjectSummary[];

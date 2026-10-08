import type { MemberProjectSummary } from '../../../../types/index.ts';
export const projects = [
  {
    title: 'Ty Khai TopUp — ហាងបញ្ចូលទឹកប្រាក់ហ្គេម',
    role: 'អ្នកអភិវឌ្ឍ Full-Stack',
    period: '២០២៦ – បច្ចុប្បន្ន',
    description:
      'បង្កើតហាងបញ្ចូលទឹកប្រាក់ហ្គេមសម្រាប់កម្ពុជា ដែលអាចជ្រើសរើសហ្គេមនិងកញ្ចប់ បង់ប្រាក់តាម Bakong KHQR និងតាមដានការបញ្ជាទិញ។ អភិវឌ្ឍការផ្ទៀងផ្ទាត់ការបង់ប្រាក់ដោយស្វ័យប្រវត្តិ ការចូលតាម Google ឬអ៊ីមែល ការទិញដោយមិនចាំបាច់មានគណនី កាបូបប្រាក់ កម្មវិធីណែនាំមិត្តភក្តិ និងបេសកកម្មប្រចាំថ្ងៃ។ រចនា Prisma models ចំនួន ៤១ កំណត់ចំនួនសំណើ និងផ្ទៀងផ្ទាត់ទិន្នន័យបញ្ចូល ព្រមទាំងបង្កើតផ្ទាំងគ្រប់គ្រងការបញ្ជាទិញ ហ្គេម អតិថិជន កូដប្រូម៉ូសិន និងអ្នកលក់បន្ត។',
    technologies: [
      'Next.js 16',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'NextAuth',
      'Tailwind CSS',
      'Upstash Redis',
      'Zod',
      'Bakong KHQR',
      'Vercel',
    ],
    repoUrl:
      'https://github.com/ChetDevelopment/Game-top-up-storefront-for-Cambodia',
    link: 'https://tykhai.vercel.app',
    caseStudyUrl: 'https://chetdeveloper.me/projects/ty-khai-topup',
  },
  {
    title: 'ប្រព័ន្ធអប់រំ PNC',
    role: 'អ្នកអភិវឌ្ឍ Full-Stack',
    period: 'កក្កដា ២០២៦',
    description:
      'បង្កើតប្រព័ន្ធផ្ទៃក្នុងសម្រាប់ការចុះឈ្មោះ ប្រវត្តិរូប កាតសិស្ស និងការវាយតម្លៃ។ អភិវឌ្ឍការផ្ទៀងផ្ទាត់អត្តសញ្ញាណតាម JWT និងសិទ្ធិតាមតួនាទី ការនាំចូល Excel ពីរជំហានសម្រាប់សិស្សជាង ៥០០ នាក់ ដំណើរការស្ថានភាពចុះឈ្មោះជាមួយកំណត់ត្រាត្រួតពិនិត្យ ការថតរូបតាមកាមេរ៉ា ការបង្កើតកាតសិស្ស QR ជា PDF ច្រើនក្នុងពេលតែមួយ និងការវាយតម្លៃខ្លួនឯងជាមួយការប្រៀបធៀបនិន្នាការ។ បន្ថែមសំណុំតេស្តមុខងារចំនួន ១៤។',
    technologies: ['Laravel 12', 'PHP 8.2', 'Vue.js', 'MySQL', 'JWT'],
    repositories: [
      {
        label: 'Frontend Repo',
        url: 'https://github.com/pnc-education-system/pnc-education-system',
      },
      {
        label: 'Backend Repo',
        url: 'https://github.com/pnc-education-system/pnc-education-system-api',
      },
    ],
    link: 'https://pnc.54.227.112.85.sslip.io/login',
    caseStudyUrl: 'https://chetdeveloper.me/projects/pnc-education-system',
  },
  {
    title: 'NEARLY — ទីផ្សារផលិតផលបេតិកភណ្ឌខ្មែរ',
    role: 'អ្នកអភិវឌ្ឍ Full-Stack',
    period: 'មិថុនា ២០២៦',
    description:
      'បង្កើតហាងអនឡាញសម្រាប់ផលិតផលបេតិកភណ្ឌខ្មែរ ដោយប្រើ Laravel 12 REST API, Vue 3 សម្រាប់អតិថិជន និង Blade សម្រាប់ផ្ទាំងគ្រប់គ្រង។ អភិវឌ្ឍការស្វែងរកនិងច្រោះផលិតផល កន្ត្រកទំនិញ បញ្ជីទំនិញដែលចង់បាន ការទូទាត់ជាមួយពន្ធនិងប័ណ្ណបញ្ចុះតម្លៃ ការបង់ប្រាក់ Bakong KHQR ការកាត់ស្តុក ការតាមដានការបញ្ជាទិញជាមួយការបញ្ជាក់តាម QR ការវាយតម្លៃ ការផ្ទៀងផ្ទាត់តាម token និងការគ្រប់គ្រង តាម API routes ចំនួន ៤១។',
    technologies: [
      'Laravel 12',
      'Vue 3',
      'MySQL',
      'Laravel Sanctum',
      'Tailwind CSS',
      'Bakong KHQR',
      'Swagger/OpenAPI',
      'Postman',
    ],
    repoUrl: 'https://github.com/ChetDevelopment/Full-Stack-E-commerce',
    caseStudyUrl: 'https://chetdeveloper.me/projects/nearly-ecommerce',
  },
  {
    title: 'ប្រព័ន្ធគ្រប់គ្រងវត្តមាន',
    role: 'អ្នកអភិវឌ្ឍ Full-Stack និង Scrum Master',
    period: 'កុម្ភៈ ២០២៦ – មេសា ២០២៦',
    description:
      'បង្កើតប្រព័ន្ធវត្តមានសម្រាប់ PNC និងបំពេញតួនាទីជា Scrum Master របស់ក្រុម។ អភិវឌ្ឍការកត់ត្រាវត្តមានតាម RFID និងស្នាមម្រាមដៃ ការកំណត់ព្រំដែនទីតាំង ផ្ទាំងគ្រប់គ្រងតាមតួនាទី ការតាមដានសិស្សដែលមានហានិភ័យ ការជូនដំណឹង Telegram ការធ្វើសមកាលកម្មកាលវិភាគគ្រូតាម API ខាងក្រៅ និងរបាយការណ៍ Excel/CSV។ រៀបចំកម្មវិធីក្នុង Docker និងដាក់ឱ្យដំណើរការលើ AWS EC2 តាម GitHub Actions CI/CD។',
    technologies: [
      'Laravel 10',
      'Vue 3',
      'TypeScript',
      'MySQL',
      'Redis',
      'Docker',
      'GitHub Actions',
      'AWS EC2',
    ],
    repoUrl: 'https://github.com/ChetDevelopment/Attendance-System',
    caseStudyUrl:
      'https://chetdeveloper.me/projects/attendance-management-system',
  },
  {
    title: 'MentorKhet — ប្រព័ន្ធគ្រប់គ្រងអ្នកណែនាំ',
    role: 'អ្នកអភិវឌ្ឍ Backend និងអ្នកសម្របសម្រួលគម្រោង',
    period: 'ឧសភា ២០២៦ – មិថុនា ២០២៦',
    description:
      'បង្កើត REST API សម្រាប់ផ្គូផ្គងអ្នកសិក្សាជាមួយអ្នកណែនាំតាមជំនាញ ការវាយតម្លៃ និងពេលទំនេរ ក្នុងក្រុម ៣ នាក់ អំឡុង Sprint រយៈពេលពីរសប្តាហ៍។ អភិវឌ្ឍការស្នើសុំ ទទួល បដិសេធ បញ្ចប់ និងលុបចោលវគ្គណែនាំ ព្រមទាំងកត់ត្រាអវត្តមាន ការផ្គូផ្គង ការកំណត់ពាក្យសម្ងាត់ឡើងវិញ ការការពារការចូលប្រើ និងមុខងារពេលទំនេរ ជំនាញ និងធនធាន តាម API routes ចំនួន ៩៨។ សរសេរតេស្ត API ពីដើមដល់ចប់ចំនួន ១៥០ ដោយ Jest និងសម្របសម្រួលផែនការ Sprint និងបញ្ជីភារកិច្ចរយៈពេល ១៤ ថ្ងៃ។',
    technologies: [
      'NestJS',
      'TypeScript',
      'TypeORM',
      'MySQL',
      'JWT',
      'Jest',
      'Docker',
      'GitHub Actions',
      'Render',
    ],
    repoUrl: 'https://github.com/ChetDevelopment/Mentor-Management-System',
    link: 'https://mentor-management-api.onrender.com/api/v1/health',
    caseStudyUrl: 'https://chetdeveloper.me/projects/mentorkhet',
  },
  {
    title: 'ប្រព័ន្ធចុះឈ្មោះ និងគ្រប់គ្រងការសិក្សា PUC-IFL',
    role: 'អ្នកអភិវឌ្ឍ Full-Stack',
    period: 'សីហា ២០២៦ – បច្ចុប្បន្ន',
    description:
      'កំពុងបង្កើតប្រព័ន្ធផ្ទៃក្នុងសម្រាប់ចុះឈ្មោះ និងគ្រប់គ្រងការសិក្សារបស់ PUC-IFL។ អភិវឌ្ឍការដាក់ពាក្យអនឡាញ តេស្តកំណត់កម្រិតជាមួយរបៀបតឹងរ៉ឹងនិងឃ្លាំងសំណួរ ការបែងចែកថ្នាក់ លិខិតអញ្ជើញ QR វត្តមាន QR និងកាលវិភាគ។ បន្ថែមការជូនដំណឹងភ្លាមៗ ការកំណត់ពាក្យសម្ងាត់ឡើងវិញ និងកែលម្អការបង្ហាញលើទូរសព្ទ។ កូដប្រភព និងការចូលប្រើប្រព័ន្ធជាធនធានឯកជនរបស់កន្លែងធ្វើការ។',
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
    caseStudyUrl: 'https://chetdeveloper.me/projects/puc-enrollment-system',
  },
] satisfies MemberProjectSummary[];

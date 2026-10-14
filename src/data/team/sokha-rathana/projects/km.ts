import type { MemberProjectSummary } from '../../../../types/index.ts';
export const projects = [
  {
    title: 'ប្រព័ន្ធគ្រប់គ្រងការជ្រើសរើសសិស្ស PNC',
    role: 'អ្នកអភិវឌ្ឍន៍ Full-Stack',
    period: 'កក្កដា ២០២៦',
    description:
      'អភិវឌ្ឍប្រព័ន្ធ Full-Stack សម្រាប់គ្រប់គ្រងបេក្ខជន និងយុទ្ធនាការជ្រើសរើសសិស្ស។ អនុវត្តមុខងារ Frontend/Backend និង API ដោយផ្តោតលើការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ ការគ្រប់គ្រងសិទ្ធិ ការរចនាមូលដ្ឋានទិន្នន័យ និងរចនាសម្ព័ន្ធដែលងាយថែទាំ។',
    technologies: [
      'Vue.js',
      'Laravel 12',
      'PHP',
      'MySQL',
      'JWT',
      'Role-based access control',
    ],
    repositories: [
      {
        label: 'Frontend',
        url: 'https://github.com/pnc-selection-system/pnc-selection-system',
      },
      {
        label: 'Backend',
        url: 'https://github.com/pnc-selection-system/pnc-selection-system-api',
      },
    ],
  },
  {
    title: 'ប្រព័ន្ធគ្រប់គ្រងការសិក្សាអនឡាញ',
    role: 'ប្រធានក្រុម និងអ្នកអភិវឌ្ឍន៍ Full-Stack',
    period: 'ឧសភា–មិថុនា ២០២៦',
    description:
      'បង្កើត Backend សម្រាប់អ្នកគ្រប់គ្រង គ្រូ និងសិស្ស។ សម្របសម្រួលការអភិវឌ្ឍជាក្រុម និងអនុវត្តរចនាសម្ព័ន្ធ Backend ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ និងការគ្រប់គ្រងសិទ្ធិ ដើម្បីពង្រឹងជំនាញ API ការសរសេរកម្មវិធីបែបវត្ថុ និងការភ្ជាប់មូលដ្ឋានទិន្នន័យ។',
    technologies: [
      'Node.js',
      'TypeScript',
      'Express.js',
      'TypeORM',
      'MySQL',
      'JWT',
      'bcrypt',
    ],
    repositories: [
      {
        label: 'Frontend',
        url: 'https://github.com/Rathana-SOKHA/E_Learning_Management_System_Frontend',
      },
      {
        label: 'Backend',
        url: 'https://github.com/Rathana-SOKHA/E_Learning_Management_System_Backend',
      },
    ],
  },
  {
    title: 'កម្មវិធីគេហទំព័រសេវាសម្អាត',
    role: 'អ្នកអភិវឌ្ឍន៍ Full-Stack',
    period: 'កុម្ភៈ–ឧសភា ២០២៦',
    description:
      'អភិវឌ្ឍមុខងារ Full-Stack សម្រាប់ការកក់សេវាសម្អាត លំហូរការងារទាក់ទងនឹងការទូទាត់ និងការវាយតម្លៃ។ អនុវត្តការភ្ជាប់ Frontend, Backend APIs និងមូលដ្ឋានទិន្នន័យទំនាក់ទំនង។',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    repoUrl: 'https://github.com/Narith-hen/Service-Cleaning-App',
  },
  {
    title: 'ប្រព័ន្ធពាណិជ្ជកម្មអេឡិចត្រូនិក',
    role: 'អ្នកអភិវឌ្ឍន៍ Full-Stack',
    period: '',
    description:
      'អភិវឌ្ឍគម្រោង Full-Stack ដែលមានមុខងារសម្រាប់អតិថិជន និងអ្នកគ្រប់គ្រង ព្រមទាំងការគ្រប់គ្រងផលិតផល។ អនុវត្ត CRUD និងភ្ជាប់ Frontend ទៅ Backend APIs ដើម្បីពង្រឹងជំនាញភ្ជាប់ API និងគ្រប់គ្រងទិន្នន័យ។',
    technologies: ['Vue.js', 'JavaScript', 'Laravel', 'MySQL', 'REST APIs'],
    repositories: [
      {
        label: 'Frontend',
        url: 'https://github.com/Rathana-SOKHA/ecommerce-frontend',
      },
      {
        label: 'Backend',
        url: 'https://github.com/Rathana-SOKHA/ecommerce-backend',
      },
    ],
  },
  {
    title: 'គម្រោងអនុវត្ត API CRUD',
    role: 'អ្នកអភិវឌ្ឍន៍',
    period: '',
    description:
      'អនុវត្ត និងសាកល្បង CRUD endpoints ជាលំហាត់សិក្សា ដើម្បីហ្វឹកហាត់ការកំណត់ផ្លូវ API ការដោះស្រាយសំណើ និងប្រតិបត្តិការទិន្នន័យ។',
    technologies: [],
  },
] satisfies MemberProjectSummary[];

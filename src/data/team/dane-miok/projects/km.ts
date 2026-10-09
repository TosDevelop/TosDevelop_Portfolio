import type { MemberProjectSummary } from '../../../../types/index.ts';
import { projects as englishProjects } from './en.ts';

export const projects = [
  {
    ...englishProjects[0],
    title: 'ប្រព័ន្ធតាមដានកម្មសិក្សារបស់សិស្ស',
    role: 'អ្នកអភិវឌ្ឍន៍ Full Stack',
    period: '05 កក្កដា – 30 កក្កដា 2026',
    description:
      'បង្កើតមុខងារ Full Stack សម្រាប់ប្រព័ន្ធគ្រប់គ្រងកម្មសិក្សាដែលបែងចែកតួនាទីជាអ្នកគ្រប់គ្រង គ្រូណែនាំ សិស្ស និងក្រុមហ៊ុន ដោយប្រើ Vue.js និង Laravel។ ភ្ជាប់ REST APIs ជាមួយ Laravel Backend និងរចនា ព្រមទាំងគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ MySQL។',
  },
  {
    ...englishProjects[1],
    title: 'ប្រព័ន្ធគ្រប់គ្រងភោជនីយដ្ឋាន',
    role: 'អ្នកសម្របសម្រួលក្រុម និងអ្នកអភិវឌ្ឍន៍ Backend',
    period: '18 ឧសភា – 06 មិថុនា 2026',
    description:
      'បង្កើតប្រព័ន្ធ Backend RESTful ដោយប្រើ Node.js និង TypeScript។ អនុវត្តការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ JWT និងការកំណត់សិទ្ធិតាមតួនាទីសម្រាប់អ្នកគ្រប់គ្រង ចុងភៅ អ្នកគិតលុយ និងអតិថិជន។ រចនា និងបង្កើនប្រសិទ្ធភាពរចនាសម្ព័ន្ធមូលដ្ឋានទិន្នន័យ MySQL ដោយប្រើ TypeORM។',
  },
  {
    ...englishProjects[2],
    title: 'ប្រព័ន្ធទិញទំនិញអនឡាញ',
    role: 'អ្នកអភិវឌ្ឍន៍ Full Stack (គម្រោងបុគ្គល)',
    period: '19 មិថុនា – 26 មិថុនា 2026',
    description:
      'បង្កើតប្រព័ន្ធទិញទំនិញអនឡាញ Full Stack ដោយប្រើ Vue.js, Laravel និង MySQL។ អភិវឌ្ឍ RESTful APIs សម្រាប់គ្រប់គ្រងផលិតផល ការបញ្ជាទិញ និងអ្នកប្រើប្រាស់។ អនុវត្តការផ្ទៀងផ្ទាត់អត្តសញ្ញាណដែលមានសុវត្ថិភាព និងភ្ជាប់ Frontend ជាមួយ Backend យ៉ាងរលូន។',
  },
  {
    ...englishProjects[3],
    title: 'ប្រព័ន្ធកក់ដំណើរកម្សាន្ត',
    role: 'អ្នកអភិវឌ្ឍន៍ Full Stack',
    period: '15 កុម្ភៈ – 02 មេសា 2026',
    description:
      'អភិវឌ្ឍប្រព័ន្ធកក់សណ្ឋាគារ និងដំណើរកម្សាន្តដោយប្រើ React.js, Laravel និង TypeScript។ អនុវត្តការចូលប្រើប្រាស់ និងចុះឈ្មោះ ព្រមទាំងភ្ជាប់ Frontend ជាមួយ Backend យ៉ាងរលូន។ បង្កើតសមាសភាគ UI ដែលសម្របតាមទំហំអេក្រង់។',
  },
] satisfies MemberProjectSummary[];

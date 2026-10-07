import type { MemberProjectSummary } from '../../../../types/index.ts';

export const projects = [
  {
    title: 'Travel Map',
    role: 'អ្នកអភិវឌ្ឍ',
    period: '១២ សីហា ២០២៦ – ១៤ សីហា ២០២៦',
    description:
      'បង្កើតកម្មវិធីធ្វើដំណើរដែលមានការគ្រប់គ្រងដំណើរ និងកំណត់ហេតុធ្វើដំណើរ។ ប្រើ React, Leaflet និង Zustand សម្រាប់ផ្ទៃប្រទាក់ ផែនទី និងការរក្សាទុកស្ថានភាព។',
    technologies: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Firebase',
      'Leaflet',
      'Zustand',
      'Framer Motion',
      'Vite',
    ],
    link: 'https://travel-map-eight-neon.vercel.app/',
    repoUrl: 'https://github.com/reaksmey27/TravelMap',
  },
  {
    title: 'ប្រព័ន្ធគ្រប់គ្រងការសុំច្បាប់របស់សិស្ស',
    role: 'អ្នកអភិវឌ្ឍ',
    period: '០៣ កក្កដា ២០២៦ – ៣០ កក្កដា ២០២៦',
    description:
      'បង្កើតផ្ទាំងគ្រប់គ្រងសំណើសុំច្បាប់ដោយភ្ជាប់ REST API។ សហការជាមួយក្រុមតាមរយៈ Git/GitHub។',
    technologies: [
      'TypeScript',
      'Vue.js',
      'Laravel',
      'MySQL',
      'Postman',
      'GitHub',
    ],
    repositories: [
      {
        label: 'កូដ Frontend',
        url: 'https://github.com/G10-SLMS/G10-SLMS-FRONT',
      },
      {
        label: 'កូដ Backend',
        url: 'https://github.com/G10-SLMS/G10-SLMS-BACK',
      },
    ],
  },
  {
    title: 'គេហទំព័រពាណិជ្ជកម្មអេឡិចត្រូនិក Full Stack',
    role: 'អ្នកអភិវឌ្ឍ',
    period: '១៩ មិថុនា ២០២៦ – ៣០ មិថុនា ២០២៦',
    description:
      'បង្កើតផ្ទាំងគ្រប់គ្រងសម្រាប់អ្នកប្រើប្រាស់ និងអ្នកគ្រប់គ្រងដោយប្រើ Vue.js និង Laravel។ អនុវត្តមុខងារ CRUD, REST APIs និង MySQL។',
    technologies: [
      'Vue.js',
      'JavaScript',
      'Laravel',
      'MySQL',
      'Postman',
      'GitHub',
    ],
    repositories: [
      {
        label: 'កូដ Frontend',
        url: 'https://github.com/reaksmey27/Online_Shop_frontend',
      },
      {
        label: 'កូដ Backend',
        url: 'https://github.com/reaksmey27/Online_Shop_Backend',
      },
    ],
  },
  {
    title: 'Nike Shoes Shop',
    role: 'អ្នករចនា UX/UI',
    period: '១៣ ឧសភា ២០២៦ – ១៤ ឧសភា ២០២៦',
    description:
      'រចនាផ្ទៃប្រទាក់ពាណិជ្ជកម្មអេឡិចត្រូនិកទំនើបសម្រាប់លក់ស្បែកជើងកីឡា។ បង្កើតសមាសភាគ UI ដែលអាចប្រើឡើងវិញ និងគំរូដែលអាចធ្វើអន្តរកម្មបាន។',
    technologies: ['Figma'],
    link: 'https://www.figma.com/proto/1wLpEOyYMULf5jzfQgkHC2/shop?page-id=0%3A1&node-id=1-5&p=f&viewport=421%2C358%2C0.07&t=ISH3S6KtpKxCHRAh-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A5',
  },
  {
    title: 'PNC Student Star',
    repoUrl: 'https://github.com/sir-phy/pnc_student_star',
    role: 'អ្នកអភិវឌ្ឍ',
    period: '១៦ កុម្ភៈ ២០២៦ – ៤ មេសា ២០២៦',
    description:
      'បង្កើតផ្ទៃប្រទាក់អ្នកប្រើប្រាស់ និង REST APIs សម្រាប់ការវាយតម្លៃសិស្ស។ សហការក្នុងក្រុម Agile ដោយប្រើ Git និង GitHub។',
    technologies: [
      'TypeScript',
      'React.js',
      'Node.js',
      'Express.js',
      'Tailwind CSS',
      'MySQL',
      'Postman',
      'GitHub',
    ],
  },
  {
    title: 'CineMAX Movies',
    role: 'អ្នករចនា UX/UI និងអ្នកអភិវឌ្ឍ',
    period: '០១ កុម្ភៈ ២០២៦ – ២២ កុម្ភៈ ២០២៦',
    description:
      'បង្កើតផ្ទៃប្រទាក់អ្នកប្រើប្រាស់ដែលសម្របតាមទំហំអេក្រង់ដោយប្រើ React.js និងប្រើប្រាស់ REST APIs របស់ភាគីទីបី (TMDB)។',
    technologies: [
      'Figma',
      'React.js',
      'JavaScript',
      'Tailwind',
      'Firebase',
      'TMDB',
      'GitHub',
    ],
    repoUrl: 'https://github.com/reaksmey27/Movie-Website',
    link: 'https://movie-website-five-orpin.vercel.app/',
  },
] satisfies MemberProjectSummary[];

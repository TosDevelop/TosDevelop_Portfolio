import type { MemberProjectSummary } from '../../../../types/index.ts';

export const projects = [
  {
    title: 'ប្រព័ន្ធគ្រប់គ្រងការសុំច្បាប់',
    role: 'អ្នកអភិវឌ្ឍ',
    period: 'កក្កដា – សីហា ២០២៥',
    description:
      'ប្រព័ន្ធដែលបង្កើតដោយ Laravel សម្រាប់តាមដានវត្តមានបុគ្គលិក ការឈប់សម្រាក និងការសុំច្បាប់ ដោយក្រុមអាចមើលព័ត៌មានភ្លាមៗ និងដាក់ឱ្យដំណើរការលើ AWS EC2។',
    technologies: ['Laravel', 'MySQL', 'Vue.js', 'AWS EC2', 'Ubuntu'],
  },
  {
    title: 'ប្រព័ន្ធលក់ POS',
    role: 'Scrum Master និងអ្នកអភិវឌ្ឍ',
    period: 'មីនា – មេសា ២០២៥',
    description:
      'ប្រព័ន្ធ POS ដែលមានមុខងារគ្រប់គ្រងស្តុក តាមដានហិរញ្ញវត្ថុ ស្កេនបាកូដ និងការភ្ជាប់ជាមួយ chatbot របស់ Telegram។',
    technologies: [
      'PHP',
      'MySQL',
      'Bootstrap',
      'jQuery',
      'Chart.js',
      'AWS EC2',
    ],
  },
  {
    title: 'កម្មវិធីគ្រប់គ្រងការងារ',
    role: 'ប្រធានក្រុម',
    period: 'មករា ២០២៥',
    description:
      'កម្មវិធីរៀបចំការងារដែលមានការតាមដានស្ថានភាព និងការភ្ជាប់ប្រតិទិន។',
    technologies: ['Express', 'Firebase', 'SASS', 'Bootstrap', 'Chart.js'],
  },
  {
    title: 'ការប្រមូលទិន្នន័យពីគេហទំព័រដោយស្វ័យប្រវត្តិ',
    role: 'ប្រធានក្រុម',
    period: 'វិច្ឆិកា ២០២៤',
    description:
      'ឧបករណ៍លើកុំព្យូទ័រសម្រាប់ប្រមូល និងរៀបចំទិន្នន័យគេហទំព័រ ជាមួយផ្ទៃប្រទាក់ងាយស្រួលប្រើ។',
    technologies: ['Python', 'Requests', 'BeautifulSoup', 'Tkinter', 'JSON'],
  },
] satisfies MemberProjectSummary[];

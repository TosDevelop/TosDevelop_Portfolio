import { projects } from './projects/km.ts';
import type { TeamMember } from '../../../types/index.ts';
import type { KhmerContent } from '../../localization.ts';

export const km = {
  name: 'សាន រស្មី',
  role: 'អ្នកអភិវឌ្ឍគេហទំព័រ · UI/UX · QA',
  tagline:
    'និស្សិតផ្នែក Web Programming ដែលមានការប្តេជ្ញាចិត្តក្នុងការបង្កើតកម្មវិធីគេហទំព័រដែលមានរចនាសម្ព័ន្ធល្អ សម្របតាមទំហំអេក្រង់ និងងាយស្រួលប្រើ។',
  badge: 'អ្នកអភិវឌ្ឍគេហទំព័រ · UI/UX · QA',
  bio: 'និស្សិតផ្នែក Web Programming ដែលមានបទពិសោធន៍អនុវត្តក្នុងការបង្កើតកម្មវិធីគេហទំព័រដែលសម្របតាមទំហំអេក្រង់ ដោយប្រើ React.js, Vue.js, JavaScript, HTML, CSS និង Tailwind CSS។ មានជំនាញលើ REST APIs, CRUD, MySQL, Node.js, Laravel, Git/GitHub និង Postman។ ចូលចិត្តបង្កើតកម្មវិធីដែលងាយស្រួលប្រើ និងបន្តរៀនបច្ចេកវិទ្យាគេហទំព័រថ្មីៗ។',
  languages: [
    { language: 'ភាសាខ្មែរ', level: 'ភាសាកំណើត' },
    { language: 'ភាសាអង់គ្លេស', level: 'មធ្យម' },
  ],
  softSkills: [
    'ការសហការជាក្រុម',
    'ការដោះស្រាយបញ្ហា',
    'ការប្រាស្រ័យទាក់ទង',
    'ការគ្រប់គ្រងពេលវេលា',
    'ការយកចិត្តទុកដាក់លើព័ត៌មានលម្អិត',
    'ការសម្របខ្លួន',
    'ការរៀនបានរហ័ស',
  ],
  technicalSkills: [
    {
      category: 'ការអភិវឌ្ឍផ្នែកខាងមុខ',
      skills: [
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'Vue.js' },
        { name: 'React.js' },
        { name: 'Tailwind CSS' },
        { name: 'Bootstrap' },
        { name: 'ការរចនាគេហទំព័រតាមទំហំអេក្រង់' },
      ],
    },
    {
      category: 'ផ្នែកខាងក្រោយ និង API',
      skills: [
        { name: 'PHP' },
        { name: 'Laravel' },
        { name: 'Python' },
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'ការរួមបញ្ចូល REST API' },
        { name: 'OAuth' },
      ],
    },
    {
      category: 'មូលដ្ឋានទិន្នន័យ',
      skills: [{ name: 'MySQL' }, { name: 'SQL' }, { name: 'Firebase' }],
    },
    {
      category: 'ឧបករណ៍អភិវឌ្ឍន៍',
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'Postman' },
        { name: 'Jenkins' },
      ],
    },
    {
      category: 'ការធ្វើតេស្ត និង QA',
      skills: [{ name: 'Playwright' }],
    },
    {
      category: 'ការរចនា UI/UX',
      skills: [
        { name: 'Figma' },
        { name: 'ការរចនា UI' },
        { name: 'ការបង្កើតគំរូ' },
      ],
    },
    {
      category: 'ឧបករណ៍ AI',
      skills: [{ name: 'ChatGPT' }, { name: 'Claude' }, { name: 'Gemini' }],
    },
  ],
  experience: [
    {
      role: 'អ្នកហាត់ការអភិវឌ្ឍគេហទំព័រ និងកម្មវិធីទូរសព្ទ',
      company: 'SAEROSOFT INC.',
      period: 'សីហា ២០២៦ – បច្ចុប្បន្ន',
      type: 'កម្មសិក្សា',
      description:
        'បទពិសោធន៍កម្មសិក្សាផ្នែកអភិវឌ្ឍគេហទំព័រ និងកម្មវិធីទូរសព្ទ។',
      technologies: ['ការអភិវឌ្ឍគេហទំព័រ'],
    },
  ],
  education: [
    {
      degree: 'សញ្ញាបត្របរិញ្ញាបត្ររងផ្នែកសរសេរកម្មវិធីគេហទំព័រ',
      institution: 'អង្គការ Passerelles Numériques Cambodia (PNC)',
      period: '២០២៥ – បច្ចុប្បន្ន',
    },
    {
      degree: 'សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ',
      institution: 'វិទ្យាល័យរវៀង',
      period: '២០២២ – ២០២៤',
    },
  ],
  selectedProjects: projects,
} satisfies KhmerContent<TeamMember>;

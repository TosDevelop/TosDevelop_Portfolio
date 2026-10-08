import type { ExpertiseDomain } from '../../types/index.ts';
import type { KhmerContent } from '../localization.ts';
import type { EXPERTISE_EN } from './en.ts';

export const EXPERTISE_KM = {
  'frontend-development': {
    title: 'ការអភិវឌ្ឍ Frontend',
    description:
      'ការបង្កើតចំណុចប្រទាក់គេហទំព័រដែលឆ្លើយតបតាមទំហំអេក្រង់ ដោយប្រើ HTML, CSS, JavaScript និង Frontend frameworks។',
  },
  'backend-apis': {
    title: 'ការអភិវឌ្ឍ Backend និង APIs',
    description:
      'ការបង្កើតកម្មវិធីផ្នែកម៉ាស៊ីនមេ REST APIs ការផ្ទៀងផ្ទាត់សិទ្ធិ និងតក្កវិជ្ជាកម្មវិធី។',
  },
  'databases-data': {
    title: 'មូលដ្ឋានទិន្នន័យ និងសេវាទិន្នន័យ',
    description:
      'មូលដ្ឋានទិន្នន័យទំនាក់ទំនង សំណួរ SQL សេវា Backend និងឧបករណ៍រាយការណ៍ទិន្នន័យ។',
  },
  'ui-ux-design': {
    title: 'ការរចនា UI/UX',
    description:
      'ការរចនាចំណុចប្រទាក់ សមាសភាគដែលអាចប្រើឡើងវិញ និងគំរូអន្តរកម្មសម្រាប់បទពិសោធន៍អ្នកប្រើប្រាស់។',
  },
  'quality-assurance': {
    title: 'ការធ្វើតេស្ត និងការធានាគុណភាព',
    description:
      'ការធ្វើតេស្តស្វ័យប្រវត្តិកម្មលើកម្មវិធីរុករក និងការធ្វើតេស្ត API ដើម្បីផ្ទៀងផ្ទាត់ដំណើរការកម្មវិធី។',
  },
  'collaboration-planning': {
    title: 'ការគ្រប់គ្រងកំណែកូដ និងផែនការគម្រោង',
    description:
      'ការគ្រប់គ្រងកំណែកូដ ឃ្លាំងកូដរួម ការតាមដានភារកិច្ច និងលំហូរការងារជាក្រុម។',
  },
  'deployment-delivery': {
    title: 'Cloud និងការដាក់ឱ្យដំណើរការ',
    description:
      'ការបង្ហោះកម្មវិធី បរិស្ថាន Linux និងឧបករណ៍ CI សម្រាប់បង្កើត និងដាក់កម្មវិធីគេហទំព័រឱ្យដំណើរការ។',
  },
  'ai-assisted-development': {
    title: 'ការអភិវឌ្ឍដោយមានជំនួយពី AI',
    description:
      'ការប្រើជំនួយការ AI ដើម្បីគាំទ្រការរៀនសូត្រ ស្វែងរកគំនិត និងជួយការងារអភិវឌ្ឍប្រចាំថ្ងៃ។',
  },
} satisfies Record<keyof typeof EXPERTISE_EN, KhmerContent<ExpertiseDomain>>;

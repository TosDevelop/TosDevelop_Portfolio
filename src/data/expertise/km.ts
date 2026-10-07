import type { ExpertiseDomain } from '../../types/index.ts';
import type { KhmerContent } from '../localization.ts';
import type { EXPERTISE_EN } from './en.ts';

export const EXPERTISE_KM = {
  'full-stack-development': {
    title: 'ការអភិវឌ្ឍន៍ Full Stack',
    description:
      'Frontend, backend, APIs, ការផ្ទៀងផ្ទាត់សិទ្ធិ, មូលដ្ឋានទិន្នន័យ និងការដាក់ឱ្យដំណើរការសម្រាប់ប្រព័ន្ធគេហទំព័រជាក់ស្តែង។',
  },
  'quality-assurance': {
    title: 'ការធានាគុណភាព (QA)',
    description:
      'ការធ្វើតេស្តដោយដៃ, ការធ្វើតេស្តមុខងារ, ការធ្វើតេស្តតប, UAT, ករណីធ្វើតេស្ត និងការផ្ទៀងផ្ទាត់បញ្ហាកំហុស។',
  },
  'planning-team-delivery': {
    title: 'ការរៀបចំផែនការ និងការដឹកនាំក្រុម',
    description:
      'ការគាំទ្រតម្រូវការ, ការរៀបចំផែនការគម្រោង, ការសម្របសម្រួលភារកិច្ច និងការអនុវត្តការងារជាក្រុម។',
  },
  'data-reporting': {
    title: 'ទិន្នន័យ និងរបាយការណ៍',
    description:
      'របាយការណ៍ SQL, មូលដ្ឋានទិន្នន័យទំនាក់ទំនង, ផ្ទាំងគ្រប់គ្រង និងឧបករណ៍វិភាគទិន្នន័យ។',
  },
  'cloud-infrastructure': {
    title: 'ពពក (Cloud) និងហេដ្ឋារចនាសម្ព័ន្ធ',
    description:
      'ការដាក់ឱ្យដំណើរការលើ Linux, cloud hosting, CI/CD និងការប្រើប្រាស់ container infrastructure។',
  },
  'roaming-interconnection': {
    title: 'Roaming & Interconnection',
    description:
      'ការផ្ទៀងផ្ទាត់សេវា Roaming, លំហូរការងារ TAP, ស្វ័យប្រវត្តិកម្មប្រតិបត្តិការ និងប្រព័ន្ធទូរគមនាគមន៍ផ្ទៃក្នុង។',
  },
} satisfies Record<keyof typeof EXPERTISE_EN, KhmerContent<ExpertiseDomain>>;

import type { MemberProjectSummary } from '../../../../types/index.ts';

export const projects = [
  {
    title: 'Cambodia Airports - បទពិសោធន៍ផ្នែក IT និងទិន្នន័យ',
    role: 'អ្នកហាត់ការផ្នែកទិន្នន័យ និង IT',
    period: '២០២៥',
    description:
      'បទពិសោធន៍កម្មសិក្សាជាក់ស្តែងលើការគាំទ្រផ្នែក IT មូលដ្ឋានទិន្នន័យ ការគ្រប់គ្រងសិទ្ធិចូលប្រើ GLPI ការបញ្ចូលទិន្នន័យ និងឧបករណ៍វិភាគទិន្នន័យ។',
    technologies: ['MySQL', 'SQL Server', 'GLPI'],
  },
] satisfies MemberProjectSummary[];

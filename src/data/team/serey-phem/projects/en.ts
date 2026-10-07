import type { MemberProjectSummary } from '../../../../types/index.ts';

export const projects = [
  {
    title: 'Farm Management System',
    role: 'Lead Developer',
    period: 'Jul – Aug 2025',
    description:
      'A farm management platform designed to record crop types, planting dates, growth stages and operational notes.',
    technologies: ['React.js', 'Laravel', 'Python', 'MySQL'],
  },
] satisfies MemberProjectSummary[];

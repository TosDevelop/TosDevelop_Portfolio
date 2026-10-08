import type { ExpertiseDomain } from '../../types/index.ts';

export type ExpertiseDomainEnglish = Pick<
  ExpertiseDomain,
  'title' | 'description'
>;

export const EXPERTISE_EN = {
  'frontend-development': {
    title: 'Frontend Development',
    description:
      'Responsive interfaces and interactive web experiences using HTML, CSS, JavaScript and modern frontend frameworks.',
  },
  'backend-apis': {
    title: 'Backend Development & APIs',
    description:
      'Server-side applications, REST APIs, authentication and application logic using backend languages, runtimes and frameworks.',
  },
  'databases-data': {
    title: 'Databases & Data Services',
    description:
      'Relational databases, SQL queries, managed backend services and data reporting tools.',
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    description:
      'Interface design, reusable visual components and interactive prototypes for clear user experiences.',
  },
  'quality-assurance': {
    title: 'Testing & Quality Assurance',
    description:
      'Browser automation and API testing to check application behavior and validate integrations.',
  },
  'collaboration-planning': {
    title: 'Version Control & Project Planning',
    description:
      'Source control, shared repositories, task tracking and team workflows for coordinating development work.',
  },
  'deployment-delivery': {
    title: 'Cloud & Deployment',
    description:
      'Application hosting, Linux environments and continuous integration tools for building and delivering web applications.',
  },
  'ai-assisted-development': {
    title: 'AI-Assisted Development',
    description:
      'AI assistants that support learning, exploring implementation ideas and everyday development tasks.',
  },
} satisfies Record<string, ExpertiseDomainEnglish>;

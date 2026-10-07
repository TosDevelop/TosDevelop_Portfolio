import type { ExpertiseDomain } from '../../types/index.ts';

export type ExpertiseDomainEnglish = Pick<
  ExpertiseDomain,
  'title' | 'description'
>;

export const EXPERTISE_EN = {
  'full-stack-development': {
    title: 'Full Stack Development',
    description:
      'Frontend, backend, APIs, authentication, databases and deployment for practical web systems.',
  },
  'quality-assurance': {
    title: 'Quality Assurance',
    description:
      'Manual testing, functional testing, regression, UAT, test cases and defect validation.',
  },
  'planning-team-delivery': {
    title: 'Planning & Team Delivery',
    description:
      'Requirements support, project planning, task coordination and collaborative delivery practices.',
  },
  'data-reporting': {
    title: 'Data & Reporting',
    description:
      'SQL reporting, relational databases, dashboards and data analysis tooling.',
  },
  'cloud-infrastructure': {
    title: 'Cloud & Infrastructure',
    description:
      'Linux-based deployment, cloud hosting, CI/CD and container infrastructure exposure.',
  },
  'roaming-interconnection': {
    title: 'Roaming & Interconnection',
    description:
      'Roaming service validation, TAP workflows, operations automation and internal telecom systems.',
  },
} satisfies Record<string, ExpertiseDomainEnglish>;

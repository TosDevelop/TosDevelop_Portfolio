import { TEAM_MEMBERS } from '../data/team/index.ts';
import { PROJECTS_DATA } from '../data/projects/index.ts';
import { APP_TABS, getPagePath, type AppTab } from './navigation.ts';
import { SITE_NAME } from './site.ts';

export interface SeoPage {
  path: string;
  tab: AppTab;
  title: string;
  description: string;
  memberId?: string;
  projectId?: string;
}

const pageContent: Record<AppTab, [string, string]> = {
  home: [
    'Student Developers & Technology Portfolio',
    'Meet TosDevelop, a PNC student technology team in Cambodia. Explore our developers, projects, and skills in web development, QA, data, and technical operations.',
  ],
  about: [
    'About Our Team',
    'Learn about TosDevelop, a student technology team at Passerelles Numériques Cambodia, and our approach to collaboration, learning, and building practical solutions.',
  ],
  team: [
    'Meet the Team',
    'Meet the TosDevelop team. Explore student developer profiles, technical skills, professional experience, and projects from Passerelles Numériques Cambodia.',
  ],
  expertise: [
    'Our Technology Expertise',
    'Explore TosDevelop expertise in frontend and backend development, databases, UI/UX design, testing, project planning, cloud deployment, and AI-assisted development.',
  ],
  projects: [
    'Projects & Case Studies',
    'Discover TosDevelop projects and case studies, including the technologies, challenges, solutions, and lessons behind our practical technology experience.',
  ],
  contact: [
    'Contact Our Team',
    'Connect with TosDevelop and its team members to discuss projects, collaboration, and technology opportunities in Cambodia.',
  ],
};

export const SEO_PAGES: SeoPage[] = [
  ...APP_TABS.map((tab) => ({
    path: getPagePath(tab),
    tab,
    title: `${pageContent[tab][0]} | ${SITE_NAME}`,
    description: pageContent[tab][1],
  })),
  ...TEAM_MEMBERS.map((member) => ({
    path: getPagePath('team', member.id),
    tab: 'team' as const,
    memberId: member.id,
    title: `${member.name} — ${member.role} | ${SITE_NAME}`,
    description: `${member.name}, ${member.role} at ${SITE_NAME}. ${member.tagline}`,
  })),
  ...PROJECTS_DATA.map((project) => ({
    path: getPagePath('projects', undefined, project.id),
    tab: 'projects' as const,
    projectId: project.id,
    title: `${project.title} | ${SITE_NAME}`,
    description: project.tagline,
  })),
];

export function findSeoPage(pathname: string) {
  const normalized = `${pathname.replace(/\/+$/, '')}/`;
  return SEO_PAGES.find((page) => page.path === normalized);
}

export function getStructuredData(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    description: pageContent.home[1],
    ...(siteUrl ? { url: `${siteUrl}/` } : {}),
  };
}

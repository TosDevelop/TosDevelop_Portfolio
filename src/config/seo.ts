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
    'Student Developers in Cambodia',
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
    'Our Skills',
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

export function getStructuredData(siteUrl: string, page?: SeoPage) {
  const baseUrl = siteUrl.replace(/\/+$/, '');
  const organizationId = `${baseUrl}/#organization`;
  const websiteId = `${baseUrl}/#website`;
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: SITE_NAME,
      url: `${baseUrl}/`,
      logo: `${baseUrl}/tosdevelop-logo.png`,
      description: pageContent.home[1],
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: `${baseUrl}/`,
      name: SITE_NAME,
      publisher: { '@id': organizationId },
    },
  ];
  if (page) {
    const url = `${baseUrl}${page.path}`;
    const member = TEAM_MEMBERS.find((item) => item.id === page.memberId);
    const project = PROJECTS_DATA.find((item) => item.id === page.projectId);
    graph.push({
      '@type': member
        ? 'ProfilePage'
        : page.tab === 'about'
          ? 'AboutPage'
          : page.tab === 'contact'
            ? 'ContactPage'
            : 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      isPartOf: { '@id': websiteId },
      ...(member || project ? { mainEntity: { '@id': `${url}#entity` } } : {}),
      ...(page.path !== '/'
        ? { breadcrumb: { '@id': `${url}#breadcrumb` } }
        : {}),
    });
    if (member) {
      graph.push({
        '@type': 'Person',
        '@id': `${url}#entity`,
        name: member.name,
        url,
        jobTitle: member.role,
        description: member.bio,
        memberOf: { '@id': organizationId },
      });
    }
    if (project) {
      graph.push({
        '@type': 'CreativeWork',
        '@id': `${url}#entity`,
        name: project.title,
        url,
        description: project.tagline,
        keywords: project.technologies.join(', '),
      });
    }
    if (page.path !== '/') {
      const crumbs = [{ name: 'Home', item: `${baseUrl}/` }];
      if (member || project) {
        crumbs.push({
          name: member ? 'Team' : 'Projects',
          item: `${baseUrl}${getPagePath(page.tab)}`,
        });
      }
      crumbs.push({
        name: member?.name ?? project?.title ?? page.title.split(' | ')[0],
        item: url,
      });
      graph.push({
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: crumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          ...crumb,
        })),
      });
    }
  }
  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

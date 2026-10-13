import { TEAM_MEMBERS } from '../data/team/index.ts';
import { PROJECTS_DATA } from '../data/projects/index.ts';
import { APP_TABS, getPagePath, type AppTab } from './navigation.ts';
import { SITE_NAME, TEAM_CONTACT } from './site.ts';

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
    'Team Projects',
    'A space for projects created together by the TosDevelop team. We have not completed a shared project yet; our team projects will appear here when ready.',
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

const SOCIAL_HOSTS = new Set([
  'github.com',
  'linkedin.com',
  'www.linkedin.com',
  'facebook.com',
  'www.facebook.com',
]);

function isProfileUrl(value: string | undefined): value is string {
  if (!value) return false;
  try {
    const url = new URL(value);
    return (
      url.protocol === 'https:' &&
      !(SOCIAL_HOSTS.has(url.hostname) && url.pathname === '/')
    );
  } catch {
    return false;
  }
}

function getPageSchemaType(
  page: SeoPage,
  isMember: boolean,
  isProject: boolean,
) {
  if (isMember) return 'ProfilePage';
  if (page.tab === 'about') return 'AboutPage';
  if (page.tab === 'contact') return 'ContactPage';
  if (!isProject && ['team', 'projects', 'expertise'].includes(page.tab))
    return 'CollectionPage';
  return 'WebPage';
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
      sameAs: [TEAM_CONTACT.github],
      email: TEAM_CONTACT.email,
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
    const webPage: Record<string, unknown> = {
      '@type': getPageSchemaType(page, Boolean(member), Boolean(project)),
      '@id': `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: 'en',
      isPartOf: { '@id': websiteId },
      ...(member || project ? { mainEntity: { '@id': `${url}#entity` } } : {}),
      ...(page.path !== '/'
        ? { breadcrumb: { '@id': `${url}#breadcrumb` } }
        : {}),
    };
    graph.push(webPage);

    if (member) {
      graph.push({
        '@type': 'Person',
        '@id': `${url}#entity`,
        name: member.name,
        url,
        jobTitle: member.role,
        description: member.bio,
        memberOf: { '@id': organizationId },
        alternateName: member.nameKm,
        knowsAbout: [
          ...new Set(
            member.technicalSkills.flatMap((group) =>
              group.skills.map((skill) => skill.name),
            ),
          ),
        ],
        sameAs: [
          member.contact.portfolio,
          member.contact.github,
          member.contact.linkedin,
          member.contact.facebook,
        ].filter(isProfileUrl),
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
    if (
      !member &&
      !project &&
      (page.tab === 'team' || page.tab === 'projects')
    ) {
      const items =
        page.tab === 'team'
          ? TEAM_MEMBERS.map((item) => ({
              name: item.name,
              path: getPagePath('team', item.id),
            }))
          : PROJECTS_DATA.map((item) => ({
              name: item.title,
              path: getPagePath('projects', undefined, item.id),
            }));
      const listId = `${url}#list`;
      webPage.mainEntity = { '@id': listId };
      graph.push({
        '@type': 'ItemList',
        '@id': listId,
        numberOfItems: items.length,
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          url: `${baseUrl}${item.path}`,
        })),
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

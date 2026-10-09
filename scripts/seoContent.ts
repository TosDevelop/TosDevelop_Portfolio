import { TEAM_MEMBERS } from '../src/data/team/index.ts';
import { PROJECTS_DATA } from '../src/data/projects/index.ts';
import { SEO_PAGES, type SeoPage } from '../src/config/seo.ts';
import { getPagePath } from '../src/config/navigation.ts';
import { SITE_NAME } from '../src/config/site.ts';

export const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        char
      ]!,
  );

const paragraph = (text: string) => `<p>${escapeHtml(text)}</p>`;
const list = (items: string[]) =>
  `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
const link = (path: string, text: string) =>
  `<a href="${escapeHtml(path)}">${escapeHtml(text)}</a>`;

// Visible initial content for every visitor; React replaces it on startup.
// Use the same portfolio data as the interactive pages, never crawler-only copy.
export function renderSeoContent(page?: SeoPage) {
  const navigation = SEO_PAGES.filter(
    (item) => !item.memberId && !item.projectId,
  )
    .map((item) => link(item.path, item.title.split(' | ')[0]))
    .join(' · ');
  let content = '';
  const member = TEAM_MEMBERS.find((item) => item.id === page?.memberId);
  const project = PROJECTS_DATA.find((item) => item.id === page?.projectId);
  if (member) {
    content = `<h1>${escapeHtml(member.name)}</h1>${paragraph(member.role)}${paragraph(member.bio)}
      ${member.lookingFor.length ? `<h2>Looking for</h2>${list(member.lookingFor)}` : ''}
      <h2>Technical skills</h2>${member.technicalSkills.map((group) => `<h3>${escapeHtml(group.category)}</h3>${list(group.skills.map((skill) => skill.name))}`).join('')}
      <h2>Experience</h2>${member.experience.map((item) => `<h3>${escapeHtml(item.role)} — ${escapeHtml(item.company)}</h3>${paragraph(item.period)}${paragraph(item.description)}`).join('')}
      <h2>Education</h2>${list(member.education.map((item) => `${item.degree} — ${item.institution}, ${item.period}`))}
      <h2>Selected projects</h2>${member.selectedProjects.map((item) => `<h3>${escapeHtml(item.title)}</h3>${paragraph(item.description)}`).join('')}`;
  } else if (project) {
    content = `<h1>${escapeHtml(project.title)}</h1>${paragraph(project.tagline)}
      <h2>Problem and goal</h2>${paragraph(project.problemGoal)}
      <h2>Solution</h2>${paragraph(project.solutionApproach)}
      <h2>Key features</h2>${list(project.keyFeatures)}
      <h2>Results and learning</h2>${list(project.outcomeLearning)}
      <h2>Technologies</h2>${list(project.technologies)}`;
  } else if (page) {
    content = `<h1>${escapeHtml(page.title.split(' | ')[0])}</h1>${paragraph(page.description)}`;
    if (['home', 'team', 'about', 'contact'].includes(page.tab)) {
      content += `<h2>Our team</h2>${TEAM_MEMBERS.map((item) => `<article><h3>${link(getPagePath('team', item.id), item.name)}</h3>${paragraph(item.role)}${paragraph(item.tagline)}</article>`).join('')}`;
    }
    if (['home', 'projects'].includes(page.tab)) {
      content += `<h2>Project portfolio</h2>${PROJECTS_DATA.map((item) => `<article><h3>${link(getPagePath('projects', undefined, item.id), item.title)}</h3>${paragraph(item.tagline)}</article>`).join('')}`;
    }
    if (page.tab === 'expertise') {
      content += list([
        ...new Set(
          TEAM_MEMBERS.flatMap((item) =>
            item.technicalSkills.flatMap((group) =>
              group.skills.map((skill) => skill.name),
            ),
          ),
        ),
      ]);
    }
    if (page.tab === 'contact') {
      content +=
        paragraph('Contact TosDevelop about projects and collaboration.') +
        link('mailto:tosdevelop2026@gmail.com', 'tosdevelop2026@gmail.com');
    }
  } else {
    content =
      '<h1>Page not found</h1><p>This page is unavailable or may have moved.</p>';
  }
  return `<div id="root"><header class="mx-auto max-w-7xl px-6 py-6">${link('/', SITE_NAME)}<nav aria-label="Main navigation">${navigation}</nav></header><main class="mx-auto max-w-7xl px-6 py-12 space-y-6">${content}</main></div>`;
}

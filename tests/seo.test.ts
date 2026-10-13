import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import test from 'node:test';
import {
  SEO_PAGES,
  findSeoPage,
  getStructuredData,
} from '../src/config/seo.ts';
import { SITE_URL } from '../src/config/site.ts';
import { getPagePath } from '../src/config/navigation.ts';
import { renderSeoHead } from '../scripts/seoPlugin.ts';
import { escapeHtml, renderSeoContent } from '../scripts/seoContent.ts';
import { TEAM_MEMBERS } from '../src/data/team/index.ts';
import { PROJECTS_DATA } from '../src/data/projects/index.ts';
import { EXPERTISE_DOMAINS } from '../src/data/expertise/index.ts';
import { en } from '../src/data/translations/en.ts';

test('team projects stay empty while member portfolios remain available', () => {
  assert.equal(PROJECTS_DATA.length, 0);
  assert.ok(!SEO_PAGES.some((page) => page.projectId));
  assert.ok(TEAM_MEMBERS.some((member) => member.selectedProjects.length > 0));
  const html = renderSeoContent(findSeoPage('/projects/'));
  assert.ok(html.includes(escapeHtml(en.projects.emptyTitle)));
  assert.ok(html.includes(escapeHtml(en.projects.emptyDescription)));
  assert.ok(!existsSync('dist/projects/farm-management-system/index.html'));
  assert.equal(findSeoPage('/projects/farm-management-system/'), undefined);
});

test('initial About and Expertise content matches the visible sections', () => {
  const about = renderSeoContent(findSeoPage('/about/'));
  for (const text of [
    en.about.missionTitle,
    en.about.missionDesc,
    en.about.visionTitle,
    en.about.visionDesc,
    ...en.howWeWork.steps.flatMap((step) => [step.title, step.desc]),
  ]) {
    assert.ok(about.includes(escapeHtml(text)), text);
  }
  const expertise = renderSeoContent(findSeoPage('/expertise/'));
  for (const domain of EXPERTISE_DOMAINS) {
    for (const text of [
      domain.title,
      domain.description,
      ...domain.technologies,
    ]) {
      assert.ok(expertise.includes(escapeHtml(text)), text);
    }
    for (const id of domain.relatedMemberIds) {
      if (TEAM_MEMBERS.some((member) => member.id === id)) {
        assert.ok(expertise.includes(`href="${getPagePath('team', id)}"`));
      }
    }
  }
  for (const removed of [
    'Nuxt.js',
    'SASS',
    'Flask',
    'Django',
    'SQLite',
    'Power BI',
    'Trello',
    'Cloudflare',
    'Netlify',
  ]) {
    assert.ok(!expertise.includes(`<li>${removed}</li>`));
  }
});

test('listing schema links to the published collection without treating details as collections', () => {
  for (const tab of ['team', 'projects'] as const) {
    const page = findSeoPage(`/${tab}/`)!;
    const graph = getStructuredData(SITE_URL, page)['@graph'];
    const collection = graph.find(
      (item) => item['@type'] === 'CollectionPage',
    )!;
    const list = graph.find((item) => item['@type'] === 'ItemList')!;
    assert.deepEqual(collection.mainEntity, { '@id': list['@id'] });
    const details = SEO_PAGES.filter(
      (item) => item.tab === tab && (item.memberId || item.projectId),
    );
    assert.equal(list.numberOfItems, details.length);
    assert.deepEqual(
      (list.itemListElement as { url: string; position: number }[]).map(
        (item) => [item.position, item.url],
      ),
      details.map((item, index) => [index + 1, `${SITE_URL}${item.path}`]),
    );
    for (const detail of details) {
      assert.ok(
        !getStructuredData(SITE_URL, detail)['@graph'].some(
          (item) => item['@type'] === 'CollectionPage',
        ),
      );
    }
  }
});

test('profile schema uses real skills and excludes placeholder social links', () => {
  for (const member of TEAM_MEMBERS) {
    const page = findSeoPage(getPagePath('team', member.id))!;
    const person = getStructuredData(SITE_URL, page)['@graph'].find(
      (item) => item['@type'] === 'Person',
    )!;
    assert.equal(person.alternateName, member.nameKm);
    assert.deepEqual(person.knowsAbout, [
      ...new Set(
        member.technicalSkills.flatMap((group) =>
          group.skills.map((skill) => skill.name),
        ),
      ),
    ]);
    assert.ok(
      (person.sameAs as string[]).every(
        (url) =>
          !/^https:\/\/(www\.)?(github|linkedin|facebook)\.com\/?$/.test(url),
      ),
    );
    if (member.contact.portfolio)
      assert.ok((person.sameAs as string[]).includes(member.contact.portfolio));
    assert.ok(
      renderSeoHead(page).includes('property="og:type" content="profile"'),
    );
  }
  assert.ok(
    renderSeoHead(SEO_PAGES[0]).includes(
      'property="og:type" content="website"',
    ),
  );
});

test('all listing and detail URLs resolve uniquely, including non-trailing-slash links', () => {
  assert.equal(
    new Set(SEO_PAGES.map((page) => page.path)).size,
    SEO_PAGES.length,
  );
  assert.equal(
    new Set(SEO_PAGES.map((page) => page.title)).size,
    SEO_PAGES.length,
  );
  for (const page of SEO_PAGES) {
    assert.equal(findSeoPage(page.path), page);
    assert.equal(findSeoPage(page.path.replace(/\/$/, '')), page);
    assert.equal(
      getPagePath(page.tab, page.memberId, page.projectId),
      page.path,
    );
  }
  assert.equal(findSeoPage('/team/missing/'), undefined);
  assert.equal(findSeoPage('/unknown/'), undefined);
  assert.equal(getPagePath('team', 'a/b'), '/team/a%2Fb/');
});

test('metadata escapes content and does not index unknown routes', () => {
  const html = renderSeoHead({
    ...SEO_PAGES[0],
    title: '<script>"&',
    description: '"<unsafe>',
  });
  assert.ok(html.includes('&lt;script&gt;&quot;&amp;'));
  assert.ok(html.includes('&quot;&lt;unsafe&gt;'));
  const missing = renderSeoHead();
  assert.ok(missing.includes('noindex, follow'));
  assert.ok(!missing.includes('rel="canonical"'));
});

test('production output contains a matching HTML head and sitemap entry for every page', () => {
  const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
  assert.equal((sitemap.match(/<loc>/g) ?? []).length, SEO_PAGES.length);
  for (const page of SEO_PAGES) {
    const html = readFileSync(`dist${page.path}index.html`, 'utf8');
    assert.equal((html.match(/rel="canonical"/g) ?? []).length, 1);
    assert.ok(html.includes(`href="${SITE_URL}${page.path}"`));
    assert.ok(sitemap.includes(`<loc>${SITE_URL}${page.path}</loc>`));
    assert.ok(html.includes(renderSeoHead(page)));
    assert.ok(html.includes('type="module"'));
    assert.ok(!html.includes('/src/main.tsx'));
    const json = html.match(
      /<script id="page-structured-data" type="application\/ld\+json">(.*?)<\/script>/s,
    )?.[1];
    assert.deepEqual(JSON.parse(json!), getStructuredData(SITE_URL, page));
    assert.ok(html.includes(renderSeoContent(page)));
    assert.ok(!html.includes('<div id="root"></div>'));
    assert.equal((html.match(/<h1>/g) ?? []).length, 1);
    assert.ok(html.includes('<nav aria-label="Main navigation">'));
    const member = TEAM_MEMBERS.find((item) => item.id === page.memberId);
    const project = PROJECTS_DATA.find((item) => item.id === page.projectId);
    if (member) assert.ok(html.includes(escapeHtml(member.bio)));
    if (project) assert.ok(html.includes(escapeHtml(project.problemGoal)));
  }
  assert.ok(readFileSync('dist/404.html', 'utf8').includes('noindex, follow'));
  assert.ok(
    readFileSync('dist/robots.txt', 'utf8').includes(`${SITE_URL}/sitemap.xml`),
  );
  assert.ok(existsSync('dist/tosdevelop-logo.png'));
});

test('initial content escapes data and links to every published profile and project', () => {
  const html = renderSeoContent({
    ...SEO_PAGES[0],
    description: '<script>alert("x")</script>',
  });
  assert.ok(!html.includes('<script>'));
  assert.ok(html.includes('&lt;script&gt;'));
  for (const page of SEO_PAGES) {
    assert.ok(html.includes(`href="${page.path}"`));
  }
});

test('structured data describes the current entity and breadcrumb ancestry', () => {
  const page = SEO_PAGES.find((item) => item.memberId)!;
  const graph = getStructuredData(SITE_URL, page)['@graph'];
  const profile = graph.find((item) => item['@type'] === 'ProfilePage')!;
  assert.equal(profile.url, `${SITE_URL}${page.path}`);
  assert.ok(graph.some((item) => item['@type'] === 'Person'));
  const breadcrumbs = graph.find((item) => item['@type'] === 'BreadcrumbList')!;
  assert.deepEqual(breadcrumbs.itemListElement, [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Team',
      item: `${SITE_URL}/team/`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: TEAM_MEMBERS[0].name,
      item: `${SITE_URL}${page.path}`,
    },
  ]);
  const missing = getStructuredData(SITE_URL)['@graph'];
  assert.ok(
    !missing.some(
      (item) => item['@type'] === 'ProfilePage' || item['@type'] === 'Person',
    ),
  );
});

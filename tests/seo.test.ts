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

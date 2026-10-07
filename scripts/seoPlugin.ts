import { readFileSync } from 'node:fs';
import type { Plugin } from 'vite';
import {
  SEO_PAGES,
  findSeoPage,
  getStructuredData,
  type SeoPage,
} from '../src/config/seo.ts';
import { SITE_NAME, SITE_URL } from '../src/config/site.ts';

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        char
      ]!,
  );

export function renderSeoHead(page?: SeoPage) {
  const title = page?.title ?? `Page Not Found | ${SITE_NAME}`;
  const description =
    page?.description ?? 'The requested TosDevelop page could not be found.';
  const url = page ? `${SITE_URL}${page.path}` : '';
  const image = `${SITE_URL}/tosdevelop-logo.png`;
  return `<!-- seo:start -->
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="${page ? 'index, follow, max-image-preview:large' : 'noindex, follow'}" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:alt" content="${SITE_NAME} logo" />
    <meta property="og:image:width" content="1254" />
    <meta property="og:image:height" content="1254" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="twitter:image:alt" content="${SITE_NAME} logo" />
    ${url ? `<link rel="canonical" href="${escapeHtml(url)}" /><meta property="og:url" content="${escapeHtml(url)}" />` : ''}
    <script type="application/ld+json">${JSON.stringify(getStructuredData(SITE_URL)).replace(/</g, '\\u003c')}</script>
    <!-- seo:end -->`;
}

function withSeo(html: string, page?: SeoPage) {
  return html.replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, () =>
    renderSeoHead(page),
  );
}

export function seoPlugin(): Plugin {
  return {
    name: 'tosdevelop-seo',
    enforce: 'post',
    transformIndexHtml(html, context) {
      return withSeo(
        html,
        findSeoPage(
          context.server ? (context.originalUrl?.split('?')[0] ?? '/') : '/',
        ),
      );
    },
    generateBundle: {
      order: 'post',
      handler(_options, bundle) {
        const entry = bundle['index.html'];
        if (!entry || entry.type !== 'asset')
          throw new Error('Missing built index.html');
        const html = String(entry.source);
        for (const page of SEO_PAGES.filter((page) => page.path !== '/')) {
          this.emitFile({
            type: 'asset',
            fileName: `${page.path.slice(1)}index.html`,
            source: withSeo(html, page),
          });
        }
        this.emitFile({
          type: 'asset',
          fileName: '404.html',
          source: withSeo(html),
        });
        this.emitFile({
          type: 'asset',
          fileName: 'tosdevelop-logo.png',
          source: readFileSync(
            new URL('../src/assets/logo/tosdevelop-logo.png', import.meta.url),
          ),
        });
        this.emitFile({
          type: 'asset',
          fileName: 'robots.txt',
          source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
        });
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${SEO_PAGES.map((page) => `  <url><loc>${escapeHtml(`${SITE_URL}${page.path}`)}</loc></url>`).join('\n')}\n</urlset>\n`,
        });
      },
    },
  };
}

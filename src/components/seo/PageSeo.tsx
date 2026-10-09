import { useEffect } from 'react';
import { SITE_NAME, SITE_URL } from '@/config/site';
import { getStructuredData, type SeoPage } from '@/config/seo';

export function PageSeo({ page }: { page: SeoPage | undefined }) {
  useEffect(() => {
    const title = page?.title ?? `Page Not Found | ${SITE_NAME}`;
    const description =
      page?.description ?? 'The requested TosDevelop page could not be found.';
    document.title = title;
    let structuredData = document.head.querySelector<HTMLScriptElement>(
      '#page-structured-data',
    );
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'page-structured-data';
      structuredData.type = 'application/ld+json';
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify(
      getStructuredData(SITE_URL, page),
    );
    const updateMeta = (key: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.head.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${key}"]`,
      );
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };
    updateMeta('description', description);
    updateMeta(
      'robots',
      page ? 'index, follow, max-image-preview:large' : 'noindex, follow',
    );
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (page) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `${SITE_URL}${page.path}`;
      updateMeta('og:url', canonical.href, true);
    } else {
      canonical?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
    }
  }, [page]);
  return null;
}

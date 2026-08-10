import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { isPublished } from '../utils/articles';

const staticPaths = ['', 'about/', 'resume/', 'uses/', 'projects/', 'timeline/'];

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://bruce-lcz.github.io');
  const articles: CollectionEntry<'articles'>[] = (await getCollection('articles')).filter(isPublished);
  const paths = [
    ...staticPaths,
    ...articles.map((article) => `articles/${article.id}/`),
  ];
  const urls = paths.map((path) => new URL(path, base).toString());

  const body = urls
    .map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};

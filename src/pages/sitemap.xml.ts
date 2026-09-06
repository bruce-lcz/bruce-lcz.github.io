import type { APIRoute } from 'astro';
import { UNIFIED_PROJECTS } from '../data/projects';

const staticPaths = ['', 'resume/', 'uses/', 'projects/', 'timeline/'];

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
  const paths = [
    ...staticPaths,
    ...UNIFIED_PROJECTS.map((project) => `projects/${project.id}/`),
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

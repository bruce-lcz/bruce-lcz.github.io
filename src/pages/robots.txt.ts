import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://bruce-lcz.github.io');
  const sitemap = new URL('sitemap.xml', base).toString();

  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { isPublished, sortArticles } from '../utils/articles';

export const GET: APIRoute = async ({ site }) => {
  const articles = sortArticles((await getCollection('articles')).filter(isPublished));

  return rss({
    title: 'Bruce Cheng — Writing',
    description: 'Articles about AI engineering, dev tools, learning, and life.',
    site: site ?? 'https://bruce-lcz.github.io',
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.publishedAt,
      link: `/articles/${article.id}/`,
    })),
  });
};

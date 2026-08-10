import type { CollectionEntry } from 'astro:content';

export function isPublished(article: CollectionEntry<'articles'>): boolean {
  if (import.meta.env.DEV) {
    return true;
  }
  return !article.data.draft && article.data.publishedAt <= new Date();
}

export function sortArticles(articles: CollectionEntry<'articles'>[]) {
  return articles.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}

export function getArticleLanguage(article: CollectionEntry<'articles'>) {
  return article.data.lang;
}

export function getTranslation(
  article: CollectionEntry<'articles'>,
  articles: CollectionEntry<'articles'>[],
) {
  return articles.find(
    (candidate) =>
      candidate.data.translationKey === article.data.translationKey
      && candidate.data.lang !== article.data.lang,
  );
}

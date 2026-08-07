import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export interface ArticlePreview {
    id: string;
    title: string;
    description: string;
    publishedAt: string; // ISO string
    category: string;
    tags: string[];
    cover?: string;
}

interface RecentArticlesProps {
    articles: ArticlePreview[];
}

export const RecentArticles: React.FC<RecentArticlesProps> = ({ articles }) => {
    const { language } = useLanguage();
    
    if (!articles || articles.length === 0) return null;

    return (
        <section id="articles" className="mx-auto max-w-[90rem] scroll-mt-24 px-6 py-20">
            <div className="rounded-[32px] border border-white/80 bg-white/90 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:p-8">
                <div className="mb-8 grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-end">
                    <div>
                        <p className="editorial-kicker">
                            {language === 'zh' ? '知識分享' : 'Knowledge Base'}
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                            {language === 'zh' ? '最新文章' : 'Latest Articles'}
                        </h2>
                    </div>
                    <p className="max-w-[42rem] text-[0.98rem] leading-7 text-gray-600">
                        {language === 'zh'
                            ? '探索我在 AI 部署、流程設計與工程實踐的深度分享。'
                            : 'Explore my deep dives and practices in AI deployment, workflow design, and engineering.'}
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article, index) => (
                        <a
                            key={article.id}
                            href={`/articles/${article.id}`}
                            className="group flex flex-col rounded-[24px] border border-gray-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-[0_14px_34px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.1)] hover:border-gray-300"
                        >
                            <div className="flex items-center gap-3 text-xs mb-4">
                                <time dateTime={article.publishedAt} className="text-gray-400 font-mono tracking-tight">
                                    {new Date(article.publishedAt).toLocaleDateString(language === 'zh' ? 'zh-TW' : 'en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                </time>
                                <div className="h-px flex-1 bg-gray-100" />
                                <span className="rounded-full border border-primary/15 bg-primary/8 px-2.5 py-0.5 font-medium text-primary text-[0.7rem]">
                                    {article.category.replace(/-/g, ' ')}
                                </span>
                            </div>

                            <h3 className="text-[1.25rem] font-semibold leading-tight tracking-tight text-gray-900 group-hover:text-primary transition-colors duration-300 mb-3 line-clamp-2">
                                {article.title}
                            </h3>
                            <p className="flex-1 line-clamp-3 text-sm leading-relaxed text-gray-500 mb-5">
                                {article.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
                                {article.tags.slice(0, 3).map((tag) => (
                                    <span key={tag} className="rounded-full bg-gray-50 border border-gray-100 px-2.5 py-1 text-xs font-medium text-gray-500">
                                        #{tag}
                                    </span>
                                ))}
                                {article.tags.length > 3 && (
                                    <span className="px-2 py-1 text-xs text-gray-400">+{article.tags.length - 3}</span>
                                )}
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-primary/30 hover:text-primary hover:shadow-md group"
                    >
                        {language === 'zh' ? '探索所有文章' : 'Explore All Articles'}
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

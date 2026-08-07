import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { ArticlePreview } from './RecentArticles';

interface ArticlesCTAProps {
    articles: ArticlePreview[];
}

export const ArticlesCTA: React.FC<ArticlesCTAProps> = ({ articles }) => {
    const { language } = useLanguage();

    if (!articles || articles.length === 0) return null;

    const latestArticle = articles[0];

    return (
        <section className="mx-auto max-w-[90rem] px-6 -mt-4 mb-2 relative z-20">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <a
                    href="/"
                    className="group relative block overflow-hidden rounded-[24px] border border-primary/15 bg-gradient-to-r from-[#eef4fe] via-[#f0f4ff] to-[#eef1fe] p-5 md:p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(26,115,232,0.12)]"
                >
                    {/* Subtle animated background shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                    <div className="relative flex items-center gap-4 md:gap-6">
                        {/* Icon */}
                        <div className="hidden sm:flex shrink-0 items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 border border-primary/10 group-hover:bg-primary/15 transition-colors duration-300">
                            <BookOpen className="w-5 h-5 text-primary" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="inline-flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary/80">
                                    <Sparkles className="w-3 h-3" />
                                    {language === 'zh' ? '技術文章' : 'Tech Articles'}
                                </span>
                                <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[0.65rem] font-bold text-primary tabular-nums">
                                    {articles.length} {language === 'zh' ? '篇' : articles.length === 1 ? 'post' : 'posts'}
                                </span>
                            </div>
                            <p className="text-sm md:text-[0.94rem] font-medium text-gray-800 truncate">
                                {language === 'zh' ? '最新：' : 'Latest: '}
                                <span className="text-gray-600 font-normal">{latestArticle.title}</span>
                            </p>
                        </div>

                        {/* Arrow CTA */}
                        <div className="shrink-0 flex items-center gap-2">
                            <span className="hidden md:block text-sm font-medium text-primary/70 group-hover:text-primary transition-colors">
                                {language === 'zh' ? '閱讀全部' : 'Read All'}
                            </span>
                            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-white text-primary transition-all duration-300">
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </div>
                        </div>
                    </div>
                </a>
            </motion.div>
        </section>
    );
};

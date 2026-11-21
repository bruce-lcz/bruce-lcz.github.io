import { motion } from 'framer-motion';
import { Briefcase, CalendarDays } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { ChangelogItemTag } from '../data/types';

const CHANGELOG_TAG_META: Record<ChangelogItemTag, { label: string; className: string }> = {
    new: {
        label: 'New',
        className: 'border-primary/20 bg-primary-50 text-primary',
    },
    improved: {
        label: 'Improved',
        className: 'border-indigo-200/80 bg-indigo-50/80 text-indigo-700',
    },
    impact: {
        label: 'Impact',
        className: 'border-emerald-200/80 bg-emerald-50/80 text-emerald-700',
    },
};

export const Experience = () => {
    const { config, language } = useLanguage();

    return (
        <section className="mx-auto max-w-[90rem] scroll-mt-24 px-6 py-20" id="experience">
            <div className="mb-12 grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-end">
                <div>
                    <p className="editorial-kicker">{language === 'zh' ? 'CHANGELOG · 經歷' : 'Career Changelog'}</p>
                    <h2 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">
                        {language === 'zh' ? '工作經驗' : 'Experience'}
                    </h2>
                </div>
                <p className="max-w-2xl text-base leading-7 text-gray-600">
                    {language === 'zh'
                        ? '像維護軟體一樣迭代職涯——每次大更版都走進不同的產業場景，把 AI 從單純的分析工具，打磨成團隊日常依賴的流程與內部產品。'
                        : 'Iterating on my career like software — each major release moves into a new industry context, evolving AI from isolated analysis tools into everyday internal products.'}
                </p>
            </div>

            <div className="relative space-y-8 before:absolute before:bottom-8 before:left-4 before:top-8 before:w-px before:bg-gradient-to-b before:from-primary/30 before:via-gray-200 before:to-transparent md:before:left-6">
                {config.experience.map((job, index) => (
                    <motion.article
                        key={job.id}
                        initial={false}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        className="relative pl-10 md:pl-16"
                    >
                        <span className={`absolute left-[0.42rem] top-10 h-3.5 w-3.5 rounded-full border-4 border-white shadow-sm md:left-[1.15rem] ${job.type === 'current' ? 'bg-primary' : 'bg-gray-300'}`} />

                        <div
                            className={`rounded-[30px] border p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 ${
                                job.type === 'current'
                                    ? 'border-primary/20 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]'
                                    : 'border-gray-200 bg-white hover:-translate-y-0.5 hover:shadow-[0_20px_54px_rgba(15,23,42,0.08)]'
                            }`}
                        >
                            <div className="flex flex-col gap-5 border-b border-gray-100 pb-6 lg:flex-row lg:items-start lg:justify-between">
                                <div className="space-y-3">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary-50 px-3 py-1 font-mono text-xs font-semibold text-primary">
                                            {job.version} · {job.releaseTag}
                                        </span>
                                        {job.type === 'current' ? (
                                            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-primary/15">
                                                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                                {language === 'zh' ? '穩定運行中' : 'Active in Production'}
                                            </span>
                                        ) : (
                                            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-500">
                                                {language === 'zh' ? '過往職務' : 'Past Role'}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                                            {job.role}
                                        </h3>
                                        <div className="mt-3 flex flex-col gap-2 text-sm text-gray-500 md:flex-row md:flex-wrap md:items-center md:gap-5">
                                            <span className="inline-flex items-center gap-2 font-medium text-gray-700">
                                                <Briefcase aria-hidden="true" className="h-4 w-4 text-primary" />
                                                {job.company}
                                            </span>
                                            <span className="inline-flex items-center gap-2">
                                                <CalendarDays aria-hidden="true" className="h-4 w-4 text-gray-400" />
                                                {job.period}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {job.companyMeta?.logo && (
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
                                        <img src={job.companyMeta.logo} alt={`${job.company} Logo`} className="h-full w-full object-contain" />
                                    </div>
                                )}
                            </div>

                            <div className="mt-6 rounded-2xl border border-primary/15 bg-primary-50/50 px-4 py-3.5">
                                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary">
                                    {language === 'zh' ? '版本重點' : "What's New"}
                                </p>
                                <p className="mt-1.5 text-sm leading-7 text-gray-800 md:text-[0.95rem]">
                                    {job.releaseSummary}
                                </p>
                            </div>

                            <div className="mt-6 space-y-3">
                                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gray-600">
                                    {language === 'zh' ? 'Release Notes · 重點成果' : 'Release Notes · Highlights'}
                                </p>
                                <ul className="space-y-3">
                                    {job.changelog.map((item) => {
                                        const meta = CHANGELOG_TAG_META[item.tag];
                                        return (
                                            <li key={item.text} className="flex items-start gap-3 text-sm leading-7 text-gray-700 md:text-[0.95rem]">
                                                <span
                                                    className={`mt-1 inline-flex shrink-0 items-center rounded-md border px-2 py-0.5 font-mono text-[0.68rem] font-semibold uppercase tracking-wide ${meta.className}`}
                                                >
                                                    {meta.label}
                                                </span>
                                                <span>{item.text}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {job.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

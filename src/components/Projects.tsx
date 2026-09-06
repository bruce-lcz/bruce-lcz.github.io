import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { DetailedProject } from '../data/types';

const categoryStyles: Record<string, string> = {
    work: 'bg-primary-50 text-primary',
    research: 'bg-slate-100 text-slate-700',
    personal: 'bg-emerald-50 text-emerald-700',
    pixart: 'bg-blue-50 text-blue-700',
    auo: 'bg-sky-50 text-sky-700',
};

export const Projects = () => {
    const { config, language } = useLanguage();
    // Keep the homepage focused; the complete catalogue lives on /projects/.
    const [featuredProject, ...otherProjects] = (config.projects ?? []).slice(0, 5);

    const getCategoryClassName = (category: string) => categoryStyles[category.toLowerCase()] ?? 'bg-gray-100 text-gray-700';

    const beforeLabel = language === 'zh' ? '原本痛點' : 'Pain Point';
    const afterLabel = language === 'zh' ? '解法設計' : 'Solution Design';

    const getCoreValueLine = (project: DetailedProject) =>
        project.coreValueLine ?? (project.cardTags ?? project.heroBadges ?? project.techStack).slice(0, 2).join(' · ');

    const renderSolutionSummary = (summary?: string) => {
        if (!summary) {
            return null;
        }

        const markers = [' were ', ' was ', ' packaged ', ' translated ', ' emphasized ', ' to improve'];
        const splitIndex = markers
            .map((marker) => summary.indexOf(marker))
            .filter((index) => index > 0)
            .sort((a, b) => a - b)[0];

        if (!splitIndex) {
            return summary;
        }

        return (
            <>
                <span className="font-semibold text-gray-900">{summary.slice(0, splitIndex)}</span>
                {summary.slice(splitIndex)}
            </>
        );
    };

    return (
        <section className="mx-auto max-w-[90rem] scroll-mt-24 px-6 py-20" id="projects">
            <div className="mb-12 grid gap-5 lg:grid-cols-[max-content_minmax(0,1fr)] lg:items-end">
                <div>
                    <p className="editorial-kicker">{language === 'zh' ? '作品集' : 'Portfolio'}</p>
                    <h2 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">
                        {language === 'zh' ? '專案案例' : 'Case Studies'}
                    </h2>
                </div>
                <p className={`max-w-none text-base leading-7 text-gray-600 lg:justify-self-end ${language === 'zh' ? 'lg:whitespace-nowrap' : ''}`}>
                    {language === 'zh'
                        ? '將模糊需求、限制條件與使用情境，轉成團隊願意採用的內部工具與 AI 應用。'
                        : 'Turning ambiguous requirements, constraints, and usage scenarios into internal tools and AI applications teams can actually adopt.'}
                </p>
            </div>

            {featuredProject && (
                <motion.a
                    href={`/projects/${featuredProject.id}/`}
                    aria-label={`${language === 'zh' ? '查看專案：' : 'View project: '}${featuredProject.title}`}
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45 }}
                    className="group relative mb-8 block w-full overflow-hidden rounded-[32px] border border-gray-200 bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_45%,#eef4ff_100%)] p-8 text-left shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_28px_85px_rgba(15,23,42,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#1a73e8,rgba(79,70,229,0.78),transparent)] opacity-75" />
                    <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-transform duration-300 group-hover:scale-110" />
                    <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.7fr)]">
                        <div>
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="rounded-full border border-primary/15 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                    {language === 'zh' ? '焦點專案' : 'Featured Project'}
                                </span>
                                <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${getCategoryClassName(featuredProject.category)}`}>
                                    {featuredProject.category}
                                </span>
                            </div>

                            <h3 className="mt-5 max-w-3xl text-3xl font-semibold tracking-normal text-gray-900 md:text-[2.2rem]">
                                {featuredProject.title}
                            </h3>

                            <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-indigo-700 md:text-base">
                                {getCoreValueLine(featuredProject)}
                            </p>

                            <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
                                {featuredProject.summary ?? featuredProject.oneLineSummary ?? featuredProject.shortDescription}
                            </p>

                            <div className="mt-6 grid gap-4 md:grid-cols-2">
                                <div className="rounded-[22px] border border-gray-200 bg-white/85 p-5">
                                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gray-500">
                                        {beforeLabel}
                                    </p>
                                    <p className="mt-3 text-sm leading-7 text-gray-700">
                                        {featuredProject.beforeSummary}
                                    </p>
                                </div>
                                <div className="rounded-[22px] border border-primary/15 bg-primary-50/70 p-5">
                                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary">
                                        {afterLabel}
                                    </p>
                                    <p className="mt-3 text-sm leading-7 text-gray-700">
                                        {renderSolutionSummary(featuredProject.afterSummary)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between rounded-[26px] border border-white/70 bg-white/80 p-5 shadow-[0_16px_36px_rgba(15,23,42,0.06)]">
                            <div className="space-y-4">
                                <div>
                                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gray-500">
                                        {language === 'zh' ? '角色定位' : 'Role'}
                                    </p>
                                    <p className="mt-2 text-sm leading-6 text-gray-700">
                                        {featuredProject.role}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gray-500">
                                        {language === 'zh' ? '流程重點' : 'Workflow Signals'}
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {(featuredProject.cardTags ?? featuredProject.techStack.slice(0, 4)).map((tag) => (
                                            <span key={tag} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                                {language === 'zh' ? '查看專案細節' : 'Open project detail'}
                                <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>
                        </div>
                    </div>
                </motion.a>
            )}

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                {otherProjects.map((project, index) => (
                    <motion.a
                        key={project.id}
                        href={`/projects/${project.id}/`}
                        aria-label={`${language === 'zh' ? '查看專案：' : 'View project: '}${project.title}`}
                        initial={false}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.35, delay: index * 0.05 }}
                        className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-gray-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] p-6 text-left shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_22px_60px_rgba(15,23,42,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#1a73e8,rgba(79,70,229,0.72),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-70" />

                        <div className="relative flex items-start justify-between gap-4">
                            <span className={`rounded-full px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] ${getCategoryClassName(project.category)}`}>
                                {project.category}
                            </span>
                            <ArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0 text-gray-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                        </div>

                        <h3 className="relative mt-6 text-2xl font-semibold tracking-normal text-gray-900 transition-colors group-hover:text-primary">
                            {project.title}
                        </h3>

                        <p className="relative mt-2 text-sm font-semibold leading-6 text-indigo-700">
                            {getCoreValueLine(project)}
                        </p>

                        <p className="relative mt-3 text-sm leading-7 text-gray-600">
                            {project.summary ?? project.oneLineSummary ?? project.shortDescription}
                        </p>

                        <div className="relative mt-5 grid gap-3">
                            <div className="rounded-[18px] border border-gray-200 bg-gray-50/85 p-4">
                                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gray-500">
                                    {beforeLabel}
                                </p>
                                <p className="mt-2 text-sm leading-6 text-gray-700">
                                    {project.beforeSummary}
                                </p>
                            </div>
                            <div className="rounded-[18px] border border-primary/15 bg-primary-50/70 p-4">
                                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary">
                                    {afterLabel}
                                </p>
                                <p className="mt-2 text-sm leading-6 text-gray-700">
                                    {renderSolutionSummary(project.afterSummary)}
                                </p>
                            </div>
                        </div>

                        <div className="relative mt-6 border-t border-gray-100 pt-4">
                            <div className="flex flex-wrap gap-2">
                                {(project.cardTags ?? project.techStack.slice(0, 3)).map((tag) => (
                                    <span key={tag} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <a
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50 hover:shadow-md"
                >
                    {language === 'zh' ? '查看所有專案' : 'View all case studies'}
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
            </div>
        </section>
    );
};

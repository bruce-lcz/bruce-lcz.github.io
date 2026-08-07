import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, CalendarDays } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ExperienceProps {
    onProjectSelect?: (projectId: string) => void;
}

export const Experience = ({ onProjectSelect }: ExperienceProps) => {
    const { config, language } = useLanguage();

    return (
        <section className="mx-auto max-w-[90rem] scroll-mt-24 px-6 py-20" id="experience">
            <div className="mb-12 grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-end">
                <div>
                    <p className="editorial-kicker">{language === 'zh' ? '經歷' : 'Experience'}</p>
                    <h2 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">
                        {language === 'zh' ? '工作經驗' : 'Experience'}
                    </h2>
                </div>
                <p className="max-w-2xl text-base leading-7 text-gray-600">
                    {language === 'zh'
                        ? '這些經歷的共同主軸，不是做過哪些模型，而是我如何逐步把 AI 從分析工具推進成 workflow 與內部產品。'
                        : 'These roles are less about isolated model work and more about how AI moved from analysis support toward workflow design and internal productization.'}
                </p>
            </div>

            <div className="relative space-y-8 before:absolute before:bottom-8 before:left-4 before:top-8 before:w-px before:bg-gradient-to-b before:from-primary/30 before:via-gray-200 before:to-transparent md:before:left-6">
                {config.experience.map((job, index) => (
                    <motion.article
                        key={job.id}
                        initial={{ opacity: 0, y: 18 }}
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
                                        <span className="rounded-full border border-primary/15 bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                            {job.type === 'current'
                                                ? (language === 'zh' ? '目前職務' : 'Current Role')
                                                : (language === 'zh' ? '過往職務' : 'Past Role')}
                                        </span>
                                        {job.type === 'current' && (
                                            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm ring-1 ring-primary/10">
                                                <span className="h-2 w-2 rounded-full bg-primary" />
                                                {language === 'zh' ? '在職中' : 'Active'}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                                            {job.role}
                                        </h3>
                                        <div className="mt-3 flex flex-col gap-2 text-sm text-gray-500 md:flex-row md:flex-wrap md:items-center md:gap-5">
                                            <span className="inline-flex items-center gap-2 font-medium text-gray-700">
                                                <Briefcase className="h-4 w-4 text-primary" />
                                                {job.company}
                                            </span>
                                            <span className="inline-flex items-center gap-2">
                                                <CalendarDays className="h-4 w-4 text-gray-400" />
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

                            <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                                <p className="text-base leading-8 text-gray-600">
                                    {job.description}
                                </p>

                                <div className="space-y-3">
                                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gray-400">
                                        {language === 'zh' ? '重點成果' : 'Highlights'}
                                    </p>
                                    <ul className="space-y-3">
                                        {job.achievements.map((achievement) => (
                                            <li key={achievement} className="flex items-start gap-3 text-sm leading-7 text-gray-700 md:text-[0.95rem]">
                                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary/70" />
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {job.relatedProjectIds && job.relatedProjectIds.length > 0 && onProjectSelect && (
                                <div className="mt-7 border-t border-dashed border-gray-200 pt-6">
                                    <div className="mb-4 flex items-center justify-between gap-4">
                                        <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                                            {language === 'zh' ? '相關專案' : 'Related Projects'}
                                        </h4>
                                        <span className="text-xs text-gray-400">
                                            {language === 'zh' ? '可展開查看' : 'Open for details'}
                                        </span>
                                    </div>

                                    <div className="grid gap-3 md:grid-cols-2">
                                        {job.relatedProjectIds.map((projectId) => {
                                            const project = config.projects?.find((item) => item.id === projectId);

                                            if (!project) {
                                                return null;
                                            }

                                            return (
                                                <button
                                                    key={projectId}
                                                    type="button"
                                                    onClick={() => onProjectSelect(projectId)}
                                                    className="group rounded-[22px] border border-gray-200 bg-gray-50/85 p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white hover:shadow-[0_14px_34px_rgba(15,23,42,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                                >
                                                    <div className="flex items-start justify-between gap-4">
                                                        <div>
                                                            <h5 className="text-sm font-semibold text-gray-900">
                                                                {project.title}
                                                            </h5>
                                                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                                                {project.shortDescription}
                                                            </p>
                                                        </div>
                                                        <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-gray-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

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

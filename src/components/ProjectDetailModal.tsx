import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { useEffect } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import { useLanguage } from '../context/LanguageContext';
import { DetailedProject } from '../data/types';
import { ProjectMockupVisual } from './ProjectMockupVisual';

interface ProjectDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: DetailedProject | null;
}

const markdownComponents: Components = {
    p: ({ children }) => <p className="my-0">{children}</p>,
    code: ({ children }) => (
        <code className="rounded-md bg-gray-100 px-1.5 py-0.5 font-mono text-[0.92em] text-gray-800">
            {children}
        </code>
    ),
    strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
    a: ({ children, href }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-primary-700"
        >
            {children}
        </a>
    ),
    ul: ({ children }) => <ul className="mt-2 space-y-2 pl-4">{children}</ul>,
    ol: ({ children }) => <ol className="mt-2 list-decimal space-y-2 pl-5">{children}</ol>,
    li: ({ children }) => <li className="list-disc pl-1">{children}</li>,
};

export const ProjectDetailModal = ({ isOpen, onClose, project }: ProjectDetailModalProps) => {
    const { config, language } = useLanguage();

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project) {
        return null;
    }

    const company = config.experience.find((item) => item.id === project.companyId);
    const summary = project.summary ?? project.oneLineSummary ?? project.shortDescription;
    const problemSolved = project.problemSolved ?? project.challenges;
    const implementationHighlights = project.implementationHighlights ?? project.keyFeatures;
    const impact = project.impact ?? [];
    const displayPeriod = language === 'zh' ? project.period.replace('Present', '至今') : project.period;
    const metadata = [project.role, project.company ?? project.companyName ?? company?.company, displayPeriod]
        .filter(Boolean)
        .join(' • ');
    const heroBadges = project.cardTags ?? project.heroBadges ?? project.techStack.slice(0, 3);

    const labels = {
        narrative: language === 'zh' ? '從問題到交付' : 'From problem to delivery',
        context: language === 'zh' ? '情境' : 'Context',
        constraint: language === 'zh' ? '限制' : 'Constraints',
        myRole: language === 'zh' ? '負責範圍' : 'My Role',
        systemDesign: language === 'zh' ? '設計選擇' : 'Design',
        outcome: language === 'zh' ? '結果' : 'Outcome',
        problemSolved: language === 'zh' ? '我先解決什麼' : 'What needed fixing',
        implementationHighlights: language === 'zh' ? '我怎麼做' : 'How I built it',
        impact: language === 'zh' ? '帶來的改變' : 'What changed',
        techStack: language === 'zh' ? '使用技術' : 'Built with',
        repository: language === 'zh' ? '查看原始碼' : 'View source',
        heroVisual: project.visualType
            ? (language === 'zh' ? '產品預覽' : 'Product Preview')
            : (language === 'zh' ? '系統概覽' : 'System Overview'),
    };

    const narrativeSections = [
        { label: labels.context, items: project.context ?? [] },
        { label: labels.constraint, items: project.constraint ?? [] },
        { label: labels.myRole, items: project.myRole ?? [] },
        { label: labels.systemDesign, items: project.systemDesign ?? [] },
        { label: labels.outcome, items: project.outcome ?? [] },
    ].filter((section) => section.items.length > 0);

    const heroVisual = (() => {
        if (project.visualType) {
            return <ProjectMockupVisual visualType={project.visualType} />;
        }

        if (project.heroImage) {
            return (
                <div className="overflow-hidden rounded-[24px] border border-white/12 bg-white/4 shadow-[0_24px_70px_rgba(8,15,28,0.38),0_0_0_1px_rgba(255,255,255,0.02)]">
                    <img
                        src={project.heroImage}
                        alt={`${project.title} system overview`}
                        className="block max-h-[260px] w-full object-contain bg-[radial-gradient(circle_at_50%_50%,_rgba(34,211,238,0.08),_transparent_60%),linear-gradient(180deg,rgba(14,19,25,0.95),rgba(11,15,20,0.98))] p-3 md:p-4"
                    />
                </div>
            );
        }

        return (
            <div className="flex h-[240px] items-center justify-center rounded-[24px] border border-white/12 bg-white/5 text-sm text-gray-300 shadow-[0_24px_70px_rgba(8,15,28,0.38),0_0_0_1px_rgba(255,255,255,0.02)]">
                {language === 'zh' ? '主視覺準備中' : 'Hero visual coming soon'}
            </div>
        );
    })();

    const renderList = (items: string[]) => (
        <ul className="space-y-3">
            {items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-gray-700 md:text-base">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary/70" aria-hidden="true" />
                    <div className="min-w-0 flex-1">
                        <ReactMarkdown components={markdownComponents}>
                            {item}
                        </ReactMarkdown>
                    </div>
                </li>
            ))}
        </ul>
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-6"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: 20 }}
                        transition={{ duration: 0.2 }}
                        onClick={(event) => event.stopPropagation()}
                        className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] bg-white shadow-2xl"
                    >
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label={language === 'zh' ? '關閉專案內容' : 'Close project detail'}
                            className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/20 p-2 text-white transition-colors hover:bg-white/10"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="overflow-y-auto custom-scrollbar">
                            <section className="relative overflow-hidden bg-gradient-to-br from-[#101214] via-[#16191d] to-[#1d2329] text-white">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.14),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.14),_transparent_28%)]" />

                                <div className="relative grid items-center gap-8 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)]">
                                    <div className="order-1 space-y-6">
                                        <div className="space-y-4">
                                            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
                                                {project.title}
                                            </h1>

                                            <p className="text-sm font-medium tracking-wide text-gray-300 md:text-base">
                                                {metadata}
                                            </p>

                                            <p className="max-w-2xl text-base leading-7 text-gray-200 md:text-lg md:leading-8">
                                                {summary}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2.5">
                                            {heroBadges.map((badge) => (
                                                <span
                                                    key={badge}
                                                    className="rounded-full border border-white/20 bg-white/6 px-3 py-1.5 text-xs font-medium tracking-wide text-gray-100 md:text-sm"
                                                >
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>

                                        {project.link && (
                                            <div>
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/14"
                                                >
                                                    {labels.repository}
                                                    <ExternalLink className="h-4 w-4" />
                                                </a>
                                            </div>
                                        )}
                                    </div>

                                    <div className="order-2 flex justify-center lg:justify-end">
                                        <div className="w-full max-w-[520px]">
                                            <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                                                {labels.heroVisual}
                                            </div>
                                            {heroVisual}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="space-y-12 px-6 py-9 md:px-10 md:py-12">
                                {narrativeSections.length > 0 && (
                                    <section className="space-y-5">
                                        <h2 className="editorial-kicker">
                                            {labels.narrative}
                                        </h2>
                                        <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-[#fbfaf7]">
                                            {narrativeSections.map((section, index) => (
                                                <article key={section.label} className="grid gap-4 border-b border-gray-200 p-5 last:border-b-0 md:grid-cols-[150px_1fr] md:p-6">
                                                    <div className="flex items-center gap-3 md:items-start">
                                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">{index + 1}</span>
                                                        <h3 className="pt-1 text-sm font-semibold text-gray-900">{section.label}</h3>
                                                    </div>
                                                    <div>
                                                        {renderList(section.items)}
                                                    </div>
                                                </article>
                                            ))}
                                        </div>
                                    </section>
                                )}

                                <section className="grid gap-4 lg:grid-cols-3">
                                    {[
                                        { label: labels.problemSolved, items: problemSolved, tone: 'border-amber-200/70 bg-amber-50/55', dot: 'bg-amber-500' },
                                        { label: labels.implementationHighlights, items: implementationHighlights, tone: 'border-blue-200/70 bg-blue-50/55', dot: 'bg-primary' },
                                        { label: labels.impact, items: impact, tone: 'border-emerald-200/70 bg-emerald-50/55', dot: 'bg-emerald-500' },
                                    ].filter((section) => section.items.length > 0).map((section) => (
                                        <article key={section.label} className={`rounded-[26px] border p-5 md:p-6 ${section.tone}`}>
                                            <div className="flex items-center gap-3">
                                                <span className={`h-2.5 w-2.5 rounded-full ${section.dot}`} />
                                                <h2 className="text-sm font-semibold text-gray-900">{section.label}</h2>
                                            </div>
                                            <div className="mt-5">{renderList(section.items)}</div>
                                        </article>
                                    ))}
                                </section>

                                <section className="space-y-4">
                                    <h2 className="editorial-kicker">
                                        {labels.techStack}
                                    </h2>
                                    <div className="flex flex-wrap gap-2.5">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

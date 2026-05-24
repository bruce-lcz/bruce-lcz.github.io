import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
    const { config, language, toggleLanguage } = useLanguage();
    const { identity, links } = config;

    const editorialNotes = language === 'zh'
        ? [
            '我把 AI 放進真實限制裡處理，包含機密文件、地端環境、製造資料與既有流程。',
            '我擅長把架構、LLM workflow 與導入需求整理成能真正落地的內部產品。',
        ]
        : [
            'I build AI inside real constraints: confidential documents, on-prem environments, manufacturing data, and legacy workflows.',
            'My strength is turning architecture, LLM workflows, and adoption needs into internal products people can actually use.',
        ];

    const signalCards = language === 'zh'
        ? [
            { label: '角色焦點', value: 'LLM 應用工程與 AI workflow 設計' },
            { label: '工作場景', value: '企業內部工具、文件流程、製造與研發協作' },
            { label: '偏好做法', value: '把高限制環境需求整理成可落地產品' },
        ]
        : [
            { label: 'Role Focus', value: 'LLM application engineering and AI workflow design' },
            { label: 'Operating Context', value: 'Internal tools, document systems, manufacturing, and R&D collaboration' },
            { label: 'Preferred Mode', value: 'Turn high-constraint requirements into practical products' },
        ];

    return (
        <section className="relative overflow-hidden px-6 pb-8 pt-8 md:pt-12">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(218,220,224,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(218,220,224,0.5)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_70%_58%_at_50%_30%,#000_64%,transparent_100%)] pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-[540px] bg-editorial-glow pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className="relative mx-auto max-w-6xl"
            >
                <div className="editorial-surface rounded-[36px] px-6 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10">
                    <div className="mb-8 flex items-center justify-between gap-4">
                        <div>
                            <p className="editorial-kicker">
                                {language === 'zh' ? 'Editorial Profile' : 'Editorial Profile'}
                            </p>
                        </div>

                        <div className="flex bg-white/90 p-1 rounded-full border border-gray-200 shadow-sm">
                            <button
                                type="button"
                                onClick={() => language !== 'en' && toggleLanguage()}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                                    language === 'en'
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-500 hover:text-gray-900'
                                }`}
                            >
                                EN
                            </button>
                            <button
                                type="button"
                                onClick={() => language !== 'zh' && toggleLanguage()}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                                    language === 'zh'
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-500 hover:text-gray-900'
                                }`}
                            >
                                中文
                            </button>
                        </div>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.9fr)] lg:items-center">
                        <div className="order-2 lg:order-1">
                            <div className="mb-5 inline-flex items-center rounded-full border border-primary/15 bg-primary-50 px-4 py-2 text-sm font-medium text-primary shadow-sm">
                                {language === 'zh' ? 'LLM Application Engineer' : 'LLM Application Engineer'}
                            </div>

                            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] text-gray-900 md:text-6xl">
                                {identity.name}
                            </h1>

                            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-gray-700 md:text-[1.35rem]">
                                {identity.role}
                            </p>

                            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
                                {identity.tagline}
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                                <a
                                    href={`mailto:${links.email}`}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                >
                                    <Mail className="h-4 w-4" />
                                    {language === 'zh' ? '聯絡我' : 'Contact Me'}
                                </a>

                                <div className="flex flex-wrap items-center gap-3">
                                    <a
                                        href={links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:text-gray-900"
                                    >
                                        <Github className="h-4 w-4" />
                                        GitHub
                                    </a>
                                    <a
                                        href={links.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:text-gray-900"
                                    >
                                        <Linkedin className="h-4 w-4" />
                                        LinkedIn
                                    </a>
                                    <a
                                        href="/Bruce_Cheng_Resume.pdf"
                                        download="Bruce_Cheng_Resume.pdf"
                                        className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:text-gray-900"
                                    >
                                        <FileText className="h-4 w-4" />
                                        {language === 'zh' ? '下載履歷' : 'Resume'}
                                    </a>
                                </div>
                            </div>

                            <div className="mt-10 grid gap-4 md:grid-cols-2">
                                {editorialNotes.map((paragraph) => (
                                    <div
                                        key={paragraph}
                                        className="rounded-[24px] border border-gray-200/90 bg-white/95 p-5 text-sm leading-7 text-gray-600 shadow-[0_14px_36px_rgba(15,23,42,0.05)] md:min-h-[148px]"
                                    >
                                        {paragraph}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="relative mx-auto max-w-[420px]">
                                <div className="absolute -inset-3 rounded-[36px] bg-[radial-gradient(circle_at_top,rgba(26,115,232,0.20),transparent_60%)] blur-2xl" />
                                <div className="relative rounded-[32px] border border-gray-200 bg-[linear-gradient(160deg,rgba(255,255,255,0.96),rgba(248,250,252,0.98))] p-5 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
                                    <div className="rounded-[28px] border border-gray-200/90 bg-white px-5 py-6">
                                        <div className="flex justify-center">
                                            <img
                                                src={identity.avatar}
                                                alt={identity.name}
                                                className="h-32 w-32 rounded-[28px] object-cover shadow-lg md:h-40 md:w-40"
                                            />
                                        </div>

                                        <div className="mt-6 border-t border-dashed border-gray-200 pt-5">
                                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gray-400">
                                                {language === 'zh' ? 'Signals' : 'Signals'}
                                            </p>
                                            <div className="mt-4 space-y-3">
                                                {signalCards.map((card) => (
                                                    <div
                                                        key={card.label}
                                                        className="rounded-[20px] border border-gray-200 bg-gray-50/80 px-4 py-4"
                                                    >
                                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                                                            {card.label}
                                                        </p>
                                                        <p className="mt-2 text-sm leading-6 text-gray-700">
                                                            {card.value}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

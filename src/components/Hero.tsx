import { motion } from 'framer-motion';
import { BookOpen, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
    const { config, language, toggleLanguage } = useLanguage();
    const { identity, links } = config;
    const isZh = language === 'zh';
    const heroTitle = isZh ? '把複雜需求做成 AI 解決方案' : 'Building AI solutions for complex requirements.';

    const editorialNotes = language === 'zh'
        ? [
            '我擅長把需求、資料與限制整理成可落地的 AI 應用，讓模型能力接上實際使用流程。',
            '根據限制拆解需求，組合合適方案，將 AI 能力設計成團隊能採用的流程與內部產品。',
        ]
        : [
            'I turn requirements, data, and constraints into practical AI applications that connect model capabilities with real usage flows.',
            'I break down requirements through constraints, combine the right tools, and shape AI capabilities into workflows and internal products teams can adopt.',
        ];

    const signalCards = language === 'zh'
        ? [
            { label: '核心重點', value: '需求拆解、流程設計、內部 AI 產品化' },
            { label: '工作方式', value: '依照真實限制挑對模型、工具、資料流、驗證與介面' },
            { label: '代表產出', value: '內部 AI 解決方案、文件智能處理與決策支援應用' },
        ]
        : [
            { label: 'Core Focus', value: 'Requirement framing, workflow design, and internal AI product building' },
            { label: 'Working Mode', value: 'Choose the right combination of models, tools, data flow, validation, and interface for the real constraint' },
            { label: 'Representative Outputs', value: 'Internal AI tools, document intelligence, and decision-support applications' },
        ];

    return (
        <section className="relative overflow-hidden px-6 pb-8 pt-24 md:pt-28 scroll-mt-24" id="profile">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(218,220,224,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(218,220,224,0.5)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_70%_58%_at_50%_30%,#000_64%,transparent_100%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[540px] bg-editorial-glow" />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className="relative mx-auto max-w-[90rem]"
            >
                <div className="editorial-surface rounded-[36px] px-6 py-8 md:px-10 md:py-12 lg:px-12 lg:py-14">
                    <div className="mb-8 flex items-center justify-between gap-4">
                        <div>
                            <p className="editorial-kicker">{language === 'zh' ? '作品檔案' : 'Portfolio Profile'}</p>
                        </div>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.85fr)] lg:items-center xl:gap-16">
                        <div className="order-2 lg:order-1">
                            <div className="mb-5 inline-flex items-center rounded-full border border-primary/15 bg-primary-50 px-4 py-2 text-sm font-medium text-primary shadow-sm">
                                {identity.role}
                            </div>

                            <h1
                                className={`max-w-[720px] text-4xl font-semibold leading-[1.08] text-gray-900 md:text-5xl ${
                                    isZh ? 'xl:text-[3.2rem]' : 'xl:text-[3.35rem]'
                                }`}
                            >
                                {heroTitle}
                            </h1>

                            <p className="mt-5 max-w-[620px] text-lg font-medium leading-8 text-gray-700 md:text-xl">
                                {identity.tagline}
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <a
                                    href={`mailto:${links.email}`}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shrink-0"
                                >
                                    <Mail className="h-4 w-4" />
                                    {language === 'zh' ? '聯絡我' : 'Contact Me'}
                                </a>

                                <a
                                    href={links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:text-gray-900 shrink-0"
                                >
                                    <Github className="h-4 w-4" />
                                    GitHub
                                </a>
                                <a
                                    href={links.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:text-gray-900 shrink-0"
                                >
                                    <Linkedin className="h-4 w-4" />
                                    LinkedIn
                                </a>
                                <a
                                    href="/Bruce_Cheng_Resume.pdf"
                                    download="Bruce_Cheng_Resume.pdf"
                                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:text-gray-900 shrink-0"
                                >
                                    <FileText className="h-4 w-4" />
                                    {language === 'zh' ? '履歷' : 'Resume'}
                                </a>
                                <a
                                    href="/"
                                    className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-50 px-3.5 py-2.5 text-sm font-medium text-primary transition-colors hover:border-primary/40 hover:bg-primary/10 shrink-0"
                                >
                                    <BookOpen className="h-4 w-4" />
                                    {language === 'zh' ? '技術文章' : 'Articles'}
                                </a>
                            </div>

                            <div className="mt-10 grid gap-4 md:grid-cols-2">
                                {editorialNotes.map((paragraph) => (
                                    <div
                                        key={paragraph}
                                        className="min-h-[148px] rounded-[24px] border border-gray-200/90 bg-white/95 p-5 text-sm leading-7 text-gray-600 shadow-[0_14px_36px_rgba(15,23,42,0.05)]"
                                    >
                                        {paragraph}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="relative mx-auto max-w-[390px]">
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
                                                {language === 'zh' ? '重點摘要' : 'Signals'}
                                            </p>
                                            <div className="mt-4 space-y-3">
                                                {signalCards.map((card) => (
                                                    <div key={card.label} className="rounded-[20px] border border-gray-200 bg-gray-50/80 px-4 py-4">
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

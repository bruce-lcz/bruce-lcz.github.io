import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
    const { config, language, toggleLanguage } = useLanguage();
    const { identity, links } = config;
    const isZh = language === 'zh';
    const heroTitle = isZh ? '把 AI 能力整理成可用 workflow' : 'Turning AI capabilities into practical workflows.';

    const editorialNotes = language === 'zh'
        ? [
            '我不把自己定位成單一工具專家。On-prem、OCR、ASR、RAG、Agent 或 LLM API 都只是手段。',
            '我的重點是根據限制拆解需求，組合合適工具，設計成團隊能採用的 workflow。',
        ]
        : [
            'I do not position myself around a single deployment model or tool. On-prem, OCR, ASR, RAG, agents, and APIs are all options depending on the workflow and constraint.',
            'My work usually sits between requirement framing, tool composition, workflow design, and internal productization so AI can move from demo to actual use.',
        ];

    const signalCards = language === 'zh'
        ? [
            { label: '核心重點', value: '需求拆解、流程設計、內部 AI 產品化' },
            { label: '工作方式', value: '依照真實限制挑對模型、工具、資料流、驗證與介面' },
            { label: '常見場域', value: '法務、研發、製造與內部知識工作' },
        ]
        : [
            { label: 'Core Focus', value: 'Requirement framing, workflow design, and internal AI product building' },
            { label: 'Working Mode', value: 'Choose the right combination of models, tools, data flow, validation, and interface for the real constraint' },
            { label: 'Typical Domains', value: 'Legal, engineering, manufacturing, and internal knowledge work' },
        ];

    return (
        <section className="relative overflow-hidden px-6 pb-8 pt-8 scroll-mt-24 md:pt-12" id="profile">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(218,220,224,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(218,220,224,0.5)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_70%_58%_at_50%_30%,#000_64%,transparent_100%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[540px] bg-editorial-glow" />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className="relative mx-auto max-w-6xl"
            >
                <div className="editorial-surface rounded-[36px] px-6 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10">
                    <div className="mb-8 flex items-center justify-between gap-4">
                        <div>
                            <p className="editorial-kicker">{language === 'zh' ? '作品檔案' : 'Portfolio Profile'}</p>
                        </div>

                        <div className="flex rounded-full border border-gray-200 bg-white/90 p-1 shadow-sm">
                            <button
                                type="button"
                                onClick={() => language !== 'en' && toggleLanguage()}
                                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                                    language === 'en' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-900'
                                }`}
                            >
                                EN
                            </button>
                            <button
                                type="button"
                                onClick={() => language !== 'zh' && toggleLanguage()}
                                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                                    language === 'zh' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-900'
                                }`}
                            >
                                中文
                            </button>
                        </div>
                    </div>

                    <div className={`grid gap-10 lg:items-center ${isZh ? 'lg:grid-cols-[minmax(0,1.42fr)_minmax(320px,0.78fr)]' : 'lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.9fr)]'}`}>
                        <div className="order-2 lg:order-1">
                            <div className={`mb-5 inline-flex items-center rounded-full border border-primary/15 bg-primary-50 text-primary shadow-sm ${isZh ? 'px-3.5 py-1.5 text-[0.95rem]' : 'px-4 py-2 text-sm'} font-medium`}>
                                {identity.role}
                            </div>

                            {isZh ? (
                                <h1 className="max-w-[620px] text-[3.25rem] font-semibold leading-[1.08] tracking-[-0.035em] text-gray-900 md:text-[4.2rem]">
                                    把 AI 能力
                                    <br />
                                    整理成可用 workflow
                                </h1>
                            ) : (
                                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] text-gray-900 md:text-6xl">
                                    {heroTitle}
                                </h1>
                            )}

                            <p className={`mt-5 font-medium text-gray-700 ${isZh ? 'max-w-[640px] text-[1.02rem] leading-[1.95] md:text-[1.15rem]' : 'max-w-2xl text-lg leading-8 md:text-[1.35rem]'}`}>
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
                                        {language === 'zh' ? '履歷' : 'Resume'}
                                    </a>
                                </div>
                            </div>

                            <div className={`mt-10 grid gap-4 ${isZh ? 'md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]' : 'md:grid-cols-2'}`}>
                                {editorialNotes.map((paragraph) => (
                                    <div
                                        key={paragraph}
                                        className={`rounded-[24px] border border-gray-200/90 bg-white/95 text-gray-600 shadow-[0_14px_36px_rgba(15,23,42,0.05)] ${isZh ? 'p-4 text-[0.94rem] leading-[1.8] md:min-h-[118px]' : 'p-5 text-sm leading-7 md:min-h-[148px]'}`}
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
                                                {language === 'zh' ? '重點摘要' : 'Signals'}
                                            </p>
                                            <div className="mt-4 space-y-3">
                                                {signalCards.map((card) => (
                                                    <div key={card.label} className={`rounded-[20px] border border-gray-200 bg-gray-50/80 ${isZh ? 'px-4 py-3.5' : 'px-4 py-4'}`}>
                                                        <p className={`font-semibold text-gray-400 ${isZh ? 'text-[0.8rem] tracking-[0.08em]' : 'text-xs uppercase tracking-[0.18em]'}`}>
                                                            {card.label}
                                                        </p>
                                                        <p className={`mt-2 text-gray-700 ${isZh ? 'text-[0.95rem] leading-7' : 'text-sm leading-6'}`}>
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

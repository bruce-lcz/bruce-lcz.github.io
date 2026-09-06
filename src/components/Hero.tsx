import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
    const { config, language } = useLanguage();
    const { identity, links } = config;
    const isZh = language === 'zh';
    const heroTitle = isZh
        ? '把企業 AI 從模糊需求，做成能上線、能驗證，也有人持續使用的內部產品'
        : 'Turning enterprise AI requirements into secure, production-ready internal products.';

    const editorialNotes = language === 'zh'
        ? [
            '我把需求、資料與限制整理成能落地的 AI 應用，讓模型能力真正接上日常工作。',
            '從需求釐清、系統設計、驗證到上線交付，我把 AI 做成團隊願意持續採用的流程與內部產品。',
        ]
        : [
            'I turn requirements, data, and constraints into practical AI applications that connect model capabilities with real usage flows.',
            'I design around on-prem serving, role-scoped access, human review, validation, and auditability — then carry the system from architecture to delivery.',
        ];

    const profileSignals = language === 'zh'
        ? [
            { label: '目前主軸', value: '企業 AI 架構・LLM 系統・內部產品化', featured: true },
            { label: '應用場景', value: '法務・研發・工程・知識工作', featured: false },
            { label: '交付原則', value: '地端部署・權限隔離・人工審查', featured: false },
        ]
        : [
            { label: 'Current Focus', value: 'Enterprise AI architecture · LLM systems · internal products', featured: true },
            { label: 'Use Cases', value: 'Legal · R&D · engineering · knowledge work', featured: false },
            { label: 'Delivery Principles', value: 'On-prem deployment · scoped access · human review', featured: false },
        ];

    const previousImpact = language === 'zh'
        ? { label: '過往製造成果', value: '良率 +1.43%・缺陷 −12.62%・每月約節省 300 人時' }
        : { label: 'Previous Manufacturing Impact', value: '+1.43% yield · −12.62% defects · ~300 man-hours/month' };

    return (
        <section className="relative overflow-hidden px-6 pb-8 pt-20 md:pt-24 scroll-mt-24" id="profile">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(218,220,224,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(218,220,224,0.5)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_70%_58%_at_50%_30%,#000_64%,transparent_100%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[540px] bg-editorial-glow" />

            <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className="relative mx-auto max-w-[90rem]"
            >
                <div className="editorial-surface rounded-[36px] px-6 py-8 md:px-10 md:py-12 lg:px-12 lg:py-14">
                    <div className="mb-8 flex items-center justify-between gap-4">
                        <div>
                            <p className="editorial-kicker">{language === 'zh' ? '個人作品集' : 'Portfolio Profile'}</p>
                        </div>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.85fr)] lg:items-center xl:gap-16">
                        <div className="order-1 lg:order-1">
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

                        <div className="order-2 lg:order-2">
                            <div className="relative mx-auto max-w-[390px]">
                                <div className="absolute -inset-3 rounded-[36px] bg-[radial-gradient(circle_at_top,rgba(26,115,232,0.20),transparent_60%)] blur-2xl" />
                                <div className="relative rounded-[32px] border border-gray-200 bg-[linear-gradient(160deg,rgba(255,255,255,0.96),rgba(248,250,252,0.98))] p-5 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
                                    <div className="rounded-[28px] border border-gray-200/90 bg-white px-5 py-6">
                                        <div className="flex justify-center">
                                            <img
                                                src={identity.avatar}
                                                alt={identity.name}
                                                width={320}
                                                height={320}
                                                srcSet="/assets/avatar-320.webp 1x, /assets/avatar-640.webp 2x"
                                                loading="eager"
                                                className="h-32 w-32 rounded-[28px] object-cover shadow-lg md:h-40 md:w-40"
                                            />
                                        </div>

                                        <div className="mt-6 border-t border-dashed border-gray-200 pt-5">
                                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gray-600">
                                                {language === 'zh' ? '專業摘要' : 'Profile Snapshot'}
                                            </p>
                                            <dl className="mt-4 space-y-3">
                                                {profileSignals.map((signal) => (
                                                    <div
                                                        key={signal.label}
                                                        className={`rounded-[20px] border px-4 py-4 ${
                                                            signal.featured
                                                                ? 'border-primary/20 bg-primary-50/70 shadow-[0_10px_24px_rgba(26,115,232,0.08)]'
                                                                : 'border-gray-200 bg-gray-50/80'
                                                        }`}
                                                    >
                                                        <dt
                                                            className={`text-[0.7rem] font-semibold uppercase tracking-[0.16em] ${
                                                                signal.featured ? 'text-primary' : 'text-gray-600'
                                                            }`}
                                                        >
                                                            {signal.label}
                                                        </dt>
                                                        <dd className="mt-2 text-sm leading-6 text-gray-700">
                                                            {signal.value}
                                                        </dd>
                                                    </div>
                                                ))}
                                            </dl>

                                            <dl className="mt-5 border-t border-dashed border-gray-200 pt-5">
                                                <div>
                                                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gray-500">
                                                        {previousImpact.label}
                                                    </dt>
                                                    <dd className="mt-2 text-xs leading-5 text-gray-500">
                                                        {previousImpact.value}
                                                    </dd>
                                                </div>
                                            </dl>
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

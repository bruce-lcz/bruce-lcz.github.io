import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
    const { config, language } = useLanguage();
    const { identity, links } = config;
    const isZh = language === 'zh';

    const statusBadge = isZh
        ? '現任原相科技 PixArt · 前友達 AUO · 5+ 年企業 AI 實戰'
        : 'PixArt Imaging · ex-AUO · 5+ Yrs Applied AI';

    const heroSubtitle = isZh
        ? '深耕 IC 設計、法務與智慧製造場景，結合地端 vLLM、權限隔離 NL2SQL、多模態審查與高容錯資料管線，解決企業高資安限制下的真實工作痛點。'
        : 'Architecting on-prem LLM workflows, guarded NL2SQL, multimodal document review, and automated data pipelines across IC design, legal, and smart manufacturing.';

    const keyMetrics = isZh
        ? [
            {
                metric: '10+',
                label: '企業級 AI 落地系統',
                detail: '實際交付於 IC 設計、法務、人資與製造現場',
            },
            {
                metric: 'On-Prem',
                label: '地端推論與權限隔離',
                detail: '封閉內網部署、KV Cache 優化與受控 NL2SQL',
            },
            {
                metric: '+1.43%',
                label: '良率提升 · 月省 390+ 人時',
                detail: '友達缺陷率 −12.62% 並推動全公司 GenAI 賦能',
            },
        ]
        : [
            {
                metric: '10+',
                label: 'Production AI Systems',
                detail: 'Shipped across IC design, legal, HR & fab workflows',
            },
            {
                metric: 'On-Prem',
                label: 'vLLM & Guarded Data',
                detail: 'Air-gapped serving, KV cache tuning & scoped NL2SQL',
            },
            {
                metric: '+1.43%',
                label: 'Fab Yield · ~390 hrs/mo',
                detail: '−12.62% defects at AUO & 20+ 1-on-1 staff enablement',
            },
        ];

    const careerTrack = isZh
        ? [
            {
                company: 'PixArt Imaging',
                domain: 'IC Design',
                period: '2025–至今',
                focus: '企業 GenAI 架構與內部產品開發',
            },
            {
                company: 'AUO Corp.',
                domain: 'Smart Mfg',
                period: '2021–2025',
                focus: 'AI 專案負責人 · 良率最佳化與決策系統',
            },
        ]
        : [
            {
                company: 'PixArt Imaging',
                domain: 'IC Design',
                period: '2025–Present',
                focus: 'Enterprise GenAI & LLM Internal Products',
            },
            {
                company: 'AUO Corp.',
                domain: 'Smart Mfg',
                period: '2021–2025',
                focus: 'AI Project Leader · Yield & Agent Systems',
            },
        ];

    const coreTechStack = [
        'Python',
        'FastAPI',
        'vLLM',
        'Guarded NL2SQL',
        'RAG & VLM',
        'LLMOps',
        'Docker',
        'SQL',
    ];

    const governanceStandards = isZh
        ? ['封閉內網地端部署', '角色權限嚴格隔離', '頁級來源依據追溯']
        : ['Air-Gapped On-Prem', 'Role-Scoped Access', 'Page-Level Traceability'];

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
                    <div className="mb-7 flex items-center justify-between gap-4">
                        <div>
                            <p className="editorial-kicker">{isZh ? '個人作品集' : 'Portfolio Profile'}</p>
                        </div>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(350px,0.9fr)] lg:items-center xl:gap-14">
                        <div className="order-1 lg:order-1">
                            <div className="mb-5 flex flex-wrap items-center gap-2.5">
                                <span className="inline-flex items-center rounded-full border border-primary/15 bg-primary-50 px-4 py-1.5 text-xs font-medium text-primary shadow-sm sm:text-sm">
                                    {identity.role}
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/90 bg-emerald-50/85 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm sm:text-sm">
                                    <span className="relative flex h-2 w-2 shrink-0">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                                    </span>
                                    {statusBadge}
                                </span>
                            </div>

                            <h1
                                className={`max-w-[740px] text-4xl font-semibold leading-[1.12] text-gray-900 md:text-5xl ${
                                    isZh ? 'xl:text-[3.1rem]' : 'xl:text-[3.3rem]'
                                }`}
                            >
                                {isZh ? (
                                    <>
                                        把企業 AI 從模糊需求，做成
                                        <span className="bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
                                            能上線、能驗證、團隊持續使用的內部產品。
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        Turning enterprise AI requirements into{' '}
                                        <span className="bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
                                            secure, production-ready internal products.
                                        </span>
                                    </>
                                )}
                            </h1>

                            <p className="mt-5 max-w-[660px] text-base font-normal leading-7 text-gray-600 md:text-lg md:leading-8">
                                {heroSubtitle}
                            </p>

                            <div className="mt-7 flex flex-wrap items-center gap-3">
                                <a
                                    href={`mailto:${links.email}`}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shrink-0"
                                >
                                    <Mail className="h-4 w-4" />
                                    {isZh ? '聯絡我' : 'Contact Me'}
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
                                    {isZh ? '履歷' : 'Resume'}
                                </a>
                            </div>

                            <div className="mt-9 grid gap-3.5 sm:grid-cols-3">
                                {keyMetrics.map((item) => (
                                    <div
                                        key={item.label}
                                        className="rounded-[22px] border border-gray-200/90 bg-white/95 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
                                    >
                                        <p className="font-display text-2xl font-bold tracking-tight text-gray-900">
                                            {item.metric}
                                        </p>
                                        <p className="mt-1 text-xs font-semibold text-primary">
                                            {item.label}
                                        </p>
                                        <p className="mt-1.5 text-xs leading-5 text-gray-600">
                                            {item.detail}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="order-2 lg:order-2">
                            <div className="relative mx-auto max-w-[420px]">
                                <div className="absolute -inset-3 rounded-[36px] bg-[radial-gradient(circle_at_top,rgba(26,115,232,0.20),transparent_60%)] blur-2xl" />
                                <div className="relative rounded-[32px] border border-gray-200 bg-[linear-gradient(160deg,rgba(255,255,255,0.96),rgba(248,250,252,0.98))] p-4 shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:p-5">
                                    <div className="rounded-[26px] border border-gray-200/90 bg-white px-4 py-5 sm:px-5">
                                        <div className="flex items-center gap-3.5">
                                            <img
                                                src={identity.avatar}
                                                alt={identity.name}
                                                width={320}
                                                height={320}
                                                srcSet="/assets/avatar-320.webp 1x, /assets/avatar-640.webp 2x"
                                                loading="eager"
                                                className="h-20 w-20 shrink-0 rounded-[22px] object-cover shadow-md md:h-24 md:w-24"
                                            />
                                            <div className="min-w-0">
                                                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-primary">
                                                    {isZh ? '專業摘要' : 'Profile Snapshot'}
                                                </p>
                                                <h2 className="mt-1 truncate text-xl font-bold tracking-tight text-gray-900">
                                                    {identity.name}
                                                </h2>
                                                <p className={`mt-0.5 font-medium leading-snug text-gray-700 ${isZh ? 'text-xs sm:text-[0.82rem]' : 'text-xs tracking-[-0.01em]'}`}>
                                                    {isZh ? '資訊工程師 · 生成式 AI／LLM' : 'Information Engineer · GenAI / LLM'}
                                                </p>
                                                <p className="mt-1 text-[0.72rem] leading-4 text-gray-500">
                                                    {isZh ? '台灣新竹 · 半導體 IC 設計與智慧製造' : 'Hsinchu, TW · IC Design & Smart Mfg'}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-5 space-y-3 border-t border-dashed border-gray-200 pt-4">
                                            <div className="rounded-[20px] border border-primary/20 bg-primary-50/60 px-4 py-3.5 shadow-[0_10px_24px_rgba(26,115,232,0.06)]">
                                                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary">
                                                    {isZh ? '職涯軌跡' : 'Career Track'}
                                                </p>
                                                <div className="mt-2.5 space-y-2.5">
                                                    {careerTrack.map((track, idx) => (
                                                        <div
                                                            key={track.company}
                                                            className={idx > 0 ? 'border-t border-primary/10 pt-2.5' : ''}
                                                        >
                                                            <div className="flex flex-wrap items-center justify-between gap-1.5">
                                                                <div className="flex items-center gap-1.5">
                                                                    <span className="text-xs font-bold text-gray-900">
                                                                        {track.company}
                                                                    </span>
                                                                    <span className="rounded-full border border-primary/20 bg-white/90 px-2 py-0.5 text-[0.62rem] font-semibold text-primary">
                                                                        {track.domain}
                                                                    </span>
                                                                </div>
                                                                <span className="font-mono text-[0.68rem] font-medium text-gray-500">
                                                                    {track.period}
                                                                </span>
                                                            </div>
                                                            <p className="mt-1 text-xs leading-5 text-gray-700">
                                                                {track.focus}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="rounded-[20px] border border-gray-200 bg-gray-50/80 px-4 py-3.5">
                                                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gray-600">
                                                    {isZh ? '主力技術棧' : 'Core Tech Stack'}
                                                </p>
                                                <div className="mt-2.5 flex flex-wrap gap-1.5">
                                                    {coreTechStack.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="rounded-[20px] border border-gray-200 bg-gray-50/80 px-4 py-3.5">
                                                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gray-600">
                                                    {isZh ? '企業落地標準' : 'Engineering Governance'}
                                                </p>
                                                <div className="mt-2.5 flex flex-wrap gap-1.5">
                                                    {governanceStandards.map((item) => (
                                                        <span
                                                            key={item}
                                                            className="rounded-full border border-emerald-200/80 bg-emerald-50/70 px-2.5 py-1 text-xs font-medium text-emerald-800"
                                                        >
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
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

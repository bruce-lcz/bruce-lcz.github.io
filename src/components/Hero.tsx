import type { MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
    const { config, language } = useLanguage();
    const { identity, links } = config;
    const isZh = language === 'zh';

    const handleWorkClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section className="relative overflow-hidden px-6 pb-20 pt-28 md:pb-28 md:pt-36" id="home">
            <div className="personal-orb personal-orb-blue -right-24 top-12" />
            <div className="personal-orb personal-orb-warm -left-32 top-[34rem]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className="relative mx-auto max-w-6xl"
            >
                <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center lg:gap-20">
                    <div>
                        <p className="mb-7 flex items-center gap-3 text-sm font-medium text-gray-500">
                            <span className="h-px w-8 bg-primary" />
                            {isZh ? '嗨，我是 Bruce。' : "Hi, I'm Bruce."}
                        </p>

                        <h1 className={`max-w-[820px] font-display font-medium leading-[1.04] tracking-[-0.045em] text-gray-950 ${isZh ? 'text-[2.9rem] md:text-[4.5rem]' : 'text-[2.85rem] md:text-[5rem]'}`}>
                            {isZh ? (
                                <>我設計與開發<span className="text-primary">企業 AI 應用</span>，從需求一路做到上線。</>
                            ) : (
                                <>I design and build <span className="text-primary">enterprise AI applications</span>, from requirements to rollout.</>
                            )}
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
                            {isZh
                                ? '我專注在 AI 應用、內部工具與工作流程，負責從需求拆解、系統設計一路做到部署與導入。'
                                : 'I build AI applications, internal tools, and workflows—from requirement framing and system design through deployment and adoption.'}
                        </p>

                        <div className="mt-9 flex flex-wrap items-center gap-3">
                            <a href="#work" onClick={handleWorkClick} className="personal-button personal-button-dark">
                                {isZh ? '看看我做的東西' : 'See what I build'}
                                <ArrowDownRight className="h-4 w-4" />
                            </a>
                            <a href={`mailto:${links.email}`} className="personal-button personal-button-light">
                                <Mail className="h-4 w-4" />
                                {isZh ? '來聊聊' : 'Say hello'}
                            </a>
                        </div>

                        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-500">
                            <a href={links.github} target="_blank" rel="noopener noreferrer" className="social-link"><Github className="h-4 w-4" />GitHub</a>
                            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin className="h-4 w-4" />LinkedIn</a>
                            <a href="/Bruce_Cheng_Resume.pdf" target="_blank" rel="noopener noreferrer" className="social-link"><FileText className="h-4 w-4" />{isZh ? '履歷' : 'Resume'}</a>
                        </div>
                    </div>

                    <div className="mx-auto w-full max-w-[340px] lg:mx-0">
                        <div className="relative rotate-[2deg] rounded-[2rem] bg-[#f2eadf] p-3 shadow-[0_24px_70px_rgba(47,40,32,0.16)]">
                            <img src={identity.avatar} alt={identity.name} className="aspect-[4/5] w-full rounded-[1.45rem] object-cover" />
                            <div className="absolute -bottom-5 -left-7 -rotate-[5deg] rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-lg">
                                <p className="text-xs uppercase tracking-[0.18em] text-gray-400">{isZh ? '目前所在' : 'Currently'}</p>
                                <p className="mt-1 font-display text-lg font-medium text-gray-900">Taiwan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

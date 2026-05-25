import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const WhatIActuallyBuild = () => {
    const { language } = useLanguage();

    const cards = language === 'zh'
        ? [
            {
                index: '01',
                title: '把模糊需求拆成流程',
                body: '把一句「可不可以用 AI 做？」拆成資料來源、限制條件、模型能力、工具流程與使用者介面。',
            },
            {
                index: '02',
                title: '組合工具，不只調模型',
                body: '根據任務需要組合 OCR、ASR、RAG、Agent、API、資料庫與驗證邏輯，完成可用流程。',
            },
            {
                index: '03',
                title: '把實驗做成內部產品',
                body: '把一次性的 AI prototype 包裝成團隊能持續使用的 Web App 或 workflow。',
            },
            {
                index: '04',
                title: '讓 AI 支援真實判斷',
                body: '結合法務、研發、製造與營運情境，讓 AI 不只是生成文字，而是支援實際工作。',
            },
        ]
        : [
            {
                index: '01',
                title: 'AI Workflow from Ambiguous Needs',
                body: 'Break a vague “Can we use AI here?” into data sources, constraints, model fit, tool flow, and user interface.',
            },
            {
                index: '02',
                title: 'Tool-Composite AI Applications',
                body: 'Go beyond calling a model by combining OCR, ASR, RAG, agents, APIs, databases, validation logic, and product interfaces when the task needs them.',
            },
            {
                index: '03',
                title: 'Internal AI Products',
                body: 'Package one-off AI experiments into internal tools, web apps, and workflows teams can use repeatedly.',
            },
            {
                index: '04',
                title: 'Domain-Aware Decision Support',
                body: 'Apply AI in legal, engineering, manufacturing, and operations contexts where answers need to support real judgment, not just generate text.',
            },
        ];

    return (
        <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
            <div className="rounded-[32px] border border-white/80 bg-white/90 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:p-8">
                <div className="mb-8 grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-end">
                    <div>
                        <p className="editorial-kicker">{language === 'zh' ? '工作方式' : 'Working Style'}</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                            {language === 'zh' ? '我實際打造的東西' : 'What I Actually Build'}
                        </h2>
                    </div>
                    <p className="max-w-[42rem] text-[0.98rem] leading-7 text-gray-600">
                        {language === 'zh'
                            ? '重點不是單一模型或單一工具，而是如何把需求拆清楚，再把合適的能力組成一個能被真實使用者採用的 workflow。'
                            : 'The point is not a single model or a single tool. It is how ambiguous needs are framed, composed, and turned into workflows people can actually use.'}
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {cards.map((card, index) => (
                        <motion.article
                            key={card.title}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.35, delay: index * 0.06 }}
                            className="rounded-[28px] border border-gray-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-[0_16px_38px_rgba(15,23,42,0.05)]"
                        >
                            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-primary/80">
                                {card.index}
                            </p>
                            <h3 className="mt-3 text-[1.55rem] font-semibold tracking-tight text-gray-900 md:text-[1.7rem]">
                                {card.title}
                            </h3>
                            <p className="mt-3 max-w-[32rem] text-[0.95rem] leading-[1.75] text-gray-600 md:text-[1rem]">
                                {card.body}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

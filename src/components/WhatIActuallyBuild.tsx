import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const WhatIActuallyBuild = () => {
    const { language } = useLanguage();

    const cards = language === 'zh'
        ? [
            {
                index: '01',
                title: '把模糊需求拆成流程',
                body: '把一句「這件事能不能用 AI 做？」釐清成資料來源、限制條件、模型能力、工具流程與使用者體驗。',
            },
            {
                index: '02',
                title: '組合工具，不只調模型',
                body: '依任務需要組合 OCR、ASR、RAG、Agent、API、資料庫與驗證機制，完成真正可用的流程。',
            },
            {
                index: '03',
                title: '把實驗做成內部產品',
                body: '把一次性的 AI 原型打磨成團隊能持續使用的 Web App 或內部流程。',
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
                title: 'Clarify Where AI Helps',
                body: 'Turn a vague “Can we use AI here?” into a clearer picture of the data, constraints, tool flow, and user interaction involved.',
            },
            {
                index: '02',
                title: 'Put the Right Tools Together',
                body: 'Combine models, APIs, retrieval, parsing, validation, and interfaces based on what the workflow actually needs.',
            },
            {
                index: '03',
                title: 'Make Internal Workflows Reusable',
                body: 'Turn one-off AI prototypes into internal tools, web apps, or workflows that teams can use repeatedly.',
            },
            {
                index: '04',
                title: 'Support Work That Needs Judgment',
                body: 'Apply AI in legal, engineering, manufacturing, and operations contexts where the output needs to support real decisions.',
            },
        ];

    return (
        <section className="mx-auto max-w-[90rem] scroll-mt-24 py-10 md:py-14" id="what-i-build">
            <div className="rounded-[32px] border border-white/80 bg-white/90 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:p-8">
                <div className="mb-8 grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-end">
                    <div>
                        <p className="editorial-kicker">{language === 'zh' ? '能力面向' : 'Capabilities'}</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                            {language === 'zh' ? 'AI 應用與工具化案例' : 'AI Applications and Tooling Cases'}
                        </h2>
                    </div>
                    <p className="max-w-[42rem] text-[0.98rem] leading-7 text-gray-600">
                        {language === 'zh'
                            ? '重點不在單一模型或工具，而在釐清需求後組合合適能力，做成真實使用者願意採用的流程。'
                            : 'The point is not a single model or a single tool. It is how ambiguous needs are framed, composed, and turned into workflows people can actually use.'}
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {cards.map((card, index) => (
                        <motion.article
                            key={card.title}
                            initial={false}
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

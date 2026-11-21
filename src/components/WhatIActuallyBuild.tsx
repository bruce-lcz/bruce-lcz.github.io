import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const WhatIActuallyBuild = () => {
    const { language } = useLanguage();
    const isZh = language === 'zh';

    const cards = isZh
        ? [
            {
                index: '01',
                title: '需求拆解與信任邊界',
                body: '在導入模型前，先界定封閉內網、資料權限範圍與人工審核節點。',
                tags: ['內網資安邊界', '伺服器端權限', '人工審查節點'],
            },
            {
                index: '02',
                title: '多模型與工具鏈編排',
                body: '依任務組合地端 vLLM、VLM、OCR、ASR、受控 NL2SQL 與頁級溯源 RAG。',
                tags: ['vLLM / VLM', 'Guarded NL2SQL', '頁級溯源 RAG'],
            },
            {
                index: '03',
                title: '高容錯資料管線與內部產品交付',
                body: '處理加密活頁簿與 CP950 舊格式髒資料，以 FastAPI 封裝並透過 AI 輔助整合 Web 介面容器化交付。',
                tags: ['異質髒資料 ETL', 'FastAPI + Web UI', 'Docker 離線部署'],
            },
            {
                index: '04',
                title: '推論效能優化與團隊賦能',
                body: '調校 Prefix Caching（KV Cache／TTFT）與 Context 壓縮，並透過 20+ 場諮詢建立全公司教材。',
                tags: ['KV Cache / TTFT', 'Context 壓縮', '20+ 1-on-1 賦能'],
            },
        ]
        : [
            {
                index: '01',
                title: 'Scope & Trust Boundaries',
                body: 'Define air-gapped constraints, server-side permission scopes, and human review gates before model selection.',
                tags: ['Air-Gapped Scope', 'Role-Scoped Auth', 'Human-in-the-Loop'],
            },
            {
                index: '02',
                title: 'Model & Tool Orchestration',
                body: 'Compose on-prem vLLM, VLM, OCR, ASR, guarded NL2SQL, and page-cited RAG for verifiable outputs.',
                tags: ['vLLM & VLM', 'Guarded NL2SQL', 'Page-Cited RAG'],
            },
            {
                index: '03',
                title: 'Resilient ETL & Internal Web Apps',
                body: 'Normalize encrypted or legacy CP950 data and ship containerized FastAPI backends with AI-assisted Web UIs.',
                tags: ['Legacy Data ETL', 'FastAPI + Web UI', 'Offline Docker'],
            },
            {
                index: '04',
                title: 'Inference Tuning & Enablement',
                body: 'Optimize prefix caching (KV cache / TTFT) and turn 20+ 1-on-1 consultations into company-wide guides.',
                tags: ['KV Cache / TTFT', 'Context Compression', '20+ 1-on-1 Guides'],
            },
        ];

    return (
        <section className="mx-auto max-w-[90rem] scroll-mt-24 px-6 py-8 md:py-12" id="what-i-build">
            <div className="rounded-[32px] border border-white/80 bg-white/90 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:p-8">
                <div className="mb-7 grid gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-end">
                    <div>
                        <p className="editorial-kicker">{isZh ? '交付方法論' : 'Engineering Playbook'}</p>
                        <h2 className="mt-2.5 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                            {isZh ? '從需求到上線的四個關鍵環節' : 'How I Ship Production AI'}
                        </h2>
                    </div>
                    <p className="max-w-[42rem] text-sm leading-7 text-gray-600 md:text-[0.95rem]">
                        {isZh
                            ? '把安全邊界、工具鏈編排、髒資料 ETL 與推論優化整合成團隊可持續維護的內部系統。'
                            : 'Combining trust boundaries, model/tool composition, resilient ETL, and inference optimization into maintainable internal systems.'}
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {cards.map((card, index) => (
                        <motion.article
                            key={card.title}
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.35, delay: index * 0.05 }}
                            className="flex h-full flex-col justify-between rounded-[24px] border border-gray-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
                        >
                            <div>
                                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                                    {card.index}
                                </p>
                                <h3 className="mt-2.5 text-lg font-semibold tracking-tight text-gray-900">
                                    {card.title}
                                </h3>
                                <p className="mt-2.5 text-sm leading-6 text-gray-600">
                                    {card.body}
                                </p>
                            </div>

                            <div className="mt-5 flex flex-wrap gap-1.5 border-t border-gray-100 pt-3.5">
                                {card.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-primary/15 bg-primary-50/70 px-2.5 py-1 text-[0.7rem] font-medium text-primary"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhatIActuallyBuild = () => {
    const { language } = useLanguage();
    const isZh = language === 'zh';

    const notes = isZh
        ? [
            { eyebrow: '01 / 問題', title: '先找出流程卡在哪裡', body: '在選模型之前，我會先確認使用者在等什麼、要做什麼判斷，以及資訊在哪個環節遺失。' },
            { eyebrow: '02 / 工具', title: '依限制選擇技術', body: 'OCR、RAG、Agent 或 LLM API 沒有固定答案；資料敏感度、準確性、速度與維護成本會決定技術組合。' },
            { eyebrow: '03 / 導入', title: '把導入納入產品設計', body: '除了功能可用，介面、驗證機制、權限與既有操作習慣，也會直接影響一套工具能否進入日常工作。' },
        ]
        : [
            { eyebrow: '01 / Problem', title: 'Locate the bottleneck first', body: 'Before choosing a model, I identify what users are waiting for, which decisions they need to make, and where information is being lost.' },
            { eyebrow: '02 / Tools', title: 'Choose technology by constraint', body: 'OCR, RAG, agents, and LLM APIs are options, not defaults. Data sensitivity, accuracy, latency, and maintenance determine the stack.' },
            { eyebrow: '03 / Adoption', title: 'Design for rollout from the start', body: 'Interfaces, validation, access control, and existing work habits matter as much as whether the core function works.' },
        ];

    return (
        <section className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20 md:py-28" id="notes">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                        <Sparkles className="h-3.5 w-3.5" />
                        {isZh ? '工作原則' : 'Working principles'}
                    </div>
                    <h2 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.035em] text-gray-950 md:text-5xl">
                        {isZh ? '我怎麼把 AI 需求做成產品' : 'How I turn AI requests into products'}
                    </h2>
                    <p className="mt-6 max-w-md text-base leading-8 text-gray-600">
                        {isZh ? '從釐清問題、選擇技術，到最後進入實際工作流程。' : 'From defining the problem and choosing the stack to fitting the result into day-to-day work.'}
                    </p>
                </div>

                <div className="divide-y divide-gray-200 border-y border-gray-200">
                    {notes.map((note, index) => (
                        <motion.article
                            key={note.title}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            className="group grid gap-4 py-8 md:grid-cols-[150px_1fr] md:py-10"
                        >
                            <p className="pt-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{note.eyebrow}</p>
                            <div>
                                <h3 className="flex items-start justify-between gap-4 text-2xl font-medium tracking-tight text-gray-900">
                                    {note.title}
                                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-gray-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                                </h3>
                                <p className="mt-3 max-w-2xl text-base leading-8 text-gray-600">{note.body}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

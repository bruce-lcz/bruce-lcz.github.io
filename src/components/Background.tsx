import { ArrowUpRight, Download, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Background = () => {
    const { config, language } = useLanguage();
    const isZh = language === 'zh';

    return (
        <section className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20 md:py-28" id="about">
            <div className="overflow-hidden rounded-[2.5rem] bg-[#172033] text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
                <div className="grid gap-12 p-8 md:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:p-16">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">{isZh ? '經歷' : 'Background'}</p>
                        <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.035em] !text-white md:text-5xl">
                            {isZh ? '從資料分析、智慧製造，到企業生成式 AI 應用。' : 'From data and manufacturing AI to enterprise generative AI.'}
                        </h2>
                        <p className="mt-6 flex items-center gap-2 text-sm text-slate-300"><MapPin className="h-4 w-4" />Taiwan</p>
                    </div>

                    <div>
                        <p className="max-w-2xl text-lg leading-9 text-slate-300">
                            {isZh
                                ? '我的工作橫跨資料處理、預測模型、決策支援與內部 AI 產品。目前主要服務法務、研發與知識工作場景，負責把需求整理成可部署、可維護的系統。'
                                : 'My work spans data processing, predictive models, decision support, and internal AI products. I now focus on legal, R&D, and knowledge-work use cases, taking projects from requirements to deployable, maintainable systems.'}
                        </p>

                        <div className="mt-10 space-y-5 border-t border-white/10 pt-8">
                            {config.experience.map((job) => (
                                <div key={job.id} className="grid gap-1 sm:grid-cols-[130px_1fr] sm:gap-5">
                                    <p className="text-sm text-slate-500">{job.period}</p>
                                    <div>
                                        <p className="font-medium text-white">{job.role}</p>
                                        <p className="mt-1 text-sm text-slate-400">{job.company}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-wrap gap-3">
                            <a href="/Bruce_Cheng_Resume.pdf" download className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-blue-50">
                                <Download className="h-4 w-4" />{isZh ? '下載完整履歷' : 'Download full resume'}
                            </a>
                            <a href={`mailto:${config.links.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                                {isZh ? '聯絡我' : 'Get in touch'}<ArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

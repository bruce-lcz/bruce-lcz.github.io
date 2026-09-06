import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Awards = () => {
    const { config, language } = useLanguage();

    return (
        <section className="mx-auto max-w-[90rem] px-6 py-20">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="editorial-kicker">{language === 'zh' ? '認證' : 'Recognition'}</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">
                        {language === 'zh' ? '獎項與認證' : 'Awards & Recognition'}
                    </h2>
                </div>
            </div>

            <div className="space-y-4">
                {config.awards.map((award, index) => (
                    <motion.article
                        key={`${award.year}-${award.title}`}
                        initial={false}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.32, delay: index * 0.06 }}
                        className="grid gap-4 rounded-[26px] border border-gray-200 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.05)] md:grid-cols-[80px_1fr]"
                    >
                        <div className="text-2xl font-semibold tracking-tight text-gray-600">
                            {award.year}
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                                <Trophy aria-hidden="true" className="h-4 w-4" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {award.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600">
                                    {award.organization}
                                </p>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

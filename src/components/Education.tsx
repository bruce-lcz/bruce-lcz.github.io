import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Education = () => {
    const { config, language } = useLanguage();

    return (
        <section className="mx-auto max-w-6xl bg-white/55 px-6 py-20">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="editorial-kicker">{language === 'zh' ? '背景' : 'Background'}</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">
                        {language === 'zh' ? '學歷' : 'Education'}
                    </h2>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {config.education.map((education, index) => (
                    <motion.article
                        key={`${education.school}-${education.degree}`}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.35, delay: index * 0.08 }}
                        className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_16px_36px_rgba(15,23,42,0.05)]"
                    >
                        <div className="flex items-start gap-4">
                            {education.logo ? (
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-white p-2">
                                    <img src={education.logo} alt={education.school} className="h-full w-full object-contain" />
                                </div>
                            ) : (
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary">
                                    <GraduationCap className="h-6 w-6" />
                                </div>
                            )}

                            <div>
                                <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                                    {education.school}
                                </h3>
                                <p className="mt-2 text-base font-medium text-primary">
                                    {education.degree}
                                </p>
                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    {education.field}
                                </p>
                                <p className="mt-2 text-sm text-gray-400">
                                    {education.period}
                                </p>
                            </div>
                        </div>

                        {education.thesis && (
                            <div className="mt-5 border-t border-dashed border-gray-200 pt-4">
                                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gray-400">
                                    {language === 'zh' ? '論文 / 研究' : 'Thesis / Research'}
                                </p>
                                <p className="mt-3 text-sm italic leading-7 text-gray-600">
                                    {education.thesis}
                                </p>
                            </div>
                        )}
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

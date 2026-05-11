import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Education = () => {
    const { config, language } = useLanguage();
    return (
        <section className="max-w-4xl mx-auto px-6 py-20 bg-white">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                    {language === 'zh' ? '學歷' : 'Education'}
                </h2>
                <div className="h-1 w-12 bg-primary rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {config.education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-white"
                    >
                        <div className="flex items-start gap-4">
                            {edu.logo ? (
                                <div className="w-12 h-12 shrink-0 bg-white rounded-lg border border-gray-100 flex items-center justify-center p-1 overflow-hidden">
                                    <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                                </div>
                            ) : (
                                <div className="p-3 bg-primary-50 rounded-lg text-primary shrink-0">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                            )}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{edu.school}</h3>
                                <p className="text-primary font-semibold text-base">{edu.degree}</p>
                                <p className="text-gray-600 font-medium mb-1">{edu.field}</p>
                                <p className="text-sm text-gray-500 mb-4">{edu.period}</p>

                                {edu.thesis && (
                                    <div className="text-sm text-gray-600 italic border-l-2 border-primary/20 pl-3">
                                        "{edu.thesis}"
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

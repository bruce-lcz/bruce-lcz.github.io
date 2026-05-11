import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Awards = () => {
    const { config, language } = useLanguage();
    return (
        <section className="max-w-4xl mx-auto px-6 py-20 bg-gray-50">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                    {language === 'zh' ? '獎項' : 'Awards'}
                </h2>
                <div className="h-1 w-12 bg-primary rounded-full" />
            </div>

            <div className="space-y-4">
                {config.awards.map((award, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-6 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <div className="text-xl font-bold text-gray-400 w-16 text-right font-display">
                            {award.year}
                        </div>

                        <div className="h-10 w-px bg-gray-200" />

                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-1">
                                <Trophy className="w-4 h-4 text-yellow-600" />
                                {award.title}
                            </h3>
                            <p className="text-gray-600">{award.organization}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Globe, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
    const { config, language, toggleLanguage } = useLanguage();
    const { identity, links } = config;

    return (
        <section className="relative flex flex-col justify-start md:justify-center items-center px-6 pt-20 pb-8 md:py-10 bg-white overflow-hidden">
            {/* Minimal Grid Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f3f4_1px,transparent_1px),linear-gradient(to_bottom,#f1f3f4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Language Toggle */}
            <div className="absolute top-6 right-6 z-20">
                <div className="flex bg-gray-100/80 backdrop-blur-sm p-1 rounded-full border border-gray-200">
                    <button
                        onClick={() => language !== 'en' && toggleLanguage()}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${language === 'en'
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        EN
                    </button>
                    <button
                        onClick={() => language !== 'zh' && toggleLanguage()}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${language === 'zh'
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        中文
                    </button>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center max-w-4xl mx-auto z-10"
            >
                <div className="flex justify-center mb-6">
                    <img
                        src={identity.avatar}
                        alt={identity.name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-md"
                    />
                </div>

                <div className="inline-block mb-4">
                    <span className="px-4 py-2 rounded-full bg-gray-50 text-gray-900 border border-gray-200 text-sm font-medium tracking-wide shadow-sm">
                        {language === 'zh' ? 'AI Workflow 設計者' : 'AI Workflow Builder'}
                    </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight text-gray-900 leading-[1.2]">
                    {identity.name}
                </h1>

                <p className="text-lg md:text-xl font-light text-gray-600 max-w-2xl mx-auto mb-3 leading-relaxed">
                    {identity.role}
                </p>

                <p className="text-base md:text-base text-gray-500 max-w-3xl mx-auto mb-6 leading-relaxed">
                    {identity.tagline}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                    <a
                        href={`mailto:${links.email}`}
                        className="flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                    >
                        <Mail className="w-5 h-5" />
                        {language === 'zh' ? '聯絡我' : 'Contact Me'}
                    </a>
                </div>

                <div className="flex justify-center gap-8 items-center">
                    {links.github && (
                        <a
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub"
                            className="text-gray-400 hover:text-gray-900 transition-colors"
                        >
                            <Github className="w-7 h-7" />
                        </a>
                    )}
                    {links.linkedin && (
                        <a
                            href={links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="LinkedIn"
                            className="text-gray-400 hover:text-[#0077b5] transition-colors"
                        >
                            <Linkedin className="w-7 h-7" />
                        </a>
                    )}
                    <a
                        href="/Bruce_Cheng_Resume.pdf"
                        download="Bruce_Cheng_Resume.pdf"
                        title={language === 'zh' ? '下載履歷' : 'Download Resume'}
                        className="text-gray-400 hover:text-gray-900 transition-colors"
                    >
                        <FileText className="w-7 h-7" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

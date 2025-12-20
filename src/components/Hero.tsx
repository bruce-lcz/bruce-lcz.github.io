import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
    const { config, language, toggleLanguage } = useLanguage();
    const { identity, links } = config;

    return (
        <section className="relative min-h-[60vh] flex flex-col justify-start md:justify-center items-center px-6 pt-28 pb-12 md:py-12 bg-white overflow-hidden">
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
                <div className="inline-block mb-6">
                    <span className="px-4 py-2 rounded-full bg-gray-50 text-gray-900 border border-gray-200 text-sm font-medium tracking-wide shadow-sm">
                        Professional Profile
                    </span>
                </div>

                <h1 className="text-3xl md:text-6xl font-bold mb-4 tracking-tight text-gray-900 leading-[1.2]">
                    {identity.name}
                </h1>

                <p className="text-lg md:text-2xl font-light text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
                    {identity.role}
                </p>

                <p className="text-base md:text-lg text-gray-500 max-w-lg mx-auto mb-8 leading-relaxed">
                    {identity.tagline}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                    {/* <a
                        href={links.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-800 transition-all shadow-md hover:shadow-lg translate-y-0 hover:-translate-y-1 duration-200"
                    >
                        View Resume
                        <ArrowRight className="w-5 h-5" />
                    </a> */}
                    <a
                        href={`mailto:${links.email}`}
                        className="flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                    >
                        <Mail className="w-5 h-5" />
                        Contact Me
                    </a>
                </div>

                <div className="flex justify-center gap-8">
                    {links.github && (
                        <a
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
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
                            className="text-gray-400 hover:text-[#0077b5] transition-colors"
                        >
                            <Linkedin className="w-7 h-7" />
                        </a>
                    )}
                </div>
            </motion.div>
        </section>
    );
};

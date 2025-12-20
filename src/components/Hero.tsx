import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
    const { config, language, toggleLanguage } = useLanguage();
    const { identity, links } = config;

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 py-20 bg-white overflow-hidden">
            {/* Minimal Grid Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f3f4_1px,transparent_1px),linear-gradient(to_bottom,#f1f3f4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Language Toggle */}
            <div className="absolute top-6 right-6 z-20">
                <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-all text-sm font-medium text-gray-700 hover:text-primary"
                >
                    <Globe className="w-4 h-4" />
                    <span>{language === 'en' ? '中文' : 'English'}</span>
                </button>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center max-w-4xl mx-auto z-10"
            >
                <div className="inline-block mb-8">
                    <span className="px-4 py-2 rounded-full bg-primary-50 text-primary text-sm font-semibold tracking-wide uppercase">
                        Portfolio 2025
                    </span>
                </div>

                <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-gray-900 leading-[1.1]">
                    {identity.name}
                </h1>

                <p className="text-2xl md:text-3xl font-regular text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                    {identity.role}
                </p>

                <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
                    {identity.tagline}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <a
                        href={links.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1 duration-200"
                    >
                        View Resume
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <a
                        href={`mailto:${links.email}`}
                        className="flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
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
                            <Github className="w-8 h-8" />
                        </a>
                    )}
                    {links.linkedin && (
                        <a
                            href={links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#0077b5] transition-colors"
                        >
                            <Linkedin className="w-8 h-8" />
                        </a>
                    )}
                </div>
            </motion.div>
        </section>
    );
};

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Skills = () => {
    const { config, language } = useLanguage();

    return (
        <section className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-12 grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-end">
                <div>
                    <p className="editorial-kicker">{language === 'zh' ? '能力視角' : 'Capability View'}</p>
                    <h2 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">
                        {language === 'zh' ? '能力地圖' : 'Capability Map'}
                    </h2>
                </div>
                <p className="max-w-2xl text-base leading-7 text-gray-600">
                    {language === 'zh'
                        ? '這裡不是把技能當成標籤牆，而是呈現我如何把技術放進需求拆解、系統組合、產品實作與 domain workflow 中。'
                        : 'This is not a disconnected tag wall. It is a map of how I place technical choices inside requirement framing, system composition, product implementation, and domain workflows.'}
                </p>
            </div>

            <motion.div
                initial="hidden"
                animate="show"
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.08,
                        },
                    },
                }}
                className="grid gap-6 md:grid-cols-2"
            >
                {config.skills.map((skillGroup) => (
                    <motion.article
                        key={skillGroup.category}
                        variants={{
                            hidden: { opacity: 0, y: 16 },
                            show: { opacity: 1, y: 0 },
                        }}
                        className="rounded-[28px] border border-gray-200 bg-white/85 p-7 shadow-[0_14px_34px_rgba(15,23,42,0.04)]"
                    >
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gray-400">
                            {language === 'zh' ? '能力範圍' : 'Capability Area'}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">
                            {skillGroup.category}
                        </h3>
                        {skillGroup.description && (
                            <p className="mt-3 text-sm leading-7 text-gray-600">
                                {skillGroup.description}
                            </p>
                        )}
                        <div className="mt-6 flex flex-wrap gap-2.5">
                            {skillGroup.items.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:border-primary/20 hover:bg-primary-50 hover:text-primary"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
};

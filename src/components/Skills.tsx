import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Skills = () => {
    const { config } = useLanguage();
    const skills = config.skills;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="max-w-4xl mx-auto px-6 pb-20">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {skills.map((skillGroup, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            {skillGroup.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-100 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-100 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProjectsProps {
    onProjectSelect: (projectId: string) => void;
}

export const Projects = ({ onProjectSelect }: ProjectsProps) => {
    const { config, language } = useLanguage();
    return (
        <section className="max-w-6xl mx-auto px-6 py-20" id="projects">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                        {language === 'zh' ? '精選 Workflows' : 'Selected Workflows'}
                    </h2>
                    <div className="h-1 w-12 bg-primary rounded-full mb-6" />
                    <p className="text-gray-600 text-lg">
                        {language === 'zh'
                            ? '這些案例呈現我如何把模糊的 AI 需求，拆解成團隊真的能使用的系統、工具與 workflow。'
                            : 'A closer look at how I turn ambiguous AI needs into systems, tools, and workflows that teams can use.'}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {config.projects?.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => onProjectSelect(project.id)}
                        className="group relative bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer flex flex-col h-full"
                    >
                        {/* Hover Effect Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                        <div className="relative flex-1">
                            <div className="flex justify-between items-start mb-4">
                                <span className={`
                                    text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider
                                    ${project.category.toLowerCase() === 'work' ? 'bg-blue-50 text-blue-600' :
                                        project.category.toLowerCase() === 'research' ? 'bg-purple-50 text-purple-600' :
                                            project.category.toLowerCase() === 'pixart' ? 'bg-indigo-50 text-indigo-600' :
                                                project.category.toLowerCase() === 'auo' ? 'bg-blue-50 text-blue-600' :
                                                    'bg-green-50 text-green-600'}
                                `}>
                                    {project.category}
                                </span>
                                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 text-sm line-clamp-3 mb-6 leading-relaxed">
                                {project.shortDescription}
                            </p>
                        </div>

                        <div className="relative mt-auto pt-4 border-t border-gray-100">
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.slice(0, 3).map(tech => (
                                    <span key={tech} className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                                        {tech}
                                    </span>
                                ))}
                                {project.techStack.length > 3 && (
                                    <span className="text-xs font-medium text-gray-400 px-2 py-1">
                                        +{project.techStack.length - 3}
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

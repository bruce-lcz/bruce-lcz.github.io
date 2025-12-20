import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, Layout, Building } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ExperienceProps {
    onProjectSelect?: (projectId: string) => void;
}

export const Experience = ({ onProjectSelect }: ExperienceProps) => {
    const { config } = useLanguage();
    return (
        <section className="max-w-4xl mx-auto px-6 py-20 bg-gray-50" id="experience">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Experience</h2>
                <div className="h-1 w-12 bg-primary rounded-full" />
            </div>

            <div className="space-y-8">
                {config.experience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`
              relative p-8 rounded-xl border transition-all duration-200 group
              ${job.type === 'current'
                                ? 'bg-white border-primary/20 shadow-md'
                                : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
                            }
            `}
                    >
                        {job.type === 'current' && (
                            <div className="absolute top-6 right-6 flex items-center gap-2">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                </span>
                                <span className="text-primary font-semibold text-xs uppercase tracking-wider">Current</span>
                            </div>
                        )}

                        <div className="flex flex-col mb-6">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{job.role}</h3>
                                    <div className="flex flex-col gap-1 mt-1">
                                        <div className="flex items-center gap-x-4 gap-y-2 text-sm flex-wrap">
                                            <span className="font-semibold text-primary flex items-center gap-1.5">
                                                <Briefcase className="w-4 h-4" />
                                                {job.company}
                                            </span>
                                            <span className="text-gray-500 flex items-center gap-1.5">
                                                <Calendar className="w-4 h-4" />
                                                {job.period}
                                            </span>
                                        </div>
                                        {/* Company Meta Description */}
                                        {job.companyMeta?.description && (
                                            <p className="text-gray-500 text-sm mt-1 italic flex items-center gap-1.5">
                                                <Building className="w-3.5 h-3.5 shrink-0" />
                                                {job.companyMeta.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                {job.companyMeta?.logo && (
                                    <img src={job.companyMeta.logo} alt={`${job.company} Logo`} className="w-12 h-12 object-contain" />
                                )}
                            </div>
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {job.description}
                        </p>

                        {job.achievements.length > 0 && (
                            <ul className="space-y-3 mb-8">
                                {job.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Projects Section - Only show if there are related projects */}
                        {job.relatedProjectIds && job.relatedProjectIds.length > 0 && onProjectSelect && (
                            <div className="mb-6 pt-4 border-t border-dashed border-gray-200">
                                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <Layout className="w-4 h-4" />
                                    Key Projects
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {job.relatedProjectIds.map(pid => {
                                        const project = config.projects?.find(p => p.id === pid);
                                        if (!project) return null;
                                        return (
                                            <button
                                                key={pid}
                                                onClick={() => onProjectSelect(pid)}
                                                className="flex flex-col items-start p-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors text-left group/project"
                                            >
                                                <span className="font-semibold text-gray-900 text-sm group-hover/project:text-primary transition-colors flex items-center gap-1">
                                                    {project.title}
                                                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/project:opacity-100 group-hover/project:translate-x-0 transition-all" />
                                                </span>
                                                <span className="text-xs text-gray-500 mt-1 line-clamp-2">
                                                    {project.shortDescription}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                            {job.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-200 rounded-md text-sm font-medium group-hover:bg-primary-50 group-hover:text-primary group-hover:border-primary/20 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

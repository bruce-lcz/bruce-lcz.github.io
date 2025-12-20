import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Tag, ChevronRight, Building, Award } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { DetailedProject } from '../data/types'; // Updated import
import { useLanguage } from '../context/LanguageContext';
import { useEffect } from 'react';

interface ProjectDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: DetailedProject | null;
}

export const ProjectDetailModal = ({ isOpen, onClose, project }: ProjectDetailModalProps) => {
    const { config } = useLanguage();
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project) return null;

    const company = config.experience.find(c => c.id === project.companyId);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col relative"
                        >
                            {/* Header / Hero */}
                            <div className="relative bg-gray-900 text-white p-8 shrink-0">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-wrap gap-2 text-sm font-medium opacity-80">
                                        {company && (
                                            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
                                                <Building className="w-3.5 h-3.5" />
                                                {company.company}
                                            </span>
                                        )}
                                        <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {project.period}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>

                                    <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
                                        <p className="text-lg text-gray-300 font-medium">{project.role}</p>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 rounded-lg transition-colors text-white font-medium"
                                            >
                                                View Live <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">

                                {/* Quick Stats / Summary Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                        <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-4">
                                            <Award className="w-5 h-5 text-primary" />
                                            Key Features
                                        </h3>
                                        <ul className="space-y-3">
                                            {project.keyFeatures.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                                                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {project.challenges && project.challenges.length > 0 && (
                                        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                                            <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-4">
                                                <Tag className="w-5 h-5 text-orange-500" />
                                                Core Challenges
                                            </h3>
                                            <ul className="space-y-3">
                                                {project.challenges.map((challenge, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                                                        <ChevronRight className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                                                        {challenge}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Main Description (Markdown) */}
                                <div className="prose prose-lg max-w-none text-gray-600 prose-headings:text-gray-900 prose-a:text-primary">
                                    <ReactMarkdown>{project.description}</ReactMarkdown>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Tech Stack & Tools</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map(tech => (
                                            <span key={tech} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm font-medium border border-gray-200">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Media Gallery (Future) */}
                                {project.media && project.media.length > 0 && (
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-gray-900">Gallery</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {project.media.map((item, idx) => (
                                                <div key={idx} className="rounded-lg overflow-hidden border border-gray-200">
                                                    {item.type === 'image' && (
                                                        <img src={item.url} alt={item.caption} className="w-full h-auto" />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

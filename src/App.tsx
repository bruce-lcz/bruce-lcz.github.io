import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Awards } from './components/Awards';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Skills } from './components/Skills';
import { useLanguage } from './context/LanguageContext';

type HomeTab = 'experience' | 'projects' | 'skills';

const Home = () => {
    const { config, language } = useLanguage();
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<HomeTab>('experience');

    const selectedProject = selectedProjectId
        ? config.projects?.find((project) => project.id === selectedProjectId) ?? null
        : null;

    const chapterTabs: Array<{
        id: HomeTab;
        index: string;
        title: string;
        helper: string;
    }> = [
        {
            id: 'experience',
            index: '01',
            title: language === 'zh' ? '經歷' : 'Experience',
            helper: language === 'zh' ? '角色、影響與跨部門工作脈絡。' : 'Roles, impact, and the operating context behind the work.',
        },
        {
            id: 'projects',
            index: '02',
            title: language === 'zh' ? '專案' : 'Projects',
            helper: language === 'zh' ? '把需求整理成能實際落地的代表專案。' : 'Representative systems that turn ambiguous AI needs into usable workflows.',
        },
        {
            id: 'skills',
            index: '03',
            title: language === 'zh' ? '技能' : 'Skills',
            helper: language === 'zh' ? '支撐架構、產品與交付節奏的能力地圖。' : 'The capability map behind architecture, product work, and delivery.',
        },
    ];

    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,#eef4ff,transparent_28%),linear-gradient(180deg,#f8fafc_0%,#ffffff_26%,#f8fafc_100%)] text-gray-900">
            <Hero />

            <main className="relative z-10 pb-20">
                <section className="mx-auto mt-8 max-w-6xl px-6">
                    <div className="rounded-[32px] border border-white/80 bg-white/90 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:p-6">
                        <div className="border-b border-gray-100 pb-5">
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary/80">
                                {language === 'zh' ? '章節導覽' : 'Chapter Selector'}
                            </p>
                            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
                                {language === 'zh' ? '用三個角度快速認識 Bruce' : 'A fast read on Bruce from three angles'}
                            </h2>
                        </div>

                        <div className="mt-5 grid gap-3 lg:grid-cols-3">
                            {chapterTabs.map((tab) => {
                                const isActive = activeTab === tab.id;

                                return (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`group rounded-[24px] border px-5 py-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                                            isActive
                                                ? 'border-primary/20 bg-primary-50 shadow-[0_16px_35px_rgba(26,115,232,0.12)]'
                                                : 'border-gray-200 bg-white hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-[0_16px_35px_rgba(15,23,42,0.06)]'
                                        }`}
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-gray-400">
                                                    {tab.index}
                                                </span>
                                                <h3 className={`mt-2 text-lg font-semibold tracking-tight ${isActive ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'}`}>
                                                    {tab.title}
                                                </h3>
                                            </div>
                                            <span className={`mt-1 h-0.5 w-10 rounded-full transition-all ${isActive ? 'bg-primary' : 'bg-gray-200 group-hover:bg-gray-300'}`} />
                                        </div>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">
                                            {tab.helper}
                                        </p>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <div className="mt-10 min-h-[640px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.28, ease: 'easeOut' }}
                        >
                            {activeTab === 'experience' ? (
                                <>
                                    <Experience onProjectSelect={setSelectedProjectId} />
                                    <Education />
                                    <Awards />
                                </>
                            ) : activeTab === 'projects' ? (
                                <Projects onProjectSelect={setSelectedProjectId} />
                            ) : (
                                <Skills />
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>

            <footer className="border-t border-gray-200/80 bg-white/80 py-12 text-center text-sm text-gray-500 backdrop-blur">
                <p>
                    © {new Date().getFullYear()} Bruce Cheng. {language === 'zh' ? '以清楚的結構、細節與可用性打造。' : 'Built with care, clarity, and usable detail.'}
                </p>
            </footer>

            <ProjectDetailModal
                isOpen={!!selectedProjectId}
                onClose={() => setSelectedProjectId(null)}
                project={selectedProject}
            />
        </div>
    );
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;

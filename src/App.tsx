import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Awards } from './components/Awards';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Skills } from './components/Skills';

// import { config } from './data/config'; // REMOVED
import { useLanguage } from './context/LanguageContext';

const Home = () => {
    const { config, language } = useLanguage();
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'experience' | 'projects' | 'skills'>('experience');

    const selectedProject = selectedProjectId
        ? config.projects?.find(p => p.id === selectedProjectId) ?? null
        : null;

    return (
        <div className="min-h-screen">
            <Hero />

            {/* Tab Navigation */}
            <div className="flex justify-center mt-8 mb-12">
                <div className="flex p-1 bg-gray-100 rounded-xl">
                    <button
                        onClick={() => setActiveTab('experience')}
                        className={`relative px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === 'experience'
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        {language === 'zh' ? '經歷' : 'Experience'}
                    </button>

                    <button
                        onClick={() => setActiveTab('projects')}
                        className={`relative px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === 'projects'
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        {language === 'zh' ? '專案' : 'Projects'}
                    </button>
                    <button
                        onClick={() => setActiveTab('skills')}
                        className={`relative px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === 'skills'
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        {language === 'zh' ? '技能' : 'Skills'}
                    </button>
                </div>
            </div>

            <div className="min-h-[600px]">
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
            </div>

            <footer className="text-center py-20 text-gray-500 text-sm border-t border-gray-200 bg-white">
                <p>© {new Date().getFullYear()} Bruce Cheng. Built for Impact.</p>
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


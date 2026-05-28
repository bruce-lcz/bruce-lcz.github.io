import { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Hero } from './components/Hero';
import { WhatIActuallyBuild } from './components/WhatIActuallyBuild';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Awards } from './components/Awards';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ScrollspyNav } from './components/ScrollspyNav';
import { useLanguage } from './context/LanguageContext';

const Home = () => {
    const { config, language } = useLanguage();
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

    const selectedProject = selectedProjectId
        ? config.projects?.find((project) => project.id === selectedProjectId) ?? null
        : null;

    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,#eef4ff,transparent_28%),linear-gradient(180deg,#f8fafc_0%,#ffffff_26%,#f8fafc_100%)] text-gray-900">
            <Hero />
            <ScrollspyNav />

            <main className="relative z-10 pb-20">
                <WhatIActuallyBuild />
                <Projects onProjectSelect={setSelectedProjectId} />
                <Experience onProjectSelect={setSelectedProjectId} />
                <Skills />
                <Education />
                <Awards />
            </main>

            <footer className="border-t border-gray-200/80 bg-white/80 py-12 text-center text-sm text-gray-500 backdrop-blur">
                <p>
                    © {new Date().getFullYear()} Bruce Cheng. {language === 'zh' ? '以清楚、實際、可用的方式設計與交付。' : 'Built with clarity, usefulness, and engineering care.'}
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

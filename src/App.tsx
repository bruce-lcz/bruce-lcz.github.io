import { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Hero } from './components/Hero';
import { WhatIActuallyBuild } from './components/WhatIActuallyBuild';
import { Projects } from './components/Projects';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { SiteHeader } from './components/SiteHeader';
import { Background } from './components/Background';
import { useLanguage } from './context/LanguageContext';

const Home = () => {
    const { config, language } = useLanguage();
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

    const selectedProject = selectedProjectId
        ? config.projects?.find((project) => project.id === selectedProjectId) ?? null
        : null;

    return (
        <div className="min-h-screen overflow-hidden bg-[#fbfaf7] text-gray-900">
            <SiteHeader />
            <Hero />

            <main className="relative z-10">
                <WhatIActuallyBuild />
                <Projects onProjectSelect={setSelectedProjectId} />
                <Background />
            </main>

            <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-6 pb-10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} Bruce Cheng</p>
                <p>{language === 'zh' ? 'AI 應用工程師，現居台灣。' : 'AI application engineer based in Taiwan.'}</p>
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

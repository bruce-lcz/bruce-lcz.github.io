import { useState } from 'react';
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
import { RecentArticles, ArticlePreview } from './components/RecentArticles';
import { ArticlesCTA } from './components/ArticlesCTA';

interface HomeProps {
    recentArticles?: ArticlePreview[];
}

const Home = ({ recentArticles = [] }: HomeProps) => {
    const { config, language } = useLanguage();
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
    const localizedArticles = recentArticles.filter((article) => article.lang === language);

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
                <ArticlesCTA articles={localizedArticles} />
                <RecentArticles articles={localizedArticles} />
            </main>

            <ProjectDetailModal
                isOpen={!!selectedProjectId}
                onClose={() => setSelectedProjectId(null)}
                project={selectedProject}
            />
        </div>
    );
};

import { LanguageProvider } from './context/LanguageContext';

interface AppProps {
    recentArticles?: ArticlePreview[];
}

function App({ recentArticles = [] }: AppProps) {
    return (
        <LanguageProvider>
            <Home recentArticles={recentArticles} />
        </LanguageProvider>
    );
}

export default App;

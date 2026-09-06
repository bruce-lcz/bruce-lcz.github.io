import { Hero } from './components/Hero';
import { WhatIActuallyBuild } from './components/WhatIActuallyBuild';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Awards } from './components/Awards';
import { ScrollspyNav } from './components/ScrollspyNav';

const Home = () => {
    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,#eef4ff,transparent_28%),linear-gradient(180deg,#f8fafc_0%,#ffffff_26%,#f8fafc_100%)] text-gray-900">
            <Hero />
            <ScrollspyNav />

            <div className="relative z-10 pb-20">
                <WhatIActuallyBuild />
                <Projects />
                <Experience />
                <Skills />
                <Education />
                <Awards />
            </div>
        </div>
    );
};

import { LanguageProvider } from './context/LanguageContext';

function App() {
    return (
        <LanguageProvider>
            <Home />
        </LanguageProvider>
    );
}

export default App;

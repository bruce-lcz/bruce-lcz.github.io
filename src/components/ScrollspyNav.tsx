import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

type SectionLink = {
    id: string;
    label: string;
};

const sectionIds = ['profile', 'what-i-build', 'projects', 'experience', 'articles', 'capability-map'];

export const ScrollspyNav = () => {
    const { language } = useLanguage();
    const [activeSection, setActiveSection] = useState<string>('profile');

    const sections: SectionLink[] = useMemo(() => (
        language === 'zh'
            ? [
                { id: 'profile', label: 'Profile / Hero' },
                { id: 'what-i-build', label: 'What I Build' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'articles', label: 'Articles' },
                { id: 'capability-map', label: 'Capability Map' },
            ]
            : [
                { id: 'profile', label: 'Profile / Hero' },
                { id: 'what-i-build', label: 'What I Build' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'articles', label: 'Articles' },
                { id: 'capability-map', label: 'Capability Map' },
            ]
    ), [language]);

    useEffect(() => {
        const elements = sectionIds
            .map((id) => document.getElementById(id))
            .filter((element): element is HTMLElement => !!element);

        if (elements.length === 0) {
            return undefined;
        }

        const updateActiveSection = () => {
            const focusLine = Math.min(window.innerHeight * 0.26, 220);
            const sectionAtFocusLine = elements.find((element) => {
                const rect = element.getBoundingClientRect();

                return rect.top <= focusLine && rect.bottom >= focusLine;
            });

            if (sectionAtFocusLine) {
                setActiveSection(sectionAtFocusLine.id);
                return;
            }

            const nearestVisibleSection = elements
                .map((element) => ({
                    element,
                    distance: Math.abs(element.getBoundingClientRect().top - focusLine),
                }))
                .sort((a, b) => a.distance - b.distance)[0];

            if (nearestVisibleSection) {
                setActiveSection(nearestVisibleSection.element.id);
            }
        };

        let ticking = false;

        const onScroll = () => {
            if (ticking) {
                return;
            }

            ticking = true;
            window.requestAnimationFrame(() => {
                updateActiveSection();
                ticking = false;
            });
        };

        updateActiveSection();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [sections]);

    const handleNavigate = (sectionId: string) => {
        const target = document.getElementById(sectionId);

        if (!target) {
            return;
        }

        setActiveSection(sectionId);
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <>
            <nav
                aria-label="Section navigation"
                className="pointer-events-none fixed inset-y-0 right-6 z-30 hidden xl:flex xl:items-center"
            >
                <div className="pointer-events-auto">
                    <div className="rounded-[28px] border border-white/70 bg-white/60 px-4 py-4 shadow-[0_18px_48px_rgba(15,23,42,0.08)] backdrop-blur-md">
                        <div className="relative flex flex-col gap-3 before:absolute before:bottom-3 before:left-[0.43rem] before:top-3 before:w-px before:bg-gradient-to-b before:from-gray-200 before:via-gray-300 before:to-gray-200">
                            {sections.map((section) => {
                                const isActive = activeSection === section.id;

                                return (
                                    <button
                                        key={section.id}
                                        type="button"
                                        onClick={() => handleNavigate(section.id)}
                                        className={`group relative flex items-center gap-3 pl-0 text-xs tracking-[0.18em] transition-all duration-300 ${
                                            isActive ? 'text-gray-900' : 'text-gray-400 hover:text-gray-700'
                                        }`}
                                    >
                                        <span
                                            className={`relative z-10 h-3 w-3 rounded-full border border-white transition-all duration-300 ${
                                                isActive
                                                    ? 'scale-110 bg-primary shadow-[0_0_0_4px_rgba(26,115,232,0.10)]'
                                                    : 'bg-gray-300 group-hover:bg-gray-500'
                                            }`}
                                        />
                                        <span className={`whitespace-nowrap font-medium uppercase transition-all duration-300 ${isActive ? 'translate-x-0.5' : ''}`}>
                                            {section.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </nav>

            <nav
                aria-label="Section navigation"
                className="sticky top-0 z-20 border-y border-gray-200/70 bg-white/80 backdrop-blur md:hidden"
            >
                <div className="mx-auto flex max-w-[90rem] gap-2 overflow-x-auto px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {sections.map((section) => {
                        const isActive = activeSection === section.id;

                        return (
                            <button
                                key={section.id}
                                type="button"
                                onClick={() => handleNavigate(section.id)}
                                className={`shrink-0 rounded-full border px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] transition-colors ${
                                    isActive
                                        ? 'border-primary/20 bg-primary-50 text-primary'
                                        : 'border-gray-200 bg-white text-gray-500'
                                }`}
                            >
                                {section.label}
                            </button>
                        );
                    })}
                </div>
            </nav>
        </>
    );
};

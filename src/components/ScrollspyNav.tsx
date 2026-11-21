import { useEffect, useMemo, useState, type MouseEvent } from 'react';
import { useLanguage } from '../context/LanguageContext';

type SectionLink = {
    id: string;
    label: string;
};

const sectionIds = ['profile', 'what-i-build', 'projects', 'experience', 'capability-map'] as const;
const sectionScrollOffset = 96;

export const ScrollspyNav = () => {
    const { language } = useLanguage();
    const [activeSection, setActiveSection] = useState<string>('profile');

    const sections: SectionLink[] = useMemo(() => (
        language === 'zh'
            ? [
                { id: 'profile', label: '個人介紹' },
                { id: 'what-i-build', label: '交付方法論' },
                { id: 'projects', label: '專案' },
                { id: 'experience', label: '經歷' },
                { id: 'capability-map', label: '能力地圖' },
            ]
            : [
                { id: 'profile', label: 'Profile / Hero' },
                { id: 'what-i-build', label: 'How I Ship' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
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
            const positions = elements.map((element) => {
                const rect = element.getBoundingClientRect();

                return {
                    element,
                    top: rect.top,
                    bottom: rect.bottom,
                    distance: Math.abs(rect.top - focusLine),
                };
            });
            const sectionAtFocusLine = positions.find(({ top, bottom }) => top <= focusLine && bottom >= focusLine);
            const nearestVisibleSection = sectionAtFocusLine ?? positions
                .filter(({ bottom }) => bottom >= 0)
                .sort((a, b) => a.distance - b.distance)[0] ?? positions[0];

            if (nearestVisibleSection) {
                setActiveSection((currentSection) => (
                    currentSection === nearestVisibleSection.element.id
                        ? currentSection
                        : nearestVisibleSection.element.id
                ));
            }
        };

        let ticking = false;
        let frameId = 0;

        const onScroll = () => {
            if (ticking) {
                return;
            }

            ticking = true;
            frameId = window.requestAnimationFrame(() => {
                updateActiveSection();
                ticking = false;
            });
        };

        const resizeObserver = typeof ResizeObserver === 'undefined'
            ? null
            : new ResizeObserver(onScroll);

        elements.forEach((element) => resizeObserver?.observe(element));

        updateActiveSection();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        window.addEventListener('load', onScroll);
        window.addEventListener('languagechange', onScroll);

        return () => {
            window.cancelAnimationFrame(frameId);
            resizeObserver?.disconnect();
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            window.removeEventListener('load', onScroll);
            window.removeEventListener('languagechange', onScroll);
        };
    }, [sections]);

    useEffect(() => {
        const links = Array.from(document.querySelectorAll<HTMLElement>('[data-scrollspy-link]'));

        links.forEach((link) => {
            const isActive = link.dataset.scrollspyLink === activeSection;
            link.dataset.scrollspyActive = String(isActive);
            if (isActive) {
                link.setAttribute('aria-current', 'location');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }, [activeSection]);

    const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        const target = document.getElementById(sectionId);

        if (!target) {
            return;
        }

        event.preventDefault();
        setActiveSection(sectionId);
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - sectionScrollOffset;

        window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: reducedMotion ? 'auto' : 'smooth',
        });
    };

    return (
        <>
            <nav
                aria-label="Section navigation"
                className="pointer-events-none fixed inset-y-0 right-3 z-30 hidden xl:flex xl:items-center min-[1760px]:right-6"
            >
                <div className="pointer-events-auto">
                    <div className="group/nav rounded-full border border-gray-200/80 bg-white/75 px-2.5 py-3.5 shadow-[0_14px_36px_rgba(15,23,42,0.08)] backdrop-blur-md transition-all duration-300 hover:rounded-[24px] hover:bg-white/95 hover:px-4 focus-within:rounded-[24px] focus-within:bg-white/95 focus-within:px-4 min-[1760px]:rounded-[28px] min-[1760px]:px-4 min-[1760px]:py-4">
                        <div className="relative flex flex-col gap-3 before:absolute before:bottom-3 before:left-[0.35rem] before:top-3 before:w-px before:bg-gradient-to-b before:from-gray-200 before:via-gray-300 before:to-gray-200">
                            {sections.map((section) => {
                                return (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        onClick={(event) => handleNavigate(event, section.id)}
                                        data-scrollspy-link={section.id}
                                        data-scrollspy-active={section.id === 'profile' ? 'true' : undefined}
                                        aria-label={section.label}
                                        className="scrollspy-link group relative flex min-h-11 items-center gap-0 pl-0 text-xs tracking-[0.18em] text-gray-400 transition-all duration-300 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 data-[scrollspy-active=true]:text-gray-900"
                                    >
                                        <span
                                            className="scrollspy-dot relative z-10 h-3 w-3 shrink-0 rounded-full border border-white bg-gray-300 transition-all duration-300 group-hover:bg-gray-500 data-[scrollspy-active=true]:scale-110 data-[scrollspy-active=true]:bg-primary data-[scrollspy-active=true]:shadow-[0_0_0_4px_rgba(26,115,232,0.10)]"
                                        />
                                        <span className="max-w-0 overflow-hidden whitespace-nowrap font-medium uppercase opacity-0 transition-all duration-300 group-hover/nav:ml-2.5 group-hover/nav:max-w-[160px] group-hover/nav:opacity-100 group-focus-within/nav:ml-2.5 group-focus-within/nav:max-w-[160px] group-focus-within/nav:opacity-100 min-[1760px]:ml-2.5 min-[1760px]:max-w-[160px] min-[1760px]:opacity-100 data-[scrollspy-active=true]:translate-x-0.5">
                                            {section.label}
                                        </span>
                                    </a>
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
                        return (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                onClick={(event) => handleNavigate(event, section.id)}
                                data-scrollspy-link={section.id}
                                data-scrollspy-active={section.id === 'profile' ? 'true' : undefined}
                                className="scrollspy-link min-h-11 shrink-0 rounded-full border border-gray-200 bg-white px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-gray-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 data-[scrollspy-active=true]:border-primary/20 data-[scrollspy-active=true]:bg-primary-50 data-[scrollspy-active=true]:text-primary"
                            >
                                {section.label}
                            </a>
                        );
                    })}
                </div>
            </nav>
        </>
    );
};

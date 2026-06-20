import type { MouseEvent } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const SiteHeader = () => {
    const { language, setLanguage } = useLanguage();
    const isZh = language === 'zh';

    const links = [
        { href: '#notes', label: isZh ? '想法' : 'Notes' },
        { href: '#work', label: isZh ? '作品' : 'Work' },
        { href: '#about', label: isZh ? '關於' : 'About' },
    ];

    const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        event.preventDefault();
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-6">
            <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/80 bg-white/75 px-4 py-2.5 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl md:px-5">
                <a href="#home" onClick={(event) => handleNavigate(event, 'home')} className="font-display text-base font-semibold tracking-tight text-gray-950 md:text-lg">
                    Bruce Cheng<span className="text-primary">.</span>
                </a>

                <div className="flex items-center gap-1 md:gap-3">
                    <div className="hidden items-center gap-1 sm:flex">
                        {links.map((link) => (
                            <a key={link.href} href={link.href} onClick={(event) => handleNavigate(event, link.href.slice(1))} className="rounded-full px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900">
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <span className="mx-1 hidden h-5 w-px bg-gray-200 sm:block" />
                    <div className="flex rounded-full bg-gray-100 p-0.5 text-xs font-semibold">
                        <button type="button" onClick={() => setLanguage('en')} className={`rounded-full px-2.5 py-1.5 transition ${language === 'en' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400'}`}>EN</button>
                        <button type="button" onClick={() => setLanguage('zh')} className={`rounded-full px-2.5 py-1.5 transition ${language === 'zh' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400'}`}>中</button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

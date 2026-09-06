import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Config } from '../data/types';
import { configEn } from '../data/config.en';
import { configZh } from '../data/config.zh';

type Language = 'en' | 'zh';

interface LanguageContextType {
    language: Language;
    config: Config;
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

interface LanguageProviderProps {
    children: ReactNode;
}

const getInitialLanguage = (): Language => {
    if (typeof window === 'undefined') {
        return 'en';
    }

    const savedLang = window.localStorage.getItem('language');
    return savedLang === 'zh' ? 'zh' : 'en';
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(getInitialLanguage);

    useEffect(() => {
        const loadLang = () => {
            const savedLang = localStorage.getItem('language') as Language;
            if (savedLang === 'en' || savedLang === 'zh') {
                setLanguageState(savedLang);
            }
        };

        // Load persisted language preference initially
        loadLang();

        // Listen for changes from outside React (e.g. Navbar)
        window.addEventListener('storage', loadLang);
        window.addEventListener('languagechange', loadLang);
        return () => {
            window.removeEventListener('storage', loadLang);
            window.removeEventListener('languagechange', loadLang);
        };
    }, []);

    const config = language === 'zh' ? configZh : configEn;

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'zh' : 'en');
    };

    return (
        <LanguageContext.Provider value={{ language, config, toggleLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

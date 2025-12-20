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

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('en');

    useEffect(() => {
        // Load persisted language preference
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang === 'en' || savedLang === 'zh') {
            setLanguageState(savedLang);
        } else {
            // Optional: Detect browser language
            const browserLang = navigator.language.startsWith('zh') ? 'zh' : 'en';
            setLanguageState(browserLang);
        }
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

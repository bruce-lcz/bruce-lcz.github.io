import { CompanyMeta } from './types';

export const PERSONAL_INFO = {
    name: "Bruce Cheng", // Default/English name
    nameZh: "鄭力誠 (Bruce Cheng)", // Chinese specific name
    email: "bruce.zheng0814@gmail.com",
    avatar: "/assets/avatar.jpg",
    taglineEn: "Driving industrial innovation through AI architecture and smart manufacturing leadership.",
    taglineZh: "透過 AI 架構設計與智慧製造領導力，推動產業創新。",
};

export const SOCIAL_LINKS = {
    github: "https://github.com/bruce-lcz",
    linkedin: "https://www.linkedin.com/in/力誠-鄭-036b721b9",
    email: `mailto:${PERSONAL_INFO.email}`,
};

export const COMPANIES: Record<string, CompanyMeta> = {
    pixart: {
        logo: "/logos/pixart.jfif",
        url: "https://www.pixart.com",
        // Description and Industry are usually language specific, so we keep them in config.*.ts
    },
    auo: {
        logo: "/logos/auo.png",
        url: "https://www.auo.com",
    },
    sinica: {
        logo: "/logos/sinica.png",
        // No URL provided in original
    },
    yuntech: {
        logo: "/logos/yuntech.png",
    },
};

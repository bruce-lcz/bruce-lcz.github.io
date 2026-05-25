import { CompanyMeta } from './types';

export const PERSONAL_INFO = {
    name: 'Bruce Cheng',
    nameZh: 'Bruce Cheng',
    email: 'bruce.zheng0814@gmail.com',
    avatar: '/assets/avatar.png',
    taglineEn: 'Turning AI capabilities into practical workflows.',
    taglineZh: '把 AI 變成可用流程',
};

export const SOCIAL_LINKS = {
    github: 'https://github.com/bruce-lcz',
    linkedin: 'https://www.linkedin.com/in/bruce-lcz',
    email: `${PERSONAL_INFO.email}`,
};

export const COMPANIES: Record<string, CompanyMeta> = {
    pixart: {
        logo: '/logos/pixart.jfif',
        url: 'https://www.pixart.com',
    },
    auo: {
        logo: '/logos/auo.png',
        url: 'https://www.auo.com',
    },
    sinica: {
        logo: '/logos/sinica.png',
    },
    yuntech: {
        logo: '/logos/yuntech.png',
    },
};

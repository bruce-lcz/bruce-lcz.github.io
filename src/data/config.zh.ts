import { Config } from './types';
import { PERSONAL_INFO, SOCIAL_LINKS, COMPANIES } from './common';
import { UNIFIED_PROJECTS } from './projects';

export const configZh: Config = {
    identity: {
        name: PERSONAL_INFO.nameZh,
        role: 'AI Application Engineer / AI Solution Builder',
        tagline: '設計並實作企業 AI 應用、內部工具與自動化流程。',
        about: [
            '依資料敏感度、準確性、速度與維護成本，選擇本地模型、OCR、ASR、RAG、Agent 或 LLM API。',
            '工作範圍包含需求拆解、系統設計、開發部署與使用者導入。',
        ],
        email: PERSONAL_INFO.email,
        avatar: PERSONAL_INFO.avatar,
    },
    links: {
        github: SOCIAL_LINKS.github,
        linkedin: SOCIAL_LINKS.linkedin,
        email: SOCIAL_LINKS.email,
    },
    experience: [
        {
            id: 'pixart',
            type: 'current',
            company: 'PixArt Imaging Inc.',
            companyMeta: {
                ...COMPANIES.pixart,
                description: '全球 CMOS 影像感測與相關 IC 設計公司。',
                industry: '半導體 / IC 設計',
            },
            role: '資訊工程師（Generative AI / LLM Projects）',
            period: '2025/08 - 至今',
            description: '負責法務、研發與內部知識場景的生成式 AI 應用，從需求分析到系統部署與導入。',
            techStack: ['Python', 'FastAPI', 'vLLM', 'Workflow Design', 'Internal Productization'],
            achievements: [
                '落地法律文件比對與專利翻譯流程，支援敏感內部文件處理。',
                '建立會議處理流程，將內部音檔轉成逐字稿、摘要與會議紀錄。',
                '設計內部 GenAI 工作區，整合模型服務、多模態分析與工程輔助工具。',
            ],
            relatedProjectIds: ['pixart-genai-hub', 'legal-contract-comparison', 'patent-translation-service', 'auto-minutes-system'],
        },
        {
            id: 'auo',
            type: 'past',
            company: '友達光電 - 先進製造中心',
            companyMeta: {
                ...COMPANIES.auo,
                description: '具備複雜製造與營運場景的全球顯示與智慧製造企業。',
                industry: '製造 / 顯示科技',
            },
            role: 'AI Engineer / Project Leader',
            period: '2021/08 - 2025/08',
            description: '開發製造現場使用的 AI 系統，涵蓋決策支援、製程優化與預防保養。',
            techStack: ['Python', 'SQL', 'Databricks', 'Streamlit', 'FastAPI', 'Agent Workflows'],
            achievements: [
                '把跨廠差異轉成工程團隊可採取的可解釋優化建議。',
                '將製造知識助理由檢索工具擴充為結合文件、SQL 與製程知識的決策支援系統。',
                '建立預防保養流程，讓預測訊號能支援排程與維護決策。',
            ],
            relatedProjectIds: ['auo-assistant', 'auo-yield', 'auo-pm'],
        },
        {
            id: 'academia-sinica',
            type: 'past',
            company: '中央研究院 - GIS 中心',
            companyMeta: {
                ...COMPANIES.sinica,
                description: '台灣重要的學術研究機構。',
                industry: '學術研究',
            },
            role: 'Research Intern',
            period: '2019/02 - 2019/07',
            description: '參與地址資料正規化與 Web 驗證流程設計，改善混亂資料的結構化品質。',
            techStack: ['Python', 'Django', 'PostgreSQL', 'Data Quality'],
            achievements: [
                '建立地址正規化流程與支援資料結構，處理異質資料集中的格式混亂問題。',
                '獲得 TGIS 2019 最佳學生論文獎。',
            ],
            relatedProjectIds: ['address-normalization'],
        },
    ],
    projects: UNIFIED_PROJECTS.map((project) => ({
        id: project.id,
        category: project.category,
        visualType: project.visualType,
        period: project.period,
        companyId: project.companyId,
        heroBadges: project.heroBadges,
        heroImage: project.heroImage,
        techStack: project.techStack,
        media: project.media,
        link: project.link,
        ...project.translations.zh,
    })),
    education: [
        {
            school: '國立雲林科技大學',
            degree: '碩士',
            field: '工業工程與管理',
            period: '2019 - 2021',
            thesis: '基於R-tree與SPACE-MDL-LSTM提升大區域人流預測之效率',
            logo: COMPANIES.yuntech.logo,
        },
        {
            school: '國立雲林科技大學',
            degree: '學士',
            field: '工業工程與管理',
            period: '2015 - 2019',
            thesis: '最佳化彈性生產流程之機台派工',
            logo: COMPANIES.yuntech.logo,
        },
    ],
    awards: [
        {
            year: '2025',
            title: '智慧製造三級菁英人才',
            organization: '友達光電',
        },
        {
            year: '2020',
            title: '最佳學生論文獎',
            organization: '台灣地理資訊學會年會（TGIS）',
        },
        {
            year: '2019',
            title: '最佳學生論文獎',
            organization: '台灣地理資訊學會年會（TGIS）',
        },
    ],
    skills: [
        {
            category: '需求分析',
            description: '將模糊需求整理成明確的產品範圍與實作流程。',
            items: [
                '模糊需求拆解',
                '操作流程設計',
                '使用情境分析',
                '限制條件與方案規劃',
            ],
        },
        {
            category: 'AI 系統整合',
            description: '根據任務需要，組合模型能力、工具與驗證機制。',
            items: [
                'LLM API 與內部模型整合',
                'RAG、Agent 與工具呼叫',
                'OCR、ASR 與文件解析',
                '驗證與備援機制設計',
            ],
        },
        {
            category: '產品實作',
            description: '將 AI 能力整合成可部署、可維護的內部產品。',
            items: [
                '後端流程編排',
                '內部工具體驗設計',
                '部署與環境封裝',
                '資料與檔案流程自動化',
            ],
        },
        {
            category: '應用領域',
            description: '實際參與過的企業應用與產品場景。',
            items: [
                '法務與智慧財產流程',
                '會議轉錄與摘要',
                '製造決策支援',
                '工程效率工具',
            ],
        },
    ],
};

import { Config } from './types';
import { PERSONAL_INFO, SOCIAL_LINKS, COMPANIES } from './common';
import { UNIFIED_PROJECTS } from './projects';

export const configZh: Config = {
    identity: {
        name: PERSONAL_INFO.nameZh,
        role: 'AI Application Engineer / AI Solution Builder',
        tagline: '把模型、工具、資料流程與使用者介面接起來，讓 AI workflow 能實際支援法務、研發、製造與知識工作。',
        about: [
            '工具會依任務而變。On-prem、OCR、ASR、RAG、Agent 或 LLM API，都是為了解決具體問題而選用。',
            '我關注的是需求如何被拆解、工具如何被組合，以及最後能不能形成團隊願意採用的 workflow。',
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
            description: '我在法務、研發與內部知識工作場景中，把高限制的 AI 需求拆成可以落地的內部 workflow 與產品。',
            techStack: ['Python', 'FastAPI', 'vLLM', 'Workflow Design', 'Internal Productization'],
            achievements: [
                '落地法律文件比對與專利翻譯流程，支援敏感內部文件處理。',
                '建立會議智慧流程，把內部音檔轉成可用的逐字稿、摘要與會議紀錄。',
                '設計內部 GenAI workspace，讓模型存取、多模態分析與工程支援更容易被團隊採用。',
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
            description: '我建立面向製造現場的 AI 系統，重點放在決策支援、製程優化與營運 workflow，而不是獨立的模型實驗。',
            techStack: ['Python', 'SQL', 'Databricks', 'Streamlit', 'FastAPI', 'Agent Workflows'],
            achievements: [
                '把跨廠差異轉成工程團隊可採取的可解釋優化建議。',
                '把製造知識助理從檢索工具演進成具領域脈絡的 decision-support workflow。',
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
            thesis: '基於 R-tree 與 SPACE-MDL-LSTM 之大範圍人流預測效率優化',
            logo: COMPANIES.yuntech.logo,
        },
        {
            school: '國立雲林科技大學',
            degree: '學士',
            field: '工業工程與管理',
            period: '2015 - 2019',
            thesis: '柔性生產流程中的機台派工優化',
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
            category: 'Requirement Framing',
            description: '把模糊需求拆成可以執行的產品與 workflow 設計。',
            items: [
                'Ambiguous need breakdown',
                'Workflow design',
                'User scenario mapping',
                'Constraint-driven solution planning',
            ],
        },
        {
            category: 'AI System Composition',
            description: '根據任務需要，組合模型能力、工具與驗證機制。',
            items: [
                'LLM API / internal model integration',
                'RAG / agent / tool calling',
                'OCR / ASR / document parsing when needed',
                'Validation and fallback design',
            ],
        },
        {
            category: 'Product Implementation',
            description: '把 AI workflow 包裝成團隊真的能用的產品。',
            items: [
                'FastAPI / Python backend',
                'React / Streamlit internal tools',
                'Docker deployment',
                'Data pipeline and file processing',
            ],
        },
        {
            category: 'Domain Application',
            description: '我實際把 workflow 設計與 AI 產品化用在哪些場景。',
            items: [
                'Legal & IP workflows',
                'Meeting intelligence',
                'Manufacturing decision support',
                'Engineering productivity tools',
            ],
        },
    ],
};

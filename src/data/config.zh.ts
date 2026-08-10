import { Config } from './types';
import { PERSONAL_INFO, SOCIAL_LINKS, COMPANIES } from './common';
import { UNIFIED_PROJECTS } from './projects';

export const configZh: Config = {
    identity: {
        name: PERSONAL_INFO.nameZh,
        role: 'AI Application Engineer｜企業 GenAI 與 Workflow 產品化',
        tagline: '在資安與流程限制下，將 AI 做成能上線、能驗證、能被團隊持續使用的內部產品。',
        about: [
            '我會依任務與實際限制選擇工具：On-prem model、OCR、ASR、RAG、Agent 與 LLM API，都只在能真正解決 workflow 問題時才使用。',
            '我的工作橫跨需求釐清、系統組合、驗證機制與內部產品化，重點是讓團隊能信任並在真實工作中持續使用成果。',
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
                description: '專注於 CMOS image sensor 與相關 IC 設計的全球無晶圓半導體公司。',
                industry: 'Semiconductor / IC Design',
            },
            role: '資訊工程師（Generative AI / LLM Projects）',
            period: '2025/08 - 至今',
            description: '我在法務、研發與內部知識應用之間工作，將限制條件高、脈絡複雜的 AI 需求，轉化為團隊能實際採用的內部 workflow 與產品。',
            techStack: ['Python', 'FastAPI', 'vLLM', 'Workflow Design', 'Internal Productization'],
            achievements: [
                '在嚴格資料安全限制下，交付法務文件比對、專利翻譯、會議分析與工程檔案處理等可重複使用的 on-prem AI workflow。',
                '設計可供人工覆核的文件智慧流程，結合 OCR、LLM 重整、一致性檢查與 diff review，協助處理敏感法務文件。',
                '設計內部 GenAI workspace，降低模型存取、多模態分析與工程支援工具的採用門檻。',
            ],
            relatedProjectIds: ['pixart-genai-hub', 'legal-contract-comparison', 'patent-translation-service', 'auto-minutes-system'],
        },
        {
            id: 'auo',
            type: 'past',
            company: '友達光電－先進製造中心',
            companyMeta: {
                ...COMPANIES.auo,
                description: '具備複雜營運流程的全球顯示科技與智慧製造公司。',
                industry: 'Manufacturing / Display Technology',
            },
            role: 'AI Engineer / Project Leader',
            period: '2021/08 - 2025/08',
            description: '建置面向製造現場的 AI 系統，支援決策、製程優化與營運流程；重點不在孤立的模型實驗，而在讓成果能進入實際工作。',
            techStack: ['Python', 'SQL', 'Databricks', 'Streamlit', 'FastAPI', 'Agent Workflows'],
            achievements: [
                '透過跨廠最佳化與可解釋建議，提升良率 1.43%、降低缺陷 12.62%，每月節省約 300 工時。',
                '把製造助理從單純檢索，發展為可使用 SQL／API 工具與製程知識推理的 decision-support workflow。',
                '以 LSTM 預測與保養規劃 workflow 降低缺陷預測 RMSE 20%，每月節省約 90 工時。',
            ],
            relatedProjectIds: ['auo-assistant', 'auo-yield', 'auo-pm'],
        },
        {
            id: 'academia-sinica',
            type: 'past',
            company: '中央研究院－GIS 中心',
            companyMeta: {
                ...COMPANIES.sinica,
                description: '臺灣重要的國家級學術研究機構。',
                industry: 'Academic Research',
            },
            role: '研究實習生',
            period: '2019/02 - 2019/07',
            description: '處理格式混雜的地址資料，建立資料正規化與 Web 驗證 workflow。',
            techStack: ['Python', 'Django', 'PostgreSQL', 'Data Quality'],
            achievements: [
                '建立地址正規化 workflow 與支援異質資料集的資料結構。',
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
            thesis: '基於 R-tree 與 SPACE-MDL-LSTM 之大範圍人流預測效率改善研究',
            logo: COMPANIES.yuntech.logo,
        },
        {
            school: '國立雲林科技大學',
            degree: '學士',
            field: '工業工程與管理',
            period: '2015 - 2019',
            thesis: '彈性生產流程之機台派工最佳化研究',
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
            organization: '台灣地理資訊學會年會暨學術研討會（TGIS）',
        },
        {
            year: '2019',
            title: '最佳學生論文獎',
            organization: '台灣地理資訊學會年會暨學術研討會（TGIS）',
        },
    ],
    skills: [
        {
            category: '需求釐清與方案定義',
            description: '將模糊的 AI 需求收斂為範圍明確、可執行的產品與 workflow 決策。',
            items: ['模糊需求拆解', 'Workflow 設計', '使用情境梳理', '依限制條件規劃方案'],
        },
        {
            category: 'AI 系統整合',
            description: '將模型能力、工具與驗證機制組合為可運作的系統。',
            items: ['On-prem LLM serving / 內部模型整合', 'RAG / Agent / tool calling', '依需求導入 OCR / ASR / 文件解析', '人工覆核、驗證與 fallback 設計'],
        },
        {
            category: '產品實作與交付',
            description: '將 AI workflow 打包為使用者能實際採用的產品。',
            items: ['Backend workflow orchestration', '內部工具體驗設計', '可部署的產品封裝', '資料與檔案 workflow 自動化'],
        },
        {
            category: '領域應用',
            description: '在真實工作場景中，將 workflow 設計與 AI 產品化落地。',
            items: ['法務與智慧財產 workflow', 'Meeting intelligence', '製造決策支援', '工程效率工具'],
        },
    ],
};

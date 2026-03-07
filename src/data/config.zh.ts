import { Config } from './types';
import { PERSONAL_INFO, SOCIAL_LINKS, COMPANIES } from './common';
import { UNIFIED_PROJECTS } from './projects';

export const configZh: Config = {
    identity: {
        name: PERSONAL_INFO.nameZh,
        role: "AI Application Engineer",
        tagline: "致力於將生成式 AI 模型轉化為高價值企業應用，具備從系統架構到全端開發的端對端實戰能力。",
        about: [
            "致力於將先進的 Generative AI 模型轉化為具備實用價值的企業級應用。擅長處理高資安環境的端側部署，並結合全端微服務架構，打造兼具效能與體驗的完整解決方案。"
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
            id: "pixart",
            type: 'current',
            company: "PixArt 原相科技",
            companyMeta: {
                ...COMPANIES.pixart,
                description: "專注於 CMOS 影像感測器及相關 IC 設計的全球領先無晶圓廠半導體公司。",
                industry: "半導體 / IC 設計",
            },
            role: "Information Engineer (Generative AI and LLM Projects)",
            period: "2025年8月 - 至今",
            description: "隸屬於 IT 團隊，負責建置符合 IC 設計產業高資安標準的「本地端 (On-Premise)」生成式 AI 基礎設施，賦能 Legal、Operations 與 R&D 部門。",
            techStack: ["LLM", "ASR", "AWS Bedrock", "System Architecture"],
            achievements: [
                "使用 Vision-LLM OCR 與多層次 LLM 流程，開發自動化合約比對與專利翻譯系統，在確保資安合規的前提下大幅提升法務審核效率。",
                "建構完全離線的 Auto-Minutes 系統，整合 ASR 與說話者分離技術，將長音檔處理效率提升 50%–70%。",
                "建構全離線 GenAI 協作平台，成功驅動 120B+ 超大規模模型，透過模型分級服務極大化研發效率。",
            ],
            relatedProjectIds: ["pixart-genai-hub", "legal-contract-comparison", "patent-translation-service", "auto-minutes-system"],
        },
        {
            id: "auo",
            type: 'past',
            company: "AUO 友達光電 - 先進製造中心",
            companyMeta: {
                ...COMPANIES.auo,
                description: "全球領先的顯示解決方案與智慧製造技術供應商。",
                industry: "製造 / 顯示技術",
            },
            role: "AI 工程師 / 專案負責人",
            period: "2021年8月 - 2025年8月",
            description: "帶領跨部門團隊設計 AI 架構並優化製造流程，將系統從 RAG 演進為結合 Knowledge Graph 的 Agent-based 解決方案。",
            techStack: ["Python", "SQL", "Databricks", "Streamlit", "FastAPI", "LLM Agents"],
            achievements: [
                "跨廠區良率 AI 優化：+1.43% 良率、-12.62% 缺陷、每月節省約 300 工時。",
                "智慧助理平台架構演進：從 RAG 升級為結合知識圖譜的 Multi-Agent 系統，具備複雜歸因分析能力。",
                "PHM 預防性維護系統：預測誤差（RMSE）降低 20%，每月節省 90 工時人工檢測。",
                "專案成果獲內部防禦性專利核可；獲選公司智慧製造 Level 3 精英人才。",
            ],
            relatedProjectIds: ["auo-assistant", "auo-yield", "auo-pm"],
        },
        {
            id: "academia-sinica",
            type: 'past',
            company: "中央研究院 - GIS 中心",
            companyMeta: {
                ...COMPANIES.sinica,
                description: "台灣最高學術研究機構。",
                industry: "學術研究",
            },
            role: "研究實習生",
            period: "2019年2月 - 2019年7月",
            description: "開發門牌地址資料抽樣與標準化之 Web 系統。",
            techStack: ["Web Development", "Data Normalization", "PostgreSQL"],
            achievements: [
                "開發線上地址抽樣服務系統，獲選 TGIS 最佳學生論文獎。",
                "設計標準化模組與地址屬性資料庫，解決台灣地址格式非結構化問題。",
            ],
            relatedProjectIds: ["address-normalization"],
        },
    ],
    projects: UNIFIED_PROJECTS.map(p => ({
        id: p.id,
        category: p.category,
        period: p.period,
        companyId: p.companyId,
        techStack: p.techStack,
        media: p.media,
        link: p.link,
        ...p.translations.zh,
    })),
    education: [
        {
            school: "國立雲林科技大學",
            degree: "碩士",
            field: "工業工程與管理",
            period: "2019 - 2021",
            thesis: "基於 R-tree 與 SPACE-MDL-LSTM 之大區域人流預測效率優化",
            logo: COMPANIES.yuntech.logo,
        },
        {
            school: "國立雲林科技大學",
            degree: "學士",
            field: "工業工程與管理",
            period: "2015 - 2019",
            thesis: "彈性生產流程之機台派工最佳化",
            logo: COMPANIES.yuntech.logo,
        },
    ],
    awards: [
        {
            year: "2025",
            title: "智慧製造 Level 3 精英人才 (預測式生產)",
            organization: "AUO 友達光電",
        },
        {
            year: "2020",
            title: "最佳學生論文獎",
            organization: "台灣地理資訊學會年會暨學術研討會(TGIS)",
        },
        {
            year: "2019",
            title: "最佳學生論文獎",
            organization: "台灣地理資訊學會年會暨學術研討會(TGIS)",
        },
    ],
    skills: [
        {
            category: "生成式 AI 與 LLM",
            items: [
                "On-Premise LLM 部署 (vLLM)",
                "RAG 架構與向量資料庫",
                "Multi-Agent 系統 (LangGraph)",
                "Knowledge Graph (Neo4j)",
                "ASR 與說話者分離 (Whisper)",
                "Vision-LLM 多模態 Pipeline",
                "Prompt Engineering",
            ],
        },
        {
            category: "系統與後端工程",
            items: [
                "系統架構設計",
                "Python 後端 (FastAPI / Django)",
                "REST API 與微服務",
                "Cloudflare Workers & D1",
                "AWS Bedrock",
                "Docker 容器化",
            ],
        },
        {
            category: "資料科學與機器學習",
            items: [
                "時間序列預測 (LSTM)",
                "自定義損失函數設計",
                "可解釋性 AI (XAI / LIME)",
                "基因演算法優化",
                "資料工程與 ETL (Databricks / SQL)",
            ],
        },
        {
            category: "前端與開發工具",
            items: [
                "React / TypeScript",
                "Streamlit / Gradio（內部工具）",
                "Git 版本控制",
                "CI/CD 基礎",
            ],
        },
    ],
};
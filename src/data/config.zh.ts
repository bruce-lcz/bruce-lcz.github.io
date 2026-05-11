import { Config } from './types';
import { PERSONAL_INFO, SOCIAL_LINKS, COMPANIES } from './common';
import { UNIFIED_PROJECTS } from './projects';

export const configZh: Config = {
    identity: {
        name: PERSONAL_INFO.nameZh,
        role: "AI 解決方案架構師｜GenAI Workflow Builder",
        tagline: "我擅長把模糊的工程與商業問題，拆解成可實作的 AI workflow，從問題定義一路做到團隊真的能使用的系統。",
        about: [
            "我常處理的是那些不只需要模型 demo 的 AI 題目：機密文件、內網環境、製造資料、既有流程，以及真正要被團隊採用的內部工具。我的強項是把這些限制整理成清楚的系統設計、可使用的工具，以及貼近實際工作方式的 workflow。",
            "我喜歡站在架構與實作中間，把需求拆成能落地的設計，再一路做到可運作的系統。除了 LLM、RAG、Agent 與自動化流程開發，我也曾舉辦內部工作坊、和工程團隊分享 AI 採用經驗，並回到學校與研究室進行演講和技術回饋。"
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
            description: "隸屬於 IT 團隊，為 IC 設計團隊設計 On-Prem 與 Air-Gapped 環境下的 GenAI workflow。我將法務、營運與研發的高資安需求，轉化為能融入日常工作的內部 AI 系統。",
            techStack: ["LLM", "ASR", "AWS Bedrock", "System Architecture"],
            achievements: [
                "設計本地端 Legal AI workflow，讓敏感合約審閱與機密專利翻譯不需要送到雲端 AI 服務。",
                "建構完全離線的會議智慧化 workflow，整合 ASR、說話者分離與結構化摘要，將長音檔處理效率提升 50%–70%。",
                "設計並部署面向 Air-Gapped IC 設計團隊的內部 GenAI workspace，支援 coding assistant、多模態分析與 AI 輔助工程流程。",
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
            description: "帶領跨部門 AI 專案，將製造現場的流程瓶頸、製程變異與工程知識，轉化為決策輔助 workflow 與可解釋的參數建議，讓生產團隊能實際採用。",
            techStack: ["Python", "SQL", "Databricks", "Streamlit", "FastAPI", "LLM Agents"],
            achievements: [
                "設計跨廠 AI 優化 workflow，將製造變異轉化為可解釋的參數建議：+1.43% 良率、-12.62% 缺陷、每月節省約 300 工時。",
                "主導內部製造知識助理從基礎 RAG 搜尋演進為結合 SQL 工具與知識圖譜推理的 Multi-Agent 決策輔助系統。",
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
                "Streamlit (AI Internal Tools)",
                "AI 輔助網頁開發",
                "Git 版本控制",
                "CI/CD / Linux 管理",
            ],
        },
    ],
};

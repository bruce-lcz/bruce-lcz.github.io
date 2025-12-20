import { Config } from './types';

export const configZh: Config = {
    identity: {
        name: "鄭力誠 (Bruce Cheng)",
        role: "專案負責人 / AI 工程師 / 資料科學家",
        tagline: "透過 AI 架構設計與智慧製造領導力，推動產業創新。",
        email: "bruce.zheng0814@gmail.com",
        avatar: "/assets/avatar.jpg",
    },
    links: {
        github: "https://github.com/bruce-lcz",
        linkedin: "https://www.linkedin.com/in/bruce-cheng-0814",

        email: "mailto:bruce.zheng0814@gmail.com",
    },
    experience: [
        {
            id: "pixart",
            type: 'current',
            company: "PixArt 原相科技",
            companyMeta: {
                description: "專注於 CMOS 影像感測器及相關 IC 設計的全球領先無晶圓廠半導體公司。",
                industry: "半導體 / IC 設計",
                url: "https://www.pixart.com",
                logo: "/logos/pixart.jfif"
            },
            role: "AI 工程師 / 專案負責人",
            period: "2025年9月 - 現在",
            description: "致力於下一代 AI 產品的技術策略規劃與架構基礎建設。",
            techStack: ["React", "TypeScript", "AI Agents", "System Design"],
            achievements: [
                "制定技術策略與發展藍圖。",
                "設計可擴展的系統架構模式。",
                "建立工程開發最佳實踐 (Best Practices)。"
            ],
            relatedProjectIds: []
        },
        {
            id: "auo",
            type: 'past',
            company: "AUO 友達光電 - 智慧製造",
            companyMeta: {
                description: "全球領先的顯示解決方案與智慧製造技術供應商。",
                industry: "製造 / 顯示技術",
                url: "https://www.auo.com",
                logo: "/logos/auo.png"
            },
            role: "AI 工程師 / 專案負責人",
            period: "2021年8月 - 2025年8月",
            description: "帶領跨部門團隊設計 AI 架構並優化製造流程，將系統從 RAG 演進為 Agent-based 解決方案。",
            techStack: ["Python", "SQL", "Databricks", "Streamlit", "FastAPI", "LLM Agents"],
            achievements: [
                "預防性維護系統 (PHM)：降低預測誤差 20%，每月節省 90 工時。",
                "智慧助理平台：架構升級，從 RAG 演進為結合知識圖譜 (Knowledge Graph) 的 Agent 系統。",
                "跨廠區良率優化：提升良率 1.43%，降低缺陷 12.62%，每月節省約 300 工時。",
                "產能計算優化：提升規劃準確度，每日節省 3 小時人工計算時間。",
                "獲選為智慧製造「Level 3 精英人才」；獲得一項防禦性專利。"
            ],
            relatedProjectIds: ["auo-pm", "auo-assistant", "auo-yield"]
        },
        {
            id: "academia-sinica",
            type: 'past',
            company: "中央研究院 - GIS 中心",
            companyMeta: {
                description: "台灣最高學術研究機構。",
                industry: "學術研究",
                logo: "/logos/sinica.png"
            },
            role: "研究實習生",
            period: "2019年2月 - 2019年7月",
            description: "開發門牌地址資料抽樣與標準化之 Web 系統。",
            techStack: ["Web Development", "Data Normalization"],
            achievements: [
                "開發線上地址抽樣服務系統。",
                "設計標準化模組與地址屬性資料庫。"
            ],
            relatedProjectIds: ["address-normalization"]
        }
    ],
    projects: [
        {
            id: "auo-pm",
            title: "預防性維護系統 (PHM)",
            category: "work",
            role: "AI 工程師 / 專案負責人",
            period: "2022 - 2024",
            companyId: "auo",
            shortDescription: "透過先進預測模型，降低 20% 預測誤差並每月節省 90 工時。",
            description: `
**背景:**
工廠設備停機成本高昂。傳統的維護排程效率不佳，導致不必要的維護或意外的設備故障。

**解決方案:**
利用機器學習開發預測性維護系統，預測設備故障。
- 在 Databricks 上建置資料管線 (Data Pipelines)。
- 使用 XGBoost/LightGBM 建立預測模型。
- 使用 FastAPI 部署推論 API。

**成效:**
- 與舊系統相比，預測誤差降低 **20%**。
- 每月節省 **90 工時** 的人工檢測與停機分析時間。
      `,
            keyFeatures: [
                "即時設備健康監控",
                "自動化警報生成",
                "根本原因分析 (Root Cause Analysis) 儀表板"
            ],
            challenges: [
                "處理大量高頻感測器數據。",
                "解決故障資料類別不平衡 (Class Imbalance) 問題。"
            ],
            techStack: ["Python", "Databricks", "XGBoost", "FastAPI"]
        },
        {
            id: "auo-assistant",
            title: "智慧助理平台 (RAG -> Agent)",
            category: "work",
            role: "AI 架構師",
            period: "2023 - 2025",
            companyId: "auo",
            shortDescription: "從文件檢索系統 (RAG) 演進為結合知識圖譜的自主 Agent 解決方案。",
            description: `
**演進:**
最初為協助工程師查找技術文件的 RAG 系統，後演進為能主動查詢資料庫並執行診斷任務的 Agentic 工作流。

**架構:**
- **RAG 階段:** 向量資料庫 (Milvus) + LangChain。
- **Agent 階段:** 多代理系統 (LangGraph)，具備工具使用能力 (SQL 查詢、API 呼叫)。
- **知識圖譜:** 整合 Neo4j 以映射設備、製程與故障模式之間的關聯。

**關鍵成就:**
- 大幅縮短工程師的資訊檢索時間。
- 能夠回答複雜問題，如「為什麼 Cell A 的良率下降？」。
      `,
            keyFeatures: [
                "多輪對話能力",
                "整合內部製造資料庫",
                "透過知識圖譜約束減少幻覺 (Hallucination)"
            ],
            challenges: [
                "確保技術工程問答的準確性。",
                "優化複雜 Agent 鏈的延遲 (Latency)。"
            ],
            techStack: ["LLM", "RAG", "LangChain/LangGraph", "Neo4j", "Milvus"]
        },
        {
            id: "auo-yield",
            title: "跨廠區良率 AI 優化",
            category: "work",
            role: "資料科學家",
            period: "2021 - 2023",
            companyId: "auo",
            shortDescription: "跨多個廠區提升良率 1.43% 並減少 12.62% 缺陷。",
            description: `
**問題:**
生產相似產品的不同廠區之間存在無法解釋的良率差異。

**方法:**
- 標準化跨廠區的資料格式。
- 應用統計分析與 ML 識別「黃金路徑 (Golden Path)」參數。
- 實施自動化參數設定推薦。

**結果:**
- 良率提升: **+1.43%**
- 缺陷減少: **-12.62%**
- 營運節省: **每月約 300 工時**
      `,
            keyFeatures: [
                "跨站點資料標準化",
                "自動化參數推薦引擎"
            ],
            challenges: [
                "跨廠區感測器校準不一致。",
                "改變既定製程參數的文化阻力。"
            ],
            techStack: ["Python", "SQL", "Scikit-learn", "Tableau"]
        },
        {
            id: "address-normalization",
            title: "地址資料標準化系統",
            category: "research",
            role: "研究實習生",
            period: "2019",
            companyId: "academia-sinica",
            shortDescription: "將非結構化地址文字轉換為結構化格式的 Web 系統。",
            description: `
**專案:**
為 GIS 中心開發一套系統，用於解析與標準化來自各來源的混亂地址資料。

**角色:**
- 設計地址屬性資料庫架構。
- 建立 Web 介面供研究人員上傳與清理資料。
      `,
            keyFeatures: [
                "地址元件的模糊字串比對",
                "互動式清理介面"
            ],
            challenges: [
                "處理台灣地址格式的歧義性與非標準化問題。"
            ],
            techStack: ["Web Development", "Python", "PostgreSQL"]
        }
    ],
    education: [
        {
            school: "國立雲林科技大學",
            degree: "碩士",
            field: "工業工程與管理",
            period: "2019 - 2021",
            thesis: "基於 R-tree 與 SPACE-MDL-LSTM 之大區域人流預測效率優化",
            logo: "/logos/yuntech.png"
        },
        {
            school: "國立雲林科技大學",
            degree: "學士",
            field: "工業工程與管理",
            period: "2015 - 2019",
            thesis: "彈性生產流程之機台派工最佳化",
            logo: "/logos/yuntech.png"
        }
    ],
    awards: [
        {
            year: "2020",
            title: "最佳學生論文獎",
            organization: "TGIS 研討會"
        },
        {
            year: "2019",
            title: "最佳學生論文獎",
            organization: "TGIS 研討會"
        }
    ],
    skills: [
        "Project Leadership", "Architecture Design", "Python & SQL",
        "LLM Applications", "Machine Learning", "Data Engineering",
        "Databricks", "Streamlit", "FastAPI", "Django"
    ]
};

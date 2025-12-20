import { Config } from './types';
import { PERSONAL_INFO, SOCIAL_LINKS, COMPANIES } from './common';

export const configZh: Config = {
    identity: {
        name: PERSONAL_INFO.nameZh,
        role: "Information Engineer (Generative AI & LLM)",
        tagline: "專注於 IC 設計產業的本地端 (On-Premise) 生成式 AI 系統建置，具備從架構設計到全端開發的端對端實戰能力。",
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
                "L&IP (Legal & IP) 支援：建置本地端 RAG 系統，在確保專利資料不外流的前提下，實現專利文件的自動化翻譯與檢索。",
                "運籌與管理效率優化：開發整合 ASR 與 LLM 的會議紀錄自動化系統，提供精準的逐字稿與重點摘要。",
                "R&D 研發賦能：導入本地端 Coding Copilot 服務，在保護程式碼 IP 的同時提升開發效率。",
                "未來規劃：推進 Verilog 邏輯優化 Copilot 與企業級 LLM 平台建置。",
            ],
            relatedProjectIds: ["pixart-legal-rag", "pixart-meeting-assistant", "pixart-coding-copilot"],
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
                "跨廠區良率優化：透過 AI 參數推薦，提升良率 1.43%，降低缺陷 12.62%，每月節省約 300 工時。",
                "智慧助理平台：架構升級，從 RAG 演進為結合知識圖譜 (Knowledge Graph) 的 Agent 系統，解決複雜歸因問題。",
                "預防性維護系統 (PHM)：降低缺陷預測誤差 (RMSE) 20%，每月節省 90 小時人力檢測工時。",
                "專業認可：專案成果獲內部「防禦性專利」核可；獲選為公司智慧製造「Level 3 精英人才」。",
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
    projects: [
        {
            id: "pixart-legal-rag",
            title: "Legal & IP 本地端 RAG 系統",
            category: "PixArt",
            role: "AI 架構師 / 全端開發",
            period: "2025 - Present",
            companyId: "pixart",
            shortDescription: "專為 IC 設計產業打造的高資安本地端專利檢索與翻譯系統。",
            description: `
**背景:**
IC 設計產業的專利文件與 IP 資料極為敏感，無法直接使用公開的雲端 LLM 服務進行處理。

**解決方案:**
- **On-Premise 部署:** 架設本地端推論服務 (使用 vLLM)，確保資料不出內網。
- **RAG 架構:** 整合向量資料庫 (Vector DB) 與本地模型，針對專利文件進行精準檢索與技術術語翻譯。
- **全端開發:** 提供直觀的 Web 介面 (Streamlit/FastAPI) 供法務人員使用。

**成效:**
- 實現了安全的專利文件自動化翻譯，大幅縮短專利分析時間。
- 確保所有敏感 IP 資料均在公司防火牆內處理，符合嚴格的資安規範。
            `,
            keyFeatures: [
                "vLLM 高效能推論引擎",
                "高資安規格資料處理流程",
                "本地端向量檢索整合",
            ],
            challenges: [
                "優化本地端模型在特定法律/技術領域的生成品質。",
                "硬體資源限制下的 vLLM 記憶體管理與效能調校。",
            ],
            techStack: ["vLLM", "Vector DB", "Python", "Docker", "RAG"],
        },
        {
            id: "pixart-meeting-assistant",
            title: "企業級 ASR 會議紀錄系統",
            category: "PixArt",
            role: "AI 工程師",
            period: "2025 - Present",
            companyId: "pixart",
            shortDescription: "整合語音識別與 LLM 的自動化會議記錄與摘要生成工具。",
            description: `
**背景:**
跨部門會議頻繁，人工整理會議紀錄耗時且易有遺漏。

**解決方案:**
- **語音處理:** 應用 ASR (Automatic Speech Recognition) 與 Voice Segmentation 技術進行精準的語音轉文字。
- **智慧摘要:** 串接 LLM 針對逐字稿進行重點提取、待辦事項 (Action Items) 整理。

**成效:**
- 自動化生成會議逐字稿與結構化摘要，提升運籌管理效率。
            `,
            keyFeatures: [
                "多語者語音分離 (Speaker Diarization)",
                "自動生成 Action Items",
                "會議重點摘要",
            ],
            challenges: [
                "處理多人同時發言與環境噪音干擾。",
                "半導體專業術語的語音識別準確度校正。",
            ],
            techStack: ["ASR (Whisper)", "vLLM", "Voice Segmentation", "Python"],
        },
        {
            id: "pixart-coding-copilot",
            title: "R&D 本地端 Coding Copilot",
            category: "PixArt",
            role: "AI 架構師",
            period: "2025 - Present",
            companyId: "pixart",
            shortDescription: "導入本地端程式碼輔助服務，保護研發 IP。",
            description: `
**背景:**
研發團隊需要 AI 輔助 coding，但商業版 Copilot 可能有程式碼外流疑慮。

**解決方案:**
- **本地化部署:** 架設企業內部專用的 Code LLM 推論服務 (基於 vLLM)。
- **整合應用:** 透過 API 整合至開發環境，提供安全的代碼補全與優化建議。
- **未來規劃:** 擴充至 Verilog 語言支援，輔助晶片設計。

**成效:**
- 在完全阻斷外網連線的環境下，提供 R&D 團隊 AI 輔助開發能力。
            `,
            keyFeatures: [
                "Code LLM 本地部署",
                "vLLM 推論服務",
                "Verilog 語法支援 (規劃中)",
            ],
            challenges: [
                "本地端推論服務的延遲優化 (Latency Optimization)。",
                "硬體描述語言 (HDL) 的模型微調。",
            ],
            techStack: ["vLLM", "Code LLM", "Python", "Docker"],
        },
        {
            id: "auo-assistant",
            title: "智慧助理平台 (RAG -> Agent)",
            category: "AUO",
            role: "AI 架構師",
            period: "2023 - 2025",
            companyId: "auo",
            shortDescription: "從文件檢索 (RAG) 演進為結合知識圖譜的自主 Agent 系統。",
            description: `
**演進:**
最初為協助工程師查找技術文件的 RAG 系統，後演進為能主動查詢資料庫並執行診斷任務的 Agentic 工作流。

**架構:**
- **RAG 階段:** 向量資料庫 + LangChain。
- **Agent 階段:** 多代理系統 (LangGraph)，具備工具使用能力 (SQL 查詢、API 呼叫)。
- **知識圖譜:** 整合 Neo4j 以映射設備、製程與專有名詞之間的關聯。

**關鍵成就:**
- 從單純問答進化到能回答「為什麼良率下降？」這類複雜歸因問題。
- 建立 Table Description Generator 自動化知識整備流程。
            `,
            keyFeatures: [
                "Multi-Agent 多代理架構",
                "Knowledge Graph 知識圖譜整合",
                "SQL Agent 自動化數據查詢",
            ],
            challenges: [
                "確保 Text-to-SQL 在複雜製造數據庫的準確性。",
                "解決 Agent 執行路徑的幻覺與無限迴圈問題。",
            ],
            techStack: ["LLM", "LangGraph", "Neo4j", "RAG", "Python"],
        },
        {
            id: "auo-yield",
            title: "跨廠區良率 AI 優化 (Golden Path)",
            category: "AUO",
            role: "資料科學家",
            period: "2021 - 2023",
            companyId: "auo",
            shortDescription: "跨多個廠區提升良率 1.43% 並減少 12.62% 缺陷。",
            description: `
**問題:**
生產相似產品的不同廠區之間存在無法解釋的良率差異。

**方法:**
- **資料標準化:** 統一跨廠區的感測器數據格式與定義。
- **Golden Path 演算法:** 識別最佳機台組合路徑與參數設定。
- **可解釋性 AI (XAI):** 提供工程師調整參數的依據，而非黑箱預測。

**結果:**
- 良率提升: **+1.43%**
- 缺陷減少: **-12.62%**
- 營運節省: **每月約 300 工時**
            `,
            keyFeatures: [
                "最佳路徑推薦演算法",
                "跨站點資料標準化 (ETL)",
                "LIME 模型可解釋性分析",
            ],
            challenges: [
                "跨廠區設備能力不一致的標準化難題。",
                "改變既定製程參數的現場溝通與驗證。",
            ],
            techStack: ["Python", "SQL", "Scikit-learn", "LIME", "Genetic Algorithm"],
        },
        {
            id: "auo-pm",
            title: "預防性維護系統 (PM)",
            category: "AUO",
            role: "AI 工程師 / 專案負責人",
            period: "2022 - 2024",
            companyId: "auo",
            shortDescription: "導入自定義 Loss Function，降低 20% 缺陷預測誤差。",
            description: `
**背景:**
傳統維護依賴固定週期，無法應對突發性設備異常。

**解決方案:**
- 開發基於 LSTM 的時間序列預測模型。
- **創新:** 設計 Trend Consistency Loss Function (趨勢一致性損失函數)，專注於捕捉異常趨勢而非單點誤差。
- 整合排程系統，自動建議最佳維護時機。

**成效:**
- 預測誤差 (RMSE) 降低 **20%**。
- 每月節省 **90 工時** 的人工檢測時間。
            `,
            keyFeatures: [
                "Custom Loss Function 設計",
                "LSTM 時間序列預測",
                "維護排程最佳化",
            ],
            challenges: [
                "處理極度不平衡的故障數據 (Class Imbalance)。",
                "平衡產能需求與停機維護的成本衝突。",
            ],
            techStack: ["Python", "TensorFlow/PyTorch", "LSTM", "FastAPI"],
        },
        {
            id: "address-normalization",
            title: "地址資料標準化系統",
            category: "Research",
            role: "研究實習生",
            period: "2019",
            companyId: "academia-sinica",
            shortDescription: "解決台灣地址格式混亂問題的自動化正規化系統。",
            description: `
**專案:**
為 GIS 中心開發一套系統，用於解析與標準化來自各來源的非結構化地址資料。

**成就:**
- 設計地址正規化模組，建立全國地址屬性資料庫。
- 獲得 2019 TGIS 最佳學生論文獎。
            `,
            keyFeatures: [
                "地址字串正規化演算法",
                "Web 抽樣服務系統",
            ],
            challenges: [
                "台灣地址格式的高度歧義性處理。",
            ],
            techStack: ["Python", "Django", "PostgreSQL", "Web Development"],
        },
    ],
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
            category: "生成式 AI 與 LLM 架構 (GenAI)",
            items: [
                "On-Premise Deployment (vLLM)",
                "RAG Architecture",
                "Multi-Agent Systems (LangGraph)",
                "Knowledge Graph (Neo4j)",
                "ASR & Audio Processing (Whisper)",
                "Prompt Engineering",
                "Vector Database Integration",
            ],
        },
        {
            category: "系統工程與後端開發 (System Engineering)",
            items: [
                "System Architecture Design",
                "Python Backend (FastAPI / Django)",
                "API Design & Microservices",
                "Containerization (Docker)",
                "Cloud Services (AWS Bedrock)",
                "Git & CI/CD Basics",
            ],
        },
        {
            category: "資料科學與演算法 (Data Science)",
            items: [
                "Time Series Forecasting (LSTM)",
                "Custom Loss Function Design",
                "Explainable AI (XAI / LIME)",
                "Data Engineering & ETL (Databricks / SQL)",
                "Algorithm Optimization (Genetic Algorithm)",
            ],
        },
        {
            category: "技術領導力 (Leadership)",
            items: [
                "Technical Project Management",
                "Cross-functional Team Leadership",
                "AI Strategy Planning",
                "Problem Solving & RCA",
            ],
        },
    ],
};
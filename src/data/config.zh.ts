import { Config } from './types';
import { PERSONAL_INFO, SOCIAL_LINKS, COMPANIES } from './common';
import { UNIFIED_PROJECTS } from './projects';

export const configZh: Config = {
    identity: {
        name: PERSONAL_INFO.nameZh,
        role: 'AI 解決方案架構與企業 GenAI 應用工程',
        tagline: '我專注於把企業內部高限制場景裡的文件、研發與製造需求，整理成安全、可用且能真正被團隊採納的 LLM 應用與 AI workflow。',
        about: [
            '我常工作的地方不是漂亮 demo，而是機密文件、內網環境、製造資料、既有流程與跨部門協作交會的現場。我的強項是把這些限制轉成清楚的系統邊界、可落地的產品設計，以及團隊願意持續使用的工具。',
            '我喜歡待在架構與實作之間。除了建構 LLM、RAG、Agent 與自動化流程，我也會協助團隊建立 AI 採用節奏，透過分享、工作坊與技術交流，讓工具真的進入日常工作。'
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
            company: '原相科技 PixArt Imaging Inc.',
            companyMeta: {
                ...COMPANIES.pixart,
                description: '全球知名的無晶圓半導體公司，專注於 CMOS 影像感測器與相關 IC 設計。',
                industry: '半導體 / IC 設計',
            },
            role: '資訊工程師（Generative AI / LLM 專案）',
            period: '2025 年 8 月 - 至今',
            description: '任職於 IT 團隊，為 IC 設計與企業內部部門規劃 on-prem 與 air-gapped 環境下的 GenAI workflow。我的工作是把法務、營運與研發的高安全需求，整理成能進入日常工作的內部 AI 系統。',
            techStack: ['vLLM', 'Vector DB', 'ASR', 'AWS Bedrock', 'System Architecture'],
            achievements: [
                '設計企業內部 Legal AI workflow，支援敏感合約比對與機密專利翻譯，避免資料送往外部雲端 AI 服務。',
                '打造全離線會議智慧流程，整合 ASR、Speaker Diarization 與結構化摘要，提升長音檔處理效率。',
                '規劃並部署 air-gapped GenAI workspace，讓 IC 設計團隊在高限制環境中仍可使用 coding assistant、多模態分析與 AI 協作流程。',
            ],
            relatedProjectIds: ['pixart-genai-hub', 'legal-contract-comparison', 'patent-translation-service', 'auto-minutes-system'],
        },
        {
            id: 'auo',
            type: 'past',
            company: '友達光電 AUO - 先進製造中心',
            companyMeta: {
                ...COMPANIES.auo,
                description: '全球顯示技術與智慧製造解決方案領導者。',
                industry: '製造業 / 顯示技術',
            },
            role: 'AI 工程師 / 專案負責人',
            period: '2021 年 8 月 - 2025 年 8 月',
            description: '主導跨部門 AI 專案，把製造變異、工程知識與流程瓶頸整理成決策支援 workflow 與可解釋建議，讓產線與工程團隊能實際採用。',
            techStack: ['Python', 'SQL', 'Databricks', 'Streamlit', 'FastAPI', 'LLM Agents'],
            achievements: [
                '設計跨廠區 AI 最佳化 workflow，將製程變異轉成可解釋參數建議，達成良率提升、缺陷下降並節省大量人工時數。',
                '帶領內部知識助理由基礎 RAG 搜尋演進為整合 SQL 工具與 Knowledge Graph 推理的 Multi-Agent 決策支援系統。',
                '建立預防保養系統，降低預測誤差並讓維護排程更接近實務需求。',
                '成果獲內部防禦型專利認可，並獲選智慧製造 Level 3 菁英人才。',
            ],
            relatedProjectIds: ['auo-assistant', 'auo-yield', 'auo-pm'],
        },
        {
            id: 'academia-sinica',
            type: 'past',
            company: '中央研究院 - GIS 中心',
            companyMeta: {
                ...COMPANIES.sinica,
                description: '台灣指標性學術研究機構。',
                industry: '學術研究',
            },
            role: '研究實習生',
            period: '2019 年 2 月 - 2019 年 7 月',
            description: '開發地址抽樣與正規化 Web 系統，處理異質資料來源中的非結構化地址問題。',
            techStack: ['Web Development', 'Data Normalization', 'PostgreSQL'],
            achievements: [
                '開發線上地址抽樣與服務系統，並獲得 TGIS 最佳學生論文獎。',
                '設計地址正規化模組與地址屬性資料庫，處理台灣地址格式中大量非結構化問題。',
            ],
            relatedProjectIds: ['address-normalization'],
        },
    ],
    projects: UNIFIED_PROJECTS.map((project) => {
        const baseProject = {
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
        };

        if (project.id !== 'legal-contract-comparison') {
            return baseProject;
        }

        return {
            ...baseProject,
            title: '內網法律文件比對 Web App',
            visualType: 'legal-comparison',
            role: 'AI Solution Architect',
            company: 'PixArt Imaging Inc.',
            period: '2026/02 - 2026/03',
            summary: '設計企業內部 on-prem AI workflow，協助法務團隊在不外流敏感資料的前提下，比對已簽署合約與其他機密法律文件。',
            shortDescription: '設計企業內部 on-prem AI workflow，協助法務團隊在不外流敏感資料的前提下，比對已簽署合約與其他機密法律文件。',
            heroBadges: ['On-Prem AI', 'OCR + LLM Comparison', 'Clause-Level Diff Review'],
            heroImage: '/images/projects/legal-document-comparison-hero.svg',
            techStack: ['Python', 'FastAPI', 'vLLM', 'Vision LLM (OCR)', 'LLM Pipeline', 'Document Processing'],
            problemSolved: [
                '機密法律文件無法上傳到外部 AI 或雲端文件審閱服務。',
                '已簽署或掃描版合約常帶有手寫標記、印章與格式差異，人工比對耗時且容易遺漏。',
                '法務需要一套可靠機制，在保留法律關鍵字與條文精度的前提下比對不同版本。',
                'AI 比對流程需要加入可驗證機制，避免因重組或生成造成關鍵內容遺失。',
            ],
            implementationHighlights: [
                '打造企業內部 Web App，支援原始法律文件與簽署版本的比對。',
                '將 OCR、文件重組與 LLM 差異分析整合為 on-prem workflow。',
                '加入 Multiset Check 進行 deterministic validation，降低重組後遺漏關鍵字的風險。',
                '設計雙欄同步檢視介面，方便使用者做 clause-level 差異審查。',
                '全流程部署在公司內部環境，保護敏感法律資料。',
            ],
            impact: [
                '降低法務人員比對簽署合約與修訂文件所需的人工作業量。',
                '結合 OCR、LLM 比對與 deterministic validation，提高審閱可靠度。',
                '讓法務團隊在不依賴外部服務的情況下完成敏感文件審查。',
                '展示 LLM 文件理解能力如何被產品化成企業內部可用 Web App。',
            ],
            cardTags: ['Python', 'FastAPI', 'vLLM', 'Vision LLM (OCR)', 'Document Processing'],
        };
    }),
    education: [
        {
            school: '國立雲林科技大學',
            degree: '碩士',
            field: '工業工程與管理',
            period: '2019 - 2021',
            thesis: '結合 R-tree 與 SPACE-MDL-LSTM 之大範圍人流預測效率最佳化',
            logo: COMPANIES.yuntech.logo,
        },
        {
            school: '國立雲林科技大學',
            degree: '學士',
            field: '工業工程與管理',
            period: '2015 - 2019',
            thesis: '彈性生產流程下機台派工最佳化研究',
            logo: COMPANIES.yuntech.logo,
        },
    ],
    awards: [
        {
            year: '2025',
            title: '智慧製造 Level 3 菁英人才（預測生產）',
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
            category: 'Generative AI 與 LLM',
            items: [
                'On-Premise LLM Serving（vLLM）',
                'RAG 架構與 Vector DB',
                'Multi-Agent Systems（LangGraph）',
                'Knowledge Graph（Neo4j）',
                'ASR 與 Speaker Diarization（Whisper）',
                'Vision-LLM 與多模態 Pipeline',
                'Prompt Engineering',
            ],
        },
        {
            category: '系統與後端工程',
            items: [
                'System Architecture Design',
                'Python（FastAPI / Django）',
                'REST API 與微服務',
                'Cloudflare Workers & D1',
                'AWS Bedrock',
                'Docker 與容器化',
            ],
        },
        {
            category: '資料科學與機器學習',
            items: [
                '時間序列預測（LSTM）',
                '客製 Loss Function 設計',
                'Explainable AI（XAI / LIME）',
                'Genetic Algorithm 最佳化',
                'Data Engineering 與 ETL（Databricks / SQL）',
            ],
        },
        {
            category: '前端與開發協作',
            items: [
                'Streamlit（AI Internal Tools）',
                'AI 協作式 Web 開發',
                'Git 與版本控管',
                'CI/CD',
                'Linux 管理',
            ],
        },
    ],
};

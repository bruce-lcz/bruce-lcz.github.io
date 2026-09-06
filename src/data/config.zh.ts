import { Config } from './types';
import { PERSONAL_INFO, SOCIAL_LINKS, COMPANIES } from './common';
import { UNIFIED_PROJECTS } from './projects';

export const configZh: Config = {
    identity: {
        name: PERSONAL_INFO.nameZh,
        role: 'AI 應用工程師｜企業 AI 架構與 LLM 系統',
        tagline: '在資安與流程限制下，把 AI 做成能上線、能驗證，也能被團隊持續使用的內部產品。',
        about: [
            '我會依任務與限制選擇工具；無論是地端模型、OCR、ASR、RAG、Agent 或 LLM API，只有在確實能解決流程問題時才採用。',
            '我的工作涵蓋企業 AI 架構、流程編排、後端整合、驗證機制與內部產品化，重點是交付團隊信任、也能持續使用的成果。',
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
                description: '專注於 CMOS 影像感測器與相關 IC 設計的全球無晶圓半導體公司。',
                industry: 'Semiconductor / IC Design',
            },
            role: '資訊工程師（生成式 AI／LLM 專案）',
            period: '2025 年 8 月－至今',
            description: '我負責法務、研發、工程與內部知識應用的端到端交付，把限制多、脈絡複雜的 AI 需求，轉成團隊真正用得上的內部流程與產品。',
            techStack: ['Python', 'FastAPI', 'vLLM', '流程設計', '內部產品化'],
            achievements: [
                '以 vLLM 模型服務、文件／圖片工具與任務導向流程，設計共享的內部 GenAI 工作區，支援程式輔助、文件審查與技術分析。',
                '交付含權限隔離的 NL2SQL、多模態技術審查、LLM 營運報表，以及每頁都能追溯來源的 RAG 系統。',
                '結合 OCR、地端 LLM、分階段重整／校稿、術語處理與驗證機制，將敏感法務與專利流程產品化，並支援離線處理。',
                '以可重複使用的 Python 工具自動化工程與會議流程，涵蓋檔案處理、ASR、講者分段與結構化摘要。',
            ],
            relatedProjectIds: [
                'pixart-genai-hub',
                'workforce-insight-platform',
                'ds-grammar-chk',
                'llm-usage-dashboard',
                'issue-kb',
                'legal-contract-comparison',
                'patent-translation-service',
                'auto-minutes-system',
                'asc-merge-c-generator',
            ],
        },
        {
            id: 'auo',
            type: 'past',
            company: 'AUO Corporation－先進製造中心',
            companyMeta: {
                ...COMPANIES.auo,
                description: '擁有複雜營運流程的全球顯示科技與智慧製造公司。',
                industry: 'Manufacturing / Display Technology',
            },
            role: 'AI 工程師／專案負責人',
            period: '2021 年 8 月－2025 年 8 月',
            description: '建置面向製造現場的 AI 系統，支援決策、製程優化與營運流程；重點不只是模型實驗，而是讓成果真正進入日常工作。',
            techStack: ['Python', 'SQL', 'Databricks', 'Streamlit', 'FastAPI', 'Agent 流程'],
            achievements: [
                '透過跨廠最佳化與可解釋建議，提升良率 1.43%、降低缺陷 12.62%，每月約節省 300 人時。',
                '把製造助理從單純檢索，發展成能使用 SQL／API 工具與製程知識協助判斷的流程。',
                '以 LSTM 預測與保養規劃流程降低缺陷預測 RMSE 20%，每月約節省 90 人時。',
                '獲選智慧製造三級菁英人才；預防保養成果並獲核准為公司內部防禦性專利。',
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
            period: '2019 年 2 月－2019 年 7 月',
            description: '處理格式混雜的地址資料，建立資料正規化與 Web 驗證流程。',
            techStack: ['Python', 'Django', 'PostgreSQL', 'Data Quality'],
            achievements: [
                '建立地址正規化流程，以及支援異質資料集的資料結構。',
                '獲得 TGIS 2019 最佳學生論文獎。',
            ],
            relatedProjectIds: ['address-normalization'],
        },
    ],
    projects: UNIFIED_PROJECTS.map((project) => ({
        id: project.id,
        category: project.category,
        timeline: project.timeline,
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
            organization: '臺灣地理資訊學會年會暨學術研討會（TGIS）',
        },
        {
            year: '2019',
            title: '最佳學生論文獎',
            organization: '臺灣地理資訊學會年會暨學術研討會（TGIS）',
        },
    ],
    skills: [
        {
            category: '生成式 AI 與 LLM 系統',
            description: '圍繞模型、檢索、工具與多模態輸入，建立實用且可驗證的 GenAI 流程。',
            items: ['地端 LLM 服務', 'vLLM', 'RAG', 'Agent 與工具呼叫流程', '多模態／VLM', 'OCR／ASR', '提示與驗證設計'],
        },
        {
            category: 'AI 系統與解決方案設計',
            description: '設計能串接流程、API、工具與使用者的安全可靠企業級 AI 系統。',
            items: ['企業級 AI 架構', '流程編排', 'API／工具整合', '資安與可靠性設計'],
        },
        {
            category: '後端與資料工程',
            description: '實作可靠的服務與資料管線，讓 AI 流程能在正式環境中穩定運作。',
            items: ['Python', 'FastAPI', 'REST API', 'SQL', 'Docker', 'ETL／資料管線', 'Databricks'],
        },
        {
            category: '應用機器學習',
            description: '將預測建模與最佳化方法應用於營運與製造問題。',
            items: ['時間序列預測', 'LSTM', '可解釋 AI', '最佳化'],
        },
    ],
};

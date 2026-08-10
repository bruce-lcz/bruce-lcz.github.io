import { UnifiedProject } from './types';

export const PROJECT_ORDER: string[] = [
    'pixart-genai-hub',
    'legal-contract-comparison',
    'auo-yield',
    'auo-assistant',
    'patent-translation-service',
    'auto-minutes-system',
    'asc-merge-c-generator',
    'personal-gym-tracker-v2',
    'auo-pm',
    'address-normalization',
];

const UNIFIED_PROJECTS_MAP: UnifiedProject[] = [
    {
        id: 'asc-merge-c-generator',
        category: 'PixArt',
        period: '2026/05',
        companyId: 'pixart',
        visualType: 'asc-merge-c-generator',
        heroBadges: ['Productionized Internal Tool', 'Workflow Automation', 'File-to-Code Conversion'],
        heroImage: '/images/projects/asc-merge-c-generator-hero.svg',
        techStack: ['Open WebUI', 'Python', 'Native Tool Calling', 'Nginx', 'Docker Compose'],
        translations: {
            en: {
                title: 'ASC Merge & C Code Generator',
                role: 'AI Application Engineer',
                company: 'PixArt Imaging Inc.',
                shortDescription: 'Packaged a manual ASC merge and C code conversion process into a reusable internal tool for SD users.',
                description: 'A reusable internal tool that turned manual configuration-file handling into a guided workflow.',
                keyFeatures: [
                    'Supports both single-file conversion and ordered multi-file merge workflows',
                    'Preserves RD comments, Chinese annotations, and append-based initialization order during processing',
                    'Exports downloadable C files and optional merged ASC files through active internal links',
                ],
                challenges: [
                    'ASC files arrived with mixed encodings, inconsistent formatting, and comments that could not be lost during conversion.',
                    'The interaction flow had to collect inputs step by step instead of dumping all configuration questions on the user at once.',
                ],
                summary: 'Packaged a manual ASC merge and C code conversion process into a reusable internal tool for SD users.',
                beforeSummary: 'SD users had to manually merge RD-provided ASC files, fix encoding issues, preserve comments, and then turn the result into C initialization code by hand.',
                afterSummary: 'Packaged the ASC merge and C code conversion process into a reusable internal tool, helping the SD team turn a manual configuration-file workflow into a guided, confirmable, and downloadable standardized process.',
                context: [
                    'SD users regularly received one or more ASC configuration files from RD teams and needed to convert them into usable initialization code.',
                    'The work was repetitive, but it still required careful handling of file order, comments, Chinese annotations, and output format details.',
                ],
                constraint: [
                    'Open WebUI preview text could not be trusted when files used CP950, Big5, or other legacy encodings.',
                    'The workflow had to behave differently for single-file versus multi-file cases without forcing users through unnecessary steps.',
                ],
                myRole: [
                    'The full interaction flow, supporting Open WebUI skill behavior, and file-processing tool boundaries were defined as one coherent workflow.',
                    'I implemented the Python tools for raw-byte ASC reading, encoding fallback, and export generation inside the internal environment.',
                ],
                systemDesign: [
                    'Used Open WebUI native tool calling so the LLM could read uploaded ASC files through `asc_read`, reason over normalized content, and write outputs through `asc_export`.',
                    'Integrated Nginx static hosting with exported files so the final result was delivered as downloadable artifacts instead of long code pasted into chat.',
                ],
                outcome: [
                    'Reduced manual merging and conversion effort for SD users handling RD configuration files.',
                    'Made the workflow more reliable by preserving annotations, merge order, and downloadable output behavior inside one repeatable tool.',
                ],
                problemSolved: [
                    'Manual ASC merging was slow, error-prone, and easy to break when file order or repeated addresses mattered.',
                    'Chinese comments and RD notes could become garbled or disappear when relying on preview text instead of raw file bytes.',
                    'Users needed real output files, not a chat response that forced them to copy generated C code manually.',
                ],
                implementationHighlights: [
                    'Developed `asc_read` to decode uploaded file bytes with UTF-8, UTF-8-SIG, CP950, Big5, GB18030, and Latin1 fallback handling.',
                    'Developed `asc_export` to emit downloadable C files and optional merged ASC files through the internal download service.',
                    'Added conditional logic for single-file and multi-file workflows, plus append-based merge behavior to preserve initialization sequence.',
                ],
                impact: [
                    'Reduced repetitive manual work for SD users converting RD-delivered ASC configurations into engineering-ready C code.',
                    'Improved reliability by preserving Chinese annotations, RD comments, and merge order in an on-premise internal workflow.',
                    'Created a reusable Open WebUI automation pattern for future file-to-code internal tools.',
                ],
                cardTags: ['Productionized Internal Tool', 'Workflow Automation', 'Engineering Productivity', 'File-to-Code Conversion'],
            },
            zh: {
                title: 'ASC 合併與 C Code 產生器',
                role: 'AI Application Engineer',
                company: 'PixArt Imaging Inc.',
                shortDescription: '將 ASC 合併與 C code 轉換流程整理成 SD 團隊可重複使用的內部工具。',
                description: '把原本仰賴人工整理的設定檔流程，轉成可輸入、可確認、可下載的標準化操作。',
                keyFeatures: [
                    '同時支援單一 ASC 轉換與多 ASC 依序合併流程',
                    '在處理過程中保留 RD 註解、中文標註與 append 式初始化順序',
                    '透過內部下載連結匯出 C 檔，並在多檔情境下額外提供 merged ASC 檔',
                ],
                challenges: [
                    'ASC 檔可能混用不同編碼、格式不一致，且轉換過程不能遺失 RD 註解與中間說明。',
                    '互動流程必須逐步蒐集資訊，不能一次把所有設定問題丟給使用者。',
                ],
                summary: '將 ASC 合併與 C code 轉換流程整理成 SD 團隊可重複使用的內部工具。',
                beforeSummary: 'SD 使用者過去要手動合併 RD 提供的 ASC 檔、修正編碼、保留註解，再自行轉成 C 初始化程式碼，流程耗時又容易出錯。',
                afterSummary: '將 ASC 合併與 C code 轉換流程包裝成可重複使用的內部工具，協助 SD 團隊把原本仰賴人工整理的設定檔流程，轉成可輸入、可確認、可下載的標準化操作。',
                context: [
                    'SD 使用者經常收到一份或多份來自 RD 的 ASC 設定檔，並需要把內容整理成可用的初始化程式碼。',
                    '這類工作雖然重複，但對檔案順序、註解保留、中文標註與輸出格式都很敏感。',
                ],
                constraint: [
                    '當檔案使用 CP950、Big5 等傳統編碼時，不能直接依賴 Open WebUI 的預覽文字。',
                    '單檔與多檔情境需要不同處理方式，不能讓使用者被迫走多餘步驟。',
                ],
                myRole: [
                    '我設計整體互動流程、Open WebUI skill 規則，以及底層檔案處理工具的分工。',
                    '我實作 Python 工具來讀取 ASC 原始位元組、做編碼 fallback，並在內部環境完成輸出匯出流程。',
                ],
                systemDesign: [
                    '透過 Open WebUI 的 native tool calling，讓 LLM 能先用 `asc_read` 讀取上傳檔，再根據正規化內容產生結果，最後透過 `asc_export` 輸出檔案。',
                    '把 Nginx 靜態檔服務接到輸出流程上，讓最終結果以可下載檔案提供，而不是把整份 C code 直接貼在聊天視窗。',
                ],
                outcome: [
                    '降低 SD 使用者在 RD 設定檔合併與轉換上的手動成本。',
                    '把註解保留、順序確認與下載輸出整合進同一套可重複使用的流程，降低人工整理與格式確認成本。',
                ],
                problemSolved: [
                    '手動合併 ASC 檔不只花時間，也很容易在檔案順序或重複位址處理上出錯。',
                    '若只依賴預覽文字，中文註解與 RD 備註很容易出現亂碼或在轉換過程中遺失。',
                    '使用者需要的是可直接下載的結果檔，不是還要自行複製整理的聊天輸出。',
                ],
                implementationHighlights: [
                    '開發 `asc_read`，以 UTF-8、UTF-8-SIG、CP950、Big5、GB18030、Latin1 等策略讀取上傳檔案原始位元組。',
                    '開發 `asc_export`，輸出可下載的 C 檔，並在多檔情境下額外產生 merged ASC 檔。',
                    '加入單檔 / 多檔條件分支與 append 式 merge 邏輯，保留初始化順序與重複位址處理方式。',
                ],
                impact: [
                    '降低 SD 使用者把 RD 提供的 ASC 設定轉成工程可用 C code 時的重複人工成本。',
                    '在內網環境下保留中文標註、RD 註解與檔案順序，提升流程可信度與可重複性。',
                    '建立可延伸到其他 file-to-code 類型工具的 Open WebUI 內部自動化模式。',
                ],
                cardTags: ['工具化落地', '流程自動化', '工程效率提升', '檔案轉程式流程'],
            },
        },
    },
    {
        id: 'pixart-genai-hub',
        category: 'PixArt',
        visualType: 'genai-workspace',
        period: '2025 - Present',
        companyId: 'pixart',
        heroBadges: ['Internal AI Platform', 'LLM Application', 'Engineering Productivity'],
        heroImage: '/images/projects/genai-workspace-hero.svg',
        techStack: ['Python', 'vLLM', 'Model Serving', 'Document Utilities', 'Docker'],
        translations: {
            en: {
                title: 'GenAI Workspace for Engineering Teams',
                coreValueLine: 'Internal LLM Workspace · Engineering AI Adoption',
                role: 'AI Application Engineer',
                company: 'PixArt Imaging Inc.',
                shortDescription: 'Built and integrated an internal GenAI workspace that helped engineering users access internal models and task-specific AI utilities for coding, document review, and technical analysis.',
                description: 'Built as a reusable internal workspace rather than a single-use demo.',
                keyFeatures: [
                    'Internal workspace for coding, document analysis, and technical review support',
                    'Model access patterns for quick tasks and deeper reasoning use cases',
                    'Shared interaction patterns that made AI tools easier to adopt across teams',
                ],
                challenges: [
                    'Teams needed AI support that fit internal infrastructure and actual engineering habits.',
                    'Model availability alone was not enough; the workflow needed to be easy to access and use repeatedly.',
                ],
                summary: 'Built and integrated an internal GenAI workspace that helped engineering users access internal models and task-specific AI utilities for coding, document review, and technical analysis.',
                beforeSummary: 'Engineering users had fragmented access to AI tools, and standalone model endpoints were difficult to use in daily work.',
                afterSummary: 'Combined internal model access, reusable interaction patterns, and document/image-related utilities into a shared workspace designed around recurring engineering tasks.',
                context: [
                    'Engineering teams wanted practical AI support for coding, document reading, and technical analysis.',
                    'The need was broader than a chatbot: teams needed a place where multiple AI capabilities could be used as part of recurring work.',
                ],
                constraint: [
                    'Tool choices had to fit internal infrastructure, access controls, and different task depths.',
                    'A useful solution needed to balance fast responses, stronger reasoning, and document/image-related input handling.',
                ],
                myRole: [
                    'The problem was treated as a product and workflow design task rather than a pure model deployment task.',
                    'Access to different model capabilities and repeated-use patterns was shaped around how teams would actually use the workspace.',
                ],
                systemDesign: [
                    'Built a shared workspace around internal model serving, document/image-related utilities, and task-oriented interaction flows.',
                    'Organized model access so lightweight tasks and deeper reasoning requests could be handled through clearer workspace patterns.',
                ],
                outcome: [
                    'Created a practical internal GenAI entry point for engineering teams instead of isolated experiments.',
                    'Made AI support easier to adopt across coding, document review, and technical analysis workflows.',
                ],
                problemSolved: [
                    'Teams lacked a usable internal way to access multiple AI capabilities inside their daily engineering workflow.',
                    'Standalone model endpoints did not automatically translate into adoption or reusable workflows.',
                ],
                implementationHighlights: [
                    'Designed a shared internal workspace rather than a one-off AI tool.',
                    'Connected model serving, document/image-related utilities, and workflow-oriented access patterns into one shared workspace.',
                    'Supported both quick-response and deeper reasoning use cases through clearer model access patterns.',
                ],
                impact: [
                    'Helped engineering teams use AI in recurring work instead of isolated demos.',
                    'Provided a reusable internal workspace pattern for later document, coding, and analysis workflows.',
                ],
                cardTags: ['Internal AI Platform', 'LLM Application', 'Engineering Productivity', 'Document Intelligence'],
            },
            zh: {
                title: '工程團隊 GenAI 工作區',
                role: 'AI Application Engineer',
                company: 'PixArt Imaging Inc.',
                shortDescription: '建置並整合內部 GenAI 工作區，協助工程使用者更容易存取內部模型與任務導向 AI 工具，支援程式輔助、文件閱讀與技術分析等日常工作情境。',
                description: '這不是單一 demo，而是一個可被團隊反覆使用的內部工作空間。',
                keyFeatures: [
                    '支援程式輔助、文件閱讀與技術分析的內部工作區',
                    '依任務需求整理模型使用方式，兼顧反應速度與推理需求',
                    '用一致的互動方式降低團隊使用 AI 的門檻',
                ],
                challenges: [
                    '團隊需要的是能融入既有工作習慣的 AI 支援，而不只是多一個模型入口。',
                    '單純把模型架起來，不等於大家真的會在日常工作中使用它。',
                ],
                summary: '建置並整合內部 GenAI 工作區，協助工程使用者更容易存取內部模型與任務導向 AI 工具，支援程式輔助、文件閱讀與技術分析等日常工作情境。',
                beforeSummary: '工程使用者原本需分散使用不同 AI 工具，單純的模型端點也不易直接融入日常工作流程。',
                afterSummary: '整合 LLM 應用入口、可重用的互動模式，以及文件/圖片處理相關工具，形成一個貼近工程任務的共享工作區。',
                context: [
                    '工程團隊希望把 AI 用在 coding、文件理解與技術分析等日常工作。',
                    '真正的需求不是一個聊天機器人，而是一個能承接多種 AI 工具使用情境的內部工作區。',
                ],
                constraint: [
                    '方案必須符合內部基礎設施、權限控管與不同任務深度的需求。',
                    '同時要兼顧快速回應、較深推理與文件/圖片相關輸入處理。',
                ],
                myRole: [
                    '我把這個需求拆解成產品與 workflow 設計問題，而不是只當成模型部署問題。',
                    '我負責規劃不同模型能力該如何被團隊存取，以及整個工作區的使用方式。',
                ],
                systemDesign: [
                    '以內部模型服務、文件/圖片處理相關工具與任務導向互動流程為核心，設計共享工作區。',
                    '整理模型使用方式，讓快速任務與深度推理需求能透過更清楚的工作區模式被處理。',
                ],
                outcome: [
                    '讓工程團隊有一個可實際使用的 GenAI 入口，而不是零散的 AI 嘗試。',
                    '為後續的文件、程式輔助與分析 workflow 建立可重用的內部工作區模式。',
                ],
                problemSolved: [
                    '團隊缺少一個能在日常工程任務中使用多種 AI 工具情境的內部入口。',
                    '只有模型 API 或 endpoint，並不足以形成可被採用的工作流程。',
                ],
                implementationHighlights: [
                    '把需求設計成共享工作區，而不是一次性的 AI 工具。',
                    '整合模型服務、文件/圖片處理相關工具與 workflow 導向的互動設計。',
                    '用更清楚的模型使用方式支援快速回應與深度推理兩類任務。',
                ],
                impact: [
                    '讓 AI 更容易進入工程團隊的日常工作，而不只是停留在 demo。',
                    '建立後續內部 AI workflow 可重用的工作區模式。',
                ],
                cardTags: ['內部 AI 平台', 'LLM 應用導入', '工程效率提升', '文件智能處理'],
            },
        },
    },
    {
        id: 'legal-contract-comparison',
        category: 'PixArt',
        visualType: 'legal-comparison',
        period: '2026/02 - 2026/03',
        companyId: 'pixart',
        heroBadges: ['Contract Comparison', 'Document Intelligence', 'Human Review Workflow'],
        heroImage: '/images/projects/legal-document-comparison-hero.svg',
        techStack: ['Python', 'FastAPI', 'vLLM', 'Document Parsing', 'Human Review Workflow'],
        translations: {
            en: {
                title: 'Legal Document Comparison Web App',
                coreValueLine: 'Internal Contract Comparison Workflow for Human Review',
                role: 'AI Application Engineer',
                company: 'PixArt Imaging Inc.',
                shortDescription: 'Built an internal web app that helped legal users compare source contracts with signed or scanned copies using document parsing, AI-assisted comparison support, and side-by-side review.',
                description: 'An internal document comparison workflow focused on review support.',
                keyFeatures: [
                    'Internal review app for comparing originals against signed or scanned copies',
                    'AI-assisted comparison support paired with supporting consistency checks',
                    'Dual-pane review interface for clearer clause-by-clause inspection',
                ],
                challenges: [
                    'Scanned and signed files introduced unstable structure, annotations, and formatting noise.',
                    'AI output needed supporting checks and human review before users acted on differences.',
                ],
                summary: 'Built an internal web app that helped legal users compare source contracts with signed or scanned copies using document parsing, AI-assisted comparison support, and side-by-side review.',
                beforeSummary: 'Legal users needed a faster way to compare sensitive contracts without sending documents to external tools.',
                afterSummary: 'Structured the process into document extraction, comparison support, supporting consistency checks, and human review through a dual-pane interface.',
                context: [
                    'The legal team needed a faster way to review signed or scanned contracts against source documents.',
                    'The goal was not to showcase OCR or LLMs, but to reduce slow and error-prone manual comparison work.',
                ],
                constraint: [
                    'Documents were sensitive and were handled inside the company environment.',
                    'Scanned files were structurally unstable, and legal review needed human-in-the-loop support instead of relying only on model output.',
                ],
                myRole: [
                    'The review problem was broken into parsing, comparison support, consistency checks, and human review steps.',
                    'The workflow was packaged as an internal web app instead of a loose backend process.',
                ],
                systemDesign: [
                    'Combined document parsing, AI-assisted comparison support, supporting consistency checks, and a side-by-side review interface.',
                    'Added checks around reconstructed text so reviewers could inspect differences with clearer context.',
                ],
                outcome: [
                    'Reduced manual review effort for sensitive contract comparison.',
                    'Created a review support workflow that balanced AI assistance with human control.',
                ],
                problemSolved: [
                    'Sensitive legal documents were not suitable for external review tools.',
                    'Manual comparison of originals and signed scans was slow and easy to miss details in.',
                    'Reviewers needed a workflow that supported careful human review rather than a raw AI summary.',
                ],
                implementationHighlights: [
                    'Built an internal web app around the review workflow, not just a comparison API.',
                    'Integrated document parsing with AI-assisted comparison support and supporting consistency checks.',
                    'Designed a synchronized dual-pane interface for efficient human review.',
                ],
                impact: [
                    'Helped legal users compare sensitive documents without relying on external AI services.',
                    'Showed how AI-assisted document comparison could be packaged into a usable internal review tool.',
                ],
                cardTags: ['Contract Comparison', 'Document Intelligence', 'Human-in-the-Loop Review', 'Workflow Automation'],
            },
            zh: {
                title: '法務文件比對 Web App',
                role: 'AI Application Engineer',
                company: 'PixArt Imaging Inc.',
                shortDescription: '建置內部 Web App，協助法務使用者比對原始合約與簽署版或掃描文件，透過文件解析、AI 輔助比對與雙欄檢視，支援人工覆核流程。',
                description: '這是一個以文件比對與審閱支援為核心的內部工具。',
                keyFeatures: [
                    '比較原稿與簽署或掃描版本的內部審閱工具',
                    'AI 輔助比對搭配一致性檢查輔助',
                    '雙欄對照介面，支援更清楚的逐條檢視',
                ],
                challenges: [
                    '掃描與簽署文件常帶有註記、章戳與格式噪音，內容結構不穩定。',
                    '模型輸出需要搭配輔助檢查與人工覆核，才能用於實際差異判斷。',
                ],
                summary: '建置內部 Web App，協助法務使用者比對原始合約與簽署版或掃描文件，透過文件解析、AI 輔助比對與雙欄檢視，支援人工覆核流程。',
                beforeSummary: '法務使用者需要更有效率地比對敏感合約內容，同時避免將文件送至外部 AI 工具。',
                afterSummary: '將流程拆分為文件擷取、比對輔助、一致性檢查輔助與雙欄人工覆核介面，讓使用者能更清楚地檢視差異。',
                context: [
                    '法務團隊需要更快地比對原稿與簽署或掃描後的合約內容。',
                    '這個專案的重點不是展示 OCR 或 LLM，而是降低人工比對的耗時與漏看風險。',
                ],
                constraint: [
                    '文件屬於敏感資料，需要在公司內部環境處理。',
                    '掃描文件格式不穩，且法務審閱需要保留人工判斷，不能只依賴模型輸出。',
                ],
                myRole: [
                    '我把需求拆成文件解析、比對輔助、一致性檢查輔助與人工審閱四個步驟。',
                    '我負責設計整體 workflow，並把它包裝成內部 Web App，而不是零散的後端流程。',
                ],
                systemDesign: [
                    '整合文件解析、AI 輔助比對、一致性檢查輔助與雙欄審閱介面。',
                    '加入重組文字相關檢查，讓使用者能在更清楚的上下文中檢視差異。',
                ],
                outcome: [
                    '降低敏感合約比對時的人工作業量。',
                    '建立一套兼顧 AI 協助與人工掌控的文件審閱支援流程。',
                ],
                problemSolved: [
                    '敏感法律文件不適合上傳到外部 AI 或雲端審閱工具。',
                    '人工比對原稿與簽署掃描件耗時且容易漏看細節。',
                    '法務需要的是能支援謹慎人工覆核的流程，而不是一段原始模型輸出。',
                ],
                implementationHighlights: [
                    '把審閱流程做成內部 Web App，而不是只做一個 comparison API。',
                    '整合文件解析、AI 輔助比對與一致性檢查輔助。',
                    '設計雙欄同步介面，提升人工審閱效率。',
                ],
                impact: [
                    '協助法務在避免依賴外部 AI 工具的情況下處理敏感文件比對。',
                    '示範 AI 輔助文件比對如何被包裝成可使用的內部審閱工具。',
                ],
                cardTags: ['合約差異比較', '文件智能處理', 'Human-in-the-Loop', '流程自動化'],
            },
        },
    },
    {
        id: 'patent-translation-service',
        category: 'PixArt',
        visualType: 'patent-translation',
        period: '2026/01 - 2026/02',
        companyId: 'pixart',
        heroBadges: ['Patent Translation Workflow', 'Terminology Support', 'DOCX Export'],
        heroImage: '/images/projects/patent-translation-hero.svg',
        techStack: ['Python', 'FastAPI', 'vLLM', 'Prompt Design', 'docx Processing'],
        translations: {
            en: {
                title: 'Patent Translation Workflow Web App',
                coreValueLine: 'Staged Patent Translation Workflow with Terminology Support',
                role: 'AI Application Engineer',
                company: 'PixArt Imaging Inc.',
                shortDescription: 'Designed an internal web app for first-draft patent translation, combining staged LLM prompting, proofreading support, terminology consistency handling, and DOCX export.',
                description: 'An internal translation workflow focused on first-draft patent translation and review support.',
                keyFeatures: [
                    'Staged translation and proofreading flow for long-form patent documents',
                    'Terminology consistency support across sections',
                    'Document reconstruction and export in a team-usable web app',
                ],
                challenges: [
                    'Patent translation needed to support formal patent-style wording and technical terminology.',
                    'Long documents amplified terminology drift and formatting reconstruction issues.',
                ],
                summary: 'Designed an internal web app for first-draft patent translation, combining staged LLM prompting, proofreading support, terminology consistency handling, and DOCX export.',
                beforeSummary: 'Patent translation required internal handling, consistent technical terms, and output that reviewers could work with directly.',
                afterSummary: 'Split translation into staged processing steps, added terminology guidance across sections, and reconstructed results into usable DOCX files for downstream review.',
                context: [
                    'Legal and engineering teams needed faster first-draft patent translations they could still review seriously.',
                    'The real need was a usable translation workflow, not just a model that outputs translated text.',
                ],
                constraint: [
                    'Patent content was sensitive and required internal handling.',
                    'The workflow had to support formal wording, technical terms, and document structure across long files.',
                ],
                myRole: [
                    'The workflow was split into separate stages instead of treating translation as a one-shot prompt task.',
                    'Upload, staged processing, terminology support, and export were structured to work together in one internal web app.',
                ],
                systemDesign: [
                    'Separated translation, proofreading, and terminology support into staged processing steps.',
                    'Added document parsing and reconstruction so the output could be exported in a usable `.docx` format rather than copied manually.',
                ],
                outcome: [
                    'Reduced friction for handling confidential patent translation internally.',
                    'Made first-draft output easier to review and keep consistent across sections.',
                ],
                problemSolved: [
                    'Sensitive patent documents were not suitable for external translation tools.',
                    'General-purpose translation output was inconsistent across formal wording, technical terms, and file structure.',
                ],
                implementationHighlights: [
                    'Turned translation into a staged workflow with distinct responsibilities instead of a single prompt.',
                    'Integrated upload, processing, terminology support, and `.docx` export in one internal app.',
                    'Used prompt rules and prior context handling to improve cross-section consistency.',
                ],
                impact: [
                    'Made first-draft patent translation more reviewable and more consistent for legal and engineering teams.',
                    'Packaged LLM translation capability into an internal workflow teams could reuse.',
                ],
                cardTags: ['Long-Form Translation', 'Document Intelligence', 'Terminology Consistency', 'Productionized Internal Tool'],
            },
            zh: {
                title: '專利翻譯流程 Web App',
                role: 'AI Application Engineer',
                company: 'PixArt Imaging Inc.',
                shortDescription: '設計內部 Web App，用於產生專利文件初版翻譯，結合階段式 LLM 提示、校稿輔助、術語一致性處理與 DOCX 匯出。',
                description: '這是一個以專利初版翻譯與後續審閱支援為重點的內部翻譯 workflow。',
                keyFeatures: [
                    '針對長篇專利文件的階段式翻譯與校稿流程',
                    '跨段落的術語一致性支援',
                    '可匯出 DOCX 文件的內部 Web App',
                ],
                challenges: [
                    '專利翻譯需要支援正式專利語氣與技術術語。',
                    '文件一長，術語漂移與格式重建問題就會被放大。',
                ],
                summary: '設計內部 Web App，用於產生專利文件初版翻譯，結合階段式 LLM 提示、校稿輔助、術語一致性處理與 DOCX 匯出。',
                beforeSummary: '專利翻譯需要在內部環境處理，同時兼顧技術術語一致性與可供審閱者後續編修的文件輸出。',
                afterSummary: '將翻譯拆分為多個處理階段，加入跨段落術語輔助，並將結果重建為可供後續審閱與編修的 DOCX 文件。',
                context: [
                    '法務與工程團隊需要更快取得可審閱的專利翻譯初稿。',
                    '真正要解的是一個可使用的翻譯流程，而不是只讓模型吐出翻譯文字。',
                ],
                constraint: [
                    '專利內容具有敏感性，需在內部環境處理。',
                    '流程需要支援正式語氣、技術術語與長文件的結構處理。',
                ],
                myRole: [
                    '我把整個流程拆成多個階段，而不是把翻譯當成一次性 prompt 問題。',
                    '我負責設計上傳、分階段處理、術語支援與輸出在同一個內部 Web App 中的串接方式。',
                ],
                systemDesign: [
                    '將翻譯、校稿與術語支援拆成階段式處理步驟。',
                    '加上文件解析與重建能力，讓輸出結果能以可用的 `.docx` 形式交付，而不是手動複製貼上。',
                ],
                outcome: [
                    '降低機密專利翻譯在內部處理時的摩擦成本。',
                    '讓初稿更容易維持跨段落一致性，也更方便後續人工審閱。',
                ],
                problemSolved: [
                    '敏感專利文件不適合交給外部翻譯工具。',
                    '一般翻譯工具難以同時處理正式語氣、技術術語與文件格式。',
                ],
                implementationHighlights: [
                    '把翻譯做成階段式 workflow，而不是單一 prompt。',
                    '整合上傳、翻譯、術語支援與 `.docx` 匯出成同一個內部工具。',
                    '利用 prompt 規則與前文控制提升跨段落的一致性。',
                ],
                impact: [
                    '讓法務與工程團隊更容易處理可審閱的專利翻譯初稿。',
                    '把 LLM 翻譯能力包裝成可重複使用的內部流程。',
                ],
                cardTags: ['長文翻譯', '文件智能處理', '術語一致性', '工具化落地'],
            },
        },
    },
    {
        id: 'auto-minutes-system',
        category: 'PixArt',
        visualType: 'meeting-intelligence',
        period: '2025/11 - 2026/01',
        companyId: 'pixart',
        heroBadges: ['Meeting Intelligence Workflow', 'Transcript to Summary', 'Internal Audio Processing'],
        heroImage: '/images/projects/meeting-minutes-hero.svg',
        techStack: ['Python', 'Speech-to-Text', 'Speaker Segmentation', 'vLLM', 'Workflow Automation'],
        translations: {
            en: {
                title: 'Meeting Intelligence Workflow',
                role: 'AI Application Engineer',
                company: 'PixArt Imaging Inc.',
                shortDescription: 'Built an internal workflow that turned meeting audio into usable transcripts and summaries for teams that could not rely on public meeting tools.',
                description: 'A workflow for turning internal meeting audio into structured outputs.',
                keyFeatures: [
                    'Audio-to-transcript workflow with speaker-aware processing',
                    'Structured summarization pipeline for internal meeting notes',
                    'Processing optimizations for repeated uploads and long recordings',
                ],
                challenges: [
                    'Raw meeting audio was too messy to be useful without multiple processing steps.',
                    'Teams needed outputs they could act on, not just transcripts.',
                ],
                summary: 'Built an internal workflow that turned meeting audio into usable transcripts and summaries for teams that could not rely on public meeting tools.',
                beforeSummary: 'Meeting audio could not simply be dropped into public summarization tools, and turning transcripts into usable minutes took too much manual effort.',
                afterSummary: 'Transcription, speaker handling, LLM structuring, and summary output were combined into an internal meeting intelligence workflow.',
                context: [
                    'Teams needed help moving from raw meeting recordings to usable notes and action-ready summaries.',
                    'The product goal was to reduce manual follow-up work after meetings, not just to transcribe audio.',
                ],
                constraint: [
                    'Audio handling had to stay inside internal processing constraints.',
                    'Long recordings and multi-speaker conversations made the workflow computationally and structurally messy.',
                ],
                myRole: [
                    'The workflow covered audio ingestion through structured output.',
                    'Multiple processing steps were arranged so the final output would be useful to people, not just technically complete.',
                ],
                systemDesign: [
                    'Combined transcription, speaker-aware segmentation, text cleanup, and LLM summarization into one staged workflow.',
                    'Added caching and long-audio handling so the system could be used repeatedly on real meeting files.',
                ],
                outcome: [
                    'Reduced manual work needed to turn internal recordings into meeting minutes.',
                    'Made internal audio processing more usable as a recurring workflow rather than an ad hoc script.',
                ],
                problemSolved: [
                    'Teams lacked a practical way to turn internal meeting audio into usable notes and summaries.',
                    'Manual cleanup and summarization of transcripts was too time-consuming for recurring meetings.',
                ],
                implementationHighlights: [
                    'Built a staged pipeline from audio ingestion to transcript cleanup and structured summary generation.',
                    'Handled multi-speaker scenarios and long recordings in a way that supported repeated operational use.',
                    'Added caching to avoid redundant processing on repeated uploads.',
                ],
                impact: [
                    'Turned raw internal audio into outputs teams could review and reuse.',
                    'Showed how speech, text structuring, and summarization could be combined into a practical internal workflow.',
                ],
                cardTags: ['Meeting Workflow', 'Structured Output', 'Internal Processing'],
            },
            zh: {
                title: '會議智慧流程',
                role: 'AI Application Engineer',
                company: 'PixArt Imaging Inc.',
                shortDescription: '建立內部會議智慧 workflow，將會議音檔轉成可用的逐字稿與摘要，降低對外部會議工具的依賴。',
                description: '這是一個把內部會議音檔整理成結構化輸出的 workflow。',
                keyFeatures: [
                    '從音檔到逐字稿的 speaker-aware workflow',
                    '將逐字稿整理成內部可用的摘要與會議紀錄',
                    '針對長音檔與重複上傳做處理優化',
                ],
                challenges: [
                    '原始音檔很混亂，若沒有多階段處理，很難直接變成可用內容。',
                    '團隊需要的是能拿來用的會議輸出，而不只是逐字稿。',
                ],
                summary: '建立內部會議智慧 workflow，將會議音檔轉成可用的逐字稿與摘要，降低對外部會議工具的依賴。',
                beforeSummary: '會議音檔不能直接丟到外部工具處理，而人工整理逐字稿與會議摘要又非常耗時。',
                afterSummary: '整合轉錄、講者處理、LLM 整理與摘要輸出，建立可在內部環境運作的會議智慧流程。',
                context: [
                    '團隊需要把原始會議錄音更快地轉成可讀、可整理、可追蹤的會議內容。',
                    '這個專案真正想解的是會後整理成本，而不是單純做語音辨識。',
                ],
                constraint: [
                    '音檔處理必須符合內部處理限制。',
                    '長音檔與多講者情境讓整個流程在運算與結構上都更複雜。',
                ],
                myRole: [
                    '我負責設計從音檔輸入到結構化輸出的整體 workflow。',
                    '我關心的不是單一步驟準不準，而是多個步驟串起來後，最後能不能真的幫使用者省時間。',
                ],
                systemDesign: [
                    '把轉錄、講者處理、文字整理與 LLM 摘要串成 staged workflow。',
                    '加入快取與長音檔處理機制，讓它能反覆處理真實會議資料。',
                ],
                outcome: [
                    '降低把內部錄音整理成會議紀錄的人工作業量。',
                    '讓內部音檔處理從臨時腳本變成可重複使用的流程。',
                ],
                problemSolved: [
                    '團隊缺少一個能把內部會議音檔整理成可用筆記與摘要的實際流程。',
                    '逐字稿後續的人工清理與整理成本太高，不適合重複發生的會議場景。',
                ],
                implementationHighlights: [
                    '建立從音檔輸入到逐字稿清理與結構化摘要輸出的 staged pipeline。',
                    '處理多講者與長音檔情境，使流程能支撐重複性的內部使用。',
                    '加入快取避免重複上傳時重算。',
                ],
                impact: [
                    '讓團隊能把原始內部音檔轉成可檢閱、可整理、可追蹤的輸出。',
                    '示範語音、文字整理與摘要能力如何被組合成真正可用的工作流程。',
                ],
                cardTags: ['會議智慧流程', '結構化輸出', '內部處理'],
            },
        },
    },
    {
        id: 'auo-assistant',
        category: 'AUO',
        visualType: 'manufacturing-assistant',
        period: '2023 - 2025',
        companyId: 'auo',
        heroBadges: ['Manufacturing Decision Support', 'Cross-Source Reasoning', 'Agent Workflow'],
        heroImage: '/images/projects/manufacturing-assistant-hero.svg',
        techStack: ['Python', 'LangGraph', 'RAG', 'Neo4j', 'SQL Tools'],
        translations: {
            en: {
                title: 'Manufacturing Knowledge Assistant',
                role: 'AI Engineer / Project Leader',
                company: 'AUO Corporation',
                shortDescription: 'Evolved a manufacturing assistant from basic knowledge retrieval into a decision-support workflow that could reason across documents, SQL tools, and process knowledge.',
                description: 'A domain-aware assistant built for analysis rather than generic Q&A.',
                keyFeatures: [
                    'Decision-support workflow for investigations and engineering analysis',
                    'Orchestration across retrieval, SQL tools, APIs, and domain reasoning',
                    'Knowledge representation for process and equipment relationships',
                ],
                challenges: [
                    'Manufacturing questions often depended on multiple data sources and process context at once.',
                    'Teams needed support for judgment, not just a nicer search box.',
                ],
                summary: 'Evolved a manufacturing assistant from basic knowledge retrieval into a decision-support workflow that could reason across documents, SQL tools, and process knowledge.',
                beforeSummary: 'Engineers had to piece together manufacturing issues across documents, tables, and process knowledge before they could even form a useful hypothesis.',
                afterSummary: 'Retrieval, SQL tools, knowledge modeling, and agent workflow design were combined into a decision-support system that could help structure investigation work.',
                context: [
                    'Engineering teams needed help investigating manufacturing issues that crossed documents, data tables, and process knowledge.',
                    'The challenge was less about text generation and more about supporting real analytical judgment.',
                ],
                constraint: [
                    'Relevant information lived across multiple systems and required domain context to interpret.',
                    'Any AI support had to be structured enough to avoid loose, ungrounded answers.',
                ],
                myRole: [
                    'The assistant was reframed from a retrieval tool into a decision-support workflow.',
                    'Tool use, reasoning steps, and domain representation were designed to work together as one system.',
                ],
                systemDesign: [
                    'Combined retrieval, SQL access, domain relationships, and agent orchestration into one structured analysis flow.',
                    'Used knowledge representation and tool routing so the assistant could support investigation instead of only retrieving text.',
                ],
                outcome: [
                    'Made manufacturing investigations easier to structure and faster to start.',
                    'Moved the assistant closer to practical engineering support rather than generic Q&A.',
                ],
                problemSolved: [
                    'Manufacturing investigations required jumping across multiple sources before a useful analysis could begin.',
                    'Basic retrieval alone was not enough for operational decision support.',
                ],
                implementationHighlights: [
                    'Expanded the assistant from document retrieval to structured decision-support workflow.',
                    'Integrated retrieval, SQL tools, knowledge modeling, and agent-style orchestration.',
                    'Focused the system on investigation support instead of open-ended chatbot behavior.',
                ],
                impact: [
                    'Improved how engineering teams approached cross-source manufacturing analysis.',
                    'Created a stronger foundation for domain-aware AI support in operations.',
                ],
                cardTags: ['Manufacturing Knowledge Integration', 'RAG Application', 'Multi-Agent System', 'Data Query Assistant'],
            },
            zh: {
                title: '製造知識助理',
                role: 'AI Engineer / Project Leader',
                company: 'AUO Corporation',
                shortDescription: '將製造知識助理由基本檢索工具演進成 decision-support workflow，支援跨文件、SQL 工具與製程知識的判斷。',
                description: '這是一個為分析與判斷支援設計，而不是只做問答的製造助理。',
                keyFeatures: [
                    '支援調查與分析的決策輔助 workflow',
                    '串接檢索、SQL 工具、API 與領域知識',
                    '用知識表示描述設備、製程與術語關係',
                ],
                challenges: [
                    '製造問題常常同時牽涉多個資料來源與製程上下文。',
                    '團隊要的不是更漂亮的搜尋框，而是能協助判斷的工具。',
                ],
                summary: '將製造知識助理由基本檢索工具演進成 decision-support workflow，支援跨文件、SQL 工具與製程知識的判斷。',
                beforeSummary: '工程師面對製造問題時，往往要先自己在文件、資料表與製程知識之間來回比對，才能形成初步判斷。',
                afterSummary: '整合檢索、SQL 工具、知識表示與 agent workflow，形成可輔助分析的決策支援系統。',
                context: [
                    '工程團隊需要更快地調查跨文件、跨資料表與跨製程知識的製造問題。',
                    '這個需求重點不在文字生成，而在於協助真實分析判斷。',
                ],
                constraint: [
                    '關鍵資訊分散在多個系統中，且需要製程脈絡才能解讀。',
                    'AI 支援若沒有結構化設計，就容易產生不夠 grounded 的回答。',
                ],
                myRole: [
                    '我把助理重新定義成 decision-support workflow，而不是單純檢索工具。',
                    '我規劃工具調用、推理步驟與領域知識表示如何互相配合。',
                ],
                systemDesign: [
                    '把檢索、SQL 存取、知識關係與 agent orchestration 串成結構化分析流程。',
                    '透過知識表示與工具路由，讓系統支援調查判斷，而不只是找文字。',
                ],
                outcome: [
                    '讓製造問題調查更容易起步，也更容易被結構化。',
                    '把助理推向更貼近實務工程支援的方向，而不是停留在一般問答。',
                ],
                problemSolved: [
                    '製造調查必須跨多個資料來源切換，起手成本高。',
                    '只有基本檢索，無法支援實際的營運判斷需求。',
                ],
                implementationHighlights: [
                    '把助理從文件檢索擴充成結構化 decision-support workflow。',
                    '整合檢索、SQL 工具、知識表示與 agent orchestration。',
                    '讓系統更聚焦在分析支援，而不是開放式聊天。',
                ],
                impact: [
                    '改善工程團隊進行跨來源製造分析的方式。',
                    '為營運現場建立更貼近領域脈絡的 AI 支援基礎。',
                ],
                cardTags: ['製造知識整合', 'RAG 應用', 'Multi-Agent', '資料查詢助理'],
            },
        },
    },
    {
        id: 'auo-yield',
        category: 'AUO',
        visualType: 'yield-optimization',
        period: '2021 - 2023',
        companyId: 'auo',
        heroBadges: ['Yield Decision Workflow', 'Explainable Recommendation', 'Cross-Factory Analytics'],
        heroImage: '/images/projects/yield-optimization-hero.svg',
        techStack: ['Python', 'Scikit-learn', 'LIME', 'Genetic Algorithm', 'SQL / ETL'],
        translations: {
            en: {
                title: 'Yield Optimization Workflow',
                role: 'AI Engineer / Optimization Lead',
                company: 'AUO Corporation',
                shortDescription: 'Designed a cross-factory workflow that turned process variability into explainable parameter recommendations engineers could act on.',
                description: 'A manufacturing optimization workflow built for adoption, not just prediction.',
                keyFeatures: [
                    'Cross-factory data normalization and recommendation workflow',
                    'Optimization outputs framed as operational recommendations',
                    'Explainability layer to support engineering review and adoption',
                ],
                challenges: [
                    'Factories used inconsistent process definitions and data semantics.',
                    'Recommendations needed to be explainable enough for engineers to trust them.',
                ],
                summary: 'Designed a cross-factory workflow that turned process variability into explainable parameter recommendations engineers could act on.',
                beforeSummary: 'Similar products made in different factories showed yield gaps, but teams lacked a practical way to turn that variability into usable improvement actions.',
                afterSummary: 'A cross-factory analytics and optimization workflow translated process differences into explainable recommendations for engineering teams.',
                context: [
                    'Different factories produced similar products with meaningful yield variation.',
                    'The real business need was not another model score, but recommendations teams could operationalize.',
                ],
                constraint: [
                    'Data semantics varied across sites and needed normalization first.',
                    'Recommendations had to be explainable enough for engineers to review and trust.',
                ],
                myRole: [
                    'The workflow was designed around adoption: how data should be standardized, how optimization should run, and how results should be communicated.',
                    'Analysis output was shaped into something production teams could use in decision-making.',
                ],
                systemDesign: [
                    'Combined cross-site data normalization, optimization logic, and explainability into one workflow.',
                    'Framed outputs as parameter and equipment recommendations rather than opaque prediction scores.',
                ],
                outcome: [
                    'Helped teams identify actionable optimization directions across factories.',
                    'Improved adoption by making model output easier to interpret and discuss.',
                ],
                problemSolved: [
                    'Cross-factory yield differences were hard to analyze consistently.',
                    'Model outputs without explanation were difficult for operations teams to use.',
                ],
                implementationHighlights: [
                    'Standardized process and sensor meaning across factories before optimization.',
                    'Built a recommendation workflow instead of a score-only analytics pipeline.',
                    'Added explainability to help engineers review and act on output.',
                ],
                impact: [
                    '+1.43% yield improvement and -12.62% defect reduction in the target scenario.',
                    'Saved roughly 300 man-hours per month through better optimization targeting.',
                ],
                cardTags: ['Optimization Workflow', 'Explainable Recommendation', 'Cross-Factory'],
            },
            zh: {
                title: '良率優化流程',
                role: 'AI Engineer / Optimization Lead',
                company: 'AUO Corporation',
                shortDescription: '建立跨廠良率分析與優化 workflow，將製程差異轉成工程團隊可採取的可解釋建議。',
                description: '這是一套為採用而設計的製造優化 workflow，而不只是預測模型。',
                keyFeatures: [
                    '跨廠資料標準化與推薦流程',
                    '把優化結果轉成可操作的製程建議',
                    '加入 explainability，支援工程師檢視與採用',
                ],
                challenges: [
                    '不同工廠之間的製程定義與資料語意並不一致。',
                    '若建議無法被解釋，工程團隊就很難真的採用。',
                ],
                summary: '建立跨廠良率分析與優化 workflow，將製程差異轉成工程團隊可採取的可解釋建議。',
                beforeSummary: '相似產品在不同工廠出現良率差異，但團隊缺少一個能把這些差異轉成改善行動的實際流程。',
                afterSummary: '建立跨廠分析與優化 workflow，把製程差異轉成工程團隊可理解、可採取的建議。',
                context: [
                    '不同工廠在生產相似產品時出現明顯良率差異。',
                    '真正的需求不是多一個模型分數，而是能被營運化的改善建議。',
                ],
                constraint: [
                    '跨廠資料語意不一致，必須先做標準化。',
                    '輸出結果必須夠可解釋，工程團隊才有可能信任並採用。',
                ],
                myRole: [
                    '我從採用角度設計整體流程，包括資料標準化、優化方式與結果呈現。',
                    '我關注的是如何讓分析結果變成生產團隊能拿來判斷的內容。',
                ],
                systemDesign: [
                    '把跨廠資料標準化、優化邏輯與 explainability 串成單一 workflow。',
                    '輸出不是抽象分數，而是設備與參數調整建議。',
                ],
                outcome: [
                    '幫助團隊更快找到跨廠優化方向。',
                    '提高模型結果被理解、被討論、被採用的可能性。',
                ],
                problemSolved: [
                    '跨廠良率差異難以用一致方式分析。',
                    '沒有說明脈絡的模型輸出，很難被現場團隊採用。',
                ],
                implementationHighlights: [
                    '先標準化工廠間的資料與製程語意，再進行優化。',
                    '把優化做成 recommendation workflow，而不是只做評分。',
                    '加入 explainability 協助工程師理解與採取行動。',
                ],
                impact: [
                    '目標情境下提升良率 1.43%，缺陷下降 12.62%。',
                    '每月約節省 300 人工時的分析與改善成本。',
                ],
                cardTags: ['優化流程', '可解釋建議', '跨廠分析'],
            },
        },
    },
    {
        id: 'personal-gym-tracker-v2',
        category: 'Personal',
        visualType: 'gym-tracker',
        period: '2026 - Present',
        companyId: 'pixart',
        heroBadges: ['Personal Workflow Product', 'Behavior Tracking', 'Private Data Control'],
        heroImage: '/images/projects/gym-coach-hero.svg',
        techStack: ['React', 'TypeScript', 'Cloudflare Workers', 'Cloudflare D1', 'LLM API'],
        link: 'https://github.com/bruce-lcz/my-gym-tracker',
        translations: {
            en: {
                title: 'Private AI Gym Coach',
                role: 'Developer / Designer',
                company: 'Personal Project',
                shortDescription: 'A personal product that turned frustrating gym tracking habits into a workflow I actually wanted to use, with private data control and lightweight AI assistance.',
                description: 'A side project that still reflects product thinking and workflow design.',
                keyFeatures: [
                    'Training log and recommendation workflow centered on personal ownership',
                    'Simple AI assistance for exercise mapping and coaching suggestions',
                    'Custom interface design built around repeated daily use',
                ],
                challenges: [
                    'Most existing fitness apps felt bloated, ad-heavy, or restrictive around personal data.',
                    'The product needed to stay lightweight while still being useful every day.',
                ],
                summary: 'A personal product that turned frustrating gym tracking habits into a workflow I actually wanted to use, with private data control and lightweight AI assistance.',
                beforeSummary: 'Existing gym apps felt generic, cluttered, and too controlling over personal data and daily tracking habits.',
                afterSummary: 'A private training workflow was built around custom tracking, lightweight AI support, and a UI designed for repeated daily use.',
                context: [
                    'This started from a personal frustration with existing fitness apps rather than a client requirement.',
                    'The interesting part was still workflow design: making a product worth returning to every day.',
                ],
                constraint: [
                    'The product needed to stay simple, personal, and low-friction.',
                    'AI support had to be helpful without turning the app into a gimmick.',
                ],
                myRole: [
                    'Product design, interface design, and implementation were handled end-to-end.',
                    'AI was used selectively, with straightforward product design carrying the rest.',
                ],
                systemDesign: [
                    'Combined workout tracking, personal data storage, lightweight AI mapping, and coaching suggestions.',
                    'Kept the workflow focused on repeated daily use instead of feature sprawl.',
                ],
                outcome: [
                    'Created a personal product that better matched my own behavior and preferences.',
                    'Served as a smaller-scale example of turning workflow friction into product design.',
                ],
                problemSolved: [
                    'Commercial fitness apps often introduced more friction than value for daily tracking.',
                    'Personal data ownership and repeated use experience mattered more than feature volume.',
                ],
                implementationHighlights: [
                    'Built a custom product around a real repeated-use workflow.',
                    'Used AI only where it reduced friction, such as exercise mapping and coaching prompts.',
                    'Designed the UI to feel personal and distinct rather than template-driven.',
                ],
                impact: [
                    'Improved the day-to-day usability of personal workout tracking for my own routine.',
                    'Demonstrated product judgment about when AI should support a workflow and when it should stay in the background.',
                ],
                cardTags: ['Personal Product', 'Private Workflow', 'Selective AI Use'],
            },
            zh: {
                title: '私人 AI 健身教練',
                role: 'Developer / Designer',
                company: 'Personal Project',
                shortDescription: '把健身紀錄 App 的使用摩擦轉成更適合日常追蹤的個人產品，並保留資料自主權與適度 AI 支援。',
                description: '雖然是 side project，但仍然反映了 workflow 與產品設計的思考。',
                keyFeatures: [
                    '以個人資料主控為核心的訓練紀錄與建議流程',
                    '在需要時提供運動項目對應與訓練建議的輕量 AI 支援',
                    '圍繞日常重複使用設計的客製介面',
                ],
                challenges: [
                    '多數健身 App 太雜、太廣告導向，或對個人資料控制不友善。',
                    '產品必須夠輕、夠順，才會真的每天打開。',
                ],
                summary: '把健身紀錄 App 的使用摩擦轉成更適合日常追蹤的個人產品，並保留資料自主權與適度 AI 支援。',
                beforeSummary: '現有健身 App 常常太通用、太擁擠，也不太符合資料控制與日常紀錄節奏的需求。',
                afterSummary: '建立私人訓練 workflow，結合客製紀錄方式、輕量 AI 支援與可持續使用的介面。',
                context: [
                    '這個專案來自個人使用痛點，而不是企業需求。',
                    '但它仍然是一個 workflow 設計問題：怎麼做出一個自己願意每天回來用的產品。',
                ],
                constraint: [
                    '產品必須保持簡單、個人化、低摩擦。',
                    'AI 只能在真正減少操作負擔時出現，不能變成噱頭。',
                ],
                myRole: [
                    '我從產品設計、介面設計到實作都自己完成。',
                    '我決定哪些地方需要 AI，哪些地方其實用單純產品設計就夠了。',
                ],
                systemDesign: [
                    '整合訓練紀錄、個人資料儲存、輕量 AI 對應與訓練建議。',
                    '整體流程以每天反覆使用為核心，而不是堆疊功能。',
                ],
                outcome: [
                    '做出更符合自己行為與偏好的個人產品。',
                    '也成為一個較小尺度但很真實的 workflow 產品化案例。',
                ],
                problemSolved: [
                    '市售健身 App 在日常紀錄上常帶來比價值更多的摩擦。',
                    '個人資料掌控權與長期使用體驗，比功能數量更重要。',
                ],
                implementationHighlights: [
                    '圍繞真實重複使用情境打造客製產品。',
                    '只在能減少摩擦的地方使用 AI，例如運動項目對應與建議。',
                    '介面以個人化與辨識度為優先，而不是套版式設計。',
                ],
                impact: [
                    '改善我自己日常訓練紀錄的使用體驗。',
                    '也呈現我如何判斷 AI 應該出現在 workflow 的哪裡、又該退到哪裡。',
                ],
                cardTags: ['個人產品', '私人 workflow', '選擇性 AI 支援'],
            },
        },
    },
    {
        id: 'auo-pm',
        category: 'AUO',
        visualType: 'preventive-maintenance',
        period: '2022 - 2024',
        companyId: 'auo',
        heroBadges: ['Maintenance Planning Workflow', 'Trend-Based Prediction', 'Scheduling Support'],
        heroImage: '/images/projects/preventive-maintenance-hero.svg',
        techStack: ['Python', 'PyTorch', 'LSTM', 'Custom Loss Function', 'FastAPI'],
        translations: {
            en: {
                title: 'Preventive Maintenance Workflow',
                role: 'AI Engineer / Project Lead',
                company: 'AUO Corporation',
                shortDescription: 'Built a maintenance planning workflow that focused prediction on actionable anomaly trends rather than isolated point accuracy.',
                description: 'A predictive workflow designed around maintenance decisions.',
                keyFeatures: [
                    'Trend-aware prediction workflow for maintenance planning',
                    'Custom objective design aligned with operational decisions',
                    'Scheduling-oriented outputs rather than raw model metrics',
                ],
                challenges: [
                    'Maintenance actions depend more on evolving trends than on single-point forecast accuracy.',
                    'Prediction quality had to connect back to scheduling and downtime decisions.',
                ],
                summary: 'Built a maintenance planning workflow that focused prediction on actionable anomaly trends rather than isolated point accuracy.',
                beforeSummary: 'Traditional maintenance scheduling followed fixed cycles and often reacted too slowly to emerging equipment issues.',
                afterSummary: 'A prediction workflow emphasized anomaly trends and fed scheduling decisions with more usable maintenance signals.',
                context: [
                    'Operations teams needed better timing signals for maintenance planning.',
                    'The goal was to support maintenance decisions, not just to improve a benchmark score.',
                ],
                constraint: [
                    'Failure patterns were imbalanced and hard to model.',
                    'Outputs needed to map back to scheduling tradeoffs and operational timing.',
                ],
                myRole: [
                    'Model design was aligned with the actual maintenance decision problem.',
                    'The predictive approach and output design were both shaped around scheduling workflows.',
                ],
                systemDesign: [
                    'Used time-series prediction with a custom objective shaped around trend consistency.',
                    'Integrated results into maintenance planning logic so outputs were more actionable.',
                ],
                outcome: [
                    'Improved defect prediction error and reduced wasted maintenance effort.',
                    'Made predictive output more useful for planning rather than just monitoring.',
                ],
                problemSolved: [
                    'Fixed-cycle maintenance was not responsive enough to evolving equipment conditions.',
                    'Raw prediction accuracy did not automatically translate into useful maintenance action.',
                ],
                implementationHighlights: [
                    'Designed a custom loss function around trend behavior rather than point-by-point fit.',
                    'Focused the workflow on planning support and timing decisions.',
                    'Connected predictive outputs to scheduling use cases.',
                ],
                impact: [
                    'Reduced defect prediction error by 20% (RMSE).',
                    'Saved about 90 man-hours per month in maintenance-related effort.',
                ],
                cardTags: ['Planning Workflow', 'Trend Signals', 'Scheduling Support'],
            },
            zh: {
                title: '預防保養流程',
                role: 'AI Engineer / Project Lead',
                company: 'AUO Corporation',
                shortDescription: '建立預防保養 workflow，讓預測更聚焦在可採取行動的異常趨勢，而不是只追求單點準確度。',
                description: '這是一套圍繞保養決策而設計的預測 workflow。',
                keyFeatures: [
                    '支援保養規劃的趨勢導向預測流程',
                    '讓模型目標更貼近營運決策的 custom objective design',
                    '輸出以排程支援為主，而不是只有模型指標',
                ],
                challenges: [
                    '保養行動更依賴異常趨勢，而不是單點預測值。',
                    '預測品質必須能回到排程與停機決策上才有意義。',
                ],
                summary: '建立預防保養 workflow，讓預測更聚焦在可採取行動的異常趨勢，而不是只追求單點準確度。',
                beforeSummary: '傳統保養排程多半依固定週期進行，對設備異常變化反應不夠快。',
                afterSummary: '把趨勢導向的預測結果接到保養排程判斷上，讓系統提供更可用的維護訊號。',
                context: [
                    '營運團隊需要更好的保養時機判斷訊號。',
                    '真正要解的不是模型分數，而是保養決策品質。',
                ],
                constraint: [
                    '故障樣態不平衡，建模難度高。',
                    '輸出結果必須能對應到排程取捨與營運時機。',
                ],
                myRole: [
                    '我把模型設計對齊到真實的保養決策問題上。',
                    '我同時負責預測方法與結果如何支援排程 workflow。',
                ],
                systemDesign: [
                    '用時間序列預測搭配以趨勢一致性為核心的 custom objective。',
                    '把結果整合進保養規劃邏輯，讓輸出更具可行動性。',
                ],
                outcome: [
                    '降低預測誤差，也減少不必要的保養作業成本。',
                    '讓預測結果更能支援規劃，而不只是監控。',
                ],
                problemSolved: [
                    '固定週期保養難以及時反映設備狀態變化。',
                    '單純提升預測準確率，並不等於能支援維護決策。',
                ],
                implementationHighlights: [
                    '以趨勢而非單點擬合為核心設計 custom loss function。',
                    '讓整體流程更聚焦在排程支援與時機判斷。',
                    '把預測輸出對接到保養規劃情境。',
                ],
                impact: [
                    '缺陷預測誤差下降 20%（RMSE）。',
                    '每月約節省 90 人工時。',
                ],
                cardTags: ['保養規劃流程', '趨勢訊號', '排程支援'],
            },
        },
    },
    {
        id: 'address-normalization',
        category: 'Research',
        visualType: 'address-normalization',
        period: '2019',
        companyId: 'academia-sinica',
        heroBadges: ['Data Quality Workflow', 'Normalization Logic', 'Structured Address Parsing'],
        heroImage: '/images/projects/address-normalization-hero.svg',
        techStack: ['Python', 'Django', 'PostgreSQL', 'REST API'],
        translations: {
            en: {
                title: 'Address Normalization System',
                role: 'Research Intern',
                company: 'Academia Sinica',
                shortDescription: 'Built a data quality workflow for parsing and normalizing messy Taiwan address data across heterogeneous datasets.',
                description: 'A data normalization system focused on structured quality improvement.',
                keyFeatures: [
                    'Normalization logic for ambiguous address strings',
                    'Attribute database for structured address interpretation',
                    'Web interface for sampling and verification workflows',
                ],
                challenges: [
                    'Taiwan address formats were highly inconsistent and ambiguous.',
                    'Normalization needed both parsing logic and a usable verification flow.',
                ],
                summary: 'Built a data quality workflow for parsing and normalizing messy Taiwan address data across heterogeneous datasets.',
                beforeSummary: 'Address data across datasets was inconsistent, unstructured, and difficult to analyze reliably.',
                afterSummary: 'Normalization logic, structured address attributes, and a verification workflow were combined to improve data quality at scale.',
                context: [
                    'Research datasets contained large amounts of inconsistent address text.',
                    'The core need was better downstream data quality, not just string parsing by itself.',
                ],
                constraint: [
                    'Address formats were highly ambiguous and varied across sources.',
                    'Users needed a way to inspect and verify normalization results.',
                ],
                myRole: [
                    'Both the parsing logic and the surrounding workflow for checking results were designed together.',
                    'The goal was to turn messy raw data into something structured enough to reuse confidently.',
                ],
                systemDesign: [
                    'Combined normalization rules, an address attribute database, and a web-based sampling workflow.',
                    'Used structured attributes to make downstream handling more consistent.',
                ],
                outcome: [
                    'Improved data quality for address-heavy datasets.',
                    'Delivered a more reliable normalization workflow for future GIS and research use.',
                ],
                problemSolved: [
                    'Unstructured address formats made downstream analysis inconsistent and error-prone.',
                    'Normalization required both logic and review support.',
                ],
                implementationHighlights: [
                    'Built rule-based normalization and structured address attributes.',
                    'Added a web workflow for review and sampling.',
                    'Framed the work as a data quality system rather than a single parser.',
                ],
                impact: [
                    'Improved address data usability across heterogeneous datasets.',
                    'Won the Best Student Paper Award at TGIS 2019.',
                ],
                cardTags: ['Data Quality', 'Normalization Workflow', 'Structured Parsing'],
            },
            zh: {
                title: '地址正規化系統',
                role: 'Research Intern',
                company: 'Academia Sinica',
                shortDescription: '建立資料品質 workflow，用來解析並正規化不同資料集裡混亂的台灣地址資料。',
                description: '這是一套聚焦在結構化資料品質改善的正規化系統。',
                keyFeatures: [
                    '處理模糊地址字串的正規化邏輯',
                    '支援結構化判讀的地址屬性資料庫',
                    '供抽樣檢查與驗證使用的 Web 流程',
                ],
                challenges: [
                    '台灣地址格式高度不一致，也常有歧義。',
                    '正規化除了 parsing logic，也需要可檢查的驗證流程。',
                ],
                summary: '建立資料品質 workflow，用來解析並正規化不同資料集裡混亂的台灣地址資料。',
                beforeSummary: '不同資料集裡的地址資料格式混亂、不一致，難以可靠地後續分析。',
                afterSummary: '整合正規化邏輯、地址屬性資料與驗證流程，改善大規模資料品質。',
                context: [
                    '研究資料集中有大量格式不一致的地址字串。',
                    '真正要解的是後續資料品質問題，而不只是字串 parsing。',
                ],
                constraint: [
                    '地址格式高度模糊，而且來源多樣。',
                    '使用者需要一個能抽樣檢查與驗證結果的流程。',
                ],
                myRole: [
                    '我同時設計 parsing logic 與結果檢查 workflow。',
                    '重點是把原始混亂資料整理成後續能穩定使用的結構化資訊。',
                ],
                systemDesign: [
                    '整合正規化規則、地址屬性資料庫與 Web 抽樣檢查流程。',
                    '用結構化屬性提升下游處理的一致性。',
                ],
                outcome: [
                    '提升地址資料在研究與 GIS 場景中的可用性。',
                    '建立更可靠的正規化 workflow。',
                ],
                problemSolved: [
                    '非結構化地址格式讓後續分析容易出錯且不一致。',
                    '正規化不只需要邏輯，也需要檢查支持。',
                ],
                implementationHighlights: [
                    '建立規則式正規化與地址屬性資料。',
                    '補上 Web 化的檢查與抽樣流程。',
                    '把工作定位成資料品質系統，而不是單一 parser。',
                ],
                impact: [
                    '改善異質資料集中的地址資料可用性。',
                    '獲得 2019 TGIS 最佳學生論文獎。',
                ],
                cardTags: ['資料品質', '正規化流程', '結構化解析'],
            },
        },
    },
];

export const UNIFIED_PROJECTS: UnifiedProject[] = PROJECT_ORDER
    .map((id) => UNIFIED_PROJECTS_MAP.find((project) => project.id === id))
    .filter((project): project is UnifiedProject => project !== undefined);

import { UnifiedProject } from './types';

export const PROJECT_ORDER: string[] = [
    'pixart-genai-hub',
    'legal-contract-comparison',
    'patent-translation-service',
    'auto-minutes-system',
    'auo-assistant',
    'auo-yield',
    'personal-gym-tracker-v2',
    'auo-pm',
    'address-normalization',
];

const UNIFIED_PROJECTS_MAP: UnifiedProject[] = [
    {
        id: 'pixart-genai-hub',
        category: 'PixArt',
        visualType: 'genai-workspace',
        period: '2025 - Present',
        companyId: 'pixart',
        heroBadges: ['Internal GenAI Workspace', 'Multimodal Engineering Support', 'Model Access Layer'],
        heroImage: '/images/projects/genai-workspace-hero.svg',
        techStack: ['Python', 'vLLM', 'Model Serving', 'Multimodal LLM', 'Docker'],
        translations: {
            en: {
                title: 'GenAI Workspace for Engineering Teams',
                role: 'AI Solution Architect',
                company: 'PixArt Imaging Inc.',
                shortDescription: 'Designed an internal GenAI workspace that gave engineering teams usable access to models, multimodal tools, and daily AI workflows inside a constrained environment.',
                description: 'Built as a reusable internal workspace rather than a single-use demo.',
                keyFeatures: [
                    'Internal workspace for coding, document analysis, and multimodal engineering support',
                    'Tiered model access for quick tasks versus deeper reasoning workflows',
                    'Shared interaction patterns that made AI tools easier to adopt across teams',
                ],
                challenges: [
                    'Teams needed AI support that fit internal infrastructure and actual engineering habits.',
                    'Model availability alone was not enough; the workflow needed to be easy to access and use repeatedly.',
                ],
                summary: 'Designed an internal GenAI workspace that gave engineering teams usable access to models, multimodal tools, and daily AI workflows inside a constrained environment.',
                beforeSummary: 'Engineering teams had fragmented access to AI capabilities, with no stable internal workspace for coding help, document reading, or multimodal analysis.',
                afterSummary: 'I turned model serving, multimodal utilities, and workflow framing into a shared internal workspace that teams could actually use in daily engineering work.',
                context: [
                    'Engineering teams wanted practical AI support for coding, document reading, and technical analysis.',
                    'The need was broader than a chatbot: teams needed a place where multiple AI capabilities could be used as part of recurring work.',
                ],
                constraint: [
                    'Tool choices had to fit internal infrastructure, access controls, and different task depths.',
                    'A useful solution needed to balance fast responses, stronger reasoning, and multimodal input handling.',
                ],
                myRole: [
                    'I framed the problem as a product and workflow design task rather than a pure model deployment task.',
                    'I designed how teams would access different model capabilities and how the workspace should support repeated use.',
                ],
                systemDesign: [
                    'Built a shared workspace around internal model serving, multimodal processing, and task-oriented interaction flows.',
                    'Used tiered model routing so lightweight tasks and deeper reasoning requests could be handled differently without exposing that complexity to users.',
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
                    'Connected model serving, multimodal processing, and workflow-oriented access patterns into one product surface.',
                    'Supported both quick-response and deeper reasoning use cases through tiered model access.',
                ],
                impact: [
                    'Helped engineering teams use AI in recurring work instead of isolated demos.',
                    'Provided a reusable internal foundation for later document, coding, and analysis workflows.',
                ],
                cardTags: ['Internal AI Product', 'Workflow Entry Point', 'Multimodal Support'],
            },
            zh: {
                title: '工程團隊 GenAI Workspace',
                role: 'AI Solution Architect',
                company: 'PixArt Imaging Inc.',
                shortDescription: '內部 GenAI workspace，讓工程團隊能在受限環境中穩定使用模型、多模態工具與日常 AI workflow。',
                description: '這不是單一 demo，而是一個可被團隊反覆使用的內部工作空間。',
                keyFeatures: [
                    '支援 coding、文件閱讀與多模態工程分析的內部 workspace',
                    '依任務深度切分模型使用方式，兼顧反應速度與推理需求',
                    '用一致的互動方式降低團隊使用 AI 的門檻',
                ],
                challenges: [
                    '團隊需要的是能融入既有工作習慣的 AI 支援，而不只是多一個模型入口。',
                    '單純把模型架起來，不等於大家真的會在日常工作中使用它。',
                ],
                summary: '內部 GenAI workspace，讓工程團隊能在受限環境中穩定使用模型、多模態工具與日常 AI workflow。',
                beforeSummary: '工程團隊雖然想用 AI，但缺少一個穩定的內部工作空間來處理 coding、文件閱讀與多模態分析。',
                afterSummary: '整合模型服務、多模態工具與任務導向互動，形成可共享的工程 AI workspace，讓 AI 進入日常工程流程。',
                context: [
                    '工程團隊希望把 AI 用在 coding、文件理解與技術分析等日常工作。',
                    '真正的需求不是一個聊天機器人，而是一個能承接多種 AI 能力的內部工作空間。',
                ],
                constraint: [
                    '方案必須符合內部基礎設施、權限控管與不同任務深度的需求。',
                    '同時要兼顧快速回應、較深推理與多模態輸入處理。',
                ],
                myRole: [
                    '我把這個需求拆解成產品與 workflow 設計問題，而不是只當成模型部署問題。',
                    '我負責規劃不同模型能力該如何被團隊存取，以及整個 workspace 的使用方式。',
                ],
                systemDesign: [
                    '以內部模型服務、多模態處理與任務導向互動流程為核心，設計共享 workspace。',
                    '透過分層模型路由，把快速任務與深度推理分開處理，但不把底層複雜度丟給使用者。',
                ],
                outcome: [
                    '讓工程團隊有一個可實際使用的 GenAI 入口，而不是零散的 AI 嘗試。',
                    '為後續的文件、coding 與分析 workflow 建立可延伸的內部基礎。',
                ],
                problemSolved: [
                    '團隊缺少一個能在日常工程流程中穩定使用多種 AI 能力的內部入口。',
                    '只有模型 API 或 endpoint，並不足以形成可被採用的工作流程。',
                ],
                implementationHighlights: [
                    '把需求設計成共享 workspace，而不是一次性的 AI 工具。',
                    '整合模型服務、多模態處理與 workflow 導向的互動設計。',
                    '用分層模型使用方式支援快速回應與深度推理兩類任務。',
                ],
                impact: [
                    '讓 AI 更容易進入工程團隊的日常工作，而不只是停留在 demo。',
                    '建立後續內部 AI workflow 能持續擴充的基礎。',
                ],
                cardTags: ['內部 AI 產品', 'Workflow 入口', '多模態支援'],
            },
        },
    },
    {
        id: 'legal-contract-comparison',
        category: 'PixArt',
        visualType: 'legal-comparison',
        period: '2026/02 - 2026/03',
        companyId: 'pixart',
        heroBadges: ['Confidential Review Workflow', 'Document Comparison', 'Validation Layer'],
        heroImage: '/images/projects/legal-document-comparison-hero.svg',
        techStack: ['Python', 'FastAPI', 'vLLM', 'Document Parsing', 'Validation Logic'],
        translations: {
            en: {
                title: 'Legal Document Comparison Web App',
                role: 'AI Solution Architect',
                company: 'PixArt Imaging Inc.',
                shortDescription: 'Built an internal document comparison workflow that helped legal teams review confidential contracts without relying on external AI services.',
                description: 'A workflow-first legal review product for confidential documents.',
                keyFeatures: [
                    'Internal review app for comparing originals against signed or scanned copies',
                    'Difference analysis paired with deterministic validation to reduce review risk',
                    'Dual-pane review interface for fast clause-by-clause inspection',
                ],
                challenges: [
                    'Scanned and signed files introduced unstable structure, annotations, and formatting noise.',
                    'AI output alone was not sufficient for legal review; verification logic was required.',
                ],
                summary: 'Built an internal document comparison workflow that helped legal teams review confidential contracts without relying on external AI services.',
                beforeSummary: 'Legal reviewers had to manually compare original files and signed scans, while confidential documents could not be sent to external AI tools.',
                afterSummary: 'I turned document parsing, difference analysis, validation logic, and a dual-pane review UI into an internal comparison workflow the legal team could actually use.',
                context: [
                    'The legal team needed a faster way to review signed or scanned contracts against source documents.',
                    'The goal was not to showcase OCR or LLMs, but to reduce slow and error-prone manual comparison work.',
                ],
                constraint: [
                    'Documents were confidential and could not leave the company environment.',
                    'Scanned files were structurally unstable, and legal review could not depend on unverified model output.',
                ],
                myRole: [
                    'I decomposed the review problem into parsing, comparison, validation, and human review steps.',
                    'I designed the workflow and packaged it as an internal web app instead of a loose backend pipeline.',
                ],
                systemDesign: [
                    'Combined document parsing, AI-assisted difference analysis, deterministic validation, and a side-by-side review interface.',
                    'Used validation logic to check reconstructed text so reviewers could trust what they were seeing before acting on it.',
                ],
                outcome: [
                    'Reduced manual review effort for confidential contracts.',
                    'Created a legal review workflow that balanced AI assistance with control and verification.',
                ],
                problemSolved: [
                    'Confidential legal documents could not be uploaded to external review tools.',
                    'Manual comparison of originals and signed scans was slow and easy to miss details in.',
                    'Reviewers needed a workflow that preserved legal accuracy rather than a raw AI summary.',
                ],
                implementationHighlights: [
                    'Built an internal web app around the full review workflow, not just a comparison API.',
                    'Integrated document parsing with AI-assisted comparison and deterministic validation.',
                    'Designed a synchronized dual-pane interface for efficient human review.',
                ],
                impact: [
                    'Helped legal teams compare sensitive documents without sending data outside the company.',
                    'Showed how AI document analysis could be turned into a usable internal product instead of a fragile demo.',
                ],
                cardTags: ['Confidential Workflow', 'Document Review', 'Validation Design'],
            },
            zh: {
                title: '法律文件比對 Web App',
                role: 'AI Solution Architect',
                company: 'PixArt Imaging Inc.',
                shortDescription: '建立內部法律文件比對 workflow，讓法務能在不依賴外部 AI 服務的情況下處理機密合約審閱。',
                description: '這是一個以 workflow 為核心的法律文件審閱產品。',
                keyFeatures: [
                    '比較原稿與簽署或掃描版本的內部審閱工具',
                    '差異分析搭配 deterministic validation，降低審閱風險',
                    '雙欄對照介面，支援快速逐條檢視',
                ],
                challenges: [
                    '掃描與簽署文件常帶有註記、章戳與格式噪音，內容結構不穩定。',
                    '法務審閱不能只依賴模型輸出，還需要額外驗證機制。',
                ],
                summary: '建立內部法律文件比對 workflow，讓法務能在不依賴外部 AI 服務的情況下處理機密合約審閱。',
                beforeSummary: '法務需要人工比對原稿與簽署掃描件，而機密文件又不能直接交給外部 AI 工具處理。',
                afterSummary: '整合文件解析、差異分析、驗證邏輯與雙欄審閱介面，形成內部可用的文件比對流程。',
                context: [
                    '法務團隊需要更快地比對原稿與簽署或掃描後的合約內容。',
                    '這個專案的重點不是展示 OCR 或 LLM，而是降低人工比對的耗時與漏看風險。',
                ],
                constraint: [
                    '文件屬於機密資料，不能外流到外部服務。',
                    '掃描文件格式不穩，且法務審閱不能依賴未驗證的模型輸出。',
                ],
                myRole: [
                    '我把需求拆成文件解析、差異比對、驗證與人工審閱四個步驟。',
                    '我負責設計整體 workflow，並把它包裝成內部 Web App，而不是零散的後端流程。',
                ],
                systemDesign: [
                    '整合文件解析、AI 差異分析、deterministic validation 與雙欄審閱介面。',
                    '用驗證邏輯檢查重組後文字，讓使用者在審閱時能更放心依據結果判斷。',
                ],
                outcome: [
                    '降低法務審閱機密合約時的人工作業量。',
                    '建立一套兼顧 AI 協助與可控性的法律文件審閱流程。',
                ],
                problemSolved: [
                    '機密法律文件不能上傳到外部 AI 或雲端審閱工具。',
                    '人工比對原稿與簽署掃描件耗時且容易漏看細節。',
                    '法務需要的是能保留準確性的審閱流程，而不是一段原始模型輸出。',
                ],
                implementationHighlights: [
                    '把完整審閱流程做成內部 Web App，而不是只做一個 comparison API。',
                    '整合文件解析、AI 差異分析與 deterministic validation。',
                    '設計雙欄同步介面，提升人工審閱效率。',
                ],
                impact: [
                    '讓法務能在不外流資料的前提下處理敏感文件比對。',
                    '示範 AI 文件分析如何被產品化成真正可用的內部工具。',
                ],
                cardTags: ['機密審閱流程', '文件比對', '驗證設計'],
            },
        },
    },
    {
        id: 'patent-translation-service',
        category: 'PixArt',
        visualType: 'patent-translation',
        period: '2026/01 - 2026/02',
        companyId: 'pixart',
        heroBadges: ['Patent Translation Workflow', 'Terminology Consistency', 'docx Export Pipeline'],
        heroImage: '/images/projects/patent-translation-hero.svg',
        techStack: ['Python', 'FastAPI', 'vLLM', 'Prompt Design', 'docx Processing'],
        translations: {
            en: {
                title: 'Patent Translation Workflow Web App',
                role: 'AI Solution Architect',
                company: 'PixArt Imaging Inc.',
                shortDescription: 'Designed a staged translation workflow for confidential patent documents, turning draft translation, proofreading, terminology control, and docx output into one internal tool.',
                description: 'An internal translation workflow focused on legal and technical document quality.',
                keyFeatures: [
                    'Staged translation and proofreading flow for long-form patent documents',
                    'Terminology consistency controls across sections',
                    'Document reconstruction and export in a team-usable web app',
                ],
                challenges: [
                    'Patent translation had to preserve both legal tone and technical terminology.',
                    'Long documents amplified terminology drift and formatting reconstruction issues.',
                ],
                summary: 'Designed a staged translation workflow for confidential patent documents, turning draft translation, proofreading, terminology control, and docx output into one internal tool.',
                beforeSummary: 'Patent translation had to balance legal tone, technical terminology, and document structure, but sensitive content was not suitable for external tools.',
                afterSummary: 'I designed a staged LLM workflow that packaged translation, proofreading, terminology consistency, and docx export into an internal web app.',
                context: [
                    'Legal and engineering teams needed faster first-draft patent translations they could still review seriously.',
                    'The real need was a usable translation workflow, not just a model that outputs translated text.',
                ],
                constraint: [
                    'Patent content was sensitive and required internal handling.',
                    'The workflow had to preserve legal tone, technical terms, and document structure across long files.',
                ],
                myRole: [
                    'I mapped the workflow into separate stages instead of treating translation as a one-shot prompt task.',
                    'I designed how upload, staged processing, terminology control, and export should work together in one product.',
                ],
                systemDesign: [
                    'Separated translation, proofreading, and terminology handling into staged processing steps.',
                    'Added document parsing and reconstruction so the output could be exported in a usable `.docx` format rather than copied manually.',
                ],
                outcome: [
                    'Reduced friction for handling confidential patent translation internally.',
                    'Improved consistency and usability of first-draft output for downstream review.',
                ],
                problemSolved: [
                    'Sensitive patent documents were not suitable for external translation tools.',
                    'General-purpose translation output was inconsistent across legal tone, technical terms, and file structure.',
                ],
                implementationHighlights: [
                    'Turned translation into a staged workflow with distinct responsibilities instead of a single prompt.',
                    'Integrated upload, processing, terminology control, and `.docx` export in one internal app.',
                    'Used prompt rules and prior context handling to improve cross-section consistency.',
                ],
                impact: [
                    'Made patent translation more reviewable and more consistent for legal and engineering teams.',
                    'Packaged LLM translation capability into an internal workflow teams could reuse.',
                ],
                cardTags: ['Translation Workflow', 'Terminology Control', 'Internal Web App'],
            },
            zh: {
                title: '專利翻譯流程 Web App',
                role: 'AI Solution Architect',
                company: 'PixArt Imaging Inc.',
                shortDescription: '將機密專利文件的翻譯需求拆成 staged workflow，整合翻譯、校稿、術語控制與 docx 匯出，形成內部工具。',
                description: '這是一個以法律與技術文件品質為重點的內部翻譯 workflow。',
                keyFeatures: [
                    '針對長篇專利文件的 staged 翻譯與校稿流程',
                    '跨段落的術語一致性控制',
                    '可直接匯出文件的內部 Web App',
                ],
                challenges: [
                    '專利翻譯同時要兼顧法律語氣與技術術語。',
                    '文件一長，術語漂移與格式重建問題就會被放大。',
                ],
                summary: '將機密專利文件的翻譯需求拆成 staged workflow，整合翻譯、校稿、術語控制與 docx 匯出，形成內部工具。',
                beforeSummary: '專利翻譯需要兼顧法律語氣、技術術語與文件格式，但敏感內容又不適合交給外部工具。',
                afterSummary: '透過 staged LLM workflow 串接翻譯、校稿、術語一致性與 docx 輸出，形成內部可用的專利翻譯工具。',
                context: [
                    '法務與工程團隊需要更快取得可審閱的專利翻譯初稿。',
                    '真正要解的是一個可使用的翻譯流程，而不是只讓模型吐出翻譯文字。',
                ],
                constraint: [
                    '專利內容具有敏感性，需在內部環境處理。',
                    '流程必須同時維持法律語氣、技術術語與長文件的結構一致性。',
                ],
                myRole: [
                    '我把整個流程拆成多個階段，而不是把翻譯當成一次性 prompt 問題。',
                    '我負責設計上傳、分階段處理、術語控制與輸出在同一個產品中的串接方式。',
                ],
                systemDesign: [
                    '將翻譯、校稿與術語處理拆成 staged processing steps。',
                    '加上文件解析與重建能力，讓輸出結果能以可用的 `.docx` 形式交付，而不是手動複製貼上。',
                ],
                outcome: [
                    '降低機密專利翻譯在內部處理時的摩擦成本。',
                    '提升初稿的一致性與後續人工審閱的可用性。',
                ],
                problemSolved: [
                    '敏感專利文件不適合交給外部翻譯工具。',
                    '一般翻譯工具難以同時處理法律語氣、技術術語與文件格式。',
                ],
                implementationHighlights: [
                    '把翻譯做成 staged workflow，而不是單一 prompt。',
                    '整合上傳、翻譯、術語控制與 `.docx` 匯出成同一個內部工具。',
                    '利用 prompt 規則與前文控制提升跨段落的一致性。',
                ],
                impact: [
                    '讓法務與工程團隊更容易處理可審閱的專利翻譯初稿。',
                    '把 LLM 翻譯能力包裝成可重複使用的內部流程。',
                ],
                cardTags: ['專利翻譯流程', '術語控制', '內部 Web App'],
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
                afterSummary: 'I combined transcription, speaker handling, LLM structuring, and summary output into an internal meeting intelligence workflow.',
                context: [
                    'Teams needed help moving from raw meeting recordings to usable notes and action-ready summaries.',
                    'The product goal was to reduce manual follow-up work after meetings, not just to transcribe audio.',
                ],
                constraint: [
                    'Audio handling had to stay inside internal processing constraints.',
                    'Long recordings and multi-speaker conversations made the workflow computationally and structurally messy.',
                ],
                myRole: [
                    'I designed the workflow from audio ingestion to structured output.',
                    'I focused on how multiple processing steps should cooperate so the final output would be useful to people, not just technically complete.',
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
                role: 'AI Solution Architect',
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
                afterSummary: 'I combined retrieval, SQL tools, knowledge modeling, and agent workflow design into a decision-support system that could help structure investigation work.',
                context: [
                    'Engineering teams needed help investigating manufacturing issues that crossed documents, data tables, and process knowledge.',
                    'The challenge was less about text generation and more about supporting real analytical judgment.',
                ],
                constraint: [
                    'Relevant information lived across multiple systems and required domain context to interpret.',
                    'Any AI support had to be structured enough to avoid loose, ungrounded answers.',
                ],
                myRole: [
                    'I reframed the assistant from a retrieval tool into a decision-support workflow.',
                    'I designed how tool use, reasoning steps, and domain representation should work together.',
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
                cardTags: ['Decision Support', 'Cross-Source Reasoning', 'Domain Workflow'],
            },
            zh: {
                title: '製造知識助理',
                role: 'AI Solution Architect',
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
                cardTags: ['決策支援', '跨來源判斷', '領域 workflow'],
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
                afterSummary: 'I built a cross-factory analytics and optimization workflow that translated process differences into explainable recommendations for engineering teams.',
                context: [
                    'Different factories produced similar products with meaningful yield variation.',
                    'The real business need was not another model score, but recommendations teams could operationalize.',
                ],
                constraint: [
                    'Data semantics varied across sites and needed normalization first.',
                    'Recommendations had to be explainable enough for engineers to review and trust.',
                ],
                myRole: [
                    'I designed the workflow around adoption: how data should be standardized, how optimization should run, and how results should be communicated.',
                    'I focused on turning analysis output into something production teams could use in decision-making.',
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
                afterSummary: 'I designed a private training workflow with custom tracking, lightweight AI support, and a UI I would actually keep using.',
                context: [
                    'This started from a personal frustration with existing fitness apps rather than a client requirement.',
                    'The interesting part was still workflow design: making a product worth returning to every day.',
                ],
                constraint: [
                    'The product needed to stay simple, personal, and low-friction.',
                    'AI support had to be helpful without turning the app into a gimmick.',
                ],
                myRole: [
                    'I handled product design, interface design, and implementation end-to-end.',
                    'I decided where AI added value and where straightforward product design was enough.',
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
                afterSummary: 'I built a prediction workflow that emphasized anomaly trends and fed scheduling decisions with more usable maintenance signals.',
                context: [
                    'Operations teams needed better timing signals for maintenance planning.',
                    'The goal was to support maintenance decisions, not just to improve a benchmark score.',
                ],
                constraint: [
                    'Failure patterns were imbalanced and hard to model.',
                    'Outputs needed to map back to scheduling tradeoffs and operational timing.',
                ],
                myRole: [
                    'I aligned model design with the actual maintenance decision problem.',
                    'I led both the predictive approach and how outputs would support scheduling workflows.',
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
                afterSummary: 'I built normalization logic, structured address attributes, and a verification workflow to improve data quality at scale.',
                context: [
                    'Research datasets contained large amounts of inconsistent address text.',
                    'The core need was better downstream data quality, not just string parsing by itself.',
                ],
                constraint: [
                    'Address formats were highly ambiguous and varied across sources.',
                    'Users needed a way to inspect and verify normalization results.',
                ],
                myRole: [
                    'I designed both the parsing logic and the surrounding workflow for checking results.',
                    'I focused on turning messy raw data into something structured enough to reuse confidently.',
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

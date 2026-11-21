export type WorkflowThemeName =
    | 'indigo'
    | 'teal'
    | 'sky'
    | 'amber'
    | 'violet'
    | 'blue'
    | 'rose'
    | 'cyan'
    | 'emerald'
    | 'orange';

/** Lucide icon names used by workflow nodes. Keep this list curated so every
 * diagram uses the same outline icon family while still matching node intent.
 */
export type WorkflowIconName =
    | 'FileLock2' | 'Workflow' | 'DatabaseBackup' | 'ShieldCheck' | 'FileCheck2' | 'Monitor'
    | 'FileInput' | 'Split' | 'BrainCircuit' | 'GitCompare' | 'MapPin' | 'MonitorSmartphone'
    | 'Database' | 'RefreshCw' | 'FileOutput' | 'CalendarDays' | 'Presentation' | 'Eye' | 'Braces' | 'UserCheck' | 'SearchCheck'
    | 'ListTodo' | 'GitFork' | 'Zap' | 'LayoutDashboard' | 'Files' | 'ScanText' | 'FileDiff'
    | 'FileText' | 'FileCog' | 'Languages' | 'BookOpenCheck' | 'SpellCheck2' | 'Mic' | 'Activity' | 'Speech'
    | 'Users' | 'AlignLeft' | 'ClipboardList' | 'Upload' | 'Binary' | 'Combine' | 'FileCode2' | 'Download' | 'Link2'
    | 'Factory' | 'SlidersHorizontal' | 'Boxes' | 'Gauge' | 'Lightbulb' | 'BadgeCheck' | 'MessageCircle' | 'Search'
    | 'Table2' | 'Network' | 'Bot' | 'GitBranch' | 'Dumbbell' | 'Wand2' | 'BarChart3' | 'LineChart'
    | 'TrendingUp' | 'ShieldAlert' | 'CalendarClock' | 'Wrench' | 'ListChecks' | 'Send';

export interface WorkflowStep {
    title: string;
    icon: WorkflowIconName;
    subtitle: string;
    highlight?: boolean;
    badge?: string;
}

export interface LocalizedWorkflowStep {
    title: string;
    subtitle: string;
    badge?: string;
}

export interface WorkflowDefinition {
    eyebrow: string;
    eyebrowZh: string;
    tags: string[];
    tagsZh: string[];
    steps: WorkflowStep[];
    stepsZh: LocalizedWorkflowStep[];
    footerNote: string;
    footerNoteZh: string;
    boundaryBadge: string;
    boundaryBadgeZh: string;
    theme: WorkflowThemeName;
}

/**
 * The workflow diagrams are intentionally data-driven. Keeping labels separate
 * from the renderer prevents hand-tuned layouts from drifting between projects
 * and keeps English and Traditional Chinese labels cleanly synchronized.
 */
export const WORKFLOW_DEFINITIONS: Record<string, WorkflowDefinition> = {
    'workforce-insight-platform': {
        eyebrow: 'Work-Hour Review · System Architecture',
        eyebrowZh: '主管工時審核 · 系統架構流程',
        tags: ['Guarded NL2SQL', 'Historical Org Scope', 'Offline Intranet'],
        tagsZh: ['受控 NL2SQL', '歷史組織權限', '封閉內網部署'],
        steps: [
            { title: 'Encrypted HR', icon: 'FileLock2', subtitle: 'CP950 / Encrypted XLSX' },
            { title: 'Pandas ETL', icon: 'Workflow', subtitle: 'Leave & Holiday Rules' },
            { title: 'Scoped Snapshot', icon: 'DatabaseBackup', subtitle: 'Month-Scoped SQLite' },
            { title: 'Guarded SQL', icon: 'ShieldCheck', subtitle: 'Single-SELECT AST Whitelist', highlight: true, badge: 'Guardrail' },
            { title: 'Evidence Audit', icon: 'FileCheck2', subtitle: 'Grounded Reply & Logs' },
            { title: 'Manager Portal', icon: 'Monitor', subtitle: 'React / FastAPI / Docker' },
        ],
        stepsZh: [
            { title: '加密 HR', subtitle: 'CP950 / 密碼加密活頁簿' },
            { title: 'Pandas ETL', subtitle: '請假展開與假日規則' },
            { title: '權限快照', subtitle: '按月隔離 SQLite' },
            { title: '受控 SQL', subtitle: '單一 SELECT AST 白名單', badge: '核心防護' },
            { title: '證據稽核', subtitle: '附來源回答與日誌' },
            { title: '主管入口', subtitle: 'React / FastAPI / Docker' },
        ],
        footerNote: 'Server resolves manager scope & period before SQL execution—LLM never touches the primary database.',
        footerNoteZh: '由伺服器端先解析主管權限與月份並建立隔離快照，LLM 不直接接觸主資料庫。',
        boundaryBadge: 'Read-Only Snapshot · Audit Logged',
        boundaryBadgeZh: '唯讀隔離快照 · 全程稽核',
        theme: 'indigo',
    },
    'ds-grammar-chk': {
        eyebrow: 'Datasheet Review · Multimodal Pipeline',
        eyebrowZh: '技術規格書審查 · 多模態流程',
        tags: ['Technical Datasheet LLM', 'Multimodal VLM', 'Web · CLI · MCP Core'],
        tagsZh: ['技術規格書 LLM', '多模態 VLM 圖文審查', 'Web · CLI · MCP 共用核心'],
        steps: [
            { title: 'DOCX Ingest', icon: 'FileInput', subtitle: 'Tables & EMF/WMF Vectors' },
            { title: 'Token Chunker', icon: 'Split', subtitle: 'Header & Path Preserved' },
            { title: 'Dual LLM / VLM', icon: 'BrainCircuit', subtitle: 'Specs, Units & Pinouts', highlight: true, badge: 'Multimodal' },
            { title: 'Global Pass', icon: 'GitCompare', subtitle: 'Terminology & Noise Filter' },
            { title: 'Location Map', icon: 'MapPin', subtitle: 'Section, Cell & Fig Ref' },
            { title: 'Multi-Surface', icon: 'MonitorSmartphone', subtitle: 'Web / CLI / MCP & XLSX' },
        ],
        stepsZh: [
            { title: 'DOCX 匯入', subtitle: '表格與 EMF/WMF 向量' },
            { title: 'Token 分塊', subtitle: '保留標題與路徑脈絡' },
            { title: '雙 LLM / VLM', subtitle: '規格、電氣單位與接腳圖', badge: '多模態核心' },
            { title: '全域一致性', subtitle: '跨文件術語與降噪過濾' },
            { title: '位置對應', subtitle: '章節、儲存格與圖號定位' },
            { title: '多介面交付', subtitle: 'Web / CLI / MCP 與 XLSX' },
        ],
        footerNote: 'Shared grammar_checker core pairs token-bounded chunking with headless EMF conversion and traceable coordinates.',
        footerNoteZh: '以共用 grammar_checker 核心串聯 Token 分塊、無頭向量轉檔與章節／表格座標定位。',
        boundaryBadge: 'On-Prem Intranet · Excel / MD Export',
        boundaryBadgeZh: '內網部署 · Excel／MD 匯出',
        theme: 'teal',
    },
    'llm-usage-dashboard': {
        eyebrow: 'LLM Gateway & Ops · Telemetry Pipeline',
        eyebrowZh: 'LLM Gateway 與營運 · 遙測架構',
        tags: ['LLM Gateway & Routing', 'Usage Metering', 'Read-Only Telemetry'],
        tagsZh: ['LLM Gateway 與路由', '用量計量追蹤', '唯讀遙測分析'],
        steps: [
            { title: 'LLM Gateway', icon: 'Network', subtitle: 'API Keys, Routing & GPU Mon', highlight: true, badge: 'Access Layer' },
            { title: 'Read-Only Sync', icon: 'RefreshCw', subtitle: 'Advisory Lock & Watermarks' },
            { title: 'PostgreSQL Marts', icon: 'Database', subtitle: 'Minute Facts & Daily Rollups' },
            { title: 'Token Metering', icon: 'BarChart3', subtitle: 'Persisted vs Estimated' },
            { title: 'Ops Dashboard', icon: 'Monitor', subtitle: 'Drill-Downs & Async Export' },
            { title: 'Weekly Reports', icon: 'CalendarDays', subtitle: 'Scheduled PDF & HTML' },
        ],
        stepsZh: [
            { title: 'LLM Gateway', subtitle: 'API Key、路由與 GPU 監控', badge: '統一入口' },
            { title: '唯讀同步', subtitle: 'Advisory Lock 與同步水位' },
            { title: 'PostgreSQL 倉儲', subtitle: '分鐘明細與日彙整指標' },
            { title: 'Token 計量', subtitle: '區分實記與估算來源' },
            { title: '營運儀表板', subtitle: '深度篩選與非同步匯出' },
            { title: '自動週報', subtitle: '排程產出 PDF 與 HTML' },
        ],
        footerNote: 'Decoupled read-only analytics keeps heavy reporting queries completely isolated from live inference gateways.',
        footerNoteZh: '透過解耦的唯讀分析倉儲與冪等同步，確保重度報表查詢不影響線上推論效能。',
        boundaryBadge: 'Zero-Write Upstream · Transparent Metering',
        boundaryBadgeZh: '上游零寫入 · 透明計量',
        theme: 'sky',
    },
    'issue-kb': {
        eyebrow: 'Evidence-Grounded RAG · Knowledge Pipeline',
        eyebrowZh: '可溯源工程知識庫 · 擷取流程',
        tags: ['Evidence-Grounded RAG', 'Multimodal VLM', 'Human-in-the-Loop'],
        tagsZh: ['可溯源 RAG 知識庫', '多模態 VLM 解析', '人工審查閘門'],
        steps: [
            { title: 'Deck Ingestion', icon: 'Presentation', subtitle: 'PPTX / DOCX / PDF Render' },
            { title: 'Section Split', icon: 'Split', subtitle: 'Dividers + Fallback Rules' },
            { title: 'VLM Analysis', icon: 'Eye', subtitle: 'Diagrams & Prior Context' },
            { title: 'Typed Synthesis', icon: 'Braces', subtitle: 'Pydantic & Quote Check' },
            { title: 'Human Review', icon: 'UserCheck', subtitle: 'Streamlit Approval Gate', highlight: true, badge: 'Human Gate' },
            { title: 'Chroma QA', icon: 'SearchCheck', subtitle: 'SHA-256 IDs & Page Citations' },
        ],
        stepsZh: [
            { title: '文件匯入', subtitle: 'PPTX / DOCX / PDF 渲染' },
            { title: '章節切分', subtitle: '過場頁與規則備援' },
            { title: 'VLM 頁面分析', subtitle: '圖表判讀與前頁脈絡' },
            { title: '結構化合成', subtitle: 'Pydantic 與引文檢核' },
            { title: '人工審查', subtitle: 'Streamlit 核可閘門', badge: '審查閘門' },
            { title: 'Chroma 問答', subtitle: 'SHA-256 去重與頁碼引用' },
        ],
        footerNote: 'No unverified claim enters Chroma—every synthesized rule links back to its exact source slide and native quote.',
        footerNoteZh: '未經人工審查核可的條目不會進入向量庫，每筆回答皆可跳轉回原始投影片與原文。',
        boundaryBadge: '100% Page Traceability · SHA-256 Dedup',
        boundaryBadgeZh: '100% 頁碼溯源 · 確定性去重',
        theme: 'amber',
    },
    'genai-enablement': {
        eyebrow: 'GenAI Enablement · Closed-Loop Perf Flow',
        eyebrowZh: '企業 GenAI 賦能 · 效能優化閉環',
        tags: ['LLM Observability', 'Prefix Cache & KV Reuse', '20+ Consultations'],
        tagsZh: ['LLM 使用可觀測性', 'Prefix Cache 與推論優化', '20+ 技術諮詢與發布'],
        steps: [
            { title: 'Usage Telemetry', icon: 'Activity', subtitle: 'Tokens, Context & Timeouts' },
            { title: 'Issue Diagnosis', icon: 'SearchCheck', subtitle: 'Logs + 20+ 1-on-1 Sessions' },
            { title: 'Prefix Caching', icon: 'Zap', subtitle: 'Stable KV Prefix & TTFT', highlight: true, badge: 'Perf Core' },
            { title: 'Context Flow', icon: 'SlidersHorizontal', subtitle: 'Compression & Task Split' },
            { title: 'OpenCode Guides', icon: 'FileCode2', subtitle: 'ZH / EN Skills & Guardrails' },
            { title: 'Company Rollout', icon: 'Users', subtitle: 'Mgmt-Announced Portal' },
        ],
        stepsZh: [
            { title: '使用遙測', subtitle: 'Token、長度與逾時指標' },
            { title: '瓶頸診斷', subtitle: '監控紀錄＋20+ 諮詢回饋' },
            { title: 'Prefix Caching', subtitle: '固定 KV 前綴與 TTFT 驗證', badge: '效能核心' },
            { title: '上下文管理', subtitle: 'Context 壓縮與任務拆解' },
            { title: 'OpenCode 教材', subtitle: '雙語 Skills 與安全指引' },
            { title: '全公司推廣', subtitle: '主管審閱公告與自助網站' },
        ],
        footerNote: 'Closed-loop enablement turning production telemetry and 20+ 1-on-1 consultations into durable bilingual playbooks.',
        footerNoteZh: '串聯平台遙測、推論快取最佳實踐與 20+ 次技術諮詢，沉澱為全公司可自主查閱的雙語教材。',
        boundaryBadge: 'ZH / EN Portal · TTFT Verification',
        boundaryBadgeZh: '雙語自助網站 · TTFT 驗證方法',
        theme: 'violet',
    },
    'pixart-genai-hub': {
        eyebrow: 'Internal AI Workspace · Routing Flow',
        eyebrowZh: '工程團隊 GenAI 工作區 · 服務架構',
        tags: ['Air-Gapped Intranet', 'On-Prem vLLM', 'Shared Engineering Hub'],
        tagsZh: ['隔離內網部署', '地端 vLLM 服務', '工程團隊共享工作區'],
        steps: [
            { title: 'Engineering Task', icon: 'ListTodo', subtitle: 'Coding, Docs & Analysis' },
            { title: 'Task Router', icon: 'GitFork', subtitle: 'Access Control & Model Pick', highlight: true, badge: 'Core Hub' },
            { title: 'Fast Serving', icon: 'Zap', subtitle: 'Low-Latency Chat & Code' },
            { title: 'Deep Reasoning', icon: 'BrainCircuit', subtitle: 'Complex Technical Review' },
            { title: 'Doc & Vision', icon: 'Eye', subtitle: 'Multimodal Input Utilities' },
            { title: 'Team Workspace', icon: 'LayoutDashboard', subtitle: 'Reusable Daily Patterns' },
        ],
        stepsZh: [
            { title: '工程任務', subtitle: '程式、文件與技術分析' },
            { title: '任務路由', subtitle: '權限控管與模型分流', badge: '路由核心' },
            { title: '快速模型', subtitle: '低延遲對話與程式輔助' },
            { title: '深度推理', subtitle: '複雜技術問題判讀' },
            { title: '文件與視覺', subtitle: '多模態輔助處理工具' },
            { title: '共享工作區', subtitle: '可重複使用的日常流程' },
        ],
        footerNote: 'Unifies on-prem model serving, document/vision utilities, and repeatable workflows into one engineering entry point.',
        footerNoteZh: '整合地端模型服務、文件／影像工具與任務導向互動模式，讓 AI 自然融入工程日常工作。',
        boundaryBadge: 'On-Prem Serving · Reusable Patterns',
        boundaryBadgeZh: '地端推論 · 可重用工作模式',
        theme: 'blue',
    },
    'legal-contract-comparison': {
        eyebrow: 'Contract Comparison · Review Architecture',
        eyebrowZh: '法務文件比對 · 審查流程',
        tags: ['On-Prem Confidential', 'OCR + Consistency Check', 'Dual-Pane Review'],
        tagsZh: ['地端機密處理', 'OCR 與一致性檢查', '雙欄人工審查'],
        steps: [
            { title: 'Contract Pair', icon: 'Files', subtitle: 'Original DOCX & Signed Scan' },
            { title: 'Parse & OCR', icon: 'ScanText', subtitle: 'Noise, Stamps & Layout' },
            { title: 'Text Validation', icon: 'BadgeCheck', subtitle: 'Structure & Completeness' },
            { title: 'LLM Compare', icon: 'GitCompare', subtitle: 'Clause-Level Diff Detection', highlight: true, badge: 'Diff Engine' },
            { title: 'Dual-Pane UI', icon: 'FileDiff', subtitle: 'Side-by-Side Context View' },
            { title: 'Legal Sign-Off', icon: 'UserCheck', subtitle: 'Human-in-the-Loop Decision' },
        ],
        stepsZh: [
            { title: '合約雙檔輸入', subtitle: '原始檔與簽署／掃描件' },
            { title: '解析與 OCR', subtitle: '處理章戳與版面噪音' },
            { title: '一致性檢核', subtitle: '驗證重組文字完整度' },
            { title: 'LLM 輔助比對', subtitle: '逐條標示實質差異', badge: '比對核心' },
            { title: '雙欄同步介面', subtitle: '保留前後脈絡的差異檢視' },
            { title: '法務人工複核', subtitle: '保留最終人為判斷決策' },
        ],
        footerNote: 'Keeps sensitive contracts strictly on-prem while pairing AI comparison with text checks and dual-pane human review.',
        footerNoteZh: '全程於公司內部處理敏感合約，結合 AI 輔助比對、一致性檢核與雙欄同步審查介面。',
        boundaryBadge: 'Zero External Cloud · Human Review',
        boundaryBadgeZh: '不上雲端 · 保留人工審查',
        theme: 'rose',
    },
    'patent-translation-service': {
        eyebrow: 'Patent Translation · Staged Workflow',
        eyebrowZh: '專利翻譯流程 · 分階段架構',
        tags: ['On-Prem vLLM', 'Staged Translation', 'Terminology & DOCX'],
        tagsZh: ['地端 vLLM', '階段式翻譯流程', '術語一致與 DOCX 匯出'],
        steps: [
            { title: 'Upload Patent', icon: 'FileText', subtitle: 'Internal Long-Form DOCX' },
            { title: 'Parse Structure', icon: 'FileCog', subtitle: 'Claims, Sections & Styles' },
            { title: 'Draft Translate', icon: 'Languages', subtitle: 'Formal Patent Wording' },
            { title: 'Term Consistency', icon: 'BookOpenCheck', subtitle: 'Glossary & Prior Context', highlight: true, badge: 'Term Lock' },
            { title: 'Proofread Pass', icon: 'SpellCheck2', subtitle: 'Technical & Tone Review' },
            { title: 'DOCX Rebuild', icon: 'FileOutput', subtitle: 'Review-Ready .docx File' },
        ],
        stepsZh: [
            { title: '上傳專利檔', subtitle: '內部處理長篇 DOCX 文件' },
            { title: '結構解析', subtitle: '拆解請求項與段落格式' },
            { title: '分階段初譯', subtitle: '符合專利正式語氣規範' },
            { title: '術語一致性', subtitle: '術語控制與前文對齊', badge: '術語鎖定' },
            { title: '校稿複審', subtitle: '技術用語與語氣檢查' },
            { title: 'DOCX 重建', subtitle: '匯出可供審查的 .docx' },
        ],
        footerNote: 'Replaces brittle one-shot prompts with staged parsing, terminology control, proofreading, and DOCX reconstruction.',
        footerNoteZh: '以分階段翻譯、跨段落術語一致、獨立校稿與 DOCX 結構重建，取代易失真的單次翻譯。',
        boundaryBadge: 'Internal Web App · Review-Ready DOCX',
        boundaryBadgeZh: '內部 Web App · 可直接編修',
        theme: 'amber',
    },
    'auto-minutes-system': {
        eyebrow: 'Meeting Intelligence · Offline Audio Flow',
        eyebrowZh: '會議智慧流程 · 離線音訊管線',
        tags: ['Internal Audio Pipeline', 'Speaker Diarization', 'Structured Minutes'],
        tagsZh: ['內部音訊管線', '多講者分段', '結構化會議紀錄'],
        steps: [
            { title: 'Audio Ingestion', icon: 'Mic', subtitle: 'Long Recordings & Cache' },
            { title: 'VAD Segment', icon: 'Activity', subtitle: 'Chunking & Noise Cleanup' },
            { title: 'Offline ASR', icon: 'Speech', subtitle: 'Internal Speech-to-Text' },
            { title: 'Speaker Diarize', icon: 'Users', subtitle: 'Multi-Speaker Attribution' },
            { title: 'LLM Structuring', icon: 'AlignLeft', subtitle: 'Decisions, Risks & Actions', highlight: true, badge: 'Synthesis' },
            { title: 'Action Minutes', icon: 'ClipboardList', subtitle: 'Reviewable Team Output' },
        ],
        stepsZh: [
            { title: '音檔輸入', subtitle: '長錄音檔處理與快取' },
            { title: 'VAD 語音切分', subtitle: '段落分割與靜音清理' },
            { title: '離線語音辨識', subtitle: '內部環境 ASR 轉錄' },
            { title: '講者分段', subtitle: '多講者對話歸屬整理' },
            { title: 'LLM 結構化', subtitle: '整理決議、風險與待辦', badge: '摘要核心' },
            { title: '會議紀錄輸出', subtitle: '供團隊檢閱與追蹤' },
        ],
        footerNote: 'Turns messy multi-speaker recordings into actionable internal minutes with caching for recurring team use.',
        footerNoteZh: '將雜亂的多講者會議錄音整理成可追蹤的決議與待辦，並透過快取支援日常反覆使用。',
        boundaryBadge: 'Offline Internal Flow · Caching Enabled',
        boundaryBadgeZh: '離線內部處理 · 支援快取',
        theme: 'violet',
    },
    'asc-merge-c-generator': {
        eyebrow: 'File-to-Code Tool · Open WebUI Pipeline',
        eyebrowZh: '檔案轉程式工具 · 處理管線',
        tags: ['Open WebUI Tool', 'Raw-Byte Fallback', 'Downloadable C Export'],
        tagsZh: ['Open WebUI 原生工具', '多編碼位元組讀取', '可下載 C 檔匯出'],
        steps: [
            { title: 'Upload ASC', icon: 'Upload', subtitle: 'Single or Multi-File' },
            { title: 'asc_read', icon: 'Binary', subtitle: 'CP950 / Big5 / UTF-8', highlight: true, badge: 'Tool Call' },
            { title: 'Ordered Merge', icon: 'Combine', subtitle: 'Append Init Sequence' },
            { title: 'Generate C', icon: 'FileCode2', subtitle: 'Confirmed Output Format' },
            { title: 'asc_export', icon: 'Download', subtitle: '.c & Merged .asc' },
            { title: 'Nginx Link', icon: 'Link2', subtitle: 'Direct Artifact Delivery' },
        ],
        stepsZh: [
            { title: '上傳 ASC', subtitle: '支援單檔或依序多檔' },
            { title: 'asc_read', subtitle: 'CP950 / Big5 / UTF-8 備援', badge: '編碼防護' },
            { title: '依序合併', subtitle: '保留註解與初始化順序' },
            { title: '產生 C 程式', subtitle: '依確認格式轉出初始化碼' },
            { title: 'asc_export', subtitle: '產出 .c 與合併後 .asc' },
            { title: 'Nginx 下載', subtitle: '提供可點擊下載連結' },
        ],
        footerNote: 'Native Open WebUI tool calling prevents preview garbling and delivers ready-to-download C & ASC artifacts.',
        footerNoteZh: '透過 Open WebUI 原生 Tool Calling 避免預覽亂碼，直接交付可下載的 C 檔與合併 ASC 檔。',
        boundaryBadge: '6-Encoding Fallback · Nginx Delivery',
        boundaryBadgeZh: '6 種編碼備援 · Nginx 交付',
        theme: 'blue',
    },
    'auo-yield': {
        eyebrow: 'Yield Optimization · Cross-Fab Workflow',
        eyebrowZh: '良率優化流程 · 跨廠分析架構',
        tags: ['Cross-Factory Analytics', 'Genetic Optimization', 'LIME Explainability'],
        tagsZh: ['跨廠資料標準化', '基因演算法最佳化', 'LIME 可解釋建議'],
        steps: [
            { title: 'Factory Data', icon: 'Factory', subtitle: 'Multi-Site Process & Sensor' },
            { title: 'Standardize', icon: 'SlidersHorizontal', subtitle: 'Unified Process Definitions' },
            { title: 'Feature Build', icon: 'Boxes', subtitle: 'SQL / ETL Signal Prep' },
            { title: 'GA Optimize', icon: 'Gauge', subtitle: 'Genetic Algorithm Search' },
            { title: 'LIME Explain', icon: 'Lightbulb', subtitle: 'Transparent Factor Impact', highlight: true, badge: 'Trust Layer' },
            { title: 'Action Recs', icon: 'BadgeCheck', subtitle: '+1.43% Yield · −12.62% Def' },
        ],
        stepsZh: [
            { title: '跨廠資料', subtitle: '彙整多廠區製程與感測' },
            { title: '語意標準化', subtitle: '統一跨廠製程欄位定義' },
            { title: '特徵工程', subtitle: 'SQL / ETL 整理關鍵訊號' },
            { title: '基因最佳化', subtitle: '搜尋最適設備與參數組合' },
            { title: 'LIME 可解釋', subtitle: '呈現影響因子的可信說明', badge: '可解釋核心' },
            { title: '落地參數建議', subtitle: '良率 +1.43% · 缺陷 −12.62%' },
        ],
        footerNote: 'Frames optimization as explainable equipment & parameter guidance rather than opaque prediction scores.',
        footerNoteZh: '不輸出黑箱分數，而是將跨廠差異轉成工程團隊能理解、討論並採用的參數建議。',
        boundaryBadge: '+1.43% Yield · ~300 hrs/mo Saved',
        boundaryBadgeZh: '良率 +1.43% · 月省約 300 人時',
        theme: 'emerald',
    },
    'auo-assistant': {
        eyebrow: 'Decision Assistant · Multi-Agent Architecture',
        eyebrowZh: '製造知識助理 · 多代理決策架構',
        tags: ['LangGraph Multi-Agent', 'Neo4j Knowledge Graph', 'Cross-Source Reasoning'],
        tagsZh: ['LangGraph 多代理', 'Neo4j 知識圖譜', '跨來源推理判斷'],
        steps: [
            { title: 'Fab Question', icon: 'MessageCircle', subtitle: 'Cross-Source Issue Query' },
            { title: 'SOP Retrieval', icon: 'Search', subtitle: 'Process Docs & RAG' },
            { title: 'SQL Tooling', icon: 'Table2', subtitle: 'Live Yield & Chamber Data' },
            { title: 'Neo4j KG', icon: 'Network', subtitle: 'Equipment–Process Links', highlight: true, badge: 'Domain Graph' },
            { title: 'Agent Routing', icon: 'Bot', subtitle: 'Multi-Step Tool Orchestration' },
            { title: 'Decision Aid', icon: 'GitBranch', subtitle: 'Grounded Root-Cause Path' },
        ],
        stepsZh: [
            { title: '現場調查提問', subtitle: '跨文件與系統的異常問題' },
            { title: 'SOP 文件檢索', subtitle: '製程知識與規範 RAG' },
            { title: 'SQL 查詢工具', subtitle: '即時良率與機台資料表' },
            { title: 'Neo4j 知識圖譜', subtitle: '關聯設備、製程與術語', badge: '領域知識' },
            { title: '多代理調度', subtitle: 'LangGraph 串接工具推理' },
            { title: '結構化決策輔助', subtitle: '協助形成根因調查脈絡' },
        ],
        footerNote: 'Evolved from basic text search into a LangGraph workflow coordinating RAG, SQL, and Neo4j process graphs.',
        footerNoteZh: '從基本文件檢索演進為結合 RAG、SQL 工具與 Neo4j 製程圖譜的結構化決策支援系統。',
        boundaryBadge: 'RAG + SQL + Neo4j · Investigation Flow',
        boundaryBadgeZh: 'RAG + SQL + 圖譜 · 調查輔助',
        theme: 'cyan',
    },
    'personal-gym-tracker-v2': {
        eyebrow: 'Private AI Gym Coach · Product Flow',
        eyebrowZh: '私人 AI 健身教練 · 產品流程',
        tags: ['Private Data Ownership', 'Cloudflare Workers + D1', 'Selective AI Support'],
        tagsZh: ['個人資料自主', 'Cloudflare Workers + D1', '選擇性 AI 輔助'],
        steps: [
            { title: 'Workout Log', icon: 'Dumbbell', subtitle: 'Low-Friction Daily UI' },
            { title: 'AI Mapping', icon: 'Wand2', subtitle: 'Normalize Free-Text Input' },
            { title: 'Private D1', icon: 'Database', subtitle: 'Cloudflare Workers & D1', highlight: true, badge: 'User Owned' },
            { title: 'Volume Trend', icon: 'BarChart3', subtitle: 'Weekly Load & Progression' },
            { title: 'AI Coach', icon: 'Bot', subtitle: 'Context-Aware Prompts' },
            { title: 'Next Plan', icon: 'CalendarDays', subtitle: 'Repeatable Personal Flow' },
        ],
        stepsZh: [
            { title: '訓練紀錄', subtitle: '低摩擦的日常輸入介面' },
            { title: 'AI 動作對應', subtitle: '自動正規化訓練動作名稱' },
            { title: '私人 D1 儲存', subtitle: 'Cloudflare Workers 與 D1', badge: '資料主控' },
            { title: '訓練量趨勢', subtitle: '週訓練量與負荷變化追蹤' },
            { title: 'AI 教練建議', subtitle: '依個人紀錄提供訓練回饋' },
            { title: '課表延續', subtitle: '可一鍵匯出與長期復盤' },
        ],
        footerNote: 'Uses AI selectively where it removes logging friction while keeping core UX fast, clean, and user-owned.',
        footerNoteZh: '只在真正減少操作摩擦處導入 AI，其餘回歸輕量產品設計與個人資料完全自主。',
        boundaryBadge: 'React + TS · Full Data Control',
        boundaryBadgeZh: 'React + TS · 資料完全自控',
        theme: 'emerald',
    },
    'auo-pm': {
        eyebrow: 'Preventive Maintenance · Forecasting Flow',
        eyebrowZh: '預防保養流程 · 趨勢預測架構',
        tags: ['Trend-Aware LSTM', 'Custom Loss Function', 'Schedule-Oriented PM'],
        tagsZh: ['趨勢導向 LSTM', '自訂損失函數', '排程整合保養'],
        steps: [
            { title: 'Sensor Stream', icon: 'Activity', subtitle: 'Equipment Time-Series' },
            { title: 'Sequence Prep', icon: 'LineChart', subtitle: 'Imbalanced Pattern Prep' },
            { title: 'Trend Forecast', icon: 'TrendingUp', subtitle: 'PyTorch LSTM + Custom Loss', highlight: true, badge: 'Custom Loss' },
            { title: 'Risk Scoring', icon: 'ShieldAlert', subtitle: 'Actionable Alert Signals' },
            { title: 'PM Schedule', icon: 'CalendarClock', subtitle: 'Downtime & Timing Tradeoff' },
            { title: 'Preventive Act', icon: 'Wrench', subtitle: '−20% RMSE · ~90 hrs/mo' },
        ],
        stepsZh: [
            { title: '設備感測序列', subtitle: '機台狀態時間序列資料' },
            { title: '樣態前處理', subtitle: '處理不平衡故障特徵' },
            { title: '趨勢預測模型', subtitle: 'PyTorch LSTM＋自訂損失', badge: '趨勢核心' },
            { title: '風險優先序', subtitle: '輸出具行動性的異常訊號' },
            { title: '保養排程對接', subtitle: '衡量停機與維運時機取捨' },
            { title: '預防保養成效', subtitle: 'RMSE −20% · 月省約 90 人時' },
        ],
        footerNote: 'Replaces fixed-cycle maintenance with trend-aligned LSTM forecasting tied directly to scheduling tradeoffs.',
        footerNoteZh: '以趨勢一致性自訂損失函數取代單點擬合，讓預測訊號能直接支援現場保養排程決策。',
        boundaryBadge: 'RMSE −20% · ~90 hrs/mo Saved',
        boundaryBadgeZh: '預測誤差 −20% · 月省約 90 人時',
        theme: 'orange',
    },
    'address-normalization': {
        eyebrow: 'Address Normalization · Data Quality Pipeline',
        eyebrowZh: '地址正規化系統 · 資料品質流程',
        tags: ['Data Quality System', 'Rule-Based Parsing', 'TGIS 2019 Best Paper'],
        tagsZh: ['資料品質系統', '規則式地址解析', 'TGIS 2019 最佳論文'],
        steps: [
            { title: 'Raw Addresses', icon: 'MapPin', subtitle: 'Ambiguous TW Formats' },
            { title: 'Token Parse', icon: 'Braces', subtitle: 'City, District, Road & No.' },
            { title: 'Normalize', icon: 'SlidersHorizontal', subtitle: 'Unified Naming & Digits', highlight: true, badge: 'Rule Engine' },
            { title: 'Attribute DB', icon: 'Database', subtitle: 'PostgreSQL Lookup Match' },
            { title: 'Web Sampling', icon: 'ListChecks', subtitle: 'Django QA Review Flow' },
            { title: 'GIS / API Out', icon: 'Send', subtitle: 'Clean Downstream Data' },
        ],
        stepsZh: [
            { title: '原始異質地址', subtitle: '格式不一的臺灣地址字串' },
            { title: '欄位解析', subtitle: '切分縣市、區、路段與門牌' },
            { title: '規則式正規化', subtitle: '統一寫法與數字表示', badge: '正規化核心' },
            { title: '屬性資料庫', subtitle: 'PostgreSQL 地址屬性比對' },
            { title: '抽樣檢查介面', subtitle: 'Django Web 驗證工作流程' },
            { title: '結構化輸出', subtitle: '交付可供 GIS 分析的 API' },
        ],
        footerNote: 'Combines rule-based normalization, a PostgreSQL attribute database, and Django sampling review for GIS quality.',
        footerNoteZh: '整合規則式正規化、PostgreSQL 地址屬性資料庫與 Django 抽樣檢核，提升研究資料品質。',
        boundaryBadge: 'Django + PostgreSQL · Best Paper',
        boundaryBadgeZh: 'Django + PostgreSQL · 最佳學生論文',
        theme: 'teal',
    },
};

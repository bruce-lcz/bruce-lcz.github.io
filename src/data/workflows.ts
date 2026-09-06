export type WorkflowThemeName = 'indigo' | 'teal' | 'cyan' | 'amber' | 'slate';

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
    subtitle?: string;
}

export type LocalizedWorkflowStep = Omit<WorkflowStep, 'icon'>;

export interface WorkflowDefinition {
    tags: string[];
    tagsZh?: string[];
    steps: WorkflowStep[];
    stepsZh?: LocalizedWorkflowStep[];
    theme: WorkflowThemeName;
}

/**
 * The workflow diagrams are intentionally data-driven. Keeping labels separate
 * from the renderer prevents hand-tuned SVG coordinates from drifting between
 * projects and makes the same layout usable for both languages in the future.
 */
export const WORKFLOW_DEFINITIONS: Record<string, WorkflowDefinition> = {
    'workforce-insight-platform': {
        tags: ['Enterprise HR Analytics', 'Guarded NL2SQL', 'Role-Scoped Snapshots'],
        tagsZh: ['企業 HR 分析', '受控 NL2SQL', '依角色限制的資料快照'],
        steps: [
            { title: 'Encrypted HR', icon: 'FileLock2', subtitle: 'CP950 / Passwords' },
            { title: 'Pandas ETL', icon: 'Workflow', subtitle: 'Leave / Work-Hour' },
            { title: 'Scoped Snapshot', icon: 'DatabaseBackup', subtitle: 'Historical Hierarchy' },
            { title: 'Guarded SQL', icon: 'ShieldCheck', subtitle: 'Whitelist & AST' },
            { title: 'Evidence Verify', icon: 'FileCheck2', subtitle: 'Audit Trail Log' },
            { title: 'Manager Portal', icon: 'Monitor', subtitle: 'React / FastAPI' },
        ],
        stepsZh: [
            { title: '加密 HR', subtitle: 'CP950 / 密碼' },
            { title: 'Pandas ETL', subtitle: '請假 / 工時' },
            { title: '權限快照', subtitle: '歷史組織架構' },
            { title: '受控 SQL', subtitle: '白名單與 AST' },
            { title: '證據驗證', subtitle: '稽核軌跡' },
            { title: '主管入口', subtitle: 'React / FastAPI' },
        ],
        theme: 'indigo',
    },
    'ds-grammar-chk': {
        tags: ['Technical Datasheet LLM', 'Multimodal VLM Review', 'Web · CLI · MCP Core'],
        tagsZh: ['技術規格書 LLM', '多模態 VLM 審查', 'Web · CLI · MCP 共用核心'],
        steps: [
            { title: 'DOCX Ingest', icon: 'FileInput', subtitle: 'Tables & EMF Vectors' },
            { title: 'Token Chunker', icon: 'Split', subtitle: 'Header-Preserving' },
            { title: 'Dual LLM/VLM', icon: 'BrainCircuit', subtitle: 'Pinouts & Electricals' },
            { title: 'Consistency', icon: 'GitCompare', subtitle: 'Cross-Doc Pass' },
            { title: 'Location Map', icon: 'MapPin', subtitle: 'Exact Section / Cell' },
            { title: 'Multi-Surface', icon: 'MonitorSmartphone', subtitle: 'Web / CLI / MCP' },
        ],
        stepsZh: [
            { title: 'DOCX 匯入', subtitle: '表格與 EMF 向量' },
            { title: 'Token 分塊', subtitle: '保留標題結構' },
            { title: '雙 LLM/VLM', subtitle: '接腳與電氣資料' },
            { title: '一致性檢查', subtitle: '跨文件比對' },
            { title: '位置對應', subtitle: '章節／儲存格定位' },
            { title: '多介面', subtitle: 'Web / CLI / MCP' },
        ],
        theme: 'teal',
    },
    'llm-usage-dashboard': {
        tags: ['LLMOps Telemetry', 'Read-Only Replication', 'Automated Weekly Reports'],
        tagsZh: ['LLMOps 遙測', '唯讀同步', '自動每週報表'],
        steps: [
            { title: 'Multi-Sources', icon: 'Network', subtitle: 'Gateways & GPU Mon' },
            { title: 'Idempotent Sync', icon: 'RefreshCw', subtitle: 'Locking & Watermarks' },
            { title: 'PostgreSQL', icon: 'Database', subtitle: 'Minute & Rollup Marts' },
            { title: 'Supervisor Web', icon: 'Monitor', subtitle: 'Token Attribution' },
            { title: 'Async Export', icon: 'FileOutput', subtitle: 'Queued CSV/XLSX' },
            { title: 'Weekly Reports', icon: 'CalendarDays', subtitle: 'Scheduled PDF/HTML' },
        ],
        stepsZh: [
            { title: '多來源', subtitle: 'Gateway 與 GPU 監控' },
            { title: '冪等同步', subtitle: '鎖定與同步進度' },
            { title: 'PostgreSQL', subtitle: '分鐘明細與彙整資料' },
            { title: '主管後台', subtitle: 'Token 來源追蹤' },
            { title: '非同步匯出', subtitle: '佇列 CSV/XLSX' },
            { title: '每週報表', subtitle: '排程 PDF/HTML' },
        ],
        theme: 'cyan',
    },
    'issue-kb': {
        tags: ['Evidence-Grounded RAG', 'Multimodal VLM Parsing', 'Human-in-the-Loop Review'],
        tagsZh: ['附來源依據的 RAG', '多模態 VLM 擷取', '人工審查'],
        steps: [
            { title: 'Deck Ingestion', icon: 'Presentation', subtitle: 'PPTX / DOCX / PDF' },
            { title: 'Section Split', icon: 'Split', subtitle: 'Hybrid Reconciliation' },
            { title: 'VLM Analysis', icon: 'Eye', subtitle: 'Visuals & Prior Context' },
            { title: 'Typed Synthesis', icon: 'Braces', subtitle: 'Pydantic Schema' },
            { title: 'Human Review', icon: 'UserCheck', subtitle: 'Grounding Audit' },
            { title: 'Chroma QA', icon: 'SearchCheck', subtitle: 'Source-Cited RAG' },
        ],
        stepsZh: [
            { title: '簡報匯入', subtitle: 'PPTX / DOCX / PDF' },
            { title: '章節切分', subtitle: '混合式判定' },
            { title: 'VLM 分析', subtitle: '視覺與前文脈絡' },
            { title: '結構化合成', subtitle: 'Pydantic Schema' },
            { title: '人工審查', subtitle: '來源查核' },
            { title: 'Chroma QA', subtitle: '附來源引用的 RAG' },
        ],
        theme: 'amber',
    },
    'pixart-genai-hub': {
        tags: ['Air-Gapped', 'Internal Models', 'Multimodal'],
        tagsZh: ['隔離網路', '內部模型', '多模態'],
        steps: [
            { title: 'Task', icon: 'ListTodo' },
            { title: 'Router', icon: 'GitFork' },
            { title: 'Fast Model', icon: 'Zap' },
            { title: 'Deep Model', icon: 'BrainCircuit' },
            { title: 'Vision Tool', icon: 'Eye' },
            { title: 'Workspace', icon: 'LayoutDashboard' },
        ],
        stepsZh: [
            { title: '任務' },
            { title: '路由器' },
            { title: '快速模型' },
            { title: '深度模型' },
            { title: '視覺工具' },
            { title: '工作區' },
        ],
        theme: 'slate',
    },
    'legal-contract-comparison': {
        tags: ['On-Prem', 'Confidential', 'Zero-Omission'],
        tagsZh: ['地端部署', '機密資料處理', '降低遺漏'],
        steps: [
            { title: 'Input Docs', icon: 'Files' },
            { title: 'OCR', icon: 'ScanText' },
            { title: 'Validation', icon: 'BadgeCheck' },
            { title: 'LLM Compare', icon: 'GitCompare' },
            { title: 'Diff Review', icon: 'FileDiff' },
            { title: 'Reviewer', icon: 'UserCheck' },
        ],
        stepsZh: [
            { title: '輸入文件' },
            { title: 'OCR' },
            { title: '驗證' },
            { title: 'LLM 比對' },
            { title: '差異審查' },
            { title: '審查者' },
        ],
        theme: 'slate',
    },
    'patent-translation-service': {
        tags: ['On-Prem LLM', 'docx Flow', 'Term Memory'],
        tagsZh: ['地端 LLM', 'DOCX 流程', '術語記憶'],
        steps: [
            { title: 'Input Doc', icon: 'FileText' },
            { title: 'Parse DOCX', icon: 'FileCog' },
            { title: 'Draft Translate', icon: 'Languages' },
            { title: 'Term Check', icon: 'BookOpenCheck' },
            { title: 'Proofread', icon: 'SpellCheck2' },
            { title: 'Export', icon: 'FileOutput' },
        ],
        stepsZh: [
            { title: '輸入文件' },
            { title: '解析 DOCX' },
            { title: '初稿翻譯' },
            { title: '術語檢查' },
            { title: '校對' },
            { title: '匯出' },
        ],
        theme: 'slate',
    },
    'auto-minutes-system': {
        tags: ['Offline', 'Speaker Tags', 'Structured Notes'],
        tagsZh: ['離線處理', '講者分段', '結構化筆記'],
        steps: [
            { title: 'Audio In', icon: 'Mic' },
            { title: 'VAD Split', icon: 'Activity' },
            { title: 'ASR', icon: 'Speech' },
            { title: 'Diarize', icon: 'Users' },
            { title: 'Summarize', icon: 'AlignLeft' },
            { title: 'Minutes', icon: 'ClipboardList' },
        ],
        stepsZh: [
            { title: '音訊輸入' },
            { title: 'VAD 切分' },
            { title: 'ASR 語音辨識' },
            { title: '講者分段' },
            { title: '摘要' },
            { title: '會議紀錄' },
        ],
        theme: 'slate',
    },
    'asc-merge-c-generator': {
        tags: ['Open WebUI Tool', 'Encoding Fallback', 'Downloadable Export'],
        tagsZh: ['Open WebUI 工具', '編碼備援', '可下載檔案'],
        steps: [
            { title: 'Upload', icon: 'Upload', subtitle: 'ASC files' },
            { title: 'Read', icon: 'Binary', subtitle: 'Raw bytes' },
            { title: 'Merge', icon: 'Combine', subtitle: 'Ordered append' },
            { title: 'Generate', icon: 'FileCode2', subtitle: 'C init code' },
            { title: 'Export', icon: 'Download', subtitle: '.c / merged .asc' },
            { title: 'Link', icon: 'Link2', subtitle: 'Nginx' },
        ],
        stepsZh: [
            { title: '上傳', subtitle: 'ASC 檔案' },
            { title: '讀取', subtitle: '原始位元組' },
            { title: '合併', subtitle: '依序附加' },
            { title: '產生', subtitle: 'C 初始化程式' },
            { title: '匯出', subtitle: '.c / 合併 .asc' },
            { title: '連結', subtitle: 'Nginx' },
        ],
        theme: 'slate',
    },
    'auo-yield': {
        tags: ['Explainable AI', 'Cross-Factory', 'Optimization'],
        tagsZh: ['可解釋 AI', '跨廠分析', '最佳化'],
        steps: [
            { title: 'Factory Data', icon: 'Factory' },
            { title: 'Standardize', icon: 'SlidersHorizontal' },
            { title: 'Features', icon: 'Boxes' },
            { title: 'Optimize', icon: 'Gauge' },
            { title: 'Explain', icon: 'Lightbulb' },
            { title: 'Recommend', icon: 'BadgeCheck' },
        ],
        stepsZh: [
            { title: '工廠資料' },
            { title: '標準化' },
            { title: '特徵' },
            { title: '最佳化' },
            { title: '解釋' },
            { title: '推薦' },
        ],
        theme: 'slate',
    },
    'auo-assistant': {
        tags: ['Multi-Agent', 'Knowledge Graph', 'Decision Support'],
        tagsZh: ['多代理', '知識圖譜', '決策支援'],
        steps: [
            { title: 'Question', icon: 'MessageCircle' },
            { title: 'Retrieve', icon: 'Search' },
            { title: 'SQL Tool', icon: 'Table2' },
            { title: 'KG Reason', icon: 'Network' },
            { title: 'Agents', icon: 'Bot' },
            { title: 'Decision', icon: 'GitBranch' },
        ],
        stepsZh: [
            { title: '問題' },
            { title: '檢索' },
            { title: 'SQL 工具' },
            { title: '知識圖譜推理' },
            { title: '代理協作' },
            { title: '決策' },
        ],
        theme: 'slate',
    },
    'personal-gym-tracker-v2': {
        tags: ['Private Data', 'AI Coach', '1-Click Export'],
        tagsZh: ['私人資料', 'AI 教練', '一鍵匯出'],
        steps: [
            { title: 'Workout Log', icon: 'Dumbbell' },
            { title: 'Auto Map', icon: 'Wand2' },
            { title: 'Store Data', icon: 'Database' },
            { title: 'Volume Trend', icon: 'BarChart3' },
            { title: 'AI Coach', icon: 'Bot' },
            { title: 'Plan', icon: 'CalendarDays' },
        ],
        stepsZh: [
            { title: '訓練紀錄' },
            { title: '運動項目對應' },
            { title: '儲存資料' },
            { title: '訓練量趨勢' },
            { title: 'AI 教練' },
            { title: '訓練計畫' },
        ],
        theme: 'slate',
    },
    'auo-pm': {
        tags: ['Predictive', 'Time Series', 'Schedule Aware'],
        tagsZh: ['預測分析', '時間序列', '排程支援'],
        steps: [
            { title: 'Sensor Data', icon: 'Activity' },
            { title: 'Sequence', icon: 'LineChart' },
            { title: 'Forecast', icon: 'TrendingUp' },
            { title: 'Risk Score', icon: 'ShieldAlert' },
            { title: 'Schedule', icon: 'CalendarClock' },
            { title: 'Maintain', icon: 'Wrench' },
        ],
        stepsZh: [
            { title: '感測器資料' },
            { title: '序列' },
            { title: '預測' },
            { title: '風險分數' },
            { title: '排程' },
            { title: '維護' },
        ],
        theme: 'slate',
    },
    'address-normalization': {
        tags: ['Data Quality', 'Rule Based', 'Address Parse'],
        tagsZh: ['資料品質', '規則式', '地址解析'],
        steps: [
            { title: 'Raw Address', icon: 'MapPin' },
            { title: 'Parse', icon: 'Braces' },
            { title: 'Normalize', icon: 'SlidersHorizontal' },
            { title: 'Match Rules', icon: 'ListChecks' },
            { title: 'Attribute DB', icon: 'Database' },
            { title: 'API Output', icon: 'Send' },
        ],
        stepsZh: [
            { title: '原始地址' },
            { title: '解析' },
            { title: '正規化' },
            { title: '比對規則' },
            { title: '屬性資料庫' },
            { title: 'API 輸出' },
        ],
        theme: 'slate',
    },
};

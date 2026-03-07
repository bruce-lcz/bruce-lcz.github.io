import { UnifiedProject } from './types';

export const PROJECT_ORDER: string[] = [
    "personal-gym-tracker-v2",
    "legal-contract-comparison",
    "patent-translation-service",
    "auto-minutes-system",
    "pixart-genai-hub",
    "auo-assistant",
    "auo-yield",
    "auo-pm",
    "address-normalization",
];

const UNIFIED_PROJECTS_MAP: UnifiedProject[] = [
    {
        id: "legal-contract-comparison",
        category: "PixArt",
        period: "2026/02 - 2026/03",
        companyId: "pixart",
        techStack: ["Python", "FastAPI", "vLLM", "Vision LLM (OCR)", "LLM Pipeline"],
        translations: {
            en: {
                title: "Legal Contract Comparison System",
                role: "AI Application Engineer",
                shortDescription: "Automated contract comparison using Vision-LLM OCR and text comparison algorithms to replace manual proofreading.",
                description: `
The legal team had to manually compare signed paper contracts line by line against the original Word file. I built a pipeline to automate this: **Nanonets-OCR2-3B (via vLLM)** extracts text from scanned pages while filtering out signatures and stamps, an LLM restructures the paragraphs, and **diff-match-patch (Myers algorithm)** identifies the differences. A custom **Multiset Check** ensures zero character omissions during LLM restructuring. Verification that took tens of minutes now runs in seconds.
            `,
                keyFeatures: [
                    "High-precision Vision-LLM OCR with automated signature/stamp filtering",
                    "Intelligent paragraph restructuring with Multiset Check for zero-omission",
                    "Git-like dual-pane synchronized scrolling and difference visualization",
                ],
                challenges: [
                    "Accurately identifying and filtering handwritten signatures and stamps during OCR.",
                    "Ensuring LLM restructuring eliminates hallucinations and preserves 100% of legal keywords.",
                ],
            },
            zh: {
                title: "法務合約比對系統",
                role: "AI Application Engineer",
                shortDescription: "利用 Vision-LLM OCR 與文本比對演算法，取代耗時的人工紙本對照流程。",
                description: `
法務回收紙本簽署合約後，需人工逐字對照原稿，耗時且容易漏看。這個系統將流程自動化：**Nanonets-OCR2-3B（via vLLM）** 解析掃描圖片並過濾簽名印章，LLM 重組段落，**diff-match-patch（Myers 演算法）** 精準標示差異。自訂的 **Multiset 檢核機制**確保 LLM 重組時零漏字。原本數十分鐘的核對，現在秒級完成。
            `,
                keyFeatures: [
                    "高精度 Vision-LLM OCR 識別與手寫標籤自動化過濾",
                    "具備漏字校驗機制 (Multiset Check) 的智慧段落重組",
                    "類 Git 的雙欄同步捲動與差異對照 UI",
                ],
                challenges: [
                    "在 OCR 過程中精準辨識並過濾手寫簽名與印章標籤。",
                    "確保 LLM 在優化段落格式時，達成法律關鍵字元的 100% 準確度。",
                ],
            }
        }
    },
    {
        id: "patent-translation-service",
        category: "PixArt",
        period: "2026/01 - 2026/02",
        companyId: "pixart",
        techStack: ["Python", "FastAPI", "vLLM", "Prompt Engineering", "LLM Pipeline"],
        translations: {
            en: {
                title: "Patent Document Multi-language Translation System",
                role: "AI Application Engineer",
                shortDescription: "On-premise translation engine for IC design patents, providing high-quality English to Traditional/Simplified Chinese translation.",
                description: `
IC design patents can't leave the corporate network, so cloud translation services are off the table. I built a two-stage local LLM pipeline: an initial translation pass, followed by a second pass for legal syntax proofreading and style refinement. Cross-strait terminology differences (e.g., 影片 vs. 視頻) are handled via **System Prompt engineering + Few-Shot Learning** — no external dictionaries needed. Supports **.docx** upload and returns output with original formatting preserved.
            `,
                keyFeatures: [
                    "LLM-based two-stage automated translation and semantic refinement",
                    "Automated localization of technical terminology for different regions",
                    "Direct Word (.docx) upload support with automated layout preservation",
                ],
                challenges: [
                    "Stabilizing translation accuracy for professional terminology via Prompt Engineering without external dictionaries.",
                    "Optimizing LLM style consistency across long-form documents through multi-layer verification.",
                ],
            },
            zh: {
                title: "專利文件多語系翻譯系統",
                role: "AI Application Engineer",
                shortDescription: "針對 IC 設計專利開發的本地端翻譯引擎，實現英轉繁/簡中之高品質翻譯。",
                description: `
IC 設計專利涉及核心技術，不得使用雲端服務。我設計兩階段本地端 LLM 流程：第一階段完成初版翻譯，第二階段針對法律語法與風格進行校對修飾。兩岸技術術語差異（如影片 / 視頻）透過 **System Prompt + Few-Shot Learning** 解決，不依賴外部詞典。支援 **.docx** 直接上傳，自動保留原始排版輸出。
            `,
                keyFeatures: [
                    "基於 LLM 的兩階段自動化翻譯與語意梳理機制",
                    "兩岸三地專利技術術語之自動化在地化轉換",
                    "支援 Word (.docx) 檔案上傳與自動化格式保留",
                ],
                challenges: [
                    "透過 Prompt Engineering 穩定模型對特定專業術語的翻譯準確度。",
                    "優化 LLM 在長文件處理過程中的風格一致性。",
                ],
            }
        }
    },
    {
        id: "auto-minutes-system",
        category: "PixArt",
        period: "2025/11 - 2026/01",
        companyId: "pixart",
        techStack: ["Python", "ASR (Whisper)", "Speaker Diarization", "vLLM", "LLM Pipeline"],
        translations: {
            en: {
                title: "Auto-Minutes Offline Meeting Transcription System",
                role: "AI Application Engineer",
                shortDescription: "Completely offline meeting transcription and summarization system integrating ASR, Diarization, and LLM.",
                description: `
All meeting audio must stay on-premise for compliance. This system chains **Whisper (Breeze ASR)** for word-level transcription, **pyannote.audio** for Speaker Diarization, and a local **vLLM** for punctuation correction and structured summary generation. **VAD segmentation** and **GPU batch processing** significantly reduce processing time for long recordings, and a **SHA256 cache system** prevents redundant computation on repeated uploads.
            `,
                keyFeatures: [
                    "Accurate transcription and alignment with Speaker Diarization",
                    "vLLM-based automated text formatting, optimization, and summarization",
                    "VAD segmentation, GPU batch acceleration, and computation caching",
                ],
                challenges: [
                    "Optimizing memory allocation for long audio and solving inference time issues via VAD segmentation.",
                    "Accurately aligning ASR timestamps with speaker labels in complex multi-speaker scenarios.",
                ],
            },
            zh: {
                title: "Auto-Minutes 離線會議轉錄系統",
                role: "AI Application Engineer",
                shortDescription: "整合 ASR、說話者標記與 LLM 摘要技術，專為資安需求打造的離線會議記錄系統。",
                description: `
會議錄音依資安要求必須全程本地端處理。系統串接 **Whisper（Breeze ASR）** 進行詞級轉錄、**pyannote.audio** 進行說話者分離，再透過本地 **vLLM** 處理標點修正與結構化摘要。**VAD 切割**與 **GPU 批次處理**大幅縮短長音檔的處理時間，**SHA256 快取機制**避免重複上傳造成的重複計算。
            `,
                keyFeatures: [
                    "具備說話者識別 (Speaker Diarization) 的精確轉錄與對齊",
                    "基於 vLLM 的自動化文本優化與會議摘要生成",
                    "支援 VAD 智慧切割、GPU 批次加速與運算快取機制",
                ],
                challenges: [
                    "優化長音檔處理中的記憶體配置，解決單一模型推論時間過長問題。",
                    "在多人同時發言的情境下，精準對齊 ASR 時間戳與說話者標籤。",
                ],
            }
        }
    },
    {
        id: "pixart-genai-hub",
        category: "PixArt",
        period: "2025 - Present",
        companyId: "pixart",
        techStack: ["Python", "vLLM", "LLM Serving", "Multimodal LLM", "Docker"],
        translations: {
            en: {
                title: "Enterprise-grade Offline GenAI Collaboration Platform",
                role: "AI Architect",
                shortDescription: "Enterprise-grade offline AI collaboration platform integrating 120B+ models and multimodal capabilities.",
                description: `
Built and operate an on-premise GenAI collaboration platform for an air-gapped IC design environment. The core is **vLLM** running **120B-class models** on a GPU cluster, with a tiering strategy: a lighter fast mode for everyday Q&A and code, and the full 120B for deep reasoning tasks. I also built a **Vision-to-Text pipeline** using **Gemma (Vision)** to analyze semiconductor specs and waveform images. Long conversations stay coherent via dynamic forgetting and precision truncation within the token limit.
            `,
                keyFeatures: [
                    "Deployment of 120B ultra-large models with Fast/Thinking mode switching",
                    "Integrated Multimodal Vision-to-Text analysis pipeline",
                    "Dynamic Context management supporting stable long-form conversations",
                ],
                challenges: [
                    "Balancing model size, latency, and inference speed in an offline environment.",
                    "Precision truncation strategies to retain critical memory within finite context windows.",
                ],
            },
            zh: {
                title: "企業級全離線 GenAI 協作平台",
                role: "AI 架構師 (AI Architect)",
                shortDescription: "建構企業級全離線 AI 協作平台，整合 120B+ 模型與多模態能力。",
                description: `
在全離線的 IC 設計環境中建置並維運企業級 GenAI 協作平台。核心是 **vLLM** 在 GPU 叢集上驅動 **120B 級別模型**，搭配分級策略：日常問答與代碼使用輕量快速模式，深度推理任務調用完整 120B。另建置 **Vision-to-Text Pipeline**，以 **Gemma (Vision)** 分析半導體規格書與波形圖。長對話透過動態遺忘與精準截斷策略維持 token 限制內的上下文連貫性。
            `,
                keyFeatures: [
                    "120B 超大規模模型部署與 Fast/Thinking 雙模式切換",
                    "多模態 Vision-to-Text Pipeline 整合",
                    "智慧動態 Context 管理，支援長對話不崩潰",
                ],
                challenges: [
                    "在離線環境下平衡模型參數量、延遲與推論速度。",
                    "長文本處理中的精準截斷策略與對話記憶保留。",
                ],
            }
        }
    },
    {
        id: "personal-gym-tracker-v2",
        category: "Personal",
        period: "2026 - Present",
        techStack: ["React", "TypeScript", "Cloudflare Workers", "Cloudflare D1", "LLM API Integration"],
        link: "https://github.com/bruce-lcz/my-gym-tracker",
        translations: {
            en: {
                title: "My Gym Tracker — Private AI Gym Coach",
                role: "Developer / Designer",
                shortDescription: "A personal side project born out of frustration with commercial gym apps — built my own, with AI features and an aesthetic I actually like.",
                description: `
Built because existing gym apps have too many ads, lock your data, and look generic. The stack is React + TypeScript on **Cloudflare D1 + Workers** (migrated from Google Sheets). An LLM integration handles **muscle group auto-mapping** from plain-text exercise names, and prompt-engineered AI coaching generates structured training recommendations from historical volume data. The UI is hand-crafted **Neumorphism** in Vanilla CSS with separate color themes for two users (Bruce / Linda).
            `,
                keyFeatures: [
                    "LLM-powered AI coach: training volume analysis & goal suggestions",
                    "Auto muscle group mapping — just type the exercise name",
                    "Neumorphism UI with dual identity color themes (Bruce / Linda)",
                    "Cloudflare D1 + Workers backend for edge-speed sync",
                    "1-Click full data export — your data, your control",
                ],
                challenges: [
                    "Getting Neumorphism to feel genuinely tactile in pure CSS — a lot of shadow-tuning went into this.",
                    "Writing prompts precise enough that the LLM reliably maps unusual or abbreviated exercise names to the correct muscle groups.",
                ],
            },
            zh: {
                title: "My Gym Tracker — 自己的 AI 健身教練，自己打造",
                role: "Developer / Designer",
                shortDescription: "受夠了市售健身 App 的廣告與限制，乾脆自己從零打造一個，還順手加了 AI 功能。",
                description: `
因為市售健身 App 廣告太多、數據封鎖、介面普通，所以自己做一個。核心架構是 React + TypeScript，後端從 Google Sheets 遷移至 **Cloudflare D1 + Workers**。串接 LLM 做動作名稱的**肌肉群自動映射**，並透過 Prompt Engineering 讓 AI 根據歷史訓練量給出結構化建議。UI 以純 Vanilla CSS 手工打造 **Neumorphism** 風格，內建 Bruce / Linda 雙主題配色。
            `,
                keyFeatures: [
                    "AI 教練: 訓練量分析 + 結構化目標建議",
                    "自動肌肉群映射 — 打動作名稱就好",
                    "Neumorphism 觸感 UI，Bruce / Linda 雙主題配色",
                    "Cloudflare D1 + Workers 邊緣架構，毫秒級同步",
                    "1-Click 完整數據導出 — 數據永遠在自己手上",
                ],
                challenges: [
                    "用純 CSS 把 Neumorphism 做到真的有觸覺回饋感，光是陰影參數就調了很久。",
                    "Prompt 要夠精確，LLM 才能可靠地把各種縮寫或奇怪的動作名稱正確映射到肌肉群。",
                ],
            }
        }
    },
    {
        id: "auo-assistant",
        category: "AUO",
        period: "2023 - 2025",
        companyId: "auo",
        techStack: ["Python", "LangGraph", "RAG / Vector DB", "Knowledge Graph (Neo4j)", "LLM Agents"],
        translations: {
            en: {
                title: "Intelligent Assistant Platform (RAG -> Agent)",
                role: "AI Architect",
                shortDescription: "Evolved from document retrieval (RAG) to an autonomous Agent system with Knowledge Graph.",
                description: `
Started as a RAG system for engineers to search internal technical documents. Evolved into a **Multi-Agent system (LangGraph)** capable of autonomous SQL querying, API calls, and structured diagnostic workflows. Integrated a **Neo4j Knowledge Graph** to map relationships between equipment, manufacturing processes, and proprietary terminology — enabling answers to complex attribution questions like "why did yield drop?" rather than just document retrieval.
            `,
                keyFeatures: [
                    "Multi-Agent Architecture",
                    "Knowledge Graph Integration",
                    "SQL Agent Automated Data Querying",
                ],
                challenges: [
                    "Ensuring Text-to-SQL accuracy in complex manufacturing databases.",
                    "Resolving hallucination and infinite loop issues in Agent execution paths.",
                ],
            },
            zh: {
                title: "智慧助理平台 (RAG -> Agent)",
                role: "AI 架構師",
                shortDescription: "從文件檢索 (RAG) 演進為結合知識圖譜的自主 Agent 系統。",
                description: `
最初是讓工程師搜尋內部技術文件的 RAG 系統，後演進為具備工具使用能力的 **Multi-Agent 系統（LangGraph）**，可自主執行 SQL 查詢、API 呼叫與結構化診斷流程。整合 **Neo4j 知識圖譜**，映射設備、製程與專有術語的關聯，讓系統能回答「良率為何下降」這類複雜歸因問題，而不只是文件檢索。
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
            }
        }
    },
    {
        id: "auo-yield",
        category: "AUO",
        period: "2021 - 2023",
        companyId: "auo",
        techStack: ["Python", "Scikit-learn", "XAI / LIME", "Genetic Algorithm", "SQL / ETL"],
        translations: {
            en: {
                title: "Cross-Factory Yield AI Optimization (Golden Path)",
                role: "Data Scientist",
                shortDescription: "Increased yield by 1.43% and reduced defects by 12.62% across multiple factories.",
                description: `
Different factories producing similar products had unexplained yield gaps. I built a cross-factory optimization system that standardizes sensor data definitions across sites and uses a **"Golden Path" algorithm** to identify optimal machine combinations and process parameters. **LIME-based Explainable AI** gives engineers actionable parameter adjustment guidance rather than black-box predictions. Results: **+1.43% yield**, **-12.62% defects**, ~300 man-hours saved monthly.
            `,
                keyFeatures: [
                    "Optimal Path Recommendation Algorithm",
                    "Cross-Site Data Standardization (ETL)",
                    "LIME Model Explainability Analysis",
                ],
                challenges: [
                    "Standardization challenges due to inconsistent equipment capabilities across factories.",
                    "On-site communication and verification for changing established process parameters.",
                ],
            },
            zh: {
                title: "跨廠區良率 AI 優化 (Golden Path)",
                role: "資料科學家",
                shortDescription: "跨多個廠區提升良率 1.43% 並減少 12.62% 缺陷。",
                description: `
生產相似產品的跨廠區之間存在無法解釋的良率差異。建構跨廠優化系統，統一各廠感測器數據定義，透過 **「Golden Path」演算法**找出最佳機台組合與製程參數。整合 **LIME 可解釋性分析**，提供工程師具體的參數調整依據，而非黑箱建議。成效：良率 **+1.43%**、缺陷 **-12.62%**、每月節省約 300 工時。
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
            }
        }
    },
    {
        id: "auo-pm",
        category: "AUO",
        period: "2022 - 2024",
        companyId: "auo",
        techStack: ["Python", "PyTorch", "LSTM / Time Series", "Custom Loss Function", "FastAPI"],
        translations: {
            en: {
                title: "Preventive Maintenance System (PM)",
                role: "AI Engineer / Project Lead",
                shortDescription: "Implemented custom Loss Function, reducing defect prediction error by 20%.",
                description: `
Traditional maintenance ran on fixed cycles and missed sudden equipment anomalies. I built **LSTM-based time series prediction models** with a custom **Trend Consistency Loss Function** — designed to capture anomaly trends rather than minimize single-point errors, which is what matters for maintenance scheduling. The system integrates with scheduling workflows to suggest optimal timing automatically. Results: **-20% prediction error (RMSE)**, 90 man-hours saved monthly.
            `,
                keyFeatures: [
                    "Custom Loss Function Design",
                    "LSTM Time Series Forecasting",
                    "Maintenance Scheduling Optimization",
                ],
                challenges: [
                    "Handling extreme class imbalance in failure data.",
                    "Balancing conflicts between capacity demands and downtime maintenance costs.",
                ],
            },
            zh: {
                title: "預防性維護系統 (PM)",
                role: "AI 工程師 / 專案負責人",
                shortDescription: "導入自定義 Loss Function，降低 20% 缺陷預測誤差。",
                description: `
傳統排程依賴固定週期，無法應對突發設備異常。開發基於 **LSTM 的時間序列預測模型**，自訂 **Trend Consistency Loss Function（趨勢一致性損失函數）**—— 專注於捕捉異常趨勢而非最小化單點誤差，這才是維護排程真正需要的預測目標。系統整合排程工作流，自動建議最佳維護時機。成效：預測誤差（RMSE）降低 **20%**、每月節省 90 工時。
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
            }
        }
    },
    {
        id: "address-normalization",
        category: "Research",
        period: "2019",
        companyId: "academia-sinica",
        techStack: ["Python", "Django", "PostgreSQL", "REST API"],
        translations: {
            en: {
                title: "Address Data Normalization System",
                role: "Research Intern",
                shortDescription: "Automated normalization system solving Taiwan address format chaos.",
                description: `
Developed for Academia Sinica's GIS Center to parse and normalize unstructured address data from multiple heterogeneous datasets. Built a normalization algorithm and a national address attribute database. Won the **Best Student Paper Award** at the 2019 TGIS Conference.
            `,
                keyFeatures: [
                    "Address String Normalization Algorithm",
                    "Web Sampling Service System",
                ],
                challenges: [
                    "Handling high ambiguity in Taiwan address formats.",
                ],
            },
            zh: {
                title: "地址資料標準化系統",
                role: "研究實習生",
                shortDescription: "解決台灣地址格式混亂問題的自動化正規化系統。",
                description: `
為中央研究院 GIS 中心開發，解析並標準化來自多個異質資料來源的非結構化地址資料。設計地址正規化演算法與全國地址屬性資料庫。獲 2019 年台灣地理資訊學會（TGIS）**最佳學生論文獎**。
            `,
                keyFeatures: [
                    "地址字串正規化演算法",
                    "Web 抽樣服務系統",
                ],
                challenges: [
                    "台灣地址格式的高度歧義性處理。",
                ],
            }
        }
    },
];

export const UNIFIED_PROJECTS: UnifiedProject[] = PROJECT_ORDER
    .map(id => UNIFIED_PROJECTS_MAP.find(p => p.id === id))
    .filter((p): p is UnifiedProject => p !== undefined);

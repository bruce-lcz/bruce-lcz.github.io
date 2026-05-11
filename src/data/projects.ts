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
                title: "On-Prem Contract Review Workflow",
                role: "AI Solution Architect",
                shortDescription: "Designed a secure on-prem AI workflow that helps legal teams compare signed contracts without exposing sensitive documents to cloud services.",
                description: `
Highly sensitive legal documents could not be processed with cloud AI tools such as ChatGPT or NotebookLM. I turned that constraint into an on-prem contract review workflow that reduced manual comparison effort while keeping every document inside internal infrastructure.

The implementation combined **Vision-LLM OCR via vLLM**, signature and stamp filtering, paragraph restructuring, and deterministic diff validation. To make the workflow legally reliable, I added a custom **Multiset Check** to guarantee zero character omissions during LLM restructuring, then used **diff-match-patch (Myers algorithm)** to surface precise clause-level differences. What previously took tens of minutes of manual review could be completed in seconds with a clearer review trail.
            `,
                keyFeatures: [
                    "On-prem contract review flow for signed documents and confidential legal files",
                    "Deterministic validation layer with Multiset Check to enforce zero-omission restructuring",
                    "Clause-level difference visualization with synchronized dual-pane review interface",
                ],
                challenges: [
                    "Making an AI-assisted workflow reliable enough for legal review under strict confidentiality constraints.",
                    "Ensuring OCR and LLM restructuring preserved every legal keyword while filtering handwritten marks and stamps.",
                ],
            },
            zh: {
                title: "本地端合約審閱 Workflow",
                role: "AI 解決方案架構師",
                shortDescription: "設計安全的本地端 AI workflow，協助法務團隊比對已簽署合約，同時避免敏感文件送到雲端服務。",
                description: `
高度敏感的法務文件無法直接使用 ChatGPT 或 NotebookLM 等雲端 AI 工具處理。我將這個限制轉化為一套本地端合約審閱 workflow，讓文件全程留在內部環境，同時降低人工逐字比對的負擔。

技術實作上，流程整合 **Vision-LLM OCR via vLLM**、簽名印章過濾、段落重組與可驗證的差異比對。為了讓 workflow 足以支撐法務審閱，我加入自訂 **Multiset 檢核機制**，確保 LLM 重組過程零漏字，再透過 **diff-match-patch（Myers 演算法）** 進行條文級差異標示。原本數十分鐘的人工核對，現在可在秒級完成，並保留更清楚的審閱軌跡。
            `,
                keyFeatures: [
                    "面向簽署文件與機密法務資料的本地端合約審閱流程",
                    "以 Multiset Check 建立零漏字的 deterministic validation layer",
                    "支援雙欄同步檢視與條文級差異標示的審閱介面",
                ],
                challenges: [
                    "在嚴格保密限制下，讓 AI 輔助流程具備足夠可靠性以支撐法務審閱。",
                    "在過濾手寫簽名與印章標記的同時，確保 OCR 與 LLM 重組保留所有法律關鍵字。",
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
                title: "Patent Translation Workflow for IC Design",
                role: "AI Solution Architect",
                shortDescription: "Built an on-prem patent translation workflow for legal and engineering teams working with confidential IC design documents.",
                description: `
Confidential patent and IP documents could not be sent to cloud AI services, yet legal and engineering teams still needed a faster translation workflow for IC design materials. I built an on-prem patent translation system that let internal teams process sensitive multilingual documents while preserving IP protection.

The solution used a two-stage local LLM pipeline: an initial translation pass followed by legal syntax proofreading and style refinement. I handled cross-strait terminology localization through **System Prompt engineering + Few-Shot Learning**, avoiding dependence on external dictionaries while keeping domain language consistent. The workflow supported **.docx** upload and returned translated output with original formatting preserved, making it practical for real legal and engineering handoff processes.
            `,
                keyFeatures: [
                    "Confidential patent workflow localized for legal and engineering collaboration",
                    "Two-stage on-prem translation and legal proofreading pipeline",
                    "Terminology localization with formatting-preserving .docx processing",
                ],
                challenges: [
                    "Maintaining terminology accuracy for IC design and legal language without exposing documents to external services.",
                    "Keeping translation tone and style consistent across long-form patent content through layered verification.",
                ],
            },
            zh: {
                title: "IC 設計專利翻譯 Workflow",
                role: "AI 解決方案架構師",
                shortDescription: "建置本地端專利翻譯 workflow，讓法務與工程團隊能處理機密 IC 設計文件，不必依賴雲端 AI 服務。",
                description: `
專利與智財文件牽涉核心技術，無法送到雲端 AI 服務處理，但法務與工程團隊仍需要更快的翻譯流程來處理 IC 設計資料。我建置了一套本地端專利翻譯系統，讓內部團隊能在保護 IP 的前提下處理敏感的多語文件。

技術上採用兩階段本地端 LLM pipeline：第一階段完成初版翻譯，第二階段進行法律語法校對與風格修飾。我以 **System Prompt + Few-Shot Learning** 處理兩岸術語在地化與專利語境一致性，避免依賴外部詞典，同時支援 **.docx** 上傳與原始格式保留，讓輸出能直接銜接既有法務與工程協作流程。
            `,
                keyFeatures: [
                    "面向法務與工程協作的機密專利翻譯 workflow",
                    "兩階段本地端翻譯與法律語境校對 pipeline",
                    "支援術語在地化與 .docx 原始格式保留",
                ],
                challenges: [
                    "在不依賴外部翻譯服務的前提下，維持 IC 設計與法律術語的翻譯準確度。",
                    "在長篇專利文件中維持語氣、格式與用語的一致性。",
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
                title: "Air-Gapped GenAI Workspace for IC Design Teams",
                role: "AI Solution Architect",
                shortDescription: "Designed and deployed an on-prem GenAI workspace for IC design teams, bringing LLMs, coding assistants, and multimodal workflows into air-gapped environments.",
                description: `
IC design teams needed useful AI assistance, but cloud copilots and public LLM tools were not viable in an air-gapped environment. I designed and deployed an on-prem GenAI workspace that supported coding, document analysis, multimodal inspection, and daily engineering workflows.

Under the hood, the workspace ran **vLLM**-based model serving on internal GPU infrastructure with a tiered service strategy for speed vs. deep reasoning, including **120B-class models** for high-complexity tasks. I also integrated a **Vision-to-Text pipeline** for semiconductor specs and waveform images, while building context management strategies for stable long conversations. The broader goal was not just model hosting, but enabling engineers to use AI inside real security and workflow constraints.
            `,
                keyFeatures: [
                    "Internal GenAI workspace for coding assistants, knowledge work, and multimodal engineering tasks",
                    "Tiered on-prem model serving with fast-response and deep-reasoning modes",
                    "Multimodal analysis and context-management infrastructure for production workflows",
                ],
                challenges: [
                    "Balancing model scale, latency, and infrastructure constraints in a fully air-gapped deployment.",
                    "Turning raw model availability into practical developer enablement and workflow adoption.",
                ],
            },
            zh: {
                title: "面向 IC 設計團隊的 Air-Gapped GenAI Workspace",
                role: "AI 解決方案架構師",
                shortDescription: "設計並部署面向 IC 設計團隊的本地端 GenAI workspace，讓 LLM、coding assistant 與多模態 workflow 能進入 Air-Gapped 環境。",
                description: `
IC 設計團隊需要實用的 AI 協助，但在 Air-Gapped 環境下，雲端 copilots 與公開 LLM 工具都不可行。我設計並部署本地端 GenAI workspace，支援 coding、文件分析、多模態檢視與日常工程 workflow。

在底層架構上，workspace 以 **vLLM** 為核心，部署於內部 GPU 資源，並採分級服務策略，兼顧日常快速回應與高複雜度任務所需的 **120B 級模型**。我也整合 **Vision-to-Text pipeline** 來處理半導體規格書與波形圖，同時建立長對話的 context 管理機制。這個專案的重點不只是模型上線，而是讓工程師能在真實的資安與 workflow 限制中使用 AI。
            `,
                keyFeatures: [
                    "支援 coding assistant、知識工作與多模態工程任務的內部 GenAI workspace",
                    "具備快速回應與深度推理雙模式的本地端模型服務架構",
                    "面向實際工作流程的多模態分析與 context 管理機制",
                ],
                challenges: [
                    "在完全離線部署條件下平衡模型規模、延遲與基礎設施限制。",
                    "將模型可用性轉化成工程團隊真的會採用的工作方式。",
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
                title: "Manufacturing Knowledge Assistant Evolution: RAG to Multi-Agent Decision Support",
                role: "AI Solution Architect",
                shortDescription: "Led the evolution of an internal manufacturing knowledge assistant from basic RAG search into a Multi-Agent decision-support system integrating SQL tools and Knowledge Graph reasoning.",
                description: `
Manufacturing teams initially had access to documents, but not to a system that could help reason across equipment history, process context, and operational data. I led the evolution of an internal assistant from basic RAG search into a decision-support workflow that could better support root-cause analysis and engineering investigations.

The system evolved into a **Multi-Agent architecture with LangGraph**, capable of orchestrating SQL queries, API calls, and structured diagnostic steps. I integrated a **Neo4j Knowledge Graph** to model relationships between equipment, manufacturing processes, and proprietary terminology, allowing the assistant to move beyond document retrieval and support attribution questions such as why yield dropped, which process changed, and what context mattered operationally.
            `,
                keyFeatures: [
                    "Decision-support workflow for manufacturing investigations and attribution analysis",
                    "Multi-Agent orchestration across SQL tools, APIs, and knowledge retrieval",
                    "Knowledge Graph reasoning over equipment, process, and terminology relationships",
                ],
                challenges: [
                    "Making agent-driven reasoning trustworthy enough for engineering teams to use in production analysis.",
                    "Controlling Text-to-SQL accuracy, hallucinations, and execution loops in complex manufacturing environments.",
                ],
            },
            zh: {
                title: "製造知識助理演進：從 RAG 到 Multi-Agent 決策輔助",
                role: "AI 解決方案架構師",
                shortDescription: "主導內部製造知識助理由基礎 RAG 搜尋演進為結合 SQL 工具與知識圖譜推理的 Multi-Agent 決策輔助系統。",
                description: `
一開始，製造團隊雖然能查找文件，但缺少能夠串連設備歷程、製程脈絡與營運數據的決策輔助系統。我主導將內部助理從單純的 RAG 搜尋，演進成能支援歸因分析與工程診斷的 workflow，協助團隊更有效處理製造現場問題。

在技術上，系統進一步演進為基於 **LangGraph 的 Multi-Agent 架構**，可協調 SQL 查詢、API 呼叫與結構化診斷步驟。我整合 **Neo4j 知識圖譜** 來建模設備、製程與專有術語的關聯，使助理不只會找文件，而能支援「為何良率下降」、「哪個製程變因最關鍵」這類更貼近製造決策的問題。
            `,
                keyFeatures: [
                    "面向製造歸因分析與工程診斷的決策輔助 workflow",
                    "整合 SQL 工具、API 與檢索能力的 Multi-Agent 架構",
                    "以知識圖譜推理設備、製程與術語之間的關聯",
                ],
                challenges: [
                    "讓 Agent 推理結果在工程團隊眼中具有可用性與可信度。",
                    "在複雜製造資料環境下控制 Text-to-SQL 準確率、幻覺與執行迴圈風險。",
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
                title: "Cross-Factory Yield Optimization Workflow with Explainable AI",
                role: "AI Engineer / Optimization Lead",
                shortDescription: "Designed a cross-factory AI optimization workflow that translated manufacturing variability into explainable parameter recommendations.",
                description: `
Similar products produced in different factories showed yield gaps that were difficult to explain and even harder to operationalize. I designed a cross-factory AI optimization workflow that translated manufacturing variability into recommendations engineers could actually use, rather than producing another black-box score.

The system standardized sensor definitions and process data across sites, then used a **Golden Path optimization algorithm** to identify better equipment combinations and process parameters. To improve adoption, I paired the model output with **LIME-based explainability**, so engineers could understand why a recommendation was made and where to intervene. The result was not just a model improvement but a deployable optimization workflow: **+1.43% yield**, **-12.62% defects**, and roughly **300 man-hours saved monthly**.
            `,
                keyFeatures: [
                    "Cross-factory optimization workflow for process and parameter recommendations",
                    "Data standardization layer to unify sensor semantics across sites",
                    "Explainable AI outputs that supported engineering adoption and decision-making",
                ],
                challenges: [
                    "Standardizing inconsistent equipment and process definitions across multiple factories.",
                    "Turning model output into recommendations that production teams would trust enough to act on.",
                ],
            },
            zh: {
                title: "結合可解釋 AI 的跨廠良率優化 Workflow",
                role: "AI 工程師 / 最佳化專案負責人",
                shortDescription: "設計跨廠 AI 優化 workflow，將製造變異轉化為工程團隊可採用的可解釋參數建議。",
                description: `
不同廠區生產相似產品時，常出現難以解釋、也難以落地改善的良率差異。我設計跨廠 AI 優化 workflow，目標不是只產出模型分數，而是把製造變異轉化為工程團隊能實際採納的參數建議與優化路徑。

系統先統一各廠感測器與製程資料定義，再透過 **Golden Path 最佳化演算法** 找出更佳的機台組合與製程參數。為了提高現場採用度，我進一步整合 **LIME 可解釋性分析**，讓工程師能理解建議背後的原因與可調整方向。最終成果不只是模型效能提升，而是可被部署的跨廠優化流程：良率 **+1.43%**、缺陷 **-12.62%**、每月節省約 **300 工時**。
            `,
                keyFeatures: [
                    "面向跨廠製程與參數調整的優化 workflow",
                    "統一多廠感測器語意的資料標準化層",
                    "支援工程採用與決策溝通的可解釋 AI 輸出",
                ],
                challenges: [
                    "處理跨廠設備能力與製程定義不一致的標準化難題。",
                    "把模型輸出轉化為現場願意採納並驗證的工程建議。",
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

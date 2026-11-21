export interface Tool {
  name: string;
  descriptionEn: string;
  descriptionZh: string;
}

export interface ToolCategory {
  id: string;
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  tools: Tool[];
}

export const USES: ToolCategory[] = [
  {
    id: 'ai-llm',
    titleEn: 'Generative AI & LLM Systems',
    titleZh: '生成式 AI 與 LLM 系統',
    descriptionEn: 'Build practical, verifiable GenAI workflows around OpenAI/vLLM APIs, vector retrieval, tools, and multimodal inputs.',
    descriptionZh: '圍繞 OpenAI／vLLM API、向量檢索、工具與多模態輸入，建立實用且可驗證的 GenAI 流程。',
    tools: [
      {
        name: 'OpenAI / Azure OpenAI & OpenAI-compatible APIs',
        descriptionEn: 'Integrate cloud OpenAI / Azure OpenAI models and local OpenAI-compatible endpoints (vLLM, LLM Gateway) with structured outputs and tool calling.',
        descriptionZh: '整合雲端 OpenAI／Azure OpenAI 模型與地端 OpenAI-compatible 端點（vLLM、LLM Gateway），支援結構化輸出與工具呼叫。'
      },
      {
        name: 'On-Prem LLM Serving',
        descriptionEn: 'Deploy and operate language models within private, security-conscious environments.',
        descriptionZh: '在重視資料安全的私有環境中部署與維運語言模型。'
      },
      {
        name: 'vLLM',
        descriptionEn: 'High-throughput, memory-efficient inference for production LLM serving.',
        descriptionZh: '用於正式環境 LLM 服務的高吞吐量、記憶體高效推論引擎。'
      },
      {
        name: 'KV Cache & Prefix Caching',
        descriptionEn: 'Optimize prompt structure and prefix stability to maximize KV cache reuse and reduce repeated prefill overhead.',
        descriptionZh: '最佳化 Prompt 結構與前綴穩定性，提高 KV Cache 重用機會並降低重複 Prefill 計算成本。'
      },
      {
        name: 'RAG',
        descriptionEn: 'Ground model responses in retrievable, source-cited enterprise knowledge.',
        descriptionZh: '以可檢索且可追溯來源的企業知識，讓模型回答有所依據。'
      },
      {
        name: 'Vector Databases (ChromaDB)',
        descriptionEn: 'Index structured technical knowledge with deterministic claim IDs and provenance metadata for source-cited retrieval.',
        descriptionZh: '以確定性 ID 與來源詮釋資料索引技術知識，支援可追溯頁碼的語意向量檢索。'
      },
      {
        name: 'LangGraph & MCP',
        descriptionEn: 'Orchestrate stateful multi-step agent workflows with LangGraph and expose internal AI pipelines via Model Context Protocol (MCP).',
        descriptionZh: '以 LangGraph 編排具狀態的多步驟 Agent 流程，並透過 MCP 協定將內部 AI 工具整合進開發環境。'
      },
      {
        name: 'Agent & Tool-Calling Workflows',
        descriptionEn: 'Connect models with tools, APIs, and structured multi-step task flows.',
        descriptionZh: '串接模型、工具與 API，建立結構化的多步驟任務流程。'
      },
      {
        name: 'Multimodal / VLM',
        descriptionEn: 'Analyze text, images, and document layouts in unified AI workflows.',
        descriptionZh: '在整合式 AI 流程中分析文字、圖片與文件版面。'
      },
      {
        name: 'OCR / ASR',
        descriptionEn: 'Convert document images and speech into structured, processable content.',
        descriptionZh: '將文件影像與語音轉換為可供流程處理的結構化內容。'
      },
      {
        name: 'Prompt & Context Engineering',
        descriptionEn: 'Design prompt structures, context compression flows, and output verification checks for reliable, testable AI workflows.',
        descriptionZh: '設計提示結構、Context 壓縮流程與輸出驗證機制，確保 AI 工作流程可靠且可測試。'
      },
      {
        name: 'Context Engineering & AI Coding Workflows',
        descriptionEn: 'Guide AI-assisted development through OpenCode Skills, task decomposition, and repeatable context management patterns.',
        descriptionZh: '透過 OpenCode Skills、任務拆解與可重複的上下文管理模式，優化 AI 輔助開發流程。'
      }
    ]
  },
  {
    id: 'ai-system-design',
    titleEn: 'AI Architecture, LLMOps & Governance',
    titleZh: 'AI 架構、LLMOps 與資安治理',
    descriptionEn: 'Design secure, compliant enterprise AI systems from feasibility analysis and project leadership to LLMOps deployment.',
    descriptionZh: '從技術可行性分析、專案帶領到 LLMOps 部署與資安治理，規劃可靠落地的企業級 AI 系統。',
    tools: [
      {
        name: 'Enterprise AI Architecture',
        descriptionEn: 'Shape production AI systems around business, security, and operational constraints.',
        descriptionZh: '依據業務、資安與營運限制，規劃可上線的企業 AI 系統。'
      },
      {
        name: 'LLMOps & Production Deployment',
        descriptionEn: 'Operate internal LLM gateways, model routing, API key governance, usage metering, and offline containerized releases.',
        descriptionZh: '維運內部 LLM Gateway、模型路由、API Key 管理、用量計量，以及封閉內網容器化系統部署。'
      },
      {
        name: 'AI Security & Data Privacy',
        descriptionEn: 'Enforce server-side RBAC, isolated read-only SQLite snapshots, SQL whitelisting, air-gapped processing, and audit logging.',
        descriptionZh: '落實伺服器端 RBAC 權限隔離、唯讀暫存 SQLite 快照、SQL 白名單、離線處理與查詢稽核日誌。'
      },
      {
        name: 'Technical Project Leadership & Feasibility Analysis',
        descriptionEn: 'Partner with cross-functional stakeholders to assess legacy systems, scope adoption strategies, and lead projects end-to-end.',
        descriptionZh: '與跨部門團隊合作評估既有系統與技術可行性、制定導入策略，並獨立帶領技術專案從零到一落地。'
      },
      {
        name: 'Workflow Orchestration',
        descriptionEn: 'Coordinate models, data, tools, and human review across end-to-end processes.',
        descriptionZh: '在端到端流程中協調模型、資料、工具與人工審核。'
      },
      {
        name: 'API / Tool Integration',
        descriptionEn: 'Integrate AI capabilities with existing services, systems, and internal tools.',
        descriptionZh: '將 AI 能力與既有服務、系統及內部工具整合。'
      },
      {
        name: 'Security & Reliability Design',
        descriptionEn: 'Build authorization, validation, observability, and failure handling into AI solutions.',
        descriptionZh: '將權限控管、驗證、可觀測性與錯誤處理納入 AI 解決方案。'
      },
      {
        name: 'Technical Enablement & Knowledge Transfer',
        descriptionEn: 'Translate platform telemetry and 1-on-1 consultations into reusable self-learning guides and company-wide technical practices.',
        descriptionZh: '將平台監控數據與一對一技術諮詢轉化為可自主查閱的學習教材與全公司共享規範。'
      }
    ]
  },
  {
    id: 'backend-data',
    titleEn: 'Backend & Data Engineering',
    titleZh: '後端與資料工程',
    descriptionEn: 'Implement dependable services and data pipelines that make AI workflows usable in production, paired with AI-assisted Web UI delivery.',
    descriptionZh: '實作可靠的後端服務與資料管線，並透過 AI 輔助整合 Web 介面，讓 AI 流程能在正式環境穩定運作。',
    tools: [
      {
        name: 'Python',
        descriptionEn: 'Primary language for AI applications, automation, data processing, and backend services.',
        descriptionZh: '用於 AI 應用、自動化、資料處理與後端服務的主要語言。'
      },
      {
        name: 'FastAPI',
        descriptionEn: 'Build typed, high-performance Python APIs for AI and data services.',
        descriptionZh: '用於建置具型別、高效能的 Python AI 與資料服務 API。'
      },
      {
        name: 'REST APIs',
        descriptionEn: 'Design predictable service interfaces for system and tool integration.',
        descriptionZh: '設計清楚可預期的服務介面，支援系統與工具整合。'
      },
      {
        name: 'SQL',
        descriptionEn: 'Query, transform, and validate operational and analytical data.',
        descriptionZh: '查詢、轉換並驗證營運與分析資料。'
      },
      {
        name: 'PostgreSQL',
        descriptionEn: 'Store transactional business state, time-varying org hierarchies, and dual-granularity LLMOps telemetry.',
        descriptionZh: '儲存交易式業務資料、跨月組織架構與分鐘／日級 LLMOps 遙測資料倉儲。'
      },
      {
        name: 'Docker',
        descriptionEn: 'Package services into consistent, reproducible deployment environments.',
        descriptionZh: '將服務封裝為一致且可重現的部署環境。'
      },
      {
        name: 'ETL / Data Pipelines',
        descriptionEn: 'Move and transform data reliably across legacy and modern systems.',
        descriptionZh: '在舊有與現代系統之間可靠地搬移與轉換資料。'
      },
      {
        name: 'Databricks',
        descriptionEn: 'Develop large-scale data engineering, analytics, and machine-learning workflows.',
        descriptionZh: '開發大規模資料工程、分析與機器學習流程。'
      },
      {
        name: 'AI-Assisted Web UI Delivery (React / TypeScript)',
        descriptionEn: 'Core engineering centers on Python/FastAPI and AI systems; steer React and TypeScript interfaces via AI-assisted development to integrate APIs and ship usable internal web apps.',
        descriptionZh: '核心開發以 Python／FastAPI 與 AI 系統為主；透過 AI 輔助開發駕馭 React 與 TypeScript，快速整合後端 API 並交付完整內部 Web 工具。'
      }
    ]
  },
  {
    id: 'applied-ml',
    titleEn: 'Model Optimization & Applied ML',
    titleZh: '模型優化與應用機器學習',
    descriptionEn: 'Optimize inference efficiency and apply predictive modeling with custom objectives to operational problems.',
    descriptionZh: '優化推論效能與模型目標函數，並將預測建模方法應用於營運與製造問題。',
    tools: [
      {
        name: 'PyTorch',
        descriptionEn: 'Build sequence neural networks and custom domain-aligned loss functions for operational forecasting.',
        descriptionZh: '使用 PyTorch 開發序列預測模型並設計貼合營運決策的自訂損失函數。'
      },
      {
        name: 'Time-Series Forecasting',
        descriptionEn: 'Model temporal patterns to support predictive maintenance and operational planning.',
        descriptionZh: '建模隨時間變化的模式，支援預防性維護與營運規劃。'
      },
      {
        name: 'LSTM',
        descriptionEn: 'Develop sequence models for time-dependent prediction tasks.',
        descriptionZh: '針對時間相依的預測任務開發序列模型。'
      },
      {
        name: 'Explainable AI',
        descriptionEn: 'Translate model behavior into evidence engineers and decision-makers can act on.',
        descriptionZh: '把模型行為轉成工程師與決策者可以採取行動的依據。'
      },
      {
        name: 'Optimization',
        descriptionEn: 'Turn model insights and operational constraints into actionable parameter recommendations.',
        descriptionZh: '把模型洞察與營運限制轉成可執行的參數建議。'
      }
    ]
  }
];

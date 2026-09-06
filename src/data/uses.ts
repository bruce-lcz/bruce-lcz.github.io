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
    descriptionEn: 'Build practical, verifiable GenAI workflows around models, retrieval, tools, and multimodal inputs.',
    descriptionZh: '圍繞模型、檢索、工具與多模態輸入，建立實用且可驗證的 GenAI 流程。',
    tools: [
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
        name: 'RAG',
        descriptionEn: 'Ground model responses in retrievable, source-cited enterprise knowledge.',
        descriptionZh: '以可檢索且可追溯來源的企業知識，讓模型回答有所依據。'
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
        name: 'Prompt & Validation Design',
        descriptionEn: 'Design prompts and verification checks for reliable, testable outputs.',
        descriptionZh: '設計提示與驗證機制，確保輸出可靠且可測試。'
      }
    ]
  },
  {
    id: 'ai-system-design',
    titleEn: 'AI System & Solution Design',
    titleZh: 'AI 系統與解決方案設計',
    descriptionEn: 'Design secure, reliable enterprise AI systems that connect workflows, APIs, tools, and users.',
    descriptionZh: '設計能串接流程、API、工具與使用者的安全可靠企業級 AI 系統。',
    tools: [
      {
        name: 'Enterprise AI Architecture',
        descriptionEn: 'Shape production AI systems around business, security, and operational constraints.',
        descriptionZh: '依據業務、資安與營運限制，規劃可上線的企業 AI 系統。'
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
      }
    ]
  },
  {
    id: 'backend-data',
    titleEn: 'Backend & Data Engineering',
    titleZh: '後端與資料工程',
    descriptionEn: 'Implement dependable services and data pipelines that make AI workflows usable in production.',
    descriptionZh: '實作可靠的服務與資料管線，讓 AI 流程能在正式環境中穩定運作。',
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
      }
    ]
  },
  {
    id: 'applied-ml',
    titleEn: 'Applied Machine Learning',
    titleZh: '應用機器學習',
    descriptionEn: 'Apply predictive modeling and optimization to operational and manufacturing problems.',
    descriptionZh: '將預測建模與最佳化方法應用於營運與製造問題。',
    tools: [
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

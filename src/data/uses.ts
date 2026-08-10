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
    titleEn: 'AI & LLM Tools',
    titleZh: 'AI 與 LLM 工具',
    descriptionEn: 'Models, frameworks, and tools for building AI applications.',
    descriptionZh: '用於建置 AI 應用的模型、框架與工具。',
    tools: [
      {
        name: 'vLLM',
        descriptionEn: 'High-throughput and memory-efficient LLM serving engine. Essential for on-prem deployments.',
        descriptionZh: '高吞吐量、低記憶體使用的 LLM serving engine，適合地端部署。'
      },
      {
        name: 'OpenAI API',
        descriptionEn: 'The standard for cloud-based LLM capabilities, used when data privacy constraints allow.',
        descriptionZh: '資料隱私與使用條件允許時採用的雲端 LLM API。'
      },
      {
        name: 'Open WebUI',
        descriptionEn: 'Extensible frontend for LLMs, great for internal productization with custom tools.',
        descriptionZh: '可擴充的 LLM 前端介面，適合結合自訂工具並做成內部產品。'
      },
      {
        name: 'LangChain',
        descriptionEn: 'Framework for developing applications powered by language models.',
        descriptionZh: '用於開發 LLM application 的框架。'
      }
    ]
  },
  {
    id: 'backend',
    titleEn: 'Backend & Data',
    titleZh: 'Backend 與資料工程',
    descriptionEn: 'Languages and frameworks for building APIs and processing data.',
    descriptionZh: '用於建置 API、處理資料與實作服務邏輯的語言與框架。',
    tools: [
      {
        name: 'Python',
        descriptionEn: 'My primary language for AI, data processing, and backend logic.',
        descriptionZh: '我用於 AI、資料處理與 backend 邏輯的主要語言。'
      },
      {
        name: 'FastAPI',
        descriptionEn: 'Fast, modern web framework for building APIs with Python.',
        descriptionZh: '用 Python 建置 API 的快速、現代 Web framework。'
      },
      {
        name: 'Databricks',
        descriptionEn: 'Unified data analytics platform for massive scale data engineering.',
        descriptionZh: '用於大規模資料工程與分析的整合平台。'
      },
      {
        name: 'PostgreSQL',
        descriptionEn: 'Reliable, powerful open-source relational database.',
        descriptionZh: '可靠、強大的開源關聯式資料庫。'
      }
    ]
  },
  {
    id: 'frontend',
    titleEn: 'Frontend & UI',
    titleZh: 'Frontend 與 UI',
    descriptionEn: 'Tools for building internal tools and user interfaces.',
    descriptionZh: '用於建置內部工具與使用者介面的 framework 與工具。',
    tools: [
      {
        name: 'React',
        descriptionEn: 'Component-based UI library, used for complex interactive features.',
        descriptionZh: '以元件為核心的 UI library，適合複雜互動功能。'
      },
      {
        name: 'Astro',
        descriptionEn: 'Fast web framework for content-driven websites (like this one).',
        descriptionZh: '適合內容型網站的高效 Web framework（本網站即以此建置）。'
      },
      {
        name: 'Tailwind CSS',
        descriptionEn: 'Utility-first CSS framework for rapid UI development.',
        descriptionZh: '採 utility-first 方式的 CSS framework，適合快速開發 UI。'
      },
      {
        name: 'Streamlit',
        descriptionEn: 'Fastest way to build and share data apps using Python.',
        descriptionZh: '用 Python 快速建立與分享 data app 的工具。'
      }
    ]
  },
  {
    id: 'development',
    titleEn: 'Development & Workflow',
    titleZh: '開發工具與 Workflow',
    descriptionEn: 'My daily drivers for getting work done.',
    descriptionZh: '我日常開發與協作時使用的核心工具。',
    tools: [
      {
        name: 'Docker',
        descriptionEn: 'Containerization for consistent environments from dev to prod.',
        descriptionZh: '容器化工具，確保從開發到 production 環境的一致性。'
      },
      {
        name: 'Git / GitHub',
        descriptionEn: 'Version control and collaboration.',
        descriptionZh: '版本控制與團隊協作平台。'
      }
    ]
  }
];

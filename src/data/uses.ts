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
    titleZh: 'AI 與大語言模型工具',
    descriptionEn: 'Models, frameworks, and tools for building AI applications.',
    descriptionZh: '用於建構 AI 應用的模型、框架與工具。',
    tools: [
      {
        name: 'vLLM',
        descriptionEn: 'High-throughput and memory-efficient LLM serving engine. Essential for on-prem deployments.',
        descriptionZh: '高吞吐量、省記憶體的 LLM 伺服引擎，地端部署必備。'
      },
      {
        name: 'OpenAI API',
        descriptionEn: 'The standard for cloud-based LLM capabilities, used when data privacy constraints allow.',
        descriptionZh: '雲端 LLM 的標準選擇，在資料隱私允許時使用。'
      },
      {
        name: 'Open WebUI',
        descriptionEn: 'Extensible frontend for LLMs, great for internal productization with custom tools.',
        descriptionZh: '具擴充性的 LLM 前端介面，非常適合搭配自訂工具做內部產品化。'
      },
      {
        name: 'LangChain',
        descriptionEn: 'Framework for developing applications powered by language models.',
        descriptionZh: '開發 LLM 應用的標準框架。'
      }
    ]
  },
  {
    id: 'backend',
    titleEn: 'Backend & Data',
    titleZh: '後端與資料工程',
    descriptionEn: 'Languages and frameworks for building APIs and processing data.',
    descriptionZh: '用於建置 API 與處理資料的語言與框架。',
    tools: [
      {
        name: 'Python',
        descriptionEn: 'My primary language for AI, data processing, and backend logic.',
        descriptionZh: '我用於 AI、資料處理與後端邏輯的主要語言。'
      },
      {
        name: 'FastAPI',
        descriptionEn: 'Fast, modern web framework for building APIs with Python.',
        descriptionZh: '用 Python 建置 API 的快速、現代化網頁框架。'
      },
      {
        name: 'Databricks',
        descriptionEn: 'Unified data analytics platform for massive scale data engineering.',
        descriptionZh: '處理大規模資料工程的統一分析平台。'
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
    titleZh: '前端與介面',
    descriptionEn: 'Tools for building internal tools and user interfaces.',
    descriptionZh: '用於建置內部工具與使用者介面的工具。',
    tools: [
      {
        name: 'React',
        descriptionEn: 'Component-based UI library, used for complex interactive features.',
        descriptionZh: '基於元件的 UI 函式庫，用於複雜的互動功能。'
      },
      {
        name: 'Astro',
        descriptionEn: 'Fast web framework for content-driven websites (like this one).',
        descriptionZh: '適合內容型網站的快速網頁框架（例如這個網站）。'
      },
      {
        name: 'Tailwind CSS',
        descriptionEn: 'Utility-first CSS framework for rapid UI development.',
        descriptionZh: 'Utility-first 的 CSS 框架，適合快速開發 UI。'
      },
      {
        name: 'Streamlit',
        descriptionEn: 'Fastest way to build and share data apps using Python.',
        descriptionZh: '用 Python 快速建立與分享資料應用的首選。'
      }
    ]
  },
  {
    id: 'development',
    titleEn: 'Development & Workflow',
    titleZh: '開發與工作流',
    descriptionEn: 'My daily drivers for getting work done.',
    descriptionZh: '我日常開發的必備工具。',
    tools: [
      {
        name: 'Cursor',
        descriptionEn: 'AI-first code editor. Significantly accelerates my coding workflow.',
        descriptionZh: 'AI 原生的程式碼編輯器，大幅加速我的開發流程。'
      },
      {
        name: 'Docker',
        descriptionEn: 'Containerization for consistent environments from dev to prod.',
        descriptionZh: '容器化工具，確保從開發到正式環境的一致性。'
      },
      {
        name: 'Git / GitHub',
        descriptionEn: 'Version control and collaboration.',
        descriptionZh: '版本控制與協作平台。'
      }
    ]
  }
];

import { Config } from './types';

export const configEn: Config = {
    identity: {
        name: "Bruce Cheng",
        role: "Project Leader / AI Engineer / Data Scientist",
        tagline: "Driving industrial innovation through AI architecture and smart manufacturing leadership.",
        email: "bruce.zheng0814@gmail.com",
        avatar: "/assets/avatar.jpg",
    },
    links: {
        github: "https://github.com/bruce-lcz",
        linkedin: "https://www.linkedin.com/in/bruce-cheng-0814",

        email: "mailto:bruce.zheng0814@gmail.com",
    },
    experience: [
        {
            id: "pixart",
            type: 'current',
            company: "PixArt Imaging Inc.",
            companyMeta: {
                description: "A leading fabless semiconductor company specializing in CMOS image sensors and related IC design.",
                industry: "Semiconductor / IC Design",
                url: "https://www.pixart.com",
                logo: "/logos/pixart.jfif"
            },
            role: "AI Engineer / Project Leader",
            period: "Sep 2025 - Present",
            description: "Driving new strategic initiatives and architectural foundations for next-generation AI products.",
            techStack: ["React", "TypeScript", "AI Agents", "System Design"],
            achievements: [
                "Formulating technical strategy and roadmap.",
                "Designing scalable architecture patterns.",
                "Establishing engineering best practices."
            ],
            relatedProjectIds: []
        },
        {
            id: "auo",
            type: 'past',
            company: "AUO - Smart Manufacturing",
            companyMeta: {
                description: "A world-leading provider of display solutions and smart manufacturing technologies.",
                industry: "Manufacturing / Display Technology",
                url: "https://www.auo.com",
                logo: "/logos/auo.png"
            },
            role: "AI Engineer / Project Leader",
            period: "Aug 2021 - Aug 2025",
            description: "Led cross-functional teams to design AI architectures and optimize manufacturing processes, evolving systems from RAG to Agent-based solutions.",
            techStack: ["Python", "SQL", "Databricks", "Streamlit", "FastAPI", "LLM Agents"],
            achievements: [
                "Preventive Maintenance System: Reduced prediction error by 20%, saving 90 man-hours monthly.",
                "Intelligent Assistant Platform: Evolved architecture from RAG to Agent-based with Knowledge Graph integration.",
                "Cross-Factory Implementation: Increased yield by 1.43% and reduced defects by 12.62%, saving ~300 man-hours/month.",
                "Capacity Calculation: Improved planning accuracy, saving 3 hours of daily manual work.",
                "Recognized as 'Level 3 Elite Talent' in Smart Manufacturing; Defensive Patent approved."
            ],
            relatedProjectIds: ["auo-pm", "auo-assistant", "auo-yield"]
        },
        {
            id: "academia-sinica",
            type: 'past',
            company: "Academia Sinica - GIS Center",
            companyMeta: {
                description: "The national academy of Taiwan, supporting research in various disciplines.",
                industry: "Research",
                logo: "/logos/sinica.png"
            },
            role: "Research Intern",
            period: "Feb 2019 - Jul 2019",
            description: "Developed web systems for address data sampling and normalization.",
            techStack: ["Web Development", "Data Normalization"],
            achievements: [
                "Developed a web system for online address sampling services.",
                "Designed a normalization module and address attribute database."
            ],
            relatedProjectIds: ["address-normalization"]
        }
    ],
    projects: [
        {
            id: "auo-pm",
            title: "Preventive Maintenance System (PHM)",
            category: "work",
            role: "AI Engineer / Project Lead",
            period: "2022 - 2024",
            companyId: "auo",
            shortDescription: "Reduced prediction error by 20% and saved 90 man-hours monthly through advanced predictive modeling.",
            description: `
**Context:**
Factory machinery downtime is costly. Traditional maintenance schedules were inefficient, leading to either unnecessary maintenance or unexpected failures.

**Solution:**
Developed a predictive maintenance system using machine learning to forecast equipment failure.
- Implemented data pipelines on Databricks.
- Built prediction models using XGBoost/LightGBM.
- Deployed inference API using FastAPI.

**Impact:**
- **20%** reduction in prediction error compared to legacy systems.
- **90 man-hours** saved per month in manual inspection and downtime analysis.
      `,
            keyFeatures: [
                "Real-time equipment health monitoring",
                "Automated alert generation",
                "Root cause analysis dashboard"
            ],
            challenges: [
                "Handling massive volumes of high-frequency sensor data.",
                "Addressing class imbalance in failure data."
            ],
            techStack: ["Python", "Databricks", "XGBoost", "FastAPI"]
        },
        {
            id: "auo-assistant",
            title: "Intelligent Assistant Platform (RAG -> Agent)",
            category: "work",
            role: "AI Architect",
            period: "2023 - 2025",
            companyId: "auo",
            shortDescription: "Evolved from a document retrieval system (RAG) to an autonomous Agent-based solution with Knowledge Graph integration.",
            description: `
**Evolution:**
Started as a RAG system to help engineers find technical documentation. Evolved into an Agentic workflow that can actively query databases and perform diagnostic tasks.

**Architecture:**
- **RAG Phase:** Vector database (Milvus) + LangChain.
- **Agent Phase:** Multi-agent system (LangGraph) capable of tool use (SQL queries, API calls).
- **Knowledge Graph:** Integrated Neo4j to map relationships between equipment, processes, and failure modes.

**Key Achievements:**
- Drastically reduced information retrieval time for engineers.
- Enabled complex query answering like "Why is yield dropping in Cell A?"
      `,
            keyFeatures: [
                "Multi-turn conversation capability",
                "Integration with internal manufacturing databases",
                "Hallucination reduction via Knowledge Graph constraints"
            ],
            challenges: [
                "Ensuring accuracy of technical engineering answers.",
                "Latency optimization for complex agentic chains."
            ],
            techStack: ["LLM", "RAG", "LangChain/LangGraph", "Neo4j", "Milvus"]
        },
        {
            id: "auo-yield",
            title: "Cross-Factory Yield AI",
            category: "work",
            role: "Data Scientist",
            period: "2021 - 2023",
            companyId: "auo",
            shortDescription: "Increased yield by 1.43% and reduced defects by 12.62% across multiple factories.",
            description: `
**Problem:**
Yield variations between factories producing similar products were unexplained.

**Approach:**
- Standardized data schemas across factories.
- Applied statistical analysis and ML to identify "Golden Path" parameters.
- Implemented automated setpoint recommendations.

**Results:**
- Yield improvement: **+1.43%**
- Defect reduction: **-12.62%**
- Operational savings: **~300 man-hours/month**
      `,
            keyFeatures: [
                "Cross-site data normalization",
                "Automated parameter recommendation engine"
            ],
            challenges: [
                "Inconsistent sensor calibration across sites.",
                "Cultural resistance to changing established process parameters."
            ],
            techStack: ["Python", "SQL", "Scikit-learn", "Tableau"]
        },
        {
            id: "address-normalization",
            title: "Address Data Normalization System",
            category: "research",
            role: "Research Intern",
            period: "2019",
            companyId: "academia-sinica",
            shortDescription: "Web system for standardizing unstructured address text into structured formats.",
            description: `
**Project:**
Developed a system to parse and normalize messy address data from various sources for the GIS center.

**Role:**
- Designed the database schema for address attributes.
- Built the web interface for researchers to upload and clean data.
      `,
            keyFeatures: [
                "Fuzzy string matching for address components",
                "Interactive cleaning interface"
            ],
            challenges: [
                "Handling ambiguous and non-standard address formats in Taiwan."
            ],
            techStack: ["Web Development", "Python", "PostgreSQL"]
        }
    ],
    education: [
        {
            school: "National Yunlin University of Science and Technology",
            degree: "Master",
            field: "Industrial Engineering and Management",
            period: "2019 - 2021",
            thesis: "Improve the Predicted Efficiency of Crowd Flow in Large Areas Based on R-tree and SPACE-MDL-LSTM",
            logo: "/logos/yuntech.png"
        },
        {
            school: "National Yunlin University of Science and Technology",
            degree: "Bachelor",
            field: "Industrial Engineering and Management",
            period: "2015 - 2019",
            thesis: "Optimization of machine dispatching in flexible production processes",
            logo: "/logos/yuntech.png"
        }
    ],
    awards: [
        {
            year: "2020",
            title: "Best Student Paper Award",
            organization: "TGIS Conference"
        },
        {
            year: "2019",
            title: "Best Student Paper Award",
            organization: "TGIS Conference"
        }
    ],
    skills: [
        "Project Leadership", "Architecture Design", "Python & SQL",
        "LLM Applications", "Machine Learning", "Data Engineering",
        "Databricks", "Streamlit", "FastAPI", "Django"
    ]
};

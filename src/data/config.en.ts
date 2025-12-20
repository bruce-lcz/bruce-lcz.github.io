import { Config } from './types';
import { PERSONAL_INFO, SOCIAL_LINKS, COMPANIES } from './common';

export const configEn: Config = {
    identity: {
        name: PERSONAL_INFO.name,
        role: "Information Engineer (Generative AI & LLM)",
        tagline: "Specializing in On-Premise Generative AI system architecture for the IC Design industry, with end-to-end capabilities from design to deployment.",
        email: PERSONAL_INFO.email,
        avatar: PERSONAL_INFO.avatar,
    },
    links: {
        github: SOCIAL_LINKS.github,
        linkedin: SOCIAL_LINKS.linkedin,
        email: SOCIAL_LINKS.email,
    },
    experience: [
        {
            id: "pixart",
            type: 'current',
            company: "PixArt Imaging Inc.",
            companyMeta: {
                ...COMPANIES.pixart,
                description: "A leading global fabless semiconductor company specializing in CMOS image sensors and related IC design.",
                industry: "Semiconductor / IC Design",
            },
            role: "Information Engineer (Generative AI and LLM Projects)",
            period: "Aug 2025 - Present",
            description: "Part of the IT team, responsible for building 'On-Premise' Generative AI infrastructure that meets high security standards for the IC Design industry, empowering Legal, Operations, and R&D departments.",
            techStack: ["vLLM", "Vector DB", "ASR", "AWS Bedrock", "System Architecture"],
            achievements: [
                "L&IP (Legal & IP) Support: Built a local RAG system to enable automated translation and retrieval of patent documents while ensuring data security.",
                "Operations Optimization: Developed an automated meeting minute system integrating ASR and LLM for accurate transcripts and summaries.",
                "R&D Empowerment: Implemented a local Coding Copilot service to enhance development efficiency while protecting code IP.",
                "Future Roadmap: Advancing Verilog logic optimization Copilot and enterprise-level LLM platform construction.",
            ],
            relatedProjectIds: ["pixart-legal-rag", "pixart-meeting-assistant", "pixart-coding-copilot"],
        },
        {
            id: "auo",
            type: 'past',
            company: "AUO Corporation - Advanced Manufacturing Center",
            companyMeta: {
                ...COMPANIES.auo,
                description: "A global leader in display solutions and smart manufacturing technologies.",
                industry: "Manufacturing / Display Technology",
            },
            role: "AI Engineer / Project Leader",
            period: "Aug 2021 - Aug 2025",
            description: "Led cross-functional teams to design AI architectures and optimize manufacturing processes, evolving systems from RAG to Agent-based solutions integrated with Knowledge Graphs.",
            techStack: ["Python", "SQL", "Databricks", "Streamlit", "FastAPI", "LLM Agents"],
            achievements: [
                "Cross-Factory Yield Optimization: Increased yield by 1.43% and reduced defects by 12.62% through AI parameter recommendation, saving approx. 300 man-hours monthly.",
                "Intelligent Assistant Platform: Upgraded architecture from RAG to an Agent system with Knowledge Graph integration, solving complex attribution problems.",
                "Preventive Maintenance System (PHM): Reduced defect prediction error (RMSE) by 20%, saving 90 hours of manual inspection time monthly.",
                "Professional Recognition: Project outcomes approved for internal 'Defensive Patent'; recognized as 'Level 3 Elite Talent' in Smart Manufacturing.",
            ],
            relatedProjectIds: ["auo-assistant", "auo-yield", "auo-pm"],
        },
        {
            id: "academia-sinica",
            type: 'past',
            company: "Academia Sinica - GIS Center",
            companyMeta: {
                ...COMPANIES.sinica,
                description: "Taiwan's premier academic research institution.",
                industry: "Academic Research",
            },
            role: "Research Intern",
            period: "Feb 2019 - Jul 2019",
            description: "Developed a Web system for address data sampling and normalization.",
            techStack: ["Web Development", "Data Normalization", "PostgreSQL"],
            achievements: [
                "Developed an online address sampling service system, winning the Best Student Paper Award at TGIS.",
                "Designed normalization modules and an address attribute database, solving unstructured data issues in Taiwan address formats.",
            ],
            relatedProjectIds: ["address-normalization"],
        },
    ],
    projects: [
        {
            id: "pixart-legal-rag",
            title: "Legal & IP On-Premise RAG System",
            category: "PixArt",
            role: "AI Architect / Full-Stack Developer",
            period: "2025 - Present",
            companyId: "pixart",
            shortDescription: "High-security on-premise patent retrieval and translation system for the IC design industry.",
            description: `
**Background:**
Patent documents and IP data in the IC design industry are highly sensitive and cannot be processed using public cloud LLM services.

**Solution:**
- **On-Premise Deployment:** Deployed local inference services (using vLLM) to ensure data remains within the intranet.
- **RAG Architecture:** Integrated Vector Database (Vector DB) with local models for precise retrieval and technical terminology translation.
- **Full-Stack Development:** Provided an intuitive Web interface (Streamlit/FastAPI) for legal personnel.

**Results:**
- Achieved secure automated translation of patent documents, significantly reducing analysis time.
- Ensured all sensitive IP data is processed within the corporate firewall, complying with strict security regulations.
            `,
            keyFeatures: [
                "vLLM High-Performance Inference Engine",
                "High-Security Data Processing Workflow",
                "Local Vector Retrieval Integration",
            ],
            challenges: [
                "Optimizing generation quality of local models in specific legal/technical domains.",
                "vLLM memory management and performance tuning under hardware resource constraints.",
            ],
            techStack: ["vLLM", "Vector DB", "Python", "Docker", "RAG"],
        },
        {
            id: "pixart-meeting-assistant",
            title: "Enterprise ASR Meeting Minutes System",
            category: "PixArt",
            role: "AI Engineer",
            period: "2025 - Present",
            companyId: "pixart",
            shortDescription: "Automated meeting minutes and summary generation tool integrating speech recognition and LLM.",
            description: `
**Background:**
Frequent cross-departmental meetings make manual minute-taking time-consuming and prone to omissions.

**Solution:**
- **Voice Processing:** Applied ASR (Automatic Speech Recognition) and Voice Segmentation technologies for accurate speech-to-text conversion.
- **Smart Summarization:** Integrated LLM to extract key points and organize Action Items from transcripts.

**Results:**
- Automated generation of meeting transcripts and structured summaries, enhancing operations management efficiency.
            `,
            keyFeatures: [
                "Multi-Speaker Voice Separation (Speaker Diarization)",
                "Automated Action Item Generation",
                "Meeting Key Summaries",
            ],
            challenges: [
                "Handling simultaneous speech and environmental noise interference.",
                "Accuracy calibration for semiconductor terminology speech recognition.",
            ],
            techStack: ["ASR (Whisper)", "vLLM", "Voice Segmentation", "Python"],
        },
        {
            id: "pixart-coding-copilot",
            title: "R&D On-Premise Coding Copilot",
            category: "PixArt",
            role: "AI Architect",
            period: "2025 - Present",
            companyId: "pixart",
            shortDescription: "Implemented local code assistance service to protect R&D IP.",
            description: `
**Background:**
R&D teams need AI coding assistance, but commercial Copilot solutions pose risks of code leakage.

**Solution:**
- **Localization Deployment:** Set up enterprise-exclusive Code LLM inference services (based on vLLM).
- **Integrated Application:** Integrated via API into the development environment, providing secure code completion and optimization suggestions.
- **Future Roadmap:** Expanding support to Verilog language to assist in chip design.

**Results:**
- Provided AI-assisted development capabilities to the R&D team in a fully air-gapped environment.
            `,
            keyFeatures: [
                "Code LLM Local Deployment",
                "vLLM Inference Service",
                "Verilog Syntax Support (Planned)",
            ],
            challenges: [
                "Latency optimization for on-premise inference services.",
                "Fine-tuning models for Hardware Description Languages (HDL).",
            ],
            techStack: ["vLLM", "Code LLM", "Python", "Docker"],
        },
        {
            id: "auo-assistant",
            title: "Intelligent Assistant Platform (RAG -> Agent)",
            category: "AUO",
            role: "AI Architect",
            period: "2023 - 2025",
            companyId: "auo",
            shortDescription: "Evolved from document retrieval (RAG) to an autonomous Agent system with Knowledge Graph.",
            description: `
**Evolution:**
Initially a RAG system for engineers to find technical documents, evolved into an Agentic workflow capable of active database querying and diagnostic tasks.

**Architecture:**
- **RAG Phase:** Vector Database + LangChain.
- **Agent Phase:** Multi-Agent System (LangGraph) with tool usage capabilities (SQL Query, API Call).
- **Knowledge Graph:** Integrated Neo4j to map relationships between equipment, processes, and proprietary terminology.

**Key Achievements:**
- Evolved from simple Q&A to answering complex attribution questions like "Why did the yield drop?".
- Established Table Description Generator for automated knowledge preparation workflows.
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
            techStack: ["LLM", "LangGraph", "Neo4j", "RAG", "Python"],
        },
        {
            id: "auo-yield",
            title: "Cross-Factory Yield AI Optimization (Golden Path)",
            category: "AUO",
            role: "Data Scientist",
            period: "2021 - 2023",
            companyId: "auo",
            shortDescription: "Increased yield by 1.43% and reduced defects by 12.62% across multiple factories.",
            description: `
**Problem:**
Unexplained yield differences existed between different factories producing similar products.

**Methodology:**
- **Data Standardization:** Unified sensor data formats and definitions across factories.
- **Golden Path Algorithm:** Identified optimal machine combination paths and parameter settings.
- **Explainable AI (XAI):** Provided engineers with basis for parameter adjustments, avoiding "black box" predictions.

**Results:**
- Yield Increase: **+1.43%**
- Defect Reduction: **-12.62%**
- Operational Savings: **Approx. 300 man-hours monthly**
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
            techStack: ["Python", "SQL", "Scikit-learn", "LIME", "Genetic Algorithm"],
        },
        {
            id: "auo-pm",
            title: "Preventive Maintenance System (PM)",
            category: "AUO",
            role: "AI Engineer / Project Lead",
            period: "2022 - 2024",
            companyId: "auo",
            shortDescription: "Implemented custom Loss Function, reducing defect prediction error by 20%.",
            description: `
**Background:**
Traditional maintenance relied on fixed cycles, unable to address sudden equipment anomalies.

**Solution:**
- Developed time-series prediction models based on LSTM.
- **Innovation:** Designed Trend Consistency Loss Function to focus on capturing anomaly trends rather than single-point errors.
- Integrated scheduling systems to automatically suggest optimal maintenance timing.

**Results:**
- Reduced prediction error (RMSE) by **20%**.
- Saved **90 hours** of manual inspection time monthly.
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
            techStack: ["Python", "TensorFlow/PyTorch", "LSTM", "FastAPI"],
        },
        {
            id: "address-normalization",
            title: "Address Data Normalization System",
            category: "Research",
            role: "Research Intern",
            period: "2019",
            companyId: "academia-sinica",
            shortDescription: "Automated normalization system solving Taiwan address format chaos.",
            description: `
**Project:**
Developed a system for the GIS Center to parse and normalize unstructured address data from various sources.

**Achievements:**
- Designed address normalization modules and built a national address attribute database.
- Won the 2019 TGIS Best Student Paper Award.
            `,
            keyFeatures: [
                "Address String Normalization Algorithm",
                "Web Sampling Service System",
            ],
            challenges: [
                "Handling high ambiguity in Taiwan address formats.",
            ],
            techStack: ["Python", "Django", "PostgreSQL", "Web Development"],
        },
    ],
    education: [
        {
            school: "National Yunlin University of Science and Technology",
            degree: "Master's Degree",
            field: "Industrial Engineering and Management",
            period: "2019 - 2021",
            thesis: "Efficiency Optimization of Large-Area Crowd Flow Prediction based on R-tree and SPACE-MDL-LSTM",
            logo: COMPANIES.yuntech.logo,
        },
        {
            school: "National Yunlin University of Science and Technology",
            degree: "Bachelor's Degree",
            field: "Industrial Engineering and Management",
            period: "2015 - 2019",
            thesis: "Optimization of Machine Dispatching in Flexible Production Processes",
            logo: COMPANIES.yuntech.logo,
        },
    ],
    awards: [
        {
            year: "2025",
            title: "Smart Manufacturing Level 3 Elite Talent (Predictive Production)",
            organization: "AUO Corporation",
        },
        {
            year: "2020",
            title: "Best Student Paper Award",
            organization: "Taiwan Association of Geographic Information System Conference (TGIS)",
        },
        {
            year: "2019",
            title: "Best Student Paper Award",
            organization: "Taiwan Association of Geographic Information System Conference (TGIS)",
        },
    ],
    skills: [
        {
            category: "Generative AI & LLM Architecture",
            items: [
                "On-Premise Deployment (vLLM)",
                "RAG Architecture",
                "Multi-Agent Systems (LangGraph)",
                "Knowledge Graph (Neo4j)",
                "ASR & Audio Processing (Whisper)",
                "Prompt Engineering",
                "Vector Database Integration",
            ],
        },
        {
            category: "System Engineering & Backend",
            items: [
                "System Architecture Design",
                "Python Backend (FastAPI / Django)",
                "API Design & Microservices",
                "Containerization (Docker)",
                "Cloud Services (AWS Bedrock)",
                "Git & CI/CD Basics",
            ],
        },
        {
            category: "Data Science & Algorithms",
            items: [
                "Time Series Forecasting (LSTM)",
                "Custom Loss Function Design",
                "Explainable AI (XAI / LIME)",
                "Data Engineering & ETL (Databricks / SQL)",
                "Algorithm Optimization (Genetic Algorithm)",
            ],
        },
        {
            category: "Technical Leadership",
            items: [
                "Technical Project Management",
                "Cross-functional Team Leadership",
                "AI Strategy Planning",
                "Problem Solving & RCA",
            ],
        },
    ],
};
import { Config } from './types';
import { PERSONAL_INFO, SOCIAL_LINKS, COMPANIES } from './common';
import { UNIFIED_PROJECTS } from './projects';

export const configEn: Config = {
    identity: {
        name: PERSONAL_INFO.name,
        role: "AI Solution Architect & GenAI Workflow Builder",
        tagline: "I turn messy engineering and business problems into practical AI workflows, from the first problem framing to systems people can actually use.",
        about: [
            "I work where AI ideas meet real constraints: confidential documents, on-prem environments, manufacturing data, legacy workflows, and teams that need more than a demo. My strength is turning those constraints into clear system designs, usable tools, and workflows that fit how people already work.",
            "I enjoy the space between architecture and implementation. Beyond building LLM, RAG, agent, and automation systems, I have led internal workshops, shared adoption practices with engineering teams, and returned to academic labs and universities to give talks and technical feedback."
        ],
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
            description: "Part of the IT team, designing GenAI workflows for IC design teams in on-prem and air-gapped environments. I translate high-security requirements from Legal, Operations, and R&D into internal AI systems that are practical enough to become part of daily work.",
            techStack: ["vLLM", "Vector DB", "ASR", "AWS Bedrock", "System Architecture"],
            achievements: [
                "Designed on-prem Legal AI workflows for secure contract review and confidential patent translation without sending sensitive documents to cloud AI services.",
                "Built a fully offline meeting intelligence workflow integrating ASR, speaker diarization, and structured summarization, improving long-audio processing efficiency by 50%–70%.",
                "Designed and deployed an internal GenAI workspace for air-gapped IC design teams, enabling coding assistants, multimodal AI, and AI-assisted engineering workflows.",
            ],
            relatedProjectIds: ["pixart-genai-hub", "legal-contract-comparison", "patent-translation-service", "auto-minutes-system"],
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
            description: "Led cross-functional AI initiatives for manufacturing, turning operational variability, engineering knowledge, and process bottlenecks into decision-support workflows and explainable recommendations that production teams could act on.",
            techStack: ["Python", "SQL", "Databricks", "Streamlit", "FastAPI", "LLM Agents"],
            achievements: [
                "Designed a cross-factory AI optimization workflow that translated manufacturing variability into explainable parameter recommendations: +1.43% yield, -12.62% defects, ~300 man-hours saved monthly.",
                "Led the evolution of an internal manufacturing knowledge assistant from basic RAG search into a Multi-Agent decision-support system integrating SQL tools and Knowledge Graph reasoning.",
                "Predictive maintenance system (PHM): -20% defect prediction error (RMSE), 90 man-hours saved monthly.",
                "Outcomes approved for internal Defensive Patent; recognized as Level 3 Elite Talent in Smart Manufacturing.",
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
    projects: UNIFIED_PROJECTS.map(p => ({
        id: p.id,
        category: p.category,
        period: p.period,
        companyId: p.companyId,
        techStack: p.techStack,
        media: p.media,
        link: p.link,
        ...p.translations.en,
    })),
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
            category: "Generative AI & LLM",
            items: [
                "On-Premise LLM Serving (vLLM)",
                "RAG Architecture & Vector DB",
                "Multi-Agent Systems (LangGraph)",
                "Knowledge Graph (Neo4j)",
                "ASR & Speaker Diarization (Whisper)",
                "Vision-LLM & Multimodal Pipelines",
                "Prompt Engineering",
            ],
        },
        {
            category: "System & Backend Engineering",
            items: [
                "System Architecture Design",
                "Python (FastAPI / Django)",
                "REST API & Microservices",
                "Cloudflare Workers & D1",
                "AWS Bedrock",
                "Docker & Containerization",
            ],
        },
        {
            category: "Data Science & ML",
            items: [
                "Time Series Forecasting (LSTM)",
                "Custom Loss Function Design",
                "Explainable AI (XAI / LIME)",
                "Genetic Algorithm Optimization",
                "Data Engineering & ETL (Databricks / SQL)",
            ],
        },
        {
            category: "Frontend & Dev Tools",
            items: [
                "Streamlit (AI Internal Tools)",
                "AI-Assisted Web Dev",
                "Git & Version Control",
                "CI/CD",
                "Linux Management",
            ],
        },
    ],
};

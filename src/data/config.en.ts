import { Config } from './types';
import { PERSONAL_INFO, SOCIAL_LINKS, COMPANIES } from './common';
import { UNIFIED_PROJECTS } from './projects';

export const configEn: Config = {
    identity: {
        name: PERSONAL_INFO.name,
        role: 'AI Application Engineer | Enterprise GenAI & Workflow Productization',
        tagline: 'Building secure, production-ready AI workflows and internal products for legal, engineering, manufacturing, and knowledge work.',
        about: [
            'I select on-prem models, OCR, ASR, RAG, agents, and APIs only when they solve the actual workflow problem under real security and operating constraints.',
            'My work spans requirement framing, system composition, validation, and internal productization — with a focus on delivering workflows teams can trust and use repeatedly.',
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
            id: 'pixart',
            type: 'current',
            company: 'PixArt Imaging Inc.',
            companyMeta: {
                ...COMPANIES.pixart,
                description: 'A global fabless semiconductor company focused on CMOS image sensors and related IC design.',
                industry: 'Semiconductor / IC Design',
            },
            role: 'Information Engineer (Generative AI / LLM Projects)',
            period: 'Aug 2025 - Present',
            description: 'I work across Legal, R&D, and internal knowledge scenarios, turning high-constraint AI requests into internal workflows and products teams can actually use.',
            techStack: ['Python', 'FastAPI', 'vLLM', 'Workflow Design', 'Internal Productization'],
            achievements: [
                'Delivered reusable on-prem workflows for legal document comparison, patent translation, meeting intelligence, and engineering file processing under strict data-security constraints.',
                'Designed a human-reviewable document intelligence workflow with OCR, LLM restructuring, consistency checks, and diff-based review for sensitive legal documents.',
                'Designed an internal GenAI workspace that made model access, multimodal analysis, and engineering support easier for teams to adopt repeatedly.',
            ],
            relatedProjectIds: ['pixart-genai-hub', 'legal-contract-comparison', 'patent-translation-service', 'auto-minutes-system'],
        },
        {
            id: 'auo',
            type: 'past',
            company: 'AUO Corporation - Advanced Manufacturing Center',
            companyMeta: {
                ...COMPANIES.auo,
                description: 'A global display and smart manufacturing company with complex operational workflows.',
                industry: 'Manufacturing / Display Technology',
            },
            role: 'AI Engineer / Project Leader',
            period: 'Aug 2021 - Aug 2025',
            description: 'Built manufacturing-facing AI systems that supported decision-making, process optimization, and operational workflows rather than model experiments in isolation.',
            techStack: ['Python', 'SQL', 'Databricks', 'Streamlit', 'FastAPI', 'Agent Workflows'],
            achievements: [
                'Improved yield by 1.43%, reduced defects by 12.62%, and saved approximately 300 man-hours monthly through cross-factory optimization and explainable recommendations.',
                'Evolved a manufacturing assistant from retrieval into a domain-aware decision-support workflow with SQL/API tools and process-knowledge reasoning.',
                'Reduced defect-prediction RMSE by 20% and saved approximately 90 man-hours monthly through an LSTM-based preventive-maintenance workflow.',
            ],
            relatedProjectIds: ['auo-assistant', 'auo-yield', 'auo-pm'],
        },
        {
            id: 'academia-sinica',
            type: 'past',
            company: 'Academia Sinica - GIS Center',
            companyMeta: {
                ...COMPANIES.sinica,
                description: "Taiwan's leading academic research institution.",
                industry: 'Academic Research',
            },
            role: 'Research Intern',
            period: 'Feb 2019 - Jul 2019',
            description: 'Worked on data normalization and web-based verification workflows for messy address datasets.',
            techStack: ['Python', 'Django', 'PostgreSQL', 'Data Quality'],
            achievements: [
                'Built an address normalization workflow and supporting data structures for heterogeneous datasets.',
                'Won the Best Student Paper Award at TGIS 2019.',
            ],
            relatedProjectIds: ['address-normalization'],
        },
    ],
    projects: UNIFIED_PROJECTS.map((project) => ({
        id: project.id,
        category: project.category,
        visualType: project.visualType,
        period: project.period,
        companyId: project.companyId,
        heroBadges: project.heroBadges,
        heroImage: project.heroImage,
        techStack: project.techStack,
        media: project.media,
        link: project.link,
        ...project.translations.en,
    })),
    education: [
        {
            school: 'National Yunlin University of Science and Technology',
            degree: "Master's Degree",
            field: 'Industrial Engineering and Management',
            period: '2019 - 2021',
            thesis: 'Improve the Predicted Efficiency of Crowd Flow in Large Areas Based on the R-tree and the SPACE-MDL-LSTM',
            logo: COMPANIES.yuntech.logo,
        },
        {
            school: 'National Yunlin University of Science and Technology',
            degree: "Bachelor's Degree",
            field: 'Industrial Engineering and Management',
            period: '2015 - 2019',
            thesis: 'Optimization of machine dispatching in flexible production processes',
            logo: COMPANIES.yuntech.logo,
        },
    ],
    awards: [
        {
            year: '2025',
            title: 'Smart Manufacturing Level 3 Elite Talent',
            organization: 'AUO Corporation',
        },
        {
            year: '2020',
            title: 'Best Student Paper Award',
            organization: 'Taiwan Geographic Information Society Conference (TGIS)',
        },
        {
            year: '2019',
            title: 'Best Student Paper Award',
            organization: 'Taiwan Geographic Information Society Conference (TGIS)',
        },
    ],
    skills: [
        {
            category: 'Requirement Framing',
            description: 'How I turn vague AI requests into scoped, executable product and workflow decisions.',
            items: [
                'Ambiguous need breakdown',
                'Workflow design',
                'User scenario mapping',
                'Constraint-driven solution planning',
            ],
        },
        {
            category: 'AI System Composition',
            description: 'How I combine model capabilities, tools, and verification into workable systems.',
            items: [
                'On-premise LLM serving and internal model integration',
                'RAG / agent / tool calling',
                'OCR / ASR / document parsing when needed',
                'Human review, validation, and fallback design',
            ],
        },
        {
            category: 'Product Implementation',
            description: 'How I package AI workflows into products people can actually use.',
            items: [
                'Backend workflow orchestration',
                'Internal tool experience design',
                'Deployment-ready packaging',
                'Data and file workflow automation',
            ],
        },
        {
            category: 'Domain Application',
            description: 'Where I have applied workflow design and AI productization in practice.',
            items: [
                'Legal & IP workflows',
                'Meeting intelligence',
                'Manufacturing decision support',
                'Engineering productivity tools',
            ],
        },
    ],
};

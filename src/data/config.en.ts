import { Config } from './types';
import { PERSONAL_INFO, SOCIAL_LINKS, COMPANIES } from './common';
import { UNIFIED_PROJECTS } from './projects';

export const configEn: Config = {
    identity: {
        name: PERSONAL_INFO.name,
        role: 'AI Application Engineer / AI Solution Builder',
        tagline: 'Designing and building enterprise AI applications, internal tools, and automation workflows.',
        about: [
            'I choose between on-prem models, OCR, ASR, RAG, agents, and APIs based on data sensitivity, accuracy, latency, and maintenance cost.',
            'My work covers requirement framing, system design, implementation, deployment, and user rollout.',
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
            description: 'I build generative AI applications for Legal, R&D, and internal knowledge teams, from requirements through deployment and rollout.',
            techStack: ['Python', 'FastAPI', 'vLLM', 'Workflow Design', 'Internal Productization'],
            achievements: [
                'Shipped legal document comparison and patent translation workflows for sensitive internal document handling.',
                'Built a meeting intelligence workflow that turned internal audio into structured minutes and summaries.',
                'Designed an internal GenAI workspace that combined model access, multimodal analysis, and engineering utilities.',
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
            description: 'Built manufacturing AI systems for decision support, process optimization, and preventive maintenance.',
            techStack: ['Python', 'SQL', 'Databricks', 'Streamlit', 'FastAPI', 'Agent Workflows'],
            achievements: [
                'Turned cross-factory variability into explainable optimization recommendations engineers could act on.',
                'Evolved a manufacturing assistant from retrieval into a domain-aware decision-support workflow.',
                'Built a maintenance planning workflow that connected predictive signals to scheduling decisions.',
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
                'LLM API / internal model integration',
                'RAG / agent / tool calling',
                'OCR / ASR / document parsing when needed',
                'Validation and fallback design',
            ],
        },
        {
            category: 'Product Implementation',
            description: 'How I turn AI capabilities into deployable, maintainable internal products.',
            items: [
                'Backend workflow orchestration',
                'Internal tool experience design',
                'Deployment-ready packaging',
                'Data and file workflow automation',
            ],
        },
        {
            category: 'Domain Application',
            description: 'The business and product domains where I have delivered AI systems.',
            items: [
                'Legal & IP workflows',
                'Meeting intelligence',
                'Manufacturing decision support',
                'Engineering productivity tools',
            ],
        },
    ],
};

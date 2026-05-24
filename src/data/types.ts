export interface CompanyMeta {
    description?: string;
    logo?: string; // path to image
    url?: string;
    industry?: string;
}

export interface Job {
    id: string; // Added ID for linking
    type: 'current' | 'past';
    company: string;
    companyMeta?: CompanyMeta;
    role: string;
    period: string;
    description: string;
    techStack: string[];
    achievements: string[];
    relatedProjectIds?: string[]; // IDs linking to key projects
}

export interface ProjectMedia {
    type: 'image' | 'video';
    url: string;
    caption?: string;
}

export interface DetailedProject {
    id: string;
    title: string;
    category: string;
    visualType?:
        | 'legal-comparison'
        | 'patent-translation'
        | 'meeting-intelligence'
        | 'genai-workspace'
        | 'gym-tracker'
        | 'manufacturing-assistant'
        | 'yield-optimization'
        | 'preventive-maintenance'
        | 'address-normalization';
    role: string;
    company?: string;
    period: string;
    companyName?: string;
    companyId?: string; // Link back to job
    shortDescription: string; // Used for cards/previews
    description: string; // Full markdown description
    keyFeatures: string[];
    challenges: string[];
    summary?: string;
    problemSolved?: string[];
    implementationHighlights?: string[];
    impact?: string[];
    oneLineSummary?: string;
    cardTags?: string[];
    heroBadges?: string[];
    heroImage?: string;
    techStack: string[];
    media?: ProjectMedia[];
    link?: string;
}

export interface ProjectTranslation {
    title: string;
    role: string;
    visualType?: DetailedProject['visualType'];
    company?: string;
    companyName?: string;
    shortDescription: string;
    description: string;
    keyFeatures: string[];
    challenges: string[];
    summary?: string;
    problemSolved?: string[];
    implementationHighlights?: string[];
    impact?: string[];
    oneLineSummary?: string;
    cardTags?: string[];
    heroBadges?: string[];
    heroImage?: string;
}

export interface UnifiedProject {
    id: string;
    category: string;
    period: string;
    visualType?: DetailedProject['visualType'];
    companyId?: string;
    heroBadges?: string[];
    heroImage?: string;
    techStack: string[];
    media?: ProjectMedia[];
    link?: string;
    translations: {
        en: ProjectTranslation;
        zh: ProjectTranslation;
    };
}

export interface Education {
    school: string;
    degree: string;
    field: string;
    period: string;
    thesis: string;
    logo?: string;
}

export interface Award {
    year: string;
    title: string;
    organization: string;
}

export interface UserIdentity {
    name: string;
    role: string;
    tagline: string;
    about: string[];
    email: string;
    avatar: string;
}

export interface SocialLinks {
    github: string;
    linkedin: string;
    resume?: string;
    email: string;
}

export interface SkillCategory {
    category: string;
    items: string[];
}

export interface Config {
    identity: UserIdentity;
    links: SocialLinks;
    experience: Job[];
    projects: DetailedProject[];
    education: Education[];
    awards: Award[];
    skills: SkillCategory[];
}


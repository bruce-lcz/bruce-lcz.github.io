export interface CompanyMeta {
    description?: string;
    logo?: string;
    url?: string;
    industry?: string;
}

export type ChangelogItemTag = 'new' | 'improved' | 'impact';

export interface ChangelogItem {
    tag: ChangelogItemTag;
    text: string;
}

export interface Job {
    id: string;
    type: 'current' | 'past';
    version: string;
    releaseTag: string;
    releaseSummary: string;
    company: string;
    companyMeta?: CompanyMeta;
    role: string;
    period: string;
    description: string;
    techStack: string[];
    achievements: string[];
    changelog: ChangelogItem[];
    relatedProjectIds?: string[];
}

export interface ProjectMedia {
    type: 'image' | 'video';
    url: string;
    caption?: string;
}

export interface ProjectTimeline {
    start: string;
    end?: string;
    status: 'ongoing' | 'completed';
    group: 'platform' | 'delivery' | 'side-project';
    featured?: boolean;
}

export interface NarrativeSection {
    context?: string[];
    constraint?: string[];
    myRole?: string[];
    systemDesign?: string[];
    outcome?: string[];
}

export interface DetailedProject extends NarrativeSection {
    id: string;
    title: string;
    coreValueLine?: string;
    category: string;
    timeline: ProjectTimeline;
    visualType?:
        | 'asc-merge-c-generator'
        | 'legal-comparison'
        | 'patent-translation'
        | 'meeting-intelligence'
        | 'genai-workspace'
        | 'gym-tracker'
        | 'manufacturing-assistant'
        | 'yield-optimization'
        | 'preventive-maintenance'
        | 'address-normalization'
        | 'workforce-analytics'
        | 'datasheet-review'
        | 'llm-telemetry'
        | 'evidence-qa'
        | 'genai-enablement';
    role: string;
    company?: string;
    period: string;
    companyName?: string;
    companyId?: string;
    shortDescription: string;
    description: string;
    keyFeatures: string[];
    challenges: string[];
    summary?: string;
    problemSolved?: string[];
    implementationHighlights?: string[];
    impact?: string[];
    oneLineSummary?: string;
    beforeSummary?: string;
    afterSummary?: string;
    cardTags?: string[];
    heroBadges?: string[];
    heroImage?: string;
    techStack: string[];
    media?: ProjectMedia[];
    link?: string;
}

export interface ProjectTranslation extends NarrativeSection {
    title: string;
    coreValueLine?: string;
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
    beforeSummary?: string;
    afterSummary?: string;
    cardTags?: string[];
    heroBadges?: string[];
    heroImage?: string;
}

export interface UnifiedProject {
    id: string;
    category: string;
    period: string;
    timeline: ProjectTimeline;
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
    version?: string;
    releaseTag?: string;
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
    description?: string;
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

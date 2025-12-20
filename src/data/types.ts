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
    category: 'work' | 'side-project' | 'research';
    role: string;
    period: string;
    companyId?: string; // Link back to job
    shortDescription: string; // Used for cards/previews
    description: string; // Full markdown description
    keyFeatures: string[];
    challenges: string[];
    techStack: string[];
    media?: ProjectMedia[];
    link?: string;
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
    email: string;
    avatar: string;
}

export interface SocialLinks {
    github: string;
    linkedin: string;
    resume?: string;
    email: string;
}

export interface Config {
    identity: UserIdentity;
    links: SocialLinks;
    experience: Job[];
    projects: DetailedProject[];
    education: Education[];
    awards: Award[];
    skills: string[];
}

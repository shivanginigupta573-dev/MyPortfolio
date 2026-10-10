export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  role: string;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  architectureHighlights?: string[];
  metrics?: string[];
  category: "Full Stack" | "NLP / Data Science" | "Distributed Systems" | "Systems Engineering";
}

export interface OpenSourceContribution {
  id: string;
  projectName: string;
  organization?: string;
  role: string;
  description: string;
  technologies: string[];
  impact: string;
  link?: string;
  year: string;
}

export interface SkillCategory {
  title: string;
  skills: Array<{
    name: string;
    level?: string;
    highlight?: boolean;
  }>;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  tagline: string;
  bio: string;
  statement: string;
  engineeringPhilosophy: string;
  location: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
}

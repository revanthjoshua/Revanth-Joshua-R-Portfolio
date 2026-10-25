export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  number: string;
}

export type SkillCategory =
  | 'all'
  | 'frontend'
  | 'backend'
  | 'programming'
  | 'data'
  | 'database'
  | 'ai_ml'
  | 'tools';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  iconName?: string;
}

export interface SkillGroup {
  title: string;
  category: SkillCategory;
  description: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  description: string;
  takeaways: string[];
  workflowStages?: string[];
  techStack: string[];
  featured?: boolean;
  status: 'Production Tested' | 'Active Implementation' | 'Prototype' | 'Award Winner' | 'Academic Project';
  linkText?: string;
  url?: string;
  image?: string;
  evidenceNotes?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Internship' | 'Virtual Internship' | 'Practical Training' | 'Industrial Visit';
  certificate?: string;
  description: string;
  responsibilities: string[];
  image?: string;
  certificateImage?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  qualification: string;
  period: string;
  score: string;
  highlights?: string[];
  image?: string;
}

export interface HackathonItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  recognition?: string;
  description: string;
  badge: string;
  certificateLost?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  validUntil?: string;
  badge: string;
  verified: boolean;
  description: string;
}

export interface AccomplishmentItem {
  id: string;
  title: string;
  category: 'International Sports' | 'Paper Presentation' | 'Career Milestone' | 'Collegiate Athletics' | 'Workshop' | 'Coding';
  date: string;
  organization: string;
  description: string;
  badge?: string;
  placement?: string;
  isPersonalDocument?: boolean;
  verified?: boolean;
  image?: string;
}

export interface ContactDetails {
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  leetcode?: string;
  instagram: string;
  facebook: string;
  resumeUrl: string;
  location: string;
  status: string;
}


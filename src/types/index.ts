export type Language = 'en' | 'km';
export type Theme = 'light' | 'dark';
export type JobType = 'Full-time' | 'Part-time' | 'Contract';

export type TeamCategory =
  'All' | 'Development' | 'UI/UX' | 'QA' | 'Planning' | 'Infrastructure';
export type ProjectCategory =
  'All' | 'Web' | 'Software' | 'QA' | 'Data' | 'Telecom';

export interface SocialLinks {
  portfolio?: string;
  email?: string;
  phone?: string;
  location?: string;
  github?: string;
  linkedin?: string;
  facebook?: string;
  telegram?: string;
  cvUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; icon?: string; color?: string }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type?: 'Full-time' | 'Part-time' | 'Internship' | 'Contract';
  description: string;
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface MemberProjectSummary {
  title: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  link?: string;
  repoUrl?: string;
  caseStudyUrl?: string;
  repositories?: { label: string; url: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  nameKm: string;
  role: string;
  roleKm: string;
  category: TeamCategory[];
  tagline: string;
  taglineKm: string;
  image: string;
  badge?: string;
  badgeKm?: string;
  bio: string;
  bioKm: string;
  contact: SocialLinks;
  lookingFor: JobType[];
  languages: { language: string; level: string }[];
  softSkills: string[];
  technicalSkills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
  selectedProjects: MemberProjectSummary[];
  additionalLearning?: string[];
  languagesKm?: TeamMember['languages'];
  softSkillsKm?: string[];
  technicalSkillsKm?: SkillCategory[];
  experienceKm?: (Omit<ExperienceItem, 'type'> & { type?: string })[];
  educationKm?: EducationItem[];
  selectedProjectsKm?: MemberProjectSummary[];
  additionalLearningKm?: string[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  titleKm: string;
  category: ProjectCategory;
  type: string; // "Professional Experience" | "Academic Project" | "Internship Experience"
  period: string;
  tagline: string;
  taglineKm: string;
  image?: string;
  technologies: string[];
  leadMemberId?: string;
  leadMemberName: string;
  leadMemberRole: string;
  relatedMemberIds: string[];
  problemGoal: string;
  problemGoalKm?: string;
  solutionApproach: string;
  solutionApproachKm?: string;
  keyFeatures: string[];
  keyFeaturesKm?: string[];
  outcomeLearning: string[];
  outcomeLearningKm?: string[];
  repoUrl?: string;
  repositories?: { label: string; url: string }[];
  liveUrl?: string;
}

export interface ExpertiseDomain {
  id: string;
  title: string;
  titleKm: string;
  description: string;
  descriptionKm: string;
  iconName: string;
  technologies: string[];
  relatedMemberIds: string[];
}

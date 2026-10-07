import type { TeamMember } from '../../types/index.ts';

export type TeamMemberEnglish = Pick<
  TeamMember,
  | 'name'
  | 'role'
  | 'tagline'
  | 'badge'
  | 'bio'
  | 'languages'
  | 'softSkills'
  | 'experience'
  | 'education'
  | 'selectedProjects'
  | 'additionalLearning'
>;

export type SharedTeamMember = Omit<
  TeamMember,
  'id' | keyof TeamMemberEnglish | `${string}Km`
>;

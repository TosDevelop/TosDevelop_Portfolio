import type { TeamMember } from '../types/index.ts';
import { withKhmerSuffix } from './localization.ts';
import { TEAM_EN } from './team/en.ts';
import { TEAM_KM } from './team/km.ts';
import { TEAM_SHARED } from './team/shared.ts';

const ids = Object.keys(TEAM_EN) as (keyof typeof TEAM_EN)[];

export const TEAM_MEMBERS: TeamMember[] = ids.map((id) => ({
  id,
  ...TEAM_SHARED[id],
  ...TEAM_EN[id],
  ...withKhmerSuffix(TEAM_KM[id]),
}));

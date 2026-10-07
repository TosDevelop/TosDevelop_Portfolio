import type { ExpertiseDomain } from '../types/index.ts';
import { withKhmerSuffix } from './localization.ts';
import { EXPERTISE_EN } from './expertise/en.ts';
import { EXPERTISE_KM } from './expertise/km.ts';
import { EXPERTISE_SHARED } from './expertise/shared.ts';

const ids = Object.keys(EXPERTISE_EN) as (keyof typeof EXPERTISE_EN)[];

export const EXPERTISE_DOMAINS: ExpertiseDomain[] = ids.map((id) => ({
  id,
  ...EXPERTISE_SHARED[id],
  ...EXPERTISE_EN[id],
  ...withKhmerSuffix(EXPERTISE_KM[id]),
}));

export { ALL_TECH_BADGES, type TechBadgeItem } from './expertise/shared.ts';

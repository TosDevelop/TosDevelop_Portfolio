import type { ProjectCaseStudy } from '../types/index.ts';
import { withKhmerSuffix } from './localization.ts';
import { PROJECTS_EN } from './projects/en.ts';
import { PROJECTS_KM } from './projects/km.ts';
import { PROJECTS_SHARED } from './projects/shared.ts';

const ids = Object.keys(PROJECTS_EN) as (keyof typeof PROJECTS_EN)[];

export const PROJECTS_DATA: ProjectCaseStudy[] = ids.map((id) => ({
  id,
  ...PROJECTS_SHARED[id],
  ...PROJECTS_EN[id],
  ...withKhmerSuffix(PROJECTS_KM[id]),
}));

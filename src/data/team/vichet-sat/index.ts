import type { TeamMember } from '../../../types/index.ts';
import { withKhmerSuffix } from '../../localization.ts';
import { en } from './en.ts';
import { km } from './km.ts';
import { shared } from './shared.ts';

export const vichetSat = {
  id: 'vichet-sat',
  ...shared,
  ...en,
  ...withKhmerSuffix(km),
} satisfies TeamMember;

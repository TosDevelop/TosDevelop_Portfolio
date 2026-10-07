import type { TeamMember } from '../types/index.ts';
import { yaPhorn } from './team/ya-phorn/index.ts';
import { vichetSat } from './team/vichet-sat/index.ts';
import { sereyPhem } from './team/serey-phem/index.ts';
import { reaksmeySan } from './team/reaksmey-san/index.ts';
import { sokhaRathana } from './team/sokha-rathana/index.ts';

// Member order used throughout the website.
export const TEAM_MEMBERS: TeamMember[] = [
  yaPhorn,
  vichetSat,
  sereyPhem,
  reaksmeySan,
  sokhaRathana,
];

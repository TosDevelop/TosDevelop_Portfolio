import type { TeamMember } from '../../types/index.ts';
import { yaPhorn } from './ya-phorn/index.ts';
import { vichetSat } from './vichet-sat/index.ts';
import { sereyPhem } from './serey-phem/index.ts';
import { reaksmeySan } from './reaksmey-san/index.ts';
import { sokhaRathana } from './sokha-rathana/index.ts';
import { daneMiok } from './dane-miok/index.ts';

// Member order used throughout the website.
export const TEAM_MEMBERS: TeamMember[] = [
  yaPhorn,
  vichetSat,
  sereyPhem,
  reaksmeySan,
  sokhaRathana,
  daneMiok,
];

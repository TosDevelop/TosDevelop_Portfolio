import { projects } from './projects/km.ts';
import type { TeamMember } from '../../../types/index.ts';
import type { KhmerContent } from '../../localization.ts';

export const km = {
  selectedProjects: projects,
  // Keep the supplied spelling until the Khmer name is confirmed.
  name: 'Dane Miok',
  role: 'អ្នកអភិវឌ្ឍន៍ Full Stack',
  tagline: 'អ្នកអភិវឌ្ឍន៍ Full Stack នៅ TosDevelop។',
  badge: 'អ្នកអភិវឌ្ឍន៍ Full Stack',
  bio: 'Dane Miok ជាអ្នកអភិវឌ្ឍន៍ Full Stack ក្នុងក្រុម TosDevelop។',
} satisfies KhmerContent<TeamMember>;

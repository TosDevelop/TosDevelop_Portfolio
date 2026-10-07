import { projects } from './projects/km.ts';
import type { TeamMember } from '../../../types/index.ts';
import type { KhmerContent } from '../../localization.ts';

export const km = {
  selectedProjects: projects,
  name: 'រតនា សុខា',
  role: 'អ្នកអភិវឌ្ឍន៍កម្មវិធីកម្រិតដំបូង',
  tagline:
    'ការអភិវឌ្ឍន៍គេហទំព័រ មូលដ្ឋានគ្រឹះផ្នែកទន់ និងការគាំទ្រទិន្នន័យ/IT ជាក់ស្តែង។',
  badge: 'Junior Developer',
  bio: 'វិស្វករផ្នែកទន់ដែលពោរពេញដោយថាមពល មានមូលដ្ឋានគ្រឹះក្បួនដោះស្រាយរឹងមាំ និងការសរសេរកូដស្អាតលើបរិស្ថាន Client និង Server។',
} satisfies KhmerContent<TeamMember>;

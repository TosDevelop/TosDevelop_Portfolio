import type { MemberProjectSummary } from '../../../../types/index.ts';

export const projects = [
  {
    title: 'Leave Management System',
    role: 'Developer',
    period: 'Jul – Aug 2025',
    description:
      'Laravel-based system for staff attendance, leave and permission tracking with real-time team visibility and AWS EC2 deployment.',
    technologies: ['Laravel', 'MySQL', 'Vue.js', 'AWS EC2', 'Ubuntu'],
  },
  {
    title: 'POS System',
    role: 'Scrum Master & Developer',
    period: 'Mar – Apr 2025',
    description:
      'Full-featured POS system with inventory management, financial tracking, barcode scanning and Telegram chatbot integration.',
    technologies: [
      'PHP',
      'MySQL',
      'Bootstrap',
      'jQuery',
      'Chart.js',
      'AWS EC2',
    ],
  },
  {
    title: 'Task Management App',
    role: 'Team Lead',
    period: 'Jan 2025',
    description:
      'Task organization application with status tracking and calendar integration.',
    technologies: ['Express', 'Firebase', 'SASS', 'Bootstrap', 'Chart.js'],
  },
  {
    title: 'Web Scraping Automation',
    role: 'Team Lead',
    period: 'Nov 2024',
    description:
      'Desktop tool for collecting and organizing website data with a user-friendly interface.',
    technologies: ['Python', 'Requests', 'BeautifulSoup', 'Tkinter', 'JSON'],
  },
] satisfies MemberProjectSummary[];

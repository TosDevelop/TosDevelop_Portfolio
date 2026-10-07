import type { TeamMemberEnglish } from '../types.ts';

export const en = {
  name: 'Ya Phorn',
  role: 'Full Stack Developer',
  tagline:
    'Scalable web applications, workflow automation and cloud-ready delivery.',
  badge: 'Full Stack',
  bio: 'A full-stack developer who enjoys building efficient, user-friendly web applications and continuously exploring new tools and technologies. His experience spans CRM, education, internal management systems, workflow automation, reporting dashboards and role-based access control.',
  languages: [
    {
      language: 'Khmer',
      level: 'Mother tongue',
    },
    {
      language: 'English',
      level: 'Intermediate',
    },
  ],
  softSkills: [
    'Respect',
    'Adaptability',
    'Communication',
    'Problem solving',
    'Critical thinking',
    'Time management',
    'Teamwork & collaboration',
  ],
  experience: [
    {
      role: 'Full Stack Developer',
      company: 'KO Global Management',
      period: '1+ year',
      type: 'Full-time',
      description:
        'Built scalable production web applications across CRM, education and internal management systems. Delivered workflow automation, reporting dashboards and role-based access control features. Contributed to Custom CRM System, KO Academy System and KO Voice System.',
      technologies: [
        'Vue.js',
        'Laravel',
        'JavaScript',
        'MySQL',
        'REST API',
        'Linux',
        'AWS',
      ],
    },
    {
      role: 'IT Intern – Full Stack Developer',
      company: 'The NGO Passerelles numériques Cambodia',
      period: 'Internship',
      type: 'Internship',
      description:
        'Developed and deployed an automated Service Agreement management system for consultant workflows. Focused on reducing manual work while improving workflow efficiency, compliance and data security. Managed deployment on AWS EC2 (Ubuntu) with custom domain configuration.',
      technologies: [
        'Python',
        'Flask',
        'Bootstrap',
        'jQuery',
        'Git',
        'AWS EC2',
        'Ubuntu',
      ],
    },
  ],
  education: [
    {
      degree: 'Associate Degree – Web Programming',
      institution: 'Passerelles numériques Cambodia (PNC)',
      period: '2024 – 2026',
    },
    {
      degree: 'Bac II',
      institution: 'Pock High School',
      period: '2020 – 2023',
    },
  ],
  selectedProjects: [
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
  ],
  additionalLearning: [
    'Project Management workshop',
    'Data Analytics workshop',
    'Product Ownership workshop',
    'UI/UX Design workshop',
    'Company visits and technical exposure activities',
  ],
} satisfies TeamMemberEnglish;

import type { TeamMember } from '../../types/index.ts';

export type TeamMemberEnglish = Pick<
  TeamMember,
  | 'name'
  | 'role'
  | 'tagline'
  | 'badge'
  | 'bio'
  | 'languages'
  | 'softSkills'
  | 'experience'
  | 'education'
  | 'selectedProjects'
  | 'additionalLearning'
>;

export const TEAM_EN = {
  'ya-phorn': {
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
        technologies: [
          'Python',
          'Requests',
          'BeautifulSoup',
          'Tkinter',
          'JSON',
        ],
      },
    ],
    additionalLearning: [
      'Project Management workshop',
      'Data Analytics workshop',
      'Product Ownership workshop',
      'UI/UX Design workshop',
      'Company visits and technical exposure activities',
    ],
  },
  'vichet-sat': {
    name: 'Sat Vichet',
    role: 'Planning & Web Developer',
    tagline:
      'Project planning, web development coordination and practical team delivery.',
    badge: 'Planning & Web',
    bio: 'Passionate about bridging technical implementation with systematic planning and project management. Balances core web engineering principles with agile sprint roadmaps, ensuring collaborative milestone deliveries.',
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
      'Sprint Planning',
      'Agile / Scrum',
      'Team Leadership',
      'Documentation',
      'Clear Communication',
    ],
    experience: [
      {
        role: 'Planning Lead & Developer',
        company: 'PNC Startup Team Projects',
        period: '2024 – Present',
        description:
          'Led requirement scoping, milestone planning, and coordinated feature delivery across 7-member cross-functional cohort projects.',
        technologies: ['Jira', 'Laravel', 'React.js', 'Git'],
      },
    ],
    education: [
      {
        degree: 'Associate Degree – Web Programming',
        institution: 'Passerelles numériques Cambodia (PNC)',
        period: '2024 – 2026',
      },
    ],
    selectedProjects: [
      {
        title: 'Farm Management System',
        role: 'Planning & Web Developer',
        period: 'Jul – Aug 2025',
        description:
          'Collaborative farm monitoring portal with crop cycles, task planning, and harvest analytics.',
        technologies: ['React.js', 'Laravel', 'MySQL'],
      },
    ],
  },
  'serey-phem': {
    name: 'Serey Phem',
    role: 'Web Developer',
    tagline:
      'Web applications, REST APIs, databases and practical software quality.',
    badge: 'Web Developer',
    bio: 'Dedicated web developer specializing in clean client-server architecture, database modeling, responsive UI components, and reliable API services.',
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
      'Code Quality',
      'Problem Solving',
      'Team Collaboration',
      'Continuous Learning',
    ],
    experience: [
      {
        role: 'Web Developer',
        company: 'Academic & Client Initiatives',
        period: '2024 – Present',
        description:
          'Engineered web platforms, integrated authenticated REST endpoints, and managed database schemas.',
        technologies: ['React.js', 'Laravel', 'MySQL', 'Git'],
      },
    ],
    education: [
      {
        degree: 'Associate Degree – Web Programming',
        institution: 'Passerelles numériques Cambodia (PNC)',
        period: '2024 – 2026',
      },
    ],
    selectedProjects: [
      {
        title: 'Farm Management System',
        role: 'Lead Developer',
        period: 'Jul – Aug 2025',
        description:
          'A farm management platform designed to record crop types, planting dates, growth stages and operational notes.',
        technologies: ['React.js', 'Laravel', 'Python', 'MySQL'],
      },
    ],
  },
  'reaksmey-san': {
    name: 'Reaksmey San',
    role: 'Frontend Developer, UX/UI Designer & QA',
    tagline:
      'Frontend development, UX/UI design and quality assurance for reliable, user-friendly products.',
    badge: 'Frontend · UX/UI · QA',
    bio: 'Works across frontend development, UX/UI design and quality assurance, with experience in manual test suites, regression test cases, user acceptance testing (UAT), defect lifecycle tracking, and API functional verification.',
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
      'Attention to Detail',
      'Defect Reporting',
      'Root Cause Analysis',
      'Analytical Thinking',
    ],
    experience: [
      {
        role: 'Quality Assurance Specialist',
        company: 'Enterprise POS & Web Systems',
        period: '2025 – Present',
        description:
          'Conducted end-to-end testing cycles across retail point-of-sale systems, stock inventory controls, and self-service kiosks.',
        technologies: ['Manual Testing', 'Postman', 'Jira', 'SQL'],
      },
    ],
    education: [
      {
        degree: 'Associate Degree – Web Programming & QA',
        institution: 'Passerelles numériques Cambodia (PNC)',
        period: '2024 – 2026',
      },
    ],
    selectedProjects: [
      {
        title: 'POS, Inventory & KIOSK Quality Assurance',
        role: 'QA Lead',
        period: '2026',
        description:
          'End-to-end manual QA validation across retail POS, stock control and self-service KIOSK workflows.',
        technologies: ['Manual Testing', 'POS', 'Inventory Management'],
      },
    ],
  },
  'sokha-rathana': {
    name: 'Rathana Sokha',
    role: 'Junior Software Developer',
    tagline:
      'Web development, software fundamentals and practical data/IT support.',
    badge: 'Junior Developer',
    bio: 'Enthusiastic software engineer equipped with solid algorithmic grounding, relational data queries, and clean code construction across client and server environments.',
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
      'Problem Solving',
      'Fast Learner',
      'Collaboration',
      'Documentation',
    ],
    experience: [
      {
        role: 'IT & Data Support Intern',
        company: 'Cambodia Airports',
        period: '2025',
        description:
          'Gained practical experience supporting IT systems, database access validation, GLPI ticketing, and internal data tooling.',
        technologies: ['MySQL', 'SQL Server', 'GLPI', 'Data Analysis'],
      },
    ],
    education: [
      {
        degree: 'Associate Degree – Web Programming',
        institution: 'Passerelles numériques Cambodia (PNC)',
        period: '2024 – 2026',
      },
    ],
    selectedProjects: [
      {
        title: 'Cambodia Airports - IT & Data Experience',
        role: 'Data & IT Intern',
        period: '2025',
        description:
          'Practical internship exposure across IT support, databases, GLPI access control, data entry and analytics tooling.',
        technologies: ['MySQL', 'SQL Server', 'GLPI'],
      },
    ],
  },
} satisfies Record<string, TeamMemberEnglish>;

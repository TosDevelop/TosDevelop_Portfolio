import { TeamMember } from '@/types/index';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'ya-phorn',
    name: 'Ya Phorn',
    nameKm: 'ផន​ យ៉ា',
    role: 'Full Stack Developer',
    roleKm: 'អ្នកអភិវឌ្ឍន៍ Full Stack',
    category: ['Development'],
    tagline:
      'Scalable web applications, workflow automation and cloud-ready delivery.',
    taglineKm:
      'កម្មវិធីគេហទំព័រដែលអាចពង្រីកបាន ការស្វ័យប្រវត្តិកម្មការងារ និងការដាក់ឱ្យដំណើរការលើពពក។',
    image: new URL('../assets/team/phorn_ya.jpg', import.meta.url).href,
    badge: 'Full Stack',
    badgeKm: 'Full Stack',
    bio: 'A full-stack developer who enjoys building efficient, user-friendly web applications and continuously exploring new tools and technologies. His experience spans CRM, education, internal management systems, workflow automation, reporting dashboards and role-based access control.',
    bioKm:
      'អ្នកអភិវឌ្ឍន៍ Full-stack ដែលរីករាយនឹងការបង្កើតកម្មវិធីគេហទំព័រប្រកបដោយប្រសិទ្ធភាព និងងាយស្រួលប្រើប្រាស់ ព្រមទាំងបន្តរៀនសូត្រពីឧបករណ៍ និងបច្ចេកវិទ្យាថ្មីៗ។ បទពិសោធន៍របស់គាត់រួមមាន CRM ប្រព័ន្ធអប់រំ ប្រព័ន្ធគ្រប់គ្រងផ្ទៃក្នុង ស្វ័យប្រវត្តិកម្មលំហូរការងារ ផ្ទាំងគ្រប់គ្រងរបាយការណ៍ និងការកំណត់សិទ្ធិតាមតួនាទី។',
    contact: {
      email: 'phornya26@gmail.com',
      phone: '+855 71 815 1315',
      location: 'Phnom Penh, Cambodia',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      cvUrl: '#',
    },
    languages: [
      { language: 'Khmer', level: 'Mother tongue' },
      { language: 'English', level: 'Intermediate' },
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
    technicalSkills: [
      {
        category: 'Frontend',
        skills: [
          { name: 'Vue.js', color: 'emerald' },
          { name: 'Nuxt.js', color: 'teal' },
          { name: 'React.js', color: 'sky' },
          { name: 'JavaScript', color: 'amber' },
          { name: 'Bootstrap 5', color: 'indigo' },
          { name: 'Tailwind CSS', color: 'cyan' },
          { name: 'HTML', color: 'orange' },
          { name: 'CSS', color: 'blue' },
          { name: 'SASS', color: 'pink' },
        ],
      },
      {
        category: 'Backend',
        skills: [
          { name: 'Laravel', color: 'red' },
          { name: 'Node.js', color: 'green' },
          { name: 'Python', color: 'amber' },
          { name: 'Flask', color: 'slate' },
          { name: 'Django', color: 'emerald' },
          { name: 'PHP', color: 'indigo' },
          { name: 'TypeScript OOP', color: 'blue' },
        ],
      },
      {
        category: 'Data & Services',
        skills: [
          { name: 'MySQL', color: 'sky' },
          { name: 'SQLite', color: 'blue' },
          { name: 'PostgreSQL', color: 'indigo' },
          { name: 'Firebase', color: 'amber' },
          { name: 'Power BI', color: 'yellow' },
        ],
      },
      {
        category: 'Cloud & Tools',
        skills: [
          { name: 'GitHub', color: 'slate' },
          { name: 'Git', color: 'orange' },
          { name: 'Jira', color: 'blue' },
          { name: 'Postman', color: 'orange' },
          { name: 'AWS EC2', color: 'amber' },
          { name: 'Linux', color: 'yellow' },
          { name: 'CloudFlare', color: 'orange' },
          { name: 'Figma', color: 'purple' },
          { name: 'Netlify', color: 'teal' },
          { name: 'Vercel', color: 'slate' },
        ],
      },
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
  {
    id: 'vichet-sat',
    name: 'Sat Vichet',
    nameKm: 'សាត​ វិចិត្រ',
    role: 'Planning & Web Developer',
    roleKm: 'អ្នករៀបចំផែនការ និងអភិវឌ្ឍន៍វេបសាយ',
    category: ['Planning', 'Development'],
    tagline:
      'Project planning, web development coordination and practical team delivery.',
    taglineKm:
      'ការរៀបចំផែនការគម្រោង ការសម្របសម្រួលអភិវឌ្ឍន៍វេបសាយ និងការដឹកនាំក្រុមជាក់ស្ដែង។',
    image: new URL('../assets/team/sat_vichet.jpg', import.meta.url).href,
    badge: 'Planning & Web',
    badgeKm: 'Planning & Web',
    bio: 'Passionate about bridging technical implementation with systematic planning and project management. Balances core web engineering principles with agile sprint roadmaps, ensuring collaborative milestone deliveries.',
    bioKm:
      'មានចំណង់ចំណូលចិត្តក្នុងការផ្សារភ្ជាប់ការអនុវត្តបច្ចេកទេសជាមួយការរៀបចំផែនការ និងការគ្រប់គ្រងគម្រោងជាប្រព័ន្ធ។ ធានានូវការសម្រេចគោលដៅគម្រោងប្រកបដោយប្រសិទ្ធភាព។',
    contact: {
      email: 'vichet77@gmail.com',
      phone: '+855 88 912 345',
      location: 'Phnom Penh, Cambodia',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      cvUrl: '#',
    },
    languages: [
      { language: 'Khmer', level: 'Mother tongue' },
      { language: 'English', level: 'Intermediate' },
    ],
    softSkills: [
      'Sprint Planning',
      'Agile / Scrum',
      'Team Leadership',
      'Documentation',
      'Clear Communication',
    ],
    technicalSkills: [
      {
        category: 'Planning & Management',
        skills: [
          { name: 'Jira' },
          { name: 'Trello' },
          { name: 'Figma' },
          { name: 'Git Workflow' },
        ],
      },
      {
        category: 'Web Development',
        skills: [
          { name: 'React.js' },
          { name: 'Laravel' },
          { name: 'PHP' },
          { name: 'JavaScript' },
          { name: 'MySQL' },
        ],
      },
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
  {
    id: 'serey-phem',
    name: 'Serey Phem',
    nameKm: 'សេរី ភឺម',
    role: 'Web Developer',
    roleKm: 'អ្នកអភិវឌ្ឍន៍គេហទំព័រ',
    category: ['Development'],
    tagline:
      'Web applications, REST APIs, databases and practical software quality.',
    taglineKm:
      'កម្មវិធីគេហទំព័រ, REST APIs, មូលដ្ឋានទិន្នន័យ និងគុណភាពផ្នែកទន់ជាក់ស្តែង។',
    image: new URL('../assets/team/phem_serey.jpg', import.meta.url).href,
    badge: 'Web Developer',
    badgeKm: 'Web Developer',
    bio: 'Dedicated web developer specializing in clean client-server architecture, database modeling, responsive UI components, and reliable API services.',
    bioKm:
      'អ្នកអភិវឌ្ឍន៍គេហទំព័រជំនាញលើស្ថាបត្យកម្ម Client-Server, ការរចនាមូលដ្ឋានទិន្នន័យ និងសេវាកម្ម API ដែលរលូន។',
    contact: {
      email: 'serey.phem1800@gmail.com',
      phone: '+855 96 789 012',
      location: 'Phnom Penh, Cambodia',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      cvUrl: '#',
    },
    languages: [
      { language: 'Khmer', level: 'Mother tongue' },
      { language: 'English', level: 'Intermediate' },
    ],
    softSkills: [
      'Code Quality',
      'Problem Solving',
      'Team Collaboration',
      'Continuous Learning',
    ],
    technicalSkills: [
      {
        category: 'Development',
        skills: [
          { name: 'React.js' },
          { name: 'Laravel' },
          { name: 'Python' },
          { name: 'REST API' },
          { name: 'MySQL' },
          { name: 'Tailwind CSS' },
        ],
      },
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
  {
    id: 'reaksmey-san',
    name: 'Reaksmey San',
    nameKm: 'សាន រស្មី',
    role: 'Frontend Developer, UX/UI Designer & QA',
    roleKm: 'អ្នកអភិវឌ្ឍ Frontend អ្នករចនា UX/UI និងអ្នកធានាគុណភាព (QA)',
    category: ['Development', 'QA'],
    tagline:
      'Frontend development, UX/UI design and quality assurance for reliable, user-friendly products.',
    taglineKm:
      'ការអភិវឌ្ឍ Frontend ការរចនា UX/UI និងការធានាគុណភាពសម្រាប់ផលិតផលដែលងាយស្រួលប្រើ និងអាចទុកចិត្តបាន។',
    image: new URL('../assets/team/reaksmey_san.jpg', import.meta.url).href,
    badge: 'Frontend · UX/UI · QA',
    badgeKm: 'Frontend · UX/UI · QA',
    bio: 'Works across frontend development, UX/UI design and quality assurance, with experience in manual test suites, regression test cases, user acceptance testing (UAT), defect lifecycle tracking, and API functional verification.',
    bioKm:
      'ធ្វើការលើការអភិវឌ្ឍ Frontend ការរចនា UX/UI និងការធានាគុណភាព ដោយមានបទពិសោធន៍ក្នុងការរៀបចំកញ្ចប់ធ្វើតេស្តដោយដៃ UAT ការតាមដានកំហុស និងការផ្ទៀងផ្ទាត់ API។',
    contact: {
      email: 'reaksmeysan.official@gmail.com',
      phone: '+855 96 2557 286',
      location: 'Phnom Penh, Cambodia',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      cvUrl: '#',
    },
    languages: [
      { language: 'Khmer', level: 'Mother tongue' },
      { language: 'English', level: 'Intermediate' },
    ],
    softSkills: [
      'Attention to Detail',
      'Defect Reporting',
      'Root Cause Analysis',
      'Analytical Thinking',
    ],
    technicalSkills: [
      {
        category: 'Quality Assurance',
        skills: [
          { name: 'Manual Testing' },
          { name: 'Postman' },
          { name: 'Test Case Design' },
          { name: 'Bug Tracking' },
          { name: 'Figma' },
          { name: 'Git' },
        ],
      },
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
  {
    id: 'sokha-rathana',
    name: 'Rathana Sokha',
    nameKm: 'រតនា សុខា',
    role: 'Junior Software Developer',
    roleKm: 'អ្នកអភិវឌ្ឍន៍កម្មវិធីកម្រិតដំបូង',
    category: ['Development'],
    tagline:
      'Web development, software fundamentals and practical data/IT support.',
    taglineKm:
      'ការអភិវឌ្ឍន៍គេហទំព័រ មូលដ្ឋានគ្រឹះផ្នែកទន់ និងការគាំទ្រទិន្នន័យ/IT ជាក់ស្តែង។',
    image: new URL('../assets/team/sokha_rathana.jpg', import.meta.url).href,
    badge: 'Junior Developer',
    badgeKm: 'Junior Developer',
    bio: 'Enthusiastic software engineer equipped with solid algorithmic grounding, relational data queries, and clean code construction across client and server environments.',
    bioKm:
      'វិស្វករផ្នែកទន់ដែលពោរពេញដោយថាមពល មានមូលដ្ឋានគ្រឹះក្បួនដោះស្រាយរឹងមាំ និងការសរសេរកូដស្អាតលើបរិស្ថាន Client និង Server។',
    contact: {
      email: 'rathana.sokha011@gmail.com',
      phone: '+855 97 123 456',
      location: 'Phnom Penh, Cambodia',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      cvUrl: '#',
    },
    languages: [
      { language: 'Khmer', level: 'Mother tongue' },
      { language: 'English', level: 'Intermediate' },
    ],
    softSkills: [
      'Problem Solving',
      'Fast Learner',
      'Collaboration',
      'Documentation',
    ],
    technicalSkills: [
      {
        category: 'Software & Data',
        skills: [
          { name: 'JavaScript' },
          { name: 'Node.js' },
          { name: 'MySQL' },
          { name: 'SQL Server' },
          { name: 'HTML/CSS' },
        ],
      },
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
];

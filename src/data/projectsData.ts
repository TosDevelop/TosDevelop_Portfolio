import { ProjectCaseStudy } from '@/types/index';

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: 'crm-internal-management',
    title: 'CRM & Internal Management Systems',
    titleKm: 'ប្រព័ន្ធ CRM និងគ្រប់គ្រងផ្ទៃក្នុង',
    category: 'Software',
    type: 'Professional Experience',
    period: '2025 – 2026',
    tagline:
      'A collection of production-grade CRM, education and internal management systems with workflow automation, dashboards and role-based access control.',
    taglineKm:
      'បណ្តុំប្រព័ន្ធ CRM កម្រិតផលិតកម្ម ការអប់រំ និងការគ្រប់គ្រងផ្ទៃក្នុង ជាមួយស្វ័យប្រវត្តិកម្មការងារ និងការគ្រប់គ្រងសិទ្ធិតាមតួនាទី។',
    technologies: ['Vue.js', 'Laravel', 'JavaScript', 'MySQL', 'REST API'],
    leadMemberId: 'chhea-chhouy',
    leadMemberName: 'Chhea Chhouy',
    leadMemberRole: 'Full Stack Developer',
    relatedMemberIds: ['chhea-chhouy'],
    problemGoal:
      'Organizations suffered from fragmented records across consultant contracts, educational tracking and customer relationships, requiring automated audit trails.',
    problemGoalKm:
      'ស្ថាប័នជួបការលំបាកក្នុងការតាមដានកិច្ចសន្យាទីប្រឹក្សា ការកត់ត្រាការអប់រំ និងទំនាក់ទំនងអតិថិជន ដោយត្រូវការប្រព័ន្ធស្វ័យប្រវត្តិកម្ម។',
    solutionApproach:
      'Designed a unified Laravel and Vue.js ecosystem supporting multi-tenant role authorization, dynamic report generation, and secure data sync.',
    solutionApproachKm:
      'បានរចនាប្រព័ន្ធ Laravel និង Vue.js ដែលគាំទ្រការកំណត់សិទ្ធិពហុតួនាទី ការបង្កើតរបាយការណ៍ស្វ័យប្រវត្តិ និងសុវត្ថិភាពទិន្នន័យ។',
    keyFeatures: [
      'Role-based granular access control (RBAC)',
      'Automated consultant service agreements',
      'Dynamic reporting dashboards & analytics',
      'Secure data synchronization & audit logging',
    ],
    keyFeaturesKm: [
      'ការគ្រប់គ្រងសិទ្ធិតាមតួនាទីច្បាស់លាស់ (RBAC)',
      'កិច្ចព្រមព្រៀងសេវាកម្មទីប្រឹក្សាស្វ័យប្រវត្តិ',
      'ផ្ទាំងគ្រប់គ្រងរបាយការណ៍ និងការវិភាគទិន្នន័យ',
      'ការធ្វើសមកាលកម្មទិន្នន័យប្រកបដោយសុវត្ថិភាព',
    ],
    outcomeLearning: [
      'Delivered 35% time savings in manual administrative review',
      'Standardized document compliance workflows across departments',
      'Successfully deployed high-availability workloads on AWS EC2',
    ],
    outcomeLearningKm: [
      'កាត់បន្ថយពេលវេលាត្រួតពិនិត្យរដ្ឋបាលដោយដៃ ៣៥%',
      'ធ្វើឱ្យលំហូរការងារឯកសារមានស្តង់ដាររួម',
      'ដាក់ឱ្យដំណើរការប្រកបដោយជោគជ័យនៅលើ AWS EC2',
    ],
  },
  {
    id: 'pos-inventory-kiosk',
    title: 'POS, Inventory & KIOSK Quality Assurance',
    titleKm: 'ការធានាគុណភាពប្រព័ន្ធ POS, សន្និធិ និង KIOSK',
    category: 'QA',
    type: 'Professional Experience',
    period: '2026',
    tagline:
      'End-to-end manual QA across retail POS, stock control and self-service KIOSK workflows.',
    taglineKm:
      'ការធ្វើតេស្ត QA គ្រប់ជ្រុងជ្រោយលើប្រព័ន្ធលក់រាយ POS ការគ្រប់គ្រងស្តុក និងលំហូរការងារទូស្វ័យសេវា KIOSK។',
    technologies: ['Manual Testing', 'POS', 'Inventory', 'Postman'],
    leadMemberId: 'bunyoung-hean',
    leadMemberName: 'Bunyoung Hean',
    leadMemberRole: 'Quality Assurance Specialist',
    relatedMemberIds: ['bunyoung-hean'],
    problemGoal:
      'Retail checkout lanes experienced intermittent edge-case crashes during high-traffic barcode scanning and synchronized inventory updates.',
    problemGoalKm:
      'បញ្ជរលក់រាយជួបប្រទះការគាំងនៅពេលស្កេនបាកូដញឹកញាប់ និងការធ្វើបច្ចុប្បន្នភាពស្តុកក្នុងពេលដំណាលគ្នា។',
    solutionApproach:
      'Authored exhaustive test matrices covering cash, card, and QR payments, edge hardware disconnects, offline sync, and user acceptance scenarios.',
    solutionApproachKm:
      'បានបង្កើតតារាងធ្វើតេស្តលម្អិតគ្របដណ្តប់លើការទូទាត់សាច់ប្រាក់ កាត និង QR ករណីបាត់បង់ការតភ្ជាប់ និង UAT។',
    keyFeatures: [
      'Regression test plans for POS hardware & receipt printers',
      'Stock variance edge-case validation',
      'Self-service kiosk touch navigation validation',
      'Clear reproducible bug tracking via Jira',
    ],
    keyFeaturesKm: [
      'ផែនការធ្វើតេស្តតបសម្រាប់គ្រឿងបរិក្ខារ POS និងម៉ាស៊ីនបោះពុម្ព',
      'ការផ្ទៀងផ្ទាត់ករណីលើកលែងនៃការប្រែប្រួលស្តុក',
      'ការធ្វើតេស្តអេក្រង់ប៉ះទូស្វ័យសេវា KIOSK',
      'ការតាមដានបញ្ហាកំហុសយ៉ាងច្បាស់លាស់តាម Jira',
    ],
    outcomeLearning: [
      'Reduced checkout flow bugs prior to commercial rollout by 92%',
      'Established repeatable UAT signoff criteria for future hardware upgrades',
      'Created standardized test documentation and validation matrices',
    ],
  },
  {
    id: 'farm-management-system',
    title: 'Farm Management System',
    titleKm: 'ប្រព័ន្ធគ្រប់គ្រងកសិដ្ឋាន',
    category: 'Web',
    type: 'Academic Project',
    period: 'Jul – Aug 2025',
    tagline:
      'A farm management platform designed to record crop types, planting dates, growth stages and operational notes.',
    taglineKm:
      'វេទិកាគ្រប់គ្រងកសិដ្ឋានដែលបានរចនាឡើងដើម្បីកត់ត្រាប្រភេទដំណាំ កាលបរិច្ឆេទដាំដុះ ដំណាក់កាលលូតលាស់ និងកំណត់ចំណាំប្រតិបត្តិការ។',
    technologies: ['React.js', 'Laravel', 'Python', 'MySQL'],
    leadMemberId: 'sokchea-boy',
    leadMemberName: 'Sokchea Boy / PNC Project Team',
    leadMemberRole: 'Web Developer',
    relatedMemberIds: ['sokchea-boy', 'kin-doung'],
    problemGoal:
      'Farm activities are difficult to track consistently when records are fragmented or manual.',
    problemGoalKm:
      'សកម្មភាពកសិដ្ឋានពិបាកក្នុងការតាមដានជាប់លាប់ នៅពេលកំណត់ត្រាត្រូវបានកត់ត្រាដោយដៃ ឬរាយប៉ាយ។',
    solutionApproach:
      'Built a collaborative web application with structured farm records, REST APIs and a shared Git workflow.',
    solutionApproachKm:
      'បានបង្កើតកម្មវិធីគេហទំព័រសហការគ្នា ជាមួយកំណត់ត្រាកសិដ្ឋានជាប្រព័ន្ធ REST APIs និងលំហូរការងារ Git រួមគ្នា។',
    keyFeatures: [
      'Crop records',
      'Planting dates',
      'Growth stages',
      'Operational notes',
      'Team Git workflow',
    ],
    keyFeaturesKm: [
      'កំណត់ត្រាប្រភេទដំណាំ',
      'កាលបរិច្ឆេទដាំដុះ',
      'ដំណាក់កាលលូតលាស់នៃដំណាំ',
      'កំណត់ចំណាំប្រតិបត្តិការប្រចាំថ្ងៃ',
      'លំហូរការងារ Git ជាក្រុម',
    ],
    outcomeLearning: [
      'Practical team delivery experience',
      'Combined frontend/backend collaboration',
      'Version controlled project workflow',
    ],
    outcomeLearningKm: [
      'បទពិសោធន៍ជាក់ស្តែងក្នុងការដឹកនាំគម្រោងជាក្រុម',
      'ការសហការរវាង Frontend និង Backend ប្រកបដោយភាពរលូន',
      'ការគ្រប់គ្រងកំណែកូដគម្រោងតាម Git',
    ],
    repoUrl: 'https://github.com',
  },
  {
    id: 'leave-management-system',
    title: 'Leave Management Systems',
    titleKm: 'ប្រព័ន្ធគ្រប់គ្រងការសុំច្បាប់',
    category: 'Web',
    type: 'Academic Project',
    period: '2025',
    tagline:
      'Student projects focused on staff/student leave requests, status tracking, permissions and operational visibility.',
    taglineKm:
      'គម្រោងផ្តោតលើការស្នើសុំច្បាប់របស់បុគ្គលិក/សិស្ស ការតាមដានស្ថានភាព ការអនុញ្ញាត និងតម្លាភាពប្រតិបត្តិការ។',
    technologies: ['Laravel', 'Vue.js', 'React Native', 'MySQL'],
    leadMemberId: 'chhea-chhouy',
    leadMemberName: 'Chhea Chhouy',
    leadMemberRole: 'Full Stack Developer',
    relatedMemberIds: ['chhea-chhouy'],
    problemGoal:
      'Paper-based and chat-based leave submissions frequently caused miscommunication, untracked absences, and calendar blind spots.',
    problemGoalKm:
      'ការសុំច្បាប់លើក្រដាស ឬសារឆាត តែងបង្កការយល់ច្រឡំ និងបាត់បង់ព័ត៌មានអវត្តមាន។',
    solutionApproach:
      'Engineered an automated request-approval hierarchy with email and status notifications, administrative balance calculation, and supervisor approvals.',
    solutionApproachKm:
      'បានរៀបចំប្រព័ន្ធអនុម័តសំណើសុំច្បាប់ដោយស្វ័យប្រវត្តិ ជាមួយការជូនដំណឹង និងការគណនាសមតុល្យច្បាប់។',
    keyFeatures: [
      'Multi-level approval hierarchy',
      'Real-time leave balance calculations',
      'Departmental team calendar overview',
      'Mobile-responsive submission forms',
    ],
    outcomeLearning: [
      'Implemented clean relational foreign key integrity in MySQL',
      'Automated background notification queues',
      'Gained deep experience in stateful authentication tokens',
    ],
  },
  {
    id: 'telegram-mini-app-bot',
    title: 'Telegram Mini App & Bot',
    titleKm: 'កម្មវិធីខ្នាតតូច និងបូត Telegram',
    category: 'Web',
    type: 'Professional Experience',
    period: '2026',
    tagline:
      'Telegram-integrated web experience with authentication, bot commands, APIs, sessions and cloud deployment.',
    taglineKm:
      'បទពិសោធន៍គេហទំព័រដែលតភ្ជាប់ Telegram ជាមួយការផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវ ពាក្យបញ្ជា Bot, APIs និងការដាក់ពង្រាយលើពពក។',
    technologies: ['JavaScript', 'Node.js', 'Telegram API', 'Express'],
    leadMemberId: 'seang-meng-chheun',
    leadMemberName: 'Seang Meng Chheun',
    leadMemberRole: 'Web Developer',
    relatedMemberIds: ['seang-meng-chheun'],
    problemGoal:
      'Users demanded instant access to services inside Telegram without downloading separate heavyweight mobile apps.',
    problemGoalKm:
      'អ្នកប្រើប្រាស់ត្រូវការចូលប្រើសេវាកម្មភ្លាមៗនៅក្នុង Telegram ដោយមិនចាំបាច់ដំឡើងកម្មវិធីដាច់ដោយឡែក។',
    solutionApproach:
      'Leveraged Telegram WebApp SDK and Node.js microservices to deliver native-feel modal interfaces with secure cryptographic HMAC session validation.',
    solutionApproachKm:
      'ប្រើប្រាស់ Telegram WebApp SDK និង Node.js microservices ដើម្បីបង្កើតចំណុចប្រទាក់ដែលរលូន និងមានសុវត្ថិភាពខ្ពស់។',
    keyFeatures: [
      'Telegram WebApp inline interface & theme matching',
      'Secure initData cryptographic signature verification',
      'Real-time push notifications & bot command handler',
      'Lightweight responsive single page design',
    ],
    outcomeLearning: [
      'Mastered Telegram bot lifecycle and webhook events',
      'Enhanced knowledge of zero-friction user onboarding',
      'Optimized lightweight asset delivery for mobile network speeds',
    ],
  },
  {
    id: 'roaming-validation-service',
    title: 'Roaming validation service',
    titleKm: 'សេវាផ្ទៀងផ្ទាត់ Roaming',
    category: 'Telecom',
    type: 'Professional Experience',
    period: 'Current role',
    tagline:
      'Operational automation and dashboards supporting roaming interconnection workflows, TAP processing and deployment infrastructure.',
    taglineKm:
      'ស្វ័យប្រវត្តិកម្មប្រតិបត្តិការ និងផ្ទាំងគ្រប់គ្រងដែលគាំទ្រលំហូរការងារ Roaming, ការដំណើរការ TAP និងហេដ្ឋារចនាសម្ព័ន្ធ។',
    technologies: ['Laravel', 'Vue.js', 'MariaDB', 'Linux', 'Docker'],
    leadMemberId: 'leader-din',
    leadMemberName: 'Leader Din',
    leadMemberRole: 'Junior Roaming & Interconnection Administrator',
    relatedMemberIds: ['leader-din'],
    problemGoal:
      'International roaming telecom partner records required continuous verification of TAP exchange records and latency indicators.',
    problemGoalKm:
      'កំណត់ត្រាទូរគមនាគមន៍ Roaming អន្តរជាតិតម្រូវឱ្យមានការផ្ទៀងផ្ទាត់ជាប់ជានិច្ចនូវកំណត់ត្រាផ្លាស់ប្តូរ TAP។',
    solutionApproach:
      'Built administrative tooling, automated parsing scripts, and centralized operational monitoring dashboards for telecom traffic.',
    solutionApproachKm:
      'បានបង្កើតឧបករណ៍រដ្ឋបាល ស្គ្រីបដំណើរការព័ត៌មានស្វ័យប្រវត្តិ និងផ្ទាំងតាមដានទិន្នន័យទូរគមនាគមន៍កណ្តាល។',
    keyFeatures: [
      'Automated TAP billing file validation scripts',
      'High-throughput database ingestion in MariaDB',
      'Containerized deployment using Docker on Linux',
      'Operational status alert triggers',
    ],
    outcomeLearning: [
      'Handled rigorous telecom-grade data structures and standards',
      'Implemented automated pipeline routines with shell scripting and Linux',
      'Gained deep experience in production reliability',
    ],
  },
  {
    id: 'cambodia-airports-it-data',
    title: 'Cambodia Airports – IT & Data Experience',
    titleKm: 'ព្រលានយន្តហោះកម្ពុជា – បទពិសោធន៍ IT និងទិន្នន័យ',
    category: 'Data',
    type: 'Internship Experience',
    period: '2025',
    tagline:
      'Practical internship exposure across IT support, databases, GLPI access control, data entry and analytics tooling.',
    taglineKm:
      'បទពិសោធន៍កម្មសិក្សាជាក់ស្តែងលើផ្នែកជំនួយ IT មូលដ្ឋានទិន្នន័យ ការគ្រប់គ្រងការចូលប្រើ GLPI និងការវិភាគទិន្នន័យ។',
    technologies: ['MySQL', 'SQL Server', 'GLPI', 'Data Analytics'],
    leadMemberId: 'darin-hoy',
    leadMemberName: 'Darin Hoy',
    leadMemberRole: 'Junior Software Developer',
    relatedMemberIds: ['darin-hoy'],
    problemGoal:
      'Airport IT operations manage diverse ticket queues, workstation hardware, network accesses, and enterprise service audits.',
    problemGoalKm:
      'ប្រតិបត្តិការ IT ព្រលានយន្តហោះគ្រប់គ្រងសំបុត្រសំណើសេវា គ្រឿងបរិក្ខារកុំព្យូទ័រ និងសវនកម្មសេវាកម្មសហគ្រាសជាច្រើន។',
    solutionApproach:
      'Supported database maintenance, query extraction for reporting, and automated ticket resolution tracking with GLPI.',
    solutionApproachKm:
      'បានជួយគាំទ្រការថែទាំមូលដ្ឋានទិន្នន័យ ការទាញយកទិន្នន័យសម្រាប់របាយការណ៍ និងការតាមដានសំណើតាម GLPI។',
    keyFeatures: [
      'Relational SQL queries and report extraction',
      'GLPI asset inventory tracking and resolution workflows',
      'Network and terminal device maintenance',
      'Data integrity checking across internal spreadsheets',
    ],
    outcomeLearning: [
      'Gained firsthand enterprise IT infrastructure exposure',
      'Enhanced SQL data query drafting and reporting skills',
      'Developed strong professional accountability in mission-critical environments',
    ],
  },
];

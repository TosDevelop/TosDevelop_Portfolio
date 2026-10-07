import type { ProjectCaseStudy } from '../../types/index.ts';

export type ProjectCaseStudyEnglish = Pick<
  ProjectCaseStudy,
  | 'title'
  | 'type'
  | 'period'
  | 'tagline'
  | 'leadMemberName'
  | 'leadMemberRole'
  | 'problemGoal'
  | 'solutionApproach'
  | 'keyFeatures'
  | 'outcomeLearning'
>;

export const PROJECTS_EN = {
  'crm-internal-management': {
    title: 'CRM & Internal Management Systems',
    type: 'Professional Experience',
    period: '2025 – 2026',
    tagline:
      'A collection of production-grade CRM, education and internal management systems with workflow automation, dashboards and role-based access control.',
    leadMemberName: 'Chhea Chhouy',
    leadMemberRole: 'Full Stack Developer',
    problemGoal:
      'Organizations suffered from fragmented records across consultant contracts, educational tracking and customer relationships, requiring automated audit trails.',
    solutionApproach:
      'Designed a unified Laravel and Vue.js ecosystem supporting multi-tenant role authorization, dynamic report generation, and secure data sync.',
    keyFeatures: [
      'Role-based granular access control (RBAC)',
      'Automated consultant service agreements',
      'Dynamic reporting dashboards & analytics',
      'Secure data synchronization & audit logging',
    ],
    outcomeLearning: [
      'Delivered 35% time savings in manual administrative review',
      'Standardized document compliance workflows across departments',
      'Successfully deployed high-availability workloads on AWS EC2',
    ],
  },
  'pos-inventory-kiosk': {
    title: 'POS, Inventory & KIOSK Quality Assurance',
    type: 'Professional Experience',
    period: '2026',
    tagline:
      'End-to-end manual QA across retail POS, stock control and self-service KIOSK workflows.',
    leadMemberName: 'Bunyoung Hean',
    leadMemberRole: 'Quality Assurance Specialist',
    problemGoal:
      'Retail checkout lanes experienced intermittent edge-case crashes during high-traffic barcode scanning and synchronized inventory updates.',
    solutionApproach:
      'Authored exhaustive test matrices covering cash, card, and QR payments, edge hardware disconnects, offline sync, and user acceptance scenarios.',
    keyFeatures: [
      'Regression test plans for POS hardware & receipt printers',
      'Stock variance edge-case validation',
      'Self-service kiosk touch navigation validation',
      'Clear reproducible bug tracking via Jira',
    ],
    outcomeLearning: [
      'Reduced checkout flow bugs prior to commercial rollout by 92%',
      'Established repeatable UAT signoff criteria for future hardware upgrades',
      'Created standardized test documentation and validation matrices',
    ],
  },
  'farm-management-system': {
    title: 'Farm Management System',
    type: 'Academic Project',
    period: 'Jul – Aug 2025',
    tagline:
      'A farm management platform designed to record crop types, planting dates, growth stages and operational notes.',
    leadMemberName: 'Sokchea Boy / PNC Project Team',
    leadMemberRole: 'Web Developer',
    problemGoal:
      'Farm activities are difficult to track consistently when records are fragmented or manual.',
    solutionApproach:
      'Built a collaborative web application with structured farm records, REST APIs and a shared Git workflow.',
    keyFeatures: [
      'Crop records',
      'Planting dates',
      'Growth stages',
      'Operational notes',
      'Team Git workflow',
    ],
    outcomeLearning: [
      'Practical team delivery experience',
      'Combined frontend/backend collaboration',
      'Version controlled project workflow',
    ],
  },
  'leave-management-system': {
    title: 'Leave Management Systems',
    type: 'Academic Project',
    period: '2025',
    tagline:
      'Student projects focused on staff/student leave requests, status tracking, permissions and operational visibility.',
    leadMemberName: 'Chhea Chhouy',
    leadMemberRole: 'Full Stack Developer',
    problemGoal:
      'Paper-based and chat-based leave submissions frequently caused miscommunication, untracked absences, and calendar blind spots.',
    solutionApproach:
      'Engineered an automated request-approval hierarchy with email and status notifications, administrative balance calculation, and supervisor approvals.',
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
  'telegram-mini-app-bot': {
    title: 'Telegram Mini App & Bot',
    type: 'Professional Experience',
    period: '2026',
    tagline:
      'Telegram-integrated web experience with authentication, bot commands, APIs, sessions and cloud deployment.',
    leadMemberName: 'Seang Meng Chheun',
    leadMemberRole: 'Web Developer',
    problemGoal:
      'Users demanded instant access to services inside Telegram without downloading separate heavyweight mobile apps.',
    solutionApproach:
      'Leveraged Telegram WebApp SDK and Node.js microservices to deliver native-feel modal interfaces with secure cryptographic HMAC session validation.',
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
  'roaming-validation-service': {
    title: 'Roaming validation service',
    type: 'Professional Experience',
    period: 'Current role',
    tagline:
      'Operational automation and dashboards supporting roaming interconnection workflows, TAP processing and deployment infrastructure.',
    leadMemberName: 'Leader Din',
    leadMemberRole: 'Junior Roaming & Interconnection Administrator',
    problemGoal:
      'International roaming telecom partner records required continuous verification of TAP exchange records and latency indicators.',
    solutionApproach:
      'Built administrative tooling, automated parsing scripts, and centralized operational monitoring dashboards for telecom traffic.',
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
  'cambodia-airports-it-data': {
    title: 'Cambodia Airports – IT & Data Experience',
    type: 'Internship Experience',
    period: '2025',
    tagline:
      'Practical internship exposure across IT support, databases, GLPI access control, data entry and analytics tooling.',
    leadMemberName: 'Darin Hoy',
    leadMemberRole: 'Junior Software Developer',
    problemGoal:
      'Airport IT operations manage diverse ticket queues, workstation hardware, network accesses, and enterprise service audits.',
    solutionApproach:
      'Supported database maintenance, query extraction for reporting, and automated ticket resolution tracking with GLPI.',
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
} satisfies Record<string, ProjectCaseStudyEnglish>;

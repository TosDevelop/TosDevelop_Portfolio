import { SITE_NAME } from '../../config/site.ts';
import { TEAM_MEMBERS } from '../team/index.ts';

const teamCount = TEAM_MEMBERS.length;

export const en = {
  backToTop: 'Back to top',
  brandName: SITE_NAME,
  nav: {
    home: 'Home',
    about: 'About',
    team: 'Team',
    expertise: 'Our Skills',
    projects: 'Projects',
    connect: "Let's Connect",
  },
  hero: {
    badge: `${SITE_NAME} • CODE, DESIGN & COLLABORATION`,
    titlePart1: 'Different skills. ',
    titleHighlight: 'Shared ambition.',
    titlePart2: '',
    subtitle: `We are ${SITE_NAME}, ${teamCount} PNC students bringing our strengths together through software, design and technology. Explore the projects we have shaped and the people behind them.`,
    viewProjects: 'Explore Our Work',
    meetTeam: 'Get to Know Us',
    teamCount: `${teamCount} Team members`,
    teamSub: 'Individual strengths. Collective progress.',
    centerBadgeTop: `THE PEOPLE BEHIND ${SITE_NAME} • ${teamCount} MEMBERS`,
    centerBadgeTitle: SITE_NAME,
    centerBadgeSub: `${teamCount} perspectives, working together`,
  },
  stats: {
    headline: `${teamCount} people. Building together.`,
    sub: 'We’re a team of PNC students who enjoy turning ideas into useful websites and apps. We share what we know, learn from each other, and grow with every project.',
    stat1Label: 'Team members',
    stat2Label: 'Skill categories',
    stat3Label: 'Team projects',
    stat4Label: 'Skills & tools',
  },
  whatWeDo: {
    kicker: 'WHAT WE DO',
    title: 'From a first idea to a working app',
    desc: 'We design clear interfaces, build the features behind them, and test the details together. Our focus is simple: make things useful and easy to use.',
  },
  howWeWork: {
    kicker: 'HOW WE WORK',
    title: 'Good things happen one step at a time.',
    desc: 'We ask questions, make a plan, and build together. Feedback helps us improve along the way.',
    learnMore: 'Get to know us',
    interactionHint: 'Curious about a step? Tap a circle to explore.',
    closeDetails: 'Close step details',
    detailLabel: 'A closer look',
    steps: [
      {
        num: '01',
        title: 'Listen & learn',
        detail:
          'We talk through who will use the app, what they need, and where they get stuck. We collect questions and examples so everyone starts with the same understanding.',
        desc: 'Start with the people, the problem, and what would help.',
      },
      {
        num: '02',
        title: 'Plan',
        detail:
          'We sketch the main screens, choose the essential features, and split the work into manageable tasks. Each person knows what to work on and how it fits into the bigger picture.',
        desc: 'Break the idea into small tasks everyone can follow.',
      },
      {
        num: '03',
        title: 'Build together',
        detail:
          'We connect the interface, application logic, and data one feature at a time. Sharing progress and reviewing each other’s code helps us solve problems and learn together.',
        desc: 'Bring designs to life and help each other along the way.',
      },
      {
        num: '04',
        title: 'Test & improve',
        detail:
          'We walk through the app as a user, check different screen sizes, and try the things that could go wrong. Then we use feedback to fix bugs and make confusing interactions clearer.',
        desc: 'Try it out, share feedback, and work through the details.',
      },
      {
        num: '05',
        title: 'Share & grow',
        detail:
          'We prepare the app for release, write useful setup notes, and share the result. Looking back at what worked and what was difficult helps us improve our next project.',
        desc: 'Launch the work and take what we learn into the next project.',
      },
    ],
  },
  ctaBanner: {
    kicker: 'READY TO EXPLORE',
    title:
      'See the people, skills and experiences behind the PNC student team.',
    button: 'Meet the Team',
  },
  about: {
    kicker: 'ABOUT THE TEAM',
    title: 'Learning together. Building real things.',
    subtitle:
      'We are a PNC student technology team with different professional directions but a shared commitment to learning by building, testing and improving real solutions.',
    missionKicker: 'MISSION',
    missionTitle: 'Build practical skills through real collaboration.',
    missionDesc:
      'Develop dependable technology skills, deliver useful team projects and strengthen professional habits through planning, development, QA, documentation and technical operations.',
    visionKicker: 'VISION',
    visionTitle: 'Grow into capable technology professionals.',
    visionDesc:
      'Use continuous learning, teamwork and disciplined delivery to become professionals who can contribute confidently to real organizations and technology products.',
    valuesKicker: 'OUR VALUES',
    valuesTitle: 'The habits behind our work',
    valuesDesc:
      'Small habits make a stronger team. Here’s how we support each other and keep moving forward.',
    valueExampleLabel: 'See it in practice',
    values: [
      {
        title: 'Better together',
        desc: 'We share what we know, ask for help, and make room for everyone to contribute.',
        example:
          'When someone gets stuck, we work through the problem together and share what we learned with the rest of the team.',
      },
      {
        title: 'Listen with respect',
        desc: 'Every perspective deserves a chance to be heard.',
        example:
          'In a review, we listen before responding and focus feedback on the work, with clear suggestions for improvement.',
      },
      {
        title: 'Stay open to change',
        desc: 'We learn new things and adjust when a better path appears.',
        example:
          'When a requirement changes, we revisit the plan together and agree on what to keep, change, or try next.',
      },
      {
        title: 'Keep each other in the loop',
        desc: 'Clear updates and honest questions keep us connected.',
        example:
          'We share what is finished, what comes next, and where we need help, so small blockers do not become surprises.',
      },
      {
        title: 'Solve it step by step',
        desc: 'We turn tricky problems into smaller, manageable pieces.',
        example:
          'For a bug, we reproduce the issue, check one possible cause at a time, and verify that the fix solves the original problem.',
      },
      {
        title: 'Ask why',
        desc: 'We explore the options before choosing a solution.',
        example:
          'Before adding a tool or feature, we ask what it helps users do and whether a simpler approach would work.',
      },
      {
        title: 'Make time for what matters',
        desc: 'We set realistic priorities and leave room to review.',
        example:
          'We break a deadline into smaller milestones and raise delays early so we can adjust the workload together.',
      },
    ],
  },
  team: {
    kicker: 'OUR TEAM',
    title: `${teamCount} people. Different paths. One shared portfolio.`,
    viewAllMembers: `View all ${teamCount} members`,
    subtitle:
      'Open any profile to see verified experience, education, technical skills, projects, contact information and CV access where supplied.',
    filters: {
      All: 'All',
      Development: 'Development',
      QA: 'QA',
      Planning: 'Planning',
      'UI/UX': 'UI/UX',
      Infrastructure: 'Infrastructure',
    },
    viewProfile: 'View Profile',
    backToTeam: 'Back to Team',
    aboutMember: 'About',
    contact: 'Contact',
    languages: 'Languages & soft skills',
    techSkills: 'Technical Skills',
    experience: 'Experience',
    lookingFor: 'Looking for',
    jobTypes: {
      'Full-time': 'Full-time',
      'Part-time': 'Part-time',
      Contract: 'Contract',
    },
    education: 'Education',
    selectedProjects: 'Selected Projects',
    showMore: 'Show more',
    showLess: 'Show less',
    repository: 'Repository',
    liveDemo: 'Live Demo',
    linkUnavailable: 'Link not available yet',
    softSkills: 'Soft Skills',
    additionalLearning: 'Additional Learning',
    downloadCv: 'Download CV',
    openCv: 'Open CV',
    cvUnavailable: 'CV not available yet',
  },
  expertise: {
    kicker: 'OUR SKILLS',
    title: 'Skills connected to practical work.',
    subtitle:
      'Explore our skills by discipline, with technologies and team members connected to each area.',
    relatedTech: 'RELATED TECHNOLOGIES',
    relatedMembers: 'RELATED MEMBERS',
    viewProfile: 'View profile',
    techSystemKicker: 'SKILLS & TOOLS',
    techSystemTitle: 'Our technology toolkit, organized by discipline',
    techSystemDesc:
      'Browse the languages, frameworks, platforms and tools used across our team’s work.',
  },
  projects: {
    kicker: 'TEAM PROJECTS',
    title: 'What we build together.',
    subtitle: 'A space for projects created together by the TosDevelop team.',
    emptyTitle: 'No team projects yet',
    emptyDescription:
      'We haven’t completed a project together yet. Our shared work will appear here when it’s ready.',
    filters: {
      All: 'All',
      Web: 'Web',
      Software: 'Software',
      QA: 'QA',
      Data: 'Data',
      Telecom: 'Telecom',
    },
    viewCaseStudy: 'View case study',
    backToProjects: 'Back to Projects',
    problemGoal: 'PROBLEM / GOAL',
    whatNeeded: 'What needed to improve',
    solutionApproach: 'SOLUTION / APPROACH',
    howApproached: 'How the work approached it',
    keyFeatures: 'Key Features',
    techStack: 'Technology Stack',
    outcomeLearning: 'Outcome & Learning',
    relatedMembers: 'Related Team Members',
    openRepo: 'Open repository',
  },
  contact: {
    kicker: 'CONTACT',
    title: "Let's connect, learn and build together.",
    subtitle:
      'Get in touch about internships, job opportunities, web projects or collaboration. Choose our team inbox or an individual member below.',
    teamTitle: 'PNC Student Team',
    teamDesc: `${teamCount} developers with skills in web development, UI/UX design, testing, project planning, databases and deployment.`,
    generalContact: 'GENERAL CONTACT',
    location: 'LOCATION',
    locationVal: 'Phnom Penh, Cambodia',
    contactSpecific: 'Meet the team',
    sendMessage: 'Start a conversation',
    formNote:
      'Send an email to the team or a member. Only messages to the team inbox also notify our Telegram group. Replies go to the email address you provide.',
    recipient: 'Send to',
    teamRecipient: 'General inquiry',
    generalContactNote:
      'General inquiries go to the TosDevelop team at this address.',
    sentNotice: 'Message sent successfully!',
    sentTo: 'Thank you for reaching out to',
    replyNotice: 'Any reply will go to',
    dismissNotice: 'Dismiss confirmation',
    sendError:
      'We could not confirm your message was sent. Your text is still here. Please try again later or email the recipient below directly.',
    emailUnavailable:
      'This form is temporarily unavailable. Please use the recipient’s email link below to get in touch.',
    sending: 'Sending…',
    namePlaceholder: 'Your full name',
    subjectPlaceholder: 'e.g. Web project collaboration',
    fullName: 'Full Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    promptText:
      'Tell us about yourself or your organization, what you need, and any relevant timeline or project details.',
    sendEmailBtn: 'Send message',
  },
  teamInfo: {
    title: 'Connect with TosDevelop',
    description:
      'We are a student technology team at Passerelles Numériques Cambodia, based in Phnom Penh. Explore our GitHub or get in touch about learning and collaboration.',
    github: 'GitHub organization',
    repository: 'Portfolio source code',
    email: 'Team email',
    website: 'Our website',
  },
  footer: {
    tagline: 'Learning, building and growing through technology.',
    desc: 'A student technology team portfolio presenting practical experience across development, QA, planning, data and infrastructure.',
    exploreTeam: 'Explore the Team',
    copyright: `© 2026 ${SITE_NAME} • PNC Student Team Portfolio MVP.`,
  },
  theme: {
    switchToDark: 'Switch to dark mode',
    switchToLight: 'Switch to light mode',
  },
  lang: {
    switchToKhmer: 'ប្ដូរទៅជាភាសាខ្មែរ',
    switchToEnglish: 'Switch to English',
  },
};

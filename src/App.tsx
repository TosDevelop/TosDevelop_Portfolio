import { useState } from 'react';
import { AboutPage } from './components/about/AboutPage';
import { ContactPage } from './components/contact/ContactPage';
import { Footer } from './components/common/Footer';
import { Navbar } from './components/common/Navbar';
import { ExpertisePage } from './components/expertise/ExpertisePage';
import { CtaSection } from './components/home/CtaSection';
import { FeaturedTeamSection } from './components/home/FeaturedTeamSection';
import { HeroSection } from './components/home/HeroSection';
import { HowWeWorkSection } from './components/home/HowWeWorkSection';
import { StatsSection } from './components/home/StatsSection';
import { TechMarquee } from './components/home/TechMarquee';
import { ProjectsPage } from './components/projects/ProjectsPage';
import { TeamPage } from './components/team/TeamPage';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

type AppTab = 'home' | 'about' | 'team' | 'expertise' | 'projects' | 'contact';

const appTabs: AppTab[] = [
  'home',
  'about',
  'team',
  'expertise',
  'projects',
  'contact'
];

function PortfolioApp() {
  const [currentTab, setCurrentTab] = useState<AppTab>('home');
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const navigate = (
    tab: string,
    memberId?: string,
    projectId?: string
  ) => {
    if (!appTabs.includes(tab as AppTab)) return;

    const nextTab = tab as AppTab;
    setCurrentTab(nextTab);
    setSelectedMemberId(nextTab === 'team' ? memberId ?? null : null);
    setSelectedProjectId(nextTab === 'projects' ? projectId ?? null : null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const content = (() => {
    switch (currentTab) {
      case 'home':
        return (
          <>
            <HeroSection onNavigate={navigate} />
            <TechMarquee />
            <StatsSection />
            <HowWeWorkSection onNavigate={navigate} />
            <FeaturedTeamSection onNavigate={navigate} />
            <CtaSection onNavigate={navigate} />
          </>
        );
      case 'about':
        return <AboutPage onNavigate={navigate} />;
      case 'team':
        return (
          <TeamPage
            selectedMemberId={selectedMemberId}
            onSelectMember={setSelectedMemberId}
          />
        );
      case 'expertise':
        return (
          <ExpertisePage
            onSelectMember={memberId => navigate('team', memberId)}
          />
        );
      case 'projects':
        return (
          <ProjectsPage
            selectedProjectId={selectedProjectId}
            onSelectProject={setSelectedProjectId}
            onSelectMember={memberId => navigate('team', memberId)}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onSelectMember={memberId => navigate('team', memberId)}
          />
        );
    }
  })();

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
          <Navbar currentTab={currentTab} onNavigate={navigate} />
          <main className="flex-1">{content}</main>
          <Footer onNavigate={navigate} />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default function App() {
  return <PortfolioApp />;
}

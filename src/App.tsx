import { AppProviders } from '@/providers/AppProviders';
import { useNavigation } from '@/hooks/useNavigation';
import { AppLayout } from '@/components/layout/AppLayout';
import { AboutPage } from '@/pages/about/AboutPage';
import { ContactPage } from '@/pages/contact/ContactPage';
import { ExpertisePage } from '@/pages/expertise/ExpertisePage';
import { HomePage } from '@/pages/home/HomePage';
import { ProjectsPage } from '@/pages/projects/ProjectsPage';
import { TeamPage } from '@/pages/team/TeamPage';
import { PageSeo } from '@/components/seo/PageSeo';
import { PageLink } from '@/components/ui/PageLink';

export default function App() {
  const {
    page,
    currentTab,
    selectedMemberId,
    selectedProjectId,
    setSelectedMemberId,
    setSelectedProjectId,
    navigate,
  } = useNavigation();
  const selectMember = (memberId: string) => navigate('team', memberId);

  const content = (() => {
    if (!page)
      return (
        <section className="mx-auto max-w-7xl px-6 py-24">
          <h1 className="text-3xl font-bold">Page not found</h1>
          <p className="my-4">This page is unavailable or may have moved.</p>
          <PageLink
            tab="home"
            onClick={() => navigate('home')}
            className="text-blue-600 underline dark:text-blue-400"
          >
            Return home
          </PageLink>
        </section>
      );
    switch (currentTab) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
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
        return <ExpertisePage onSelectMember={selectMember} />;
      case 'projects':
        return (
          <ProjectsPage
            selectedProjectId={selectedProjectId}
            onSelectProject={setSelectedProjectId}
            onSelectMember={selectMember}
          />
        );
      case 'contact':
        return <ContactPage onSelectMember={selectMember} />;
    }
  })();

  return (
    <AppProviders>
      <PageSeo page={page} />
      <AppLayout currentTab={currentTab} onNavigate={navigate}>
        {content}
      </AppLayout>
    </AppProviders>
  );
}

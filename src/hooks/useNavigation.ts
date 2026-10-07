import { useEffect, useState } from 'react';
import { APP_TABS, getPagePath, type Navigate } from '@/config/navigation';
import { findSeoPage } from '@/config/seo';

export function useNavigation() {
  const [page, setPage] = useState(() => findSeoPage(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setPage(findSeoPage(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate: Navigate = (tab, memberId, projectId) => {
    if (!APP_TABS.includes(tab)) return;
    const path = getPagePath(tab, memberId, projectId);
    if (window.location.pathname !== path)
      window.history.pushState(null, '', path);
    setPage(findSeoPage(path));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    page,
    currentTab: page?.tab ?? 'home',
    selectedMemberId: page?.memberId ?? null,
    selectedProjectId: page?.projectId ?? null,
    setSelectedMemberId: (id: string | null) =>
      navigate('team', id ?? undefined),
    setSelectedProjectId: (id: string | null) =>
      navigate('projects', undefined, id ?? undefined),
    navigate,
  };
}

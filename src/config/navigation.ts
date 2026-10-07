export const APP_TABS = [
  'home',
  'about',
  'team',
  'expertise',
  'projects',
  'contact',
] as const;

export type AppTab = (typeof APP_TABS)[number];
export type Navigate = (
  tab: AppTab,
  memberId?: string,
  projectId?: string,
) => void;

export function getPagePath(
  tab: AppTab,
  memberId?: string,
  projectId?: string,
) {
  const id =
    tab === 'team' ? memberId : tab === 'projects' ? projectId : undefined;
  return tab === 'home'
    ? '/'
    : `/${tab}/${id ? `${encodeURIComponent(id)}/` : ''}`;
}

export const NAVIGATION_LINKS = APP_TABS.map((id) => ({
  id,
  labelKey: id === 'contact' ? ('connect' as const) : id,
}));

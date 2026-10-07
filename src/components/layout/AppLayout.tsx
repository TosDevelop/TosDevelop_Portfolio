import type { PropsWithChildren } from 'react';
import type { AppTab, Navigate } from '@/config/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/ui/BackToTop';

type AppLayoutProps = PropsWithChildren<{
  currentTab: AppTab;
  onNavigate: Navigate;
}>;

export function AppLayout({
  currentTab,
  onNavigate,
  children,
}: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar currentTab={currentTab} onNavigate={onNavigate} />
      <main className="flex-1">{children}</main>
      <Footer onNavigate={onNavigate} />
      <BackToTop />
    </div>
  );
}

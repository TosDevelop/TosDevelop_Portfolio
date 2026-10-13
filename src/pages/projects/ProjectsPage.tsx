import { FolderOpen } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageContext';

export function ProjectsPage() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 md:py-16 lg:px-8">
      <header className="max-w-3xl space-y-4">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {t.projects.kicker}
        </p>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
          {t.projects.title}
        </h1>
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {t.projects.subtitle}
        </p>
      </header>
      <section
        data-reveal
        aria-labelledby="projects-empty-title"
        className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center dark:border-slate-700 dark:bg-slate-900"
      >
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
          <FolderOpen aria-hidden="true" className="h-7 w-7" />
        </div>
        <h2
          id="projects-empty-title"
          className="text-xl font-bold text-slate-900 dark:text-white"
        >
          {t.projects.emptyTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {t.projects.emptyDescription}
        </p>
      </section>
    </div>
  );
}

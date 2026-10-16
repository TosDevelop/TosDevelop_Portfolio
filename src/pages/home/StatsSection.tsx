import React from 'react';
import {
  Users,
  Layers,
  FolderGit2,
  Wrench,
  Code2,
  ArrowUpRight,
} from 'lucide-react';
import { PageLink } from '@/components/ui/PageLink';
import type { Navigate } from '@/config/navigation';
import { useLanguage } from '@/providers/LanguageContext';
import { TEAM_MEMBERS } from '@/data/team';
import { EXPERTISE_DOMAINS, ALL_TECH_BADGES } from '@/data/expertise';
import { PROJECTS_DATA } from '@/data/projects';

export const StatsSection: React.FC<{ onNavigate: Navigate }> = ({
  onNavigate,
}) => {
  const { t, language } = useLanguage();
  const formatCount = (count: number) =>
    new Intl.NumberFormat(
      language === 'km' ? 'km-KH-u-nu-khmr' : 'en-US',
    ).format(count);

  const stats = [
    {
      number: formatCount(TEAM_MEMBERS.length),
      label: t.stats.stat1Label,
      Icon: Users,
      tab: 'team',
    },
    {
      number: formatCount(EXPERTISE_DOMAINS.length),
      label: t.stats.stat2Label,
      Icon: Layers,
      tab: 'expertise',
    },
    {
      number: formatCount(PROJECTS_DATA.length),
      label: t.stats.stat3Label,
      Icon: FolderGit2,
      tab: 'projects',
    },
    {
      number: formatCount(
        new Set(ALL_TECH_BADGES.map((badge) => badge.name.trim().toLowerCase()))
          .size,
      ),
      label: t.stats.stat4Label,
      Icon: Wrench,
      tab: 'expertise',
    },
  ] as const;

  return (
    <section
      data-reveal
      aria-labelledby="team-overview-heading"
      className="py-16 md:py-20 border-b border-slate-200/60 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <h2
              id="team-overview-heading"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              {t.stats.headline}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.stats.sub}
            </p>
          </div>

          {/* What We Do Callout */}
          <div className="flex items-start gap-4 rounded-2xl bg-blue-50/70 p-5 sm:p-6 dark:bg-blue-950/25">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 dark:bg-blue-900/50 dark:text-blue-300">
              <Code2 aria-hidden="true" className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-bold tracking-wider uppercase text-blue-700 dark:text-blue-400 block">
                {t.whatWeDo.kicker}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                {t.whatWeDo.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                {t.whatWeDo.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Compact team overview */}
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-4 dark:border-slate-800 dark:bg-slate-800">
          {stats.map(({ number, label, Icon, tab }) => (
            <li key={label}>
              <PageLink
                tab={tab}
                onClick={() => onNavigate(tab)}
                className="group flex h-full min-w-0 flex-col gap-2 bg-white p-4 transition-colors hover:bg-blue-50 focus-visible:bg-blue-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-500 sm:p-6 dark:bg-slate-900 dark:hover:bg-blue-950/50 dark:focus-visible:bg-blue-950/50"
              >
                <span className="flex items-center gap-2 text-xs font-medium text-slate-500 sm:text-sm dark:text-slate-400">
                  <Icon
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-blue-500 dark:text-blue-400"
                  />
                  {label}
                </span>
                <span className="flex items-center justify-between gap-2 text-2xl font-bold tracking-tight tabular-nums text-slate-900 sm:text-3xl dark:text-white">
                  {number}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:text-blue-600 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5 dark:group-hover:text-blue-400"
                  />
                </span>
              </PageLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

import React from 'react';
import { useLanguage } from '@/providers/LanguageContext';
import { TEAM_MEMBERS } from '@/data/team';
import { EXPERTISE_DOMAINS, ALL_TECH_BADGES } from '@/data/expertise';
import { PROJECTS_DATA } from '@/data/projects';

export const StatsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const formatCount = (count: number) =>
    new Intl.NumberFormat(
      language === 'km' ? 'km-KH-u-nu-khmr' : 'en-US',
    ).format(count);

  const stats = [
    { number: formatCount(TEAM_MEMBERS.length), label: t.stats.stat1Label },
    {
      number: formatCount(EXPERTISE_DOMAINS.length),
      label: t.stats.stat2Label,
    },
    { number: formatCount(PROJECTS_DATA.length), label: t.stats.stat3Label },
    {
      number: formatCount(
        new Set(ALL_TECH_BADGES.map((badge) => badge.name.trim().toLowerCase()))
          .size,
      ),
      label: t.stats.stat4Label,
    },
  ];

  return (
    <section className="py-16 md:py-20 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.stats.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.stats.sub}
          </p>
        </div>

        {/* 4 Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tabular-nums tracking-tight">
                {stat.number}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* What We Do Callout */}
        <div className="p-6 sm:p-8 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50 space-y-2">
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
    </section>
  );
};

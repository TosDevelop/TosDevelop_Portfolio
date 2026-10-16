import type { Navigate } from '@/config/navigation';
import React from 'react';
import { useLanguage } from '@/providers/LanguageContext';
import {
  Target,
  Compass,
  HeartHandshake,
  RefreshCw,
  MessageCircle,
  Puzzle,
  Lightbulb,
  Clock3,
  Users,
  Plus,
} from 'lucide-react';
import { HowWeWorkSection } from '@/components/sections/HowWeWorkSection';
import { CtaSection } from '@/components/sections/CtaSection';

interface AboutPageProps {
  onNavigate: Navigate;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const valueStyles = [
    {
      Icon: Users,
      color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300',
    },
    {
      Icon: HeartHandshake,
      color: 'bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-300',
    },
    {
      Icon: RefreshCw,
      color: 'bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300',
    },
    {
      Icon: MessageCircle,
      color: 'bg-sky-50 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300',
    },
    {
      Icon: Puzzle,
      color:
        'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300',
    },
    {
      Icon: Lightbulb,
      color:
        'bg-violet-50 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300',
    },
    {
      Icon: Clock3,
      color:
        'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300',
    },
  ];

  return (
    <div className="space-y-16 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-800 text-xs font-semibold text-blue-700 dark:text-blue-300">
            <span>{t.about.kicker}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {t.about.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Mission */}
          <section
            data-reveal
            aria-labelledby="mission-heading"
            className="group relative isolate flex flex-col overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50 p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-900/5 motion-reduce:transition-none sm:p-8 dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/50"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 -z-10 h-48 w-48 rounded-full border-[24px] border-blue-100/40 dark:border-blue-800/10"
            />
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-600/15">
                <Target
                  aria-hidden="true"
                  className="h-6 w-6 transition-transform duration-300 motion-safe:group-hover:scale-110 motion-reduce:transition-none"
                />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-blue-700 dark:text-blue-300">
                {t.about.missionKicker}
              </span>
            </div>
            <h2
              id="mission-heading"
              className="mb-6 max-w-sm text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-3xl dark:text-white"
            >
              {t.about.missionTitle}
            </h2>
            <p className="mt-auto border-t border-blue-100 pt-5 text-sm leading-7 text-slate-600 dark:border-slate-700 dark:text-slate-300">
              {t.about.missionDesc}
            </p>
          </section>

          {/* Vision */}
          <section
            data-reveal
            aria-labelledby="vision-heading"
            className="group relative isolate flex flex-col overflow-hidden rounded-3xl border border-indigo-800 bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-indigo-900/20 motion-reduce:transition-none sm:p-8"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 -z-10 h-48 w-48 rounded-full border-[24px] border-indigo-400/10"
            />
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-indigo-200">
                <Compass
                  aria-hidden="true"
                  className="h-6 w-6 transition-transform duration-300 motion-safe:group-hover:rotate-12 motion-reduce:transition-none"
                />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-indigo-200">
                {t.about.visionKicker}
              </span>
            </div>
            <h2
              id="vision-heading"
              className="mb-6 max-w-sm text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl"
            >
              {t.about.visionTitle}
            </h2>
            <p className="mt-auto border-t border-white/15 pt-5 text-sm leading-7 text-indigo-100/90">
              {t.about.visionDesc}
            </p>
          </section>
        </div>

        {/* Values Section */}
        <section
          aria-labelledby="team-habits-heading"
          className="pt-6 space-y-6"
        >
          <div className="max-w-3xl space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {t.about.valuesKicker}
            </span>
            <h2
              id="team-habits-heading"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              {t.about.valuesTitle}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {t.about.valuesDesc}
            </p>
          </div>

          <div
            data-reveal
            className="grid grid-cols-1 items-start sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {t.about.values.map((value, index) => {
              const { Icon, color } = valueStyles[index];
              return (
                <details
                  key={value.title}
                  className={`group overflow-hidden rounded-2xl border transition-colors open:border-blue-300 hover:border-blue-300 dark:open:border-blue-700 dark:hover:border-blue-700 ${index === 0 ? 'sm:col-span-2 lg:col-span-3 border-blue-100 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/25' : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'}`}
                >
                  <summary className="flex cursor-pointer list-none items-start gap-4 p-5 sm:p-6 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-500 [&::-webkit-details-marker]:hidden">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${color}`}
                    >
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5 transition-transform motion-safe:group-hover:scale-110"
                      />
                    </span>
                    <span className="min-w-0 flex-1 space-y-2">
                      <span className="block text-base font-bold text-slate-900 dark:text-white">
                        {value.title}
                      </span>
                      <span className="block max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {value.desc}
                      </span>
                      <span className="block text-xs font-semibold text-blue-600 dark:text-blue-400">
                        {t.about.valueExampleLabel}
                      </span>
                    </span>
                    <Plus
                      aria-hidden="true"
                      className="mt-2 h-4 w-4 shrink-0 text-slate-400 transition-transform group-open:rotate-45 motion-reduce:transition-none"
                    />
                  </summary>
                  <div className="mx-5 border-t border-slate-200/80 py-5 text-sm leading-relaxed text-slate-600 sm:mx-6 dark:border-slate-700 dark:text-slate-300">
                    {value.example}
                  </div>
                </details>
              );
            })}
          </div>
        </section>
      </div>

      {/* How We Work Section */}
      <HowWeWorkSection onNavigate={onNavigate} />

      {/* Bottom CTA */}
      <CtaSection onNavigate={onNavigate} />
    </div>
  );
};

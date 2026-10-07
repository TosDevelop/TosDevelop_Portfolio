import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Target, Compass, HeartHandshake, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { HowWeWorkSection } from '../home/HowWeWorkSection';
import { CtaSection } from '../home/CtaSection';

interface AboutPageProps {
  onNavigate: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const values = [
    { title: 'Respect', desc: 'Valuing diverse perspectives, backgrounds, and opinions across our team and partners.' },
    { title: 'Adaptability', desc: 'Embracing modern tech stacks and adjusting quickly to evolving project constraints.' },
    { title: 'Communication', desc: 'Practicing transparent, concise, and proactive feedback in daily scrums and reviews.' },
    { title: 'Problem Solving', desc: 'Deconstructing complex engineering bottlenecks into methodical, tested solutions.' },
    { title: 'Critical Thinking', desc: 'Analyzing architectural trade-offs, security implications, and maintainability.' },
    { title: 'Time Management', desc: 'Balancing intensive academic schedules with rigorous project delivery deadlines.' },
    { title: 'Teamwork & Collaboration', desc: 'Fostering collective ownership, mutual peer code reviews, and shared triumph.' }
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

        {/* Mission & Vision 2-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400 block mb-1">
                {t.about.missionKicker}
              </span>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {t.about.missionTitle}
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.about.missionDesc}
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 block mb-1">
                {t.about.visionKicker}
              </span>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {t.about.visionTitle}
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.about.visionDesc}
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="pt-6 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {t.about.valuesKicker}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t.about.valuesTitle}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {t.about.valuesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {v.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <HowWeWorkSection onNavigate={onNavigate} />

      {/* Bottom CTA */}
      <CtaSection onNavigate={onNavigate} />
    </div>
  );
};

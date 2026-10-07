import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

interface HowWeWorkSectionProps {
  onNavigate: (tab: string) => void;
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & About button */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {t.howWeWork.kicker}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {t.howWeWork.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.howWeWork.desc}
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors cursor-pointer"
              >
                <span>{t.howWeWork.learnMore}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 5 numbered steps */}
          <div className="lg:col-span-7 space-y-3.5">
            {t.howWeWork.steps.map(step => (
              <div
                key={step.num}
                className="flex items-start gap-4 p-4.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-2xs hover:border-blue-400/80 dark:hover:border-blue-700/80 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-mono font-bold text-xs">
                  {step.num}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

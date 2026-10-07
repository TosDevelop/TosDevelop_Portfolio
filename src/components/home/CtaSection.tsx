import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface CtaSectionProps {
  onNavigate: (tab: string) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-blue-600 dark:bg-blue-600 text-white p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl shadow-blue-500/20">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-blue-100">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>{t.ctaBanner.kicker}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
              {t.ctaBanner.title}
            </h2>
          </div>

          <button
            onClick={() => onNavigate('team')}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-blue-600 hover:bg-blue-50 active:scale-95 font-semibold text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            <span>{t.ctaBanner.button}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

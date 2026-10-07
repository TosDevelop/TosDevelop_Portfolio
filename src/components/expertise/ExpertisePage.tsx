import React from 'react';
import { EXPERTISE_DOMAINS, ALL_TECH_BADGES } from '../../data/expertiseData';
import { TEAM_MEMBERS } from '../../data/teamData';
import { useLanguage } from '../../context/LanguageContext';
import { TechIcon } from '../common/TechIcon';
import { Avatar } from '../common/Avatar';
import {
  Layers,
  ShieldCheck,
  CalendarCheck,
  BarChart3,
  Cloud,
  Radio
} from 'lucide-react';

interface ExpertisePageProps {
  onSelectMember: (memberId: string) => void;
}

export const ExpertisePage: React.FC<ExpertisePageProps> = ({ onSelectMember }) => {
  const { language, t } = useLanguage();

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      default:
        return <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <div className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-800 text-xs font-semibold text-blue-700 dark:text-blue-300">
          <span>{t.expertise.kicker}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          {t.expertise.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {t.expertise.subtitle}
        </p>
      </div>

      {/* 6 Core Focus Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXPERTISE_DOMAINS.map(domain => {
          const linkedMembers = domain.relatedMemberIds
            .map(id => TEAM_MEMBERS.find(m => m.id === id))
            .filter(Boolean);

          return (
            <div
              key={domain.id}
              className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Icon + Title */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    {getDomainIcon(domain.iconName)}
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {language === 'km' ? domain.titleKm : domain.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'km' ? domain.descriptionKm : domain.description}
                </p>

                {/* Related Technologies */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
                    {t.expertise.relatedTech}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.technologies.map((tech, idx) => (
                      <TechIcon key={idx} name={tech} size="sm" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Members */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
                  {t.expertise.relatedMembers}
                </span>

                <div className="flex flex-wrap items-center gap-2">
                  {linkedMembers.map(member => (
                    <button
                      key={member!.id}
                      onClick={() => onSelectMember(member!.id)}
                      title={`View ${member!.name}`}
                      className="inline-flex items-center gap-2 p-1 pr-2.5 rounded-full border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs transition-colors cursor-pointer"
                    >
                      <Avatar
                        src={member!.image}
                        alt={member!.name}
                        name={member!.name}
                        size="sm"
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-[11px] font-semibold">
                        {language === 'km' ? member!.nameKm : member!.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual Technology Badges System Section */}
      <div className="pt-8 space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {t.expertise.techSystemKicker}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.expertise.techSystemTitle}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.expertise.techSystemDesc}
          </p>
        </div>

        {/* Visual Badge Tiles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {ALL_TECH_BADGES.map(badge => (
            <div
              key={badge.name}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-2.5 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <TechIcon name={badge.name} size="sm" showLabel={false} />
              <div className="min-w-0">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100 block truncate">
                  {badge.name}
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 block truncate">
                  {badge.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

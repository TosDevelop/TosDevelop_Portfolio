import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TEAM_MEMBERS } from '../../data/teamData';
import { HeroTeamGrid } from './HeroTeamGrid';
import { ArrowRight, Users } from 'lucide-react';
import { Avatar } from '../common/Avatar';

interface HeroSectionProps {
  onNavigate: (tab: string, memberId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Cohort Tag / Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-800 text-xs font-semibold text-blue-700 dark:text-blue-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              {t.hero.titlePart1}
              <span className="text-blue-600 dark:text-blue-400">
                {t.hero.titleHighlight}
              </span>
              {t.hero.titlePart2}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-semibold shadow-md shadow-blue-500/20 transition-all whitespace-nowrap cursor-pointer"
              >
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('team')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm font-semibold transition-all whitespace-nowrap cursor-pointer"
              >
                <Users className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>{t.hero.meetTeam}</span>
              </button>
            </div>

            {/* Team Members Avatar Stack Proof */}
            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-2.5 overflow-hidden">
                {TEAM_MEMBERS.map(member => (
                  <div
                    key={member.id}
                    onClick={() => onNavigate('team', member.id)}
                    title={member.name}
                    className="cursor-pointer ring-2 ring-white dark:ring-slate-900 rounded-full overflow-hidden hover:scale-110 hover:z-10 transition-transform"
                  >
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      name={member.name}
                      size="sm"
                      className="w-8 h-8 rounded-full"
                    />
                  </div>
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-slate-900 dark:text-white block">
                  {t.hero.teamCount}
                </span>
                <span className="text-slate-500 dark:text-slate-400">
                  {t.hero.teamSub}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Team Collage */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroTeamGrid
              onSelectMember={memberId => onNavigate('team', memberId)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TEAM_MEMBERS } from '../../data/teamData';
import { Avatar } from '../common/Avatar';
import { ArrowRight, FileText } from 'lucide-react';

interface FeaturedTeamSectionProps {
  onNavigate: (tab: string, memberId?: string) => void;
}

export const FeaturedTeamSection: React.FC<FeaturedTeamSectionProps> = ({
  onNavigate
}) => {
  const { language, t } = useLanguage();

  // Highlight first 4 members on home page
  const featured = TEAM_MEMBERS.slice(0, 4);

  return (
    <section className="py-16 md:py-20 border-b border-slate-200/60 dark:border-slate-800 bg-white/30 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              MEET THE TEAM
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              People behind the projects
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
              Explore individual profiles for verified skills, education, experience, projects and downloadable CVs.
            </p>
          </div>

          <button
            onClick={() => onNavigate('team')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 self-start sm:self-auto cursor-pointer"
          >
            <span>View all 7 members</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(member => (
            <div
              key={member.id}
              className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200"
            >
              {/* Photo Area with Top Badge */}
              <div className="relative aspect-[4/4.5] bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <Avatar
                  src={member.image}
                  alt={member.name}
                  name={member.name}
                  size="xl"
                  className="w-full h-full"
                />
                {member.badge && (
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-100 shadow-xs">
                    {language === 'km' ? member.badgeKm || member.badge : member.badge}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    {language === 'km' ? member.nameKm : member.name}
                  </h3>
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    {language === 'km' ? member.roleKm : member.role}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {language === 'km' ? member.taglineKm : member.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => onNavigate('team', member.id)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 active:scale-98 text-white text-xs font-semibold transition-all cursor-pointer"
                  >
                    <span>{t.team.viewProfile}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('team', member.id)}
                    title="View CV"
                    className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

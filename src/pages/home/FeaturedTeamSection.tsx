import { PageLink } from '@/components/ui/PageLink';
import type { Navigate } from '@/config/navigation';
import React from 'react';
import { useLanguage } from '@/providers/LanguageContext';
import { TEAM_MEMBERS } from '@/data/team';
import { Avatar } from '@/components/ui/Avatar';
import { JobAvailability } from '@/components/ui/JobAvailability';
import { ArrowRight } from 'lucide-react';
import { MemberCardActions } from '@/components/ui/MemberCardActions';

interface FeaturedTeamSectionProps {
  onNavigate: Navigate;
}

export const FeaturedTeamSection: React.FC<FeaturedTeamSectionProps> = ({
  onNavigate,
}) => {
  const { language, t } = useLanguage();

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
              Explore individual profiles for verified skills, education,
              experience, projects and downloadable CVs.
            </p>
          </div>

          <PageLink
            tab={'team'}
            onClick={() => onNavigate('team')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 self-start sm:self-auto cursor-pointer"
          >
            <span>{t.team.viewAllMembers}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </PageLink>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {TEAM_MEMBERS.map((member) => (
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
                    {language === 'km'
                      ? member.badgeKm || member.badge
                      : member.badge}
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

                <JobAvailability lookingFor={member.lookingFor} />

                <MemberCardActions
                  member={member}
                  onSelect={() => onNavigate('team', member.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

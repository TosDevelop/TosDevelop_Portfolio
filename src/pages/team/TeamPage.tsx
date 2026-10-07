import { PageLink } from '@/components/ui/PageLink';
import { CategoryFilter } from '@/components/ui/CategoryFilter';
import React, { useState } from 'react';
import { TEAM_MEMBERS } from '@/data/teamData';
import { TeamCategory, TeamMember } from '@/types/index';
import { useLanguage } from '@/providers/LanguageContext';
import { Avatar } from '@/components/ui/Avatar';
import { TeamMemberDetail } from '@/pages/team/TeamMemberDetail';
import { ArrowRight, FileText } from 'lucide-react';

interface TeamPageProps {
  selectedMemberId?: string | null;
  onSelectMember: (memberId: string | null) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({
  selectedMemberId,
  onSelectMember,
}) => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<TeamCategory>('All');

  // If a member is currently selected, render the detailed profile view
  const currentMember = TEAM_MEMBERS.find((m) => m.id === selectedMemberId);

  if (currentMember) {
    return (
      <TeamMemberDetail
        member={currentMember}
        onBack={() => onSelectMember(null)}
      />
    );
  }

  // Filter members based on category
  const filteredMembers =
    activeCategory === 'All'
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.category.includes(activeCategory));

  const filterTabs: TeamCategory[] = [
    'All',
    'Development',
    'QA',
    'Planning',
    'Infrastructure',
  ];

  return (
    <div className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-800 text-xs font-semibold text-blue-700 dark:text-blue-300">
          <span>{t.team.kicker}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          {t.team.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {t.team.subtitle}
        </p>
      </div>

      {/* Segmented Filter Buttons */}
      <CategoryFilter
        categories={filterTabs}
        value={activeCategory}
        onChange={setActiveCategory}
        labels={t.team.filters}
      />

      {/* Member Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200"
          >
            {/* Portrait Image Area */}
            <div className="relative aspect-[4/4.8] bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <Avatar
                src={member.image}
                alt={member.name}
                name={member.name}
                size="xl"
                className="w-full h-full"
              />
              {member.badge && (
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded text-[10px] font-bold bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-100 shadow-xs">
                  {language === 'km'
                    ? member.badgeKm || member.badge
                    : member.badge}
                </span>
              )}
            </div>

            {/* Content Details */}
            <div className="p-4.5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-1.5">
                <h2 className="font-bold text-base text-slate-900 dark:text-white">
                  {language === 'km' ? member.nameKm : member.name}
                </h2>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                  {language === 'km' ? member.roleKm : member.role}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {language === 'km' ? member.taglineKm : member.tagline}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <PageLink
                  tab="team"
                  memberId={member.id}
                  onClick={() => onSelectMember(member.id)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 active:scale-98 text-white text-xs font-semibold transition-all cursor-pointer shadow-xs shadow-blue-500/20"
                >
                  <span>{t.team.viewProfile}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </PageLink>

                <PageLink
                  tab="team"
                  memberId={member.id}
                  onClick={() => onSelectMember(member.id)}
                  title="View CV"
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                </PageLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

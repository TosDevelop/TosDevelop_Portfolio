import { MemberCardActions } from '@/components/ui/MemberCardActions';
import { CategoryFilter } from '@/components/ui/CategoryFilter';
import React, { useState } from 'react';
import { TEAM_MEMBERS } from '@/data/team';
import type { TeamCategory } from '@/types/index';
import { useLanguage } from '@/providers/LanguageContext';
import { Avatar } from '@/components/ui/Avatar';
import { JobAvailability } from '@/components/ui/JobAvailability';
import { TeamMemberDetail } from '@/pages/team/TeamMemberDetail';
import { PageLink } from '@/components/ui/PageLink';
import { Search, Users, ArrowUpRight, X } from 'lucide-react';

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
  const [query, setQuery] = useState('');

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
  const search = query.trim().toLocaleLowerCase();
  const filteredMembers = TEAM_MEMBERS.filter((member) => {
    const matchesCategory =
      activeCategory === 'All' || member.category.includes(activeCategory);
    const searchableText = [
      member.name,
      member.nameKm,
      member.role,
      member.roleKm,
      ...member.technicalSkills.flatMap((category) =>
        category.skills.map((skill) => skill.name),
      ),
      ...(member.technicalSkillsKm ?? []).flatMap((category) =>
        category.skills.map((skill) => skill.name),
      ),
    ]
      .join(' ')
      .toLocaleLowerCase();
    return matchesCategory && searchableText.includes(search);
  });
  const formatCount = (count: number) =>
    new Intl.NumberFormat(
      language === 'km' ? 'km-KH-u-nu-khmr' : 'en-US',
    ).format(count);
  const resetFilters = () => {
    setQuery('');
    setActiveCategory('All');
  };

  const filterTabs: TeamCategory[] = [
    'All',
    'Development',
    'UI/UX',
    'QA',
    'Planning',
    'Infrastructure',
  ];

  return (
    <div className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-white p-6 sm:p-10 dark:border-slate-800 dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-900">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-800 text-xs font-semibold text-blue-700 dark:text-blue-300">
            <span>{t.team.kicker}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {t.team.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.team.subtitle}
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300">
            <Users aria-hidden="true" className="h-4 w-4" />
            {formatCount(TEAM_MEMBERS.length)} {t.stats.stat1Label}
          </div>
        </div>
      </div>

      {/* Segmented Filter Buttons */}
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <label className="relative block w-full sm:max-w-sm">
            <span className="sr-only">{t.team.searchPlaceholder}</span>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-slate-400"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.team.searchPlaceholder}
              className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </label>
          <div className="flex items-center gap-4">
            <p
              role="status"
              className="text-xs text-slate-500 dark:text-slate-400"
            >
              {t.team.resultsLabel}: {formatCount(filteredMembers.length)} /{' '}
              {formatCount(TEAM_MEMBERS.length)}
            </p>
            {(query || activeCategory !== 'All') && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 rounded-md py-2 text-xs font-semibold text-blue-600 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-blue-500 dark:text-blue-400"
              >
                <X aria-hidden="true" className="h-3.5 w-3.5" />
                {t.team.resetFilters}
              </button>
            )}
          </div>
        </div>
        <CategoryFilter
          categories={filterTabs}
          value={activeCategory}
          onChange={setActiveCategory}
          labels={t.team.filters}
        />
      </div>

      {filteredMembers.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-900">
          <Search
            aria-hidden="true"
            className="mx-auto mb-4 h-7 w-7 text-slate-400"
          />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            {t.team.noResults}
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {t.team.searchHelp}
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-5 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            {t.team.resetFilters}
          </button>
        </div>
      )}

      {/* Member Cards Grid */}
      <div
        key={activeCategory}
        className="stagger-enter grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {filteredMembers.map((member) => (
          <article
            key={member.id}
            className="group flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs hover:shadow-lg hover:shadow-blue-900/5 hover:border-blue-300 dark:hover:border-blue-700 transition-[border-color,box-shadow] duration-200 motion-reduce:transition-none"
          >
            {/* Portrait Image Area */}
            <PageLink
              tab="team"
              memberId={member.id}
              onClick={() => onSelectMember(member.id)}
              aria-label={`${t.team.viewProfile}: ${language === 'km' ? member.nameKm : member.name}`}
              className="relative block aspect-square bg-slate-100 dark:bg-slate-800 overflow-hidden focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-500"
            >
              <Avatar
                src={member.image}
                alt={member.name}
                name={member.name}
                size="hero"
                className="w-full h-full"
              />
              {member.badge && (
                <span className="absolute top-3 left-3 right-3 w-fit max-w-[calc(100%-1.5rem)] px-2.5 py-1 rounded-md text-[10px] font-semibold bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-100 shadow-xs">
                  {language === 'km'
                    ? member.badgeKm || member.badge
                    : member.badge}
                </span>
              )}
              <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-blue-600 shadow-sm transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </span>
            </PageLink>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
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

              <JobAvailability lookingFor={member.lookingFor} />

              {/* Action Buttons */}
              <MemberCardActions
                member={member}
                onSelect={() => onSelectMember(member.id)}
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

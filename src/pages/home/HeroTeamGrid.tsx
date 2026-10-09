import { ArrowUpRight } from 'lucide-react';
import { PageLink } from '@/components/ui/PageLink';
import { Avatar } from '@/components/ui/Avatar';
import { SITE_NAME } from '@/config/site';
import { TEAM_MEMBERS } from '@/data/team';
import { useLanguage } from '@/providers/LanguageContext';
import type { TeamMember } from '@/types/index';

interface HeroTeamGridProps {
  onSelectMember: (memberId: string) => void;
  members?: readonly TeamMember[];
}

export function HeroTeamGrid({
  onSelectMember,
  members = TEAM_MEMBERS,
}: HeroTeamGridProps) {
  const { language, t } = useLanguage();
  const rowCount = Math.ceil(members.length / 6);
  const membersPerRow = Math.ceil(members.length / Math.max(rowCount, 1));
  const rows = Array.from({ length: rowCount }, (_, index) =>
    members.slice(index * membersPerRow, (index + 1) * membersPerRow),
  );
  const memberCount = new Intl.NumberFormat(
    language === 'km' ? 'km-KH-u-nu-khmr' : 'en',
  ).format(members.length);

  return (
    <div className="relative isolate mx-auto w-full min-w-0 max-w-[36rem] px-1 py-4 sm:py-8 lg:max-w-none">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-[8%] inset-y-[15%] rounded-full bg-gradient-to-r from-sky-100 via-indigo-100 to-blue-100 blur-3xl dark:from-sky-950/60 dark:via-indigo-950/60 dark:to-blue-950/60" />
        <div className="absolute inset-x-[4%] bottom-[24%] h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent dark:via-blue-700" />
      </div>

      <div className="relative mb-6 flex flex-wrap items-center justify-between gap-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
          {t.hero.meetTeam}
        </span>
        <span className="flex items-center gap-2 text-[10px] font-medium text-slate-500 dark:text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          {memberCount} {t.stats.stat1Label}
        </span>
      </div>

      <div className="relative space-y-6">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex items-start justify-center gap-2 sm:gap-3"
          >
            {row.map((member, index) => {
              const name = language === 'km' ? member.nameKm : member.name;
              const role = language === 'km' ? member.roleKm : member.role;

              return (
                <PageLink
                  key={member.id}
                  tab="team"
                  memberId={member.id}
                  onClick={() => onSelectMember(member.id)}
                  aria-label={`${t.team.viewProfile}: ${name}`}
                  title={`${name} — ${role}`}
                  style={{
                    marginTop: Math.abs(index - (row.length - 1) / 2) * 24,
                  }}
                  className="group min-w-0 flex-1 basis-0 max-w-[6.5rem] rounded-full outline-offset-4 transition-transform duration-300 focus-visible:outline-2 focus-visible:outline-blue-500 motion-safe:hover:-translate-y-3 motion-safe:focus-visible:-translate-y-3"
                >
                  <div className="relative aspect-[1/3] lg:aspect-[3/8]">
                    <div className="absolute inset-y-0 -inset-x-0.5 overflow-hidden rounded-full border-[3px] border-white bg-slate-200 shadow-lg shadow-slate-900/10 transition-shadow duration-300 group-hover:shadow-xl sm:-inset-x-1 dark:border-slate-700 dark:bg-slate-800 dark:shadow-black/25">
                      <Avatar
                        src={member.image}
                        alt={name}
                        name={member.name}
                        size="hero"
                        className="[&_img]:object-center"
                      />
                      <span
                        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/60 to-transparent"
                        aria-hidden="true"
                      />
                      <span className="absolute bottom-3 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm transition-colors group-hover:bg-blue-600 sm:bottom-4 sm:h-7 sm:w-7">
                        <ArrowUpRight
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 break-words text-center text-[9px] font-semibold leading-relaxed text-slate-700 sm:text-[10px] dark:text-slate-200">
                    {name}
                  </p>
                </PageLink>
              );
            })}
          </div>
        ))}
      </div>

      <div className="relative mt-8 flex items-end justify-between gap-4 border-t border-slate-200/80 pt-5 dark:border-slate-800">
        <div>
          <p className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl dark:text-white">
            {SITE_NAME}
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {t.hero.teamSub}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="select-none font-mono text-3xl font-light text-blue-200 sm:text-4xl dark:text-blue-900"
        >
          &lt;/&gt;
        </span>
      </div>
    </div>
  );
}

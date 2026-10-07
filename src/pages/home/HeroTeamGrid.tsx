import { PageLink } from '@/components/ui/PageLink';
import React from 'react';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageContext';
import { TEAM_MEMBERS } from '@/data/teamData';
import { Avatar } from '@/components/ui/Avatar';

interface HeroTeamGridProps {
  onSelectMember: (memberId: string) => void;
}

const portraitPositions = [
  'left-[22%] top-[1%]',
  'left-[58%] top-[1%]',
  'left-0 top-[25%]',
  'left-[76%] top-[27%]',
  'left-[7%] top-[58%]',
  'left-[68%] top-[59%]',
  'left-[38%] top-[70%]',
];

export const HeroTeamGrid: React.FC<HeroTeamGridProps> = ({
  onSelectMember,
}) => {
  const { language, t } = useLanguage();

  return (
    <div className="relative mx-auto w-full max-w-[32rem]">
      <div className="absolute -inset-5 -z-10 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-900/20" />

      <div className="relative aspect-square w-full">
        <div className="absolute inset-[5%] rounded-2xl border border-slate-200/80 bg-white/80 shadow-sm dark:border-slate-800 dark:bg-slate-900/70" />
        <div className="absolute inset-[12%] rounded-full border border-dashed border-blue-200 dark:border-blue-900/70" />
        <div className="absolute inset-[21%] rounded-full bg-blue-50/70 dark:bg-blue-950/30" />

        {TEAM_MEMBERS.map((member, index) => (
          <PageLink
            tab="team"
            memberId={member.id}
            key={member.id}
            type="button"
            onClick={() => onSelectMember(member.id)}
            aria-label={`View ${member.name}'s profile`}
            title={language === 'km' ? member.nameKm : member.name}
            className={`absolute z-10 aspect-[4/5] w-[23%] overflow-hidden rounded-xl border-2 border-white bg-white shadow-lg shadow-slate-900/15 transition duration-200 hover:z-20 hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/40 dark:border-slate-700 dark:bg-slate-800 ${portraitPositions[index]}`}
          >
            <Avatar
              src={member.image}
              alt={member.name}
              name={member.name}
              size="hero"
              className="w-full text-sm"
            />
          </PageLink>
        ))}

        <div className="absolute left-1/2 top-1/2 z-10 flex w-[38%] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-xl border border-blue-400/30 bg-blue-600 px-2 py-3 text-center text-white shadow-xl shadow-blue-600/25 sm:px-3 sm:py-4">
          <span className="mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="text-[8px] font-bold uppercase leading-tight tracking-wide text-blue-100 sm:text-[9px]">
            {t.hero.centerBadgeTop}
          </span>
          <span className="mt-1 text-xs font-extrabold leading-tight sm:text-base">
            {t.hero.centerBadgeTitle}
          </span>
          <span className="mt-1 text-[8px] leading-tight text-blue-100 sm:text-[9px]">
            {t.hero.centerBadgeSub}
          </span>
        </div>
      </div>
    </div>
  );
};

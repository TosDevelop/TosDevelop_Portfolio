import { ArrowRight } from 'lucide-react';
import { PageLink } from '@/components/ui/PageLink';
import { useLanguage } from '@/providers/LanguageContext';
import type { TeamMember } from '@/types/index';

export function MemberCardActions({
  member,
  onSelect,
}: {
  member: TeamMember;
  onSelect: () => void;
}) {
  const { language, t } = useLanguage();
  const name = language === 'km' ? member.nameKm : member.name;
  const focus =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900';

  return (
    <div className="border-t border-slate-100 pt-3 dark:border-slate-800">
      <PageLink
        tab="team"
        memberId={member.id}
        onClick={onSelect}
        aria-label={`${t.team.viewProfile}: ${name}`}
        className={`group flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 py-2.5 text-xs font-semibold text-white shadow-sm shadow-blue-600/15 transition-colors hover:bg-blue-700 active:bg-blue-800 ${focus}`}
      >
        <span className="whitespace-nowrap">{t.team.viewProfile}</span>
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 shrink-0 transition-transform motion-safe:group-hover:translate-x-0.5"
        />
      </PageLink>
    </div>
  );
}

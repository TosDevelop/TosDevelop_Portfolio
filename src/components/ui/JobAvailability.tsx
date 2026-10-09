import { useLanguage } from '@/providers/LanguageContext';
import type { JobType } from '@/types/index';

export function JobAvailability({ lookingFor }: { lookingFor: JobType[] }) {
  const { t } = useLanguage();
  if (!lookingFor.length) return null;

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
        {t.team.lookingFor}
      </p>
      <ul className="flex flex-wrap gap-1.5" aria-label={t.team.lookingFor}>
        {lookingFor.map((jobType) => (
          <li
            key={jobType}
            className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300"
          >
            {t.team.jobTypes[jobType]}
          </li>
        ))}
      </ul>
    </div>
  );
}

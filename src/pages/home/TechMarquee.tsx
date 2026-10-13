import { ALL_TECH_BADGES } from '@/data/expertise';
import { TechIcon } from '@/components/ui/TechIcon';

export function TechMarquee() {
  return (
    <div className="tech-marquee overflow-hidden border-b border-slate-200/60 bg-white/40 py-6 select-none dark:border-slate-800 dark:bg-slate-900/40">
      <div className="marquee-track animate-marquee flex w-max">
        {[false, true].map((duplicate) => (
          <div
            key={String(duplicate)}
            aria-hidden={duplicate || undefined}
            className="marquee-group flex shrink-0 items-center gap-3 pr-3"
          >
            {ALL_TECH_BADGES.map((tech) => (
              <div
                key={`${tech.category}-${tech.name}`}
                className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs transition-colors hover:border-blue-400 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-600"
              >
                <TechIcon name={tech.name} size="sm" showLabel={false} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

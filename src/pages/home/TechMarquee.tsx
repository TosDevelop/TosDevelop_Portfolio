import React from 'react';
import { ALL_TECH_BADGES } from '@/data/expertiseData';
import { TechIcon } from '@/components/ui/TechIcon';

export const TechMarquee: React.FC = () => {
  // Duplicate for seamless infinite loop
  const badges = [...ALL_TECH_BADGES, ...ALL_TECH_BADGES];

  return (
    <div className="py-6 border-b border-slate-200/60 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 overflow-hidden select-none">
      <div className="flex animate-marquee gap-3 items-center whitespace-nowrap">
        {badges.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-2xs hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
          >
            <TechIcon name={tech.name} size="sm" showLabel={false} />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

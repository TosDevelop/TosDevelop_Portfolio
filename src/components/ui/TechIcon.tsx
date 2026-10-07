import { TECHNOLOGY_LOGOS } from '@/data/technologies';
import React from 'react';

interface TechIconProps {
  name: string;
  size?: 'sm' | 'md';
  showLabel?: boolean;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({
  name,
  size = 'sm',
  showLabel = true,
  className = '',
}) => {
  const logo = TECHNOLOGY_LOGOS[name.trim().toLowerCase()];
  if (logo) {
    return (
      <span
        className={`inline-flex shrink-0 items-center gap-1.5 ${showLabel ? 'rounded border border-slate-200 bg-white px-2 py-0.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200' : ''} ${className}`}
      >
        <img
          src={logo}
          alt={showLabel ? '' : name}
          width={size === 'sm' ? 20 : 24}
          height={size === 'sm' ? 20 : 24}
          className={`shrink-0 object-contain ${size === 'sm' ? 'h-5 w-5' : 'h-6 w-6'} ${['next.js', 'github', 'framer motion', 'express', 'express.js', 'chatgpt'].includes(name.trim().toLowerCase()) ? 'dark:invert' : ''}`}
        />
        {showLabel && <span>{name}</span>}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex max-w-full items-center rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 ${className}`}
    >
      <span className="break-words">{name}</span>
    </span>
  );
};

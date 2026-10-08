import { TECHNOLOGY_LOGOS } from '@/data/technologies';
import React from 'react';
import {
  Blocks,
  Cable,
  KeyRound,
  Palette,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

const SKILL_ICONS: Record<string, LucideIcon> = {
  'rest api': Cable,
  'rest apis': Cable,
  'rest api integration': Cable,
  oauth: KeyRound,
  'ui design': Palette,
  prototyping: Workflow,
};

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
          className={`shrink-0 object-contain ${size === 'sm' ? 'h-5 w-5' : 'h-6 w-6'} ${['next.js', 'github', 'framer motion', 'express', 'express.js', 'chatgpt', 'flask', 'django', 'vercel'].includes(name.trim().toLowerCase()) ? 'dark:invert' : ''}`}
        />
        {showLabel && <span>{name}</span>}
      </span>
    );
  }

  const Icon = SKILL_ICONS[name.trim().toLowerCase()] ?? Blocks;

  return (
    <span
      className={`inline-flex max-w-full items-center gap-1.5 text-slate-600 dark:text-slate-300 ${showLabel ? 'rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium dark:border-slate-700 dark:bg-slate-800' : 'shrink-0'} ${className}`}
    >
      <Icon
        size={size === 'sm' ? 20 : 24}
        className="shrink-0"
        aria-hidden={showLabel ? true : undefined}
        aria-label={showLabel ? undefined : name}
      />
      {showLabel && <span className="break-words">{name}</span>}
    </span>
  );
};

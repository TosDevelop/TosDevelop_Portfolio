import { TECHNOLOGY_LOGOS } from '@/data/technologyLogos';
import React from 'react';
import {
  Code,
  Database,
  Server,
  Cloud,
  Terminal,
  Cpu,
  Layers,
  Globe,
  GitBranch,
  Shield,
  FileCode,
  Layout,
} from 'lucide-react';

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
  const logo = TECHNOLOGY_LOGOS[name.toLowerCase()];
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
          className={`shrink-0 object-contain ${size === 'sm' ? 'h-5 w-5' : 'h-6 w-6'} ${['next.js', 'github', 'framer motion'].includes(name.toLowerCase()) ? 'dark:invert' : ''}`}
        />
        {showLabel && <span>{name}</span>}
      </span>
    );
  }

  const getIconAndColor = (techName: string) => {
    const lower = techName.toLowerCase();
    if (lower.includes('react'))
      return {
        icon: Globe,
        color:
          'text-sky-500 bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800',
      };
    if (lower.includes('vue'))
      return {
        icon: Layout,
        color:
          'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800',
      };
    if (lower.includes('laravel'))
      return {
        icon: Server,
        color:
          'text-red-500 bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-800',
      };
    if (lower.includes('node'))
      return {
        icon: Terminal,
        color:
          'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800',
      };
    if (lower.includes('python'))
      return {
        icon: Code,
        color:
          'text-amber-500 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800',
      };
    if (
      lower.includes('mysql') ||
      lower.includes('sql') ||
      lower.includes('database')
    ) {
      return {
        icon: Database,
        color:
          'text-blue-500 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800',
      };
    }
    if (lower.includes('aws') || lower.includes('cloud')) {
      return {
        icon: Cloud,
        color:
          'text-amber-600 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800',
      };
    }
    if (
      lower.includes('docker') ||
      lower.includes('kubernetes') ||
      lower.includes('linux')
    ) {
      return {
        icon: Cpu,
        color:
          'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800',
      };
    }
    if (lower.includes('git'))
      return {
        icon: GitBranch,
        color:
          'text-orange-500 bg-orange-50 dark:bg-orange-950/40 border-orange-200 dark:border-orange-800',
      };
    if (lower.includes('qa') || lower.includes('test')) {
      return {
        icon: Shield,
        color:
          'text-blue-600 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800',
      };
    }
    return {
      icon: FileCode,
      color:
        'text-slate-600 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700',
    };
  };

  const { icon: Icon, color } = getIconAndColor(name);

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded border text-xs font-medium transition-colors ${color} ${className}`}
    >
      <Icon className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />
      {showLabel && <span>{name}</span>}
    </span>
  );
};

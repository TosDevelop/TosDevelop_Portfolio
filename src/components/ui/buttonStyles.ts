export const brandActionStyles =
  'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20 hover:brightness-110 hover:shadow-indigo-500/30 active:brightness-95';

type ButtonVariant = 'primary' | 'secondary' | 'icon';

export function buttonStyles(
  variant: ButtonVariant = 'primary',
  className = '',
) {
  const base =
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl text-sm font-semibold outline-none transition duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none';
  const variants = {
    primary: `${brandActionStyles} border border-transparent px-5 py-2.5`,
    secondary:
      'border border-slate-200 bg-white px-5 py-2.5 text-slate-700 shadow-sm hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-800 dark:hover:bg-slate-700',
    icon: 'h-11 min-w-11 shrink-0 border border-slate-200/80 bg-white/80 px-2.5 text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700',
  };
  return `${base} ${variants[variant]} ${className}`;
}

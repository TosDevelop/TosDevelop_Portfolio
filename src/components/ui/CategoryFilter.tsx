interface CategoryFilterProps<T extends string> {
  categories: readonly T[];
  value: T;
  onChange: (category: T) => void;
  labels: Partial<Record<T, string>>;
}

export function CategoryFilter<T extends string>({
  categories,
  value,
  onChange,
  labels,
}: CategoryFilterProps<T>) {
  return (
    <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 max-w-max border border-slate-200/60 dark:border-slate-700/60">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          aria-pressed={value === category}
          onClick={() => onChange(category)}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
            value === category
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          {labels[category] || category}
        </button>
      ))}
    </div>
  );
}

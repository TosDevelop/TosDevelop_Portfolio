import { useId, useState } from 'react';
import { useLanguage } from '@/providers/LanguageContext';

const PREVIEW_LENGTH = 100;
const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });

/** Keep cards compact while allowing the full description to be read. */
export function ExpandableDescription({
  text,
  className = 'text-xs',
}: {
  text: string;
  className?: string;
}) {
  const { t } = useLanguage();
  const id = useId();
  const [expanded, setExpanded] = useState(false);
  const characters = Array.from(
    segmenter.segment(text),
    ({ segment }) => segment,
  );
  const overflows = characters.length > PREVIEW_LENGTH;
  const preview = characters.slice(0, PREVIEW_LENGTH).join('').trimEnd();

  return (
    <div>
      <p
        id={id}
        className={`${className} text-slate-600 dark:text-slate-300 leading-relaxed`}
      >
        {overflows && !expanded ? `${preview}…` : text}
      </p>
      {overflows && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={id}
          onClick={() => setExpanded((value) => !value)}
          className="mt-2 rounded text-xs font-semibold text-blue-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:text-blue-400"
        >
          {expanded ? t.team.showLess : t.team.showMore}
        </button>
      )}
    </div>
  );
}

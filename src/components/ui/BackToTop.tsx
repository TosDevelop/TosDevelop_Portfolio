import { brandActionStyles } from '@/components/ui/buttonStyles';
import { ArrowUp } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';
import { useLanguage } from '@/providers/LanguageContext';

export function BackToTop() {
  const visible = useScrolled(320);
  const { t } = useLanguage();

  return (
    <button
      type="button"
      aria-label={t.backToTop}
      title={t.backToTop}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)')
            .matches
            ? 'instant'
            : 'smooth',
        })
      }
      className={`fixed bottom-6 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-transparent ${brandActionStyles} transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 sm:bottom-8 sm:right-8 motion-reduce:transition-none ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none invisible translate-y-3 opacity-0'}`}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}

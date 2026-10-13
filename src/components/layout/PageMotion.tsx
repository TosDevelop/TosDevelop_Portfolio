import { useEffect, useRef, type PropsWithChildren } from 'react';

/** Only explicitly marked sections participate; moving widgets keep their own animation. */
export function PageMotion({ children }: PropsWithChildren) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !('IntersectionObserver' in window)) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    const sections = Array.from(
      root.querySelectorAll<HTMLElement>('[data-reveal]'),
    );

    const configure = () => {
      observer?.disconnect();
      if (preference.matches) {
        sections.forEach((section) =>
          section.classList.remove('section-reveal'),
        );
        return;
      }
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            // Never hide or move a control while someone is using the keyboard.
            if (!entry.target.contains(document.activeElement)) {
              entry.target.classList.add('section-reveal');
            }
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0, rootMargin: '0px 0px -32px 0px' },
      );
      sections.forEach((section) => observer?.observe(section));
    };

    configure();
    preference.addEventListener('change', configure);
    return () => {
      observer?.disconnect();
      preference.removeEventListener('change', configure);
    };
  }, []);

  return (
    <div ref={rootRef} className="page-enter">
      {children}
    </div>
  );
}

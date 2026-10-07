import { PageLink } from '@/components/ui/PageLink';
import { NAVIGATION_LINKS, type Navigate } from '@/config/navigation';
import React from 'react';
import { useLanguage } from '@/providers/LanguageContext';
import { ArrowRight, Github, Linkedin, Send } from 'lucide-react';
import { BrandLogo } from '@/components/ui/BrandLogo';

interface FooterProps {
  onNavigate: Navigate;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-10 border-b border-slate-100 dark:border-slate-800/80">
          {/* Brand & Description */}
          <div className="max-w-md space-y-3">
            <BrandLogo compact className="items-center" />
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              {t.footer.tagline}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {t.footer.desc}
            </p>
          </div>

          {/* Navigation Links & Action */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            <nav className="flex flex-wrap gap-5 text-xs font-medium text-slate-600 dark:text-slate-300">
              {NAVIGATION_LINKS.filter((link) => link.id !== 'home').map(
                (link) => (
                  <PageLink
                    tab={link.id}
                    key={link.id}
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {t.nav[link.labelKey]}
                  </PageLink>
                ),
              )}
            </nav>

            <PageLink
              tab={'team'}
              onClick={() => onNavigate('team')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-400 transition-colors"
            >
              <span>{t.footer.exploreTeam}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </PageLink>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-500">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

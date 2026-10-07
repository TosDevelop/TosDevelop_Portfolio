import { PageLink } from '@/components/ui/PageLink';
import {
  NAVIGATION_LINKS,
  type AppTab,
  type Navigate,
} from '@/config/navigation';
import React, { useState } from 'react';
import { useLanguage } from '@/providers/LanguageContext';
import { useTheme } from '@/providers/ThemeContext';
import { Sun, Moon, ArrowUpRight, Menu, X } from 'lucide-react';
import { BrandLogo } from '@/components/ui/BrandLogo';
import cambodiaFlag from '@/assets/flags/kh.svg';
import englishFlag from '@/assets/flags/gb.svg';

interface NavbarProps {
  currentTab: AppTab;
  onNavigate: Navigate;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onNavigate }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = NAVIGATION_LINKS.filter((link) => link.id !== 'contact').map(
    (link) => ({ id: link.id, label: t.nav[link.labelKey] }),
  );

  const handleNavClick = (tabId: AppTab) => {
    onNavigate(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Zone */}
        <div className="flex items-center gap-3">
          <PageLink
            tab={'home'}
            onClick={() => handleNavClick('home')}
            className="focus:outline-none group text-left"
          >
            <BrandLogo compact className="items-center" />
          </PageLink>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <PageLink
                tab={link.id}
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-1 transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                )}
              </PageLink>
            );
          })}
        </nav>

        {/* Action Controls Zone */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={
              language === 'en' ? t.lang.switchToKhmer : t.lang.switchToEnglish
            }
            title={
              language === 'en' ? t.lang.switchToKhmer : t.lang.switchToEnglish
            }
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <img
              src={language === 'en' ? englishFlag : cambodiaFlag}
              alt=""
              width={24}
              height={18}
              className="h-[18px] w-6 shrink-0 rounded-[2px] object-cover"
            />
            <span className="hidden sm:inline">
              {language === 'en' ? 'EN' : 'ភាសាខ្មែរ'}
            </span>
          </button>

          {/* Theme Switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            title={
              theme === 'light' ? t.theme.switchToDark : t.theme.switchToLight
            }
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={
              theme === 'light' ? t.theme.switchToDark : t.theme.switchToLight
            }
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-slate-700" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          {/* Primary Action Button */}
          <PageLink
            tab={'contact'}
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-sm shadow-blue-500/20 whitespace-nowrap"
          >
            <span>{t.nav.connect}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </PageLink>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <PageLink
              tab={link.id}
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                currentTab === link.id
                  ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {link.label}
            </PageLink>
          ))}
          <PageLink
            tab={'contact'}
            onClick={() => handleNavClick('contact')}
            className="w-full mt-2 flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>{t.nav.connect}</span>
            <ArrowUpRight className="w-4 h-4" />
          </PageLink>
        </div>
      )}
    </header>
  );
};

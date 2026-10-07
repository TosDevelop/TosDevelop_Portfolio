import { brandActionStyles } from '@/components/ui/buttonStyles';
import { PageLink } from '@/components/ui/PageLink';
import { useScrolled } from '@/hooks/useScrolled';
import {
  NAVIGATION_LINKS,
  type AppTab,
  type Navigate,
} from '@/config/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/providers/LanguageContext';
import { useTheme } from '@/providers/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { BrandLogo } from '@/components/ui/BrandLogo';
import cambodiaFlag from '@/assets/flags/kh.svg';
import englishFlag from '@/assets/flags/gb.svg';

interface NavbarProps {
  currentTab: AppTab;
  onNavigate: Navigate;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onNavigate }) => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScrolled();

  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 1280px)');
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [mobileMenuOpen]);

  useEffect(() => setMobileMenuOpen(false), [currentTab]);

  const navLinks = NAVIGATION_LINKS.filter((link) => link.id !== 'contact').map(
    (link) => ({ id: link.id, label: t.nav[link.labelKey] }),
  );

  const handleNavClick = (tabId: AppTab) => {
    onNavigate(tabId);
    setMobileMenuOpen(false);
  };

  const controlStyle =
    'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-indigo-100 text-indigo-500 transition-colors hover:bg-indigo-50 hover:text-violet-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-indigo-900 dark:text-indigo-300 dark:hover:bg-indigo-950 dark:hover:text-violet-300';
  const contactStyle = `${brandActionStyles} min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500`;
  const languageSwitch = (
    <button
      type="button"
      onClick={() => setLanguage(language === 'en' ? 'km' : 'en')}
      aria-label={
        language === 'en' ? t.lang.switchToKhmer : t.lang.switchToEnglish
      }
      title={language === 'en' ? t.lang.switchToKhmer : t.lang.switchToEnglish}
      className={`${brandActionStyles} inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full px-4 text-xs font-bold outline-none transition duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900`}
    >
      <img
        src={language === 'en' ? englishFlag : cambodiaFlag}
        alt=""
        width={20}
        height={14}
        className="h-3.5 w-5 rounded-sm object-cover"
      />
      {language === 'en' ? 'EN' : 'KM'}
    </button>
  );

  return (
    <header
      className={`sticky top-3 z-50 mx-auto mt-3 w-[calc(100%-1.5rem)] max-w-[1440px] rounded-[2rem] border transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 sm:top-3 sm:mt-3 sm:w-[calc(100%-3rem)] sm:rounded-[3rem] motion-reduce:transition-none ${
        scrolled || mobileMenuOpen
          ? 'border-indigo-100 bg-slate-50/95 shadow-[0_12px_28px_-16px_rgba(15,23,42,0.25)] backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/95 dark:shadow-black/30'
          : 'border-transparent bg-transparent shadow-none'
      }`}
    >
      <div className="mx-auto px-3 sm:px-5 xl:px-7 min-h-18 gap-3 py-2 flex items-center justify-between">
        {/* Brand Zone */}
        <div className="flex shrink-0 items-center">
          <PageLink
            tab={'home'}
            onClick={() => handleNavClick('home')}
            className="shrink-0 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-blue-500 group text-left"
          >
            <BrandLogo compact className="items-center" />
          </PageLink>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main navigation"
          className="hidden xl:flex items-center justify-center gap-8 text-sm font-semibold"
        >
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <PageLink
                tab={link.id}
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative rounded-lg py-2.5 uppercase tracking-wide outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-300'
                }`}
              >
                {link.label}
              </PageLink>
            );
          })}
        </nav>

        {/* Action Controls Zone */}
        <div className="flex shrink-0 items-center gap-2 xl:gap-3 xl:border-l xl:border-slate-200 xl:pl-5 dark:xl:border-slate-700">
          {/* Theme Switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            title={
              theme === 'light' ? t.theme.switchToDark : t.theme.switchToLight
            }
            className={controlStyle}
            aria-label={
              theme === 'light' ? t.theme.switchToDark : t.theme.switchToLight
            }
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </button>

          <div className="hidden sm:block">{languageSwitch}</div>

          {/* Primary Action Button */}
          <PageLink
            tab={'contact'}
            onClick={() => handleNavClick('contact')}
            aria-current={currentTab === 'contact' ? 'page' : undefined}
            className={`${contactStyle} hidden lg:inline-flex`}
          >
            <span>{t.nav.connect}</span>
          </PageLink>

          {/* Mobile Menu Button */}
          <button
            type="button"
            ref={menuButtonRef}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className={`${controlStyle} xl:hidden`}
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
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="xl:hidden max-h-[calc(100dvh-8rem)] overflow-y-auto border-t border-slate-200 dark:border-slate-800 rounded-b-[2rem] px-4 py-4 sm:px-6 space-y-1.5"
        >
          <div className="pb-3 sm:hidden">{languageSwitch}</div>
          {navLinks.map((link) => (
            <PageLink
              tab={link.id}
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              aria-current={currentTab === link.id ? 'page' : undefined}
              className={`flex min-h-11 w-full items-center text-left px-4 py-3 rounded-xl text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors ${
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
            className={`${contactStyle} flex w-full mt-3`}
          >
            <span>{t.nav.connect}</span>
          </PageLink>
        </nav>
      )}
    </header>
  );
};

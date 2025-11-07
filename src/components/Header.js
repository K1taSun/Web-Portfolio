import React, { useState } from 'react';
import { useLanguage } from '../i18n';

const NAV_LINKS = {
  pl: [
    { id: 'home', label: 'Start' },
    { id: 'about', label: 'O mnie' },
    { id: 'skills', label: 'Umiejętności' },
    { id: 'projects', label: 'Projekty' },
    { id: 'contact', label: 'Kontakt' },
  ],
  en: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],
};

const MENU_LABELS = {
  pl: { open: 'Menu', close: 'Zamknij' },
  en: { open: 'Menu', close: 'Close' },
};

function scrollToAnchor(anchor) {
  const element = document.getElementById(anchor);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

const LanguageToggle = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  const handleSelect = (value) => {
    if (value !== language) {
      setLanguage(value);
    }
  };

  return (
    <div className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wide ${className}`}>
      <button
        type="button"
        onClick={() => handleSelect('pl')}
        className={`rounded px-2 py-1 transition-colors ${
          language === 'pl'
            ? 'bg-slate-900 text-white'
            : 'bg-transparent text-slate-600 hover:text-slate-900'
        }`}
        aria-pressed={language === 'pl'}
      >
        PL
      </button>
      <span className="text-slate-400">/</span>
      <button
        type="button"
        onClick={() => handleSelect('en')}
        className={`rounded px-2 py-1 transition-colors ${
          language === 'en'
            ? 'bg-slate-900 text-white'
            : 'bg-transparent text-slate-600 hover:text-slate-900'
        }`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();

  const handleNavigate = (id) => {
    scrollToAnchor(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#home" className="font-semibold tracking-tight text-slate-900">
          Nikita Parkovskyi
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {NAV_LINKS[language].map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigate(link.id)}
              className="hover:text-slate-900 focus:text-slate-900 focus:outline-none"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageToggle />
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? MENU_LABELS[language].close : MENU_LABELS[language].open}
        >
          {isMenuOpen ? MENU_LABELS[language].close : MENU_LABELS[language].open}
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white md:hidden">
          <div className="px-4 py-2">
            <LanguageToggle />
          </div>
          <nav className="flex flex-col px-4 pb-2 text-sm font-medium text-slate-700">
            {NAV_LINKS[language].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id)}
                className="py-2 text-left hover:text-slate-900 focus:text-slate-900 focus:outline-none"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
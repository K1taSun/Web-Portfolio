import React, { useState } from 'react';

const NAV_LINKS = [
  { id: 'home', label: 'Start' },
  { id: 'about', label: 'O mnie' },
  { id: 'skills', label: 'Umiejętności' },
  { id: 'projects', label: 'Projekty' },
  { id: 'contact', label: 'Kontakt' },
];

function scrollToAnchor(anchor) {
  const element = document.getElementById(anchor);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigate(link.id)}
              className="hover:text-slate-900 focus:text-slate-900 focus:outline-none"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? 'Zamknij' : 'Menu'}
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white md:hidden">
          <nav className="flex flex-col px-4 py-2 text-sm font-medium text-slate-700">
            {NAV_LINKS.map((link) => (
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
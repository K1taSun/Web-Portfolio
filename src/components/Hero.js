import React from 'react';
import { useLanguage } from '../i18n';

const content = {
  pl: {
    intro: 'Uczę się: Golang • C • Python',
    heading: 'Cześć! Jestem Nikita Parkovskyi',
    highlight: 'i stawiam pierwsze kroki jako programista backendu i systemów.',
    description:
      'Poznaję podstawy Go, C i Pythona: tworzę proste API, ćwiczę pracę z pamięcią w C i automatyzuję zadania w Pythonie. Każdy mały projekt traktuję jak okazję do nauki narzędzi i dobrych praktyk.',
    primaryCta: 'Zobacz projekty',
    secondaryCta: 'Nawiążmy kontakt',
  },
  en: {
    intro: 'Learning: Golang • C • Python',
    heading: 'Hi! I’m Nikita Parkovskyi',
    highlight: 'and I am starting my journey as a backend and systems developer.',
    description:
      'I am learning the basics of Go, C, and Python: building simple APIs, practicing memory management in C, and automating tasks with Python. Every small project is a chance to practice tools and good habits.',
    primaryCta: 'View projects',
    secondaryCta: 'Let’s connect',
  },
};

const Hero = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="home" className="bg-slate-900 text-slate-100">
      <div className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center gap-8 px-4 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">{t.intro}</p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          {t.heading}
          <span className="block text-sky-300">{t.highlight}</span>
        </h1>
        <p className="max-w-3xl text-lg text-slate-200 md:text-xl">{t.description}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            {t.primaryCta}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-slate-100 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-sky-300 hover:text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            {t.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { useLanguage } from '../i18n';

const content = {
  pl: {
    kicker: 'Kim jestem',
    heading: 'Zaczynam przygodę z programowaniem w Go, C++ i Pythonie.',
    intro:
      'Każdego dnia uczę się czegoś nowego: od zarządzania pamięcią i klasami w C++, przez budowanie małych serwisów w Go, po automatyzację w Pythonie. Moim celem jest zdobywanie praktyki krok po kroku i dzielenie się tym, czego się nauczyłem.',
    highlights: [
      {
        title: 'Podstawy backendu w Go',
        description:
          'Uczę się pisać proste serwisy HTTP, obsługiwać zapytania i struktury danych. Ćwiczę testy jednostkowe, by zrozumieć, jak utrzymywać kod.',
      },
      {
        title: 'Automatyzacje w Pythonie',
        description:
          'Buduję małe narzędzia CLI do przetwarzania plików, ćwiczę pracę z API i bibliotekami standardowymi oraz uczę się dobrej organizacji projektu.',
      },
      {
        title: 'Systemowe ABC w C++',
        description:
          'Poznaję wskaźniki, referencje, zarządzanie pamięcią i programowanie obiektowe. Piszę proste moduły, żeby zrozumieć niskopoziomowe mechanizmy.',
      },
    ],
    learningTitle: 'Jak się uczę',
    learningSteps: [
      'Regularnie rozwiązuję zadania algorytmiczne i utrwalam podstawy struktur danych.',
      'Dokumentuję wnioski z każdej próby lub błędu, żeby szybciej wracać do trudniejszych zagadnień.',
      'Szukam prostych projektów open source, gdzie mogę pomóc i uczyć się pracy zespołowej.',
    ],
  },
  en: {
    kicker: 'About me',
    heading: 'I am just starting to code in Go, C++, and Python.',
    intro:
      'Every day I learn something new: memory management and OOP in C++, building small services in Go, or automating tasks with Python. My goal is to gain hands-on practice step by step and share what I discover.',
    highlights: [
      {
        title: 'Go backend basics',
        description:
          'I am learning to build simple HTTP services, handle requests, and work with data structures. Writing unit tests helps me understand how to keep code maintainable.',
      },
      {
        title: 'Python automation',
        description:
          'I create small CLI tools to process files, practice working with APIs and the standard library, and learn how to structure a project clearly.',
      },
      {
        title: 'Systems fundamentals in C++',
        description:
          'I explore pointers, references, memory management, and object-oriented programming. I write small terminal modules to understand low-level mechanisms.',
      },
    ],
    learningTitle: 'How I learn',
    learningSteps: [
      'I regularly solve algorithmic exercises to refresh data-structure basics.',
      'I note down takeaways from each experiment or bug so I can revisit tricky topics faster.',
      'I look for beginner-friendly open source tasks to learn teamwork and feedback.',
    ],
  },
};

const About = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{t.kicker}</p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{t.heading}</h2>
          <p className="text-lg leading-relaxed text-slate-600">{t.intro}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.highlights.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50/60 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-900 px-6 py-8 text-slate-100">
          <h3 className="text-lg font-semibold">{t.learningTitle}</h3>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-100/80">
            {t.learningSteps.map((step) => (
              <li key={step} className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-sky-300" aria-hidden="true" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
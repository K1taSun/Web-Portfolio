import React from 'react';

const highlights = [
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
    title: 'Systemowe ABC w C',
    description:
      'Poznaję wskaźniki, zarządzanie pamięcią i kompilację. Piszę proste moduły działające w terminalu, żeby zrozumieć niskopoziomowe mechanizmy.',
  },
];

const learningSteps = [
  'Regularnie rozwiązuję zadania algorytmiczne i utrwalam podstawy struktur danych.',
  'Dokumentuję wnioski z każdej próby lub błędu, żeby szybciej wracać do trudniejszych zagadnień.',
  'Szukam prostych projektów open source, gdzie mogę pomóc i uczyć się pracy zespołowej.',
];

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Kim jestem</p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Zaczynam przygodę z programowaniem w Go, C i Pythonie.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Każdego dnia uczę się czegoś nowego: od zarządzania pamięcią w C, przez budowanie małych serwisów w Go, po
            automatyzację w Pythonie. Moim celem jest zdobywanie praktyki krok po kroku i dzielenie się tym, czego się
            nauczyłem.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50/60 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-900 px-6 py-8 text-slate-100">
          <h3 className="text-lg font-semibold">Jak się uczę</h3>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-100/80">
            {learningSteps.map((step) => (
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
import React from 'react';
import { useLanguage } from '../i18n';

const content = {
  pl: {
    kicker: 'Czego się uczę',
    heading: 'Utrwalam podstawy programowania w Go, Pythonie i C.',
    description:
      'Zamiast wielkich projektów stawiam na systematyczne ćwiczenia: małe skrypty, powtarzanie wzorców i analizę błędów. Z czasem chcę łączyć te umiejętności w większych zadaniach backendowych.',
    groups: [
      {
        title: 'Go — uczę się backendu',
        skills: [
          'proste API z net/http i routerami',
          'struktury danych, moduły i testy',
          'podstawy współbieżności (goroutines, channels)',
          'praca z JSON i plikami konfiguracyjnymi',
          'deploy na lokalne serwery i render.com',
        ],
      },
      {
        title: 'Python — automaty i narzędzia',
        skills: [
          'skrypty CLI do codziennych zadań',
          'requests, argparse, pathlib',
          'pierwsze projekty z Flask/FastAPI',
          'testy z pytest i logowanie zdarzeń',
          'podstawy analizy danych (pandas, matplotlib)',
        ],
      },
      {
        title: 'C — fundamenty systemowe',
        skills: [
          'operacje na wskaźnikach i tablicach',
          'modułowe budowanie aplikacji w terminalu',
          'makefile i gcc, debugowanie w gdb',
          'proste struktury danych w pamięci',
          'ćwiczenia z pisania bibliotek statycznych',
        ],
      },
      {
        title: 'Narzędzia i nawyki',
        skills: [
          'git, GitHub i pull requesty do nauki',
          'planowanie pracy w issue i checklistach',
          'notatki z kodu i dokumentacja README',
          'praca w VS Code, obsługa linuksa i terminala',
          'szukanie feedbacku i code review od społeczności',
        ],
      },
    ],
    note:
      'Szukam mentorskiego feedbacku i zadań, które pozwolą mi rosnąć. Dokumentuję proces w repozytoriach, opisuję napotkane problemy i sprawdzam, jakie nawyki pomagają utrzymać regularność nauki.',
  },
  en: {
    kicker: 'What I am learning',
    heading: 'I am strengthening the basics of Go, Python, and C.',
    description:
      'Instead of huge projects I focus on steady practice: small scripts, repeating patterns, and reviewing mistakes. Step by step I want to combine these skills into larger backend tasks.',
    groups: [
      {
        title: 'Go — learning backend skills',
        skills: [
          'simple APIs with net/http and routers',
          'data structures, modules, and tests',
          'intro to concurrency (goroutines, channels)',
          'working with JSON and config files',
          'deploying to local servers and render.com',
        ],
      },
      {
        title: 'Python — automation and tooling',
        skills: [
          'CLI scripts for everyday tasks',
          'requests, argparse, pathlib',
          'first steps with Flask/FastAPI',
          'pytest basics and event logging',
          'intro to data analysis (pandas, matplotlib)',
        ],
      },
      {
        title: 'C — systems fundamentals',
        skills: [
          'pointer and array exercises',
          'modular terminal applications',
          'makefile and gcc, debugging with gdb',
          'simple in-memory data structures',
          'practice building static libraries',
        ],
      },
      {
        title: 'Tools and habits',
        skills: [
          'git, GitHub, and practice pull requests',
          'planning work with issues and checklists',
          'code notes and README documentation',
          'working in VS Code, Linux, and the terminal',
          'seeking feedback and code review from the community',
        ],
      },
    ],
    note:
      'I look for mentoring feedback and tasks that help me grow. I document my process in repos, describe problems I encounter, and check which habits keep my learning consistent.',
  },
};

const Skills = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="skills" className="bg-slate-100">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{t.kicker}</p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{t.heading}</h2>
          <p className="text-base leading-relaxed text-slate-600">{t.description}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {t.groups.map((group) => (
            <div key={group.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" aria-hidden="true" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-sky-100 bg-sky-50 p-6 text-sm leading-relaxed text-slate-700">
          <p>{t.note}</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
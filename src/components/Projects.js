import React from 'react';
import { useLanguage } from '../i18n';

const content = {
  pl: {
    kicker: 'Projekty',
    heading: 'Małe projekty, na których uczę się kodować.',
    description:
      'Te repozytoria pokazują, jak krok po kroku poznaję nowe technologie. Zapisuję najważniejsze lekcje i zostawiam komentarze, żeby inni mogli zobaczyć mój sposób myślenia.',
    projects: [
      {
        name: 'Task Project Manager',
        summary:
          'Prosty menedżer zadań tworzony, by ćwiczyć Go i pracę z REST API. Dane przechowywane są w plikach JSON, a interfejs napisałem w czystym JS.',
        stack: ['Golang', 'HTML', 'CSS', 'JavaScript', 'WebSocket', 'JSON (Data Storage)'],
        contribution:
          'Samodzielnie zbudowałem CRUD w Go, dzięki czemu lepiej rozumiem routing i walidację danych. WebSocket dodałem jako eksperyment z komunikacją w czasie rzeczywistym.',
        link: 'https://github.com/K1taSun/Task_Project_Manager',
      },
      {
        name: 'Buffer – macOS Clipboard Manager',
        summary:
          'Eksperymentalny menedżer historii schowka dla macOS. Projekt powstał, aby poznać podstawy SwiftUI i interakcję z systemem.',
        stack: ['Swift', 'SwiftUI', 'AppKit', 'macOS', 'UserDefaults'],
        contribution:
          'Skupiłem się na podstawach: przechwytywaniu danych ze schowka, prostym UI i zapisie historii. Projekt rozwijam małymi krokami na potrzeby nauki.',
        link: 'https://github.com/K1taSun/Buffer_MacOS_Project',
      },
    ],
    button: 'Kod na GitHubie',
    updated: 'ostatnia aktualizacja: 2025',
  },
  en: {
    kicker: 'Projects',
    heading: 'Small projects that help me learn to code.',
    description:
      'These repositories show how I explore new technologies step by step. I note the key lessons and leave comments so others can follow my thinking process.',
    projects: [
      {
        name: 'Task Project Manager',
        summary:
          'A simple task manager built to practice Go and REST APIs. Data is stored in JSON files and the interface is plain JavaScript.',
        stack: ['Golang', 'HTML', 'CSS', 'JavaScript', 'WebSocket', 'JSON (Data Storage)'],
        contribution:
          'Building the CRUD in Go helped me understand routing and validation. I added WebSocket support as an experiment with real-time updates.',
        link: 'https://github.com/K1taSun/Task_Project_Manager',
      },
      {
        name: 'Buffer – macOS Clipboard Manager',
        summary:
          'An experimental clipboard history manager for macOS. I built it to learn SwiftUI basics and how to interact with the system.',
        stack: ['Swift', 'SwiftUI', 'AppKit', 'macOS', 'UserDefaults'],
        contribution:
          'I focused on the fundamentals: capturing clipboard data, keeping the UI simple, and saving history. I keep iterating on it as a learning exercise.',
        link: 'https://github.com/K1taSun/Buffer_MacOS_Project',
      },
    ],
    button: 'Code on GitHub',
    updated: 'last update: 2025',
  },
};

const Projects = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{t.kicker}</p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{t.heading}</h2>
          <p className="text-base leading-relaxed text-slate-600">{t.description}</p>
        </div>

        <div className="mt-10 space-y-6">
          {t.projects.map((project) => (
            <article key={project.name} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-3 md:max-w-3xl">
                  <h3 className="text-xl font-semibold text-slate-900">{project.name}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{project.summary}</p>
                  <p className="text-sm leading-relaxed text-slate-700">
                    <span className="font-semibold text-slate-900">
                      {language === 'pl' ? 'Czego się nauczyłem:' : 'What I learned:'}
                    </span>{' '}
                    {project.contribution}
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                    {project.stack.map((item) => (
                      <li key={item} className="rounded-full border border-slate-300 px-3 py-1">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-start gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-md bg-sky-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-900 hover:bg-sky-300"
                  >
                    {t.button}
                  </a>
                  <span className="text-[11px] uppercase tracking-widest text-slate-400">
                    {t.updated}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';

const social = [
  { label: 'GitHub', url: 'https://github.com/K1taSun' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nikita-parkovskyi-37335b368' },
  { label: 'Email', url: 'mailto:nikitaparkovskyi@gmail.com' },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">Kontakt</p>
          <h2 className="text-3xl font-semibold text-slate-100 sm:text-4xl">
            Porozmawiajmy o zadaniach dla początkującego programisty.
          </h2>
          <p className="text-base leading-relaxed text-slate-200/80">
            Szukam pierwszych zleceń i okazji do współpracy, żeby pod okiem bardziej doświadczonych osób rozwijać się w Go,
            C i Pythonie. Chętnie podejmę się prostych zadań backendowych lub automatyzacji i przyjmę każdą porcję feedbacku.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-300">Napisz maila</h3>
            <a
              href="mailto:nikitaparkovskyi@gmail.com"
              className="mt-3 block text-lg font-semibold text-slate-100 hover:text-sky-300"
            >
              nikitaparkovskyi@gmail.com
            </a>
            <p className="mt-2 text-sm text-slate-400">Napisz, z jakim zadaniem mogę spróbować się zmierzyć — odpiszę możliwie szybko.</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-300">Jestem z Krakowa</h3>
            <p className="mt-3 text-lg font-semibold text-slate-100">Chętnie uczę się zdalnie</p>
            <p className="mt-2 text-sm text-slate-400">Możemy przejść przez kod na callu, pare programować albo umówić się na mały projekt.</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-300">Znajdź mnie</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {social.map((item) => (
                <li key={item.label}>
                  <a href={item.url} target="_blank" rel="noreferrer" className="hover:text-sky-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-950/60 p-6 text-sm text-slate-300">
          <p>
            Zamiast formularza zostawiam bezpośredni kontakt. Jeżeli masz propozycję zadania, code review albo chcesz po prostu
            podpowiedzieć, czego się uczyć – napisz. Ustalimy wygodny sposób współpracy i zakres nauki.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
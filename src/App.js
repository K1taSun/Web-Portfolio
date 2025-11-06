import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="pt-20" id="top">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-slate-900 text-slate-200 py-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-3 px-4 text-sm md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Nikita Parkovskyi. Uczę się programować w Go, C i Pythonie.</p>
          <a
            href="mailto:nikitaparkovskyi@gmail.com"
            className="text-sky-300 hover:text-sky-200 transition-colors"
          >
            Say hello: nikitaparkovskyi@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
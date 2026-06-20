import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { ParticlesBackground } from './components/ParticlesBackground';
import { useMouseGlow } from './hooks/useMouseGlow';
import { useScrollProgress } from './hooks/useScrollProgress';

export const App = () => {
  useMouseGlow();
  const progress = useScrollProgress();

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <ParticlesBackground />
      <div className="mouse-glow" />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="py-4 text-center text-soft">© {new Date().getFullYear()} Islena Polo · Portfolio React + TypeScript</footer>
    </>
  );
};

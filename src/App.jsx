import About from './components/About';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import { Analytics } from "@vercel/analytics/react";
import { useContext } from 'react';
import { LanguageContext } from './context/LanguageContext';

const App = () => {
  const { language } = useContext(LanguageContext); // Obter idioma atual

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen relative">
      <div className="fixed top-0 left-0 w-full h-full -z-10"></div>
      <div className="absolute inset-0 -z-10 min-h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
        <Analytics />
      </div>
    </div>
  );
}

export default App;

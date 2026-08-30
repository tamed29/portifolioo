import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import FloatingChat from './components/FloatingChat';

function App() {
  return (
    <div className="min-h-screen bg-background text-textBody selection:bg-primary/30 selection:text-textHeading">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}

export default App;

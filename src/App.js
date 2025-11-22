import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Hero />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
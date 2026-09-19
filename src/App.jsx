import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/hero/Hero";
import { Skills } from "./components/skills/Skills";
import { About } from "./components/about/About";
import { Projects } from "./components/projects/Projects";
import { Experience } from "./components/experience/Experience";
import { Education } from "./components/education/Education";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/layout/Footer";

export const App = () => {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

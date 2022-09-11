import { AboutMe } from "./components/AboutMe";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:p-0">
      <Hero />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

import { AboutMe } from "./components/AboutMe";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from './components/Contact';
import { Footer } from "./Footer";

export default function App() {
  return (
    <div>
      <Hero />
      <main className="max-w-7xl mx-auto px-4 md:p-0">
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

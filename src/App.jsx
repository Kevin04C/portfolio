import { AboutMe } from "./components/AboutMe";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Hero />
      <main className="container mx-auto mt-10 my-24">
        <AboutMe />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

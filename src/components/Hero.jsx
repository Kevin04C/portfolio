import Typewriter from "typewriter-effect";
import ImageProgramming from "../assets/ImageProgramming.svg";
import { Nav } from "./Nav";

export const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-0 flex flex-col h-screen">
      <Nav />
      <div className="md:flex md:items-center mb-32 md:gap-10 flex-grow">
        <div className="basis-2/4">
          <p className="mb-2 font-semibold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
            ¡Hola! yo soy
          </p>
          <h2 className="text-slate-900 font-black text-7xl sm:text-8xl mb-5 md:mb-10 lg:text-9xl">
            Kevin Céspedes
          </h2>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(500)
                .typeString("Un desarrollador WEB ")
                .pauseFor(300)
                .typeString("<strong>FRONT-END</strong> 💻.")
                .pauseFor(1000)
                .start();
            }}
            options={{
              loop: true,
              autoStart: true,
              wrapperClassName: "text-slate-500 text-xl md:text-2xl",
            }}
          />
        </div>
        <div className="basis-2/4 mt-10">
          <img
            src={ImageProgramming}
            alt="person programming"
            className="[max-width:90%] block mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

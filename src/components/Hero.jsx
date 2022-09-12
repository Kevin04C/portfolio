import Typewriter from "typewriter-effect";
import ImageProgramming from "../assets/ImageProgramming.svg";
import { Nav } from "./Nav";

export const Hero = () => {
  return (
    <header className="max-w-7xl mx-auto px-4 md:px-0 h-screen">
      <Nav />
      <div className="md:flex md:items:center md:gap-10 mt-10">
        <div className="basis-2/4 flex flex-col justify-center flex-shrink">
          <p className="mb-2 font-semibold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
            ¡Hola! yo soy
          </p>
          <h2 className="text-slate-900 font-black text-7xl sm:text-9xl md:text-8xl pb-5 mb-5 lg:text-9xl">
            Kevin <br />
            Céspedes
          </h2>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2500)
                .typeString("Un desarrollador WEB ")
                .pauseFor(300)
                .typeString("<strong>FRONT-END</strong> 💻.")
                .pauseFor(2000)
                .start();
            }}
            options={{
              loop: true,
              autoStart: true,
              wrapperClassName: "text-slate-500 text-xl md:text-2xl",
            }}
          />
        </div>
        <div className="basis-2/4 flex-shrink">
          <img
            src={ImageProgramming}
            alt="person programming"
            className="w-80 md:w-full block mx-auto mt-10"
          />
        </div>
      </div>
    </header>
  );
};

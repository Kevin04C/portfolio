import Typewriter from "typewriter-effect";
import ImageProgramming from "../assets/ImageProgramming.svg";
import { Nav } from "./Nav";

export const Hero = () => {
  return (
    <header className="container mx-auto h-screen">
      <Nav />
      <div className="sm:flex md:items:center mt-14">
        <div className="basis-2/4 flex flex-col justify-center">
          <p className="mb-2 font-semibold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
            ¡Hola! yo soy
          </p>
          <h2 className="text-slate-900 font-black text-6xl sm:text-6xl md:text-8xl mb-5">
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
        <div className="basis-2/4">
          <img
            src={ImageProgramming}
            alt="person programming"
            className="sm:w-4/5 block mx-auto mt-10"
          />
        </div>
      </div>
    </header>
  );
};

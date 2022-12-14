import KevinImage from "../assets/kevin.jpg";

export const AboutMe = () => {
  return (
    <section
      className="sm:mt-56 lg:my-28 flex flex-col-reverse md:flex-row md:items-center md:gap-10"
      id="sobremi"
    >
      <picture className="md:grow-0 md:basis-1/2">
        <img
          src={KevinImage}
          alt="kevin dev"
          className="rounded-full max-w-[280px] sm:max-w-xs mx-auto shadow-xl mt-5"
        />
      </picture>

      <div className="md:grow md:basis-2/3">
        <h3 className="font-extrabold text-5xl text-slate-900 mb-10">
          Sobre mi
        </h3>
        <p className="text-slate-600 text-xl md:text-2xl">
          ¡Hola! Soy <span className="font-bold">Kevin Céspedes</span>,
          estudiante de la carrera de Ing. de Sistemas, me
          apasiona el desarrollo web, lo que más disfruto al momento de
          programar es ver como mis ideas se convierten realidad, pasar del
          código a hacer grandes cosas es maravilloso, además disfruto tomar
          café mientras codeo 💻☕.
          <span className="block font-bold mt-4">
            "SI PUEDES IMAGINARLO PUEDES PROGRAMARLO"
          </span>
          <span className="text-lg text-slate-500">- Alejandro Taboada</span>
        </p>
      </div>
    </section>
  );
};

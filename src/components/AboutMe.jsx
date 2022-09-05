import KevinImage from "../assets/kevin.jpg";

export const AboutMe = () => {
  return (
    <section
      className="mb-48 flex flex-col-reverse md:flex-row md:items-center"
      id="sobremi"
    >
      <picture>
        <img
          src={KevinImage}
          alt="kevin dev"
          className="rounded-full w-3/4 md:w-2/4 mx-auto shadow-xl mt-5"
        />
      </picture>

      <div>
        <h3 className="font-bold text-5xl text-slate-900 mb-10">Sobre Mi</h3>
        <p className="text-slate-600 text-xl md:text-2xl">
          ¡Hola! soy <span className="font-bold">Kevin Cespedes (2004)</span>,
          actualmente estoy estudiando la carrera de Ing. Sistemas, pero me
          apasiona el desarrollo web, lo que más disfruto al momento de
          programar es ver como mis ideas se pasan a la realiad, pasar del código a
          hacer grandes cosas es maravilloso, además disfruto tomar café
          mientras codeo 💻☕.
          <span className="block font-bold mt-4">
            "SI PUEDES IMAGINARLO PUEDES PROGRAMARLO"
          </span>
          <span className="text-lg text-slate-500">- Alejandro Taboada</span>
        </p>
      </div>
    </section>
  );
};

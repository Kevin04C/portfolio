import { useMemo } from "react";
import { Technologie } from "./Technologie";

export const CardProject = ({
  name,
  description,
  image,
  technologies = [],
  project,
  github,
}) => {
  const newDescription = useMemo(
    () =>
      description.length > 117
        ? `${description.slice(0, 115)}...`
        : description,
    [description]
  );

  return (
    <div className="mx-auto place-self-center mb-10 w-80 bg-slate-800 text-slate-100 rounded-lg overflow-hidden shadow-xl shadow-slate-300">
      <img
        src={image}
        alt="algo"
        className="w-full h-40 object-cover hover:scale-110 cursor-pointer transition-transform"
      />

      <div className="p-3">
        <div className="flex gap-2 my-2 flex-wrap">
          {technologies.map((technologie) => (
            <Technologie key={technologie} name={technologie} />
          ))}
        </div>
        <h2 className="font-semibold text-xl mb-2 text-slate-100">{name}</h2>
        <p className="text-slate-400 mb-3">{newDescription}</p>

        <div className="flex justify-between">
          <a
            href={project}
            target="__black"
            className="bg-slate-900 hover:scale-105 transition-transform cursor-pointer py-1 px-2 rounded-lg text-bas font-semibold"
          >
            Ver Proyecto
          </a>
          <a
            href={github}
            target="__blank"
            className="bg-slate-900 hover:scale-105 transition-transform cursor-pointer py-1 px-2 rounded-lg text-bas font-semibold"
          >
            Ver Código
          </a>
        </div>
      </div>
    </div>
  );
};

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
  // shadow-xl shadow-slate-300
  // bg-slate-800

  return (
    <div className="mx-auto place-self-center mb-10 w-80 bg-slate-800 text-slate-800 shadow-xl shadow-slate-300 rounded-md overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover hover:scale-110 transition-transform"
      />

      <div className="p-3">
        <div className="flex gap-2 my-2 flex-wrap">
          {technologies.map((technologie) => (
            <Technologie key={technologie} name={technologie} />
          ))}
        </div>
        <h2 className="text-xl mb-2 text-slate-200">{name}</h2>
        <p className="text-slate-400 mb-3">{description}</p>

        <div className="flex justify-between items-center">
          <a
            href={project}
            target="__black"
            className="hover:scale-110 hover:opacity-80 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-14 h-14" viewBox="0 0 76 76" version="1.1" baseProfile="full" enable-background="new 0 0 76.00 76.00" xmlSpace="preserve">
            <path fill="#ffffff" fillopacity="1" strokeWidth="0.2" strokeLinejoin="round" d="M 30.0833,20.5833L 50.6665,36.021L 50.6665,37.2084L 30.0833,52.25L 30.0833,20.5833 Z M 26.9166,57L 28.5,57L 28.5,63.3333L 31.6666,63.3333L 31.6666,64.9167L 28.5,64.9167L 26.9166,64.9167L 26.9166,57 Z M 33.25,64.9167L 33.25,57L 34.8333,57L 34.8333,64.9167L 33.25,64.9167 Z M 36.8124,57L 38.7916,57L 40.375,62.2779L 41.9583,57L 43.9375,57L 41.1666,64.9167L 39.5833,64.9167L 36.8124,57 Z M 45.9166,57L 47.5,57L 50.6666,57L 50.6666,58.5833L 47.5,58.5833L 47.5,60.1667L 50.6667,60.1667L 50.6667,61.75L 47.5,61.75L 47.5,63.3333L 50.6667,63.3333L 50.6667,64.9167L 47.5,64.9167L 45.9166,64.9167L 45.9166,57 Z "/>
          </svg>
          </a>
          <a
            href={github}
            target="__blank"
            className="hover:scale-110 hover:opacity-80 transition-transform"
            // bg-slate-900 text-white hover:scale-105 transition-transform cursor-pointer py-1 px-2 rounded-lg text-bas font-semibold
          >
            <svg
              className="w-8 h-8 fill-slate-50"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

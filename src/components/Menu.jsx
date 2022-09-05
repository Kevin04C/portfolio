import React, { useContext, useEffect, useMemo } from "react";
import { AppContext } from "../context/AppContext";

export const Menu = () => {
  const { visibleNav, setVisibleNav } = useContext(AppContext);

  const showNav = useMemo(() => (visibleNav ? "" : "hidden"), [visibleNav]);
  const matches =
    (() => matchMedia("(max-width: 768px)").matches, [visibleNav]);

  const handleClickLink = () => {
    if (matches) setVisibleNav(false);
  };

  useEffect(() => {
    if (visibleNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [visibleNav]);

  return (
    <ul
      className={`${showNav} absolute inset-0 backdrop-blur-2xl flex flex-col justify-center md:[position:static] md:flex gap-5 font-bold md:flex-row z-10 `}
    >
      <li className="hover:text-blue-600 text-2xl font-extrabold md:text-base md:font-semibold rounded-md p-2 transition- text-center md:text-left">
        <a href="#incio" onClick={handleClickLink}>
          INICIO
        </a>
      </li>
      <li className="hover:text-blue-600 text-2xl font-extrabold md:text-base md:font-semibold rounded-md p-2 transition- text-center md:text-left">
        <a href="#sobremi" onClick={handleClickLink}>
          SOBRE MI
        </a>
      </li>
      <li className="hover:text-blue-600 text-2xl font-extrabold md:text-base md:font-semibold rounded-md p-2 transition- text-center md:text-left">
        <a href="#skills" onClick={handleClickLink}>
          SKILLS
        </a>
      </li>
      <li className="hover:text-blue-600 text-2xl font-extrabold md:text-base md:font-semibold rounded-md p-2 transition- text-center md:text-left">
        <a href="#proyectos" onClick={handleClickLink}>
          PROYECTOS
        </a>
      </li>
    </ul>
  );
};

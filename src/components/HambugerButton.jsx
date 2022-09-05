import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const HambugerButton = () => {
  const { visibleNav, setVisibleNav } = useContext(AppContext);

  const handleClick = () => {
    setVisibleNav(!visibleNav);
  };

  return (
    <div
      className="block md:[display:none] px-2 bg-slate-900 rounded relative z-20 cursor-pointer"
      onClick={handleClick}
    >
      {
        visibleNav 
        ? <i className="fa-solid fa-xmark md:hidden text-2xl text-white"></i>
        : <i className="fa-solid fa-bars md:hidden text-2xl text-white"></i>
      }
    </div>
  );
};

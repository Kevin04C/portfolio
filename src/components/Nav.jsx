import { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";
import { HambugerButton } from "./HambugerButton";
import { Menu } from "./Menu";

export const Nav = () => {
  const { visibleNav, setVisibleNav } = useContext(AppContext);

  const matches = useMemo(
    () => matchMedia("(max-width: 768px)").matches,
    [visibleNav]
  );

  return (
    <nav className="mb-8 md:-mb-16">
      <div className="mx-auto flex justify-between items-center py-3">
        <h1 className="text-xl">
          <span className="font-black text-blue-500">{"<"}</span>
          OrealyDev
          <span className="font-black text-blue-500">{"/>"}</span>
        </h1>

        <Menu />
        <HambugerButton />
      </div>
    </nav>
  );
};

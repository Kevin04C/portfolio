import { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";
import { HambugerButton } from "./HambugerButton";
import { Menu } from "./Menu";

export const Nav = () => {
  const { visibleNav, changeVisibleNav } = useContext(AppContext);

  const showNav = useMemo(() => (visibleNav ? "" : "hidden"), [visibleNav]);

  return (
    <nav>
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

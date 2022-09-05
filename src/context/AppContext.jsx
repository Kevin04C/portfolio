import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [visibleNav, setVisibleNav] = useState(false);

  return (
    <AppContext.Provider
      value={{
        visibleNav,
        setVisibleNav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type GlobalContextType = {
  foundChars: [{ charName: string; isFound: boolean }];
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [foundChars, setFoundChars] = useState([]);

  return (
    <GlobalContext.Provider value={{ foundChars, setFoundChars }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

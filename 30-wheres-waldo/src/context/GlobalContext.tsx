"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Character = {
  charName: string;
  isFound: boolean;
};

type GlobalContextType = {
  foundChars: Character[];
  isGameOver: boolean;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setFoundChars: React.Dispatch<React.SetStateAction<Character[]>>;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [foundChars, setFoundChars] = useState<Character[]>([]);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [time, setTime] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        time,
        setTime,
        foundChars,
        setFoundChars,
        isGameOver,
        setIsGameOver,
      }}
    >
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

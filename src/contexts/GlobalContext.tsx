import React, { createContext, useContext, useState } from "react";
import type { CartItem } from "../types/CartItem";

type GlobalContextType = {
  cart: Record<string, CartItem>;
  setCart: React.Dispatch<React.SetStateAction<Record<string, CartItem>>>;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Record<string, CartItem>>({});

  return (
    <GlobalContext.Provider value={{ cart, setCart }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};

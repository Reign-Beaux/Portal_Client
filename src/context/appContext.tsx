import { Context, FC, ReactNode, createContext, useContext, useState } from "react";

type ContextProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  themeSelected: string;
  setThemeSelected: Function;
};

const ContextEmptyState: ContextProps = {
  themeSelected: "",
  setThemeSelected: () => {},
};

const AppContext: Context<ContextProps> = createContext(ContextEmptyState);

export const AppProvider: FC<ContextProviderProps> = ({ children }) => {
  const [themeSelected, setThemeSelected] = useState<string>("");

  return (
    <AppContext.Provider value={{ themeSelected, setThemeSelected }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

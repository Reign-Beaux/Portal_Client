import { Context, FC, ReactNode, createContext, useContext, useState } from "react";

type ContextProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  themeSelected: string;
  setThemeSelected: Function;
  isDarkTheme: boolean;
  setIsDarkTheme: Function;
};

const ContextEmptyState: ContextProps = {
  themeSelected: "",
  setThemeSelected: () => {},
  isDarkTheme: false,
  setIsDarkTheme: () => {},
};

const AppContext: Context<ContextProps> = createContext(ContextEmptyState);

export const AppProvider: FC<ContextProviderProps> = ({ children }) => {
  const [themeSelected, setThemeSelected] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem("isDarkTheme") === "true");

  const changeTheme = (value: boolean) => {
    localStorage.setItem("isDarkTheme", value.toString());
    setIsDarkTheme(value);
  };

  return (
    <AppContext.Provider
      value={{ themeSelected, setThemeSelected, isDarkTheme, setIsDarkTheme: changeTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

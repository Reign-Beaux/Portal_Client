import { Context, FC, ReactNode, createContext, useContext, useState } from "react";
import { number } from "react-i18next/icu.macro";

type ContextProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  themeSelected: string;
  setThemeSelected: Function;
  idTheme: number;
  setIdTheme: Function;
  isDarkTheme: boolean;
  setIsDarkTheme: Function;
};

const ContextEmptyState: ContextProps = {
  themeSelected: "",
  setThemeSelected: () => {},
  idTheme: 0,
  setIdTheme: () => {},
  isDarkTheme: false,
  setIsDarkTheme: () => {},
};

const AppContext: Context<ContextProps> = createContext(ContextEmptyState);

export const AppProvider: FC<ContextProviderProps> = ({ children }) => {
  const [themeSelected, setThemeSelected] = useState("");
  const [idTheme, setIdTheme] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem("isDarkTheme") === "true");

  const changeTheme = (value: boolean) => {
    localStorage.setItem("isDarkTheme", value.toString());
    setIsDarkTheme(value);
  };

  return (
    <AppContext.Provider
      value={{
        themeSelected,
        setThemeSelected,
        isDarkTheme,
        idTheme,
        setIdTheme,
        setIsDarkTheme: changeTheme,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

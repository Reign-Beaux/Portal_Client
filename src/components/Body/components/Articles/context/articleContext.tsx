import { Context, FC, ReactNode, createContext, useContext, useState } from "react";

type ContextProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  isOpenDialog: boolean;
  setIsOpenDialog: Function;
};

const ContextEmptyState: ContextProps = {
  isOpenDialog: false,
  setIsOpenDialog: () => {},
};

const ArticleContext: Context<ContextProps> = createContext(ContextEmptyState);

export const ArticleProvider: FC<ContextProviderProps> = ({ children }) => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  return (
    <ArticleContext.Provider
      value={{
        isOpenDialog,
        setIsOpenDialog,
      }}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticleContext = () => {
  const context = useContext(ArticleContext);

  if (!context) throw Error("This component is not found inside ArticleContext");

  return context;
}

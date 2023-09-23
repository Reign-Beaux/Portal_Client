import { Article, articleEmpty } from "common/models";
import { Context, FC, ReactNode, createContext, useContext, useState } from "react";

type ContextProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  isOpenDialog: boolean;
  setIsOpenDialog: Function;
  articleSelected: Article;
  setArticleSelected: React.Dispatch<React.SetStateAction<Article>>;
};

const ContextEmptyState: ContextProps = {
  isOpenDialog: false,
  setIsOpenDialog: () => {},
  articleSelected: articleEmpty,
  setArticleSelected: () => {},
};

const ArticleContext: Context<ContextProps> = createContext(ContextEmptyState);

export const ArticleProvider: FC<ContextProviderProps> = ({ children }) => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [articleSelected, setArticleSelected] = useState(articleEmpty);

  return (
    <ArticleContext.Provider
      value={{
        isOpenDialog,
        setIsOpenDialog,
        articleSelected,
        setArticleSelected,
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

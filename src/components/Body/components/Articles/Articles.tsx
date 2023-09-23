import { useAppContext } from "@/context";
import React from "react";
import { ArticleCards, ArticleDialog } from "./components";
import "./style.css";
import { ArticleProvider } from "./context";

export interface ArticlesProps {}

const Articles: React.FC<ArticlesProps> = ({}) => {
  const { themeSelected } = useAppContext();

  return (
    <ArticleProvider>
      <div style={{ height: "40px", textAlign: "center" }}>
        <h1 style={{ margin: 0 }}> {themeSelected} </h1>
      </div>
      <ArticleCards />
      <ArticleDialog />
    </ArticleProvider>
  );
};

export default Articles;

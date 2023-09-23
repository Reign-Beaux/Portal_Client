import { useAppContext } from "@/context";
import React from "react";
import { ArticleCards } from "./components";
import "./style.css";

export interface ArticlesProps {}

const Articles: React.FC<ArticlesProps> = ({}) => {
  const { themeSelected } = useAppContext();

  return (
    <>
      <div style={{ height: "40px", textAlign: "center" }}>
        <h1 style={{ margin: 0 }}> {themeSelected} </h1>
      </div>
      <ArticleCards />
    </>
  );
};

export default Articles;

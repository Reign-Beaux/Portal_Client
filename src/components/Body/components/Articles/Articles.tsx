import { useAppContext } from "@/context";
import { Article } from "common/models";
import { RequestGet, useAxios } from "libraries/axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import { CustomCard } from "common/components";

export interface ArticlesProps {}

const Articles: React.FC<ArticlesProps> = ({}) => {
  const { themeSelected, idTheme } = useAppContext();
  const { getAll } = useAxios();
  const [articles, setArticles] = useState<Article[]>([]);

  const getArticles = async () => {
    const parameters: RequestGet = {
      id: idTheme,
      endpoint: "GetArticles",
    };
    const response = await getAll<Article>(parameters);
    setArticles(response);
  };

  useEffect(() => {
    getArticles();
  }, [idTheme]);

  return (
    <>
      <div style={{ height: "40px", textAlign: "center" }}>
        <h1 style={{ margin: 0 }}> {themeSelected} </h1>
      </div>
      <div className="articles-cards-container">
        {articles.map((article) => (<CustomCard key={article.id}>{article.title}</CustomCard>))}
      </div>
    </>
  );
};

export default Articles;

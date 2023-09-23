import { useAppContext } from "@/context";
import { CustomCard } from "common/components";
import { Article } from "common/models";
import { RequestGet, useAxios } from "libraries/axios";
import React, { useEffect, useState } from "react";
import "./style.css";

export interface ArticlesProps {}

const Articles: React.FC<ArticlesProps> = ({}) => {
  const { themeSelected, idTheme, setIsOpenDialog } = useAppContext();
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

  const handleCardClick = () => setIsOpenDialog(true);

  useEffect(() => {
    getArticles();
  }, [idTheme]);

  return (
    <>
      <div style={{ height: "40px", textAlign: "center" }}>
        <h1 style={{ margin: 0 }}> {themeSelected} </h1>
      </div>
      <div className="articles-cards-container">
        {articles.length > 0 ? (
          articles.map((article) => (
            <CustomCard key={article.id} onClick={handleCardClick}>
              {article.title}
            </CustomCard>
          ))
        ) : (
          <h3> Sin artículos cargados </h3>
        )}
      </div>
    </>
  );
};

export default Articles;

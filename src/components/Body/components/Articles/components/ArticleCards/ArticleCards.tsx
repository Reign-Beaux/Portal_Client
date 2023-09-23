import { useAppContext } from "@/context";
import { CustomCard } from "common/components";
import { Article } from "common/models";
import { RequestGet, useAxios } from "libraries/axios";
import React, { useEffect, useState } from "react";
import { useArticleContext } from "../../context";
import "./style.css";

export interface ArticleCardsProps {}

const ArticleCards: React.FC<ArticleCardsProps> = ({}) => {
  const { idTheme } = useAppContext();
  const { setIsOpenDialog, setArticleSelected } = useArticleContext();
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

  const handleCardClick = (article: Article) => () => {
    setArticleSelected({ ...article });
    setIsOpenDialog(true);
  };

  useEffect(() => {
    getArticles();
  }, [idTheme]);

  return (
    <div className="articles-cards-container">
      {articles.length > 0 ? (
        articles.map((article) => (
          <CustomCard key={article.id} onClick={handleCardClick(article)}>
            {article.title}
          </CustomCard>
        ))
      ) : (
        <h3> Sin artículos cargados </h3>
      )}
    </div>
  );
};

export default ArticleCards;

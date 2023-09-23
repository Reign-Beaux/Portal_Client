export interface Article {
  id: number;  
  themeId: number;
  title: string;
  body: string;
}

export const articleEmpty: Article = {
  id: 0,
  themeId: 0,
  title: "",
  body: "",
};

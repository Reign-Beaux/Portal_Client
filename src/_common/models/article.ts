export interface Article {
  id: number;
  themeId: number;
  title: string;
  body: string;
  url: string;
}

export const articleEmpty: Article = {
  id: 0,
  themeId: 0,
  title: "",
  body: "",
  url: "",
};

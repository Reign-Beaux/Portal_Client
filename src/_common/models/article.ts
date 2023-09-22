export interface Article {
  themeId: number;
  title: string;
  body: string;
}

export const articleEmpty: Article = {
  themeId: 0,
  title: "",
  body: "",
};

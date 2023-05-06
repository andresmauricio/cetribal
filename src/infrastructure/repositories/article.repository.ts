import { http } from "../http/http";
import { Article } from "~domain/models";

export const articleRepository = {
  getAllArticles: async () => {
    const article = await http.get<Article[]>("/articles");
    return article.data;
  },
  getByReference: async (id: string) => {
    const response = await http.get<Article[]>(`/articles/?id=${id}`);
    const article = response.data;
    return article;
  },
  createArticle: async (article: Article) => {
    const response = await http.post<Article>("/articles", article);
    return response.data;
  },
  updateArticle: async (article: Article, id: string) => {
    const response = await http.put<Article>(`/articles/${id}`, article);
    return response.data;
  },
};

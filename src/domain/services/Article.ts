import { Article } from "~domain/models";
import { articleRepository } from "~infrastructure/repositories/article.repository";

function getAllArticles(): Promise<Article[]> {
  return articleRepository.getAllArticles();
}

function getByReference(id: string): Promise<Article[]> {
  return articleRepository.getByReference(id);
}

function createArticle(article: Article): Promise<Article> {
  const newArticle: Article = {
    ...article,
    id: Math.random().toString(16).slice(2),
  };
  return articleRepository.createArticle(newArticle);
}

function updateArticle(article: Article, id: string): Promise<Article> {
  return articleRepository.updateArticle(article, id);
}

export const articleService = {
  getAllArticles,
  getByReference,
  createArticle,
  updateArticle,
};

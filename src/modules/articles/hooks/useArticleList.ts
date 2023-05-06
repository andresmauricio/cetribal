import { useEffect, useState } from "react";
import { Article } from "~domain/models";
import { articleService } from "~domain/services";

export function useArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    articleService.getAllArticles().then((response) => {
      setArticles(response);
    });
  }, []);

  return { articles };
}

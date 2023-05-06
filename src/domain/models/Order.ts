import { Article } from "./Article";

export interface Order {
  id: string;
  articles: Article[];
  taxes: number | string;
  total: number | string;
}

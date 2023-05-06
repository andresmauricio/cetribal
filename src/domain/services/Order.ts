import { orderRepository } from "~infrastructure/repositories/order.repository";
import { Article, Order } from "../models";

function hasArticle(
  order: Order | null,
  article: Article
): Article | undefined {
  return order?.articles?.find((a: Article) => a.id === article.id);
}

function createOrder(article: Article): Partial<Order> {
  const order: Partial<Order> = {
    id: Math.random().toString(16).slice(2),
    articles: [article],
    total: article.price,
    taxes: article.tax,
  };
  return order;
}

function increaseOrder(order: Order, article: Article): Order {
  const newOrder: Order = {
    ...order,
    articles: [...order.articles, article],
    total: Number(order.total) + Number(article.price),
    taxes: Number(order.taxes) + Number(article.tax),
  };
  return newOrder;
}

function addArticleToOrder(order: Order | null, article: Article) {
  console.log("addArticleToOrder", order, article);
  const foundArticle = hasArticle(order, article);

  if (!order) return createOrder(article) as Order;
  if (foundArticle) return order;

  return increaseOrder(order, article);
}

function getAllOrders() {
  return orderRepository.getAllOrders();
}

function saveOrder(order: Order) {
  return orderRepository.createOrder(order);
}

export const orderService = {
  addArticleToOrder,
  getAllOrders,
  hasArticle,
  saveOrder,
};

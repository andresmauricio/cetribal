import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Article, Order } from "~domain/models";
import { orderService } from "~domain/services";

export function useOrder() {
  const [order, setOrder] = useState<Order | null>(null);
  const navigate = useNavigate();

  const addArticleToOrder = (article: Article) => {
    const newOrder = orderService.addArticleToOrder(order, article);
    setOrder(newOrder);
  };

  const hasProduct = (article: Article) => {
    return orderService.hasArticle(order, article);
  };

  const createOrder = () => {
    orderService.saveOrder(order as Order);
    navigate(-1);
  };

  return { createOrder, addArticleToOrder, hasProduct, order };
}

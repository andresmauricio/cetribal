import { App } from "./App";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { ArticleList } from "./modules/articles/components/ArticleList";
import { ArticleForm } from "./modules/articles/components/ArticleForm";
import { OrderList } from "./modules/orders/components/OrderList";
import { Order } from "./modules/orders/components/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/articles" />,
      },
      {
        path: "/articles",
        children: [
          { path: "", element: <ArticleList /> },
          { path: ":id", element: <ArticleForm /> },
          { path: "new", element: <ArticleForm /> },
        ],
      },
      {
        path: "/orders",
        children: [
          { path: "", element: <OrderList /> },
          { path: ":id", element: <Order /> },
          { path: "new", element: <Order /> },
        ],
      },
    ],
  },
]);

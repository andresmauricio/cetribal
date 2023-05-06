import { AxiosResponse } from "axios";
import { Order } from "~domain/models";
import { http } from "../http/http";

export const orderRepository = {
  getAllOrders: async () => {
    const orders = await http.get<AxiosResponse<Order[], any>>("/orders");
    return orders.data;
  },
  createOrder: async (order: Order) => {
    const createdOrder = await http.post<AxiosResponse<Order, any>>(
      "/orders",
      order
    );
    return createdOrder.data;
  },
};

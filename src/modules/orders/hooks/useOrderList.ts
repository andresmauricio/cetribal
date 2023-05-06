import { useEffect, useState } from "react";
import { Order } from "~domain/models";
import { orderService } from "~domain/services";

export function useOrderList() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    orderService.getAllOrders().then((response) => {
      setOrders(response as unknown as Order[]);
    });
  }, []);

  return { orders };
}

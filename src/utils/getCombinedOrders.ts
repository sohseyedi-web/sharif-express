import { OrderType } from "../lib/types";

type Item = {
  id?: number;
  value: string;
  label: string;
  price?: number;
};

export const getCombinedOrders = (orders: OrderType[]) => {
  const listOrders = orders.flatMap((c) => c.lists);

  const combinedItems = listOrders.reduce<Record<string, Item>>((acc, item) => {
    if (!acc[item.label]) {
      acc[item.label] = { ...item };
    } else {
      acc[item.label].value += item.value;
    }
    return acc;
  }, {});

  const combinedArray = Object.values(combinedItems);

  const maxValues = combinedArray.reduce((max, item) => {
    return item.value > max.value ? item : max;
  }, combinedArray[0]);

  return maxValues;
};

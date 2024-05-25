import { OrderType } from "../lib/OrderRowTypes";



export default function toCombinedOrders(orders: OrderType[]) {
  
    .reduce((acc: string, item: Item) => {
      if (!acc[item.label]) {
        acc[item.label] = { ...item };
      } else {
        acc[item.label].value += item.value;
      }
      return acc;
    }, {});
  // تبدیل شیء موقت به آرایه
  const combinedArray = Object.values(combinedItems);

  // پیدا کردن آیتمی که بیشترین value را دارد
  const maxValueItem = combinedArray.reduce((max: any, item: ITemType) => {
    return item.value > max.value ? item : max;
  }, combinedArray[0]);

  return maxValueItem;
}

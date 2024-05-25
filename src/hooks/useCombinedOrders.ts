import { useMemo } from "react";

interface Item {
  id: number;
  value: number;
  label: string;
  price: number;
}

interface CombinedItem extends Item {
  value: number;
}

export const useCombinedOrders = (items: Item[]): CombinedItem | null => {
  const maxValueItem = useMemo(() => {
    if (items.length === 0) return null;

    // ترکیب آیتم‌های با label یکسان و جمع کردن value آن‌ها
    const combinedItems = items.reduce<Record<string, CombinedItem>>(
      (acc, item) => {
        if (!acc[item.label]) {
          acc[item.label] = { ...item };
        } else {
          acc[item.label].value += item.value;
        }
        return acc;
      },
      {}
    );

    // تبدیل شیء موقت به آرایه
    const combinedArray = Object.values(combinedItems);

    // پیدا کردن آیتمی که بیشترین value را دارد
    return combinedArray.reduce((max, item) => {
      return item.value > max.value ? item : max;
    }, combinedArray[0]);
  }, [items]);

  return maxValueItem;
};

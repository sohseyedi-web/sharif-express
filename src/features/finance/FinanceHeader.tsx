import Stats from "../../ui/Stats/Stats";
import Stat from "../../ui/Stats/Stat";
import { useGetOrders } from "./../../hooks/orders/useOrders";
import { FaCheckDouble, FaSackDollar } from "react-icons/fa6";
import {
  RiLoaderLine,
  RiMapLine,
  RiCalendarLine,
  RiShirtLine,
} from "react-icons/ri";
import { LuCalendarClock } from "react-icons/lu";
import toLocaleDate from "../../utils/toLocadDate";
import timeDifference from "../../utils/getDaysago";
import { TbMathMax } from "react-icons/tb";
import { OrderType } from "./../../lib/OrderRowTypes";
import { useCombinedOrders } from "../../hooks/useCombinedOrders";

const FinanceHeader = () => {
  const { orders, isLoading } = useGetOrders();

  if (isLoading) return <div>لطفا صب رکنید</div>;

  const total = orders?.reduce(
    (acc: number, cur: OrderType) => acc + cur.price,
    0
  );

  const unCompletedOrders = orders?.filter(
    (c: OrderType) => c.status === "OPEN"
  ).length;
  const completedOrders = orders?.filter(
    (c: OrderType) => c.status === "CLOSED"
  ).length;

  const maxPriceOrder = orders?.reduce(
    (acc: { price: number }, cur: OrderType) => {
      return cur.price > acc.price ? cur : acc;
    },
    orders[0]
  );

  // const combinedItems = orders?.flatMap((c: OrderType) => c.lists);
  // const orderValue = useCombinedOrders(combinedItems);

  return (
    <Stats>
      <Stat
        title="تاریخ عضویت"
        value={toLocaleDate(orders[orders?.length - 1]?.createdAt)}
      >
        <RiCalendarLine size={29} className="text-orange-500" />
      </Stat>
      <Stat desc="تومان" title="مجموع سفارش ها" value={total}>
        <FaSackDollar size={28} className="text-purple-500" />
      </Stat>
      <Stat title="آدرس" value="-">
        <RiMapLine size={27} className="text-red-500" />
      </Stat>
      <Stat
        title="سفارش های در جریان"
        value={unCompletedOrders}
        desc="عدد سفارش"
      >
        <RiLoaderLine size={32} className="animate-pulse text-yellow-400" />
      </Stat>
      <Stat
        title="سفارش های تکمیل شده"
        value={completedOrders}
        desc="عدد سفارش"
      >
        <FaCheckDouble size={29} className="text-green-600" />
      </Stat>

      <Stat
        title="آخرین سفارش"
        value={timeDifference(orders[0]?.createdAt)}
        desc="از اخرین سفارش شما گذشته"
      >
        <LuCalendarClock size={29} className="text-blue-500" />
      </Stat>
      <Stat title="بیشترین مبلغ سفارش" value={maxPriceOrder.price} desc="تومان">
        <TbMathMax size={29} className="text-zinc-100" />
      </Stat>
      {/* <Stat
        title="بیشترین مورد سفارش"
        value={String(orderValue?.value)}
        desc={`بار ${orderValue?.label} سفارش داده اید`}
      >
        <RiShirtLine size={29} className="text-teal-400" />
      </Stat> */}
    </Stats>
  );
};

export default FinanceHeader;

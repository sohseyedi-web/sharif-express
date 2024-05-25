import Stats from "../../ui/Stats/Stats";
import Stat from "../../ui/Stats/Stat";
import { useGetOrders } from "./../../hooks/orders/useOrders";
import { FaCheckDouble, FaSackDollar } from "react-icons/fa6";
import { RiLoaderLine, RiMapLine } from "react-icons/ri";
import { OrderType } from "../../lib/OrderRowTypes";

const FinanceHeader = () => {
  const { orders, isLoading } = useGetOrders();

  if (isLoading) return <div>لطفا صب رکنید</div>;

  const total = orders?.reduce(
    (acc: any, cur: OrderType) => acc + cur.price,
    0
  );

  const unCompletedOrders = orders?.filter(
    (c: OrderType) => c.status === "OPEN"
  ).length;
  const completedOrders = orders?.filter(
    (c: OrderType) => c.status === "CLOSED"
  ).length;

  return (
    <Stats>
      <Stat desc="تومان" title="مجموع سفارش ها" value={total}>
        <FaSackDollar size={28} className="text-purple-500" />
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
      <Stat title="آدرس" value="-">
        <RiMapLine size="27" className="text-red-500" />
      </Stat>
    </Stats>
  );
};

export default FinanceHeader;

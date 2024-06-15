import { TbMathMax } from "react-icons/tb";
import { LuCalendarClock } from "react-icons/lu";
import timeDifference from "../../../utils/getDaysago";
import { RiLoaderLine } from "react-icons/ri";
import { HiOutlineTruck } from "react-icons/hi";
import Stats from "../../../ui/Stats/Stats";
import { FaCheckDouble, FaSackDollar, FaShirt } from "react-icons/fa6";
import { OrderType } from "../../../lib/OrderRowTypes";
import Stat from "../../../ui/Stats/Stat";
import { getCombinedOrders } from "../../../utils/getCombinedOrders";

type FinanceStatsType = {
  orders: OrderType[];
};

const FinanceStats = ({ orders }: FinanceStatsType) => {
  const total = orders?.reduce(
    (acc: number, cur: OrderType) => acc + cur.price,
    0
  );

  const waitingOrders = orders?.filter((c: OrderType) => c.status == 0).length;
  const unCompletedOrders = orders?.filter(
    (c: OrderType) => c.status == 1
  ).length;
  const completedOrders = orders?.filter(
    (c: OrderType) => c.status == 2
  ).length;

  const maxPriceOrder = orders?.reduce(
    (acc: { price: number }, cur: OrderType) => {
      return cur.price > acc.price ? cur : acc;
    },
    orders[0]
  );

  const maxValues = getCombinedOrders(orders);

  const { value, label } = maxValues || {};

  return (
    <Stats>
      <Stat desc="تومان" title="درآمد کل" value={total}>
        <FaSackDollar size={28} className="text-purple-500" />
      </Stat>
      <Stat title="در انتظار ما" value={waitingOrders} desc="عدد سفارش">
        <HiOutlineTruck size={32} className=" text-fuchsia-500" />
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
        value={timeDifference(String(orders[0].createdAt))}
        desc="از اخرین سفارش گذشته"
      >
        <LuCalendarClock size={29} className="text-blue-500" />
      </Stat>
      <Stat
        title="بیشترین مبلغ سفارش"
        value={maxPriceOrder?.price}
        desc="تومان"
      >
        <TbMathMax size={29} className="text-zinc-100" />
      </Stat>
      <Stat title="بیشترین مورد سفارش" value={value} desc={`عدد ${label}`}>
        <FaShirt size={29} className="text-rose-600" />
      </Stat>
    </Stats>
  );
};

export default FinanceStats;

import Stats from "../../ui/Stats/Stats";
import Stat from "../../ui/Stats/Stat";
import { useGetOrders } from "./../../hooks/orders/useOrders";
import { FaCheckDouble, FaSackDollar, FaShirt } from "react-icons/fa6";
import { RiLoaderLine, RiMapLine, RiCalendarLine } from "react-icons/ri";
import { LuCalendarClock } from "react-icons/lu";
import toLocaleDate from "../../utils/toLocadDate";
import timeDifference from "../../utils/getDaysago";
import { TbMathMax } from "react-icons/tb";
import { OrderType } from "../../lib/types";
import { HiOutlineTruck } from "react-icons/hi2";
import { getCombinedOrders } from "../../utils/getCombinedOrders";
import { useDetailUser } from "../../hooks/auth/useUser";
import Loading from "../../ui/Loading";

const FinanceHeader = () => {
  const { orders, isLoading } = useGetOrders();
  const { data } = useDetailUser();

  if (isLoading) return <Loading />;

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
    <section className="py-3 lg:px-0 px-3">
      <div className="flex flex-col mt-8">
        <h4 className="lg:text-xl text-lg font-semibold text-green-600">
          اطلاعات شما
        </h4>
        <hr className="dark:border-slate-700 my-2 border-slate-200" />
        <Stats>
          <Stat title="تاریخ عضویت" value={toLocaleDate(data?.user?.createdAt)}>
            <RiCalendarLine size={29} className="text-orange-500" />
          </Stat>
          <Stat desc="تومان" title="پرداختی های شما" value={total}>
            <FaSackDollar size={28} className="text-purple-500" />
          </Stat>
          <Stat title="آدرس" value="-">
            <RiMapLine size={27} className="text-red-500" />
          </Stat>
        </Stats>
        <h4 className="lg:text-xl text-lg font-semibold text-green-600">
          وضعیت سفارش ها
        </h4>
        <hr className="dark:border-slate-700 my-2 border-slate-200" />
        {orders?.length ? (
          <Stats>
            <Stat title="در انتظار ما" value={waitingOrders} desc="عدد سفارش">
              <HiOutlineTruck size={32} className=" text-fuchsia-500" />
            </Stat>
            <Stat
              title="سفارش های در جریان"
              value={unCompletedOrders}
              desc="عدد سفارش"
            >
              <RiLoaderLine
                size={32}
                className="animate-pulse text-yellow-400"
              />
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
            <Stat
              title="بیشترین مبلغ سفارش"
              value={maxPriceOrder?.price}
              desc="تومان"
            >
              <TbMathMax size={29} className="text-zinc-100" />
            </Stat>
            <Stat
              title="بیشترین مورد سفارش"
              value={value}
              desc={`عدد ${label}`}
            >
              <FaShirt size={29} className="text-rose-600" />
            </Stat>
          </Stats>
        ) : (
          <div className="w-full text-center text-lg mt-3">
            تا کنون سفارشی ثبت نکردید
          </div>
        )}
      </div>
    </section>
  );
};

export default FinanceHeader;

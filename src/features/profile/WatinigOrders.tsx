import { useGetOrders } from "../../hooks/orders/useOrders";
import Loading from "../../ui/Loading";
import { OrderType } from "../../lib/OrderRowTypes";
import toLocaleDate from "../../utils/toLocadDate";

const WatinigOrders = () => {
  const { orders, isLoading } = useGetOrders();

  
  const waiting = orders?.filter((c: OrderType) => c.status == 0);
  
  if(!waiting?.length) return;
  if (isLoading) return <Loading />;

  return (
    <section className="mt-5">
      <div className="flex items-center justify-between border-b-2 pb-2 border-green-500">
        <h4 className="lg:text-xl font-semibold text-lg">
          سفارشات در انتظار دریافت
        </h4>
      </div>
      {waiting?.map((order: OrderType) => (
        <div
          className="my-2 md:mx-0 mx-auto rounded-xl p-2 border-slate-200 dark:border-slate-700 border"
          key={order?._id}
        >
          <div className="flex items-center gap-x-2">
            <h5 className="font-semibold inline-block ml-1">
              {" "}
              {order?.name} عزیز
            </h5>
            <p>
              سفارش شما در تاریخ {toLocaleDate(new Date(order.day))} دریافت می
              شود
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WatinigOrders;

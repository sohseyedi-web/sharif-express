import { RiArrowUpDownLine } from "react-icons/ri";
import OrderTable from "../features/orders/OrderTable";

const Orders = () => {
  return (
    <section className="max-w-7xl mx-auto mt-7 lg:px-0 px-3">
      <header className="flex items-center justify-between">
        <h4 className="lg:text-xl text-lg font-semibold text-green-600">
          لیست سفارشات من
        </h4>
          <RiArrowUpDownLine className="bg-green-600 cursor-pointer p-1 w-7 h-7 text-white rounded-lg"/>
      </header>
      <hr className="dark:border-slate-700 my-2 border-slate-200" />
      <OrderTable />
    </section>
  );
};

export default Orders;

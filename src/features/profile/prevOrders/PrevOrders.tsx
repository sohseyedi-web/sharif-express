import { Link } from "react-router-dom";
import OrderTableMini from "./OrderTableMini";

const PrevOrders = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b-2 pb-2 border-green-500">
        <h4 className="lg:text-xl font-semibold text-lg ">پنج سفارش آخر</h4>
        <Link to={"/orders"} className="cursor-pointer text-blue-500 font-medium">مشاهده کامل</Link>
      </div>
      <OrderTableMini/>
    </>
  );
};

export default PrevOrders;

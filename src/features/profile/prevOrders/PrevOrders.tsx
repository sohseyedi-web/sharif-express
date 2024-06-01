import { Link } from "react-router-dom";
import OrderTableMini from "./OrderTableMini";

const PrevOrders = () => {
  return (
    <>
      <OrderTableMini />
      <Link
        to={"/profile/orders"}
        className="cursor-pointer text-blue-500 font-medium w-full mt-5 bg-black"
      >
        مشاهده کامل
      </Link>
    </>
  );
};

export default PrevOrders;

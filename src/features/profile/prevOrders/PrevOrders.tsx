import { Link } from "react-router-dom";
import OrderTableMini from "./OrderTableMini";

const PrevOrders = () => {
  return (
    <>
      <OrderTableMini />
      <div className="w-full mt-3 text-center">
        <Link
          to={"/profile/orders"}
          className="cursor-pointer text-blue-500 text-lg font-medium"
        >
          مشاهده کامل
        </Link>
      </div>
    </>
  );
};

export default PrevOrders;

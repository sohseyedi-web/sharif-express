import { HiCheckCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { clearOrder, decreaseStep } from "../../../store/reducer/orderReducer";
import { useGetOrders } from "../../../hooks/orders/useOrders";
import { useNavigate } from "react-router-dom";

const CompleteOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCompleteOrder = () => {
    dispatch(decreaseStep(3));
    dispatch(clearOrder());
    navigate("orders");
  };

  const { orders } = useGetOrders();

  return (
    <div className="border-2 border-green-500  space-y-5 rounded-xl p-3 shadow flex items-center justify-center flex-col ">
      <HiCheckCircle size={38} className="text-green-500" />
      <h3 className="lg:text-xl text-base font-semibold">
        سفارش شما با موفقیت ثبت شد
      </h3>
      <p>شماره سفارش : {orders[0]?.serialNumber}</p>
      <p>سفیران ما در چند ساعت آینده سفارش شما رو تحویل میگیرند</p>
      <button
        onClick={handleCompleteOrder}
        className="text-white px-4 py-1 rounded-xl bg-purple-600 font-medium "
      >
        صفحه سفارشات{" "}
      </button>
    </div>
  );
};

export default CompleteOrder;

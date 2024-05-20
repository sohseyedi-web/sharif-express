import { HiCheckCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { clearOrder } from "../../../store/reducer";

const CompleteOrder = ({ resetStep }: { resetStep: () => void }) => {
  const dispatch = useDispatch();
  const handleCompleteOrder = () => {
    resetStep();
    dispatch(clearOrder());
  };

  return (
    <div className="border-2 border-green-500  space-y-4 rounded-xl p-3 shadow flex items-center justify-center flex-col h-[180px]">
      <HiCheckCircle size={38} className="text-green-500" />
      <h3 className="lg:text-xl text-base font-semibold">
        سفارش شما با موفقیت ثبت شد
      </h3>
      <p>شماره سفارش : 10001</p>
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

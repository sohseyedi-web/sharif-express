import * as RiIcon from "react-icons/ri";
import ListOrders from "./ListOrders";
import { toPersianNumbersWithComma } from "./../../utils/toPersianNumbers";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { clearOrder } from "../../store/reducer";
import useUser from "../../hooks/auth/useUser";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Layout = () => {
  const { register, handleSubmit } = useForm();
  const { lists } = useSelector((state: RootState) => state.sharif);
  const { data } = useUser();
  const dispatch = useDispatch();

  const totalPrice = lists.reduce(
    (price, item) => price + item.value * item.price,
    0
  );

  const addNewOrder = (values: FieldValues) => {
    const newList = lists.filter((i) => i.value >= 1);
    if (!newList.length) {
      toast.error("لیست سفارش خالی میباشد");
    } else {
      const { phoneNumber, name } = data.user;
      const orderValue = {
        ...values,
        phoneNumber,
        name,
        totalPrice,
        lists: newList,
      };
      console.log(orderValue);
    }
  };

  return (
    <>
      <header className="flex mt-5 items-center justify-center gap-x-3 flex-wrap">
        <button className="lg:w-[330px] hover:scale-105 scale-100 transition-all duration-200 lg:h-[125px] h-[50px] w-[45%] gap-x-2 flex items-center justify-center rounded-xl bg-gradient-to-l from-green-500 to-lime-600 text-white shadow">
          <RiIcon.RiAddFill className="lg:w-8 lg:h-8 w-6 h-6" />
          <h3 className="lg:text-lg text-sm font-semibold">ثبت سفارش جدید</h3>
        </button>
        <button className="lg:w-[330px] hover:scale-105 scale-100 transition-all duration-200 lg:h-[125px] h-[50px] w-[45%] gap-x-2 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow">
          <RiIcon.RiArchive2Line className="lg:w-8 lg:h-8 w-6 h-6" />
          <h3 className="lg:text-lg text-sm font-semibold">سفارشات گذشته</h3>
        </button>
      </header>
      <main className="max-w-2xl mx-auto mt-2 lg:px-2 px-5 p-2">
        <form onSubmit={handleSubmit(addNewOrder)} className="space-y-4">
          <h4 className="lg:text-xl font-semibold text-lg border-b-2 pb-2 border-green-500">
            فرم ایجاد سفارش
          </h4>
          <ListOrders />

          <hr />
          <div className="form-control my-3">
            <label className="cursor-pointer flex  gap-x-2 items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-success"
                {...register("private")}
                name="private"
              />
              <span className="label-text font-semibold">
                مایلم سفارش به صورت تک شویی انجام شود
              </span>
            </label>
          </div>
          <div className="flex items-center justify-between gap-x-1">
            <button className="btn bg-green-700 text-white w-[80%] h-[45px]">
              قیمت : {toPersianNumbersWithComma(String(totalPrice))} تومان
            </button>
            <span
              onClick={() => dispatch(clearOrder())}
              className="text-red-500 font-semibold w-[20%] text-center cursor-pointer"
            >
              انصراف؟
            </span>
          </div>
        </form>
      </main>
    </>
  );
};

export default Layout;

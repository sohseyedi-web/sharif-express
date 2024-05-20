import ListOrders from "./ListOrders";
import { toPersianNumbersWithComma } from "./../../utils/toPersianNumbers";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { clearOrder } from "../../store/reducer";
import useUser from "../../hooks/auth/useUser";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useState } from "react";
import PanelHeader from "./PanelHeader";
import FormBox from "./formBox/FormBox";
import PrevOrders from "./prevOrders/PrevOrders";

const Layout = () => {
  const [show, setShow] = useState(true);

  const { register, handleSubmit } = useForm();
  const [isPrivate, setIsPrivate] = useState<boolean>(false);

  const onChangePrivateChecked = () => {
    setIsPrivate(!isPrivate);
  };
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
      <PanelHeader setShow={setShow}/>
      <main className="max-w-2xl mx-auto mt-2 lg:px-2 px-5 p-2">
        <FormBox/>
        <PrevOrders/>
        <form onSubmit={handleSubmit(addNewOrder)} className="space-y-4">
          <h4 className="lg:text-xl font-semibold text-lg border-b-2 pb-2 border-green-500">
            فرم ایجاد سفارش
          </h4>
          <ListOrders />
          <hr />

          {totalPrice === 0 ? null : (
            <>
              <div className="form-control my-3">
                <label className="cursor-pointer flex  gap-x-2 items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success"
                    {...register("private")}
                    name="private"
                    checked={isPrivate}
                    onChange={onChangePrivateChecked}
                  />
                  <span className="label-text font-semibold">
                    مایلم سفارش به صورت تک شویی انجام شود
                  </span>
                </label>
              </div>
              <div className="flex items-center justify-between gap-x-1">
                <button className="btn bg-green-700 text-white w-[80%] h-[45px]">
                  قیمت :
                  {isPrivate
                    ? toPersianNumbersWithComma(String(totalPrice + 50000))
                    : toPersianNumbersWithComma(String(totalPrice))}
                  تومان
                </button>
                <span
                  onClick={() => dispatch(clearOrder())}
                  className="text-red-500 font-semibold w-[20%] text-center cursor-pointer"
                >
                  انصراف؟
                </span>
              </div>
            </>
          )}
        </form>
      </main>
    </>
  );
};

export default Layout;

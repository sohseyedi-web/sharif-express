import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import { addingStep, clearOrder } from "../../../store/reducer";
import ListOrders from "./ListOrders";
import { useDispatch } from "react-redux";
import { FieldValues, UseFormRegister } from "react-hook-form";

type AddOrderFormType = {
  onChange: () => void;
  isPrivate: boolean;
  register: UseFormRegister<FieldValues>;
  name: string;
  totalPrice: number;
};

const AddOrderForm = ({
  totalPrice,
  name,
  register,
  isPrivate,
  onChange,
}: AddOrderFormType) => {
  const dispatch = useDispatch();

  return (
    <form className="space-y-4">
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
                {...register(name)}
                name={name}
                checked={isPrivate}
                onChange={onChange}
              />
              <span className="label-text font-semibold">
                مایلم سفارش به صورت تک شویی انجام شود
              </span>
            </label>
          </div>
          <div className="flex items-center justify-between gap-x-1">
            <button
              type="button"
              onClick={() => dispatch(addingStep(1))}
              className="btn bg-green-700 text-white w-[80%] h-[45px]"
            >
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
  );
};

export default AddOrderForm;

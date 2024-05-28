import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import TextField from "../../../ui/TextField";
import { useDispatch } from "react-redux";
import { decreaseStep } from "../../../store/reducer/orderReducer";
import {} from "@neshan-maps-platform/ol/layer";

type MapTypes = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  loading: boolean;
  isDirty: boolean;
  isValid: boolean;
};

const MapContainer = ({
  onSubmit,
  register,
  errors,
  loading,
  isDirty,
  isValid,
}: MapTypes) => {
  const dispatch = useDispatch();

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="flex items-center justify-between border-b-2 pb-2 border-green-500">
        <h4 className="lg:text-xl font-semibold text-lg ">ثبت آدرس</h4>
        <p
          onClick={() => dispatch(decreaseStep(1))}
          className="cursor-pointer text-blue-500 font-medium"
        >
          مرحله قبل؟
        </p>
      </div>
      <TextField
        name="address"
        placeholder="آدرس خود را وارد کنید"
        label="آدرس"
        register={register}
        errors={errors}
        validationSchema={{
          required: " شهر شما ضرروی است",
        }}
      />
      <button
        disabled={!isDirty || !isValid}
        className="btn bg-green-700 text-white w-full h-[45px]"
      >
        {loading ? "لطفا صبر کنید" : "ثبت سفارش"}
      </button>
    </form>
  );
};

export default MapContainer;

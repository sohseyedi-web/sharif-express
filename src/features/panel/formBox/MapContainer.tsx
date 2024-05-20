import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import TextField from "../../../ui/TextField";

type MapTypes = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

const MapContainer = ({ onSubmit, register, errors }: MapTypes) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <h4 className="lg:text-xl font-semibold text-lg border-b-2 pb-2 border-green-500">
        ثبت آدرس
      </h4>
      <hr />
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
      <button className="btn bg-green-700 text-white w-full h-[45px]">
        ثبت سفارش
      </button>
    </form>
  );
};

export default MapContainer;

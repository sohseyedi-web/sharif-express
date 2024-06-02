import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import TextField from "../../../ui/TextField";
import Loading from "../../../ui/Loading";

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

  return (
    <form onSubmit={onSubmit} className="space-y-4">
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
        {loading ? <Loading status={false}/> : "ثبت سفارش"}
      </button>
    </form>
  );
};

export default MapContainer;

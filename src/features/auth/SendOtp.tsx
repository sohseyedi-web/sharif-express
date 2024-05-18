import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import TextField from "../../ui/TextField";
import { FormEventHandler } from "react";

type SendOtpProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  loading: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

const SendOtp = ({ onSubmit, loading, register, errors }: SendOtpProps) => {
  return (
    <form className="space-y-5 mt-3 w-full" onSubmit={onSubmit}>
      <p className="my-3 text-gray-800 text-center">
        لطفا شماره موبایل خودت رو وارد کن
      </p>
      <TextField
        label={"شماره موبایل"}
        name={"phoneNumber"}
        placeholder="شماره موبایل را وارد کنید"
      />
      <button className="mt-2 btn btn-active btn-success w-full h-[45px] text-white">
        {loading ? "لطفا صبر کنید" : "ورود / ثبت نام"}
      </button>
    </form>
  );
};

export default SendOtp;

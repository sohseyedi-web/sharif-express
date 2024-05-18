import { useState } from "react";
import TextField from "../../ui/TextField";

const CheckOtp = () => {
  const [time, setTime] = useState<number>(0);

  return (
    <form className="space-y-5 mt-3">
      <p className="my-2 m-0 font-medium">
        کد به شماره 09331559119 ارسال شده{" "}
        
      </p>
      <TextField
        label="کد تایید را وارد کنید"
        placeholder="کد تایید"
        name="otp"
        maxLength={5}
      />
      {time > 0 ? (
        <>
          <button className="mt-2 btn btn-active btn-primary w-full text-lg h-[45px] text-white">
            ثبت کد
          </button>
          <p className="mt-2 text-center text-gray-800">
            {time} ثانیه تا ارسال مجدد کد
          </p>
        </>
      ) : (
        <button className="mt-2 btn btn-active btn-success w-full h-[45px] text-white">
          ارسال مجدد کد؟
        </button>
      )}
    </form>
  );
};

export default CheckOtp;

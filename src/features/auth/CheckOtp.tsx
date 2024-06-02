import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { checkOTP } from "../../service/authService";
import toast from "react-hot-toast";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import { useDispatch } from "react-redux";
import { addingStep, decreaseStep } from "../../store/reducer/orderReducer";
import Loading from "../../ui/Loading";

type CheckOtpPropsType = {
  phoneNumber: string;
  onResend: () => void;
};

const CheckOtp = ({ phoneNumber, onResend }: CheckOtpPropsType) => {
  const [time, setTime] = useState<number>(120);
  const [otp, setOtp] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutateAsync, isPending } = useMutation({ mutationFn: checkOTP });

  const checkOtpHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) return dispatch(addingStep(3));
      if (user.role === "USER") {
        navigate("/profile");
        dispatch(decreaseStep(1));
      }
      if (user.role === "ADMIN") {
        navigate("/admin");
        dispatch(decreaseStep(1));
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) return clearInterval(timer);
    };
  }, [time]);

  return (
    <form className="space-y-5 mt-3" onSubmit={checkOtpHandler}>
      <p className="my-2 m-0 font-medium">
        کد به شماره {toPersianNumbers("09331559119")} ارسال شده{" "}
      </p>
      <label htmlFor="">کد تایید را وارد کنید</label>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        inputStyle={{
          width: "11%",
          height: "45px",
          border: "1px solid #aaa",
          borderRadius: "0.5rem",
          backgroundColor: "transparent",
        }}
        containerStyle="flex flex-row-reverse justify-between"
        renderInput={(props: object) => <input type="number" {...props} />}
      />
      {time > 0 ? (
        <>
          <button className="mt-2 btn btn-active btn-success w-full h-[45px] text-white">
            {isPending ? <Loading status={false} /> : "ثبت کد"}
          </button>
          <p className="mt-2 text-center">
            <span className="text-green-500">{toPersianNumbers(String(time))}</span> ثانیه تا ارسال مجدد کد
          </p>
        </>
      ) : (
        <button
          onClick={onResend}
          className="mt-2 btn btn-active btn-error w-full h-[45px] text-white"
        >
          ارسال مجدد کد؟
        </button>
      )}
    </form>
  );
};

export default CheckOtp;

import CompleteProfile from "./CompleteProfile";
import SendOtp from "./SendOtp";
import CheckOtp from "./CheckOtp";
import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { getOTP } from "../../service/authService";
import { AxiosError } from "axios";

const AuthContainer = () => {
  const [step, setStep] = useState<number>(1);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: getOTP,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendOtpHandler = async () => {
    try {
      const data = await mutateAsync({ phoneNumber: "09331559119" });
      setStep(2);
      toast.success(data.message);
    } catch (error :AxiosError | any) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOtp
            onSubmit={handleSubmit(sendOtpHandler)}
            loading={isPending}
            register={register}
            errors={errors}
          />
        );
      case 2:
        return <CheckOtp />;
      case 3:
        return <CompleteProfile />;
    }
  };

  return <div className="flex-1 w-full md:px-8 px-1">{renderStep()}</div>;
};

export default AuthContainer;

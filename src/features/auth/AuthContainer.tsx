import CompleteProfile from "./CompleteProfile";
import SendOtp from "./SendOtp";
import CheckOtp from "./CheckOtp";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { getOTP } from "../../service/authService";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addingStep } from "../../store/reducer";

const AuthContainer = () => {
  const { step } = useSelector((state: RootState) => state.sharif);
  const dispatch = useDispatch();

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
      toast.success(data.message);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
    dispatch(addingStep(1));
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
        return (
          <CheckOtp
            phoneNumber={"09331559119"}
            onResend={sendOtpHandler}
          />
        );
      case 3:
        return <CompleteProfile />;
    }
  };

  return <div className="flex-1 w-full md:px-8 px-1">{renderStep()}</div>;
};

export default AuthContainer;

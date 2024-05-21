import TextField from "../../ui/TextField";
import { type FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../service/authService";
import toast from "react-hot-toast";
import { decreaseStep } from "../../store/reducer";
import { useDispatch } from "react-redux";

const CompleteProfile = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const completedProfileHandler = async (data: FieldValues) => {
    try {
      const { user, message } = await mutateAsync(data);
      toast.success(message);
      if (user.role === "USER") return navigate("/panel");
      if (user.role === "ADMIN") return navigate("/admin");
      dispatch(decreaseStep(2))
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form
      className="space-y-5 mt-3"
      onSubmit={handleSubmit(completedProfileHandler)}
    >
      <TextField
        label={"نام کاربری"}
        name="name"
        placeholder="نام و نام خانوادگی"
        register={register}
        validationSchema={{
          required: "نام کاربری ضرروی است",
        }}
        errors={errors}
      />
      <TextField
        label={"شهر محل سکونت"}
        name="city"
        placeholder="شهر شما"
        register={register}
        validationSchema={{
          required: " شهر شما ضرروی است",
        }}
        errors={errors}
      />
      <button className="mt-2 btn btn-active btn-success w-full h-[45px] text-white">
        {isPending ? "لطفا صبر کنید" : "تکمیل اطلاعات"}
      </button>
    </form>
  );
};

export default CompleteProfile;

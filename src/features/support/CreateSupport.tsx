import { FieldValues, get, useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import SelectField from "../../ui/SelectField";
import { useAddSupport } from "../../hooks/supports/useSupports";
import { useDetailUser } from "../../hooks/auth/useUser";

const optionList = [
  {
    label: "فروش",
    value: "SELLER",
  },
  {
    label: "حمل و نقل",
    value: "TRANSPORT",
  },
  {
    label: "تحویل",
    value: "DELIVERY",
  },
  {
    label: "سایر موارد",
    value: "ANOTHER",
  },
];

const CreateSupport = () => {
  const { addSupport, isCreating } = useAddSupport();
  const { data } = useDetailUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (values: FieldValues) => {
    const { phoneNumber, name } = data.user;
    const dataValues = { ...values, phoneNumber, name };
    await addSupport(dataValues);
    reset();
  };

  return (
    <form className="w-full space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="title"
        errors={errors}
        label="عنوان درخواست"
        placeholder="یک عنوان برای درخواست خود بنویسید"
        register={register}
        validationSchema={{
          required: "عنوان درخواست ضرروی است",
          minLength: {
            value: 2,
            message: "عنوان درخواست کوتاه است",
          },
        }}
      />
      <TextField
        name="serialNumber"
        errors={errors}
        label="شماره سفارش"
        placeholder="شماره سفارش لازمه"
        register={register}
        validationSchema={{
          required: "شماره سفارش لازمه ",
        }}
      />
      <SelectField
        errors={errors}
        label="دسته بندی"
        name="category"
        register={register}
        options={optionList}
        validationSchema={{
          required: "باید دسته بندی مربوط را انتخاب کنی",
        }}
      />
      <div className="w-full">
        <label htmlFor={"desc"} className="block mb-2 text-right">
          توضیحات
        </label>
        <textarea
          className="input input-bordered w-full focus:bg-white bg-gray-200 h-[120px] resize-none p-3 transition-all duration-300 outline-none"
          id={"desc"}
          placeholder={
            "با نوشتن توضیحات به ما در رفع بهتر درخواست خود کمک کنید"
          }
          {...register("desc", {
            required: "توضیحات درخواست ضروری است",
            minLength: {
              value: 10,
              message: "توضیحات درخواست کوتاه است",
            },
          })}
        />
        {get(errors, `${"desc"}.message`, null) && (
          <span className="text-red-500 my-1">
            {get(errors, `${"desc"}.message`, null)}
          </span>
        )}
      </div>
      <button className="mt-2 btn btn-active btn-success w-full h-[45px] text-white">
        {isCreating ? "لطفا صبر کنید" : "ثبت درخواست"}
      </button>
    </form>
  );
};

export default CreateSupport;

import { RadioTypes } from "../lib/RadioType";

const RadioInput = ({
  label,
  value,
  name,
  id,
  validationSchema,
  watch,
  register,
}: RadioTypes) => {
  return (
    <label
      htmlFor={id}
      className="flex items-center justify-center lg:w-[w-330px] w-[48%] bg-gray-100 dark:bg-gray-900 h-[100px] rounded-xl gap-x-2 cursor-pointer"
    >
      <input
        type="radio"
        {...register(name, validationSchema)}
        name={name}
        className="radio radio-success w-5 h-5 cursor-pointer"
        id={id}
        value={value}
        checked={watch(name) === value}
      />
      {label}
    </label>
  );
};

export default RadioInput;

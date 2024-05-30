import { RadioInputProps } from "../lib/RadioType";

const RadioInput = ({
  label,
  value,
  start,
  name,
  id,
  validationSchema,
  watch,
  current,
  register,
}: RadioInputProps) => {
  return (
    <label
      htmlFor={id}
      className="flex items-center lg:w-[w-330px] w-[48%] rounded-xl gap-x-2 cursor-pointer"
    >
      <input
        type="radio"
        {...register(name, validationSchema)}
        name={name}
        className="radio radio-success w-5 h-5 cursor-pointer"
        id={id}
        value={value}
        checked={watch(name) === value}
        disabled={current >= start}
      />
      {label}
    </label>
  );
};

export default RadioInput;

import { NewRadioTypes, RadioTypes } from "../lib/RadioType";

const RadioInput = ({
  currentHour,
  label,
  value,
  name,
  start,
  id,
  validationSchema,
  watch,
  register,
}: NewRadioTypes) => {
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
        disabled={currentHour >= start}
        checked={watch(name) === value}
      />
      {label}
    </label>
  );
};

export default RadioInput;

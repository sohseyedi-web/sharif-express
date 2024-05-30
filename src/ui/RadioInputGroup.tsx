import { get } from "react-hook-form";
import { RadioGroupTypes } from "../lib/RadioType";
import RadioInput from "./RadioInput";

const RadioInputGroup = ({
  register,
  watch,
  errors,
  configs,
  currentHour,
}: RadioGroupTypes) => {
  const { name, validationSchema = {}, options } = configs;

  return (
    <div dir="rtl" className="flex gap-x-4 w-full py-3">
      <div className="flex items-center cursor-pointer  w-full">
        {options.map((option) => (
          <RadioInput
            key={option.value}
            id={option.value}
            label={option.label}
            value={option.value}
            name={name}
            watch={watch}
            validationSchema={validationSchema}
            register={register}
            currentHour={currentHour}
            start={option.start}
          />
        ))}
      </div>
      {get(errors, `${name}.message`, null) && (
        <span className="text-red-500 my-1">
          {get(errors, `${name}.message`, null)}
        </span>
      )}
    </div>
  );
};

export default RadioInputGroup;

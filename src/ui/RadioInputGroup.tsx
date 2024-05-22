import { get } from "react-hook-form";
import { RadioGroupTypes } from "../lib/RadioType";
import RadioInput from "./RadioInput";

const RadioInputGroup = ({
  register,
  watch,
  errors,
  configs,
}: RadioGroupTypes) => {
  const { name, validationSchema = {}, options } = configs;

  return (
    <div dir="rtl" className="flex gap-x-4 w-full py-3">
      <div className="flex items-center cursor-pointer justify-between w-full">
        {options.map(({ label, value }: { label: string; value: string }) => (
          <RadioInput
            key={value}
            id={value}
            label={label}
            value={value}
            name={name}
            watch={watch}
            validationSchema={validationSchema}
            register={register}
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

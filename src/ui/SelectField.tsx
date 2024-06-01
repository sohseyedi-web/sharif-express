import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  get,
} from "react-hook-form";
import { ValidationSchemaTypes } from "../lib/TextFieldType";

export type SelectFieldTypes = {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  validationSchema?: ValidationSchemaTypes;
  options: { label: string; value: string }[];
};

const SelectField = ({
  label,
  options,
  validationSchema,
  name,
  register,
  errors,
}: SelectFieldTypes) => {
  return (
    <div className="space-y-3 w-full">
      <label className="block mb-1 text-lg text-right">{label}</label>
      <select {...register(name, validationSchema)} className="select select-bordered focus:bg-white bg-gray-200 dark:bg-slate-600 dark:focus:bg-slate-950 w-full pr-1">
        {options.map((option) => (
          <option
            value={option.value}
            key={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      {get(errors, `${name}.message`, null) && (
        <span className="text-red-500 my-1">
          {get(errors, `${name}.message`, null)}
        </span>
      )}
    </div>
  );
};

export default SelectField;

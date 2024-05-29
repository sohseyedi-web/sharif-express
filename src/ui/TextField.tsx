import { get } from "react-hook-form";
import { TextFieldTypes } from "../lib/TextFieldType";

function TextField({
  label,
  name,
  placeholder = "",
  register,
  errors,
  validationSchema,
}: TextFieldTypes) {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block mb-2 text-right">
        {label}
      </label>
      <input
        autoComplete="off"
        className="input input-bordered w-full focus:bg-white bg-gray-200 dark:bg-slate-600 dark:focus:bg-slate-950 h-[45px] text-center transition-all duration-300 outline-none"
        type="text"
        id={name}
        placeholder={placeholder}
        {...register(name, validationSchema)}
      />
      {get(errors, `${name}.message`, null) && (
        <span className="text-red-500 my-1">
          {get(errors, `${name}.message`, null)}
        </span>
      )}
    </div>
  );
}

export default TextField;

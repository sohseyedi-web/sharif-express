import { ChangeEventHandler } from "react";

type TextFieldTypes = {
  label: string;
  name: string;
  value?: string;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  maxLength?: number;
};

function TextField({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  maxLength = 100,
}: TextFieldTypes) {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block mb-2 text-right">
        {label}
      </label>
      <input
        autoComplete="off"
        className="input input-bordered w-full focus:bg-white bg-gray-200 h-[45px] text-center transition-all duration-300 outline-none"
        type="text"
        name={name}
        maxLength={maxLength}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
export default TextField;

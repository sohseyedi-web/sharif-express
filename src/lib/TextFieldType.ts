import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type ValidationSchemaTypes = {
  required?: string;
  minLength?: {
    value: number;
    message: string;
  };
};

export type TextFieldTypes = {
  label: string;
  name: string;
  placeholder?: string;
  maxLength?: number;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  validationSchema: ValidationSchemaTypes;
};

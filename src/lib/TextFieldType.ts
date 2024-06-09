import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export type ValidationSchemaTypes = {
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
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  validationSchema?: ValidationSchemaTypes;
  value?: string;
  onChange?: React.ChangeEventHandler
};

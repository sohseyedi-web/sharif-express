import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormReturn,
} from "react-hook-form";
import { ValidationSchemaTypes } from "./TextFieldType";

export interface RadioGroupAllTypes {
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
  watch: UseFormReturn["watch"];
}

export interface RadioTypes extends RadioGroupAllTypes {
  label: string;
  name: string;
  id: string;
  validationSchema?: ValidationSchemaTypes;
  value: string;
}

export interface RadioGroupTypes extends RadioGroupAllTypes {
  configs: {
    name: string;
    validationSchema?: {
      required: string;
    };
    options: [
      { label: string; value: string },
      { label: string; value: string }
    ];
  };
}

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
  start: number;
  id: string;
  validationSchema?: ValidationSchemaTypes;
  value: string;
  currentHour?: number;
}

export interface RadioGroupTypes extends RadioGroupAllTypes {
  currentHour?: number;
  configs: {
    name: string;
    validationSchema?: {
      required: string;
    };
    options: [
      { label: string; value: string; start?: number },
      { label: string; value: string; start?: number },
      { label: string; value: string; start?: number }
    ];
  };
}

export type NewRadioTypes = {
  currentHour: number;
  label: string;
  name: string;
  start: number;
  id: string;
  validationSchema?: ValidationSchemaTypes;
  value: string;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
  watch: UseFormReturn["watch"];
};

export type NewRadioGroupTypes = {
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
  watch: UseFormReturn["watch"];
  currentHour?: number;
  configs: {
    name: string;
    validationSchema?: {
      required: string;
    };
    options: [
      { label: string; value: string; start?: number },
      { label: string; value: string; start?: number },
      { label: string; value: string; start?: number }
    ];
  };
};

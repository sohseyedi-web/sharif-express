import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormReturn,
} from "react-hook-form";
import { ValidationSchemaTypes } from "./TextFieldType";

export interface RadioRHFProps {
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
  watch: UseFormReturn["watch"];
}

export interface RadioInputProps extends RadioRHFProps {
  label: string;
  name: string;
  id: string;
  start: number;
  validationSchema?: ValidationSchemaTypes;
  value: string;
  current: number;
}

export interface RadioInputGroupsProps extends RadioRHFProps {
  current?: number;
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

export type NewRadioInputProps = {
  label: string;
  name: string;
  id: string;
  start: number;
  validationSchema?: ValidationSchemaTypes;
  value: string;
  current?: number;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
  watch: UseFormReturn["watch"];
};

import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormReturn,
} from "react-hook-form";

export type AddOrderFormType = {
  onChange: () => void;
  isPrivate: boolean;
  register: UseFormRegister<FieldValues>;
  totalPrice: number;
  isDirty: boolean;
  isValid: boolean;
};

export type MapType = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  loading: boolean;
};

export type SelectTimeFormType = {
  register: UseFormRegister<FieldValues>;
  isDirty: boolean;
  isValid: boolean;
  errors: FieldErrors<FieldValues>;
  watch: UseFormReturn["watch"];
  selectDate: string;
};

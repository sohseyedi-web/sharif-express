import RadioInputGroup from "../../../ui/RadioInputGroup";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormReturn,
} from "react-hook-form";
import { toPersianNumbers } from "../../../utils/toPersianNumbers";
import { addingStep } from "../../../store/reducer/orderReducer";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

type FormType = {
  register: UseFormRegister<FieldValues>;
  isDirty: boolean;
  isValid: boolean;
  errors: FieldErrors<FieldValues>;
  watch: UseFormReturn["watch"];
  selectDate: string;
};

const SelectTimeForm = ({
  register,
  errors,
  isDirty,
  isValid,
  watch,
  selectDate,
}: FormType) => {
  const getDay = watch("day");
  const dispatch = useDispatch();
  const [currentHour, setCurrentHour] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (selectDate) {
      const now = new Date();
      const selected = new Date(selectDate);
      if (selected.toDateString() === now.toDateString()) {
        setCurrentHour(now.getHours());
      } else {
        setCurrentHour(0);
      }
    }
  }, [selectDate]);


  return (
    <div className="space-y-1">
      <h1 className="text-xl mt-4">انتخاب تاریخ</h1>
      <RadioInputGroup
        watch={watch}
        register={register}
        errors={errors}
        configs={{
          name: "day",
          validationSchema: {
            required: " انتخاب روز سفارش ضرروی است",
          },
          options: [
            { label: "امروز", value: "0" },
            { label: "فردا", value: "1" },
            { label: "پس فردا", value: "2" },
          ],
        }}
      />
      <hr className="dark:border-slate-700 my-2 border-slate-200" />
      {getDay ? (
        <>
          <h1 className="text-xl mt-4">انتخاب زمان</h1>
          <RadioInputGroup
            watch={watch}
            register={register}
            errors={errors}
            current={currentHour}
            configs={{
              name: "time",
              validationSchema: {
                required: " انتخاب زمان سفارش ضرروی است",
              },
              options: [
                {
                  label: `${toPersianNumbers("9 - 13")}`,
                  value: "0",
                  start: 11,
                },
                {
                  label: `${toPersianNumbers("13 - 17")}`,
                  value: "1",
                  start: 15,
                },
                {
                  label: `${toPersianNumbers("17 - 21")}`,
                  value: "2",
                  start: 20,
                },
              ],
            }}
          />
          <button
            type="button"
            onClick={() => dispatch(addingStep(1))}
            disabled={!isDirty || !isValid}
            className="btn btn-success w-full mt-3 text-white"
          >
            مرحله بعدی
          </button>
        </>
      ) : null}
    </div>
  );
};

export default SelectTimeForm;

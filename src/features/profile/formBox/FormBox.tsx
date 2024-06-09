import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useDetailUser } from "../../../hooks/auth/useUser";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import AddOrderForm from "./AddOrderForm";
import MapContainer from "./MapContainer";
import CompleteOrder from "./CompleteOrder";
import { useAddOrder } from "../../../hooks/orders/useOrders";
import { addingStep } from "../../../store/reducer/orderReducer";
import SelectTimeForm from "./SelectTimeForm";
import { addDays } from "date-fns";

const FormBox = () => {
  const { step, lists } = useSelector((state: RootState) => state.order);
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [selectDate, setSelectDate] = useState<string>("");
  const { addOrder, isCreating } = useAddOrder();
  const dispatch = useDispatch();
  const { data } = useDetailUser();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty, isValid },
    watch,
  } = useForm();

  useEffect(() => {
    const dayAdd = Number(getValues("day"));
    const date = addDays(new Date(), dayAdd);
    setSelectDate(String(date));
  }, [getValues("day")]);

  const totalPrice = lists.reduce(
    (price, item) => price + item.value * item.price,
    0
  );

  const addNewOrder = async (values: FieldValues) => {
    const newList = lists.filter((i) => i.value >= 1);
    const { phoneNumber, name } = data.user;

    try {
      const orders = {
        ...values,
        phoneNumber,
        name,
        price: totalPrice,
        lists: newList,
        day: selectDate,
      };
      console.log(orders);
      await addOrder(orders);
      dispatch(addingStep(1));
    } catch (error) {
      console.log(error);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SelectTimeForm
            register={register}
            errors={errors}
            isValid={isValid}
            isDirty={isDirty}
            watch={watch}
            selectDate={selectDate}
          />
        );
      case 2:
        return (
          <AddOrderForm
            onChange={() => setIsPrivate(!isPrivate)}
            register={register}
            isPrivate={isPrivate}
            totalPrice={totalPrice}
            isValid={isValid}
            isDirty={isDirty}
          />
        );
      case 3:
        return (
          <MapContainer
            register={register}
            errors={errors}
            onSubmit={handleSubmit(addNewOrder)}
            loading={isCreating}
          />
        );
      case 4:
        return <CompleteOrder />;
    }
  };

  return <div className="max-w-2xl mx-auto ">{renderStep()}</div>;
};

export default FormBox;

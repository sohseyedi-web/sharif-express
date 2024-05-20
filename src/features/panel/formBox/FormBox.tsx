import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import useUser from "../../../hooks/auth/useUser";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import AddOrderForm from "./AddOrderForm";
import MapContainer from "./MapContainer";
import CompleteOrder from "./CompleteOrder";
import { useAddOrder } from "../../../hooks/orders/useOrders";

const FormBox = () => {
  const [step, setStep] = useState<number>(1);
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const { addOrder, isCreating } = useAddOrder();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { lists } = useSelector((state: RootState) => state.sharif);
  const { data } = useUser();

  const totalPrice = lists.reduce(
    (price, item) => price + item.value * item.price,
    0
  );

  const addNewOrder = async (values: FieldValues) => {
    const newList = lists.filter((i) => i.value >= 1);
    const { phoneNumber, name } = data.user;
    const orders = {
      ...values,
      phoneNumber,
      name,
      price: totalPrice,
      lists: newList,
    };
    await addOrder(orders);
    setStep(3);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <AddOrderForm
            onSubmit={() => setStep(2)}
            onChange={() => setIsPrivate(!isPrivate)}
            register={register}
            name={"isPrivate"}
            isPrivate={isPrivate}
            totalPrice={totalPrice}
          />
        );
      case 2:
        return (
          <MapContainer
            register={register}
            errors={errors}
            onSubmit={handleSubmit(addNewOrder)}
            loading={isCreating}
          />
        );
      case 3:
        return <CompleteOrder resetStep={() => setStep(1)} />;
    }
  };

  return renderStep();
};

export default FormBox;

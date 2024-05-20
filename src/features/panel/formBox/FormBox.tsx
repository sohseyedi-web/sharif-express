import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import useUser from "../../../hooks/auth/useUser";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import AddOrderForm from "./AddOrderForm";
import MapContainer from "./MapContainer";
import CompleteOrder from "./CompleteOrder";

const FormBox = () => {
  const [step, setStep] = useState<number>(1);
  const [isPrivate, setIsPrivate] = useState<boolean>(false);

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

  const addNewOrder = (values: FieldValues) => {
    const newList = lists.filter((i) => i.value >= 1);
    const { phoneNumber, name } = data.user;
    console.log({ ...values, phoneNumber, name, totalPrice, lists: newList });
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
            name={"private"}
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
          />
        );
      case 3:
        return <CompleteOrder />;
    }
  };

  return renderStep();
};

export default FormBox;

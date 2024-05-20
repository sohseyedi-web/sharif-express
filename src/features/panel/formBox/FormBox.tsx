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
  const [orderValues, setOrderValues] = useState({});

  const { register, handleSubmit } = useForm();
  const { lists } = useSelector((state: RootState) => state.sharif);
  const { data } = useUser();

  const totalPrice = lists.reduce(
    (price, item) => price + item.value * item.price,
    0
  );

  const addNewOrder = (values: FieldValues) => {
    const newList = lists.filter((i) => i.value >= 1);
    const { phoneNumber, name } = data.user;
    const order = {
      ...values,
      phoneNumber,
      name,
      totalPrice,
      lists: newList,
    };
    setOrderValues(order);
    setStep(2);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <AddOrderForm
            onSubmit={handleSubmit(addNewOrder)}
            onChange={() => setIsPrivate(!isPrivate)}
            register={register}
            name={"private"}
            isPrivate={isPrivate}
            totalPrice={totalPrice}
          />
        );
      case 2:
        return <MapContainer />;
      case 3:
        return <CompleteOrder />;
    }
  };

  return renderStep();
};

export default FormBox;

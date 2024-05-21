import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import useUser from "../../../hooks/auth/useUser";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import AddOrderForm from "./AddOrderForm";
import MapContainer from "./MapContainer";
import CompleteOrder from "./CompleteOrder";
import { useAddOrder } from "../../../hooks/orders/useOrders";
import { addingStep } from "../../../store/reducer";

const FormBox = () => {
  const { step, lists } = useSelector((state: RootState) => state.sharif);
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const { addOrder, isCreating } = useAddOrder();
  const dispatch = useDispatch();
  const { data } = useUser();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    dispatch(addingStep(1));
    await addOrder(orders);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <AddOrderForm
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
        return <CompleteOrder />;
    }
  };

  return renderStep();
};

export default FormBox;

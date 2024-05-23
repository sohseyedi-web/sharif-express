import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useDetailUser } from "../../../hooks/auth/useUser";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import AddOrderForm from "./AddOrderForm";
import MapContainer from "./MapContainer";
import CompleteOrder from "./CompleteOrder";
import { useAddOrder } from "../../../hooks/orders/useOrders";
import { addingStep } from "../../../store/reducer";
import toast from "react-hot-toast";

const FormBox = () => {
  const { step, lists } = useSelector((state: RootState) => state.sharif);
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
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

  const totalPrice = lists.reduce(
    (price, item) => price + item.value * item.price,
    0
  );

  

  const addNewOrder = async (values: FieldValues) => {
    const newList = lists.filter((i) => i.value >= 1);
    const { phoneNumber, name } = data.user;
    const wayPayment = getValues("payment")

    try {
      const orders = {
        ...values,
        phoneNumber,
        name,
        price: totalPrice,
        lists: newList,
      };
      if (wayPayment === "ONLINE") {
        toast.success("الان منتقل میشوید");
      } else {
        await addOrder(orders);
        dispatch(addingStep(1));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <AddOrderForm
            onChange={() => setIsPrivate(!isPrivate)}
            register={register}
            isPrivate={isPrivate}
            totalPrice={totalPrice}
            errors={errors}
            watch={watch}
            isValid={isValid}
            isDirty={isDirty}
          />
        );
      case 2:
        return (
          <MapContainer
            register={register}
            errors={errors}
            onSubmit={handleSubmit(addNewOrder)}
            loading={isCreating}
            isValid={isValid}
            isDirty={isDirty}
          />
        );
      case 3:
        return <CompleteOrder />;
    }
  };

  return renderStep();
};

export default FormBox;

import React, { SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { decreaseStep } from "../../store/reducer/orderReducer";
import { toPersianNumbers } from "../../utils/toPersianNumbers";

const ProfileHeader = ({
  setShow,
  title,
}: {
  setShow: React.Dispatch<SetStateAction<number>>;
  title: string;
}) => {
  const { step } = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch();

  const onBack = () => {
    if (step == 1) {
      setShow(0);
    } else {
      dispatch(decreaseStep(1));
    }
  };

  return (
    <header className="flex items-center justify-between border-b-2 pb-2 border-green-500">
      <h4 className="lg:text-xl font-semibold text-lg">{title} - {toPersianNumbers(String(step))}</h4>
      <span
        onClick={onBack}
        className="cursor-pointer text-blue-500 font-medium"
      >
        مرحله قبل؟
      </span>
    </header>
  );
};

export default ProfileHeader;

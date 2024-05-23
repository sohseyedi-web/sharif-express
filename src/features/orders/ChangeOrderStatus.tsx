import React, { useState } from "react";
import Modal from "../../ui/Modal";
import { useDetailUser } from "../../hooks/auth/useUser";
import { FieldValues, useForm } from "react-hook-form";
import { useChangeOrderStatus } from "../../hooks/orders/useChangeOrderStatus";
import SelectField from "../../ui/selectField";

type Status = "CLOSED" | "OPEN";

const statusStyle: Record<Status, { label: string; className: string }> = {
  OPEN: { label: "ثبت شده", className: "badge-warning" },
  CLOSED: { label: "انجام شده", className: "badge-success" },
};

interface ChangeOrderStatusProps {
  status: Status;
  orderId: string;
}

const optionList = [
  {
    label: "ثبت شده",
    value: "OPEN",
  },
  {
    label: "انجام شده",
    value: "CLOSED",
  },
];

const ChangeOrderStatus: React.FC<ChangeOrderStatusProps> = ({
  status,
  orderId,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const { changeOrderStatus, isUpdating } = useChangeOrderStatus(orderId);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { role } = useDetailUser();

  const openModal = () => {
    // if (role === "ADMIN") {
      setOpen(true);
    // }
  };
  const closeModal = () => {
    setOpen(false);
  };

  const onSubmit = async (data: FieldValues) => {
    await changeOrderStatus(
      {
        id: orderId,
        data,
      },
      {
        onSuccess: () => {
          closeModal();
        },
      }
    );
  };

  return (
    <>
      <td className="cursor-pointer" onClick={openModal}>
        <span className={`badge text-white ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <Modal
        open={open}
        title="تغییر وضعیت سفارش"
        onClose={() => setOpen(false)}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <SelectField
            label={"تغییر وضعیت"}
            name="status"
            register={register}
            options={optionList}
            errors={errors}
          />
          <button className="btn btn-primary w-full">
            {isUpdating ? "لطفا صبر کنید" : "تایید"}
          </button>
        </form>
      </Modal>
    </>
  );
};

export default ChangeOrderStatus;

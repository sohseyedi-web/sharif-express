import React, { useState } from "react";
import SelectField from "./SelectField";
import { optionList } from "../constant/optionStatusList";
import { FieldValues, useForm } from "react-hook-form";
import { useChangeSupportStatus } from "../hooks/supports/useChangeSupportStatus";
import { useChangeOrderStatus } from "../hooks/orders/useChangeOrderStatus";
import Modal from "./Modal";
import { ChangeStatusProps, statusStyle } from "../lib/types";
import { useDetailUser } from "../hooks/auth/useUser";
import Loading from "./Loading";

const ChangeStatus: React.FC<ChangeStatusProps> = ({ model, status, id }) => {
  // state open modal
  const [open, setOpen] = useState<boolean>(false);

  const { role } = useDetailUser();

  // custom hooks changeValues
  const { changeSupportStatus, isUpdating: isSSLoading } =
    useChangeSupportStatus(id, () => setOpen(false));
  const { changeOrderStatus, isUpdating: isOSLoading } = useChangeOrderStatus(
    id,
    () => setOpen(false)
  );

  console.log(role);

  const hanldeOpen = () => {
    if (role === "admin") {
      setOpen(true);
    }
  };

  // handleSubmit change status
  const onSubmit = async (data: FieldValues) => {
    const values = { data, id };
    if (model == 1) await changeOrderStatus(values);
    if (model == 2) await changeSupportStatus(values);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loading = isOSLoading && isSSLoading;

  return (
    <>
      <td className="cursor-pointer" onClick={hanldeOpen}>
        <span className={`badge text-white ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <Modal
        open={open}
        title={`تغییر وضعیت ${model == 1 ? "سفارش" : "درخواست"}`}
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
          <button className="btn btn-primary w-full badge">
            {loading ? <Loading status={false} /> : "تایید"}
          </button>
        </form>
      </Modal>
    </>
  );
};

export default ChangeStatus;

import { RiEyeLine } from "react-icons/ri";
import Modal from "../../ui/Modal";
import { useState } from "react";
import toLocaleDate from "../../utils/toLocadDate";
import { toPersianNumbersWithComma } from "./../../utils/toPersianNumbers";
import { PayemntDetailType } from "../../lib/types";

const PaymentDetail: React.FC<PayemntDetailType> = ({
  serial,
  price,
  address,
  lists,
  created,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);
  return (
    <>
      <td onClick={openModal}>
        <RiEyeLine size="26" className="text-indigo-600 cursor-pointer" />
      </td>
      <Modal open={open} title="فاکتور پرداخت" onClose={closeModal}>
        <div className="space-y-3 my-2 text-right">
          <div className="flex items-center justify-between">
            <h4>شماره فاکتور : {toPersianNumbersWithComma(String(serial))}</h4>
            <p>تاریخ ثبت : {toLocaleDate(created)}</p>
          </div>
          <ul className="text-right my-2 space-y-2">
            <h6 className="text-[1.125rem] font-semibold mb-1">
              لیست اقلام شما :
            </h6>
            <hr className="border-slate-700" />
            {lists.map((list) => (
              <li className="flex items-center justify-between">
                <span>
                  {toPersianNumbersWithComma(list.value)} عدد {list.label}
                </span>
                <span>
                  {toPersianNumbersWithComma(String(list.price))} تومان
                </span>
              </li>
            ))}
            <hr className="border-slate-700" />
            <div className="flex items-center justify-end">
              <span className="font-semibold">جمع کل : </span>
              <span>{toPersianNumbersWithComma(price)} تومان</span>
            </div>
          </ul>
          <p className="flex-wrap py-3">به آدرس : {address} ارسال شد</p>

          <button className="btn btn-error text-white w-full h-[45px] mt-2">
            چاپ فاکتور
          </button>
        </div>
      </Modal>
    </>
  );
};

export default PaymentDetail;

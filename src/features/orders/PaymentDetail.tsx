import { RiEyeLine } from "react-icons/ri";
import Modal from "../../ui/Modal";
import { useState } from "react";
import { toPersianNumbers } from "../../utils/toPersianNumbers";

type PaymentDetailProps = {
  serial: number;
  way: string;
  price: string;
  address: string;
  lists: { value: string; label: string }[];
};

const PaymentDetail: React.FC<PaymentDetailProps> = ({
  serial,
  way,
  price,
  address,
  lists,
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
        <div className="space-y-3">
          <h4>شماره فاکتور : {toPersianNumbers(String(serial))}</h4>
          <p>روش پرداخت : {way}</p>
          <p>قیمت : {price} تومان</p>
          <p>آدرس : {address}</p>
          <ul className="text-right my-2 space-y-2">
            {lists.map((list) => (
              <li>
                {toPersianNumbers(list.value)} عدد {list.label}
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default PaymentDetail;

import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import toLocaleDate from "../../../utils/toLocadDate";
import { RiEyeLine } from "react-icons/ri";
import { OrderTable } from "../../../lib/OrderRowTypes";

const OrderRowMini: React.FC<OrderTable> = ({ order, index }) => {
  return (
    <tr className="text-nowrap">
      <td>{toPersianNumbersWithComma(String(index + 1))}</td>
      <td>{toPersianNumbersWithComma(String(order.price))} تومان</td>
      <td>{order.isPrivate ? "تک شویی" : "عادی"}</td>
      <td>
        <RiEyeLine size="26" className="text-indigo-600 cursor-pointer" />
      </td>
      <td>ثبت شده</td>
      <td>{toLocaleDate(order.createdAt)}</td>
    </tr>
  );
};

export default OrderRowMini;
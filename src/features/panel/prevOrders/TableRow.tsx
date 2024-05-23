import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "./../../../utils/toPersianNumbers";
import toLocaleDate from "./../../../utils/toLocadDate";
import { RiEyeLine } from "react-icons/ri";
import { OrderTable } from "../../../lib/OrderRowTypes";

const TableRow: React.FC<OrderTable> = ({ order, index }) => {
  return (
    <tr className="text-nowrap">
      <td>{toPersianNumbers(String(index + 1))}</td>
      <td>{order.name}</td>
      <td>{toPersianNumbers(String(order.phoneNumber))}</td>
      <td>{toPersianNumbersWithComma(String(order.price))} تومان</td>
      <td>
        <RiEyeLine size="28" className="text-indigo-600 cursor-pointer" />
      </td>
      <td>{toLocaleDate(order.createdAt)}</td>
    </tr>
  );
};

export default TableRow;

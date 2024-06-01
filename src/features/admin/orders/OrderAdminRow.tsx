import { OrderTable } from "../../../lib/OrderRowTypes";
import ChangeStatus from "../../../ui/ChangeStatus";
import toLocaleDate from "../../../utils/toLocadDate";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../../utils/toPersianNumbers";
import PaymentDetail from "../../orders/PaymentDetail";
import OrderAction from "./OrderAction";

const OrderAdminRow: React.FC<OrderTable> = ({ order, index }) => {
  return (
    <tr className="text-nowrap">
      <td>{toPersianNumbersWithComma(String(index + 1))}</td>
      <td>{order.name}</td>
      <td>{toPersianNumbers(order.phoneNumber)}</td>
      <td>{toPersianNumbersWithComma(String(order.price))} تومان</td>
      <td>{order.isPrivate ? "تک شویی" : "عادی"}</td>
      <PaymentDetail
        address={order.address}
        price={toPersianNumbersWithComma(String(order.price))}
        serial={order.serialNumber}
        lists={order.lists}
        created={order.createdAt}
      />
      <ChangeStatus status={order.status} id={order._id} model={1} />
      <td>{toLocaleDate(order.createdAt)}</td>
      <OrderAction />
    </tr>
  );
};

export default OrderAdminRow;

import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import toLocaleDate from "../../../utils/toLocadDate";
import { OrderTable } from "../../../lib/OrderRowTypes";
import PaymentDetail from "../../orders/PaymentDetail";
import ChangeStatus from "../../../ui/ChangeStatus";

const OrderRowMini: React.FC<OrderTable> = ({ order, index }) => {
  return (
    <tr className="text-nowrap">
      <td>{toPersianNumbersWithComma(String(index + 1))}</td>
      <td>{toPersianNumbersWithComma(String(order.price))} تومان</td>
      <td>{order.isPrivate ? "تک شویی" : "عادی"}</td>
      <PaymentDetail
        address={order.address}
        price={toPersianNumbersWithComma(String(order.price))}
        serial={order.serialNumber}
        way={order.payment}
        lists={order.lists}
      />
      <ChangeStatus status={order.status} id={order._id} model={1}/>
      <td>{toLocaleDate(order.createdAt)}</td>
    </tr>
  );
};

export default OrderRowMini;

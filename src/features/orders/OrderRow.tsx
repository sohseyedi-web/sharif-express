import React from "react";
import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import PaymentDetail from "./PaymentDetail";
import ChangeOrderStatus from "./ChangeOrderStatus";
import toLocaleDate from "../../utils/toLocadDate";
import { OrderTable } from "../../lib/OrderRowTypes";

const OrderRow: React.FC<OrderTable> = ({ order, index }) => {
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
        way={order.payment}
        lists={order.lists}
      />
      <ChangeOrderStatus status={order.status} orderId={order._id} />
      <td>{toLocaleDate(order.createdAt)}</td>
    </tr>
  );
};

export default OrderRow;

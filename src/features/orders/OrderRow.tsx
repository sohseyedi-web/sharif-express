import React from "react";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import PaymentDetail from "./PaymentDetail";
import toLocaleDate from "../../utils/toLocadDate";
import { OrderTable } from "../../lib/types/OrderRowTypes";
import ChangeStatus from "../../ui/ChangeStatus";

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
        lists={order.lists}
        created={order.createdAt}
      />
      <ChangeStatus status={order.status} id={order._id} model={1} />
      <td>{toLocaleDate(order.createdAt)}</td>
      <td>{toLocaleDate(new Date(order.day))}</td>
    </tr>
  );
};

export default OrderRow;

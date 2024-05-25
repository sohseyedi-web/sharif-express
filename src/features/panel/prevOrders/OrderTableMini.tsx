import { useGetOrders } from "../../../hooks/orders/useOrders";
import Table from "../../../ui/Table";
import { OrderType } from "./../../../lib/OrderRowTypes";
import { orderMiniListTableHeads } from "../../../constant/tableListOrderHeads";
import OrderRowMini from "./OrderRowMini";

const OrderTableMini = () => {
  const { orders } = useGetOrders();

  if (!orders?.length) return <p>سفارشی ایجاد نکردید</p>;

  return (
    <Table>
      {/* head */}
      <thead>
        <tr className="bg-gray-300 text-gray-900 font-semibold">
          {orderMiniListTableHeads.map((order) => (
            <th key={order.id}>{order.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {orders?.slice(0,5).map((order: OrderType, index: number) => (
          <OrderRowMini key={order._id} index={index} order={order} />
        ))}
      </tbody>
    </Table>
  );
};

export default OrderTableMini;

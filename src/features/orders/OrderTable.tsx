import { orderListTableHeads } from "../../constant/tableListOrderHeads";
import { useGetOrders } from "../../hooks/orders/useOrders";
import { OrderType } from "../../lib/types/OrderRowTypes";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import OrderRow from "./OrderRow";

const OrderTable = () => {
  const { orders, isLoading } = useGetOrders();

  if (!orders?.length) return <p>سفارشی ایجاد نکردید</p>;
  if (isLoading) return <Loading />;

  return (
    <Table>
      {/* head */}
      <Table.Header>
        {orderListTableHeads.map((order) => (
          <th key={order.id}>{order.label}</th>
        ))}
      </Table.Header>
      <Table.Body>
        {orders?.map((order: OrderType, index: number) => (
          <OrderRow key={order._id} index={index} order={order} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default OrderTable;

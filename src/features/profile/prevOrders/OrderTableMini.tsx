import { useGetOrders } from "../../../hooks/orders/useOrders";
import Table from "../../../ui/Table";
import { OrderType } from "../../../lib/OrderRowTypes";
import { orderMiniListTableHeads } from "../../../constant/tableListOrderHeads";
import OrderRowMini from "./OrderRowMini";
import Loading from "../../../ui/Loading";

const OrderTableMini = () => {
  const { orders,isLoading } = useGetOrders();

  if (!orders?.length) return <p>سفارشی ایجاد نکردید</p>;
  if (isLoading) return <Loading/>;


  return (
    <Table>
      {/* head */}
      <Table.Header>
        {orderMiniListTableHeads.map((order) => (
          <th key={order.id}>{order.label}</th>
        ))}
      </Table.Header>
      <Table.Body>
        {orders?.slice(0, 5).map((order: OrderType, index: number) => (
          <OrderRowMini key={order._id} index={index} order={order} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default OrderTableMini;

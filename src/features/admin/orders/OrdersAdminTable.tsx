import { orderListTableHeads } from "../../../constant/tableListOrderHeads";
import { useAllGetOrders } from "../../../hooks/admin/useGetAdminData";
import { OrderType } from "../../../lib/OrderRowTypes";
import Table from "../../../ui/Table";
import OrderAdminRow from "./OrderAdminRow";

const OrdersAdminTable = () => {
  const { isLoading, orders } = useAllGetOrders();

  if (isLoading) return <div>لطفا صبر کنید</div>;

  return (
    <Table>
      {/* head */}
      <Table.Header>
        {orderListTableHeads.map((order) => (
          <th key={order.id}>{order.label}</th>
        ))}
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {orders?.map((order: OrderType, index: number) => (
          <OrderAdminRow key={order._id} index={index} order={order} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default OrdersAdminTable;

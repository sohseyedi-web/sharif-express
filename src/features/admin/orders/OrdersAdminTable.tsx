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
      <thead>
        <tr className="bg-gray-300 text-gray-900 font-semibold dark:bg-gray-950 dark:text-white">
          {orderListTableHeads.map((order) => (
            <th key={order.id}>{order.label}</th>
          ))}
          <th>عملیات</th>
        </tr>
      </thead>
      <tbody>
        {orders?.map((order: OrderType, index: number) => (
          <OrderAdminRow key={order._id} index={index} order={order} />
        ))}
      </tbody>
    </Table>
  );
};

export default OrdersAdminTable;

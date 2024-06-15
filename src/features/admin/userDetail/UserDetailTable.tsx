import { orderListTableHeads } from "../../../constant/tableListOrderHeads";
import { OrderTypesArray } from "../../../lib/OrderRowTypes";
import Table from "../../../ui/Table";
import OrderAdminRow from "../orders/OrderAdminRow";
import SupportRow from "../supports/SupportRow";
import { SupportTypesArray } from "../../../lib/SupportTypes";
import { supportListTableHeads } from "../../../constant/tableListSupportHeads";

type UserDetailTableTypes = {
  show: number;
  supports: SupportTypesArray;
  orders: OrderTypesArray;
};

const UserDetailTable = ({ show, supports, orders }: UserDetailTableTypes) => {
  

  // order list components
  const orderList = orders.map(({ order, index }) => (
    <OrderAdminRow key={order._id} index={index} order={order} />
  ));

  // support list components
  const supportList = supports.map(({ support, index }) => (
    <SupportRow key={support._id} index={index} support={support} />
  ));

  return (
    <Table>
      {/* head */}
      <Table.Header>
        {show == 1 ? (
          <>
            {orderListTableHeads.map((order) => (
              <th key={order.id}>{order.label}</th>
            ))}
            <th>عملیات</th>
          </>
        ) : (
          supportListTableHeads.map((support) => (
            <th key={support.id}>{support.label}</th>
          ))
        )}
      </Table.Header>
      <Table.Body>{show == 1 ? orderList : supportList}</Table.Body>
    </Table>
  );
};

export default UserDetailTable;

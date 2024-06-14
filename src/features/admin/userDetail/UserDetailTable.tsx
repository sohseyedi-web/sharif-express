import { useParams } from "react-router-dom";
import { orderListTableHeads } from "../../../constant/tableListOrderHeads";
import { useGetDetailUser } from "../../../hooks/admin/useGetAdminData";
import { OrderType } from "../../../lib/OrderRowTypes";
import Table from "../../../ui/Table";
import OrderAdminRow from "../orders/OrderAdminRow";
import SupportRow from "../supports/SupportRow";
import { SupportType } from "../../../lib/SupportTypes";

type UserDetailTableTypes = {
  show: number;
};

const UserDetailTable = ({ show }: UserDetailTableTypes) => {
  const { phone } = useParams();
  const { data } = useGetDetailUser(String(phone));

  const { supports, orders } = data || {};



  // order list components
  const orderList = orders?.map((order: OrderType, index: number) => (
    <OrderAdminRow key={order._id} index={index} order={order} />
  ));

  // support list components
  const supportList = supports?.map((support: SupportType, index: number) => (
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
          <>
            <th>#</th>
            <th>نام کاربری</th>
            <th>شماره موبایل</th>
            <th>دسته بندی</th>
            <th>تاریخ درخواست</th>
            <th>وضعیت</th>
            <th>مشاهده</th>
          </>
        )}
      </Table.Header>
      <Table.Body>{show == 1 ? orderList : supportList}</Table.Body>
    </Table>
  );
};

export default UserDetailTable;

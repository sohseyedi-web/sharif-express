import { orderListTableHeads } from "../../../constant/tableListOrderHeads";
import Table from "../../../ui/Table";
import OrderAdminRow from "../orders/OrderAdminRow";
import SupportRow from "../supports/SupportRow";
import { supportListTableHeads } from "../../../constant/tableListSupportHeads";
import { SupportType,OrderType } from "../../../lib/types";

type ListType = SupportType | OrderType;

type UserDetailTableTypes = {
  show: number;
  lists: (SupportType | OrderType)[];
};

const UserDetailTable = ({ show, lists }: UserDetailTableTypes) => {
  const choiceList = lists?.map((item: ListType, index: number) =>
    show == 1 ? (
      // orderRow
      <OrderAdminRow key={item._id} index={index} order={item as OrderType} />
    ) : (
      // supportRow
      <SupportRow key={item._id} index={index} support={item as SupportType} />
    )
  );

  return lists?.length ? (
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
      <Table.Body>{choiceList}</Table.Body>
    </Table>
  ) : (
    <div>{show == 1 ? "سفارشی" : "درخواستی"} وجود ندارد</div>
  );
};

export default UserDetailTable;

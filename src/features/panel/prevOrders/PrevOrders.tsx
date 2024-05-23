import { useGetOrders } from "../../../hooks/orders/useOrders";
import Table from "../../../ui/Table";
import TableRow from "./TableRow";
import { OrderType } from "./../../../lib/OrderRowTypes";

const PrevOrders = () => {
  const { isLoading, orders } = useGetOrders();

  if (!orders?.length) return <p>سفارشی ایجاد نکردید</p>;

  return (
    <Table>
      <table className="table">
        {/* head */}
        <thead>
          <tr className=" text-gray-100">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            {/* <th>فریلنسر</th> */}
            <th>وضعیت</th>
            <th>عملیات</th>
            <th>درخواست ها</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order: OrderType, index: number) => (
            <TableRow key={order._id} index={index} order={order} />
          ))}
        </tbody>
      </table>
    </Table>
  );
};

export default PrevOrders;

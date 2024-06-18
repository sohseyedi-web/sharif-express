import { useState } from "react";
import { useAllGetOrders } from "../../../hooks/admin/useGetAdminData";
import FinanceHeader from "./FinanceHeader";
import FinanceStats from "./FinanceStats";
import { OrderType } from "../../../lib/types";

const FinanceInformation = () => {
  const { orders } = useAllGetOrders();
  const [search, setSearch] = useState("");

  const filteredOrders = orders?.filter(
    (i: OrderType) =>
      i.name.toLowerCase().includes(search.toLowerCase()) ||
      i.phoneNumber.includes(search)
  );

  return (
    <>
      <FinanceHeader
        search={search}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setSearch(e.target.value)
        }
      />
      <hr className="dark:border-slate-700 my-2 border-slate-200" />

      <h6 className="lg:text-xl text-green-500 font-semibold text-lg">
        {" "}
        {search.length < 3
          ? "اطلاعات مربوط به کل مشتریان"
          : filteredOrders?.length
          ? `اطلاعات مربوط به ${filteredOrders[0]?.name}`
          : "متاسفم چیزی پیدا نشد"}
      </h6>
      {filteredOrders?.length ? <FinanceStats orders={filteredOrders} /> : null}
    </>
  );
};

export default FinanceInformation;

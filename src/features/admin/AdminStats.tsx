import Stats from "../../ui/Stats/Stats";
import {
  useAllGetOrders,
  useAllGetUsers,
} from "../../hooks/admin/useGetAdminData";
import { OrderType } from "../../lib/types";
import Stat from "../../ui/Stats/Stat";
import * as PiIcon from "react-icons/pi";

const AdminStats = () => {
  const { orders } = useAllGetOrders();
  const { data } = useAllGetUsers();

  const total = orders?.reduce(
    (acc: number, cur: OrderType) => acc + cur.price,
    0
  );

  return (
    <Stats>
      <Stat title="تعداد کاربران" value={data?.users?.length} desc="نفر">
        <PiIcon.PiUsersFourLight size={36} className="text-indigo-100" />
      </Stat>
      <Stat title="مجموع درآمد" value={total} desc="تومان">
        <PiIcon.PiBankLight size={36} className="text-indigo-100" />
      </Stat>
      <Stat title="مجموع سفارشات" value={orders?.length} desc="عدد">
        <PiIcon.PiShoppingBagLight size={36} className="text-indigo-100" />
      </Stat>
    </Stats>
  );
};

export default AdminStats;

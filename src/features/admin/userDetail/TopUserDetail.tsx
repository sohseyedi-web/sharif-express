import Stats from "../../../ui/Stats/Stats";
import Stat from "../../../ui/Stats/Stat";
import * as RiIcon from "react-icons/ri";
import { useParams } from "react-router-dom";
import { useGetDetailUser } from "../../../hooks/admin/useGetAdminData";
import toLocaleDate from "../../../utils/toLocadDate";
import { OrderType } from "../../../lib/OrderRowTypes";

const TopUserDetail = () => {
  const { phone } = useParams();
  const { data } = useGetDetailUser(String(phone));

  const { orders, user } = data || {};

  const total = orders?.reduce(
    (acc: number, cur: OrderType) => acc + cur.price,
    0
  );

  return (
    <Stats>
      <Stat title="نام مشتری" value={user?.name}>
        <RiIcon.RiUser3Line size="29" className="text-white" />
      </Stat>
      <Stat title="تاریخ عضویت" value={toLocaleDate(user?.createdAt)}>
        <RiIcon.RiCalendarCheckLine size="29" className="text-orange-400" />
      </Stat>
      <Stat title="درآمد زایی" desc="تومان" value={total}>
        <RiIcon.RiWallet3Line size="27" className="text-cyan-500" />
      </Stat>
    </Stats>
  );
};

export default TopUserDetail;

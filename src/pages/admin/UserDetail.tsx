import { useParams } from "react-router-dom";
import { useGetDetailUser } from "../../hooks/admin/useGetAdminData";
import TopUserDetail from "../../features/admin/userDetail/TopUserDetail";
import Loading from "../../ui/Loading";
import { useState } from "react";
import { ButtonActive } from "../../features/admin/userDetail/ButtonActive";
import UserDetailTable from "../../features/admin/userDetail/UserDetailTable";
import UserDetailStatistics from "../../features/admin/userDetail/UserDetailStatistics";

const UserDetail = () => {
  const { phone } = useParams();
  const [show, setShow] = useState<number>(1);
  const { isLoading, orders, supports } = useGetDetailUser(String(phone));
  const hasItems = show == 1 ? orders : show == 2 ? supports : null;
  if (isLoading) return <Loading />;

  return (
    <>
      <TopUserDetail />
      <hr className="dark:border-slate-700 my-2 border-slate-200" />
      {/* button active for show data */}
      <div className="flex items-center gap-x-3">
        <ButtonActive
          show={show}
          onShow={() => setShow(1)}
          value={1}
          title={"سفارشات"}
        />
        <ButtonActive
          show={show}
          onShow={() => setShow(2)}
          value={2}
          title={"درخواست ها"}
        />
        <ButtonActive
          show={show}
          onShow={() => setShow(3)}
          value={3}
          title={"آمار"}
        />
      </div>
      {/* user detail data  */}
      {hasItems ? (
        <UserDetailTable show={show} />
      ) : show == 3 ? (
        <UserDetailStatistics />
      ) : (
        <div>{show == 1 || show == 3 ? "سفارشی" : "درخواستی"} وجود ندارد</div>
      )}
    </>
  );
};

export default UserDetail;

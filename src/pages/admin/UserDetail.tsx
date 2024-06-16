import { useParams } from "react-router-dom";
import { useGetDetailUser } from "../../hooks/admin/useGetAdminData";
import TopUserDetail from "../../features/admin/userDetail/TopUserDetail";
import Loading from "../../ui/Loading";
import { useState } from "react";
import { ButtonActive } from "../../features/admin/userDetail/ButtonActive";
import UserDetailTable from "../../features/admin/userDetail/UserDetailTable";

const UserDetail = () => {
  const { phone } = useParams();
  const [show, setShow] = useState<number>(1);
  const { isLoading, orders, supports } = useGetDetailUser(String(phone));
  const hasItems = show == 1 ? orders : supports;
  if (isLoading) return <Loading />;

  return (
    <>
      <TopUserDetail />
      <hr className="dark:border-slate-700 my-2 border-slate-200" />
      {/* button active for show data */}
      <div className="flex items-center gap-x-3 overflow-x-auto">
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
      </div>
      {/* user detail data  */}
      <UserDetailTable show={show} lists={hasItems} />
    </>
  );
};

export default UserDetail;

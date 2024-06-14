import { useParams } from "react-router-dom";
import { useGetDetailUser } from "../../hooks/admin/useGetAdminData";
import TopUserDetail from "../../features/admin/userDetail/TopUserDetail";
import Loading from "../../ui/Loading";

const UserDetail = () => {
  const { phone } = useParams();
  const { isLoading } = useGetDetailUser(String(phone));

  if(isLoading) return <Loading/>

  return (
    <>
      <TopUserDetail />
      <hr className="dark:border-slate-700 my-2 border-slate-200" />
    </>
  );
};

export default UserDetail;

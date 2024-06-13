import { useParams } from "react-router-dom";
import { useGetDetailUser } from "../../hooks/admin/useGetAdminData";

const UserDetail = () => {
  const {phone} = useParams();
  const {data,isLoading} = useGetDetailUser(String(phone))
  
  console.log(data)

  return <div>userDetail</div>;
};

export default UserDetail;

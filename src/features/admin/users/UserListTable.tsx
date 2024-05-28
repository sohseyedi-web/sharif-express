import { useAllGetUsers } from "../../../hooks/admin/useGetAdminData";
import Table from "../../../ui/Table";
import { userListTableHeads } from "../../../constant/tableListUserHeads";
import UserListRow from "./UserListRow";
import { UserTypes } from "../../../lib/UserTypes";

const UserListTable = () => {
  const { data, isLoading } = useAllGetUsers();

  const { users } = data || {};

  if (isLoading) return <div>لطفا صبر کنید</div>;

  return (
    <Table>
      {/* head */}
      <thead>
        <tr className="bg-gray-300 text-gray-900 font-semibold">
          {userListTableHeads.map((user) => (
            <th key={user.id}>{user.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users?.map((user: UserTypes, index: number) => (
          <UserListRow key={user._id} index={index} user={user} />
        ))}
      </tbody>
    </Table>
  );
};

export default UserListTable;

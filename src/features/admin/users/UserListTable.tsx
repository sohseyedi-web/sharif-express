import { useAllGetUsers } from "../../../hooks/admin/useGetAdminData";
import Table from "../../../ui/Table";
import { userListTableHeads } from "../../../constant/tableListUserHeads";
import UserListRow from "./UserListRow";
import { UserTypes } from "../../../lib/types";
import Loading from "../../../ui/Loading";

const UserListTable = () => {
  const { data, isLoading } = useAllGetUsers();

  const { users } = data || {};

  if (isLoading) return <Loading />;

  return (
    <Table>
      {/* head */}
      <Table.Header>
        {userListTableHeads.map((user) => (
          <th key={user.id}>{user.label}</th>
        ))}
      </Table.Header>
      <Table.Body>
        {users?.map((user: UserTypes, index: number) => (
          <UserListRow key={user._id} index={index} user={user} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default UserListTable;

import TopHeaderLists from "../../features/admin/TopHeaderLists";
import UserListTable from "../../features/admin/users/UserListTable";

const UserList = () => {
  return (
    <>
      <TopHeaderLists title="لیست کاربران سایت" />
      <UserListTable />
    </>
  );
};

export default UserList;

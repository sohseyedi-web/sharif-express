import AdminQuickData from "../features/admin/AdminQuickData";
import AdminStats from "../features/admin/AdminStats";
import TopHeaderLists from "../features/admin/TopHeaderLists";

const Admin = () => {
  return (
    <>
      <TopHeaderLists title="صفحه اصلی" />
      <AdminStats />
      <TopHeaderLists title="آخرین تغییرات"/>
      <AdminQuickData/>
    </>
  );
};

export default Admin;

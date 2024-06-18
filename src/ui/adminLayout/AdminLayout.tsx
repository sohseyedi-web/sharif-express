import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import { ReactChidrenType } from "../../lib/types";

const AdminLayout = ({ children }: ReactChidrenType) => {
  return (
    <section dir="rtl" className="flex container mx-auto flex-col">
      <AdminHeader />
      <div className="flex">
        {children}
        <div className="flex-1 py-4 lg:px-7 px-3">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AdminLayout;

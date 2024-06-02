import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section dir="rtl" className="flex container mx-auto h-screen flex-col">
      <AdminHeader />
      <div className="flex h-screen">
        {children}
        <div className="flex-1 overflow-y-auto py-4 lg:px-7 px-3">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AdminLayout;

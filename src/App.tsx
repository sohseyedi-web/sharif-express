import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";
import ProfileLayout from "./features/profile/ProfileLayout";
import Finance from "./pages/Finance";
import Support from "./pages/Support";
import AdminContent from "./features/admin/AdminContent";
import SupportList from "./features/admin/supports/SupportList";
import OrderList from "./features/admin/orders/OrderList";
import UserList from "./features/admin/users/UserList";
import FinanceData from "./features/admin/finance/FinanceData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* profile user layout */}
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<Navigate to={"dashboard"} replace />} />
          <Route path="dashboard" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="finance" element={<Finance />} />
          <Route path="support" element={<Support />} />
        </Route>
        {/* admin layout */}
        <Route path="/admin" element={<AdminContent />}>
          <Route index element={<Navigate to={"dashboard"} replace />} />
          <Route path="dashboard" element={<Admin />} />
          <Route path="users" element={<UserList />} />
          <Route path="orders" element={<OrderList />} />
          <Route path="finance" element={<FinanceData />} />
          <Route path="supports" element={<SupportList />} />
        </Route>
        <Route path="/join" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

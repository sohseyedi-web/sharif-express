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
import UserList from "./pages/admin/UserList";
import SupportsList from "./pages/admin/SupportsList";
import FinanceData from "./pages/admin/FinanceData";
import OrderList from "./pages/admin/OrderList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDark } from "./store/reducer/themeReducer";
import { RootState } from "./store/store";

function App() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state: RootState) => state.theme);

  console.log(darkMode);

  useEffect(() => {
    const theme = localStorage.getItem("theme") as "light" | "dark";
    if (theme) {
      dispatch(setDark(theme));
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        dispatch(setDark("dark"));
      } else {
        dispatch(setDark("light"));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

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
          <Route path="supports" element={<SupportsList />} />
        </Route>
        <Route path="/join" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useDispatch } from "react-redux";
import AdminLayout from "../../ui/adminLayout/AdminLayout";
import CustomLinkAdmin from "../../ui/adminLayout/CsutomLinkAdmin";
import Sidebar from "../../ui/adminLayout/Sidebar";
import * as HiIcon from "react-icons/hi";
import { updateMedia } from "../../store/reducer/logicReducer";
import { useEffect } from "react";

const AdminContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(updateMedia());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  return (
    <AdminLayout>
      <Sidebar>
        <CustomLinkAdmin to={"dashboard"}>
          <HiIcon.HiHome size={24} />
          <span>داشبورد</span>
        </CustomLinkAdmin>
        <CustomLinkAdmin to={"users"}>
          <HiIcon.HiUsers size={24} />
          <span>لیست کاربران</span>
        </CustomLinkAdmin>
        <CustomLinkAdmin to={"orders"}>
          <HiIcon.HiCollection size={24} />
          <span>سفارش ها</span>
        </CustomLinkAdmin>
        <CustomLinkAdmin to={"finance"}>
          <HiIcon.HiOutlineCurrencyDollar size={24} />
          <span>حسابداری</span>
        </CustomLinkAdmin>
        <CustomLinkAdmin to={"supports"}>
          <HiIcon.HiOutlineTemplate size={24} />
          <span>درخواست ها</span>
        </CustomLinkAdmin>
      </Sidebar>
    </AdminLayout>
  );
};

export default AdminContent;

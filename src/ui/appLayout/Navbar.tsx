import * as RiIcon from "react-icons/ri";
import Customlink from "./CustomLink";
import ButtonUser from "../../features/profile/ButtonUser";
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { changeActive } from "../../store/reducer/themeReducer";
import { RootState } from "../../store/store";

const Navbar = () => {
  const { active } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return (
    <nav className="w-full py-3 border-b border-green-400 shadow-sm lg:px-4 px-1 container mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center lg:gap-x-2 gap-x-0">
          <RiIcon.RiArrowRightSLine
            onClick={() => dispatch(changeActive(!active))}
            className="cursor-pointer w-8 h-8 lg:hidden block"
          />
          <RiIcon.RiXingLine
            size={25}
            className="bg-gradient-to-r from-green-600 to-lime-600 text-white w-10 h-10 rounded-full"
          />
          <ul className="mr-3 lg:flex hidden items-center gap-x-3">
            <Customlink name="صفحه اصلی" to={"dashboard"} />
            <Customlink name="سفارشات" to={"orders"} />
            <Customlink name="بخش مالی" to={"finance"} />
            <Customlink name="پشتیبانی" to={"support"} />
          </ul>
          <div className="lg:hidden">
            <Sidebar>
              <Customlink name="صفحه اصلی" to={"dashboard"} />
              <Customlink name="سفارشات" to={"orders"} />
              <Customlink name="بخش مالی" to={"finance"} />
              <Customlink name="پشتیبانی" to={"support"} />
            </Sidebar>
          </div>
        </div>
        <ButtonUser />
      </div>
    </nav>
  );
};

export default Navbar;

import * as RiIcon from "react-icons/ri";
import Customlink from "../../ui/CustomLink";
import ButtonUser from "./ButtonUser";

const Navbar = () => {
  return (
    <nav className="bg-white w-full py-3 border-b border-green-400 shadow-sm px-4 container mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <RiIcon.RiXingLine
            size={25}
            className="bg-green-500 text-white w-10 h-10 rounded-full"
          />
          <ul className="mr-3 flex items-center gap-x-3">
            <Customlink name="صفحه اصلی" to={"/panel"} />
            <Customlink name="سفارشات" to={"/orders"} />
            <Customlink name="بخش مالی" to={"/finance"} />
            <Customlink name="پشتیبانی" to={"/support"} />
          </ul>
        </div>
        <ButtonUser />
      </div>
    </nav>
  );
};

export default Navbar;

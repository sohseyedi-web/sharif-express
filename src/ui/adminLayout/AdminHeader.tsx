import * as RiIcon from "react-icons/ri";
import { useLogOut } from "../../hooks/auth/useUser";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { changeActive } from "../../store/reducer/logicReducer";
import toast from "react-hot-toast";

const AdminHeader = () => {
  const { isPending, logOut } = useLogOut();
  const { active } = useSelector((state: RootState) => state.logic);
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    await logOut();
    toast.success("با موفقیت خارج شدید");
  };

  return (
    <div className="col-span-2 py-4 border-b-2 px-3  w-full">
      <div className="flex items-center justify-between mx-auto container">
        <h2 className="lg:text-3xl text-2xl font-bold text-green-500">پنل ادمین</h2>
        <div className="flex items-center gap-x-5">
          <RiIcon.RiSunLine size={28} />
          <RiIcon.RiMenuLine
            size={28}
            className="cursor-pointer block lg:hidden"
            onClick={() => dispatch(changeActive(!active))}
          />
          <RiIcon.RiLogoutCircleLine
            onClick={handleLogOut}
            className={`text-red-500 cursor-pointer ${
              isPending && "animate-pulse"
            }`}
            size={28}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;

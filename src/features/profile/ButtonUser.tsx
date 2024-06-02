import { Link } from "react-router-dom";
import ToggleSwitch from "../../ui/ToggleSwitch";
import { useLogOut, useDetailUser } from "../../hooks/auth/useUser";
import { toast } from "react-hot-toast";
import Loading from "../../ui/Loading";

const ButtonUser = () => {
  const { data, isLoading } = useDetailUser();
  const { logOut, isPending } = useLogOut();

  const handleLogOut = async () => {
    await logOut();
    toast.success("با موفقیت خارج شدید");
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-success text-white btn-sm px-5"
        style={{ height: "40px" }}
      >
        {isLoading ? <Loading status={false} /> : data.user.name}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-gray-100 dark:bg-gray-900 rounded-box w-52"
      >
        <li>
          <Link to={"/profile"}>حساب کاربری</Link>
        </li>
        <hr />
        <li>
          <div className="flex items-center justify-between pl-0">
            <span>حالت شب</span>
            <ToggleSwitch />
          </div>
        </li>
        <hr />
        <li>
          <button onClick={handleLogOut} className="text-red-500 font-semibold">
            {isPending ? "..." : "خروج از حساب"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ButtonUser;

import { Link } from "react-router-dom";
import { useLogOut, useDetailUser } from "../../hooks/auth/useUser";

const ButtonUser = () => {
  const { data, isLoading } = useDetailUser();
  const { logOut, isPending } = useLogOut();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-success text-white btn-sm px-5"
        style={{ height: "40px" }}
      >
        {isLoading ? "..." : data.user.name}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-gray-100 rounded-box w-52"
      >
        <li>
          <Link to={"/profile"}>حساب کاربری</Link>
        </li>
        <hr />
        <li>
          <div className="flex items-center justify-between">
            <span>حالت شب</span>
            سییج
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

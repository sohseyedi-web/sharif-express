import { useSelector } from "react-redux";
import Back from "../Back";
import { RootState } from "../../store/store";
import { useDetailUser } from "../../hooks/auth/useUser";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const { active } = useSelector((state: RootState) => state.theme);
  const { data } = useDetailUser();

  return (
    <>
      <Back />
      <aside
        className={`${
          active ? "w-[240px] right-0 top-0" : "-right-28 w-0 top-0"
        } fixed z-40 lg:relative lg:bg-transparent dark:lg:bg-transparent bg-gray-200 dark:bg-gray-800 h-screen lg:h-auto border-l-2 dark:border-gray-900 py-4 px-2 space-y-3 transition-all duration-300`}
      >
        <ul className="flex flex-col gap-y-4">{children}</ul>
        <div className="absolute bottom-5 right-3 rounded-lg text-center bg-green-600 w-[90%] text-white py-1.5 font-semibold">
          {data?.user?.name}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

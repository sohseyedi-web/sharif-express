import { NavLink } from "react-router-dom";

type CustomLinkProps = {
  name: string;
  to: string;
};

const Customlink = ({ name, to }: CustomLinkProps) => {
  const navlinkClass =
    "flex items-center justify-center hover:bg-blue-100/80 hover:text-green-500 lg:w-[100px] w-full text-center py-1.5 rounded-lg  transition-all duration-300";

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navlinkClass} bg-green-500 text-white`
            : `${navlinkClass}`
        }
      >
        {name}
      </NavLink>
    </li>
  );
};

export default Customlink;

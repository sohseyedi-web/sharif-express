import React from "react";
import { NavLink } from "react-router-dom";

type CustomLinkProps = {
    children: React.ReactNode;
    to: string;
  };

const CustomLinkAdmin = ({ children, to } : CustomLinkProps) => {
  const navlinkClass =
    "flex items-center gap-x-2 hover:bg-blue-100/80 hover:text-green-500 px-2 py-1.5 rounded-lg  transition-all duration-300";

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navlinkClass} bg-green-500 text-white font-medium`
            : `${navlinkClass}`
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default CustomLinkAdmin;
import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export const useAuthorize = () => {
  const { isLoading, data: user } = useUser();

  const { user: karbar } = user || {};
  const { pathname } = useLocation();
  let isAuthenticated = false;
  let isAuthorized = false;

  if (karbar) isAuthenticated = true;

  const ROLES = {
    admin: "ADMIN",
    user: "USER",
  };
  const getRoles = pathname.split("/").at(1) as string;

  if (Object.keys(ROLES).includes(getRoles)) {
    if (karbar && karbar?.role === ROLES[getRoles]) isAuthorized = true;
  }

  return { isAuthorized, isAuthenticated, isLoading };
};

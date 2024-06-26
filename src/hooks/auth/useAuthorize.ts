import { useLocation } from "react-router-dom";
import { useDetailUser } from "./useUser";

interface Roles {
  [key: string]: string;
}

export const useAuthorize = () => {
  const { isLoading, data: user } = useDetailUser();

  const { user: karbar } = user || {};
  const { pathname } = useLocation();
  let isAuthenticated = false;
  let isAuthorized = false;

  if (karbar) isAuthenticated = true;

  const ROLES: Roles = {
    admin: "ADMIN",
    profile: "USER",
  };
  const getRoles = pathname.split("/").at(1) as string;

  if (Object.keys(ROLES).includes(getRoles)) {
    if (karbar && karbar?.role === ROLES[getRoles]) isAuthorized = true;
  }

  return { isAuthorized, isAuthenticated, isLoading };
};

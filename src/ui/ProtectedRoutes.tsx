import { useDetailUser } from "../hooks/auth/useUser";
import { useNavigate } from "react-router-dom";
import { useAuthorize } from "../hooks/auth/useAuthorize";
import { useEffect } from "react";
import toast from "react-hot-toast";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { role } = useDetailUser();
  const { isAuthenticated, isAuthorized } = useAuthorize();

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("لطفا وارد حساب کاربری خود شوید");
    }
    if (isAuthenticated && !isAuthorized)
      navigate(`/${role}`, { replace: true });
  }, [isAuthenticated, isAuthorized, role, navigate]);

  if (isAuthenticated && isAuthorized) return children;
};

export default ProtectedRoutes;

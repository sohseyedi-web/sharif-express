import { useEffect } from "react";
import AuthContainer from "./../features/auth/AuthContainer";
import { useDetailUser } from "../hooks/auth/useUser";
import { useAuthorize } from "../hooks/auth/useAuthorize";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const { data, role } = useDetailUser();
  const { isAuthenticated } = useAuthorize();

  useEffect(() => {
    if (isAuthenticated) {
      if (role === "user") {
        navigate("/profile");
      } else {
        navigate(`/${role}`);
      }
    }
  }, [isAuthenticated, data, navigate, role]);

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="p-4 flex items-center justify-between flex-col shadow rounded-lg border border-green-400 lg:w-[30%] md:w-[60%] w-[90%]">
        <h1 className="lg:text-3xl text-2xl font-semibold text-center text-green-500">
          شریف اکسپرس
        </h1>
        <AuthContainer />
        <p className="text-sm mt-5 text-center">
          ورود شما به معنای پذیرش قوانین{" "}
          <span className="font-medium text-green-500">شریف اکسپرس</span> است
        </p>
      </div>
    </section>
  );
};

export default Auth;

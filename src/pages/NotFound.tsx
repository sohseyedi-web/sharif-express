import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      navigate("/");
    }, 3000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="pt-10 flex items-center flex-col h-screen space-y-6">
      <h3 className="font-bold text-green-600 text-9xl">404</h3>
      <p className="font-medium lg:text-3xl sm:text-2xl text-xl">
        متاسفیم، آدرسی که وارد کردی وجود ندارد
      </p>
      <p className="font-medium opacity-90 md:text-lg text-base">
        بعد از چند ثانیه به صفحه اصلی برمیگردید
      </p>
      <Link
        to={"/"}
        className="w-[200px] text-xl transition-all h-[45px] hover:bg-green-500 rounded-md bg-green-600 text-gray-100 shadow-md flex items-center justify-center font-semibold"
      >
        صفحه اصلی
      </Link>
    </div>
  );
};

export default NotFound;
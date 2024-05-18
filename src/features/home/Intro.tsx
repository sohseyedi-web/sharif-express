import { Link } from "react-router-dom";


const Intro = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col px-2 space-y-4">
      <div className="text-xl font-semibold">یک شستشوی آسان و با کیفیت؛</div>
      <h2 className="text-4xl font-bold text-green-600">شریف اکسپرس</h2>
      <p>خشکشویی آنلاین و اتوشویی اینترنتی</p>
      <div className="flex items-center justify-center gap-4 flex-wrap mt-5">
        <Link to={"/join"}>
          <button className="w-[220px] h-[45px] bg-green-500 text-lg rounded-lg text-white">
            ورود / ثبت نام
          </button>
        </Link>
        <Link to={"/"}>
          <button className="w-[220px] h-[45px] bg-sky-500 text-lg rounded-lg text-white">
            درباره ما
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Intro
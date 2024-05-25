import { toPersianNumbersWithComma } from "./../../utils/toPersianNumbers";

type StatPropTypes = {
  title: string;
  value: number | string;
  desc?: string;
  children: React.ReactNode;
};

const Stat = ({ title, value, desc, children }: StatPropTypes) => {
  return (
    <div className="border-slate-200 dark:border-slate-600 border lg:w-[23%] flex gap-x-3 md:w-[45%] w-[90%] rounded-xl p-2 shadow-sm md:mx-0 mx-auto">
      <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center">
        {children}
      </div>
      <div className="flex flex-col">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="mt-1 ">
          {value === "-"
            ? "آدرسی ثبت نشده"
            : toPersianNumbersWithComma(String(value))}{" "}
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Stat;

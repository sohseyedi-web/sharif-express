import { useState } from "react";
import * as RiIcon from "react-icons/ri";
import { orderLists } from "../../constant/orderListValue";
import { toPersianNumbers } from "../../utils/toPersianNumbers";

const Layout = () => {
  const [lists, setLists] = useState(orderLists);

  return (
    <>
      <header className="flex mt-5 items-center justify-center gap-x-3 flex-wrap">
        <button className="lg:w-[330px] hover:scale-105 scale-100 transition-all duration-200 lg:h-[125px] h-[50px] w-[45%] gap-x-2 flex items-center justify-center rounded-xl bg-gradient-to-l from-green-500 to-lime-600 text-white shadow">
          <RiIcon.RiAddFill className="lg:w-8 lg:h-8 w-6 h-6" />
          <h3 className="lg:text-lg text-sm font-semibold">ثبت سفارش جدید</h3>
        </button>
        <button className="lg:w-[330px] hover:scale-105 scale-100 transition-all duration-200 lg:h-[125px] h-[50px] w-[45%] gap-x-2 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow">
          <RiIcon.RiArchive2Line className="lg:w-8 lg:h-8 w-6 h-6" />
          <h3 className="lg:text-lg text-sm font-semibold">سفارشات گذشته</h3>
        </button>
      </header>
      <main className="max-w-2xl mx-auto mt-2 lg:px-2 px-5 p-2">
        <form>
          <h4 className="lg:text-xl font-semibold text-lg border-b-2 pb-2 border-green-500">
            فرم ایجاد سفارش
          </h4>
          <section className="w-full p-2 cursor-pointer h-[180px] overflow-y-auto shadow-sm mt-2 rounded-xl">
            <div className="flex items-center justify-between flex-wrap space-y-2">
              {lists.map((list) => (
                <div
                  key={list.id}
                  className="flex items-center justify-between gap-x-2 md:w-[45%] w-full"
                >
                  <button className="w-6 h-6 rounded bg-green-600 text-white">
                    +
                  </button>
                  <div className="flex items-center gap-x-1">
                    <span>{toPersianNumbers(String(list.value))}</span>
                    <span>{list.label}</span>
                  </div>
                  <button className="w-6 h-6 rounded bg-green-600 text-white">
                    -
                  </button>
                </div>
              ))}
            </div>
          </section>
        </form>
      </main>
    </>
  );
};

export default Layout;

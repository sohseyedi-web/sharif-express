import { toPersianNumbers } from "../../utils/toPersianNumbers";
import { orderLists } from "../../constant/orderListValue";

const ListOrders = () => {
  return (
    <section className="w-full py-2 cursor-pointer h-[180px] overflow-y-auto mt-2">
      <div className="flex items-center justify-between flex-wrap space-y-2">
        {orderLists.map((list) => (
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
  );
};

export default ListOrders;

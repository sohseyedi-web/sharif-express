import { toPersianNumbers } from "../../utils/toPersianNumbers";
import { useDispatch, useSelector } from "react-redux";
import { addingOrderItem, removeOrderItem } from "../../store/reducer";
import { Item } from "../../store/types";
import { RootState } from "../../store/store";

const ListOrders = () => {
  const dispatch = useDispatch();

  const {lists} = useSelector((state : RootState) => state.sharif)



  const handleAddItem = (item: Item) => {
    dispatch(addingOrderItem(item));
  };

  const handleRemoveItem = (item: Item) => {
    dispatch(removeOrderItem(item));
  };

  return (
    <section className="w-full py-2 cursor-pointer h-[180px] overflow-y-auto mt-2">
      <div className="flex items-center justify-between flex-wrap space-y-2">
        {lists.map((list) => (
          <div
            key={list.id}
            className="flex items-center justify-between gap-x-2 md:w-[45%] w-full"
          >
            <button
              type="button"
              onClick={() => handleAddItem(list)}
              className="w-6 h-6 rounded bg-green-600 text-white"
            >
              +
            </button>
            <div className="flex items-center gap-x-1">
              <span>{toPersianNumbers(String(list.value))}</span>
              <span>{list.label}</span>
            </div>
            <button
              disabled={list.value === 0}
              type="button"
              onClick={() => handleRemoveItem(list)}
              className="w-6 h-6 rounded bg-green-600 text-white"
            >
              -
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListOrders;

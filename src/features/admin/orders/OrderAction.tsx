import { RiDeleteBin6Line, RiEditFill } from "react-icons/ri";

const OrderAction = () => {
  return (
    <td className="flex items-center gap-x-2">
      <span>
        <RiEditFill size={22} className="cursor-pointer text-purple-600" />
      </span>
      <span>
        <RiDeleteBin6Line size={22} className="cursor-pointer text-red-600" />
      </span>
    </td>
  );
};

export default OrderAction;

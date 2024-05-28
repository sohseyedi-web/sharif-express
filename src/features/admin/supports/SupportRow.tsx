import { RiEyeFill } from "react-icons/ri";
import { SupportTypesBox } from "../../../lib/SupportTypes";
import ChangeStatus from "../../../ui/ChangeStatus";
import toLocaleDate from "../../../utils/toLocadDate";
import { toPersianNumbers } from "../../../utils/toPersianNumbers";

const SupportRow: React.FC<SupportTypesBox> = ({ index, support }) => {
  return (
    <tr className="text-nowrap" key={support._id}>
      <td>{toPersianNumbers(String(index + 1))}</td>
      <td>{support.name}</td>
      <td>{toPersianNumbers(support.phoneNumber)}</td>
      <td>{support.category}</td>
      <td>{toLocaleDate(support.createdAt)}</td>
      <ChangeStatus model={2} status={support.status} id={support._id} />
      <td>
        <RiEyeFill size={26} className="cursor-pointer text-indigo-600" />
      </td>
    </tr>
  );
};

export default SupportRow;

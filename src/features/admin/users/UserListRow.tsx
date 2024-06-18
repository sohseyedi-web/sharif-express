import { toPersianNumbers } from "../../../utils/toPersianNumbers";
import toLocaleDate from "../../../utils/toLocadDate";
import { RiEyeFill } from "react-icons/ri";
import { UserTableTypes } from "../../../lib/types";

const UserListRow: React.FC<UserTableTypes> = ({ user, index }) => {
  return (
    <tr key={user?._id} className="text-nowrap">
      <td>{toPersianNumbers(String(index + 1))}</td>
      <td>{user?.name}</td>
      <td>{toPersianNumbers(user?.phoneNumber)}</td>
      <td>{user?.city}</td>
      <td>{toLocaleDate(user?.createdAt)}</td>
      <td>تایید شده</td>
      <td>
        <RiEyeFill size={26} className="cursor-pointer text-indigo-600" />
      </td>
    </tr>
  );
};

export default UserListRow;

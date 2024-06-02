import { useRemoveSupport } from "../../hooks/supports/useSupports";
import { SupportTypesBox } from "../../lib/SupportTypes";
import toLocaleDate from "../../utils/toLocadDate";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import { RiDeleteBinLine } from "react-icons/ri";
import ChangeStatus from "../../ui/ChangeStatus";
import Loading from "../../ui/Loading";

const SupportItem: React.FC<SupportTypesBox> = ({ support,index }) => {
  const { isDeleting, removeSupport } = useRemoveSupport();

  const handleRemoveCategory = () => {
    removeSupport(support?._id);
  };

  return (
    <div
      className="md:w-[47%] bg-zinc-50 dark:bg-zinc-900 dark:border-slate-700 w-[90%] h-[130px] md:mx-0 mx-auto border rounded-2xl py-2 px-4"
      key={support._id}
    >
      {isDeleting ? (
        <div className="flex items-center justify-center font-semibold">
          <Loading status={false}/>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold">{support.title}</h4>
            <div>
              <span className="font-semibold">تاریخ ثبت :</span>
              <span>{toLocaleDate(support.createdAt)}</span>
            </div>
          </div>
          <hr />
          <div className="block my-3">
            <span className="font-semibold">شماره سفارش :</span>
            <span>{toPersianNumbers(String(support.serialNumber))}</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="w-[290px] truncate font-medium">{support.desc}</p>
            <div className="flex items-center gap-x-1">
              <ChangeStatus
                status={support.status}
                id={support._id}
                model={2}
              />

              <RiDeleteBinLine
                size={26}
                className="text-red-600 cursor-pointer"
                onClick={handleRemoveCategory}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SupportItem;

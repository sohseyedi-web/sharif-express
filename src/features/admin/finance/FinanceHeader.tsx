import { RiSearch2Line } from "react-icons/ri";

type FinanceHeaderType = {
  search: string;
  onChange: React.ChangeEventHandler;
};

const FinanceHeader = ({ search, onChange }: FinanceHeaderType) => {
  return (
    <form className="md:w-[500px] w-full relative my-3">
      <RiSearch2Line size={28} className="absolute right-1 top-2" />
      <input
        value={search}
        onChange={onChange}
        type="text"
        placeholder="نام مشتری / شماره همراه"
        className="input input-bordered w-full focus:bg-white bg-gray-200 dark:bg-slate-600 dark:focus:bg-slate-950 h-[45px] transition-all duration-300 outline-none pr-10"
      />
    </form>
  );
};

export default FinanceHeader;

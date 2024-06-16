import * as RiIcon from "react-icons/ri";

type HeaderProps = {
  setShow: React.Dispatch<React.SetStateAction<number>>;
};

const ChoiceService = ({ setShow }: HeaderProps) => {
  return (
    <header className="flex mt-5 items-center justify-between gap-3 flex-wrap">
      <button
        onClick={() => setShow(1)}
        className="lg:w-[300px] hover:scale-105 scale-100 transition-all duration-200 lg:h-[125px] h-[50px] w-[45%] gap-x-2 flex items-center justify-center rounded-xl bg-gradient-to-l from-green-500 to-lime-600 text-white shadow"
      >
        <RiIcon.RiAddFill className="lg:w-8 lg:h-8 w-6 h-6" />
        <h3 className="lg:text-lg text-sm font-semibold">ثبت سفارش جدید</h3>
      </button>
      <button
        onClick={() => setShow(2)}
        className="lg:w-[300px] hover:scale-105 scale-100 transition-all duration-200 lg:h-[125px] h-[50px] w-[45%] gap-x-2 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow"
      >
        <RiIcon.RiArchive2Line className="lg:w-8 lg:h-8 w-6 h-6" />
        <h3 className="lg:text-lg text-sm font-semibold">سفارشات گذشته</h3>
      </button>
    </header>
  );
};

export default ChoiceService;

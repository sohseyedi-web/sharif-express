type BtnActiveType = {
  show: number;
  value: number;
  title: string;
  onShow: React.MouseEventHandler<HTMLButtonElement>;
};

export const ButtonActive = ({ show, value, title, onShow }: BtnActiveType) => {
  return (
    <button
      onClick={onShow}
      className={`py-1.5 w-[200px] text-center rounded-lg transition-all border-slate-200 dark:border-slate-700 border duration-300${
        show == value
          ? "font-medium opacity-100 bg-green-600 text-white"
          : " font-normal opacity-90 "
      }`}
    >
      {title}
    </button>
  );
};

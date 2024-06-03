type HeaderListProps = {
  title: string;
};

const TopHeaderLists = ({ title }: HeaderListProps) => {
  return (
    <>
      <header className="flex items-center justify-between">
        <h6 className="lg:text-2xl text-green-500 font-semibold text-xl">
          {title}
        </h6>
      </header>
      <hr className="dark:border-slate-700 my-2 border-slate-200" />
    </>
  );
};

export default TopHeaderLists;

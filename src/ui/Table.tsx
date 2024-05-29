import React from "react";

type PropsType = {
  children: React.ReactNode;
};

const Table = ({ children }: PropsType) => {
  return (
    <div className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 rounded-md w-full overflow-x-auto mt-2">
      <table className="table w-full">{children}</table>
    </div>
  );
};

export default Table;

function TableHeader({ children }: PropsType) {
  return (
    <thead>
      <tr className="bg-gray-300 text-gray-900 font-semibold dark:bg-gray-950 dark:text-white">
        {children}
      </tr>
    </thead>
  );
}

function TableBody({ children } : PropsType) {
  return <tbody>{children}</tbody>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
import React from "react";

const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-100 text-gray-800 rounded-md w-full overflow-x-auto mt-2">
      <table className="table w-full">{children}</table>
    </div>
  );
};

export default Table;

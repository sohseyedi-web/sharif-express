import React from "react";

const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-900 text-white rounded-md w-full overflow-x-auto">
      <table className="">{children}</table>
    </div>
  );
};

export default Table;


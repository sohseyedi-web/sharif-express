import React from "react";

const Stats = ({ children }:{ children: React.ReactNode }) => {
  return (
    <header className="my-3 flex items-center justify-between flex-wrap gap-y-2">
      {children}
    </header>
  );
};

export default Stats;

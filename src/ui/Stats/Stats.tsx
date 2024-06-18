import { ReactChidrenType } from "../../lib/types";

const Stats = ({ children }: ReactChidrenType) => {
  return (
    <header className="my-3 flex items-center justify-between flex-wrap gap-y-2">
      {children}
    </header>
  );
};

export default Stats;

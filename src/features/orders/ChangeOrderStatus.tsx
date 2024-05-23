import React from "react";

type Status = "CLOSED" | "OPEN";

const statusStyle: Record<Status, { label: string; className: string }> = {
  OPEN: { label: "ثبت شده", className: "badge-warning" },
  CLOSED: { label: "انجام شده", className: "badge-success" },
};

interface ChangeOrderStatusProps {
  status: Status;
}

const ChangeOrderStatus: React.FC<ChangeOrderStatusProps> = ({ status }) => {
  return (
    <td className="cursor-pointer">
      <span className={`badge text-white ${statusStyle[status].className}`}>
        {statusStyle[status].label}
      </span>
    </td>
  );
};

export default ChangeOrderStatus;

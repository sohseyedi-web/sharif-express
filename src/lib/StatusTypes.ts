import { Status } from "./OrderRowTypes";

export const statusStyle: Record<Status, { label: string; className: string }> = {
  0: { label: "در انتظار", className: "badge-warning" },
  1: { label: "بررسی شده", className: "badge-primary" },
  2: { label: "تکمیل شده", className: "badge-success" },
};

export interface ChangeStatusProps {
  status: Status;
  id: string;
  model: number;
}

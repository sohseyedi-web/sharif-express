export type Status = 0 | 1 | 2;

export interface OrderType {
  index?: number;
  phoneNumber: string;
  price: number;
  createdAt: Date;
  name: string;
  address: string;
  status: Status;
  payment: string;
  isPrivate: boolean;
  serialNumber: number;
  lists: { value: string; label: string }[];
  _id: string;
}

export interface OrderTable {
  order: OrderType;
  index: number;
}

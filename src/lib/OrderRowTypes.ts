type Status = "OPEN" | "CLOSED";

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
  lists: string[];
  _id: string;
}

export interface OrderTable {
  order: OrderType;
  index: number;
}

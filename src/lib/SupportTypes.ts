type Status = 0 | 1 | 2;

export interface SupportType {
  phoneNumber: string;
  createdAt: Date;
  name: string;
  status: Status;
  category: string;
  serialNumber: number;
  _id: string;
  desc: string;
  title: string;
}

export interface SupportTypesBox {
  support: SupportType;
  index : number
}

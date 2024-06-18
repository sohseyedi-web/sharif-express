export type UserTypes = {
  _id: string;
  name: string;
  phoneNumber: string;
  isActive: boolean;
  city: string;
  createdAt: Date;
};

export type UserTableTypes = {
  user: UserTypes;
  index: number;
};

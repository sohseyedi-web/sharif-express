export interface Item {
  id: number;
  value: number;
  price: number;
  label: string;
}

export interface IssueInitialState {
  lists: Item[];
}

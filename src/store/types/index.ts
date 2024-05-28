export interface Item {
  id: number;
  value: number;
  price: number;
  label: string;
}

export interface OrderInitialState {
  lists: Item[];
  step : number
}

export interface LogicInitialState {
  active : boolean
}

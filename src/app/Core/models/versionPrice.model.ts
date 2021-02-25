export class VersionPriceModel {
  characteristics: any[];
  markup: number;
  price: Price;
  percentage: number;
  name: string;
  plaId: string;
  id: string;
  popType: string;
  frequency: string;
}

export interface Price {
  amount: number;
  units: Units;
}

export interface Units {
  code: string;
  name: string;
}

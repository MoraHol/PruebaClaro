import {CharacteristicModel} from './characteristic.model';
import {PriceModel} from './price.model';

export class VersionOfferModel {
  characteristics: CharacteristicModel[];
  productOfferingPrices: PriceModel[];
  name: string;
  id: string;
}

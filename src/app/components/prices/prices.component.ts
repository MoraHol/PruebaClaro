import {Component, Input, OnInit} from '@angular/core';
import {PriceModel} from '../../Core/models/price.model';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  @Input('prices')
  prices: PriceModel[];

  constructor() {
  }

  ngOnInit(): void {
  }

}

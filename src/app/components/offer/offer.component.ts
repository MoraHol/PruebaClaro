import {Component, Input, OnInit} from '@angular/core';
import {OfferModel} from '../../Core/models/offer.model';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  offerSelected: OfferModel;

  @Input('offers')
  offers: OfferModel[];

  constructor() {
  }

  ngOnInit(): void {
  }

}

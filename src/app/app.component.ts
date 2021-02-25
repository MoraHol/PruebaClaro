import {Component, OnInit, ViewChild} from '@angular/core';
import {OfferService} from './Core/services/offer.service';
import {OfferModel} from './Core/models/offer.model';
import {OfferComponent} from './components/offer/offer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pruebaClaro';
  offers: OfferModel[] = [];

  @ViewChild(OfferComponent)
  ofc: OfferComponent;


  constructor(private offerService: OfferService) {

  }

  ngOnInit(): void {
    this.offerService.getOffers().subscribe(r => {
      this.offers = r;
    });

  }
}

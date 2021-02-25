import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OfferModel} from '../models/offer.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) {
  }

  getOffers(): Observable<OfferModel[]> {
    return this.http.get<OfferModel[]>('../../assets/ofertas.json');
  }
}

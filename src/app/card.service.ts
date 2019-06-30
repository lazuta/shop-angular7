import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  items = [];

  addToCard(product) {
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem('item');
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  constructor( 
    private http: HttpClient
    ) { }
}

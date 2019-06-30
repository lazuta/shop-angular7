import { Injectable } from '@angular/core';

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

  clearCard() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}

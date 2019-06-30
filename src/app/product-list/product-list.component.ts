import { Component } from '@angular/core';

import { CardService } from "../card.service";
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  product;

  constructor(
    private cardService: CardService,
  ) {}

  share() {
    window.alert('The product has been shared!');
  }

  addToCard(product){
    window.alert('Product was added to cart!');
    this.cardService.addToCard(product);
  }

  onNotify() {
    window.alert('Notify!)');
  }
}

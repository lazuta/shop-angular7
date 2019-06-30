import { Component, OnInit } from '@angular/core';

import { CardService } from '../card.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;

  constructor(
    private cardServise: CardService,
  ) { 
    this.items = this.cardServise.getItems();
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

import { CardService } from '../card.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  constructor(
    private cartService: CardService,
  ) { 
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  ngOnInit() {
  }

}

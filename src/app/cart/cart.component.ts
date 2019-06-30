import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CardService } from '../card.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cardServise: CardService,
    private formBuilder: FormBuilder,
  ) { 
    this.items = this.cardServise.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
 
    this.items = this.cardServise.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit() {
  }

}

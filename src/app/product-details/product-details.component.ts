import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";
import { CardService } from "../card.service";
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
  ) { }

  addToCard(product) {
    window.alert('Product was added to cart!');
    this.cardService.addToCard(product);  
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../types/card';
import { InCart } from '../types/cart';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Input() inCart!: Array<InCart>;
  isDiscount!: boolean;
  isFavourite = false;

  @Output() addProductToCart = new EventEmitter<Product>();


  constructor(
    private router: Router,
  ) { }

  getProductPrice() {
    return this.product.price ? this.product.price : { value: 0 };
  }

  ngOnChange() {
  }

  ngOnInit(): void {
    if (this.product.price) {
      this.isDiscount = !!this.product.price.discount;
    }
  }

  toggleIsFavourite() {
    this.isFavourite = !this.isFavourite;
  }

  getProductIsAvailable() {
    return !!this.product.available;
  }

  getProductAvailableCount() {
    return this.product.available ? this.product.available : 0;
  }

  getProductAvailableWithoutSelectedCount() {
    const selectedProductIndexInCart = this.inCart.findIndex(x => x.product.id === this.product.id);
    return ( selectedProductIndexInCart === -1 ) ?
            this.getProductIsAvailable() :
            ( this.getProductAvailableCount() - this.inCart[selectedProductIndexInCart].count > 0 );
  }

  addToCart() {
    this.addProductToCart.emit(this.product);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  isFavourite: boolean = false;

  @Output() addProductToCart = new EventEmitter<Product>();


  constructor() { }

  getProductPrice() {
    return this.product.price? this.product.price : { value: 0 };
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
    console.log('check inCart: ', this.inCart);
    let selectedProductIndexInCart = this.inCart.findIndex(x => x.product.id === this.product.id);
    console.log('check selectedProductIndexInCart', selectedProductIndexInCart);
    console.log('countInCart: ', this.inCart[selectedProductIndexInCart] ? this.inCart[selectedProductIndexInCart].count : 0, ', countInStorage: ', this.getProductAvailableCount());
    console.log('result: ', ( selectedProductIndexInCart === -1 ) ?
    this.getProductIsAvailable() :
    ( this.inCart[selectedProductIndexInCart].count - this.getProductAvailableCount() > 0 ));
    return ( selectedProductIndexInCart === -1 ) ?
            this.getProductIsAvailable() :
            ( this.getProductAvailableCount() - this.inCart[selectedProductIndexInCart].count > 0 );
  }

  addToCart() {
    this.addProductToCart.emit(this.product);
  }
}

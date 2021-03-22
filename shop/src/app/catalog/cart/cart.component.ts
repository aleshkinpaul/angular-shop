import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { InCart } from '../types/cart'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() inCart!: Array<InCart>;
  @Input() isOpen: boolean = false;

  @Output() deleteProductFromCart = new EventEmitter<number>();
  @Output() clearCart = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  getInCartProductCount() {
    return this.inCart.reduce(((x, y) => x + y.count), 0);
  }

  toggleCartPreview() {
    this.isOpen = !this.isOpen;
  }

  clearCartEmit() {
    this.clearCart.emit();
  }

  deleteProductFromCartEmit(productId: number) {
    console.log('PRODUCT: ', productId);
    this.deleteProductFromCart.emit(productId);
  }
}

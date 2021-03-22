import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../types/card'
import { InCart } from '../../types/cart'
import { ButtonTitles  } from 'src/app/catalog/data/consts'

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {  
  @Input() inCart!: Array<InCart>;
  @Input() isOpen: boolean = false;

  @Output() closePreview = new EventEmitter<boolean>();
  @Output() deleteProductFromCart = new EventEmitter<number>();
  @Output() clearCart = new EventEmitter<boolean>();

  ButtonTitles = ButtonTitles;

  constructor() { }

  ngOnInit(): void {
  }

  getProductPrice(item: InCart) {
    return item.product.price?.value ? item.product.price.value : 0;
  }

  getFullProductPrice(item: InCart) {
    return item.product.price?.value ? item.count * this.getProductPrice(item) : 0;
  }

  getTotalSum() {
    return this.getTotalFullSum() - this.getTotalDiscountSum();
  }

  getTotalDiscountSum() {
    return this.inCart.reduce(((x,y) => x + ( y.product.price?.discount ? y.count * y.product.price.value * y.product.price.discount : 0)), 0);
  }

  getTotalFullSum() {
    return this.inCart.reduce(((x,y) => x + y.count * this.getProductPrice(y)), 0);
  }

  toggleCartPreview() {
    this.isOpen = !this.isOpen;
    this.closePreview.emit();
  }

  clearCartEmit() {
    this.clearCart.emit();
    this.closePreview.emit();
  }

  deleteProductFromCartEmit(productId: number) {
    this.deleteProductFromCart.emit(productId);
  }
}

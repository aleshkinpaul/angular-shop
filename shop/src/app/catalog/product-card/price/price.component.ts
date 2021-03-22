import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ProductPrice } from 'src/app/catalog/types/card'

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit, OnChanges {

  @Input() price!: ProductPrice;
  discountPrice!: number;

  ngOnChanges() {
    if (this.price.value) {
      this.discountPrice = this.price.discount ? Math.round(( 1 - this.price.discount ) * this.price.value) : this.price.value;
    }
  }

  constructor() { }

  ngOnInit(): void {    
  }

}

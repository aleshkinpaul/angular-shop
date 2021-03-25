import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../catalog/types/card'
import { products } from '../catalog/data/products.data'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {
  public productId: string;
  product: Product = { id: 0 };
  findedProduct: Product | undefined;
  isDiscount: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,    
  ) { 
    this.productId = route.snapshot.params['id'];
   }

  ngOnInit(): void {
    if (this.product.price) {
      this.isDiscount = !!this.product.price.discount;
    }
    this.findedProduct = products.find(x => x.id === Number(this.productId));
    (!this.findedProduct) ? this.router.navigateByUrl('/404') : this.product = this.findedProduct;
  }

  ngOnChanges() {
  }

  getProductPrice() {
    return this.product.price? this.product.price : { value: 0 };
  }

  ngOnChange() {
  }

  getProductIsAvailable() {
    return !!this.product.available;
  }

  getProductAvailableCount() {
    return this.product.available ? this.product.available : 0;
  }
}

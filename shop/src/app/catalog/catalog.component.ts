import { Component, OnInit, Output } from '@angular/core';

import { Product } from './types/card';
import { products } from './data/products.data';

import { ToggleParams, Toggle } from './types/toggle';
import { InCart } from './types/cart';
import { togglesParams } from './data/toggles.data';

import { ToggleTitles } from 'src/app/catalog/data/consts'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  inCart: Array<InCart> = [];
  catalogProducts: Array<Product> = products;
  togglesParams: Array<ToggleParams> = togglesParams;
  toggles: Array<Toggle> = [];

  constructor() { }

  ngOnInit(): void {
    this.getTogglesState();
  }

  addToCart(productToCart: Product) {
    let productIndexInCart = (this.inCart.length > 0) ? this.inCart.findIndex(x => x.product.id === productToCart.id) : -1;
    ( productIndexInCart !== -1 ) ? this.inCart[productIndexInCart].count += 1 : this.inCart.push({ count: 1, product: productToCart });
    console.log('inCart: ', this.inCart);
  }

  getTogglesState() {
    this.toggles = this.togglesParams.map(x => {
      return {
        toggleParams: x,
        isActive: x.label === ToggleTitles.SHOW_ALL_ITEMS,
      }
    });
  };

  filterProductList(toggles: Array<Toggle>) {
    let filteredCatalog = products;
    console.log(toggles);

    toggles.forEach(toggle => {
      if (toggle.toggleParams.label === ToggleTitles.SHOW_ALL_ITEMS) filteredCatalog = products;
      if (toggle.toggleParams.label === ToggleTitles.AVAILABLE_ITEMS) filteredCatalog = filteredCatalog.filter(product => !!product.available);
      if (toggle.toggleParams.label === ToggleTitles.DISCOUNT_ITEMS) filteredCatalog = filteredCatalog.filter(product => !!product.price?.discount);
    });

    this.catalogProducts = filteredCatalog;
    console.log('this.catalogProducts: ', this.catalogProducts);
  }

  clearCart() {
    this.inCart = [];
  }

  deleteProductFromCart(productId: number) {
    let productIndexInCart = this.inCart.findIndex(x => x.product.id === productId);
    this.inCart.splice(productIndexInCart, 1);
  }
}

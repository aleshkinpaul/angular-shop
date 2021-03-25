import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardModule } from './product-card/product-card.module';
import { ToggleModule } from './toggle/toggle.module';
import { CartModule } from './cart/cart.module';
import { CatalogComponent } from './catalog.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProductCardModule,
    ToggleModule,
    CartModule,
  ],
  exports: [CatalogComponent],
})
export class CatalogModule { }

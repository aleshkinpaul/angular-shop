import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardModule } from '../catalog/product-card/product-card.module';
import { CatalogModule } from '../catalog/catalog.module';
import { ProductComponent } from '../product/product.component';
import { ProductCardComponent } from '../catalog/product-card/product-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    RouterModule,
    CatalogModule,
    ProductCardModule,
  ],
  exports: [ProductComponent]
})
export class ProductModule { }

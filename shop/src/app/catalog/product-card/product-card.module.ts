import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from './product-card.component';
import { ButtonModule } from './button/button.module';
import { BageModule } from './bage/bage.module';
import { PriceModule } from './price/price.module';
import { RatingModule } from './rating/rating.module';
import { ButtonFavouriteModule } from './button-favourite/button-favourite.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    BageModule,
    PriceModule,
    RatingModule,
    ButtonFavouriteModule,
  ],
  exports: [ProductCardComponent]
})
export class ProductCardModule { }

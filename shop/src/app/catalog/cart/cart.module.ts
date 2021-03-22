import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BageModule } from './bage/bage.module';
import { PreviewModule } from './preview/preview.module';
import { CartComponent } from './cart.component';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    BageModule,
    PreviewModule,
  ],
  exports: [CartComponent],
})
export class CartModule { }

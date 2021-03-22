import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { PreviewComponent } from './preview.component';

@NgModule({
  declarations: [PreviewComponent],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports: [PreviewComponent],
})
export class PreviewModule { }

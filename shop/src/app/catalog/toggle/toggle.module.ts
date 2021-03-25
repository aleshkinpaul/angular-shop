import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ToggleComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [ToggleComponent],
})
export class ToggleModule { }
